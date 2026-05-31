import { useState } from 'react'

const SECTIONS = [
  {
    num: '01', title: 'Information We Collect',
    content: 'We may collect the following information when you interact with our services:',
    list: ['Name', 'Phone number', 'Email address', 'Company information', 'Project requirements', 'Location details', 'Technical inquiry information', 'Website usage analytics']
  },
  {
    num: '02', title: 'Purpose of Data Collection',
    content: 'Your information may be used for:',
    list: ['Business communication', 'Project consultation', 'Proposal preparation', 'Customer support', 'Service improvement', 'Marketing communication', 'Technical assistance', 'Future business engagement']
  },
  {
    num: '03', title: 'Data Protection',
    content: 'POLIVIUM GROUP Private Limited adopts reasonable security practices and industry-standard measures to protect user data from unauthorized access, misuse, disclosure, or alteration.'
  },
  {
    num: '04', title: 'Sharing of Information',
    content: 'We do not sell, trade, or rent personal information to third parties. Information may only be shared:',
    list: ['With authorized project partners or vendors', 'When required by law', 'For project execution purposes', 'To comply with regulatory obligations']
  },
  {
    num: '05', title: 'Cookies & Analytics',
    content: 'Our website may use cookies and analytics tools to improve user experience, website functionality, performance monitoring, and marketing effectiveness.',
    note: 'Users may disable cookies through browser settings if preferred.'
  },
  {
    num: '06', title: 'User Rights',
    content: 'Users may request the following through official contact channels:',
    list: ['Access to personal data', 'Correction of information', 'Deletion of data', 'Withdrawal from marketing communications']
  },
  {
    num: '07', title: 'Consent',
    content: 'By using this website, you consent to the collection and use of information as described in this Privacy Policy.'
  },
  {
    num: '08', title: 'Policy Updates',
    content: 'POLIVIUM GROUP Private Limited reserves the right to update this Privacy Policy at any time without prior notice.'
  },
]

export default function Privacy({ setPage }) {
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
          <h1 style={{color:'#fff',fontSize:'clamp(2rem, 5vw, 3.2rem)',fontWeight:700,margin:'0 0 16px',lineHeight:1.2}}>Privacy Policy</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:16,margin:0,maxWidth:600,lineHeight:1.7}}>POLIVIUM GROUP Private Limited respects your privacy and is committed to protecting your personal information in accordance with applicable data protection laws.</p>
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
          <p style={{margin:'0 0 24px',color:'rgba(255,255,255,0.7)',fontSize:14,lineHeight:1.7}}>For privacy-related concerns, reach out through the channels below.</p>
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
