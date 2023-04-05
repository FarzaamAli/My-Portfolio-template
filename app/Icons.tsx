import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin,FaInstagram} from "react-icons/fa";

export default function icons() {
  return (
    <div className="top-[30vh] md:fixed hidden md:flex">
        
  
    
    <Link href={"https://linkedin.com/"} target={"_blank"}>
      <div className="ml-[-86px] my-14   hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-gray-600  w-36 py-3 px-5 rounded-r-lg">
        Linkedin
        <FaLinkedin size={30} />
      </div>
    </Link>

    

    <Link href={"https://github.com/FarzaamAli?tab=repositories"} target={"_blank"}>
      <div className=" ml-[-86px]  hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-gray-600 w-36 py-3 px-5 rounded-r-lg">
        Github
        < FaGithub size={30} />
      </div>
    </Link>
    
    <Link href={"https://instagram.com/"} target={"_blank"}>
      <div className=" ml-[-100px] my-28   flex justify-between hover:ml-0 duration-200  text-lg items-center gap-2 fixed text-white bg-gray-600  w-38 py-3 px-5 rounded-r-lg">
        Instagram
        <FaInstagram size={30} />
      </div>
    </Link>

    
  </div>
  )
}
