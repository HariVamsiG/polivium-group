import { useState } from 'react'

const WARRANTY_DATA = {
  residential: [
    { component: 'Solar PV Modules', standard: '10 yrs product / 25 yrs performance (≥80% output)', extended: 'N/A', type: 'Product & Performance' },
    { component: 'Inverter', standard: '5 years', extended: '8–10 years', type: 'Product' },
    { component: 'Module Mounting Structure', standard: '5 years', extended: '10 years (HDG)', type: 'Structural' },
    { component: 'DC Cables', standard: '1 year', extended: '3 years', type: 'Product' },
    { component: 'AC Cables', standard: '1 year', extended: '3 years', type: 'Product' },
    { component: 'Lightning Protection', standard: '1 year', extended: 'N/A', type: 'Product' },
    { component: 'Monitoring System (App)', standard: '1 year', extended: '3 years', type: 'Software Support' },
  ],
  commercial: [
    { component: 'Solar PV Modules', standard: '12 yrs product / 25 yrs performance (≥80% output)', extended: 'N/A', type: 'Product & Performance' },
    { component: 'Inverter (String/Central)', standard: '5 years', extended: '10 years', type: 'Product' },
    { component: 'Module Mounting Structure', standard: '10 years', extended: '15 years (HDG)', type: 'Structural' },
    { component: 'DC/AC Cables', standard: '2 years', extended: '5 years', type: 'Product' },
    { component: 'SCADA / Monitoring', standard: '2 years', extended: '5 years', type: 'Software Support' },
    { component: 'Transformer / HT Panel', standard: '2 years', extended: '5 years', type: 'Product' },
    { component: 'Lightning & Earthing', standard: '2 years', extended: 'N/A', type: 'Product' },
  ],
  government: [
    { component: 'Solar PV Modules', standard: '12 yrs product / 25 yrs performance (≥80% output)', extended: 'As per tender', type: 'Product & Performance' },
    { component: 'Inverter', standard: '5 years', extended: 'As per tender', type: 'Product' },
    { component: 'Mounting Structure', standard: '10 years', extended: 'As per tender', type: 'Structural' },
    { component: 'All BOS Components', standard: '5 years', extended: 'As per tender', type: 'Product' },
    { component: 'SCADA / Monitoring', standard: '5 years', extended: 'As per tender', type: 'Software Support' },
  ],
  institutional: [
    { component: 'Solar PV Modules', standard: '10 yrs product / 25 yrs performance (≥80% output)', extended: 'N/A', type: 'Product & Performance' },
    { component: 'Inverter', standard: '5 years', extended: '8–10 years', type: 'Product' },
    { component: 'Mounting Structure', standard: '5 years', extended: '10 years', type: 'Structural' },
    { component: 'Cables & Electrical', standard: '2 years', extended: '5 years', type: 'Product' },
    { component: 'Monitoring System', standard: '2 years', extended: '5 years', type: 'Software Support' },
  ],
}

const TABS = [
  { key: 'residential', label: '🏠 Residential' },
  { key: 'commercial', label: '🏭 Commercial & Industrial' },
  { key: 'government', label: '🏛 Government' },
  { key: 'institutional', label: '🏥 Institutional' },
]

const TERMS = [
  { key: 'covered', title: "A. What's Covered", items: ['Manufacturing defects in materials or workmanship.', 'Performance guarantee — modules ≥80% output after 25 years.', 'Installation defects (where installed by POLIVIUM GROUP or authorised partners).', 'System functionality including monitoring connectivity.', 'Hardware failures under normal use conditions.'] },
  { key: 'eligibility', title: 'B. Warranty Eligibility', items: ['System must be installed by POLIVIUM GROUP or authorised partners.', 'Original invoice and commissioning certificate must be available.', 'System must not have been modified without written consent.', 'Regular maintenance must have been performed as recommended.'] },
  { key: 'exclusions', title: 'C. Exclusions — What is NOT Covered', items: ['Natural disasters (floods, lightning, fire, earthquakes).', 'Grid fluctuations or voltage surges beyond equipment rating.', 'Unauthorized modifications or third-party repairs.', 'Improper operation, negligence, or vandalism.', 'Cosmetic damage that does not affect performance.', 'Force majeure events.'] },
  { key: 'obligations', title: 'D. Customer Obligations', items: ['Maintain the system as per recommended schedule.', 'Report issues within 7 days of discovery.', 'Provide access for inspection and service.', 'Do not modify or relocate equipment without written consent.'] },
]

