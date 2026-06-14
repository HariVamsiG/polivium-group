import PageHeader from '../components/PageHeader'

const PROCESS_STEPS = [
  { num: 1, title: 'Napier Grass Cultivation', icon: '🌱', desc: 'High-yield Napier grass is cultivated on agricultural land and harvested at the optimum growth stage for maximum biomass production.' },
  { num: 2, title: 'Harvesting & Transportation', icon: '🚜', desc: 'The harvested Napier grass is collected and transported to the Bio-CNG processing facility.' },
  { num: 3, title: 'Chopping & Feedstock Preparation', icon: '⚙️', desc: 'The grass is chopped into smaller pieces and mixed with water and nutrients to create a suitable feedstock slurry.' },
  { num: 4, title: 'Anaerobic Digestion', icon: '🟢', desc: 'The prepared biomass is fed into anaerobic digesters where microorganisms break down the organic material in an oxygen-free environment.', output: 'Raw Biogas • Organic Digestate' },
  { num: 5, title: 'Biogas Production', icon: '💨', desc: 'The digestion process generates biogas containing:', list: ['Methane (CH₄)', 'Carbon Dioxide (CO₂)', 'Trace Gases'] },
  { num: 6, title: 'Biogas Purification & Upgrading', icon: '🔄', desc: 'Advanced gas upgrading systems remove impurities. The methane concentration is increased to fuel-grade quality.', list: ['Carbon Dioxide (CO₂)', 'Hydrogen Sulfide (H₂S)', 'Moisture', 'Impurities'] },
  { num: 7, title: 'Bio-CNG Compression', icon: '⛽', desc: 'The purified biomethane is compressed to high pressure, producing Bio-CNG suitable for commercial and industrial applications.' },
  { num: 8, title: 'Storage & Distribution', icon: '🚛', desc: 'Bio-CNG is stored in cascades and supplied for:', list: ['Transport Vehicles', 'Industrial Fuel Applications', 'Commercial Energy Use', 'Gas Distribution Networks'] },
  { num: 9, title: 'Organic Fertilizer Recovery', icon: '🌿', desc: 'The digestate generated during the process is processed into nutrient-rich organic manure for agricultural use.' },
]

const BENEFITS = ['Lifetime recurring revenue from gas sales', 'Collateral-free loan up to ₹2 Crore', 'Income tax holiday for five years', 'GST benefits on CBG plant equipment', 'Bio-fertiliser as valuable by-product']
const GOV = ['SATAT initiative — CBG offtake by Oil Marketing Companies', 'Waste to Energy Program (MNRE)', 'National Policy on Biofuels', 'Subsidised interest rates on project loans', 'Waiver on land conversion charges']

