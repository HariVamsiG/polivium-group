import PageHeader from '../components/PageHeader'

const SOLUTIONS = [
  { icon:'🏢', title:'Rooftop Solar', desc:'Commercial & industrial rooftop installations from 25 kW to 5 MW. Net metering enabled.', img:'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=500&q=80' },
  { icon:'🌍', title:'Ground Mounted Solar', desc:'Large-scale ground-mount solar farms for captive consumption and open access.', img:'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80' },
  { icon:'☀️', title:'Solar Park', desc:'Utility-scale solar parks from 5 MW to 100MW+ for PSUs and IPPs.', img:'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&q=80' },
  { icon:'🔋', title:'Battery Energy Storage', desc:'Grid-scale BESS for peak shaving, frequency regulation, and energy arbitrage.', img:'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=500&q=80' },
  { icon:'💧', title:'Floating Solar Panels', desc:'Innovative FPV systems for reservoirs, ponds, and water bodies. Reduces evaporation by 70%.', img:'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&q=80' },
  { icon:'🚗', title:'Solar Carport', desc:'Solar-powered parking structures for commercial complexes, malls, and campuses.', img:'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=500&q=80' },
  { icon:'🌬️', title:'Hybrid Solar & Wind', desc:'Combined solar-wind hybrid systems for 24/7 renewable energy generation.', img:'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=500&q=80' },
  { icon:'🏭', title:'Sub-Stations', desc:'EPC of switchyards and substations up to 400/220/132 kV for grid infrastructure.', img:'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80' },
  { icon:'🌀', title:'Wind Turbine', desc:'Onshore wind energy projects — site assessment, procurement, and installation.', img:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&q=80' },
]

const SERVICES_LIST = [
  { icon:'⚙️', title:'EPC Services', desc:'Engineering, Procurement & Construction — complete project delivery from design to commissioning.', key:'epc' },
  { icon:'💳', title:'Financing Models', desc:'CAPEX / Leasing / OPEX / PPA / RESCO — flexible financing for every business.', key:'financing' },
  { icon:'📊', title:'Asset Management', desc:'24/7 monitoring, preventive maintenance, and performance optimization.', key:'assetmanagement' },
  { icon:'🚀', title:'New Initiatives', desc:'Green Hydrogen & CBG (Bio-CNG) — pioneering the next frontier of clean energy.', key:'initiatives' },
]

export default function Services({ setPage }) {
  return (
    <>
      <PageHeader badge="What We Do" title="Our Solutions & Services" subtitle="Leaders in renewable energy services across India — from rooftop to utility-scale." />

      {/* Solutions Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{marginBottom:48}}>
            <div className="badge badge--blue">● All Solutions</div>
            <h2 style={{fontSize:32,fontWeight:800,marginTop:12}}>Solar & Renewable Energy Solutions</h2>
          </div>
          <div className="grid grid--3">
            {SOLUTIONS.map(s => (
              <div key={s.title} className="card reveal">
                <img src={s.img} alt={s.title} style={{width:'100%',height:180,objectFit:'cover'}} />
                <div style={{padding:24}}>
                  <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
                    <span style={{fontSize:22}}>{s.icon}</span>
                    <h3 style={{fontSize:16,fontWeight:700}}>{s.title}</h3>
                  </div>
                  <p style={{color:'var(--n500)',fontSize:13.5,lineHeight:1.7}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center" style={{marginBottom:48}}>
            <div className="badge badge--blue">● Our Services</div>
            <h2 style={{fontSize:32,fontWeight:800,marginTop:12}}>End-to-End Service Offerings</h2>
          </div>
          <div className="grid grid--2">
            {SERVICES_LIST.map(s => (
              <div key={s.title} className="card reveal" style={{padding:32,cursor:'pointer'}} onClick={() => setPage(s.key)}>
                <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
                  <div style={{width:52,height:52,borderRadius:14,background:'var(--p50)',border:'1px solid var(--p200)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:24}}>{s.icon}</div>
                  <h3 style={{fontSize:18,fontWeight:700}}>{s.title}</h3>
                </div>
                <p style={{color:'var(--n500)',fontSize:14,lineHeight:1.7,marginBottom:16}}>{s.desc}</p>
                <button className="btn btn--outline" style={{padding:'9px 20px',fontSize:13}}>Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="container text-center">
          <h2 style={{fontSize:32,fontWeight:800,color:'#fff'}}>Need a Custom Solution?</h2>
          <p style={{color:'rgba(255,255,255,.7)',marginTop:12,fontSize:16}}>Talk to our experts — we design solutions tailored to your energy needs.</p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap',marginTop:28}}>
            <button className="btn btn--white" onClick={() => setPage('contact')}>Contact Us</button>
            <button className="btn btn--accent" onClick={() => setPage('calculator')}>☀ Calculate Savings</button>
          </div>
        </div>
      </section>
    </>
  )
}
