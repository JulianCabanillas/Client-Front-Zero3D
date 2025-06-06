# ---------- 1ª ETAPA: compilar el front ----------
FROM node:20-alpine AS builder      
WORKDIR /app                        

# Copiamos solo los manifests → hace caché de npm ci
COPY package*.json ./
RUN npm install                          

# Ahora sí copiamos el resto del código fuente
COPY . .

# Lanza el build de producción.  Ajusta si tu script se llama distinto
RUN npm run build
# Al acabar tendrás la carpeta /app/dist con los ficheros estáticos optimizados


# ---------- 2ª ETAPA: imagen final súper-ligera ----------
FROM nginx:1.27-alpine              
# Copiamos la carpeta dist que generó la 1ª etapa
COPY --from=builder /app/dist /usr/share/nginx/html

# (Opcional) tu propia configuración de Nginx
# COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80                           
CMD ["nginx", "-g", "daemon off;"]  
