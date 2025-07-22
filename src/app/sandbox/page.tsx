'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Construction, ArrowLeft, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const SandboxPage = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Fallback component for server-side rendering
  const AnimatedComponent = ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => {
    if (!isClient) {
      // For SSR, render with visible styles but preserve className
      const { className } = props
      return <div className={className as string} style={{ opacity: 1, transform: 'translateY(0)' }}>{children}</div>
    }
    return <motion.div {...props}>{children}</motion.div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-sand via-white to-primary-light/10">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedComponent
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Construction size={80} className="text-primary-dark mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Онлайн-песочница
            </h1>
            <h2 className="text-2xl text-primary-light mb-8">
              В разработке
            </h2>
          </AnimatedComponent>

          <AnimatedComponent
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card mb-12"
          >
            <h3 className="text-2xl font-semibold text-primary-dark mb-6">
              Что будет доступно в песочнице:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-dark rounded-full mt-2"></div>
                  <p className="text-accent-black">Совместная работа с клиентом в реальном времени</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-dark rounded-full mt-2"></div>
                  <p className="text-accent-black">Обширный набор фигурок и символов</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-dark rounded-full mt-2"></div>
                  <p className="text-accent-black">Различные текстуры песка и фонов</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-dark rounded-full mt-2"></div>
                  <p className="text-accent-black">Сохранение снимков песочниц</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-dark rounded-full mt-2"></div>
                  <p className="text-accent-black">Личный кабинет для организации работы</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-dark rounded-full mt-2"></div>
                  <p className="text-accent-black">Полная конфиденциальность данных</p>
                </div>
              </div>
            </div>
          </AnimatedComponent>

          <AnimatedComponent
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-primary-dark/5 rounded-xl p-8 mb-8"
          >
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              Следите за обновлениями
            </h3>
            <p className="text-accent-black mb-6">
              Мы активно работаем над созданием интуитивно понятной и профессиональной 
              онлайн-песочницы. Свяжитесь с нами, чтобы узнать о запуске первыми.
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <Mail className="text-primary-dark" size={24} />
              <a 
                href="mailto:sandoria.org@gmail.com"
                className="text-primary-dark hover:text-primary-light transition-colors font-semibold"
              >
                sandoria.org@gmail.com
              </a>
            </div>
          </AnimatedComponent>

          <AnimatedComponent
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/" className="btn-primary text-lg px-8 py-4">
              <ArrowLeft className="inline mr-2" size={20} />
              Вернуться на главную
            </Link>
            <Link href="/webinars" className="btn-secondary text-lg px-8 py-4">
              Посмотреть вебинары
            </Link>
          </AnimatedComponent>
        </div>
      </div>
    </div>
  )
}

export default SandboxPage 