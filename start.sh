service=`docker service ls -f NAME=node-app | wc -l`

if [[ service -gt 1 ]];then
        docker service update --image nodeapp:$TAG node-app;
else
        docker service create --name node-app -p 8081:3000 nodeapp:$TAG
fi
