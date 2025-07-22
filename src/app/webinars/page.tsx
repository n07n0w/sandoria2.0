'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Book, Video, Phone, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

const WebinarsPage = () => {
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

  const webinarProgram = [
    {
      title: 'Теория',
      description: 'Юнг, Винникотт, Бион, Лемма и другие в контексте онлайн-психотерапии'
    },
    {
      title: 'Технические аспекты',
      description: 'Программы, гаджеты, кнопки и растерянность'
    },
    {
      title: 'Практика',
      description: 'Методическая основа онлайн-терапии'
    },
    {
      title: 'Разбор кейсов',
      description: 'Сопротивления, обрывы связи, родительский контроль'
    }
  ]

  const pricing = [
    {
      title: 'Одна встреча',
      price: '3 500 ₽',
      description: 'Доступ к одному вебинару по выбору'
    },
    {
      title: 'Весь цикл',
      price: '10 000 ₽',
      originalPrice: '14 000 ₽',
      description: '4 встречи + бонус при ранней оплате',
      popular: true
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-light section-padding text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Как работать онлайн — глубоко, надёжно и живо
            </AnimatedComponent>
            
            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-accent-sand mb-8 leading-relaxed"
            >
              Мы делимся тем, как адаптировать психоаналитический подход к онлайн-формату: 
              что происходит с переносом, как работает экран и как выстраивается поле.
            </AnimatedComponent>

            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="https://forms.gle/N6YuYZjFkHCti9CD6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                <ExternalLink className="inline mr-2" size={20} />
                Зарегистрироваться
              </a>
              <a href="tel:+79687499987" className="btn-primary text-lg px-8 py-4">
                <Phone className="inline mr-2" size={20} />
                Связаться: 8 968 749 99 87
              </a>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Детали цикла */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                «Онлайн-терапия: пространство, игра, взаимодействие»
              </h2>
              <div className="bg-accent-sand/20 rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-center space-x-3">
                    <Users className="text-primary-dark" size={24} />
                    <div>
                      <p className="font-semibold text-primary-dark">Ведущие:</p>
                      <p className="text-accent-black">Варвара Кислова и Юлия Крюкова</p>
                      <p className="text-sm text-primary-light">Аналитические психологи</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-primary-dark" size={24} />
                    <div>
                      <p className="font-semibold text-primary-dark">Даты:</p>
                      <p className="text-accent-black">4–7 августа</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="text-primary-dark" size={24} />
                    <div>
                      <p className="font-semibold text-primary-dark">Время:</p>
                      <p className="text-accent-black">16:00–18:00 (МСК)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Video className="text-primary-dark" size={24} />
                    <div>
                      <p className="font-semibold text-primary-dark">Формат:</p>
                      <p className="text-accent-black">Онлайн</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedComponent>

            {/* Программа */}
            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-primary-dark mb-8 text-center">
                Программа включает:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webinarProgram.map((item, index) => (
                  <AnimatedComponent
                    key={item.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card"
                  >
                    <Book className="text-primary-dark mb-4" size={32} />
                    <h4 className="text-xl font-semibold text-primary-dark mb-3">
                      {item.title}
                    </h4>
                    <p className="text-accent-black leading-relaxed">
                      {item.description}
                    </p>
                  </AnimatedComponent>
                ))}
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Стоимость */}
      <section className="section-padding bg-accent-sand">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary-dark mb-12 text-center"
            >
              Стоимость участия
            </AnimatedComponent>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {pricing.map((plan, index) => (
                <AnimatedComponent
                  key={plan.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`card relative ${plan.popular ? 'ring-2 ring-primary-dark' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-dark text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Рекомендуем
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-primary-dark mb-4">
                      {plan.title}
                    </h4>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-primary-dark">
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-lg text-primary-light line-through ml-2">
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-accent-black mb-6">
                      {plan.description}
                    </p>
                  </div>
                </AnimatedComponent>
              ))}
            </div>

            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary-dark/10 rounded-xl p-6 text-center"
            >
              <h4 className="text-xl font-semibold text-primary-dark mb-3">
                🎁 Бонус при оплате до 25 июля
              </h4>
              <p className="text-accent-black">
                Доступ к записям теоретических блоков
              </p>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Форматы */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary-dark mb-8 text-center"
            >
              Доступные форматы
            </AnimatedComponent>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedComponent
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <Video className="text-primary-dark mb-4 mx-auto" size={48} />
                <h4 className="text-xl font-semibold text-primary-dark mb-4">
                  Записи прошедших вебинаров
                </h4>
                <p className="text-accent-black mb-6">
                  Получите доступ к архиву полезных материалов
                </p>
                <a href="tel:+79687499987" className="btn-primary">
                  Связаться: 8 968 749 99 87
                </a>
              </AnimatedComponent>

              <AnimatedComponent
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <Calendar className="text-primary-dark mb-4 mx-auto" size={48} />
                <h4 className="text-xl font-semibold text-primary-dark mb-4">
                  Предстоящий цикл
                </h4>
                <p className="text-accent-black mb-6">
                  Примите участие в живых вебинарах с возможностью вопросов
                </p>
                <a 
                  href="https://forms.gle/N6YuYZjFkHCti9CD6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Зарегистрироваться
                </a>
              </AnimatedComponent>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebinarsPage 