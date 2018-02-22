FROM nginx:latest

MAINTAINER shanty

#copy custom nginx config
COPY ./.docker/config/nginx.conf /etc/nginx/nginx.conf

#copy static files
#COPY ./blur-admin/src/assets/ /var/www/public

#copy certificates

#ccopy DHE handshake d dhparam

#make cert key only available to owner

EXPOSE 80 
#443

ENTRYPOINT ["nginx"]

CMD ["-g", "daemon off;"]

#To build dockerfile
#docker build -f docker-nginx.dockerfile --tag fucksprouts/nginx