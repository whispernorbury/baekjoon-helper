#!bin/bash
docker build -t pm .
docker run -it --rm --name pokemon pm