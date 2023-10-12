import React from 'react'
import { hamburger } from "../assets/icons/index";
import { headerLogo } from "../assets/img";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full bg-red-300'>
            <nav className='flex justify-around bg-green-500 items-center max-container'>
                <a href='/'>
                    <img
                        src={headerLogo}
                        alt='logo'
                        width={129}
                        height={29}
                        className='m-0 w-[130px] h-[29px]'
                    />
                </a>
                <div className='flex gap-2 text-lg py-4 px-4 rounded-[40px] text-white bg-[#FF6451] leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                    <a href='/'>Sign in</a>
                    <span>/</span>
                    <a href='/'>Explore now</a>
                </div>
                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt='hamburger icon' width={25} height={25} />
                </div>
            </nav>
        </header>
  )
}

export default Nav