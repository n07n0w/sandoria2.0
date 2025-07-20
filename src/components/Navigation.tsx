'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/webinars', label: 'Вебинары' },
    { href: '/intensive', label: 'Интенсивы' },
    { href: '/about', label: 'О нас' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Логотип */}
          <Link href="/" className="text-2xl font-bold text-gradient">
            Sandoria
          </Link>

          {/* Десктоп навигация */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-primary-dark hover:text-primary-light transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="https://sandoria.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Перейти в песочницу
            </a>
          </div>

          {/* Мобильное меню кнопка */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-primary-dark hover:bg-accent-sand transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-4 text-primary-dark hover:bg-accent-sand rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="px-4"
                >
                  <a 
                    href="https://sandoria.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                  >
                    Перейти в песочницу
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation 