'use client'

import React from 'react'
import ProjectCard from '../sub/projectCard'
import { slideInFromRight } from '@/utils/motion'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='flex flex-col items-center py-2' id='projects'>
        <h1 className='text-[100px] pt-[30px] text-transparent font-bold text-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 z-[20]'>
            <span>My Projects</span>
        </h1>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='text-[20px] z-[20] top-0 text-bold text-white mb-10 mt-[1px] text-center'>
            <i>Personal/Academic ventures in Software/Hardware</i>
        </motion.div>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard 
                src="/Notes4YouMainScreen.png"
                title="Notes4You Music App"
                description="Flask Web Application, bringing the best MIDI Piano tutorials to user-made Spotify playlists."/>
            <ProjectCard 
                src="/LandingPage.png"
                title="Systematic Invesment Calculator"
                description="Highly customizable finance portfolio visualization tool. Allows year-by-year growth analysis."/>
            <ProjectCard 
                src="/deeppatelwebsitesc.jpg"
                title="Personal Portfolio Website"
                description="Modern website built using Next.js, Three.js, and TailwindCSS, as a personal showcase of merit."/>
            <ProjectCard 
                src="/gpp.jpg"
                title="General Purpose Processor"
                description="Combines decoders, FSMs, registers, and an ALU to create a GPP in VHDL."/>
        </div>
    </div>
  )
}

export default Projects