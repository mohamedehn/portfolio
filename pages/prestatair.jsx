import Image from 'next/image';
import React from 'react';
import dnsImg from '../public/assets/projects/prestatairBackground.jpg';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const dns = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' alt='' src={dnsImg}/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white'>
                <h2 className='py-2'>Prestat&#39;air</h2>
                <h3>React Js - Tailwind CSS</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Projet</p>
                <h2>Présentation</h2>
                <p>Ce site a été crée avec React JS, Tailwind CSS et hébergé chez OVH. Les images animées ont été inséré via Lottie.
                    Ce site est une landing page visant a présenter l&#39;association Prestat&#39;air en présentant ses différentes activités.
                </p>
                <a href="https://www.association-prestatair.com/"><button className='px-8 py-2 mt-4 mr-8'>Démo</button></a>
                <a href="https://github.com/mohamedehn/prestatair/tree/dev"><button className='px-8 py-2 mt-4'>Code</button></a> 
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> React
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Javascript
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Tailwind
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

export default dns;