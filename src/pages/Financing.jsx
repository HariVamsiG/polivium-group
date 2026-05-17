import PageHeader from '../components/PageHeader'

const MODELS = [
  { title:'CAPEX Solar', icon:'💰', desc:'Own your solar plant outright. Maximum long-term savings with full ownership benefits.', best:'Businesses with capital budget for solar investment' },
  { title:'OPEX / PPA', icon:'📊', desc:'Zero upfront investment. Pay only for energy generated at a fixed rate lower than grid tariff.', best:'Any business wanting solar benefits with zero capital investment' },
  { title:'RESCO Model', icon:'🤝', desc:'Third-party owns and operates the plant on your rooftop. You buy power at discounted rates.', best:'Large consumers with suitable roof space but no capex appetite' },
  { title:'Leasing', icon:'📋', desc:'Lease the solar equipment with fixed monthly payments. Own the system at end of term.', best:'SMEs wanting predictable costs with eventual ownership' },
]

export default function Financing({ setPage }) {
  return (
    <>
      <PageHeader badge="Flexible Options" title="Solar Financing" subtitle="CAPEX / LEASING / OPEX / PPA / RESCO — going solar has never been this easy." />
      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {MODELS.map(m => (
              <div key={m.title} className="card reveal" style={{padding:36}}>
                <span style={{fontSize:40}}>{m.icon}</span>
                <h3 style={{fontSize:22,fontWeight:700,marginTop:16}}>{m.title}</h3>
                <p style={{color:'var(--n500)',fontSize:14,lineHeight:1.7,margin:'12px 0'}}>{m.desc}</p>
                <div style={{padding:12,background:'#fff8eb',borderRadius:10,border:'1px solid var(--a200,#fde68a)'}}>
                  <span style={{fontSize:11,fontWeight:700,color:'var(--a600)'}}>BEST FOR:</span>
                  <p style={{fontSize:13,color:'var(--a700,#a14c08)',marginTop:4}}>{m.best}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{marginTop:56}}>
            <button className="btn btn--primary" onClick={() => setPage('contact')}>Discuss Financing →</button>
          </div>
        </div>
      </section>
    </>
  )
}
