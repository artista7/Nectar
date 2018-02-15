FROM mongo:latest

MAINTAINER Shanty

RUN apt-get update && apt-get install -y netcat

COPY ./.docker/mongo_scripts /mongo_scripts

RUN chmod +rx /mongo_scripts/*.sh
RUN touch /.firstrun

EXPOSE 27017

ENTRYPOINT ["/mongo_scripts/run.sh"]

#To build dockerfile
#docker run -p 27017:27017 --env-file .docker/mongo/dev.env -d -name mongo fucksprouts/mongo