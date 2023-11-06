import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/5 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                <Image
                    src="/deepstudioslogo.jpg"
                    alt="logo"
                    width={70}
                    height={70}
                    className='cursor-pointer hover:animate-spin'
                />
                <span className='font-bold ml-[10px] hidden md:block text-gray-300'>Deep Patel</span>
            </a>
            <div className='w-[800px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className='flex items-center w-full h-auto justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="#about-me" className='cursor-pointer'>About Me</a>
                    <a href="#skills" className='cursor-pointer'>Skills</a>
                    <a href="#experience" className='cursor-pointer'>Experience</a>
                    <a href="#projects" className='cursor-pointer'>Projects</a>
                    <a href="#contact" className='cursor-pointer'>Socials/Contact</a>
                </div>
            </div>
            <div className='flex flex-row gap-5'>
                <a href="https://github.com/deep-patel21" target='_blank'>
                <Image  src='/github.png'
                        alt='github'
                        width={24}
                        height={24}
                    />    
                </a>
                <a href="https://www.linkedin.com/in/dpatel3337/" target='_blank'>
                <Image  src='/linkedin.png'
                        alt='github'
                        width={24}
                        height={24}
                    />    
                </a>
                <a href="mailto:deepstudios21@gmail.com">
                <Image  src='/gmail.png'
                        alt='gmail'
                        width={30}
                        height={20}
                    />    
                </a>
               {/* {Socials.map((social) => (
                    <Image 
                        src={social.src}
                        alt={social.name}
                        key={social.name}
                        width={24}
                        height={24}
                    />
               ))} */}
            </div>
        </div>
    </div>
  )
}

export default Navbar