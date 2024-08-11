FROM node:16 AS builder

# Create app directory
WORKDIR /app

# Copy all files to the container
COPY . .

# Install app dependencies
RUN npm install

# Build the app
RUN npm run build

FROM node:16

WORKDIR /app

# Copy all files from the builder stage
COPY --from=builder /app /app

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
