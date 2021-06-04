# Create image based on the official Node 10 image from dockerhub
FROM node:12
# Create a directory where our app will be placed
RUN mkdir -p /app
# Change directory so that our commands run inside this new directory
WORKDIR /app
# Get all the code needed to run the app
COPY . /app/
# Copy dependency definitions
#COPY package*.json /app/

RUN rm -rf node_modules
RUN rm -rf dist
RUN rm -rf e2e

# Install dependecies
RUN npm install

# Expose the port the app runs in
EXPOSE 4201
# Serve the app
CMD ["npm", "start"]
