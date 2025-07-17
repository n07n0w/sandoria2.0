'use client'

import { motion } from 'framer-motion'
import { Heart, Lightbulb, Users, Mail } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Живой контакт',
      description: 'Сохранение человечности и эмоциональной связи в онлайн-формате'
    },
    {
      icon: Lightbulb,
      title: 'Символическая глубина',
      description: 'Работа с образами, метафорами и архетипическими символами'
    },
    {
      icon: Users,
      title: 'Профессиональное сообщество',
      description: 'Объединение психологов для обмена опытом и развития'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-light section-padding text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Как родилась Sandoria
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-accent-sand leading-relaxed"
            >
              История создания платформы, которая объединяет технологии, 
              терапию и профессиональный подход
            </motion.p>
          </div>
        </div>
      </section>

      {/* История создания */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
                История создания
              </h2>
              
              <div className="bg-accent-sand/20 rounded-xl p-8 text-left">
                <p className="text-lg text-accent-black leading-relaxed mb-6">
                  Идея создать Sandoria зародилась после совместного доклада про Аниму 
                  на общем обучении по детскому психоанализу у Анны Валерьевны Скавитиной, 
                  как отклик на внутреннюю потребность сохранить и трансформировать 
                  символическую глубину и живой контакт в онлайн-формате.
                </p>
                
                <p className="text-lg text-accent-black leading-relaxed">
                  Мы поняли, что современные технологии могут не заменить, а дополнить 
                  традиционные методы терапии, создав новые возможности для глубокой 
                  работы с бессознательным на расстоянии.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Авторы */}
      <section className="section-padding bg-accent-sand">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary-dark mb-12 text-center"
            >
              Авторы проекта
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="bg-primary-dark p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Users size={40} className="text-accent-sand" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  Юлия Крюкова
                </h3>
                <p className="text-accent-black leading-relaxed">
                  Практикующий психолог, аналитический психотерапевт. 
                  Специалист по работе с детьми и подростками в онлайн-формате.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="bg-primary-dark p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Users size={40} className="text-accent-sand" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  Варвара Кислова
                </h3>
                <p className="text-accent-black leading-relaxed">
                  Практикующий психолог, аналитический психотерапевт. 
                  Эксперт в области символической работы и sandplay-терапии.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-lg text-primary-dark font-semibold">
                Совместный опыт работы и глубокое понимание потребностей коллег 
                позволили создать инструмент, который действительно помогает 
                психологам в их профессиональной деятельности.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Философия */}
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
              Наша философия
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-primary-dark/5 rounded-xl p-8 mb-12 text-center"
            >
              <blockquote className="text-2xl text-primary-dark font-medium italic mb-6">
                «Sandoria — это не просто платформа. Это пространство, 
                где соединяются технологии, терапия и профессиональный подход. 
                Место, где можно быть рядом даже на расстоянии.»
              </blockquote>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-accent-sand p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <IconComponent size={32} className="text-primary-dark" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-4">
                      {value.title}
                    </h3>
                    <p className="text-accent-black leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Свяжитесь с нами
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-accent-sand mb-8"
            >
              Мы всегда открыты для диалога с коллегами и готовы ответить на ваши вопросы
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Mail className="text-accent-sand" size={32} />
                <div className="text-left">
                  <p className="text-accent-sand font-semibold">Email:</p>
                  <a 
                    href="mailto:sandoria.org@gmail.com"
                    className="text-white text-xl hover:text-accent-sand transition-colors"
                  >
                    sandoria.org@gmail.com
                  </a>
                </div>
              </div>
              
              <p className="text-primary-light">
                Напишите нам о ваших потребностях, вопросах или предложениях по сотрудничеству
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage 