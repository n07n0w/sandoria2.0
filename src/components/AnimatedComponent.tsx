'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedComponentProps {
  children: React.ReactNode
  isHero?: boolean
  className?: string
  [key: string]: unknown
}

const AnimatedComponent = ({ children, isHero = false, className, ...props }: AnimatedComponentProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // На сервере всегда показываем контент без анимации
  if (!isMounted) {
    return (
      <div 
        className={className} 
        style={{ opacity: 1, transform: 'none' }}
      >
        {children}
      </div>
    )
  }

  // На клиенте показываем с анимацией
  if (isHero) {
    // Для hero секций - немедленные анимации
    return (
      <motion.div
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  } else {
    // Для scroll секций - видимые по умолчанию с тонкой анимацией
    return (
      <motion.div
        className={className}
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
}

export default AnimatedComponent 