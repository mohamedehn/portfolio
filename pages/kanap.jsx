
import Image from 'next/image';
import React from 'react';
import kanapImg from '../public/assets/projects/kanapBackground.webp';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const kanap = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' alt='' src={kanapImg}/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white'>
                <h2 className='py-2'>Kanap</h2>
                <h3>Javascript - HTML - CSS</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Projet</p>
                <h2>Présentation</h2>
                <p>Ce site a été crée en HTML et CSS pour le côté front end et en Javascript, Node Js et Express pour le côté back end. 
                    Le code est hebergé via Github. Il s&#39;agit d&#39;un projet réalisé dans le cadre de la formation de developpeur web que 
                    j&#39;ai réalisé chez OpenClassrooms. Le site permet aux visiteurs de consulter les produits de l&#39;entreprise
                    Kanap. Ainsi les clients peuvent ajouter ou supprimer des produits dans leur panier et passer commande.
                </p>
                <a href="https://github.com/mohamedehn/P5-Dev-Web-Kanap/tree/dev"><button className='px-8 py-2 mt-4'>Code</button></a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Javascript
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> HTML
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> CSS
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

export default kanap;