// src/app/layout.tsx

import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Borse Artigianali',
  description: 'E-commerce di borse fatte a mano all\'uncinetto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
