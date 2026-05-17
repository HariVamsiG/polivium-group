import PageHeader from '../components/PageHeader'

const JOBS = [
  { title:'Solar EPC Sales Manager', loc:'Hyderabad', type:'Full-time', exp:'2–3 years in EPC Sales or Distribution Sales' },
  { title:'Project Engineer - Solar', loc:'Pan India', type:'Full-time', exp:'3–5 years in solar EPC project execution' },
  { title:'Design Engineer', loc:'Hyderabad', type:'Full-time', exp:'2+ years in PVsyst, AutoCAD, solar system design' },
  { title:'O&M Technician', loc:'Multiple Locations', type:'Full-time', exp:'1–3 years in solar plant maintenance' },
  { title:'Business Development Executive', loc:'Hyderabad', type:'Full-time', exp:'1–2 years in B2B sales, renewable energy preferred' },
]

export default function Careers() {
  return (
    <>
      <PageHeader badge="Join Us" title="Careers at Polivium" subtitle="Build the future of clean energy with us" />
      <section className="section">
        <div className="container" style={{maxWidth:800}}>
          <div style={{display:'flex',flexDirection:'column',gap:20}}>
            {JOBS.map(j => (
              <div key={j.title} className="card reveal" style={{padding:28,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16}}>
                <div>
                  <h3 style={{fontSize:17,fontWeight:700}}>{j.title}</h3>
                  <p style={{fontSize:13,color:'var(--n500)',marginTop:4}}>📍 {j.loc} • {j.type}</p>
                  <p style={{fontSize:13,color:'var(--n500)',marginTop:4}}>{j.exp}</p>
                </div>
                <a href="mailto:careers@polivium.com" className="btn btn--outline" style={{padding:'9px 20px',fontSize:13}}>Apply →</a>
              </div>
            ))}
          </div>
          <div className="text-center" style={{marginTop:48,padding:32,background:'var(--p50)',borderRadius:16}}>
            <p style={{color:'var(--n700)'}}>Don't see a role that fits? Send your resume to</p>
            <a href="mailto:careers@polivium.com" style={{color:'var(--p600)',fontWeight:700,fontSize:16}}>careers@polivium.com</a>
          </div>
        </div>
      </section>
    </>
  )
}