const DOCUMENTS = [
  { doc: 'Invoice or Purchase Order Copy', purpose: 'Proof of purchase and verification of warranty eligibility' },
  { doc: 'System Commissioning Report', purpose: 'Confirms installation and operational date for determining warranty period' },
  { doc: 'Photos / Videos of the Issue', purpose: 'Helps in initial remote diagnosis and saves time during site inspection' },
  { doc: 'Serial Numbers of Affected Components', purpose: 'Enables tracking and validation against supplied records' },
  { doc: 'Ownership Details (if not original customer)', purpose: 'Required in case of warranty transfer or third-party claim' },
]

const AMC_DATA = [
  { service: 'Inverter Health Check', frequency: 'Bi-Annual / Annual', inclusions: 'Firmware updates, error log analysis, performance review' },
  { service: 'System Cleaning & Inspection', frequency: 'Quarterly / Half-Yearly', inclusions: 'Panel cleaning, structure check, cable condition, junction boxes' },
  { service: 'Preventive Maintenance', frequency: 'Annual', inclusions: 'Electrical and mechanical checks, tightening of terminals' },
  { service: 'SCADA / Monitoring Support', frequency: 'Monthly / Quarterly', inclusions: 'Connectivity check, data log review, troubleshooting alerts' },
]

export default function Warranty({ setPage }) {
  const [activeTab, setActiveTab] = useState('residential')
  const [openTerm, setOpenTerm] = useState('covered')

  return (
    <div style={{background:'var(--n50)',minHeight:'100vh'}}>
      {/* Header */}
      <div style={{background:'linear-gradient(135deg,var(--p900) 0%,var(--p700) 60%,var(--p500) 100%)',padding:'140px 24px 56px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 80% 20%, rgba(245,197,24,0.08) 0%, transparent 50%)'}}/>
        <div style={{maxWidth:960,margin:'0 auto',position:'relative'}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:20}}>
            <span style={{width:32,height:3,background:'var(--a400)',display:'block',borderRadius:2}}/>
            <span style={{color:'var(--a400)',fontSize:12,letterSpacing:'0.15em',textTransform:'uppercase'}}>After-Sales Support</span>
          </div>
          <h1 style={{color:'#fff',fontSize:'clamp(2rem, 5vw, 3.2rem)',fontWeight:700,margin:'0 0 16px',lineHeight:1.2}}>Warranty Policy</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:16,margin:0,maxWidth:600,lineHeight:1.7}}>POLIVIUM GROUP Private Limited offers comprehensive warranties on solar systems supplied and/or installed by us or our authorised partners. Transparency and compliance with the Consumer Protection Act, 2019 are central to this policy.</p>
          <div style={{marginTop:36,display:'flex',gap:32,flexWrap:'wrap'}}>
            <div><div style={{color:'var(--a400)',fontSize:22,fontWeight:700}}>25 Years</div><div style={{color:'rgba(255,255,255,0.55)',fontSize:12,marginTop:2}}>Module Performance</div></div>
            <div><div style={{color:'var(--a400)',fontSize:22,fontWeight:700}}>10 Years</div><div style={{color:'rgba(255,255,255,0.55)',fontSize:12,marginTop:2}}>Inverter (Extended)</div></div>
            <div><div style={{color:'var(--a400)',fontSize:22,fontWeight:700}}>4 Segments</div><div style={{color:'rgba(255,255,255,0.55)',fontSize:12,marginTop:2}}>Customer Types Covered</div></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{maxWidth:960,margin:'0 auto',padding:'48px 24px 80px'}}>

        {/* Section 01: Warranty Periods */}
        <div style={{marginBottom:56}}>
          <SectionHeader num="01" title="Warranty Periods by Customer Type" />
          <div style={{display:'flex',gap:8,marginBottom:24,flexWrap:'wrap'}}>
            {TABS.map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                style={{padding:'9px 18px',borderRadius:6,border:activeTab===tab.key?'none':'1px solid var(--n200)',background:activeTab===tab.key?'linear-gradient(135deg,var(--p500),var(--p700))':'#fff',color:activeTab===tab.key?'#fff':'var(--n700)',fontSize:14,fontWeight:600,cursor:'pointer',transition:'0.2s'}}>
                {tab.label}
              </button>
            ))}
          </div>
          <div style={{background:'#fff',borderRadius:10,border:'1px solid var(--n200)',overflow:'hidden'}}>
            <div style={{display:'grid',gridTemplateColumns:'2fr 2fr 1.5fr 1.2fr',background:'var(--p900)',padding:'12px 20px',gap:8}}>
              {['Component','Standard Warranty','Extended Warranty','Type'].map(h => (
                <div key={h} style={{color:'rgba(255,255,255,0.8)',fontSize:12,fontWeight:700,letterSpacing:'0.05em',textTransform:'uppercase'}}>{h}</div>
              ))}
            </div>
            {WARRANTY_DATA[activeTab].map((row, i) => (
              <div key={row.component} style={{display:'grid',gridTemplateColumns:'2fr 2fr 1.5fr 1.2fr',padding:'14px 20px',gap:8,background:i%2===0?'#fff':'var(--n50)',borderTop:'1px solid var(--n100)'}}>
                <div style={{fontSize:14,fontWeight:600,color:'var(--n900)'}}>{row.component}</div>
                <div style={{fontSize:13.5,color:'var(--p700)'}}>{row.standard}</div>
                <div style={{fontSize:13.5,color:row.extended==='N/A'?'var(--n300)':'var(--p600)',fontWeight:row.extended==='N/A'?400:600}}>{row.extended}</div>
                <div style={{fontSize:12,color:'var(--p600)',background:'var(--p50)',borderRadius:4,padding:'2px 8px',display:'inline-flex',alignItems:'center',height:22}}>{row.type}</div>
              </div>
            ))}
          </div>
          <p style={{fontSize:13,color:'var(--n500)',margin:'12px 0 0'}}>* Warranties commence on the system commissioning date. Extended warranties must be purchased at the time of installation.</p>
        </div>

        {/* Section 02: Terms & Conditions */}
        <div style={{marginBottom:56}}>
          <SectionHeader num="02" title="Warranty Terms & Conditions" />
          {TERMS.map(term => (
            <div key={term.key} style={{background:'#fff',borderRadius:10,border:`1px solid ${openTerm===term.key?'var(--p200)':'var(--n200)'}`,overflow:'hidden',marginBottom:10,boxShadow:openTerm===term.key?'0 4px 20px rgba(14,86,175,0.08)':'none'}}>
              <button onClick={() => setOpenTerm(openTerm===term.key?null:term.key)}
                style={{width:'100%',textAlign:'left',padding:'18px 24px',background:openTerm===term.key?'var(--p50)':'none',border:'none',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',transition:'background 0.2s'}}>
                <span style={{fontSize:15.5,fontWeight:700,color:openTerm===term.key?'var(--p600)':'var(--n900)'}}>{term.title}</span>
                <span style={{fontSize:22,color:'var(--p500)',transform:openTerm===term.key?'rotate(45deg)':'rotate(0deg)',transition:'transform 0.2s'}}>+</span>
              </button>
              {openTerm===term.key && (
                <div style={{padding:'4px 24px 24px',borderTop:'1px solid var(--p100)'}}>
                  <ul style={{margin:0,paddingLeft:20,fontSize:14.5,color:'var(--n700)',lineHeight:2}}>
                    {term.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Section 03: Claim Process */}
        <div style={{marginBottom:56}}>
          <SectionHeader num="03" title="Claim Process" />
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            <ClaimStep num="01" title="Raise a Service Request" desc="Contact us by email at info@poliviumgroup.com, through our website, or via your authorised channel partner. Include your name, address, invoice, commissioning date, issue description, photos/videos, and component serial numbers." badge="⏱ Acknowledgment within 24 hours" showLine />
            <ClaimStep num="02" title="Inspection & Technical Verification" desc="A POLIVIUM GROUP technician or authorised engineer will be assigned within 24–48 hours. An on-site or remote inspection will be scheduled based on the issue type. The technician will evaluate component faults, installation integrity, and warranty validity." badge="⏱ Site visit within 3–5 working days" showLine />
            <ClaimStep num="03" title="Resolution" desc="Repair: Minor faults or replaceable parts will be fixed on-site. Replacement: Defective components under warranty will be replaced with equivalent or better-rated products. Refund: In rare cases where repair or replacement is not feasible, a partial or full refund will be processed." badge="⏱ Resolution within 3–7 working days" showLine={false} />
          </div>
        </div>

        {/* Section 04: Required Documents */}
        <div style={{marginBottom:56}}>
          <SectionHeader num="04" title="Required Documents for Warranty Claim" />
          <div style={{background:'#fff',borderRadius:10,border:'1px solid var(--n200)',overflow:'hidden'}}>
            {DOCUMENTS.map((d, i) => (
              <div key={d.doc} style={{display:'grid',gridTemplateColumns:'1fr 1.5fr',padding:'14px 20px',gap:16,background:i%2===0?'#fff':'var(--n50)',borderTop:i>0?'1px solid var(--n100)':'none'}}>
                <div style={{fontSize:14,fontWeight:600,color:'var(--n900)',display:'flex',alignItems:'center',gap:8}}>
                  <span style={{color:'var(--p500)'}}>📄</span> {d.doc}
                </div>
                <div style={{fontSize:13.5,color:'var(--n600)',lineHeight:1.6}}>{d.purpose}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 05: Warranty Transfer */}
        <div style={{marginBottom:56}}>
          <SectionHeader num="05" title="Warranty Transfer Policy" />
          <div style={{background:'#fff',borderRadius:10,border:'1px solid var(--n200)',padding:28}}>
            <p style={{fontSize:14.5,color:'var(--n700)',lineHeight:1.85,margin:'0 0 20px'}}>POLIVIUM GROUP permits the transfer of warranty coverage upon a change in ownership of the property or solar system. The new owner must notify POLIVIUM GROUP in writing <strong>within 30 days</strong> of the change in ownership.</p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
              <div style={{background:'var(--p50)',borderRadius:8,padding:'16px 20px',border:'1px solid var(--p200)'}}>
                <div style={{fontWeight:700,fontSize:14,color:'var(--p600)',marginBottom:10}}>✅ Required Documents</div>
                <ul style={{margin:0,paddingLeft:18,fontSize:13.5,color:'var(--n700)',lineHeight:2}}>
                  <li>Original purchase invoice or commissioning certificate</li>
                  <li>Property sale deed or ownership transfer document</li>
                  <li>Completed Warranty Transfer Request Form</li>
                </ul>
              </div>
              <div style={{background:'#fff8eb',borderRadius:8,padding:'16px 20px',border:'1px solid #fde68a'}}>
                <div style={{fontWeight:700,fontSize:14,color:'var(--a600)',marginBottom:10}}>⚠ Important Notes</div>
                <ul style={{margin:0,paddingLeft:18,fontSize:13.5,color:'var(--n700)',lineHeight:2}}>
                  <li>Not transferable if components are relocated without consent</li>
                  <li>Warranty validity based on original commissioning date</li>
                  <li>Requests after 30 days may incur an administrative fee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 06: Post-Warranty AMC */}
        <div style={{marginBottom:56}}>
          <SectionHeader num="06" title="Post-Warranty Support & AMC" />
          <div style={{background:'#fff',borderRadius:10,border:'1px solid var(--n200)',overflow:'hidden'}}>
            <div style={{background:'var(--p900)',padding:'12px 20px',display:'grid',gridTemplateColumns:'1.5fr 1fr 2fr'}}>
              {['Service Component','Frequency','Inclusions'].map(h => (
                <div key={h} style={{color:'rgba(255,255,255,0.8)',fontSize:12,fontWeight:700,letterSpacing:'0.05em',textTransform:'uppercase'}}>{h}</div>
              ))}
            </div>
            {AMC_DATA.map((row, i) => (
              <div key={row.service} style={{display:'grid',gridTemplateColumns:'1.5fr 1fr 2fr',padding:'14px 20px',background:i%2===0?'#fff':'var(--n50)',borderTop:'1px solid var(--n100)'}}>
                <div style={{fontSize:14,fontWeight:600,color:'var(--n900)'}}>{row.service}</div>
                <div style={{fontSize:13,color:'var(--p600)',fontWeight:600}}>{row.frequency}</div>
                <div style={{fontSize:13,color:'var(--n600)'}}>{row.inclusions}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:16,background:'var(--p50)',borderRadius:8,padding:'16px 20px',border:'1px solid var(--p200)'}}>
            <div style={{fontWeight:700,fontSize:14,color:'var(--p600)',marginBottom:8}}>AMC Benefits</div>
            <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>
              {['Priority response time','Discounted spares & upgrades','Regular performance reports','Free remote support & diagnostics'].map(b => (
                <span key={b} style={{fontSize:13,color:'var(--p700)',display:'flex',alignItems:'center',gap:6}}>
                  <span style={{color:'var(--p500)'}}>✓</span> {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{background:'linear-gradient(135deg,var(--p900),var(--p700))',borderRadius:12,padding:'36px 32px',color:'#fff',marginBottom:20}}>
          <h3 style={{margin:'0 0 8px',fontSize:20,fontWeight:600}}>Need to File a Warranty Claim?</h3>
          <p style={{margin:'0 0 24px',color:'rgba(255,255,255,0.7)',fontSize:14,lineHeight:1.7}}>Contact us through any of the channels below. Our team will acknowledge your request within 24 hours.</p>
          <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
            <a href="mailto:info@poliviumgroup.com" style={{background:'var(--a400)',color:'var(--p900)',padding:'10px 22px',borderRadius:6,textDecoration:'none',fontWeight:700,fontSize:14}}>info@poliviumgroup.com</a>
            <a href="mailto:poliviumgroup@gmail.com" style={{background:'rgba(255,255,255,0.1)',color:'#fff',padding:'10px 22px',borderRadius:6,textDecoration:'none',fontWeight:600,fontSize:14,border:'1px solid rgba(255,255,255,0.2)'}}>poliviumgroup@gmail.com</a>
            <button onClick={() => setPage('contact')} style={{background:'rgba(255,255,255,0.1)',color:'#fff',padding:'10px 22px',borderRadius:6,fontWeight:600,fontSize:14,border:'1px solid rgba(255,255,255,0.2)',cursor:'pointer'}}>Contact Us</button>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){div[style*="grid-template-columns: 1fr 1.5fr"]{grid-template-columns:1fr!important;gap:12px!important} div[style*="grid-template-columns: 1.5fr 1fr 2fr"]{grid-template-columns:1fr!important;gap:8px!important} div[style*="grid-template-columns: 2fr 2fr 1.5fr 1.2fr"]{grid-template-columns:1fr!important;gap:8px!important} div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}

function SectionHeader({ num, title }) {
  return (
    <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:24}}>
      <span style={{background:'linear-gradient(135deg,var(--p500),var(--p700))',color:'#fff',width:36,height:36,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>{num}</span>
      <h2 style={{margin:0,fontSize:'clamp(1.2rem, 3vw, 1.5rem)',fontWeight:700,color:'var(--n900)'}}>{title}</h2>
      <div style={{flex:1,height:1,background:'var(--n200)'}}/>
    </div>
  )
}

function ClaimStep({ num, title, desc, badge, showLine }) {
  return (
    <div style={{display:'flex',gap:0,position:'relative'}}>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginRight:20}}>
        <div style={{width:44,height:44,borderRadius:'50%',background:'linear-gradient(135deg,var(--p500),var(--p700))',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:14,flexShrink:0,zIndex:1}}>{num}</div>
        {showLine && <div style={{width:2,flex:1,background:'var(--p200)',minHeight:32,margin:'4px 0'}}/>}
      </div>
      <div style={{background:'#fff',borderRadius:10,border:'1px solid var(--n200)',padding:'20px 24px',marginBottom:8,flex:1}}>
        <div style={{fontWeight:700,fontSize:16,color:'var(--n900)',marginBottom:8}}>{title}</div>
        <div style={{fontSize:14,color:'var(--n600)',lineHeight:1.8,marginBottom:12}}>{desc}</div>
        <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'var(--p50)',borderRadius:20,padding:'4px 14px',fontSize:12.5,color:'var(--p600)',fontWeight:600}}>{badge}</div>
      </div>
    </div>
  )
}
