# Stage 1: Build
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
COPY --from=build /app/dist ./dist
RUN npm install --only=production
EXPOSE 10000

CMD ["node", "dist/server.js"]
