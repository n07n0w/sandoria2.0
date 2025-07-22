# ⚡ Быстрый старт для TimeWebCloud

## 🚨 КРИТИЧНО: Исправлена ошибка "Module not found"

Проблема была в Docker сборке - теперь все TypeScript пути работают корректно.

## 📋 Инструкция (3 минуты)

### 1. Клонируйте обновленный код:
```bash
git clone https://github.com/n07n0w/sandoria2.0.git
cd sandoria2.0
```

### 2. Установите зависимости:
```bash
npm ci
```

### 3. Соберите проект:
```bash
NODE_ENV=production npm run build
```

### 4. ⚠️ ВАЖНО - Запустите standalone версию:
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

## ✅ Что исправлено

- ✅ TypeScript пути `@/` теперь работают в Docker
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

1. Проверьте Node.js версию (должна быть 20.x)
2. Убедитесь, что используете `node .next/standalone/server.js`
3. Проверьте логи TimeWebCloud на ошибки

---

**Готово к развертыванию!** 🚀 