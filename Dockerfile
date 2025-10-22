# Stage 1: Build the Vite app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the Vite project (outputs to /app/dist)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
