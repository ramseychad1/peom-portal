# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built application from build stage
COPY --from=build /app/dist/peom-portal/browser ./browser

# Expose port (Railway will assign the PORT env variable)
EXPOSE 3000

# Start the application - serve will use PORT env variable automatically
CMD ["serve", "-s", "browser"]
