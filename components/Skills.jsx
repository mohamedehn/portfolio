import Image from "next/image";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import github from "../public/assets/skills/github1.png";
import javascript from "../public/assets/skills/javascript.png";
import mongo from "../public/assets/skills/mongo.png";
import nextjs from "../public/assets/skills/nextjs.png";
import node from "../public/assets/skills/node.png";
import reactImg from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind.png";
import angular from "../public/assets/skills/angular.png";
import ts from "../public/assets/skills/ts.png";
import java from "../public/assets/skills/java.png";
import graphQl from "../public/assets/skills/graphQl.png";
import sql from "../public/assets/skills/sql.png";
import springBoot from "../public/assets/skills/springBoot.png";
import docker from "../public/assets/skills/docker.png";

const skills = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: docker, name: "DOCKER" },
  { src: github, name: "GITHUB" },
  { src: javascript, name: "JAVASCRIPT" },
  { src: mongo, name: "MONGO" },
  { src: nextjs, name: "NEXT JS" },
  { src: node, name: "NODE" },
  { src: reactImg, name: "REACT" },
  { src: tailwind, name: "TAILWIND" },
  { src: angular, name: "ANGULAR" },
  { src: ts, name: "TYPESCRIPT" },
  { src: java, name: "JAVA" },
  { src: graphQl, name: "GRAPHQL" },
  { src: sql, name: "SQL" },
  { src: springBoot, name: "SPRING BOOT" },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 pt-[60px]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full sm:pt-0">
        <p className="text-xl tracking-widest uppercase text-[#338be9]">
          Skills
        </p>
        <h2 className="py-4">Ce que je peux faire</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={skill.src} alt="/" width="64" height="64" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;