import Image from "next/image";
import img from "../public/assets/about.webp";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#338be9]">
            A propos
          </p>
          <h2 className="py-4 ">Présentation</h2>
          <div className="py-2 text-gray-600 text-justify">
            <p>
              Après avoir entamé une reconversion professionnelle en 2022, j’ai
              pu acquérir des compétences en HTML, CSS, mais surtout en
              Javascript par le biais des frameworks Angular, NextJs ou Express
              Js. <br />
              J&#39;ai obtenu le diplôme de Développeur Intégrateur Web, de chez
              OpenClassroom en 2022 puis j&#39;ai poursuivi mon apprentissage en
              2023 avec la formation Concepteur développeurs d&#39;application
              auprès de la Wild Code School (option Java - Angular).
            </p>
            <p className="pt-2">
              Spécialisé en front-end, je suis également à l&#39;aise avec le
              back-end sur des technologies de type Node Js (Express Js) ou Java
              (Spring Boot).
            </p>
            <p className="pt-2">
              Mes expériences m’ont permis d’acquérir une rigueur et un
              dynamisme qualitatifs, que je souhaite désormais mettre à
              disposition dans le développement web.
            </p>
          </div>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <a href="#projects">
              Je vous invite à consulter certains de mes projets !
            </a>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={img}
            alt="/"
            width="350"
            height="190"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;