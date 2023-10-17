import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleTag from '@/app/components/GoogleTag'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Website',
  description: 'Hey! Check out my cool website!',
  openGraph: {
    title: 'My Website',
    description: 'Hey! Check out my cool website!',
    url: 'https://my-website.com',
    siteName: 'My Website',
    images: '/logo.svg',
  },
  twitter: {
    title: 'My Website',
    description: 'Hey! Check out my cool website!',
    images: '/logo-optimized-for-twitter-og.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTag />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
