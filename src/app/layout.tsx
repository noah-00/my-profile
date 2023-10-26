import { Providers } from './provider'

import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: `Noah's profile`,
  description: `Noah's profile`
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
