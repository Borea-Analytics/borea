import secrets
import string
from typing import Optional

try:
    import yaml
    from yaml.loader import FullLoader
except ImportError:
    raise ImportError(
        "Missing pyyaml! Install it with command `python3 -m pip install pyyaml` to run this configurator."
    )

FILE_PATH = "docker-compose.yml"


def generate_secret_key() -> str:
    """Securely generate random 50 ASCII letters and digits."""
    return "".join(secrets.choice(string.ascii_letters + string.digits) for _ in range(50))


def read_config() -> dict:
    with open(FILE_PATH, "r") as file:
        config = yaml.load(file, Loader=FullLoader)
    if not config:
        raise ValueError("Current docker-compose.yml is malformed! Get a fresh one from the Borea repository.")
    return config


def save_config(config: dict, *, host_port: int, secret_key: str, behind_proxy: bool) -> None:
    with open(FILE_PATH, "w") as file:
        try:
            config["services"]["web"]["ports"] = [f"{host_port}:8000"]
            config["services"]["web"]["environment"]["SECRET_KEY"] = secret_key
            if behind_proxy == True:
                config["services"]["web"]["environment"]["IS_BEHIND_PROXY"] = "true"
            else:
                pass
        except KeyError:
            raise ValueError("Current docker-compose.yml is malformed! Get a fresh one from the Borea repository.")
        yaml.dump(
            config, stream=file, indent=4,
        )

def input_is_behind_proxy(n: str, default: str = 'false') -> bool:
    print(
        f"\n{n}. Will you be running Borea behind a proxy? [y/N]\n"
    )
    while True:
        try:
            is_proxy = input().strip().lower()
            if is_proxy == "y":
                return True
            else:
                return False
        except Exception as e:
            print(f"Error: {e}. Please enter 'y' or 'n'.")

def input_host_port(n: int, default: int = 80) -> int:
    print(
        f"\n{n}. On which host port should the Borea server be exposed? (default: {default})\n"
        "Leave on default value if not using a reverse proxy such as nginx.\n"
        "Otherwise select a higher-numbered port (like 8000)\n"
        "and point your reverse proxy server to it.\n"
    )
    while True:
        try:
            host_port_raw = input()
            return int(host_port_raw) if host_port_raw else default
        except ValueError:
            print("Port must be a number! Please try again.\n")


def input_secret_key(n: int) -> str:
    print(
        f"\n{n}. Do you have a specific Django SECRET_KEY? (default: random)\n"
        "Django uses the SECRET_KEY variable for e.g. encrypting sessions and tokens,\n"
        "so it's important that it is secret and only yours.\n"
        "If you don't have one already, skip this and let us generate you one.\n"
    )
    return input() or "".join(secrets.choice(string.ascii_letters + string.digits) for _ in range(50))


def main():
    host_port: Optional[int] = None
    secret_key: Optional[str] = None
    config: dict = read_config()

    print("Let's build the right production docker-compose.yml for your Borea instance.")

    print("\nIf you're OK with a step's default value, you can skip by pressing Enter/Return.")

    behind_proxy = input_is_behind_proxy(1)
    host_port = input_host_port(2)
    secret_key = input_secret_key(3)

    save_config(config, host_port=host_port, secret_key=secret_key, behind_proxy=behind_proxy)

    print("\nConfigured and saved docker-compose.yml. You can now use it in production.")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nConfiguration canceled.")
