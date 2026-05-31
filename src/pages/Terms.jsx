import { useState } from 'react'

const SECTIONS = [
  {
    num: '01', title: 'About the Company',
    content: 'POLIVIUM GROUP Private Limited is engaged in renewable energy, solar EPC solutions, Bio-CNG projects, energy storage systems, infrastructure solutions, and related industrial services.',
    note: 'The information available on this website is intended for general informational and business purposes only.'
  },
  {
    num: '02', title: 'Website Usage',
    content: 'Users agree to use this website lawfully and responsibly. Unauthorized use including hacking attempts, data extraction, misuse of content, or activities affecting website performance is strictly prohibited.'
  },
  {
    num: '03', title: 'Intellectual Property Rights',
    content: 'All website content is the intellectual property of POLIVIUM GROUP Private Limited unless otherwise stated. Unauthorized reproduction, distribution, or modification is prohibited without prior written consent.',
    list: ['Logos & Brand Identity', 'Graphics & Designs', 'Technical Content & Documents', 'Images & Videos', 'Project Concepts']
  },
  {
    num: '04', title: 'Project Information & Estimates',
    content: 'Project specifications, energy generation estimates, savings calculations, ROI projections, subsidy-related information, and technical details displayed on this website are indicative in nature. Actual performance may vary depending on:',
    list: ['Site & weather conditions', 'Irradiation levels', 'Government policies', 'Grid availability & regulatory approvals', 'Equipment performance & operational practices'],
    note: 'POLIVIUM GROUP Private Limited does not guarantee exact financial returns, subsidy approvals, or uninterrupted energy generation.'
  },
  {
    num: '05', title: 'Third-Party Links',
    content: 'This website may contain links to external websites for informational purposes. POLIVIUM GROUP Private Limited is not responsible for the content, policies, or practices of third-party websites.'
  },
  {
    num: '06', title: 'Limitation of Liability',
    content: 'POLIVIUM GROUP Private Limited shall not be liable for any direct, indirect, incidental, consequential, or business losses arising from:',
    list: ['Use of this website', 'Reliance on website information', 'Technical interruptions, delays, or errors', 'Third-party services']
  },
  {
    num: '07', title: 'Modifications',
    content: 'POLIVIUM GROUP Private Limited reserves the right to update, modify, or remove website content and policies at any time without prior notice.'
  },
  {
    num: '08', title: 'Governing Law',
    content: 'These Terms & Conditions shall be governed in accordance with the laws of India.'
  },
]

export default function Terms({ setPage }) {
  return (
    <div style={{background:'var(--n50)',minHeight:'100vh'}}>
      {/* Header */}
      <div style={{background:'linear-gradient(135deg,var(--p900) 0%,var(--p700) 60%,var(--p500) 100%)',padding:'140px 24px 56px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 80% 20%, rgba(245,197,24,0.08) 0%, transparent 50%)'}}/>
        <div style={{maxWidth:960,margin:'0 auto',position:'relative'}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:20}}>
            <span style={{width:32,height:3,background:'var(--a400)',display:'block',borderRadius:2}}/>
            <span style={{color:'var(--a400)',fontSize:12,letterSpacing:'0.15em',textTransform:'uppercase'}}>Legal</span>
          </div>
          <h1 style={{color:'#fff',fontSize:'clamp(2rem, 5vw, 3.2rem)',fontWeight:700,margin:'0 0 16px',lineHeight:1.2}}>Terms & Conditions</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:16,margin:0,maxWidth:600,lineHeight:1.7}}>Welcome to poliviumgroup.com. By accessing or using this website, you agree to comply with the following Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the website.</p>
          <div style={{marginTop:36,display:'flex',gap:32,flexWrap:'wrap'}}>
            <div><div style={{color:'var(--a400)',fontSize:22,fontWeight:700}}>POLIVIUM GROUP</div><div style={{color:'rgba(255,255,255,0.55)',fontSize:12,marginTop:2}}>Private Limited</div></div>
            <div><div style={{color:'var(--a400)',fontSize:22,fontWeight:700}}>May 2026</div><div style={{color:'rgba(255,255,255,0.55)',fontSize:12,marginTop:2}}>Effective Date</div></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{maxWidth:960,margin:'0 auto',padding:'48px 24px 80px'}}>
        {SECTIONS.map((s) => (
          <div key={s.num} style={{marginBottom:40}}>
            <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:20}}>
              <span style={{background:'linear-gradient(135deg,var(--p500),var(--p700))',color:'#fff',width:36,height:36,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>{s.num}</span>
              <h2 style={{margin:0,fontSize:'clamp(1.2rem, 3vw, 1.5rem)',fontWeight:700,color:'var(--n900)'}}>{s.title}</h2>
              <div style={{flex:1,height:1,background:'var(--n200)'}}/>
            </div>
            <div style={{background:'#fff',borderRadius:10,border:'1px solid var(--n200)',padding:'24px 28px'}}>
              <p style={{fontSize:14.5,color:'var(--n700)',lineHeight:1.85,margin:0}}>{s.content}</p>
              {s.list && (
                <ul style={{margin:'16px 0 0',paddingLeft:20,fontSize:14,color:'var(--n600)',lineHeight:2}}>
                  {s.list.map(item => <li key={item}>{item}</li>)}
                </ul>
              )}
              {s.note && <p style={{marginTop:16,fontSize:13,color:'var(--a600)',fontStyle:'italic',background:'#fff8eb',padding:'10px 16px',borderRadius:6,border:'1px solid #fde68a'}}>{s.note}</p>}
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <div style={{background:'linear-gradient(135deg,var(--p900),var(--p700))',borderRadius:12,padding:'36px 32px',color:'#fff'}}>
          <h3 style={{margin:'0 0 8px',fontSize:20,fontWeight:600}}>Contact Information</h3>
          <p style={{margin:'0 0 24px',color:'rgba(255,255,255,0.7)',fontSize:14,lineHeight:1.7}}>For any legal or business inquiries, reach out through the channels below.</p>
          <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
            <a href="mailto:info@poliviumgroup.com" style={{background:'var(--a400)',color:'var(--p900)',padding:'10px 22px',borderRadius:6,textDecoration:'none',fontWeight:700,fontSize:14}}>info@poliviumgroup.com</a>
            <a href="mailto:poliviumgroup@gmail.com" style={{background:'rgba(255,255,255,0.1)',color:'#fff',padding:'10px 22px',borderRadius:6,textDecoration:'none',fontWeight:600,fontSize:14,border:'1px solid rgba(255,255,255,0.2)'}}>poliviumgroup@gmail.com</a>
            <a href="https://poliviumgroup.com" target="_blank" rel="noopener noreferrer" style={{background:'rgba(255,255,255,0.1)',color:'#fff',padding:'10px 22px',borderRadius:6,textDecoration:'none',fontWeight:600,fontSize:14,border:'1px solid rgba(255,255,255,0.2)'}}>poliviumgroup.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}
