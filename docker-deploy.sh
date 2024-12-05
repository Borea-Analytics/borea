#!/bin/bash

# Exit immediately on error
set -e

# Variables
PROJECT_TITLE="Borea Analytics"
DOCKER_COMPOSE_FILE="docker-compose.yml"
DOMAIN=""

# Functions
function prompt_user() {
  echo "Welcome to the $PROJECT_TITLE setup script!"

  # Prompt for domain
  read -p "Enter your domain (e.g., example.com): " DOMAIN

  # Ask if they want to install Caddy
  read -p "Would you like us to install and configure Caddy for you? (y/N): " install_caddy
  if [[ ! "$install_caddy" =~ ^[Yy][Ee][Ss]$ ]]; then
    echo "Continuing setup..."
  fi
}

function install_packages() {
  echo "Updating system and installing required packages..."
  sudo apt update && sudo apt install -y \
    debian-keyring \
    debian-archive-keyring \
    apt-transport-https \
    curl \
    lsof \
    ca-certificates \
    python3 \
    python3-pip
}

function install_docker() {
  echo "Installing Docker..."

  # Add Docker GPG key and repository
  sudo install -m 0755 -d /etc/apt/keyrings
  sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
  sudo chmod a+r /etc/apt/keyrings/docker.asc
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

  # Install Docker
  sudo apt update && sudo apt install -y \
    docker-ce \
    docker-ce-cli \
    containerd.io \
    docker-buildx-plugin \
    docker-compose-plugin

  echo "Docker version: $(docker --version)"
}

function configure_docker_compose() {
  echo "Configuring docker-compose.yml..."
  if [[ ! -f "$DOCKER_COMPOSE_FILE" ]]; then
    echo "Error: $DOCKER_COMPOSE_FILE not found!"
    exit 1
  fi

  # Run docker-compose-config.sh
  chmod +x docker-compose-config.sh
  ./docker-compose-config.sh
}

function start_docker() {
  echo "Starting Docker Compose..."
  sudo docker compose up -d || { echo "Docker Compose failed to start"; exit 1; }
}

function setup_caddy() {
  echo "Setting up Caddy server..."

  # Add Caddy's APT repository
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list

  # Install Caddy
  sudo apt update && sudo apt install -y caddy

  # Create or overwrite the Caddyfile
  echo "Creating /etc/caddy/Caddyfile..."
  cat <<EOF | sudo tee /etc/caddy/Caddyfile > /dev/null
$DOMAIN {
    encode gzip
    reverse_proxy 127.0.0.1:8000
}
EOF

  # Validate Caddyfile syntax
  echo "Validating Caddyfile..."
  sudo caddy validate --config /etc/caddy/Caddyfile
  if [[ $? -ne 0 ]]; then
    echo "Error: Caddyfile validation failed! Please check the configuration."
    exit 1
  fi

  # Ensure the Caddyfile exists
  if [[ ! -f /etc/caddy/Caddyfile ]]; then
    echo "Error: /etc/caddy/Caddyfile not found!"
    exit 1
  fi

  # Reload Caddy to apply the configuration
  echo "Reloading Caddy service..."
  sudo systemctl reload caddy

  echo "Caddy setup is complete and configuration is valid!"
}

# Main Script Execution
prompt_user
configure_docker_compose
install_packages
if [[ "$install_caddy" =~ ^[Yy][Ee][Ss]$ ]]; then
  setup_caddy
fi
install_docker
start_docker

echo ""
echo "Setup complete! $PROJECT_TITLE is now running."
