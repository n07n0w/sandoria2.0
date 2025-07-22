import React from 'react'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/webinars', label: 'Вебинары' },
    { href: '/intensive', label: 'Интенсивы' },
    { href: '/about', label: 'О нас' },
    { href: '/sandbox', label: 'Песочница' },
  ]

  const socialLinks = [
    { href: 'mailto:sandoria.org@gmail.com', label: 'Email', icon: Mail },
    { href: 'tel:+79687499987', label: 'Телефон', icon: Phone },
  ]

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* О проекте */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent-sand">Sandoria</h3>
            <p className="text-primary-light leading-relaxed">
              Профессиональная платформа для онлайн sandplay-терапии, 
              вебинаров и интенсивов для психологов.
            </p>
          </div>

          {/* Навигация */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent-sand">Навигация</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-primary-light hover:text-accent-sand transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent-sand">Контакты</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    className="flex items-center space-x-3 text-primary-light hover:text-accent-sand transition-colors duration-300"
                  >
                    <IconComponent size={20} />
                    <span>{social.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Нижняя секция */}
        <div className="border-t border-primary-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-light text-sm">
            © {currentYear} Sandoria. Все права защищены.
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm justify-center md:justify-end">
            <Link 
              href="/legal" 
              className="text-primary-light hover:text-accent-sand transition-colors duration-300"
            >
              Правовая информация
            </Link>
            <Link 
              href="/privacy" 
              className="text-primary-light hover:text-accent-sand transition-colors duration-300"
            >
              Конфиденциальность
            </Link>
            <Link 
              href="/contact" 
              className="text-primary-light hover:text-accent-sand transition-colors duration-300"
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 