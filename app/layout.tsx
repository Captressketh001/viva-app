import type { Metadata } from 'next'

import '@/app/ui/globals.css';

import { inter } from '@/app/ui/font'

export const metadata: Metadata = {
  title: 'Viva',
  description: 'A solution for service providers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
