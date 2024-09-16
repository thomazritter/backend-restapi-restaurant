# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Start PostgreSQL (you need a docker-compose file for this)
RUN docker-compose up -d

# Apply Prisma migrations
RUN npx prisma migrate dev

# Seed the database
RUN npx prisma db seed

# Expose the port the app runs on
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "start:dev"]
