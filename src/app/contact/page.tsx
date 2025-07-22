'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MessageCircle, Clock, MapPin, Send } from 'lucide-react'
import { useEffect, useState } from 'react'

const ContactPage = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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
      const { ...restProps } = props // Removed initial, whileInView from here
      return (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          {...restProps}
        >
          {children}
        </motion.div>
      )
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sandoria.org@gmail.com',
      href: 'mailto:sandoria.org@gmail.com',
      description: 'Для общих вопросов и предложений'
    },
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 968 749 99 87',
      href: 'tel:+79687499987',
      description: 'По вопросам вебинаров и записей'
    },
    {
      icon: MessageCircle,
      title: 'Обратная связь',
      value: 'Форма на сайте',
      href: '#contact-form',
      description: 'Быстрая связь через форму'
    }
  ]

  const workingHours = [
    { day: 'Понедельник - Пятница', time: '10:00 - 18:00 МСК' },
    { day: 'Суббота', time: '10:00 - 15:00 МСК' },
    { day: 'Воскресенье', time: 'Выходной' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-light section-padding text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              isHero={true}
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
                Контакты
              </h1>
              
              <p className="text-xl text-accent-sand">
                Мы всегда рады ответить на ваши вопросы и обсудить сотрудничество
              </p>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Способы связи */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <AnimatedComponent
              className="text-3xl font-bold text-primary-dark mb-12 text-center"
            >
              Способы связи
            </AnimatedComponent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method) => {
                const IconComponent = method.icon
                return (
                  <AnimatedComponent
                    key={method.title}
                    className="card text-center group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="bg-accent-sand p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-300">
                      <IconComponent size={32} className="text-primary-dark group-hover:text-accent-sand transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-3">
                      {method.title}
                    </h3>
                    <a 
                      href={method.href}
                      className="text-lg text-primary-light hover:text-primary-dark transition-colors font-medium mb-3 block"
                    >
                      {method.value}
                    </a>
                    <p className="text-accent-black text-sm">
                      {method.description}
                    </p>
                  </AnimatedComponent>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Рабочее время и форма */}
      <section className="section-padding bg-accent-sand">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Рабочее время */}
              <AnimatedComponent
                className="card"
              >
                <div className="flex items-center mb-6">
                  <Clock className="text-primary-dark mr-4" size={32} />
                  <h3 className="text-2xl font-bold text-primary-dark">
                    Время работы
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {workingHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-accent-sand/50">
                      <span className="text-accent-black font-medium">{schedule.day}</span>
                      <span className="text-primary-dark font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary-dark/5 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-primary-dark mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-primary-dark">Местоположение</p>
                      <p className="text-accent-black">Мы работаем онлайн со всеми регионами</p>
                    </div>
                  </div>
                </div>
              </AnimatedComponent>

              {/* Форма обратной связи */}
              <AnimatedComponent
                className="card"
                id="contact-form"
              >
                <div className="flex items-center mb-6">
                  <Send className="text-primary-dark mr-4" size={32} />
                  <h3 className="text-2xl font-bold text-primary-dark">
                    Написать нам
                  </h3>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-primary-dark font-medium mb-2">
                      Ваше имя
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-primary-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-primary-dark font-medium mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-primary-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                      placeholder="ваш@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-primary-dark font-medium mb-2">
                      Тема обращения
                    </label>
                    <select className="w-full p-3 border border-primary-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light">
                      <option value="">Выберите тему</option>
                      <option value="webinar">Вопрос о вебинарах</option>
                      <option value="intensive">Интенсивы</option>
                      <option value="sandbox">Онлайн-песочница</option>
                      <option value="cooperation">Сотрудничество</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-primary-dark font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 border border-primary-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light resize-none"
                      placeholder="Расскажите подробнее о вашем вопросе..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="btn-primary w-full text-center"
                  >
                    <Send className="inline mr-2" size={20} />
                    Отправить сообщение
                  </button>
                </form>
                
                <p className="text-sm text-primary-light mt-4 text-center">
                  Мы ответим в течение 24 часов в рабочие дни
                </p>
              </AnimatedComponent>
            </div>
          </div>
        </div>
      </section>

      {/* Дополнительная информация */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedComponent
              className="text-3xl font-bold mb-8"
            >
              Присоединяйтесь к профессиональному сообществу
            </AnimatedComponent>
            
            <AnimatedComponent
              className="text-xl text-accent-sand mb-8"
            >
              Станьте частью сообщества психологов, которые стремятся к развитию 
              и внедрению современных технологий в терапевтическую практику
            </AnimatedComponent>
            
            <AnimatedComponent
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/webinars" className="btn-secondary text-lg px-8 py-4">
                Посмотреть вебинары
              </Link>
              <Link href="/intensive" className="btn-primary text-lg px-8 py-4">
                Узнать об интенсивах
              </Link>
            </AnimatedComponent>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage 