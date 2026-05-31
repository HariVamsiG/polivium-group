import PageHeader from '../components/PageHeader'

const DATA = {
  sol_rooftop: { title:'Rooftop Solar', sub:'Commercial & Industrial', img:'/images/Rooftop_Solar.jpeg', tagline:'Turn your roof into a power plant',
    intro:'Turning to green energy and reducing carbon footprint got a lot easier with rooftop solar. Commercial and industrial bodies are increasingly choosing solar energy over conventional energy sources.',
    body:'Adopting solar power significantly reduces energy costs and can even earn profit from excess energy sold back to the grid. With Polivium, you can ensure you have chosen the best commercial or industrial solar installation partner.',
    body2:'We handle everything from feasibility studies, structural analysis, system design, procurement, installation, and performance monitoring.',
    stats:[['70%','Bill Reduction'],['25 Yrs','System Life'],['3–5 Yrs','Payback Period']],
    benefits:['Lower industrial & commercial electricity tariffs','Transform underutilised rooftop space','Grid support and net-metering income','Energy independence from utility rate hikes','Reduce carbon footprint significantly','Government subsidy for residential'] },
  sol_ground: { title:'Ground Mounted Solar', sub:'Large Scale Arrays', img:'/images/Ground-Solar.jpeg', tagline:'Scalable solar for any land size',
    intro:'Polivium enables businesses looking to save electricity costs and switch to solar power with comprehensive ground-mounted solar solutions for any scale of deployment.',
    body:'Ground-mounted solar systems are ideal for large commercial or industrial premises with available land. These systems can be optimally tilted and oriented for maximum energy generation.',
    body2:'Our solutions include single-axis and dual-axis trackers for maximum yield, fixed-tilt systems for cost efficiency, and agrivoltaic designs combining farming and solar generation.',
    stats:[['100MW+','Capacity Delivered'],['99.5%','Uptime SLA'],['40%','Depreciation Benefit']],
    benefits:['Optimal tilt and orientation for maximum yield','Scalable from 100 kW to 100+ MW','Single-axis and dual-axis tracker options','Agrivoltaic design possible','Full EPC with performance guarantee'] },
  sol_park: { title:'Solar Park', sub:'Utility Scale Power', img:'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&q=80', tagline:'Grid-level renewable power generation',
    intro:'A solar park is a large-scale renewable energy installation designed for grid-level power generation, aggregating multiple projects with shared infrastructure.',
    body:'Solar parks share common infrastructure such as grid connection, roads, and security. This reduces per-unit project cost and speeds up commissioning timelines.',
    body2:'Polivium has experience developing utility-scale solar parks from 5 MW to 500 MW. We manage land acquisition, regulatory approvals, grid interconnection, and long-term O&M.',
    stats:[['500MW','Total Pipeline'],['15+','Parks Developed'],['8.5%','Avg. IRR']],
    benefits:['5 MW to 500 MW capacity range','Shared infrastructure reduces LCOE','Grid interconnection & SCADA included','Land acquisition and regulatory support','Long-term O&M contracts available'] },
  sol_bess: { title:'Battery Energy Storage', sub:'Solar + Storage (BESS)', img:'/images/BESS.jpeg', tagline:'Store the sun, power the night',
    intro:'Battery Energy Storage Systems paired with solar enable businesses to store excess energy generated during peak sunlight hours and dispatch it when needed.',
    body:'Using advanced lithium-ion and LiFePO4 battery technologies, Polivium delivers reliable 24/7 clean energy solutions for industrial, commercial, and utility customers.',
    body2:'Our BESS solutions support peak demand management, time-of-use arbitrage, backup power for critical loads, and grid stabilization services.',
    stats:[['99.9%','System Availability'],['6000+','Cycle Life'],['10 Yr','Performance Warranty']],
    benefits:['24/7 solar energy availability','Peak demand charge reduction','Time-of-use energy arbitrage','Critical load backup power','Grid stabilisation ancillary services'] },
  sol_floating: { title:'Floating Solar Panels', sub:'Innovative Technology', img:'/images/Floating_Solar.jpg', tagline:'Solar on water — innovative & efficient',
    intro:'Polivium develops innovative floating solar technologies for water bodies, reservoirs, irrigation tanks, and industrial ponds.',
    body:'Floating photovoltaic (FPV) systems offer a dual benefit — generating clean energy while reducing water evaporation by up to 70%. The cooling effect of water improves panel efficiency by 5–10%.',
    body2:'Our FPV systems use high-quality HDPE floats, corrosion-resistant mounting systems, and waterproof cable management. We handle all aspects from bathymetric surveys to commissioning.',
    stats:[['50+','FPV Projects'],['70%','Evaporation Reduced'],['10%','Higher Efficiency']],
    benefits:['70% reduction in water evaporation','5–10% higher panel efficiency','No land acquisition required','Dual use of water bodies','Ideal for water-stressed regions'] },
  sol_carport: { title:'Solar Carport', sub:'Dual Use Infrastructure', img:'/images/Solar_Carport.jpg', tagline:'Solar shade for vehicles and profits',
    intro:'Any facility with a large parking space can transform it into a solar energy generator with Polivium premium carport solar structures.',
    body:'Solar carports integrate photovoltaic panels into overhead structures over parking areas. This dual-use approach maximises land utilisation without consuming additional space.',
    body2:'Our carport structures are engineered for wind and seismic loads, designed to accommodate EV charging stations, and can be combined with battery storage for peak-shaving.',
    stats:[['25 kW–5 MW','Capacity Range'],['EV Ready','Charging Integration'],['30%','Shading Benefit']],
    benefits:['Dual use — parking + power generation','Vehicle shade reduces heat damage','EV charging integration ready','No additional land required','Aesthetic premium design options'] },
  sol_hybrid: { title:'Hybrid Solar & Wind', sub:'Combined Renewable Systems', img:'/images/Hybrid-Solar-Wind.jpeg', tagline:'Best of both renewable worlds',
    intro:'Hybrid systems ensure uninterrupted power through intelligent management of multiple renewable sources and instant changeover capabilities.',
    body:'Combined solar-wind systems maximise land utilization and provide more consistent power generation throughout the day with complementary generation profiles.',
    body2:'Our controllers automatically adjust power references, rotate gensets for fuel-optimised running, and facilitate energy storage for peak shaving and load sharing.',
    stats:[['40%','Higher Yield vs Solo'],['24/7','Uninterrupted Power'],['Remote','Location Ready']],
    benefits:['Solar, storage, wind, and genset integration','Maximised sustainable power penetration','Ideal for self-consumption applications','Built-in power metering','Highly customisable control systems'] },
  sol_substation: { title:'Sub-Stations', sub:'Grid Infrastructure', img:'/images/Substation.jpg', tagline:'Backbone of renewable integration',
    intro:'We execute EPC of switchyards and substations up to 400/220/132 kV — the backbone of renewable energy integration into the grid.',
    body:'We perform detailed engineering of EHV substations and transmission lines, installing transformers and switchyards up to 400 kV, and indoor/outdoor lighting.',
    body2:'Our services cover substation design, bay erection, testing & commissioning, operation & maintenance, and liaison with utilities and regulators.',
    stats:[['400kV','Max Voltage'],['50+','Substations Built'],['100%','Uptime Record']],
    benefits:['Substation projects up to 400/220/132 kV','Detailed design and engineering','Bay erection: transformer & line bays','Testing, commissioning and diagnostics','Operation & maintenance','Liaison with utilities and regulatory approvals'] },
  sol_wind: { title:'Wind Turbine', sub:'Wind Energy', img:'/images/Wind-Turbines.jpg', tagline:'Harnessing India wind potential',
    intro:'Polivium provides end-to-end EPC for onshore wind projects including land assessment, site identification, acquisition, and necessary approvals.',
    body:'We handle project management, quality control, civil works including roads, foundations, and offices. Retrofitting is available to maximize profitability of ageing equipment.',
    body2:'Our expert team conducts comprehensive feasibility studies, analysing wind resources, terrain characteristics, and environmental impact factors for optimal project outcomes.',
    stats:[['300GW','India Wind Potential'],['5–100 MW','Project Range'],['25%+','Average CUF']],
    benefits:['Land assessment, identification and acquisition','Site assessment & feasibility studies','Permitting and regulatory compliance','Turbine procurement and supply chain','Civil works: roads, foundations, infrastructure','Retrofitting and blade performance optimisation'] },
}

