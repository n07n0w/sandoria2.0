import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sandoria - Профессиональная онлайн песочница для психологов',
  description: 'Онлайн-песочница, обучающие вебинары и очные интенсивы для психологов, работающих в онлайн-формате. Sandplay-терапия на расстоянии.',
  keywords: 'sandplay, песочная терапия, онлайн психотерапия, психологи, вебинары, интенсивы',
  authors: [{ name: 'Юлия Крюкова и Варвара Кислова' }],
  openGraph: {
    title: 'Sandoria - Профессиональная онлайн песочница',
    description: 'Онлайн-песочница для sandplay-терапии, вебинары и интенсивы для психологов',
    type: 'website',
    locale: 'ru_RU',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 