import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {

  const router = useRouter()

  // Vérifie la route actuelle et décider si la barre de navigation doit être affichée ou non
  const showNavbar = router.pathname === '/'

  return (
    <> 
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  )
}
