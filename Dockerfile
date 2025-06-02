# Client-Front-Zero3D/Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build        
CMD ["npm", "run", "dev"]