const ALL_KEYS = Object.keys(DATA)

export default function SolutionDetail({ setPage, solutionKey }) {
  const sol = DATA[solutionKey]
  if (!sol) return null

  const otherSolutions = ALL_KEYS.filter(k => k !== solutionKey).slice(0, 3)

  return (
    <>
      <PageHeader badge={`Solutions → ${sol.title}`} title={sol.title} subtitle={sol.tagline} />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{alignItems:'center',gap:48}}>
            <div className="reveal">
              <div className="badge badge--blue" style={{marginBottom:16}}>● {sol.sub}</div>
              <h2 style={{fontSize:28,fontWeight:800,marginBottom:16}}>{sol.title} <span style={{background:'linear-gradient(135deg,var(--p500),var(--s500))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Solutions</span></h2>
              <p style={{color:'var(--n700)',lineHeight:1.9,fontSize:15,marginBottom:14}}>{sol.intro}</p>
              <p style={{color:'var(--n500)',lineHeight:1.9,fontSize:14,marginBottom:14}}>{sol.body}</p>
              {sol.body2 && <p style={{color:'var(--n500)',lineHeight:1.9,fontSize:14,marginBottom:24}}>{sol.body2}</p>}
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <button className="btn btn--primary" onClick={() => setPage('calculator')}>Calculate Savings</button>
                <button className="btn btn--outline" onClick={() => setPage('contact')}>Get a Quote</button>
              </div>
            </div>
            <img src={sol.img} alt={sol.title} className="reveal" style={{width:'100%',height:420,objectFit:'cover',borderRadius:20,boxShadow:'var(--shadow-lg)'}} />
          </div>
        </div>
      </section>

      {/* Stats */}
      {sol.stats && (
        <section style={{background:'linear-gradient(135deg,var(--p800),var(--p600))',padding:'44px 0'}}>
          <div className="container">
            <div className="grid grid--3" style={{textAlign:'center'}}>
              {sol.stats.map(([val, label]) => (
                <div key={label}>
                  <div style={{fontSize:'clamp(1.5rem,3vw,2.2rem)',fontWeight:800,color:'#fff'}}>{val}</div>
                  <div style={{color:'rgba(255,255,255,.7)',fontSize:11,letterSpacing:1.5,textTransform:'uppercase',marginTop:6,fontWeight:600}}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {sol.benefits && (
        <section className="section section--light">
          <div className="container">
            <div className="text-center" style={{marginBottom:40}}>
              <div className="badge badge--blue">● Key Benefits</div>
              <h3 style={{fontSize:24,fontWeight:700,marginTop:12}}>Why Choose {sol.title}?</h3>
            </div>
            <div className="grid grid--3">
              {sol.benefits.map((b, i) => (
                <div key={i} className="card reveal" style={{padding:'22px 20px',display:'flex',alignItems:'flex-start',gap:12}}>
                  <div style={{width:28,height:28,borderRadius:8,background:'var(--p50)',border:'1px solid var(--p200)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--p600)',fontSize:13,flexShrink:0,fontWeight:700}}>✓</div>
                  <p style={{color:'var(--n700)',fontSize:14,lineHeight:1.75}}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More Solutions */}
      <section className="section">
        <div className="container">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:32,flexWrap:'wrap',gap:16}}>
            <h3 style={{fontSize:22,fontWeight:700}}>More Solutions</h3>
            <button className="btn btn--outline" style={{padding:'9px 20px',fontSize:13}} onClick={() => setPage('services')}>View All →</button>
          </div>
          <div className="grid grid--3">
            {otherSolutions.map(k => {
              const s = DATA[k]
              return (
                <div key={k} className="card" style={{cursor:'pointer',overflow:'hidden'}} onClick={() => setPage(k)}>
                  <img src={s.img} alt={s.title} style={{width:'100%',height:180,objectFit:'cover'}} />
                  <div style={{padding:'18px 20px'}}>
                    <div style={{color:'var(--p600)',fontSize:10,letterSpacing:2,textTransform:'uppercase',fontWeight:600,marginBottom:6}}>{s.sub}</div>
                    <h4 style={{fontSize:16,fontWeight:700}}>{s.title}</h4>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
