import Link from 'next/link'
import { Nav } from '../components'

const Hero = () => {
  return (
    <div>
        <Nav />
        <section className='py-5 flex items-center justify-center'>
        <div className='container  flex w-[88rem] flex-wrap items-center justify-center mt-32 md:mt-32   h-[80vh] md:px-12 md:flex-row'>
            <div className='mb-14 lg-mb-0 lg:w-1/2'>
                <h1 className='max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5'>
                    Track & Manage Injuries Effortlessly
                </h1>
                <p className='max-w-2xl text-center text-gray-500 lg:text-left lg:max-w-2xl '>
                    Streamline the entire process of recording and meticulously tracking injuries, making it more efficient and user-friendly. Designed to simplify the task of injury documentation and monitoring, ensuring that you can effortlessly manage and keep a close eye on injury-related data.
                </p>
                <div className='flex justify-center mt-14 lg:justify-start'>
                    <Link href='/signup'>
                        <button type='button' className='text-white bg-[#3AABE2] font-meduim rounded-lg px-5 py-4 text-center hover:bg-indigo-400 hover:drop-shadow-md transition duration-300 ease-in-out'>
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <img className='ml-auto' src='/doctor.png' alt='doctor' />
            </div>
        </div>
    </section>
    </div>
    
  )
}
export default Hero