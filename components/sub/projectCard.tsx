'use client'

import Image from 'next/image';
import React from 'react'
import { RxGithubLogo } from 'react-icons/rx';

interface Props {
    src: string;
    title: string;
    description: string;   
    width: number;
    height: number; 
    project_link: string;
    skills: string;
}

const ProjectCard = ({src, title, description, width, height, project_link, skills}: Props) => {
  return (
      <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group hover:ring-2 ring-[#6033ba]'>
          <a href={project_link} target='_blank' rel='noopener noreferrer'><Image 
              src={src}
              alt={title}
              width={width}
              height={height}
              className='w-full'/></a>
          <div className='flex flex-col p-[0px]'>
            <div className='relative p-4'>
                <h1 className='text-2xl font-semibold text-white'>{title}</h1>
                <p className='mt-2 text-white'>{description}</p>
            </div>
            <div className='z-[20] p-[8px] flex flex-row relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
              <div className='p-[7px]'>
                <a href={project_link} target='_blank' rel='noopener noreferrer'><Image  
                  src='/github.png'
                  alt='github'
                  width={30}
                  height={30}/></a>
              </div>
              <div className='p-[5px] ml-[10px] mb-[0px] text-white relative overflow-hidden rounded-lg shadow-lg border border-[transparent]'>
                <span className='text-transparent text-[20px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Skills: </span>{skills}
              </div>
            </div>
          </div>
      </div> 
  )
}

export default ProjectCard