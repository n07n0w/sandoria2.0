/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Настройки для статического экспорта
  distDir: 'out',
  
  // Настройки безопасности
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Переменные окружения
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
}

module.exports = nextConfig 