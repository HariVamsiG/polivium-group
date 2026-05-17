import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Calculator from './pages/Calculator'
import Financing from './pages/Financing'
import AssetManagement from './pages/AssetManagement'
import Initiatives from './pages/Initiatives'
import Hydrogen from './pages/Hydrogen'
import CBG from './pages/CBG'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Warranty from './pages/Warranty'

const PAGES = {
  home: Home, about: About, services: Services,
  calculator: Calculator, financing: Financing, assetmanagement: AssetManagement,
  epc: Services,
  initiatives: Initiatives, ni_hydrogen: Hydrogen, ni_cbg: CBG,
  contact: Contact, terms: Terms, privacy: Privacy, warranty: Warranty,
}

export default function App() {
  const [page, setPage] = useState('home')

  const navigate = (p) => { setPage(p); window.scrollTo(0, 0) }

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  })

  const Page = PAGES[page] || Home

  return (
    <>
      <Navbar setPage={navigate} currentPage={page} />
      <main><Page setPage={navigate} /></main>
      <Footer setPage={navigate} />
    </>
  )
}
