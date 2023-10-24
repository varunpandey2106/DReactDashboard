# Use the Node.js 18.17.0 Alpine image as a base image
FROM node:18.17.0-alpine

# Set the working directory
WORKDIR /frontend

# Copy all files from your current directory to the container
COPY . .

# Run the build command for your React app
RUN npm install && npm run build
