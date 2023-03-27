// In this file I'm going to setup my navbar 

import Image from "next/image"; //useful to import images with next
import Link from "next/link";
import react from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () =>{
    return(
        <div className="fixed w-full h-20 shadow-xl [z-100]">
             <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Image 
                    src="/../public/assets/navLogo.png" 
                    alt="/" 
                    width="125" 
                    height="50"
                />
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b"> Accueil</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b"> A propos</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b"> Skills</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b"> Projets</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b"> Contact</li>
                        </Link>
                    </ul>
                    <div className="md:hidden">
                        <AiOutlineMenu size={25}/>  
                    </div>
                </div>
             </div>
        <div className="fixed left-0 top-0 w-full h-screen bg-black/70">

        </div>
        </div>
    )
}

export default Navbar;