# Etapa 1: Instalación de dependencias
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Etapa 2: Compilación de la aplicación
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Etapa 3: Ejecución en producción
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copiar archivos esenciales y assets standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]