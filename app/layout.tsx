import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'TimeTravel Agency | Expériences temporelles de luxe',
  description: 'Découvrez des époques légendaires grâce à des expériences temporelles de luxe. Voyagez au-delà du temps avec nos services de voyage temporel haut de gamme.',
  keywords: ['voyage dans le temps', 'voyage de luxe', 'expériences temporelles', 'destinations historiques'],
}

export const viewport: Viewport = {
  themeColor: '#0d0c0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
