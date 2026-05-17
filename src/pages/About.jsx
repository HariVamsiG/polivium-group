import PageHeader from '../components/PageHeader'

const MILESTONES = [
  { year: '2017', title: 'Founded', desc: 'Polivium established in Hyderabad with a vision to decentralise energy across India.' },
  { year: '2018', title: 'First 10MW', desc: 'Crossed 10MW installed capacity across Telangana and Andhra Pradesh.' },
  { year: '2020', title: '100MW Milestone', desc: 'Reached 100MW cumulative installations spanning 8 states.' },
  { year: '2022', title: 'New Initiatives', desc: 'Launched Green Hydrogen and CBG verticals aligned with national missions.' },
  { year: '2024', title: '500MW+', desc: 'Crossed 500MW installed capacity with 200+ projects across 15+ states.' },
]

const TEAM = [
  { name: 'Ramakrishna Poilina', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { name: 'Sachin Kumar Koyalkar', role: 'Director - Projects', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { name: 'Vijay Kumar S', role: 'Director - Operations', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
]

const VALUES = [
  { icon: '\u{1F91D}', title: 'Trust', desc: 'Transparent dealings and reliable execution on every project we undertake.' },
  { icon: '\u26A1', title: 'Energy', desc: 'Passionate drive to power India with clean, renewable energy solutions.' },
  { icon: '\u{1F4A1}', title: 'Creativity', desc: 'Innovative engineering solutions tailored to each unique project requirement.' },
  { icon: '\u{1F3AF}', title: 'Execution', desc: 'On-time, on-budget delivery with uncompromising quality standards.' },
]

const STATS = [
  { val: '500MW+', label: 'Installed Capacity' },
  { val: '200+', label: 'Projects Delivered' },
  { val: '15+', label: 'States Covered' },
  { val: '2017', label: 'Year Founded' },
]

const CAPABILITIES = ['System Design', 'EPC Delivery', 'Performance Monitoring', 'Asset Management', 'Financing Solutions', 'O&M Services']

export default function About({ setPage }) {
  return (
    <>
      <PageHeader badge="Who We Are" title="About Polivium" subtitle="India\u2019s leading turnkey solution provider for solar & renewable energy systems." />

      {/* Main About Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{alignItems:'center',gap:60}}>
            <div style={{position:'relative'}}>
              <div style={{borderRadius:20,overflow:'hidden',position:'relative'}}>
                <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80" alt="About Polivium" style={{width:'100%',height:480,objectFit:'cover'}} />
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,53,116,.4),transparent 60%)'}} />
              </div>
              <div style={{position:'absolute',bottom:-20,right:-20,background:'linear-gradient(135deg,var(--p500),var(--p700))',borderRadius:16,padding:'20px 26px',boxShadow:'0 16px 40px rgba(14,86,175,.35)'}}>
                <div style={{fontWeight:800,fontSize:30,color:'#fff',lineHeight:1}}>2017</div>
                <div style={{color:'rgba(255,255,255,.85)',fontSize:10,fontWeight:600,letterSpacing:1.5,marginTop:3}}>FOUNDED</div>
              </div>
            </div>
            <div>
              <div className="badge badge--blue" style={{marginBottom:18}}>● About Polivium</div>
              <h2 style={{fontSize:'clamp(1.6rem,3vw,2.5rem)',fontWeight:800,lineHeight:1.15,marginBottom:22}}>India's Leading<br/><span style={{background:'linear-gradient(135deg,var(--p500),var(--s500))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Clean Energy Revolution</span></h2>
              <p style={{color:'var(--n700)',lineHeight:1.95,fontSize:15,marginBottom:16}}>Polivium is a leading turnkey solution provider of photovoltaic systems in rural and urban India. We create and deliver bespoke solar energy solutions to the commercial, industrial and public sectors for new build, refurbishment projects and existing buildings.</p>
              <p style={{color:'var(--n500)',lineHeight:1.95,fontSize:14,marginBottom:28}}>With our leading expertise in system design and installation, we provide integrated renewable energy — from design & consultation right through to installation and performance monitoring. We are amongst the top service providers of floating solar panels in India.</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:28}}>
                {CAPABILITIES.map(c => <span key={c} style={{padding:'5px 13px',background:'var(--p50)',border:'1px solid var(--p200)',borderRadius:100,color:'var(--p700)',fontSize:12,fontWeight:500}}>{c}</span>)}
              </div>
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <button className="btn btn--primary" onClick={() => setPage('services')}>Our Services →</button>
                <button className="btn btn--outline" onClick={() => setPage('contact')}>Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{background:'var(--p50)',padding:'56px 0'}}>
        <div className="container">
          <div className="grid grid--4" style={{textAlign:'center'}}>
            {STATS.map(s => (
              <div key={s.label} className="reveal">
                <div style={{fontSize:36,fontWeight:800,color:'var(--p600)'}}>{s.val}</div>
                <div style={{fontSize:13,color:'var(--n500)',marginTop:4,fontWeight:500}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--light">
        <div className="container text-center">
          <div className="badge badge--blue" style={{marginBottom:12}}>● Our Core Values</div>
          <h2 style={{fontSize:32,fontWeight:800,marginBottom:12}}>Trust • Energy • Creativity • Execution</h2>
          <p style={{color:'var(--n500)',maxWidth:560,margin:'0 auto 48px'}}>The four pillars that drive everything we do at Polivium.</p>
          <div className="grid grid--4">
            {VALUES.map(v => (
              <div key={v.title} className="card reveal" style={{padding:28,textAlign:'center'}}>
                <span style={{fontSize:36}}>{v.icon}</span>
                <h3 style={{fontSize:17,fontWeight:700,marginTop:12}}>{v.title}</h3>
                <p style={{color:'var(--n500)',fontSize:13.5,lineHeight:1.7,marginTop:8}}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{marginBottom:48}}>
            <div className="badge badge--blue" style={{marginBottom:12}}>● Our Journey</div>
            <h2 style={{fontSize:32,fontWeight:800}}>Key Milestones</h2>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:0,position:'relative',paddingLeft:32}}>
            <div style={{position:'absolute',left:14,top:0,bottom:0,width:2,background:'var(--p200)'}} />
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="reveal" style={{display:'flex',gap:24,alignItems:'flex-start',paddingBottom:36,position:'relative'}}>
                <div style={{position:'absolute',left:-32,width:28,height:28,borderRadius:'50%',background:'var(--p500)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:11,fontWeight:700,zIndex:1}}>{i+1}</div>
                <div>
                  <div style={{fontSize:13,fontWeight:700,color:'var(--p600)',marginBottom:4}}>{m.year}</div>
                  <h3 style={{fontSize:18,fontWeight:700,marginBottom:6}}>{m.title}</h3>
                  <p style={{color:'var(--n500)',fontSize:14,lineHeight:1.7}}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--light">
        <div className="container text-center">
          <div className="badge badge--blue" style={{marginBottom:12}}>● Leadership</div>
          <h2 style={{fontSize:32,fontWeight:800,marginBottom:48}}>Meet Our Team</h2>
          <div className="grid grid--3">
            {TEAM.map(t => (
              <div key={t.name} className="card reveal" style={{textAlign:'center'}}>
                <img src={t.img} alt={t.name} style={{height:260,width:'100%',objectFit:'cover'}} />
                <div style={{padding:24}}>
                  <h3 style={{fontSize:17,fontWeight:700}}>{t.name}</h3>
                  <p style={{color:'var(--p600)',fontSize:13,fontWeight:600,marginTop:4}}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="container text-center">
          <h2 style={{fontSize:32,fontWeight:800,color:'#fff'}}>Ready to Partner With Us?</h2>
          <p style={{color:'rgba(255,255,255,.7)',marginTop:12,fontSize:16}}>Let's discuss how Polivium can power your business with clean energy.</p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap',marginTop:28}}>
            <button className="btn btn--white" onClick={() => setPage('contact')}>Contact Us</button>
            <button className="btn btn--accent" onClick={() => setPage('calculator')}>☀ Calculate Savings</button>
          </div>
        </div>
      </section>
    </>
  )
}
