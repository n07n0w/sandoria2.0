'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react'
import { useEffect, useState } from 'react'

const PrivacyPage = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Fallback component for server-side rendering
  const AnimatedComponent = ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => {
    if (!isClient) {
      // For SSR, render with visible styles but preserve className
      const { className, ...restProps } = props
      return <div className={className as string} style={{ opacity: 1, transform: 'translateY(0)' }}>{children}</div>
    }
    return <motion.div {...props}>{children}</motion.div>
  }

  const sections = [
    {
      icon: Shield,
      title: 'Защита данных',
      content: 'Мы используем современные методы шифрования для защиты ваших персональных данных и информации о клиентах.'
    },
    {
      icon: Lock,
      title: 'Конфиденциальность',
      content: 'Все данные терапевтических сессий и личная информация пользователей строго конфиденциальны и не передаются третьим лицам.'
    },
    {
      icon: Eye,
      title: 'Прозрачность',
      content: 'Мы четко объясняем, какие данные собираем, как их используем и храним, обеспечивая полную прозрачность процесса.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-light section-padding text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Link href="/" className="inline-flex items-center text-accent-sand hover:text-white transition-colors mb-6">
                <ArrowLeft size={20} className="mr-2" />
                Вернуться на главную
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Соглашение об использовании
              </h1>
              
              <p className="text-xl text-accent-sand">
                Конфиденциальность и безопасность — наши приоритеты
              </p>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Основные принципы */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary-dark mb-12 text-center"
            >
              Наши принципы
            </AnimatedComponent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {sections.map((section, index) => {
                const IconComponent = section.icon
                return (
                  <AnimatedComponent
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="card text-center"
                  >
                    <div className="bg-accent-sand p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <IconComponent size={32} className="text-primary-dark" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-4">
                      {section.title}
                    </h3>
                    <p className="text-accent-black leading-relaxed">
                      {section.content}
                    </p>
                  </AnimatedComponent>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Детали соглашения */}
      <section className="section-padding bg-accent-sand">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center mb-6">
                <FileText className="text-primary-dark mr-4" size={32} />
                <h2 className="text-2xl font-bold text-primary-dark">
                  Основные положения
                </h2>
              </div>

              <div className="space-y-6 text-accent-black">
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">
                    1. Сбор и использование данных
                  </h3>
                  <p className="leading-relaxed">
                    Мы собираем только необходимую информацию для предоставления наших услуг: 
                    контактные данные для регистрации на вебинары и интенсивы, данные сессий 
                    в песочнице для сохранения прогресса работы с клиентами.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">
                    2. Защита конфиденциальности
                  </h3>
                  <p className="leading-relaxed">
                    Все данные терапевтических сессий шифруются и доступны только вам. 
                    Мы не имеем доступа к содержанию ваших сессий и не анализируем их. 
                    Ваша профессиональная тайна остается неприкосновенной.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">
                    3. Хранение данных
                  </h3>
                  <p className="leading-relaxed">
                    Данные хранятся на защищенных серверах с применением современных 
                    стандартов безопасности. Вы можете в любой момент удалить свои данные 
                    или запросить их копию.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">
                    4. Права пользователей
                  </h3>
                  <p className="leading-relaxed">
                    У вас есть право на доступ, исправление, удаление ваших персональных данных. 
                    Вы также можете ограничить или запретить их обработку в любое время.
                  </p>
                </div>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Вопросы о конфиденциальности?
            </AnimatedComponent>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-accent-sand mb-8"
            >
              Свяжитесь с нами, если у вас есть вопросы о защите данных или использовании платформы
            </motion.p>
            
            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="mailto:sandoria.org@gmail.com"
                className="btn-secondary text-lg px-8 py-4"
              >
                Написать нам
              </a>
            </AnimatedComponent>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage 