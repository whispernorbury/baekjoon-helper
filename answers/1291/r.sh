#!bin/bash
docker build -t dlaustn .
docker run -it --rm --name docker_python dlaustn