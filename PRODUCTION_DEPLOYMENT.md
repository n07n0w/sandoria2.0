# 🚀 Production Deployment Guide для TimeWebCloud

## Диагностика проблем

### Основные причины проблем на production:

1. **Проблемы с SSR/Hydration**
   - `isClient` проверки могут работать по-разному
   - Framer Motion анимации могут блокировать отображение
   - Различия между server и client рендерингом

2. **Проблемы с Node.js версией**
   - TimeWebCloud может использовать другую версию Node.js
   - Несовместимость с Next.js 15.4.2

3. **Проблемы с зависимостями**
   - Отсутствие Sharp для оптимизации изображений
   - Конфликты версий пакетов

## 🔧 Исправления для TimeWebCloud

### 1. Обновленная конфигурация Next.js

```javascript
// next.config.js - обновлена для лучшей совместимости
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
}
```

### 2. Dockerfile оптимизирован

- Добавлены git и libc6-compat для лучшей совместимости
- Исправлены права доступа к файлам
- Добавлен healthcheck
- Оптимизирована установка зависимостей

### 3. Package.json обновлен

- Добавлены production скрипты
- Указаны конкретные версии engines
- Добавлен browserslist для оптимизации

## 🚨 Критические изменения для исправления

### Проблема с AnimatedComponent

**ПРОБЛЕМА**: `isClient` может не работать корректно на production из-за различий в SSR.

**РЕШЕНИЕ**: Обновить все AnimatedComponent для безопасного SSR:

```typescript
const AnimatedComponent = ({ children, isHero = false, ...props }) => {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    // Всегда показываем контент на SSR
    const { className } = props
    return (
      <div 
        className={className as string} 
        style={{ opacity: 1, transform: 'none' }}
      >
        {children}
      </div>
    )
  }
  
  // Client-side: включаем анимации
  return <motion.div {...props}>{children}</motion.div>
}
```

### Альтернативное решение: Использование dynamic imports

```typescript
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
)
```

## 📋 Чеклист для развертывания

### Перед развертыванием:

- [ ] `npm run build` - проверка сборки
- [ ] `npm run start:prod` - тест production локально
- [ ] Проверка всех страниц на видимость контента
- [ ] Проверка мобильной версии
- [ ] Тест производительности

### Переменные окружения:

```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
HOSTNAME=0.0.0.0
```

### Команды для TimeWebCloud:

```bash
# Установка зависимостей
npm ci --only=production

# Сборка
npm run build

# Запуск
npm run start:prod
```

## 🔍 Отладка проблем

### Логи для проверки:

1. **Ошибки сборки**:
   ```bash
   npm run build 2>&1 | tee build.log
   ```

2. **Ошибки запуска**:
   ```bash
   npm run start:prod 2>&1 | tee start.log
   ```

3. **Проверка портов**:
   ```bash
   netstat -tlnp | grep :3000
   ```

### Типичные ошибки:

- **"Cannot find module"** - проблемы с зависимостями
- **"Hydration failed"** - различия SSR/CSR
- **"Port already in use"** - конфликт портов
- **"Module not found: Can't resolve"** - проблемы с путями

## 🛠 Альтернативные варианты развертывания

### 1. Static Export (если подходит)

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

### 2. Vercel (рекомендуется)

- Автоматическое развертывание из GitHub
- Оптимизирован для Next.js
- Бесплатный тариф доступен

### 3. Railway

- Простое развертывание из Docker
- Автоматическое масштабирование
- Поддержка Node.js 20

## 🔄 Процесс обновления

1. **Тестирование локально**:
   ```bash
   npm run build && npm run start:prod
   ```

2. **Коммит изменений**:
   ```bash
   git add .
   git commit -m "Fix production deployment issues"
   git push
   ```

3. **Развертывание на TimeWebCloud**

## 📞 Поддержка

Если проблемы продолжаются:

1. Проверьте логи TimeWebCloud
2. Свяжитесь с техподдержкой TimeWebCloud
3. Рассмотрите альтернативные hosting решения

---

**Последнее обновление**: Январь 2025  
**Версия Next.js**: 15.4.2  
**Версия Node.js**: 20.x 