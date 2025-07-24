'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, Users, Save, Shield, Play, Book, Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const advantages = [
    {
      icon: Users,
      title: 'Работа онлайн',
      description: 'Работайте с клиентом в песочнице в реальном времени. Ведите сеансы так, как будто клиент находится рядом.'
    },
    {
      icon: Sparkles,
      title: 'Набор фигурок',
      description: 'Выбирайте из большого набора фигурок. Используйте разнообразные символы, образы и объекты.'
    },
    {
      icon: Save,
      title: 'Сохранение снимков',
      description: 'Сохраняйте снимки песочниц по папкам клиентов. Ваша работа всегда под рукой.'
    },
    {
      icon: Shield,
      title: 'Конфиденциальность',
      description: 'Гарантируйте конфиденциальность и безопасность. Все данные защищены.'
    }
  ]

  // Fallback component for server-side rendering
  const AnimatedComponent = ({ children, isHero = false, ...props }: { children: React.ReactNode; isHero?: boolean; [key: string]: unknown }) => {
    if (!isClient) {
      // For SSR, render with visible styles but preserve className
      const { className } = props
      return <div className={className as string} style={{ opacity: 1, transform: 'translateY(0)' }}>{children}</div>
    }
    
    // For hero sections, animate immediately. For scroll sections, use whileInView
    if (isHero) {
      return <motion.div {...props}>{children}</motion.div>
    } else {
      // For scroll animations, ensure they start visible and add subtle animation
      const { ...restProps } = props
      return (
        <motion.div 
          initial={{ opacity: 1, y: 0 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          {...restProps}
        >
          {children}
        </motion.div>
      )
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-sand via-white to-primary-light/10 section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedComponent 
              isHero={true}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-primary-dark mb-6"
            >
              Sandoria
            </AnimatedComponent>
            
            <AnimatedComponent
              isHero={true}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl md:text-2xl text-primary-light mb-8"
            >
              Платформа для работы психологов в онлайн-формате
            </AnimatedComponent>
            
            <AnimatedComponent
              isHero={true}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-accent-black mb-12 leading-relaxed"
            >
              Онлайн-песочница, обучающие вебинары и очные интенсивы — всё, что нужно 
              для глубокой, символической и профессиональной работы с клиентами на расстоянии.
            </AnimatedComponent>
            
            <AnimatedComponent
              isHero={true}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="https://sandoria.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                <Play className="inline mr-2" size={20} />
                Перейти в песочницу
              </a>
              <Link href="/webinars" className="btn-secondary text-lg px-8 py-4">
                <Book className="inline mr-2" size={20} />
                Вебинары
              </Link>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Онлайн-песочница секция */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <AnimatedComponent
                className="text-3xl md:text-4xl font-bold text-primary-dark mb-6"
              >
                Sandoria — профессиональный инструмент для онлайн sandplay-терапии
              </AnimatedComponent>
              
              <AnimatedComponent
                className="text-lg text-accent-black mb-8 leading-relaxed max-w-4xl mx-auto"
              >
                Sandoria — это инновационная платформа, созданная специально для психологов, которые работают в онлайн-формате. 
                Платформа полностью соответствует принципам классической sandplay-терапии Доры Калфф, но адаптирована для цифровой среды.
              </AnimatedComponent>
            </div>

            {/* Описание возможностей */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <AnimatedComponent
                className="text-center"
              >
                <div className="bg-accent-sand/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  Полноценная работа в онлайн-формате
                </h3>
                <p className="text-accent-black leading-relaxed">
                  Проводите глубокие символические сеансы с клиентами удаленно. 
                  Sandoria сохраняет всю терапевтическую мощь традиционной песочной терапии, 
                  добавляя удобство цифрового формата.
                </p>
              </AnimatedComponent>

              <AnimatedComponent
                className="text-center"
              >
                <div className="bg-accent-sand/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  Обширная коллекция символов
                </h3>
                <p className="text-accent-black leading-relaxed">
                  Работайте с тысячами тщательно отобранных фигурок и символов. 
                  От архетипических образов до современных объектов — всё необходимое 
                  для создания значимых терапевтических картин.
                </p>
              </AnimatedComponent>

              <AnimatedComponent
                className="text-center"
              >
                <div className="bg-accent-sand/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  Сохранение и анализ прогресса
                </h3>
                <p className="text-accent-black leading-relaxed">
                  Документируйте каждый сеанс, сохраняйте снимки песочниц, 
                  отслеживайте динамику работы клиента. Ваша профессиональная 
                  деятельность становится более структурированной и эффективной.
                </p>
              </AnimatedComponent>
            </div>


          </div>
        </div>
      </section>

      {/* Преимущества песочницы */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-primary-light">
        <div className="container-max">
          <div className="text-center mb-16">
            <AnimatedComponent
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Удобный и интуитивно понятный инструмент
            </AnimatedComponent>
            <AnimatedComponent
              className="text-xl text-accent-sand max-w-3xl mx-auto"
            >
              Разработан специально для специалистов, работающих с метафорами, 
              символами и глубинным бессознательным.
            </AnimatedComponent>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {advantages.map((advantage) => {
              const IconComponent = advantage.icon
              return (
                <AnimatedComponent
                  key={advantage.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent-sand p-3 rounded-lg">
                      <IconComponent size={24} className="text-primary-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {advantage.title}
                      </h3>
                      <p className="text-accent-sand leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </AnimatedComponent>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-sand">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedComponent
              className="text-3xl md:text-4xl font-bold text-primary-dark mb-6"
            >
              Готовы начать работу?
            </AnimatedComponent>
            
            <AnimatedComponent
              className="text-lg text-accent-black mb-8"
            >
              Присоединяйтесь к профессиональному сообществу психологов, 
              которые используют современные технологии для глубокой терапевтической работы.
            </AnimatedComponent>
            
            <AnimatedComponent
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="https://sandoria.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Попробовать песочницу
              </a>
              <Link href="/webinars" className="btn-secondary text-lg px-8 py-4">
                <Calendar className="inline mr-2" size={20} />
                Записаться на вебинар
              </Link>
            </AnimatedComponent>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 