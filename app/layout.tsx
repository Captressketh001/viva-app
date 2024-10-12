import type { Metadata } from 'next'

import '@/app/ui/globals.css';
import { Toaster  } from "react-hot-toast";

import { epilogue } from '@/app/ui/font'

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
      <body className={`${epilogue.className} antialiased`}>
        {children}
        <Toaster/>
      </body>
    </html>
  )
}
