'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import ExperienceCard from '../sub/experienceCard'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from '@/constants'

const WorkExperience = () => {
    return (
        <div className='p-[100px] pb-[225px] pt-[165px]' id='experience'>
            <div className=''>
                <motion.div variants={slideInFromTop} className='text-4xl font-medium text-center text-white'>
                    <span className='text-transparent text-[100px] text-bold font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                        Experience
                    </span>
                </motion.div>
            </div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline lineColor={ 'white' }>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default WorkExperience