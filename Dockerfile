# Dockerfile

# Этап 1: Сборка зависимостей
FROM node:18-alpine AS deps
WORKDIR /app

# Копируем package.json и lock-файл
COPY package.json package-lock.json* ./

# Устанавливаем зависимости
RUN npm ci

# Этап 2: Сборка приложения
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Устанавливаем переменную окружения для production
ENV NODE_ENV=production

# Запускаем сборку
RUN npm run build

# Этап 3: Production-образ
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Создаем группу и пользователя
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем public файлы
COPY --from=builder /app/public ./public

# Копируем standalone файлы
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"] 