import type { Metadata } from 'next'

import { Suspense } from 'react'
import { Inter } from 'next/font/google'

import Header from '../components/Header/Header'

import Loading from './loading'
import './app.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Challenge',
  description: 'Meli',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Header />
        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
