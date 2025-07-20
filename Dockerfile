# Dockerfile

# Этап 1: Сборка зависимостей
# На этом этапе устанавливаются все зависимости, включая devDependencies.
# Это необходимо для сборки приложения.
FROM node:18-alpine AS deps
WORKDIR /app

# Копируем package.json и lock-файл
COPY package.json package-lock.json* ./

# Устанавливаем зависимости с помощью npm ci для чистоты и воспроизводимости
RUN npm ci

# Этап 2: Сборка приложения
# На этом этапе собирается production-ready бандл Next.js.
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Устанавливаем переменную окружения для Next.js, чтобы он знал, что работает в production.
# Это отключает некоторые dev-only фичи.
ENV NODE_ENV=production

# Запускаем сборку
RUN npm run build

# Этап 3: Production-образ
# Этот этап создает финальный, легкий и безопасный образ.
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Отключаем телеметрию Next.js для чистоты логов и экономии ресурсов
ENV NEXT_TELEMETRY_DISABLED 1

# Создаем группу и пользователя для запуска приложения
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем только необходимые для запуска файлы из standalone-сборки
COPY --from=builder /app/public ./public

# Устанавливаем правильные права на скопированные файлы
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Устанавливаем пользователя для запуска приложения
USER nextjs

# Устанавливаем порт, на котором будет работать приложение
EXPOSE 3000

# Команда для запуска приложения. Используем встроенный в Next.js сервер.
CMD ["node", "server.js"] 