# Multi-stage production build for TimeWebCloud
# Этап 1: Установка зависимостей
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat git
WORKDIR /app

# Копируем package.json и lock-файл
COPY package.json package-lock.json* ./

# Устанавливаем зависимости с оптимизацией для production
RUN npm ci --only=production --ignore-scripts

# Этап 2: Сборка приложения
FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat git
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Устанавливаем переменные окружения для production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV CI=true

# Отключаем telemetry и запускаем сборку
RUN npm run build

# Этап 3: Production runtime
FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Создаем пользователя для безопасности
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем необходимые файлы из builder
COPY --from=builder /app/public ./public

# Устанавливаем правильные права доступа для prerendered cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Копируем standalone файлы с правильными правами
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Переключаемся на непривилегированного пользователя
USER nextjs

EXPOSE 3000

# Healthcheck для контроля состояния контейнера
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node --version || exit 1

# Запуск приложения
CMD ["node", "server.js"] 