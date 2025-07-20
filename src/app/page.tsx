'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, Users, Save, Shield, Play, Book, Calendar } from 'lucide-react'

const HomePage = () => {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-sand via-white to-primary-light/10 section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-primary-dark mb-6"
            >
              Sandoria
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-light mb-8"
            >
              пространство для психологов, работающих в онлайн-формате
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-accent-black mb-12 leading-relaxed"
            >
              Онлайн-песочница, обучающие вебинары и очные интенсивы — всё, что нужно 
              для глубокой, символической и профессиональной работы с клиентами на расстоянии.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Онлайн-песочница секция */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-primary-dark mb-6"
              >
                🧸 Sandoria — профессиональный инструмент для онлайн sandplay-терапии
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-accent-black mb-8 leading-relaxed max-w-4xl mx-auto"
              >
                Sandoria — это инновационная платформа, созданная специально для психологов, которые работают в онлайн-формате. 
                Платформа полностью соответствует принципам классической sandplay-терапии Доры Калфф, но адаптирована для цифровой среды.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Видео */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/BTlKJ-7JDrI?autoplay=1&mute=1&loop=1&playlist=BTlKJ-7JDrI&controls=0&showinfo=0&rel=0&modestbranding=1"
                    title="Sandoria - Демонстрация работы онлайн песочницы"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>

              {/* Описание возможностей */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-3">
                    Полноценная работа в онлайн-формате
                  </h3>
                  <p className="text-accent-black leading-relaxed">
                    Проводите глубокие символические сеансы с клиентами удаленно. 
                    Sandoria сохраняет всю терапевтическую мощь традиционной песочной терапии, 
                    добавляя удобство цифрового формата.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-3">
                    Обширная коллекция символов
                  </h3>
                  <p className="text-accent-black leading-relaxed">
                    Работайте с тысячами тщательно отобранных фигурок и символов. 
                    От архетипических образов до современных объектов — всё необходимое 
                    для создания значимых терапевтических картин.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-3">
                    Сохранение и анализ прогресса
                  </h3>
                  <p className="text-accent-black leading-relaxed">
                    Документируйте каждый сеанс, сохраняйте снимки песочниц, 
                    отслеживайте динамику работы клиента. Ваша профессиональная 
                    деятельность становится более структурированной и эффективной.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-accent-sand/20 p-8 rounded-xl text-center"
            >
              <p className="text-primary-dark italic text-lg leading-relaxed">
                <strong>Историческая справка:</strong> Название Sandoria — символическое, 
                связанное с именем Доры Калфф, которая разработала метод песочной терапии. 
                Мы с глубоким уважением относимся к наследию юнгианской традиции и стремимся 
                сохранить её суть в цифровую эпоху.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Преимущества песочницы */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-primary-light">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Удобный и интуитивно понятный инструмент
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-accent-sand max-w-3xl mx-auto"
            >
              Разработан специально для специалистов, работающих с метафорами, 
              символами и глубинным бессознательным.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
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
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-sand">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary-dark mb-6"
            >
              Готовы начать работу?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-accent-black mb-8"
            >
              Присоединяйтесь к профессиональному сообществу психологов, 
              которые используют современные технологии для глубокой терапевтической работы.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 