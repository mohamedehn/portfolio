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
              En 2022, j’ai décidé de plonger dans le développement web et c’est rapidement devenu une
              véritable passion. Dès mes premiers projets, j’ai trouvé un réel plaisir à créer des interfaces
              fonctionnelles et intuitives, en travaillant sur des technologies comme HTML, CSS et surtout
              JavaScript. Les frameworks Angular, Next.js et Express.js sont devenus mes outils privilégiés
              pour transformer des idées en solutions concrètes.
            </p>
            <p className="pt-2">
              Spécialisé dans le front-end, j’ai également développé une expertise en back-end, notamment
              avec Node.js (Express.js) et Java (Spring Boot). Ce mélange de compétences me permet d’avoir
              une vision globale des projets et de concevoir des applications complètes, de l’interface
              utilisateur aux services côté serveur.
            </p>
            <p className="pt-2">
              Mon approche du développement est marquée par la rigueur et l’envie constante d’améliorer
              mes compétences. Je suis toujours à l’affût des nouvelles technologies et des meilleures
              pratiques pour offrir des solutions à la fois élégantes et performantes. Aujourd’hui, je suis
              prêt à mettre cette passion et cette expertise au service de projets ambitieux.
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