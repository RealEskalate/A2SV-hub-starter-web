# Use an official Node.js runtime as the base image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if you use Yarn)
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Tailwind CSS and its dependencies
RUN npx tailwindcss init

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app will run on (default for Next.js is 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]