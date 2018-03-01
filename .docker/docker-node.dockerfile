# Create image based on the official Node 6 image from the dockerhub
FROM node:6.2.2

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

#copying scripts
COPY ./.docker/node_scripts /node_scripts
RUN chmod +rx /node_scripts/*.sh

# Copy dependency definitions
COPY ./crypto-exchange-api/package.json /app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY ./crypto-exchange-api/ /app

# Expose the port the app runs in
EXPOSE 9000

# Serve the app
ENTRYPOINT ["/node_scripts/run.sh"]