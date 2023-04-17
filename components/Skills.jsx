// this component is for my skills, I'll set a container with an image of each skills and the name with a hvoer style

import Image from "next/image";
import react from "react"
import html from "../public/assets/skills/html.png"
import css from "../public/assets/skills/css.png"
import firebase from "../public/assets/skills/firebase.png"
import github from "../public/assets/skills/github1.png"
import javascript from "../public/assets/skills/javascript.png"
import mongo from "../public/assets/skills/mongo.png"
import nextjs from "../public/assets/skills/nextjs.png"
import node from "../public/assets/skills/node.png"
import reactImg from "../public/assets/skills/react.png"
import tailwind from "../public/assets/skills/tailwind.png"


const Skills = () =>{
    return(
        <div id='skills' className="w-full lg:h-screen p-2 pt-[60px]">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full sm:pt-0">
                <p className="text-xl tracking-widest uppercase text-[#338be9]">Skills</p>
                <h2 className="py-4">Ce que je peux faire</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={html} alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={css} alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={firebase} alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>FIREBASE</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={github} alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>GITHUB</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={javascript} alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={mongo} alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MONGO</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={nextjs} alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NEXT JS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={node} alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NODE</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={reactImg} alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>REACT</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={tailwind} alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TAILWIND</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills;