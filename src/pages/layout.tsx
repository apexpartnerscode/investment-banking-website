import { Manrope } from 'next/font/google'
import React from 'react'

const manrope = Manrope({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={manrope.className}>
      <body>{children}</body>
    </html>
  )
}
