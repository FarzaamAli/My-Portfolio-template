"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu} from 'react-icons/gi';
import { RxCross2 } from "react-icons/rx";

export default function Header() {
    const [toggle, setToggle] = useState(true);
  return (
    <div>
    <div className=" flex bg-gray-700 text-white w-full justify-between">
        <div className='font-logo m-6 text-3xl'><Link href={'/'}>FZ</Link></div>
        
        
        {/* <div className=' font-signature  text-2xl m-auto'>Farzaam Ali</div> */}
        
        
        <div className=' font-use text-xl p-6'>
            <ul className= ' hidden md:flex gap-10'>
                <li className=' hover:scale-125  duration-500'><Link href={'/'}>Home</Link></li>
                <li className=' hover:scale-125  duration-500'><Link href={'/'}>About</Link></li>
                <li className=' hover:scale-125  duration-500'> <Link href={'/'}>Portfolio</Link></li>
                <li className=' hover:scale-125  duration-500'><Link href={'/'}>About</Link></li>
                <li className=' hover:scale-125  duration-500'><Link href={'/'}>Skills</Link></li>
            </ul>
            <div className='md:hidden items-center p-2 z-10'  onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }}>
             {toggle ? <GiHamburgerMenu size={25} /> : <RxCross2 size={25} className=' z-10'/>}
            </div>


            {/* overlay starts here */}
            {!toggle ? (
                    <div className="fixed top-0 left-0 bg-black h-screen text-red-500 w-full flex items-center justify-center">
                        <ul className=" m-7  text-white   ">
                        <li className="mx-5 my-5 text-4xl font-use hover:scale-125  duration-500 ">Home</li>
                        <li className="mx-5 my-5 text-4xl font-use hover:scale-125  duration-500 ">About</li>
                        <li className="mx-5 my-5 text-4xl font-use hover:scale-125  duration-500 ">Portfolio</li>
                        <li className="mx-5 my-5 text-4xl font-use hover:scale-125  duration-500 ">Skills</li>
                        <li className="mx-5 my-5 text-4xl font-use hover:scale-125  duration-500 ">Contact</li>
                        </ul>
                    </div>
                    ):null}
            {/* overlay ends here */}


        </div>
        {/* <div className='static md:hidden text-2xl'><BiAlignRight/></div> */}
    </div>
    <div className=' md:w-[35%] w-full sm:w-[75%] rounded-b-full font-signature m-auto text-center md:text-4xl sm:text-3xl text-3xl bg-gray-700 text-white p-4 pb-8'>Farzaam Ali</div>
    </div>
  )
}
