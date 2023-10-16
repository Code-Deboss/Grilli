import React from 'react'
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className='padding-x py-6 border-[1px]  absolute z-10 w-full '>
            <nav className='flex justify-around items-center max-container'>
                <a href='/'>
                    <img src=''/>
                    <h1
                        alt='logo'
                        className='text-2xl font-bold'
                    >SafetySentry</h1>
                </a>
                <div className='flex gap-2 text-lg py-4 px-4 rounded-[40px] text-white bg-[#3AABE2] leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                    <a href='/'>Sign in</a>
                    <span>/</span>
                    <a href='/'>Explore now</a>
                </div>
                <div className='hidden max-lg:block'>
                    <img src='/hamburger.svg' alt='hamburger icon' width={25} height={25} />
                </div>
            </nav>
        </header>
  )
}

export default Nav