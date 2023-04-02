import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohamed - Développeur Front-End</title>
        <meta name="description" content="Mohamed Ebarhmatin, développeur front-end.Préoccupé par les besoins des clients et pour 
        mon côté créatif, j'ai décidé de m'orienter sur la partie front-end, bien que je possède également des notions en back-end." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}
