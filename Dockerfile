# Use Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start the dev server
CMD ["npm", "run", "dev", "--", "--host"]