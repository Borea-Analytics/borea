#!/bin/bash

set -ex

sudo apt update
sudo apt install -y python3-venv

# Check and install python3-venv if necessary
check_venv_installed

# Create a virtual environment in a directory called 'env'
python3 -m venv env

# Activate the virtual environment
source env/bin/activate

# Install pyyaml within the virtual environment
pip install pyyaml

# Print an empty line for clarity
echo

# Run your Python script using the virtual environment's python
python3 docker-compose-config.py

# Deactivate the virtual environment after use
deactivate
