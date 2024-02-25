#!bin/bash
docker build -t lotto .
docker run -it --rm --name lt lotto