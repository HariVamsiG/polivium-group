import { useState } from 'react'
import PageHeader from '../components/PageHeader'

const QUICK_HOME = [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,15000,20000,25000]
const QUICK_COMM = [4000,7000,10000,20000,30000,40000,50000,100000,500000,1000000,3000000,5000000,10000000]

function fmt(n) {
  if (n >= 10000000) return (n/10000000) + 'CR'
  if (n >= 100000) return (n/100000) + 'L'
  if (n >= 1000) return (n/1000) + 'k'
  return n
}

export default function Calculator() {
  const [type, setType] = useState('home')
  const [bill, setBill] = useState(3000)
  const [result, setResult] = useState(null)
  const [show, setShow] = useState(false)

  const calc = () => {
    const rate = type === 'home' ? 6.5 : 8.5
    const units = bill / rate
    const kw = type === 'home'
      ? Math.max(1, parseFloat((units / 130).toFixed(1)))
      : Math.max(3, parseFloat((units / 100).toFixed(1)))
    const annUnits = Math.round(kw * 1420)
    const annSav = Math.round(annUnits * rate)
    const area = Math.round(kw * 80)
    const base = Math.round(kw * (type === 'home' ? 70000 : 40000))
    const subsidy = (type === 'home' && kw <= 10) ? 78000 : 0
    const eff = Math.max(0, base - subsidy)
    const payback = eff > 0 ? parseFloat((eff / annSav).toFixed(1)) : 0
    const co2 = Math.round(annUnits * 0.82)
    const trees = Math.round(co2 / 21)
    setResult({ kw, annUnits, annSav, area, base, subsidy, eff, payback, co2, trees })
    setShow(false)
    setTimeout(() => setShow(true), 100)
  }

  const quicks = type === 'home' ? QUICK_HOME : QUICK_COMM

  return (
    <>
      <PageHeader badge="Solar Calculator" title="Explore Your Solar Potential" subtitle="AI-powered solar savings estimator for Indian rooftop & ground installations." bg="linear-gradient(135deg,var(--p900),var(--p600),var(--s700))" />
      <section className="section">
        <div className="container" style={{maxWidth:720}}>
          <div className="text-center" style={{marginBottom:40}}>
            <div className="badge badge--blue" style={{marginBottom:12}}>● Calculate Your Savings</div>
            <h2 style={{fontSize:28,fontWeight:800}}>Enter your monthly electricity bill to get an instant estimate</h2>
          </div>

          <div className="card" style={{borderRadius:22,overflow:'hidden',boxShadow:'var(--shadow-lg)'}}>
            {/* Input Section */}
            <div style={{padding:'44px 40px',borderBottom:'1px solid var(--n200)'}}>
              {/* Type Toggle */}
              <div style={{display:'flex',gap:12,marginBottom:36}}>
                {[['home','🏠','Residential / Home'],['commercial','🏭','Commercial / Industrial']].map(([k,icon,label]) => (
                  <button key={k} onClick={() => { setType(k); setResult(null) }}
                    style={{flex:1,padding:'14px 20px',borderRadius:12,border:type===k?'none':'1.5px solid var(--n200)',background:type===k?'linear-gradient(135deg,var(--p500),var(--p700))':'#fff',color:type===k?'#fff':'var(--n700)',fontWeight:600,fontSize:14,display:'flex',alignItems:'center',justifyContent:'center',gap:8,boxShadow:type===k?'0 6px 18px rgba(14,86,175,.28)':'var(--shadow-sm)',transition:'all .25s'}}>
                    {icon} {label}
                  </button>
                ))}
              </div>

              {/* Bill Input */}
              <div style={{marginBottom:32}}>
                <label style={{display:'block',color:'var(--p600)',fontSize:11,letterSpacing:2.5,textTransform:'uppercase',fontWeight:600,marginBottom:14}}>Monthly Electricity Bill</label>
                <div style={{display:'flex',alignItems:'center',gap:18,flexWrap:'wrap'}}>
                  <div style={{position:'relative'}}>
                    <span style={{position:'absolute',left:14,top:'50%',transform:'translateY(-50%)',color:'var(--p600)',fontSize:18,fontWeight:800}}>₹</span>
                    <input type="number" value={bill} onChange={e => setBill(Number(e.target.value))} className="input" style={{width:190,paddingLeft:36,fontSize:20,fontWeight:700,color:'var(--n900)'}} />
                  </div>
                  <input type="range" min={500} max={type==='home'?25000:10000000} step={type==='home'?500:5000} value={bill} onChange={e => setBill(Number(e.target.value))} style={{flex:1,minWidth:200,accentColor:'var(--p500)',height:5,cursor:'pointer'}} />
                </div>
                <div style={{display:'flex',justifyContent:'space-between',color:'var(--n500)',fontSize:11,marginTop:6}}>
                  <span>₹500</span><span>{type==='home'?'₹25,000':'₹1,00,00,000'}</span>
                </div>
              </div>

              {/* Quick Select */}
              <div style={{marginBottom:32}}>
                <div style={{color:'var(--n500)',fontSize:10.5,letterSpacing:2,textTransform:'uppercase',marginBottom:11,fontWeight:600}}>Quick Select</div>
                <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                  {quicks.map(q => (
                    <button key={q} onClick={() => setBill(q)}
                      style={{padding:'6px 15px',borderRadius:8,border:`1.5px solid ${bill===q?'var(--p500)':'var(--n200)'}`,background:bill===q?'var(--p50)':'#fff',color:bill===q?'var(--p600)':'var(--n500)',fontSize:13,fontWeight:bill===q?600:400,transition:'all .2s'}}>
                      ₹{fmt(q)}
                    </button>
                  ))}
                </div>
              </div>

              <button className="btn btn--primary" onClick={calc} style={{width:'100%',padding:16,borderRadius:12,fontSize:16}}>⚡ Calculate My Solar Savings</button>
            </div>

            {/* Results */}
            {result && (
              <div style={{padding:'44px 40px',background:'var(--n50)',opacity:show?1:0,transition:'opacity .5s ease'}}>
                <div className="badge badge--blue" style={{marginBottom:16}}>● Your Solar Estimate</div>
                <h3 style={{fontSize:20,fontWeight:700,marginBottom:28}}>Personalised Solar Savings Report</h3>

                <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:28}}>
                  {[
                    {ic:'⚡',val:`${result.kw} kW`,label:'Ideal System Size',col:'var(--p600)',bg:'var(--p50)',border:'var(--p200)'},
                    {ic:'💰',val:`₹${result.annSav.toLocaleString('en-IN')}`,label:'Annual Savings',col:'var(--a500)',bg:'#fff8eb',border:'var(--a200,#fde68a)'},
                    {ic:'🌞',val:`${result.annUnits.toLocaleString('en-IN')} kWh`,label:'Annual Generation',col:'var(--g500)',bg:'#f0fdf4',border:'#bbf7d0'},
                    {ic:'📐',val:`${result.area} sqft`,label:'Roof Area Required',col:'#2563eb',bg:'#eff6ff',border:'#bfdbfe'},
                    {ic:'⏱',val:`${result.payback} Yrs`,label:'Payback Period',col:'#7c3aed',bg:'#f5f3ff',border:'#c4b5fd'},
                    {ic:'🌿',val:`${result.co2.toLocaleString('en-IN')} kg`,label:'CO₂ Saved / Year',col:'var(--g500)',bg:'#f0fdf4',border:'#bbf7d0'},
                  ].map((m,i) => (
                    <div key={i} style={{background:m.bg,border:`1px solid ${m.border}`,borderRadius:16,padding:'22px 16px',textAlign:'center',opacity:show?1:0,transform:show?'translateY(0)':'translateY(12px)',transition:`all .5s ease ${i*.07}s`}}>
                      <div style={{fontSize:24,marginBottom:8}}>{m.ic}</div>
                      <div style={{fontWeight:800,color:m.col,fontSize:'clamp(.95rem,2vw,1.4rem)',marginBottom:5}}>{m.val}</div>
                      <div style={{color:'var(--n500)',fontSize:10.5,letterSpacing:1,textTransform:'uppercase'}}>{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Cost Breakdown */}
                <div style={{background:'#fff',border:'1px solid var(--n200)',borderRadius:18,padding:'28px 30px',marginBottom:16}}>
                  <h4 style={{fontWeight:700,fontSize:17,marginBottom:20}}>💡 Cost Breakdown</h4>
                  {[
                    ['Base Price (Excl. Subsidy & GST)', `₹${result.base.toLocaleString('en-IN')}`, 'var(--n700)'],
                    ['PM Surya Ghar Govt. Subsidy', result.subsidy > 0 ? `− ₹${result.subsidy.toLocaleString('en-IN')}` : 'N/A (Commercial)', 'var(--g500)'],
                  ].map(([label, val, col], i) => (
                    <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 0',borderBottom:'1px solid var(--n100)'}}>
                      <span style={{color:'var(--n500)',fontSize:14}}>{label}</span>
                      <span style={{color:col,fontWeight:600,fontSize:14.5}}>{val}</span>
                    </div>
                  ))}
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px 20px',background:'var(--p50)',borderRadius:12,border:'1px solid var(--p200)',marginTop:12}}>
                    <span style={{fontWeight:600,color:'var(--n900)',fontSize:15}}>Effective Cost *</span>
                    <span style={{fontWeight:800,color:'var(--p600)',fontSize:22}}>₹{result.eff.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Environmental Impact */}
                <div style={{display:'flex',alignItems:'center',gap:13,padding:'16px 20px',background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:12,marginBottom:12}}>
                  <span style={{fontSize:26}}>🌳</span>
                  <span style={{color:'var(--n700)',fontSize:13.5,lineHeight:1.7}}>
                    Your system saves <strong style={{color:'var(--g500)'}}>{result.co2.toLocaleString('en-IN')} kg</strong> CO₂/year — equal to planting <strong style={{color:'var(--g500)'}}>{result.trees} trees</strong>!
                  </span>
                </div>

                <p style={{color:'var(--n500)',fontSize:11.5}}>* Taxes & net-metering charges extra. PM Surya Ghar subsidy for residential ≤10 kW. Estimates vary by location.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){div[style*="grid-template-columns: repeat(3"]{grid-template-columns:1fr 1fr!important}}`}</style>
    </>
  )
}
