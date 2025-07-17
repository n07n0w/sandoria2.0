'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Heart, Camera, MessageCircle } from 'lucide-react'

const IntensivePage = () => {
  const features = [
    {
      icon: Users,
      title: 'Для детских психологов',
      description: 'Любых терапевтических направлений'
    },
    {
      icon: Heart,
      title: 'Живой контакт',
      description: 'Пространство для совместного развития'
    },
    {
      icon: MessageCircle,
      title: 'Обмен опытом',
      description: 'Уникальная возможность общения с коллегами'
    }
  ]

  const testimonials = [
    {
      text: "Интенсив подарил мне новое понимание работы с образами и символами. Атмосфера была невероятно поддерживающей.",
      author: "Анна В., детский психолог"
    },
    {
      text: "Благодаря интенсиву я открыла для себя новые методы работы с телом в детской терапии. Очень рекомендую!",
      author: "Мария С., психотерапевт"
    },
    {
      text: "Прекрасная возможность углубить свои знания и встретить единомышленников. Уже жду следующего интенсива.",
      author: "Елена К., аналитический психолог"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-sand via-white to-primary-light/10 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-primary-dark mb-6"
            >
              🌿 Очные летние интенсивы
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-primary-light mb-8"
            >
              для детских психологов
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-accent-black mb-12 leading-relaxed"
            >
              Пространство для живого контакта, совместного развития, работы с образами, 
              телом и символами. Мы собираемся вместе на несколько дней летом в Подмосковье.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Особенности интенсива */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary-dark mb-12 text-center"
            >
              Что делает наш интенсив особенным
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={feature.title}
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
                      {feature.title}
                    </h3>
                    <p className="text-accent-black leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary-dark/5 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                Приглашенные спикеры
              </h3>
              <p className="text-lg text-accent-black">
                Уважаемые коллеги поделятся своим опытом и знаниями 
                в области детской психотерапии и работы с символами
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Предстоящий интенсив */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Предстоящий интенсив
              </h2>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="flex items-center space-x-4">
                    <Calendar className="text-accent-sand" size={32} />
                    <div>
                      <p className="font-semibold text-accent-sand text-lg">Даты:</p>
                      <p className="text-white text-xl">5-7 июня 2026 года</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-accent-sand" size={32} />
                    <div>
                      <p className="font-semibold text-accent-sand text-lg">Место:</p>
                      <p className="text-white text-xl">Северный Кунсангар</p>
                      <p className="text-primary-light">Подмосковье</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-xl text-accent-sand mb-8">
                Подробности и регистрация будут доступны ближе к дате проведения
              </p>
              <a 
                href="mailto:sandoria.org@gmail.com" 
                className="btn-secondary text-lg px-8 py-4"
              >
                Узнать подробности
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Фото и отзывы */}
      <section className="section-padding bg-accent-sand">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary-dark mb-12 text-center"
            >
              Впечатления участников
            </motion.h2>

            {/* Плейсхолдер для фото */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 mb-12 text-center"
            >
              <Camera size={48} className="text-primary-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-dark mb-4">
                📷 Фотографии с прошлого интенсива
              </h3>
              <p className="text-accent-black">
                Здесь будут размещены фотографии с предыдущих интенсивов, 
                показывающие атмосферу и рабочий процесс
              </p>
            </motion.div>

            {/* Отзывы */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary-dark mb-8 text-center">
                💬 Отзывы участников
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6"
                  >
                    <MessageCircle className="text-primary-dark mb-4" size={24} />
                    <p className="text-accent-black mb-4 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <p className="text-primary-dark font-semibold">
                      — {testimonial.author}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary-dark mb-6"
            >
              Присоединяйтесь к нашему сообществу
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-accent-black mb-8"
            >
              Станьте частью профессионального сообщества детских психологов, 
              стремящихся к развитию и обмену опытом
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="mailto:sandoria.org@gmail.com" 
                className="btn-primary text-lg px-8 py-4"
              >
                Связаться с нами
              </a>
              <a 
                href="/webinars" 
                className="btn-secondary text-lg px-8 py-4"
              >
                Посмотреть вебинары
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IntensivePage 