FROM redis:latest

MAINTAINER Shanty

#change as per apt for build
#ENV APP_ENV development

COPY ./.docker/config/redis.${APP_ENV}.conf /etc/redis.config

EXPOSE 6379

ENTRYPOINT ["redis-server", "etc/redis.config"]


#To build dockerfile
#docker build -f docker-redis.dockerfile --tag fucksprouts/redis