import Image from 'next/image';
import React from 'react';
import panthereImg from '../public/assets/projects/panthereBackground.webp';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const panthere = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' alt='' src={panthereImg}/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white'>
                <h2 className='py-2'>La Panthère</h2>
                <h3>HTML - CSS - Référencement SEO</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Projet</p>
                <h2>Présentation</h2>
                <p>Ce site a été crée en HTML et CSS et hébergé chez githubPages.
                    Ce site est une landing page visant a présenter l&#39;entreprise La Panthère en présentant ses différentes activités.
                    Il s&#39;agit d&#39;un projet réalisé dans le cadre de la formation de developpeur web que j&#39;ai réalisé chez OpenClassrooms.
                    Le but du projet était d&#39;optimiser le référencement SEO du site, la performance, l&#39;accessibilité et le référencement 
                    google.
                </p>
                <a href="https://mohamedehn.github.io/la-panthere/"><button className='px-8 py-2 mt-4 mr-8'>Démo</button></a> 
                <a href="https://github.com/mohamedehn/la-panthere/tree/dev"><button className='px-8 py-2 mt-4'>Code</button></a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> HTML
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> CSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> SEO
                        </p>
                    </div>
                </div>
            </div>
            <Link href="/#projects">
                <p>Retour</p>
            </Link>
        </div>
    </div>
  )
}

export default panthere;