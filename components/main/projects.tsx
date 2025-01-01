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
                width={1000}
                height={1000}
                project_link = "https://docs.google.com/document/d/16hnnu0o__C1A-FUVzJwtuiF1q9_kjVvE3sSVBvgWtvM/edit?tab=t.0"
                skills='Flask, Python, HTML, CSS, JS, OAuth'
                description="Finds MIDI Piano tutorials for Spotify playlists. Leverages Spotify API and YouTubeAPI."/>
            <ProjectCard 
                src="/LandingPage.png"
                title="Systematic Invesment Calculator"
                width={1000}
                height={1000}
                project_link = "https://github.com/deep-patel21/Systematic-Investment-Planning"
                skills='HTML, CSS, JS, Chart.js'
                description="Highly customizable finance portfolio visualization tool. Allows year-by-year growth analysis."/>
            <ProjectCard 
                src="/moviedb_react_version.png"
                title="MovieDB"
                width={1000}
                height={1000}
                project_link = "https://github.com/deep-patel21/MovieDB"
                skills='SQL, UNIX, React.js, Oracle'
                description="Database for all things film. Normalized. Visualized. Term project in CPS510."/>
            <ProjectCard 
                src="/gpp.jpg"
                title="General Purpose Processor"
                width={1000}
                height={1000}
                project_link = "https://docs.google.com/document/d/1cN_pdQd3iZfBBKUJ1B91pH61KHAbWlCQ3FtCHFPSqdI/edit?tab=t.0"
                skills='VHDL, Apache Quartus'
                description="Combines decoders, FSMs, registers, and an ALU to create a GPP. Term project in COE328."/>
        </div>
        <div className='h-full py-[20px] w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard 
                src="/autoCl.png"
                title="AutoCL Generator"
                width={1000}
                height={1000}
                project_link = "https://github.com/deep-patel21/Automated-Cover-Letters"
                skills='Python, docx2pdf, openpyxl, pathlib'
                description="Input Excel file of companies, get folders with auto-made CV in .docx and .pdf"/>
            <ProjectCard 
                src="/multisimproject.png"
                title="Multi-Stage BJT Amplifier"
                width={1000}
                height={1000}
                project_link = "http://www.github.com/deep-patel21/"
                skills='National Instruments Multisim'
                description="2-Stage amplifer to improve circuit capabilities under given contraints. Term project in ELE404."/>
            <ProjectCard 
                src="/engineeringcalc1.png"
                title="Engineering Economics Calculator"
                width={1000}
                height={1000}
                project_link = "https://github.com/deep-patel21/Engineering-Economics-Calculator/"
                skills='C (Programming Language)'
                description="Useful for econ. homework practice. 7 Options: compounding, sinking fund, capt. recovery, etc."/>
            <ProjectCard 
                src="/deeppatelwebsitesc.jpg"
                title="Personal Portfolio Website"
                width={1000}
                height={1000}
                project_link = "https://github.com/deep-patel21/Portfolio-Website-v2"
                skills='Next.js, TailwindCSS, Three.js'
                description="Modern website with functional contact form, animations, etc. as a personal showcase of skills."/>
        </div>
        <div className='h-full py-[20px] w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard 
                src="/sorting.png"
                title="Sorting Algorithms Visualizer"
                width={1000}
                height={1000}
                project_link = "https://github.com/deep-patel21/Sorting-Visualizer/"
                skills='Python, Pygame, Algorithms'
                description="Helps users visualize sorting algorithms. Use keyboard switches to cycle options."/>
            <ProjectCard 
                src="/f1mouse.png"
                title="F1 Video Game Mouse Steering"
                width={1000}
                height={1000}
                project_link = "https://github.com/deep-patel21/F1-22-Mouse-Steering-Clone"
                skills='Python, vJoy, FreePIE'
                description="Script to enable users without Xbox controllers to play F1 racing with PC mouse steering."/>
            <ProjectCard 
                src="/bookstore1.png"
                title="Bookstore POS Application"
                width={1000}
                height={1000}
                project_link = "https://github.com/deep-patel21/COE528-Term-Project"
                skills='Java, JavaFX, Figma, Design Patterns'
                description="POS application for owners to manage inventory and customers to buy books. Has login and serialization."/>    
            <ProjectCard 
                src="/trafficlightsarduino.png"
                title="Automated Traffic Light Controller"
                width={1000}
                height={1000}
                project_link = "http://www.github.com/deep-patel21/"
                skills='Arduino UNO, Circuits'
                description="Automated traffic light system. Object detection through ultrasonic sensors."/>    
        </div> 
    </div>
  )
}

export default Projects