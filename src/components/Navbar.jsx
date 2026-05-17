import { useState, useEffect } from 'react'
import s from './Navbar.module.css'

const NAV = [
  { label: 'Home', key: 'home' },
  { label: 'About Us', key: 'about' },
  { label: 'Services', key: 'services', sub: [
    { label: 'All Solutions', key: 'services' },
    { label: 'EPC Services', key: 'epc' },
    { label: 'Financing Models', key: 'financing' },
    { label: 'Asset Management', key: 'assetmanagement' },
    { label: 'New Initiatives', key: 'initiatives' },
    { label: 'Green Hydrogen', key: 'ni_hydrogen' },
    { label: 'CBG Plants', key: 'ni_cbg' },
  ]},
  { label: '☀ Savings Calculator', key: 'calculator' },
  { label: 'Contact', key: 'contact' },
]

export default function Navbar({ setPage, currentPage }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (k) => { setPage(k); setOpen(false) }

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={s.inner}>
        <img src={scrolled ? "/images/logo.png" : "/images/logo-white.png"} alt="Polivium" className={s.logo} onClick={() => go('home')} />
        <ul className={`${s.links} ${open ? s.open : ''}`}>
          {NAV.map(item => (
            <li key={item.label} className={s.item}>
              <button className={`${s.link} ${currentPage === item.key ? s.active : ''}`}
                onClick={() => !item.sub ? go(item.key) : null}>
                {item.label}{item.sub && <span className={s.chevron}>▾</span>}
              </button>
              {item.sub && (
                <ul className={s.sub}>
                  {item.sub.map(sub => (
                    <li key={sub.label}><button className={s.subBtn} onClick={() => go(sub.key)}>{sub.label}</button></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li><button className={s.cta} onClick={() => go('contact')}>Get Quote</button></li>
        </ul>
        <button className={s.hamburger} onClick={() => setOpen(!open)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  )
}
