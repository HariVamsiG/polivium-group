import PageHeader from '../components/PageHeader'

const HIGHLIGHTS = [
  { icon: '🌱', title: 'High Yield Feedstock', desc: 'Napier grass produces 150–200 tonnes per acre annually with 5–6 harvests a year.' },
  { icon: '⚡', title: 'Rich Biogas Output', desc: 'High organic content yields methane-rich biogas (55–60% CH₄), ideal for compression into CNG-grade fuel.' },
  { icon: '🔄', title: 'Perennial & Low Maintenance', desc: 'Once planted, Napier grass sustains production for 3–5 years with minimal inputs.' },
  { icon: '🌍', title: 'Carbon Negative', desc: 'Captures more CO₂ during growth than released during combustion — a net carbon sink.' },
]

const BENEFITS = ['Lifetime recurring revenue from gas sales', 'Collateral-free loan up to ₹2 Crore', 'Income tax holiday for five years', 'GST benefits on CBG plant equipment', 'Bio-fertiliser as valuable by-product']
const GOV = ['SATAT initiative — CBG offtake by Oil Marketing Companies', 'Waste to Energy Program (MNRE)', 'National Policy on Biofuels', 'Subsidised interest rates on project loans', 'Waiver on land conversion charges']

export default function CBG({ setPage }) {
  return (
    <>
      <PageHeader badge="New Initiatives" title="Bio-CNG from Napier Grass" subtitle="Clean, renewable transport fuel produced from one of the world's fastest-growing energy crops." bg="linear-gradient(135deg,#166534,#15803d)" />

      {/* What is Bio-CNG */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{alignItems:'center',gap:48}}>
            <div className="reveal">
              <div className="badge badge--blue" style={{marginBottom:16}}>● What is Bio-CNG?</div>
              <h2 style={{fontSize:28,fontWeight:800,marginBottom:16}}>Napier Grass → Compressed Biogas</h2>
              <p style={{color:'var(--n700)',lineHeight:1.85,fontSize:15,marginBottom:12}}>Bio-CNG (Compressed Biogas) is a purified, compressed form of biogas with 90%+ methane — chemically identical to natural gas and a direct drop-in replacement for fossil CNG in vehicles and industries.</p>
              <p style={{color:'var(--n500)',lineHeight:1.85,fontSize:14}}>Our plants use <strong>Napier grass</strong> (Pennisetum purpureum) as the primary feedstock. This fast-growing tropical grass undergoes anaerobic digestion to produce biogas, which is then purified and compressed to 250 bar for use as automotive and industrial fuel.</p>
            </div>
            <img src="/images/BioCNG.jpeg" alt="Bio-CNG Plant" style={{borderRadius:16,height:340,width:'100%',objectFit:'cover',boxShadow:'var(--shadow-lg)'}} className="reveal" />
          </div>
        </div>
      </section>

      {/* Why Napier Grass */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center" style={{marginBottom:40}}>
            <div className="badge badge--blue">● Why Napier Grass?</div>
            <h2 style={{fontSize:28,fontWeight:800,marginTop:12}}>The Ideal Energy Crop for Bio-CNG</h2>
          </div>
          <div className="grid grid--2">
            {HIGHLIGHTS.map(h => (
              <div key={h.title} className="card reveal" style={{padding:24,display:'flex',gap:16,alignItems:'flex-start'}}>
                <div style={{width:44,height:44,borderRadius:12,background:'var(--p50)',border:'1px solid var(--p200)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,flexShrink:0}}>{h.icon}</div>
                <div>
                  <h3 style={{fontSize:16,fontWeight:700,marginBottom:6}}>{h.title}</h3>
                  <p style={{color:'var(--n500)',fontSize:14,lineHeight:1.7}}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Government Support */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            <div className="reveal">
              <h3 style={{fontSize:22,fontWeight:700,marginBottom:16}}>Investor Benefits</h3>
              <ul style={{display:'flex',flexDirection:'column',gap:10}}>
                {BENEFITS.map(b => <li key={b} style={{fontSize:14,color:'var(--n700)',display:'flex',gap:8}}><span style={{color:'var(--p500)'}}>✓</span>{b}</li>)}
              </ul>
            </div>
            <div className="reveal">
              <h3 style={{fontSize:22,fontWeight:700,marginBottom:16}}>Government Support</h3>
              <ul style={{display:'flex',flexDirection:'column',gap:10}}>
                {GOV.map(g => <li key={g} style={{fontSize:14,color:'var(--n700)',display:'flex',gap:8}}><span style={{color:'var(--a500)'}}>★</span>{g}</li>)}
              </ul>
            </div>
          </div>
          <div className="text-center" style={{marginTop:56}}>
            <button className="btn btn--primary" onClick={() => setPage('contact')}>Partner With Us →</button>
          </div>
        </div>
      </section>
    </>
  )
}
