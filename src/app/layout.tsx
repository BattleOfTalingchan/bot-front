import { Prompt, Sarabun } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

const sarabun = Sarabun({
  preload: true,
  weight: ['400', '500', '700'],
  subsets: ['latin', 'thai'],
  variable: '--font-sarabun',
})

const prompt = Prompt({
  preload: true,
  weight: ['400', '500', '700'],
  subsets: ['latin', 'thai'],
  variable: '--font-prompt',
})

export const metadata: Metadata = {
  title: 'Battle of Talingchan',
  description: 'Battle of Talingchan',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
    // <body className={inter.className}>{children}</body>
    // </html>
    <html lang="en">
      <body className={`${prompt.className} ${sarabun.variable} min-h-screen`}>{children}</body>
    </html>
  )
}
