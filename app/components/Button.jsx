import Link from "next/link";

const Button = ({ leftText, rightText }) => {
    return (
        <div className='flex gap-2 text-lg py-4 px-4 rounded-[40px] hover:bg-indigo-400 hover:drop-shadow-md transition duration-300 ease-in-out text-white bg-[#3AABE2] leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
            <Link href='/signin'>
                {leftText}
            </Link>
            <span>/</span>
            <Link href='/signup'>
                {rightText}
            </Link>
        </div>
    );
};

export default Button;