const CIRCULAR_STEPS = ['🌱 Napier Grass', 'Biomass Preparation', 'Anaerobic Digestion', 'Biogas Production', 'Gas Upgrading', 'Bio-CNG', 'Transportation & Industries']

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

      {/* Process Section */}
      <section className="section section--light" style={{overflow:'hidden'}}>
        <div className="container">
          <div className="text-center reveal" style={{marginBottom:48}}>
            <div className="badge badge--blue">● Process</div>
            <h2 style={{fontSize:32,fontWeight:800,marginTop:12,letterSpacing:'-0.5px'}}>Napier Grass to Bio-CNG Process</h2>
            <p style={{color:'var(--n500)',fontSize:15,marginTop:8,maxWidth:560,margin:'8px auto 0'}}>A complete end-to-end journey from cultivation to clean fuel delivery</p>
          </div>

          {/* Process Image */}
          <div className="reveal" style={{marginBottom:56}}>
            <img
              src="/images/Nappier-Grass-Process.jpeg"
              alt="Napier Grass to Bio-CNG Process"
              style={{borderRadius:20,width:'100%',height:'auto',objectFit:'contain',boxShadow:'0 20px 60px rgba(0,0,0,0.12)'}}
            />
          </div>

          {/* Timeline Steps */}
          <div style={{position:'relative',maxWidth:800,margin:'0 auto'}}>
            {/* Vertical line */}
            <div style={{position:'absolute',left:28,top:0,bottom:0,width:2,background:'linear-gradient(to bottom, #22c55e, #16a34a, #15803d)',borderRadius:2}} />

            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className="reveal" style={{display:'flex',gap:24,marginBottom: i < PROCESS_STEPS.length - 1 ? 32 : 0,position:'relative'}}>
                {/* Step number circle */}
                <div style={{width:56,height:56,borderRadius:'50%',background:'linear-gradient(135deg,#22c55e,#16a34a)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:800,color:'#fff',flexShrink:0,boxShadow:'0 4px 16px rgba(34,197,94,0.3)',zIndex:1}}>
                  {step.num}
                </div>
                {/* Content card */}
                <div style={{flex:1,background:'#fff',borderRadius:16,padding:'24px 28px',boxShadow:'0 2px 12px rgba(0,0,0,0.04)',border:'1px solid rgba(0,0,0,0.06)',transition:'transform 0.2s, box-shadow 0.2s'}}>
                  <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
                    <span style={{fontSize:22}}>{step.icon}</span>
                    <h3 style={{fontSize:17,fontWeight:700,color:'var(--n900)'}}>{step.title}</h3>
                  </div>
                  <p style={{color:'var(--n600)',fontSize:14,lineHeight:1.8}}>{step.desc}</p>
                  {step.list && (
                    <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:10}}>
                      {step.list.map(item => (
                        <span key={item} style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:20,padding:'4px 12px',fontSize:12,color:'#166534',fontWeight:500}}>{item}</span>
                      ))}
                    </div>
                  )}
                  {step.output && (
                    <div style={{marginTop:10,background:'#fefce8',border:'1px solid #fef08a',borderRadius:8,padding:'8px 12px',fontSize:12,color:'#854d0e'}}>
                      <strong>Output:</strong> {step.output}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Circular Economy */}
          <div className="reveal" style={{marginTop:64,borderRadius:20,padding:'40px 32px',background:'linear-gradient(135deg,#166534,#15803d)',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h60v60H0z\' fill=\'none\'/%3E%3Cpath d=\'M30 0v60M0 30h60\' stroke=\'rgba(255,255,255,0.04)\' stroke-width=\'1\'/%3E%3C/svg%3E")',opacity:0.5}} />
            <div style={{position:'relative',zIndex:1}}>
              <h3 style={{fontSize:22,fontWeight:800,textAlign:'center',color:'#fff',marginBottom:24}}>♻️ Circular Economy Model</h3>
              <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',gap:6}}>
                {CIRCULAR_STEPS.map((step, i) => (
                  <span key={step} style={{display:'flex',alignItems:'center',gap:6}}>
                    <span style={{background:'rgba(255,255,255,0.15)',backdropFilter:'blur(4px)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:24,padding:'8px 16px',fontSize:13,color:'#fff',fontWeight:500,whiteSpace:'nowrap'}}>{step}</span>
                    {i < CIRCULAR_STEPS.length - 1 && <span style={{color:'#86efac',fontSize:16}}>→</span>}
                  </span>
                ))}
              </div>
              <p style={{textAlign:'center',marginTop:20,fontSize:14,color:'#bbf7d0'}}>♻️ <strong>By-Product:</strong> Organic Fertilizer → Back to Farms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Government Support */}
      <section className="section">
        <div className="container">
          <div className="text-center reveal" style={{marginBottom:40}}>
            <h2 style={{fontSize:28,fontWeight:800}}>Why Invest in Bio-CNG?</h2>
            <p style={{color:'var(--n500)',fontSize:15,marginTop:8}}>Strong returns backed by government incentives</p>
          </div>
          <div className="grid grid--2" style={{gap:32}}>
            <div className="card reveal" style={{padding:32,borderTop:'4px solid #22c55e'}}>
              <h3 style={{fontSize:20,fontWeight:700,marginBottom:20,display:'flex',alignItems:'center',gap:10}}>
                <span style={{width:36,height:36,borderRadius:10,background:'#f0fdf4',display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:18}}>💰</span>
                Investor Benefits
              </h3>
              <ul style={{display:'flex',flexDirection:'column',gap:12}}>
                {BENEFITS.map(b => (
                  <li key={b} style={{fontSize:14,color:'var(--n700)',display:'flex',gap:10,alignItems:'flex-start'}}>
                    <span style={{color:'#22c55e',fontWeight:700,fontSize:16,lineHeight:'20px'}}>✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card reveal" style={{padding:32,borderTop:'4px solid #eab308'}}>
              <h3 style={{fontSize:20,fontWeight:700,marginBottom:20,display:'flex',alignItems:'center',gap:10}}>
                <span style={{width:36,height:36,borderRadius:10,background:'#fefce8',display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:18}}>🏛️</span>
                Government Support
              </h3>
              <ul style={{display:'flex',flexDirection:'column',gap:12}}>
                {GOV.map(g => (
                  <li key={g} style={{fontSize:14,color:'var(--n700)',display:'flex',gap:10,alignItems:'flex-start'}}>
                    <span style={{color:'#eab308',fontWeight:700,fontSize:16,lineHeight:'20px'}}>★</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center" style={{marginTop:56}}>
            <button className="btn btn--primary" style={{padding:'16px 40px',fontSize:16,borderRadius:12}} onClick={() => setPage('contact')}>Partner With Us →</button>
          </div>
        </div>
      </section>
    </>
  )
}
