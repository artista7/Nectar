# blur-admin base image
FROM node:6.2.2
MAINTAINER Shanty

RUN npm install --global gulp-cli && \
    npm install --global bower
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY bower.json /app
RUN npm install && \
    bower install -F --allow-root --config.interactive=false
COPY . /app

ENV GULP_COMMAND serve:dist

ENTRYPOINT ["sh", "-c"]
CMD ["gulp $GULP_COMMAND"]