# Create image based on the official Node 10 image from dockerhub
FROM node:10

RUN mkdir /usr/src/app 
WORKDIR /usr/src/app
# Copy dependency definitions
# Install dependecies

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

COPY . . 
