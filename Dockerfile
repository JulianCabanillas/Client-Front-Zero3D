# Etapa 1 – Construye el front
FROM node:20.12-alpine AS builder
WORKDIR /app
COPY Client-Front-Zero3D/package*.json ./
RUN npm install
COPY Client-Front-Zero3D .
RUN npm run build          

# Etapa 2 – Nginx “slim” con los estáticos
FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY Nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80