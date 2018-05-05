# blur-admin base image
FROM node:6.2.2
MAINTAINER Shanty

RUN npm install --global gulp-cli && \
    npm install --global bower
RUN mkdir -p /app
WORKDIR /app

COPY ./blur-admin/package.json /app
COPY ./blur-admin/bower.json /app
RUN npm install && \
    bower install -F --allow-root --config.interactive=false
COPY ./blur-admin/ /app

ENV GULP_COMMAND serve:dist
EXPOSE 3000
ENTRYPOINT ["sh", "-c"]
CMD ["gulp $GULP_COMMAND"]