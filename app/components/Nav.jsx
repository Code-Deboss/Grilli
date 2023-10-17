import { hamburger } from "../assets/icons";
import { Button } from '.';
import Link from "next/link";

const Nav = () => {
    
  return (
    <header className='padding-x py-6 border-[1px]  absolute z-10 w-full '>
            <nav className='flex justify-around items-center max-container'>
                <a href='/' className='flex items-center flex-row justify-center'>
                    <img src='/logo.png' className='h-[80px]'/>
                    <h1
                        alt='logo'
                        className='text-2xl font-bold'
                    >SafetySentry</h1>
                </a>
                <Button leftText='Sign in' rightText='Explore now' />
                <div className='hidden max-lg:block'>
                    <img src='/hamburger.svg' alt='hamburger icon' width={25} height={25} />
                </div>
            </nav>
        </header>
  )
}

export default Nav