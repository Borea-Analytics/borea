#!/bin/bash

set -ex
python3 -m pip install pyyaml --break-system-packages
echo
python3 docker-compose-config.py
