import PageHeader from '../components/PageHeader'

export default function Initiatives({ setPage }) {
  return (
    <>
      <PageHeader badge="Innovation" title="New Initiatives" subtitle="Beyond solar — pioneering the future of clean energy" />
      <section className="section">
        <div className="container" style={{maxWidth:700}}>
          <div className="card reveal" style={{cursor:'pointer',overflow:'hidden'}} onClick={() => setPage('ni_cbg')}>
            <img src="/images/Bio-CNG.jpeg" alt="CBG" style={{height:280,width:'100%',objectFit:'fit'}} />
            <div style={{padding:36}}>
              <h2 style={{fontSize:28,fontWeight:800}}>CBG (Bio-CNG) Plants</h2>
              <p style={{color:'var(--n500)',marginTop:12,lineHeight:1.7,fontSize:15}}>Compressed Biogas production from organic waste — sustainable bio-energy solutions across India. Partner with us to set up CBG manufacturing plants.</p>
              <button className="btn btn--primary" style={{marginTop:24}}>Learn More →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
