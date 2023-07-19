import React from 'react'
import { FaLinkedin, FaGithub, FaMediumM } from 'react-icons/fa'
import { SiMedium, SiWikidata } from 'react-icons/si'
import { AiOutlineDown, AiOutlineArrowDown } from 'react-icons/ai'
import { BsDashLg, BsArrowDown } from 'react-icons/bs'

const page = () => {
    return (
        <div className="grid grid-cols-2 w-full min-h-screen ">

            <div className="absolute top-10 left-20 grid grid-flow-col gap-5 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <p className='text-sm uppercase'>Intro</p>
            </div>


            <div className="absolute top-10 flow-root text-black text-xl w-full text-center font-bold tracking-widest">
                HASH
            </div>

            <div className="absolute grid -left-8 text-black h-full justify-center items-center text-center font-bold tracking-wide opacity-10 text-8xl">
                01
            </div>

            <div className="absolute grid right-10 text-black h-full justify-center items-center text-center font-bold tracking-wide opacity-80">
                <div className='grid grid-flow-row'>
                <BsDashLg size={30} />
                <BsArrowDown size={30} />
                </div>
            </div>


            <div className="bg-white pl-52 pr-40 grid items-center">
                <div className="grid gap-10">
                    {/* <div className='grid font-bold opacity-60'>
                        <h1 className="text-[0.7rem] uppercase">Intro</h1>
                    </div> */}
                    <div className='grid gap-3 font-bold font-poppins'>
                        {/* <h1 className="text-xl">Hello, I'm</h1> */}
                        <h1 className="text-3xl tracking-wide">Harish Chandran</h1>
                        <h1 className="text-lg font-bold opacity-60 uppercase tracking-wide">Data Analyst | ML Engineer</h1>
                    </div>
                    <div className='grid gap-3'>
                        <p className="text-sm opacity-60">With a proven track record in driving innovation in research, I am always keen on a thorough analysis of my data to transform them into impact. My career goal is to move to a faster paced environment, where such impact has a measurable positive effect in the short term: I want my professional growth to be intertwined with my next company’s growth.</p>
                    </div>

                </div>
            </div>

            <div className="bg-[url('/myProfilePic.png')] bg-center bg-cover bg-no-repeat"></div>

            <div className="absolute bottom-10 left-20 grid grid-flow-col gap-5">
                <a href='https://www.linkedin.com/in/harish-chandran-7aa708184/'>
                    <FaLinkedin size={20} />
                </a>
                <a href='https://github.com/being-invincible'>
                    <FaGithub size={20} />
                </a>
                <a href='https://medium.com/@the_psy_guy'>
                    <SiMedium size={20} />
                </a>
                <a href='https://www.datascienceportfol.io/ha__sh'>
                    <SiWikidata size={20} />
                </a>
            </div>
        </div>
    )
}

export default page