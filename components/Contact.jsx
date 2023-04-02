import Image from 'next/image'
import React from 'react'
import img from "../public/assets/contact.jpeg"

import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub, } from 'react-icons/fa'
import {BsPersonLinesFill} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link';


const cv = 'https://mohamedehn.github.io/portfolio/cv.pdf' //this will define the url of the document


function Contact() {

    //here a function to allow visitors download my resume
    const downloadFile = (url) =>{
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

  return (
    <div id='contact' className='w-full lg:h-screen pt-[50px]'>
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
                            <a href="https://fr.linkedin.com/in/mohamed-ebarhmatin-376731179">
                                <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaLinkedinIn/>
                                </div>
                            </a>
                            <a href="https://github.com/mohamedehn">
                                <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaGithub/>
                                </div>
                            </a>
                            <a href="mailto:mohamed.ebarhmatin@yahoo.fr">
                                <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <AiOutlineMail/>
                                </div>
                            </a>
                            <div onClick={()=>{downloadFile(cv)}} className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <BsPersonLinesFill/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form action="https://formsubmit.co/mohamed.ebarhmatin@yahoo.fr" method="POST">
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Nom - Prénom</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name'/>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Téléphone</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone'/>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Objet</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message'></textarea>
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