# Use the official Python image as the base image
FROM nikolaik/python-nodejs:latest as builder

# Install TypeScript
RUN npm install -g typescript

# Set the working directory in the container
WORKDIR /app

# Using docker image layers for faster builds
COPY package.json ./
RUN npm install

COPY ./ ./
RUN npm run build

COPY ./src/assets ./dist/assets

# Use CMD to start your application
CMD ["npm", "start"]