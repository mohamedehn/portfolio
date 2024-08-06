import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import psy from "../public/assets/projects/psy.png";

const alisee = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          alt=""
          src={psy}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2 className="py-2">Alisée Eggermont</h2>
          <h3>Angular - SCSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Projet</p>
          <h2>Présentation</h2>
          <p>
            Ce site a été crée avec Angular et Tailwind. Il s&#39;agit d&#39;une landing page,
            qui présente le cabinet de psychanalyse de Madame Eggermont.
            Une intégration d&#39;un agenda externe de chez Psychologue.net a été effectué avec un iframe
            afin de faciliter la prise de rendez-vous.
          </p>
          <a href="https://alisee-eggermont-psy.fr/">
            <button className="px-8 py-2 mt-4 mr-8">Démo</button>
          </a>
          <a href="https://github.com/mohamedehn/alisee-e">
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Angular
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SCSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p>Retour</p>
        </Link>
      </div>
    </div>
  );
};

export default alisee;