import { useState, useEffect, useRef } from 'react'
import s from './Home.module.css'

const VIDEOS = [
  '/videos/one.mp4',
  '/videos/two.mp4',
  '/videos/three.mp4',
  '/videos/four.mp4',
  '/videos/five.mp4',
]

const SOLUTIONS = [
  { key:'sol_rooftop', title:'Rooftop Solar', desc:'Commercial & industrial rooftop installations from 25 kW to 5 MW.', img:'/images/Rooftop_Solar.jpeg' },
  { key:'sol_ground', title:'Ground Mounted Solar', desc:'Large-scale ground-mount solar farms for captive consumption.', img:'/images/Ground-Solar.jpeg' },
  { key:'sol_park', title:'Solar Park', desc:'Utility-scale solar parks from 5 MW to 100MW+ for PSUs and IPPs.', img:'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&q=80' },
  { key:'sol_bess', title:'Battery Energy Storage', desc:'Grid-scale BESS for peak shaving and energy arbitrage.', img:'/images/BESS.jpeg' },
  { key:'sol_floating', title:'Floating Solar', desc:'FPV systems for reservoirs and water bodies.', img:'/images/Floating_Solar.jpg' },
  { key:'sol_carport', title:'Solar Carport', desc:'Solar-powered parking structures for campuses.', img:'/images/Solar_Carport.jpg' },
  { key:'sol_hybrid', title:'Hybrid Solar & Wind', desc:'Combined systems for 24/7 renewable generation.', img: '/images/Hybrid-Solar-Wind.jpeg'},
  { key:'sol_substation', title:'Sub-Stations', desc:'Switchyards and substations up to 400 kV.', img:'/images/Substation.jpg' },
  { key:'sol_wind', title:'Wind Turbine', desc:'Onshore wind energy projects end-to-end.', img:'/images/Wind-Turbines.jpg' },
]

const SERVICES = [
  { title: 'EPC Services', desc: 'Engineering, Procurement & Construction — complete project delivery.', key: 'epc' },
  { title: 'Financing Models', desc: 'CAPEX / Leasing / OPEX / PPA / RESCO — flexible financing.', key: 'financing' },
  { title: 'Operations & Maintenance', desc: '24/7 monitoring, preventive maintenance, and optimization.', key: 'assetmanagement' },
  { title: 'New Initiatives', desc: 'CBG (Bio-CNG) Plants — next frontier of clean energy.', key: 'initiatives' },
]

