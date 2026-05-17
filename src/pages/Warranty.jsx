import PageHeader from '../components/PageHeader'

const CATS = [
  {cat:'Residential',items:[{n:'Solar PV Modules',p:'12 years',perf:'25 years linear'},{n:'Inverter',p:'5–10 years',perf:'—'},{n:'Mounting Structure',p:'10 years',perf:'—'},{n:'Lightning Protection',p:'5 years',perf:'—'},{n:'Monitoring System',p:'5 years',perf:'—'}]},
  {cat:'Commercial & Industrial',items:[{n:'Solar PV Modules',p:'12 years',perf:'25 years linear'},{n:'Inverter (String/Central)',p:'5–10 years',perf:'—'},{n:'Mounting Structure',p:'10 years',perf:'—'},{n:'SCADA / Monitoring',p:'5 years',perf:'—'},{n:'DC/AC Cables',p:'5 years',perf:'—'},{n:'Control Panel / MCBs',p:'2 years',perf:'—'}]},
]

export default function Warranty() {
  return (
    <>
      <PageHeader badge="Legal" title="Warranty Information" bg="var(--n900)" />
      <section className="section"><div className="container" style={{maxWidth:860}}>
        {CATS.map(cat => (
          <div key={cat.cat} className="reveal" style={{marginBottom:48}}>
            <h2 style={{fontSize:22,fontWeight:700,marginBottom:16}}>{cat.cat}</h2>
            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
                <thead><tr style={{background:'var(--p50)'}}><th style={{padding:'12px 16px',textAlign:'left',color:'var(--p700)',fontWeight:600}}>Component</th><th style={{padding:'12px 16px',textAlign:'left',color:'var(--p700)',fontWeight:600}}>Product</th><th style={{padding:'12px 16px',textAlign:'left',color:'var(--p700)',fontWeight:600}}>Performance</th></tr></thead>
                <tbody>{cat.items.map(i => <tr key={i.n} style={{borderBottom:'1px solid var(--n200)'}}><td style={{padding:'12px 16px',color:'var(--n700)'}}>{i.n}</td><td style={{padding:'12px 16px',color:'var(--n500)'}}>{i.p}</td><td style={{padding:'12px 16px',color:'var(--n500)'}}>{i.perf}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        ))}
        <div style={{padding:20,background:'#fff8eb',borderRadius:12,border:'1px solid #fde68a'}}>
          <p style={{fontSize:13,color:'var(--a700,#a14c08)'}}><strong>Note:</strong> Warranty commences from commissioning date as confirmed in the installation certificate.</p>
        </div>
      </div></section>
    </>
  )
}
