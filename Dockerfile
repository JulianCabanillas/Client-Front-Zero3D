FROM node:20-alpine AS builder      
WORKDIR /app                        
COPY package*.json ./
RUN npm install                          
COPY . .
RUN npm run build


FROM alpine:3.18
WORKDIR /dist
RUN mkdir -p /dist
COPY --from=builder /app/dist /dist
CMD ["true"]