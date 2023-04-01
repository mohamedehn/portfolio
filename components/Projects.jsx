import Image from "next/image";
import Link from "next/link";
import react from "react";
import dns from "../public/assets/projects/dns.png"
import ges from "../public/assets/projects/ges.png"
import kasa from "../public/assets/projects/kasa.png"
import booki from "../public/assets/projects/booki.png"
import food from "../public/assets/projects/food.png"
import flame from "../public/assets/projects/flame.png"
import kanap from "../public/assets/projects/kanap.png"
import panthere from "../public/assets/projects/panthere.png"
import comet from "../public/assets/projects/comet.png"

import ProjectItem from "./ProjectItems";

const Projects = () =>{
    return(
        <div className="w-full sm:pt-[50px]" id="projects">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#338be9]">Projects</p>
                <h2 className="py-4">Voici mes créations</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <ProjectItem title="Data Network Solutions" backgroundImg={dns} url='/dns' tech="React Js - Tailwind"/>
                    <ProjectItem title="Green Energy Solutions" backgroundImg={ges} url='/ges' tech="React Js"/>
                    <ProjectItem title="Kasa" backgroundImg={kasa} url='/kasa' tech="React Js"/>
                    <ProjectItem title="Booki" backgroundImg={booki} url='/booki' tech="HTML - CSS"/>
                    <ProjectItem title="OhMyFood" backgroundImg={food} url='/ohmyfood' tech="HTML - CSS - SASS"/>
                    <ProjectItem title="Piiquante" backgroundImg={flame} url='/piiquante' tech="Node Js - Express JS"/>
                    <ProjectItem title="Kanap" backgroundImg={kanap} url='/kanap' tech="Javascript"/>
                    <ProjectItem title="La Panthère" backgroundImg={panthere} url='/panthere' tech="HTML - CSS - SEO"/>
                    <ProjectItem title="English Portfolio" backgroundImg={comet} url='/portfolio' tech="React Js"/>
                </div>
            </div>
        </div>
    )
}

export default Projects;