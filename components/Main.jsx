// In this file we find the main component with the title of my website, some informations and also my social medias

import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub, } from 'react-icons/fa'
import {BsPersonLinesFill} from 'react-icons/bs'
import react from 'react';

const Main = () =>{
    return(
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">CONSTRUISONS ENSEMBLE LE WEB DE DEMAIN</p>
                    <h1 className="py-4 text-gray-700">Hello, bienvenue sur <span className="text-[#338be9]">
                        Digital</span> <span className="text-[#ffcc2f]">Comet</span>!
                    </h1>
                    <h1 className="py-4 text-gray-700">
                        Je m&#39;appelle Mohamed, développeur web front-end
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        Passionné par le développement web, j&#39;ai décidé en 2022 de faire de ma passion mon métier en effectuant une reconversion professionnelle.
                    </p>
                    <div className="py-4 flex items-center justify-between max-w-[330px] m-auto">
                        <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsPersonLinesFill/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;