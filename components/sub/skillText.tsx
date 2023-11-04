'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0]'
        >
            {/*<SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
            <h1 className="Welcome-text text-[15px]">The tech I've worked with!</h1> */}
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[100px] text-white font-bold mt-[10px] text-center mb-[15px]'
        >
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Technical Skills </span>
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='text-[20px] text-bold text-white mb-10 mt-[1px] text-center'>
            <i>Frontend, Backend, Automation, Development</i>
        </motion.div>
    </div>
  )
}

export default SkillText