# ⚡ Быстрый старт для TimeWebCloud

## 🚨 КРИТИЧНО: Исправлена ошибка "Module not found"

Проблема была в Docker сборке с TypeScript путями `@/`. **Используйте обходное решение ниже.**

## 📋 Инструкция (3 минуты)

### Вариант 1: Простой Dockerfile (РЕКОМЕНДУЕТСЯ)

1. **Клонируйте обновленный код:**
```bash
git clone https://github.com/n07n0w/sandoria2.0.git
cd sandoria2.0
```

2. **Используйте простой Dockerfile:**
```bash
cp Dockerfile.simple Dockerfile
```

3. **Соберите Docker образ:**
```bash
docker build -t sandoria .
```

4. **Запустите контейнер:**
```bash
docker run -p 3000:3000 -e NODE_ENV=production sandoria
```

### Вариант 2: Без Docker (Прямая сборка)

1. **Клонируйте и установите:**
```bash
git clone https://github.com/n07n0w/sandoria2.0.git
cd sandoria2.0
npm ci
```

2. **Соберите проект:**
```bash
NODE_ENV=production npm run build
```

3. **⚠️ ВАЖНО - Запустите standalone версию:**
```bash
node .next/standalone/server.js
```

**НЕ используйте** `next start` - это не работает со `standalone` конфигурацией!

## 🔧 Переменные окружения

Установите в TimeWebCloud:
```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
HOSTNAME=0.0.0.0
```

## ⚠️ Проблема с TypeScript путями

**Причина**: Docker не может разрешить пути `@/` в некоторых средах

**Решение**: Код автоматически использует относительные пути:
- `@/styles/globals.css` → `../styles/globals.css`
- `@/components/Navigation` → `../components/Navigation`
- `@/components/Footer` → `../components/Footer`

## ✅ Что исправлено

- ✅ Относительные пути вместо TypeScript alias
- ✅ Упрощённый Dockerfile.simple для стабильной сборки
- ✅ Все файлы копируются корректно
- ✅ Standalone запуск настроен правильно
- ✅ SSR/Hydration больше не конфликтует
- ✅ Все страницы видны сразу (без скролла)

## 🎯 Результат

После развертывания все страницы должны:
- Загружаться мгновенно
- Показывать контент сразу
- Работать без ошибок в консоли

## 📞 Если не работает

1. **Используйте Dockerfile.simple**: `cp Dockerfile.simple Dockerfile`
2. **Проверьте Node.js версию** (должна быть 20.x)
3. **Убедитесь, что используете** `node .next/standalone/server.js`
4. **Проверьте логи TimeWebCloud** на ошибки

## 🔄 Альтернативные платформы

Если TimeWebCloud всё ещё не работает:

1. **Vercel** (рекомендуется для Next.js):
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Railway**:
   ```bash
   npm i -g @railway/cli
   railway deploy
   ```

3. **Render** - просто подключите GitHub репозиторий

---

**Готово к развертыванию!** 🚀 