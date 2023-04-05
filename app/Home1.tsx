import Image from 'next/image'
import React from 'react'
import { RiArrowRightSFill } from 'react-icons/ri';


export default function Home1() {
  return (
    <>
        <div className=' md:max-w-5xl px-10 m-auto mt-16 flex md:flex-row flex-col'>

            <div className=' p-5 md:max-w-lg w-[70%] m-auto text-justify '>
                <h1 className=' text-3xl font-bold justify-end'>I am a Student!</h1>
                <p className=' text-xl'>Currently acquiring skills like Web Development at PIAIC.</p>
                <button className=' mt-3 flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-green-500  rounded-xl text-xl font-semibold text-white'>
                    Profile 
                    <RiArrowRightSFill size={25} className=' hover:rotate-90 duration-500' /></button>
            </div>

            <div>
                {/* <Image src={'/car3.webp'} alt='Farzaam' width={200} height={200}/> */}
                <img src="/car3.webp" alt="Farzaam" 
                 className="md:w-full w-1/2 mx-auto"/>
            </div>
        </div>
    </>
  )
}
