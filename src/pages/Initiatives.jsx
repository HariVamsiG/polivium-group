import PageHeader from '../components/PageHeader'

export default function Initiatives({ setPage }) {
  return (
    <>
      <PageHeader badge="Innovation" title="New Initiatives" subtitle="Beyond solar — pioneering the future of clean energy" />
      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            <div className="card reveal" style={{cursor:'pointer'}} onClick={() => setPage('ni_hydrogen')}>
              <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80" alt="Hydrogen" style={{height:220,width:'100%',objectFit:'cover'}} />
              <div style={{padding:32}}>
                <h2 style={{fontSize:26,fontWeight:800}}>Green Hydrogen</h2>
                <p style={{color:'var(--n500)',marginTop:12,lineHeight:1.7}}>Electrolyser-based green hydrogen production — the fuel of the future. Aligned with India's National Green Hydrogen Mission.</p>
                <button className="btn btn--outline" style={{marginTop:20}}>Learn More →</button>
              </div>
            </div>
            <div className="card reveal" style={{cursor:'pointer'}} onClick={() => setPage('ni_cbg')}>
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80" alt="CBG" style={{height:220,width:'100%',objectFit:'cover'}} />
              <div style={{padding:32}}>
                <h2 style={{fontSize:26,fontWeight:800}}>CBG (Bio-CNG) Plants</h2>
                <p style={{color:'var(--n500)',marginTop:12,lineHeight:1.7}}>Compressed Biogas production from organic waste — sustainable bio-energy solutions across India.</p>
                <button className="btn btn--outline" style={{marginTop:20}}>Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
