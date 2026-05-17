import PageHeader from '../components/PageHeader'

const STEPS = [
  { num: '01', title: 'Project Planning & Site Assessment', desc: 'Land survey, solar irradiance analysis, shadow study, and site feasibility. Determines optimal panel orientation, tilt angles, and row spacing.', icon: '📐' },
  { num: '02', title: 'Design & Engineering', desc: 'Electrical design (string sizing, inverter selection, evacuation), structural engineering (foundations, wind load), and technology selection (TOPCon, bifacial, trackers).', icon: '✏️' },
  { num: '03', title: 'Procurement', desc: 'Sourcing PV modules, inverters, transformers, cables, mounting structures. Includes vendor evaluation, quality checks, and factory inspections.', icon: '📦' },
  { num: '04', title: 'Construction & Installation', desc: 'Site levelling, roads, mounting structures, module installation, DC/AC cabling, inverter & transformer installation with safety protocols.', icon: '🏗️' },
  { num: '05', title: 'Testing & Commissioning', desc: 'String-level testing, inverter load testing, grid synchronisation. Requires Electrical Inspector, DISCOM, and CEIG approvals before going live.', icon: '⚡' },
  { num: '06', title: 'Operations & Maintenance', desc: 'SCADA monitoring, preventive maintenance, fault diagnostics, cleaning schedules, and performance reporting for 25+ year plant life.', icon: '🛡️' },
]

const BENEFITS = [
  { icon: '📞', title: 'Single Point of Contact', desc: 'One contractor manages everything — no multi-vendor coordination.' },
  { icon: '✅', title: 'Full Accountability', desc: 'Responsible for design, procurement, construction, and performance guarantees.' },
  { icon: '💰', title: 'Cost Savings', desc: 'Bulk procurement discounts on modules, inverters, and BOS components.' },
  { icon: '🛡️', title: 'Reduced Risk', desc: 'Project risks transferred to EPC contractor — design errors, delays, performance.' },
  { icon: '⭐', title: 'Quality Assurance', desc: 'Compliance with IEC, BIS, and MNRE standards throughout execution.' },
  { icon: '📊', title: 'Performance Warranty', desc: 'Guaranteed generation for years after commissioning with penalty clauses.' },
]

export default function EPC({ setPage }) {
  return (
    <>
      <PageHeader badge="Services → EPC" title="Solar EPC Services" subtitle="Engineering, Procurement & Construction — complete project delivery from design to commissioning." />

      {/* What is EPC */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{alignItems:'center',gap:48}}>
            <div className="reveal">
              <div className="badge badge--blue" style={{marginBottom:16}}>● What is Solar EPC?</div>
              <h2 style={{fontSize:28,fontWeight:800,marginBottom:16}}>Full Responsibility, Single Contractor</h2>
              <p style={{color:'var(--n700)',lineHeight:1.85,fontSize:15,marginBottom:12}}>Solar EPC means <strong>Engineering, Procurement, and Construction</strong> — a single company takes full responsibility for designing, supplying, building, and commissioning your solar power project.</p>
              <p style={{color:'var(--n500)',lineHeight:1.85,fontSize:14,marginBottom:20}}>No multi-vendor coordination needed. The EPC contractor manages the entire process from site assessment to grid synchronisation, delivering a turnkey plant with performance warranties.</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                {['System Design','Equipment Procurement','Construction','Grid Sync','Performance Warranty','O&M Support'].map(t => (
                  <span key={t} style={{padding:'5px 13px',background:'var(--p50)',border:'1px solid var(--p200)',borderRadius:100,color:'var(--p700)',fontSize:12,fontWeight:500}}>{t}</span>
                ))}
              </div>
            </div>
            <img src="https://solarsure.in/wp-content/uploads/2026/02/solarsure-blog-banners-2.jpg" alt="Solar EPC" className="reveal" style={{borderRadius:16,width:'100%',height:340,objectFit:'cover',boxShadow:'var(--shadow-lg)'}} />
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center" style={{marginBottom:48}}>
            <div className="badge badge--blue">● How It Works</div>
            <h2 style={{fontSize:28,fontWeight:800,marginTop:12}}>The 6-Step EPC Process</h2>
            <p style={{color:'var(--n500)',marginTop:8,maxWidth:520,margin:'8px auto 0'}}>Each stage prepares the ground for the next — skipping any step leads to performance loss.</p>
          </div>
          <div className="grid grid--3">
            {STEPS.map(s => (
              <div key={s.num} className="card reveal" style={{padding:28}}>
                <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
                  <div style={{width:40,height:40,borderRadius:10,background:'var(--p50)',border:'1px solid var(--p200)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>{s.icon}</div>
                  <div>
                    <div style={{fontSize:11,color:'var(--p600)',fontWeight:700,letterSpacing:1}}>STEP {s.num}</div>
                    <h3 style={{fontSize:15,fontWeight:700}}>{s.title}</h3>
                  </div>
                </div>
                <p style={{color:'var(--n500)',fontSize:13,lineHeight:1.75}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Image */}
      <section className="section">
        <div className="container text-center">
          <img src="https://solarsure.in/wp-content/uploads/2026/02/solarsure-blog-banners.jpg" alt="Solar EPC Process" style={{borderRadius:16,width:'100%',maxWidth:900,margin:'0 auto',boxShadow:'var(--shadow-md)'}} className="reveal" />
        </div>
      </section>

      {/* Why EPC */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center" style={{marginBottom:48}}>
            <div className="badge badge--blue">● Why Choose EPC?</div>
            <h2 style={{fontSize:28,fontWeight:800,marginTop:12}}>Key Advantages</h2>
          </div>
          <div className="grid grid--3">
            {BENEFITS.map(b => (
              <div key={b.title} className="card reveal" style={{padding:24,display:'flex',gap:14,alignItems:'flex-start'}}>
                <div style={{width:40,height:40,borderRadius:10,background:'var(--p50)',border:'1px solid var(--p200)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,flexShrink:0}}>{b.icon}</div>
                <div>
                  <h3 style={{fontSize:15,fontWeight:700,marginBottom:4}}>{b.title}</h3>
                  <p style={{color:'var(--n500)',fontSize:13,lineHeight:1.7}}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="container text-center">
          <h2 style={{fontSize:28,fontWeight:800,color:'#fff'}}>Ready to Build Your Solar Plant?</h2>
          <p style={{color:'rgba(255,255,255,.7)',marginTop:12,fontSize:15}}>Get a free consultation from our EPC experts.</p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap',marginTop:28}}>
            <button className="btn btn--white" onClick={() => setPage('contact')}>Contact Us</button>
            <button className="btn btn--accent" onClick={() => setPage('calculator')}>☀ Savings Calculator</button>
          </div>
        </div>
      </section>
    </>
  )
}
