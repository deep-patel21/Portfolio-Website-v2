'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import Image from 'next/image'
import ProjectCard from '../sub/projectCard'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from '@/constants'

type ExperienceCardProps = {
    experience: {
        title: string;
        date: string;
        iconBg: string;
        website: string;
        icon: string;
        company_name: string;
        description: string;
    };
};

const Experience = () => {
  return (
    <div className='flex flex-row relative items-center justify-center top-0 w-full h-full' id='experience'>
        <div className='absolute w-auto h-auto top-0 z-[5]'>
            <motion.div
            variants={slideInFromTop}
            className='text-[100px] font-medium text-center text-white z-[5]'
            >
                <span className='text-transparent text-bold font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                    Work Experience
                </span>
            </motion.div>
        </div>
        <div className='relative'>
            <VerticalTimeline>
                {experiences.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle = {{
                                background: "#ff94a4",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem",
                            }}>
                            <h3 className='text-2xl font-bold text-white z-[20]'>Bell Canada</h3>
                            <p>{item.company_name}</p>
                            <p>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}             
            </VerticalTimeline>
        </div>
       {/* <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto'>
            <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
                <Image 
                    src="/LockTop.png"
                    alt="Lock Top"
                    width={50}
                    height={50}
                    className='translate-y-5 transitio-all duration-200 group:hover:translate-y-11'/>
                <Image 
                    src="/LockMain.png"
                    alt="Lock Main"
                    width={70}
                    height={70}
                    className='z-10 pb-[15px]'/>
            </div>
            <div className='Welcome-box px-[15px] py-[4px] z-[20] border border-[#7042f88b] my-[20px] opacity-[0.9] '>
                <h1 className='Welcome-text text-[12px]'>Encryption</h1>
            </div>
        </div> */}
       {/* <div className='absolute z-[20] bottom-[10px] px-[5]'>
            <div className='cursive text-[20px] font-medium text-center text-white'>
                Below are my work experiences!
            </div>
        </div> */}
       {/*} <div className='w-full flex items-start justify-center absolute'>
            <video 
                loop
                muted
                autoPlay
                playsInline
                preload='false'
                className='w-full h-auto'
                src='/encryption.webm'/>
    </div> */}
    </div>
  )
}

export default Experience