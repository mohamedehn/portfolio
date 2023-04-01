import Image from 'next/image'
import React from 'react'
import img from "../public/assets/contact.jpeg"

import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub, } from 'react-icons/fa'
import {BsPersonLinesFill} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link';

function Contact() {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#338be9]'>Contact</p>
            <h2 className='py-4'>N&#39;hésitez pas à me solliciter</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* Left Side */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image src={img} className='rounded-xl hover:scale-105 ease-in duration-300' alt='/'/>
                        </div>
                        <div>
                            <h2 className='py-2'>Mohamed Ebarhmatin</h2>
                            <p>Développeur Front-End</p>
                            <p className='py-4'>Je suis disponible pour un poste à plein temps ou des missions en freelance. N&#39;hésitez pas à me contacter afin d&#39;en discuter</p>
                        </div>
                        <div>
                        <p className='uppercase pt-8'>Connectons-nous !</p>
                        <div className='flex items-center justify-between py-4'>
                            <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <a href='https://fr.linkedin.com/in/mohamed-ebarhmatin-376731179'><FaLinkedinIn/></a>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <a href="https://github.com/mohamedehn"><FaGithub/></a>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <a href="mailto:mohamed.ebarhmatin@yahoo.fr"><AiOutlineMail/></a>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <BsPersonLinesFill/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Nom - Prénom</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Téléphone</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Sujet</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100'>Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href="/">
                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp size={30} className='text-[#338be9]'/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact