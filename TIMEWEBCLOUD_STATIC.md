# 🎯 Статическое развертывание на TimeWebCloud

## ✅ Сборка прошла успешно, но нужен static export

TimeWebCloud ожидает `index.html` в папке `/out`, но Next.js создал server приложение.

## 🔧 ИСПРАВЛЕНИЕ: Используйте статический экспорт

### Шаг 1: Замените конфигурационные файлы

```bash
# В TimeWebCloud или локально:
cp next.config.static.js next.config.js
cp package.static.json package.json
```

### Шаг 2: Обновите команды сборки

В TimeWebCloud Frontend настройках:

**Build Command:**
```bash
npm ci && npm run build
```

**Output Directory:** 
```
out
```

**Environment Variables:**
```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

## 📋 Что изменилось

### next.config.js:
```javascript
{
  output: 'export',        // Статический экспорт вместо standalone
  distDir: 'out',         // Папка для статических файлов
  trailingSlash: true,    // SEO оптимизация
  images: {
    unoptimized: true     // Без оптимизации изображений
  }
}
```

### package.json:
```json
{
  "scripts": {
    "build": "next build"  // Автоматически создаст /out папку
  }
}
```

## 🎯 Результат

После этих изменений:
- ✅ Next.js создаст папку `/out` с `index.html`
- ✅ TimeWebCloud найдет статические файлы
- ✅ Сайт заработает как SPA (Single Page Application)
- ✅ Все анимации и функционал сохранятся

## ⚡ Быстрое исправление

1. **Остановите** текущее развертывание
2. **Обновите код**:
   ```bash
   git clone https://github.com/n07n0w/sandoria2.0.git
   cd sandoria2.0
   cp next.config.static.js next.config.js
   cp package.static.json package.json
   git add .
   git commit -m "Switch to static export for TimeWebCloud"
   git push
   ```
3. **Повторите развертывание** в TimeWebCloud

## 🔄 Альтернатива

Если хотите сохранить SSR, переключитесь на **Vercel**:
```bash
npm i -g vercel
vercel
```

---

**Статический экспорт решит проблему с `/out` папкой!** 🚀 