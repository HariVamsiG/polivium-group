import PageHeader from '../components/PageHeader'

const DATA = [
  { icon:'📈', title:'Performance Monitoring', desc:'Real-time SCADA monitoring with AI-driven analytics for maximum generation.' },
  { icon:'🔧', title:'Preventive Maintenance', desc:'Scheduled cleaning, thermal imaging, and component health checks.' },
  { icon:'⚡', title:'Corrective Maintenance', desc:'Rapid response for inverter faults, module replacements, and cable repairs.' },
  { icon:'🌿', title:'Vegetation Management', desc:'Regular clearing to prevent shading losses and maintain access roads.' },
  { icon:'📊', title:'Reporting & Analytics', desc:'Monthly performance reports, PR analysis, and degradation tracking.' },
  { icon:'🛡️', title:'Warranty Management', desc:'OEM coordination for warranty claims on modules, inverters, and structures.' },
]

export default function AssetManagement({ setPage }) {
  return (
    <>
      <PageHeader badge="O&M Excellence" title="Operations & Maintenance" subtitle="Ensuring optimal performance and longevity of your solar energy systems." />
      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {DATA.map(s => (
              <div key={s.title} className="card reveal" style={{padding:28}}>
                <span style={{fontSize:32}}>{s.icon}</span>
                <h3 style={{fontSize:17,fontWeight:700,marginTop:12}}>{s.title}</h3>
                <p style={{color:'var(--n500)',fontSize:13.5,lineHeight:1.7,marginTop:8}}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{marginTop:56}}>
            <button className="btn btn--primary" onClick={() => setPage('contact')}>Get O&M Quote →</button>
          </div>
        </div>
      </section>
    </>
  )
}
