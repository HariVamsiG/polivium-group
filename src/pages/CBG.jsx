import PageHeader from '../components/PageHeader'

const AREAS = ['Reception Area (Feeding)','Digester Area (Fermentation Tank)','Purification Area (PSA)','Filling Area (Compression & Cascading)','Bio Fertiliser Organisation Area']
const BENEFITS = ['Lifetime business for the generation','Collateral-free loan up to Rs. 2 Crore','Income tax holiday for five years','GST benefit on CBG Manufacturing Plant','World-class training for operations']
const GOV = ['SATAT initiative — CBG supply to OMCs','Waste to Energy Program (MNRE)','National Policy on Biofuels','Subsidised rate of interest on loans','Waiver on land conversion charges']

export default function CBG({ setPage }) {
  return (
    <>
      <PageHeader badge="New Initiatives" title="CBG (Bio-CNG) Production Plants" subtitle="Your partner in sustainable bio-energy solutions across India." bg="linear-gradient(135deg,#166534,#15803d)" />
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{alignItems:'center'}}>
            <div className="reveal">
              <h2 style={{fontSize:28,fontWeight:800}}>What is a CBG Plant?</h2>
              <div style={{width:48,height:3,background:'linear-gradient(90deg,#2d9e42,var(--s500))',borderRadius:2,margin:'16px 0'}}/>
              <p style={{color:'var(--n500)',lineHeight:1.8}}>A CBG Plant produces clean, renewable energy from organic waste through anaerobic digestion. Biodegradable waste is converted into biogas, then compressed and purified into high-quality Compressed Biogas.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80" alt="CBG" style={{borderRadius:16,height:320,width:'100%',objectFit:'cover'}} className="reveal" />
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <h2 style={{fontSize:28,fontWeight:800,textAlign:'center',marginBottom:32}}>Five Areas of a CBG Plant</h2>
          <div className="grid grid--3">
            {AREAS.map((a,i) => <div key={a} className="card reveal" style={{padding:20,display:'flex',gap:12,alignItems:'center'}}><div style={{width:36,height:36,borderRadius:'50%',background:'var(--p50)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontWeight:700,color:'var(--p600)',fontSize:14}}>{i+1}</div><p style={{fontSize:14,color:'var(--n700)',fontWeight:500}}>{a}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            <div className="reveal"><h3 style={{fontSize:22,fontWeight:700,marginBottom:16}}>Investor Benefits</h3><ul style={{display:'flex',flexDirection:'column',gap:10}}>{BENEFITS.map(b => <li key={b} style={{fontSize:14,color:'var(--n700)',display:'flex',gap:8}}><span style={{color:'var(--p500)'}}>✓</span>{b}</li>)}</ul></div>
            <div className="reveal"><h3 style={{fontSize:22,fontWeight:700,marginBottom:16}}>Government Support</h3><ul style={{display:'flex',flexDirection:'column',gap:10}}>{GOV.map(g => <li key={g} style={{fontSize:14,color:'var(--n700)',display:'flex',gap:8}}><span style={{color:'var(--a500)'}}>★</span>{g}</li>)}</ul></div>
          </div>
          <div className="text-center" style={{marginTop:56}}>
            <button className="btn btn--primary" onClick={() => setPage('contact')}>Partner With Us →</button>
          </div>
        </div>
      </section>
    </>
  )
}
