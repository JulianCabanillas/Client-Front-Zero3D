# 1) Etapa de construcción con Node: genera /app/dist
FROM node:18-alpine AS builder
WORKDIR /app

# Copia archivos de package para instalar dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del código y genera el build en /app/dist
COPY . .
RUN npm run build

# 2) Etapa final: servidor Nginx que sólo sirve los archivos estáticos
FROM nginx:alpine
# Elimina la configuración default de Nginx (opcional, si vas a usar tu default.conf personalizado)
RUN rm /etc/nginx/conf.d/default.conf

# Crea carpeta de destino (ya existe /usr/share/nginx/html, pero queda claro)
RUN mkdir -p /usr/share/nginx/html

# Copia los archivos estáticos generados por builder a la carpeta de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Si tienes un default.conf personalizado, cópialo también (ajusta la ruta si hiciera falta):
# COPY ./default.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 para el servicio HTTP
EXPOSE 80

# Comando para mantener nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]