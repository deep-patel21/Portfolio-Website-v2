import EncryptionAnimation from '@/components/main/encryptionAnimation'
import Hero from '@/components/main/hero'
import Projects from '@/components/main/projects'
import Skills from '@/components/main/skills'
import Image from 'next/image'

export default function Home() {
  return (
  <main className='h-full w-full'>
    <div className='flex flex-col gap-20'>
      <Hero />
      <Skills />
      <EncryptionAnimation />
      <Projects />
    </div>
  </main>
  )
}
