FROM node:16

# Create app directory
WORKDIR /app

# Copy all files to the container
COPY . .

# Install app dependencies
RUN npm install

# Build the app
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
