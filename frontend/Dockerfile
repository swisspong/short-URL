# FROM node:16.10.0

# # RUN npm install -g npm@8.1.3
# # RUN npm install -g @vue/cli@4.5.15

# # RUN mkdir /srv/app && chown node:node /srv/app

# # USER node

# # WORKDIR /srv/app
# # Use an official Node.js runtime as a parent image
# # FROM node:14

# # Set the working directory in the container
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install project dependencies
# RUN npm install

# # Copy all project files to the working directory
# COPY . .

# # Build the React app
# RUN npm run build

# # Expose the port the app runs on
# EXPOSE 3000

# # Start the React app
# CMD ["npm", "start"]

# Use an official Node.js runtime as a parent image
#FROM node:14
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies, including development dependencies
RUN npm install -g npm@10.1.0
RUN npm install

# Expose the port the app runs on
EXPOSE 8080

# Start the React development server
CMD ["npm", "run", "dev"]