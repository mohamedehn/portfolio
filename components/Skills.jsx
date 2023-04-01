// this component is for my skills, I'll set a container with an image of each skills and the name with a hvoer style

import Image from "next/image";
import react from "react";

const Skills = () =>{
    return(
        <div id='skills' className="w-full lg:h-screen p-2 pt-[60px]">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full sm:pt-0">
                <p className="text-xl tracking-widest uppercase text-[#338be9]">Skills</p>
                <h2 className="py-4">Ce que je peux faire</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/html.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/css.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/firebase.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>FIREBASE</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/github1.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>GITHUB</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/javascript.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/mongo.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MONGO</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/nextjs.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NEXT JS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/node.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NODE</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/react.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>REACT</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/tailwind.png" alt="/" width="64" height="64"/>
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