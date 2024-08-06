import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PopUpCookies from '@/components/PopUpCookies'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohamed - Développeur Full Stack</title>
        <meta name="description" content="Mohamed Ebarhmatin, développeur full stack. Préoccupé par les besoins des clients et pour
        mon côté créatif, j'ai décidé de me spécialiser sur la partie front-end, bien que je possède également des compétences en back-end." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PopUpCookies />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}