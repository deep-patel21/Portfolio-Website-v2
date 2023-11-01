'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-white shadow-lg p-[15px] py-[100px]' id='contact'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-rw items-center justify-around flex-wrap'>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Socials</div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <FaYoutube />
                        <span className='text-[15px] ml-[6px]'>YouTube</span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxGithubLogo />
                        <span className='text-[15px] ml-[6px]'>Github</span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxLinkedinLogo />
                        <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                    </p>
                </div>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Contacts</div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxDiscordLogo />
                        <span className='text-[15px] ml-[6px]'>Discord: deepstudios</span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px]'>deep.c.patel@torontomu.ca</span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px]'>deepstudios21@gmail.com</span>
                    </p>
                </div>
            </div>
            <div className='mb-[20px] text-[15px] text-center'>
                &copy; Developed by Deep Patel 2023. 
            </div>
        </div>
    </div>
  )
}

export default Footer