#!/bin/bash
if [[ `docker service ls -f NAME=node-app | wc -l` -gt 1 ]];then
        docker service update --image nodeapp:$TAG --replicas $PROC node-app;
else
        docker service create --name node-app -p 8081:3000 nodeapp:$TAG
fi
