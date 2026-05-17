import PageHeader from '../components/PageHeader'

const FACTS = [{val:'5 MMT',l:'Target annual output by 2030'},{val:'60–100 GW',l:'Required electrolyser capacity'},{val:'₹19,744 Cr',l:'Government outlay approved'}]
const STEPS = ['Renewable Power Generation','Water Electrolysis','Hydrogen Purification','Compression & Storage']

export default function Hydrogen({ setPage }) {
  return (
    <>
      <PageHeader badge="New Initiatives" title="Green Hydrogen" subtitle="State-of-the-Art Green Hydrogen Production" bg="linear-gradient(135deg,#0b6d88,#164e63)" />
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{alignItems:'center'}}>
            <div className="reveal">
              <h2 style={{fontSize:32,fontWeight:800}}>What is Green Hydrogen?</h2>
              <div style={{width:48,height:3,background:'linear-gradient(90deg,var(--s500),var(--p500))',borderRadius:2,margin:'16px 0'}}/>
              <p style={{color:'var(--n500)',lineHeight:1.8}}>Green hydrogen is produced by splitting water using renewable electricity through electrolysis. This results in zero-carbon hydrogen that can be used as fuel, feedstock, or energy storage medium.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80" alt="Hydrogen" style={{borderRadius:16,height:320,width:'100%',objectFit:'cover'}} className="reveal" />
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="container text-center">
          <h2 style={{fontSize:28,fontWeight:800,marginBottom:32}}>National Green Hydrogen Mission</h2>
          <div className="grid grid--3">
            {FACTS.map(f => <div key={f.l} className="card reveal" style={{padding:28,textAlign:'center'}}><div style={{fontSize:28,fontWeight:800,color:'var(--p600)'}}>{f.val}</div><p style={{fontSize:13,color:'var(--n500)',marginTop:8}}>{f.l}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container text-center">
          <h2 style={{fontSize:28,fontWeight:800,marginBottom:40}}>How It Works</h2>
          <div className="grid grid--4">
            {STEPS.map((st,i) => <div key={st} className="reveal" style={{textAlign:'center'}}><div style={{width:48,height:48,borderRadius:'50%',background:'var(--p50)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px',fontWeight:700,color:'var(--p600)',fontSize:18}}>{i+1}</div><p style={{fontSize:14,fontWeight:600,color:'var(--n700)'}}>{st}</p></div>)}
          </div>
          <button className="btn btn--primary" style={{marginTop:48}} onClick={() => setPage('contact')}>Get in Touch →</button>
        </div>
      </section>
    </>
  )
}
