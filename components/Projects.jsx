import React from "react";
import ProjectItem from "./ProjectItems";
import dns from "../public/assets/projects/dns.webp";
import kasa from "../public/assets/projects/kasa.webp";
import flame from "../public/assets/projects/flame.webp";
import kanap from "../public/assets/projects/kanap.webp";
import prestatair from "../public/assets/projects/prestatair.webp";
import snapface from "../public/assets/projects/snapface.png";
import pokeball from "../public/assets/projects/pokeball.png";

const Projects = () => {
  const projectData = [
    {
      title: "Pokemon App",
      backgroundImg: pokeball,
      url: "/pokedex",
      tech: "Angular - Materialize CSS",
    },
    {
      title: "Data Network Solutions",
      backgroundImg: dns,
      url: "/dns",
      tech: "React Js - Tailwind",
    },
    {
      title: "SnapFace",
      backgroundImg: snapface,
      url: "/snapface",
      tech: "Angular - SCSS",
    },
    {
      title: "Prestat'air",
      backgroundImg: prestatair,
      url: "/prestatair",
      tech: "React Js - Tailwind",
    },
    {
      title: "Kasa",
      backgroundImg: kasa,
      url: "/kasa",
      tech: "React Js",
    },
    {
      title: "Piiquante",
      backgroundImg: flame,
      url: "/piiquante",
      tech: "Node Js - Express JS",
    },
    {
      title: "Kanap",
      backgroundImg: kanap,
      url: "/kanap",
      tech: "Javascript",
    },
  ];

  return (
    <div className="w-full sm:pt-[50px]" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#338be9]">
          Projets
        </p>
        <h2 className="py-4">Voici mes créations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              backgroundImg={project.backgroundImg}
              url={project.url}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;