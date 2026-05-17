import s from './Home.module.css'

const STATS = [
  { val: '500MW+', label: 'Capacity Installed' },
  { val: '200+', label: 'Projects Delivered' },
  { val: '70%', label: 'Energy Bill Savings' },
  { val: '15+', label: 'States Covered' },
]

const SERVICES = [
  { icon: '⚡', title: 'Commercial Solar', desc: '25 kW–5 MW rooftop & ground-mount systems for businesses.', bg: 'var(--p50)' },
  { icon: '🏭', title: 'Industrial Solar', desc: '5–100 MW utility-scale solar parks for heavy industry.', bg: 'var(--s50,#edfcfe)' },
  { icon: '🏛️', title: 'Government Projects', desc: '100MW+ solar installations for public sector undertakings.', bg: '#fff8eb' },
  { icon: '🔋', title: 'Energy Storage', desc: 'Grid-scale BESS for peak shaving and energy arbitrage.', bg: 'var(--p50)' },
  { icon: '💧', title: 'Green Hydrogen', desc: 'Electrolyser-based green hydrogen production facilities.', bg: 'var(--s50,#edfcfe)' },
  { icon: '♻️', title: 'CBG Plants', desc: 'Compressed Biogas plants from organic waste feedstock.', bg: '#f0fdf4' },
]

const TESTIMONIALS = [
  { name: 'Ramesh K., CEO — Apex Industries', text: 'Polivium delivered our 2MW rooftop project ahead of schedule. Exceptional quality and professionalism throughout.' },
  { name: 'Anita S., CFO — Greenfield Corp', text: 'The solar calculator helped us understand ROI clearly. We saved 68% on electricity bills from month one.' },
  { name: 'Vikram P., Director — Sunrise Mfg', text: 'From financing to commissioning, Polivium handled everything. True end-to-end EPC partner.' },
]

const PARTNERS = ['Amplus Solar','Greenko','GPREC','Enrich Energy','GRIP Invest','JNTU Hyderabad','KITS','NCC','Radisson','Rewatt','Snowman Logistics','Synergy']

export default function Home({ setPage }) {
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroBg}/>
        <div className={s.heroInner}>
          <div className={`${s.heroBadge} badge badge--light`}>● India's Trusted Solar EPC Partner</div>
          <h1 className={s.heroTitle}>Powering India's Future with <span>Clean Energy</span></h1>
          <p className={s.heroSub}>End-to-end solar EPC for industries, businesses & governments. Cut energy bills up to 70% with India's trusted clean-tech partner.</p>
          <div className={s.heroBtns}>
            <button className="btn btn--primary" onClick={() => setPage('contact')}>Get Free Consultation →</button>
            <button className="btn btn--white" onClick={() => setPage('calculator')}>☀ Solar Calculator</button>
          </div>
        </div>
      </section>

      <section className={s.stats}>
        <div className={s.statsGrid}>
          {STATS.map(st => (
            <div key={st.label} className="reveal">
              <div className={s.statVal}>{st.val}</div>
              <div className={s.statLabel}>{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={s.about}>
          <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80" alt="Solar installation" className={s.aboutImg}/>
          <div>
            <div className={`${s.aboutBadge} badge badge--blue`}>● About Polivium</div>
            <h2 className={s.aboutTitle}>Decentralising Energy Across India</h2>
            <div className={s.aboutLine}/>
            <p className={s.aboutText}>Polivium is dedicated to providing comprehensive solutions for solar energy — from engineering and procurement to construction and ongoing asset management. We ensure optimal performance and longevity of your solar energy systems.</p>
            <p className={s.aboutText}>With 500MW+ installed capacity across 15+ states, we are India's trusted partner for clean energy transition. Our end-to-end approach covers financing, installation, monitoring, and maintenance.</p>
            <button className="btn btn--primary" onClick={() => setPage('services')}>Our Services →</button>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className={s.servicesHead}>
            <div className="badge badge--blue">● What We Do</div>
            <h2>End-to-End Solar Solutions</h2>
            <p>From rooftop to utility-scale — engineering, financing, and operations under one roof.</p>
          </div>
          <div className="grid grid--3">
            {SERVICES.map(sv => (
              <div key={sv.title} className={`card ${s.serviceCard} reveal`}>
                <div className={s.serviceIcon} style={{background:sv.bg}}>{sv.icon}</div>
                <h3>{sv.title}</h3>
                <p>{sv.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{marginTop:48}}>
            <button className="btn btn--primary" onClick={() => setPage('services')}>View All Services →</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={s.testimonials}>
          <div className={s.testHead}>
            <div className="badge badge--blue">● Testimonials</div>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="grid grid--3">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className={`card ${s.testCard} reveal`}>
                <p>"{t.text}"</p>
                <strong>{t.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.partners}>
        <div className={s.partnersTrack}>
          {[...PARTNERS,...PARTNERS].map((p,i) => <div key={i} className={s.partnerItem}>{p}</div>)}
        </div>
      </section>

      <section className="section section--dark">
        <div className={s.cta}>
          <h2>Ready to Go Solar?</h2>
          <p>Get a free consultation and discover how much you can save with Polivium.</p>
          <div className={s.ctaBtns}>
            <button className="btn btn--white" onClick={() => setPage('contact')}>Contact Us</button>
            <button className="btn btn--accent" onClick={() => setPage('calculator')}>☀ Calculate Savings</button>
          </div>
        </div>
      </section>
    </>
  )
}
