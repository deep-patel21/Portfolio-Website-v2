import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/starBackground'
import Navbar from '@/components/main/navbar'
import Footer from '@/components/main/footer'
import EarthCanvas from '@/components/main/earth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deep Patel | Portfolio Website',
  description: 'Personal showcase of skills, experience, and projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
       {/* <Footer /> */}
        </body>
    </html>
  )
}


