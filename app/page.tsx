import Experience from '@/components/main/experience'
import Hero from '@/components/main/hero'
import Projects from '@/components/main/projects'
import Skills from '@/components/main/skills'
import WorkExperience from '@/components/main/workExperience'
import Image from 'next/image'

export default function Home() {
  return (
  <main className='h-full w-full'>
    <div className='flex flex-col gap-20'>
      <Hero />
      <Skills />
      {/*<Experience />*/}
      <WorkExperience />
      <Projects />
    </div>
  </main>
  )
}