export default function Home({ setPage }) {
  const [vidIdx, setVidIdx] = useState(0)
  const [videoReady, setVideoReady] = useState(false)
  const [hoveredSol, setHoveredSol] = useState(null)
  const videoRefs = useRef([])

  useEffect(() => {
    const timer = setInterval(() => {
      setVidIdx(i => (i + 1) % VIDEOS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Preload both logos
  useEffect(() => {
    const img1 = new Image(); img1.src = '/images/logo-white.png'
    const img2 = new Image(); img2.src = '/images/logo.png'
  }, [])

  const handleVideoCanPlay = () => {
    if (!videoReady) setVideoReady(true)
  }

  return (
    <>
      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroBg} />
        {VIDEOS.map((v, i) => (
          <video
            key={i}
            ref={el => videoRefs.current[i] = el}
            className={`${s.heroVideo} ${i === vidIdx && videoReady ? s.videoActive : ''}`}
            muted
            autoPlay
            playsInline
            loop
            onCanPlay={handleVideoCanPlay}
          >
            <source src={v} type="video/mp4" />
          </video>
        ))}
        <div className={s.heroOverlay}/>
        <div className={s.heroInner}>
          <div className={`${s.heroBadge} badge badge--light`}>● India's Trusted Solar EPC Partner</div>
          <h1 className={s.heroTitle}>Powering India's Future with <span>Clean Energy</span></h1>
          <p className={s.heroSub}>End-to-end solar EPC for industries, businesses & governments. Cut energy bills up to 70% with India's trusted clean-tech partner.</p>
          <div className={s.heroBtns}>
            <button className="btn btn--primary" onClick={() => setPage('services')}>Explore Solutions →</button>
            <button className="btn btn--white" onClick={() => setPage('calculator')}>☀ Savings Calculator</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className={s.about}>
          <div style={{background:'linear-gradient(135deg,var(--p50),#fff)',borderRadius:24,overflow:'hidden',border:'1px solid var(--n200)',boxShadow:'var(--shadow-md)'}}>
            <img src="/images/sun-logo-black.png" alt="Polivium" style={{width:'100%',display:'block'}}/>
          </div>
          <div>
            <div className={`${s.aboutBadge} badge badge--blue`}>● About POLIVIUM</div>
            <h2 className={s.aboutTitle}>A Diversified Emerging Enterprise</h2>
            <div className={s.aboutLine}/>
            <p className={s.aboutText}>POLIVIUM is a diversified emerging enterprise focused on building sustainable, technology-driven solutions across industrial, commercial, rural, and urban ecosystems. With a strong foundation in execution excellence, innovation, and long-term value creation, we aim to bridge infrastructure, energy, and business opportunities that contribute to inclusive growth.</p>
            <p className={s.aboutText}>Driven by the principles of Trust, Energy, Creativity, and Execution, POLIVIUM is committed to developing impactful ventures that empower industries, strengthen communities, and support a smarter and more sustainable future.</p>
            <button className="btn btn--primary" onClick={() => setPage('about')}>Learn More →</button>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center" style={{marginBottom:56}}>
            <div className="badge badge--blue">● Our Solutions</div>
            <h2 style={{fontSize:36,fontWeight:800,marginTop:14}}>Solar & Renewable Energy Solutions</h2>
            <p style={{color:'var(--n500)',marginTop:10,maxWidth:520,margin:'10px auto 0'}}>From rooftop to utility-scale — comprehensive renewable energy solutions for every application.</p>
          </div>
          <div className={s.solGrid}>
            {SOLUTIONS.map(sol => (
              <div key={sol.key} className={s.solCard}
                onMouseEnter={() => setHoveredSol(sol.key)}
                onMouseLeave={() => setHoveredSol(null)}
                onClick={() => setPage(sol.key)}>
                <img src={sol.img} alt={sol.title} className={s.solImg} style={{transform: hoveredSol === sol.key ? 'scale(1.08)' : 'scale(1)'}} />
                <div className={s.solOverlay}/>
                <div className={s.solContent}>
                  <h3>{sol.title}</h3>
                  <p>{sol.desc}</p>
                  <span className={s.solArrow}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--light">
        <div className="container">
          <div className={s.servicesHead}>
            <div className="badge badge--blue">● Our Services</div>
            <h2>End-to-End Service Offerings</h2>
            <p>Engineering, financing, and operations under one roof.</p>
          </div>
          <div className="grid grid--4">
            {SERVICES.map(sv => (
              <div key={sv.title} className="card reveal" style={{padding:28,cursor:'pointer',textAlign:'center'}} onClick={() => setPage(sv.key)}>
                <h3 style={{fontSize:16,fontWeight:700,marginBottom:8}}>{sv.title}</h3>
                <p style={{color:'var(--n500)',fontSize:13,lineHeight:1.7}}>{sv.desc}</p>
                <span style={{display:'inline-block',marginTop:14,color:'var(--p600)',fontSize:13,fontWeight:600}}>Learn More →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{background:'linear-gradient(135deg,var(--p700),var(--p900))',textAlign:'center'}}>
        <div className="container">
          <h2 style={{fontSize:36,fontWeight:800,color:'#fff'}}>Ready to Go Solar?</h2>
          <p style={{color:'rgba(255,255,255,.7)',marginTop:12,fontSize:16}}>Get a free consultation and discover how much you can save with Polivium.</p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap',marginTop:28}}>
            <button className="btn btn--white" onClick={() => setPage('contact')}>Contact Us</button>
            <button className="btn btn--accent" onClick={() => setPage('calculator')}>☀ Calculate Savings</button>
          </div>
        </div>
      </section>
    </>
  )
}
