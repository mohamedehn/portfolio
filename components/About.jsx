//in here we have the about section we my personnal informations and an image close to the text

import Image from "next/image";
import Link from "next/link";
import img from "../public/assets/about.webp"

const About = () => {
    return(
        <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="text-xl uppercase tracking-widest text-[#338be9]">A propos</p>
                    <h2 className="py-4 ">Présentation</h2>
                    <p className="py-2 text-gray-600">Un développeur pas comme les autres !</p>
                    <p className="py-2 text-gray-600">
                        Actuellement en reconversion professionnelle, j’ai obtenu le diplôme de Développeur Intégrateur Web, de titre RNCP 
                        niveau 5. Mes expériences m’ont permis d’acquérir une rigueur et un dynamisme qualitatifs, que je 
                        souhaite désormais mettre à disposition dans le développement web.
                    </p>
                    <p className="py-2 text-gray-600">
                        Préoccupé par les besoins des clients et pour mon côté créatif, j&#39;ai décidé de m&#39;orienter sur la partie front-end,
                        bien que je possède également des notions en back-end.
                    </p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">
                        <Link href="/#projects">Je vous invite à consulter certains de mes projets !</Link> 
                    </p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"> 
                    <Image src={img} alt="/" width="350" height="190" className="rounded-xl"/>
                </div>
            </div>
        </div>
    )
}

export default About;