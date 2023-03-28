//in here we have the about section we my personnal informations and an image close to the text

import Image from "next/image";

const About = () => {
    return(
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="text-xl uppercase tracking-widest text-[#338be9]">A propos</p>
                    <h2 className="py-4 ">Présentation</h2>
                    <p className="py-2 text-gray-600">Un développeur pas comme les autres !</p>
                    <p className="py-2 text-gray-600">
                        Actuellement en reconversion professionnelle, j’ai obtenu le diplôme de Développeur Intégrateur Web, de titre RNCP 
                        niveau 5 chez OpenClassrooms. Mes expériences m’ont permis d’acquérir une rigueur et un dynamisme qualitatifs, que je 
                        souhaite désormais mettre à disposition dans le domaine informatique.
                    </p>
                    <p className="py-2 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam natus eligendi quidem error assumenda incidunt 
                        cupiditate neque est non. Doloremque sed porro minus quidem ipsam soluta quis! Illo, libero!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam natus eligendi quidem error assumenda incidunt 
                        cupiditate neque est non. Doloremque sed porro minus quidem ipsam soluta quis! Illo, libero!
                    </p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">
                        Je vous invite à consulter certains de mes projets !
                    </p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"> 
                    <Image src="/../public/assets/about.jpeg" alt="/" width="350" height="190" className="rounded-xl"/>
                </div>
            </div>
        </div>
    )
}

export default About;