'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Scale, FileCheck, Users, AlertTriangle, Building, UserCheck } from 'lucide-react'
import { useEffect, useState } from 'react'

const LegalPage = () => {
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

  const legalSections = [
    {
      icon: Scale,
      title: 'Правовая основа',
      content: 'Деятельность платформы регулируется законодательством РФ, включая ФЗ &ldquo;О персональных данных&rdquo; и требования Роскомнадзора.'
    },
    {
      icon: FileCheck,
      title: 'Согласие на обработку',
      content: 'Регистрируясь на платформе, вы даете согласие на обработку персональных данных в соответствии с ФЗ-152.'
    },
    {
      icon: Users,
      title: 'Профессиональная этика',
      content: 'Платформа соответствует этическим стандартам психологической практики и требованиям профессиональных объединений РФ.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-light section-padding text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              isHero={true}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Link href="/" className="inline-flex items-center text-accent-sand hover:text-white transition-colors mb-6">
                <ArrowLeft size={20} className="mr-2" />
                Вернуться на главную
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Правовая информация
              </h1>
              
              <p className="text-xl text-accent-sand">
                Соответствие российскому законодательству и профессиональным стандартам
              </p>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Правовые принципы */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              className="text-3xl font-bold text-primary-dark mb-12 text-center"
            >
              Правовые основы работы платформы
            </AnimatedComponent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {legalSections.map((section) => {
                const IconComponent = section.icon
                return (
                  <AnimatedComponent
                    key={section.title}
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

      {/* Пользовательское соглашение */}
      <section className="section-padding bg-accent-sand">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              className="card"
            >
              <div className="flex items-center mb-6">
                <FileCheck className="text-primary-dark mr-4" size={32} />
                <h2 className="text-2xl font-bold text-primary-dark">
                  Пользовательское соглашение
                </h2>
              </div>

              <div className="space-y-6 text-accent-black">
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">
                    1. Общие положения
                  </h3>
                  <p className="leading-relaxed mb-3">
                    Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между 
                    администрацией платформы Sandoria и пользователями сервиса.
                  </p>
                  <p className="leading-relaxed">
                    Использование платформы означает полное и безоговорочное принятие пользователем 
                    условий настоящего Соглашения.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">
                    2. Регистрация и аккаунт пользователя
                  </h3>
                  <p className="leading-relaxed mb-3">
                    Для доступа к функциональности платформы пользователю необходимо пройти регистрацию, 
                    предоставив достоверную информацию о себе.
                  </p>
                  <p className="leading-relaxed">
                    Пользователь несет ответственность за сохранность своих учетных данных и за все 
                    действия, совершаемые под его аккаунтом.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">
                    3. Права и обязанности сторон
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-primary-dark mb-2">Права пользователя:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Получать доступ к образовательным материалам и инструментам платформы</li>
                        <li>Использовать песочницу для проведения терапевтических сессий</li>
                        <li>Получать техническую поддержку</li>
                        <li>Прекратить использование сервиса в любое время</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-dark mb-2">Обязанности пользователя:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Соблюдать этические нормы профессиональной деятельности</li>
                        <li>Не нарушать права третьих лиц</li>
                        <li>Не использовать платформу в противоправных целях</li>
                        <li>Соблюдать конфиденциальность информации о клиентах</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">
                    4. Персональные данные
                  </h3>
                  <p className="leading-relaxed mb-3">
                    Обработка персональных данных осуществляется в соответствии с Федеральным законом 
                    от 27.07.2006 № 152-ФЗ &ldquo;О персональных данных&rdquo;.
                  </p>
                  <p className="leading-relaxed">
                    Подробная информация об обработке персональных данных изложена в 
                    <Link href="/privacy" className="text-primary-dark font-medium hover:underline ml-1">
                      Политике конфиденциальности
                    </Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">
                    5. Ответственность
                  </h3>
                  <p className="leading-relaxed mb-3">
                    Администрация платформы не несет ответственности за результаты терапевтической 
                    деятельности пользователей и их взаимоотношения с клиентами.
                  </p>
                  <p className="leading-relaxed">
                    Пользователь самостоятельно несет ответственность за соблюдение профессиональных 
                    стандартов и этических норм в своей деятельности.
                  </p>
                </div>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Политика конфиденциальности */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              className="card"
            >
              <div className="flex items-center mb-6">
                <UserCheck className="text-primary-dark mr-4" size={32} />
                <h2 className="text-2xl font-bold text-primary-dark">
                  Согласие на обработку персональных данных
                </h2>
              </div>

              <div className="space-y-6 text-accent-black">
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">
                    Цели обработки персональных данных:
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Идентификация пользователя и предоставление доступа к сервисам</li>
                    <li>Обеспечение работы платформы и техническая поддержка</li>
                    <li>Информирование о новых услугах и образовательных программах</li>
                    <li>Выполнение обязательств по договору оказания услуг</li>
                    <li>Соблюдение требований законодательства РФ</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">
                    Правовые основания обработки:
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Согласие субъекта персональных данных (ст. 6 ФЗ-152)</li>
                    <li>Исполнение договора, стороной которого является субъект персональных данных</li>
                    <li>Осуществление правомочий оператора, предусмотренных законодательством</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">
                    Ваши права как субъекта персональных данных:
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Получение информации о составе и содержании персональных данных</li>
                    <li>Требование исключения или исправления неточных данных</li>
                    <li>Отзыв согласия на обработку персональных данных</li>
                    <li>Обжалование действий оператора в Роскомнадзоре или суде</li>
                  </ul>
                </div>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Информация об операторе */}
      <section className="section-padding bg-primary-light">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              className="card"
            >
              <div className="flex items-center mb-6">
                <Building className="text-primary-dark mr-4" size={32} />
                <h2 className="text-2xl font-bold text-primary-dark">
                  Информация об операторе персональных данных
                </h2>
              </div>

              <div className="space-y-4 text-accent-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-dark mb-3">
                      Контактная информация:
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> sandoria.org@gmail.com</p>
                      <p><strong>Телефон:</strong> +7 (968) 749-99-87</p>
                      <p><strong>По вопросам персональных данных:</strong> privacy@sandoria.org</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary-dark mb-3">
                      Время обработки обращений:
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p>Ответ на запросы: в течение 30 дней</p>
                      <p>Исправление данных: незамедлительно</p>
                      <p>Удаление данных: в течение 3 рабочих дней</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Предупреждения */}
      <section className="section-padding bg-yellow-50 border-l-4 border-yellow-400">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedComponent
              className="flex items-start"
            >
              <AlertTriangle className="text-yellow-600 mr-4 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  Важные уведомления
                </h3>
                <div className="space-y-3 text-yellow-700">
                  <p className="leading-relaxed">
                    <strong>Профессиональная ответственность:</strong> Платформа является инструментом 
                    для работы квалифицированных психологов. Ответственность за качество и безопасность 
                    терапевтических сессий несет специалист.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Техническая поддержка:</strong> Мы обеспечиваем работоспособность платформы, 
                    но не несем ответственности за технические сбои, находящиеся вне нашего контроля.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Изменения условий:</strong> Администрация оставляет за собой право изменять 
                    условия соглашения с уведомлением пользователей за 7 дней.
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
              className="text-3xl font-bold mb-6"
            >
              Вопросы по правовым аспектам?
            </AnimatedComponent>
            
            <AnimatedComponent
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-accent-sand mb-8"
            >
              Обращайтесь к нам по всем вопросам, связанным с правовыми аспектами использования платформы
            </AnimatedComponent>
            
            <AnimatedComponent
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="mailto:sandoria.org@gmail.com"
                className="btn-secondary text-lg px-8 py-4"
              >
                Общие вопросы
              </a>
              <a 
                href="mailto:privacy@sandoria.org"
                className="btn-primary text-lg px-8 py-4"
              >
                Вопросы по персональным данным
              </a>
            </AnimatedComponent>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LegalPage 