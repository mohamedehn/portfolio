import dns from "../public/assets/projects/dns.webp";
import ges from "../public/assets/projects/ges.webp";
import kasa from "../public/assets/projects/kasa.webp";
import booki from "../public/assets/projects/booki.png";
import food from "../public/assets/projects/food.webp";
import flame from "../public/assets/projects/flame.webp";
import kanap from "../public/assets/projects/kanap.webp";
import panthere from "../public/assets/projects/panthere.png";
import prestatair from "../public/assets/projects/prestatair.webp";
import snapface from "../public/assets/projects/snapface.png";
import ProjectItem from "./ProjectItems";
import aliseeImg from "../public/assets/projects/alisee.png";
import pokeball from "../public/assets/projects/pokeball.png";

const Projects = () => {
  return (
    <div className="w-full sm:pt-[50px]" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#338be9]">
          Projets
        </p>
        <h2 className="py-4">Voici mes créations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Pokemon App"
            backgroundImg={pokeball}
            url="/pokedex"
            tech="Angular - Materialize CSS"
          />
          <ProjectItem
            title="Alisée Eggermont"
            backgroundImg={aliseeImg}
            url="/alisee"
            tech="Angular - SCSS"
          />
          <ProjectItem
            title="Data Network Solutions"
            backgroundImg={dns}
            url="/dns"
            tech="React Js - Tailwind"
          />
          <ProjectItem
            title="Green Energy Solutions"
            backgroundImg={ges}
            url="/ges"
            tech="Angular - Tailwind"
          />
          <ProjectItem
            title="SnapFace"
            backgroundImg={snapface}
            url="/snapface"
            tech="Angular - SCSS"
          />
          <ProjectItem
            title="Prestat'air"
            backgroundImg={prestatair}
            url="/prestatair"
            tech="React Js - Tailwind"
          />
          <ProjectItem
            title="Kasa"
            backgroundImg={kasa}
            url="/kasa"
            tech="React Js"
          />
          <ProjectItem
            title="Booki"
            backgroundImg={booki}
            url="/booki"
            tech="HTML - CSS"
          />
          <ProjectItem
            title="OhMyFood"
            backgroundImg={food}
            url="/ohmyfood"
            tech="HTML - SCSS"
          />
          <ProjectItem
            title="Piiquante"
            backgroundImg={flame}
            url="/piiquante"
            tech="Node Js - Express JS"
          />
          <ProjectItem
            title="Kanap"
            backgroundImg={kanap}
            url="/kanap"
            tech="Javascript"
          />
          <ProjectItem
            title="La Panthère"
            backgroundImg={panthere}
            url="/panthere"
            tech="HTML - CSS - SEO"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;