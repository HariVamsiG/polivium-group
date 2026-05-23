import PageHeader from '../components/PageHeader'

const SECTIONS = [
  {
    title: '1. About the Company',
    content: 'POLIVIUM GROUP Private Limited is engaged in renewable energy, solar EPC solutions, Bio-CNG projects, energy storage systems, infrastructure solutions, and related industrial services.',
    note: 'The information available on this website is intended for general informational and business purposes only.'
  },
  {
    title: '2. Website Usage',
    content: 'Users agree to use this website lawfully and responsibly. Unauthorized use including hacking attempts, data extraction, misuse of content, or activities affecting website performance is strictly prohibited.'
  },
  {
    title: '3. Intellectual Property Rights',
    content: 'All website content is the intellectual property of POLIVIUM GROUP Private Limited unless otherwise stated. Unauthorized reproduction, distribution, or modification is prohibited without prior written consent.',
    list: ['Logos & Brand Identity', 'Graphics & Designs', 'Technical Content & Documents', 'Images & Videos', 'Project Concepts']
  },
  {
    title: '4. Project Information & Estimates',
    content: 'Project specifications, energy generation estimates, savings calculations, ROI projections, subsidy-related information, and technical details displayed on this website are indicative in nature. Actual performance may vary depending on:',
    list: ['Site & weather conditions', 'Irradiation levels', 'Government policies', 'Grid availability & regulatory approvals', 'Equipment performance & operational practices'],
    note: 'POLIVIUM GROUP Private Limited does not guarantee exact financial returns, subsidy approvals, or uninterrupted energy generation.'
  },
  {
    title: '5. Third-Party Links',
    content: 'This website may contain links to external websites for informational purposes. POLIVIUM GROUP Private Limited is not responsible for the content, policies, or practices of third-party websites.'
  },
  {
    title: '6. Limitation of Liability',
    content: 'POLIVIUM GROUP Private Limited shall not be liable for any direct, indirect, incidental, consequential, or business losses arising from:',
    list: ['Use of this website', 'Reliance on website information', 'Technical interruptions, delays, or errors', 'Third-party services']
  },
  {
    title: '7. Modifications',
    content: 'POLIVIUM GROUP Private Limited reserves the right to update, modify, or remove website content and policies at any time without prior notice.'
  },
  {
    title: '8. Governing Law',
    content: 'These Terms & Conditions shall be governed in accordance with the laws of India.'
  },
  {
    title: '9. Contact Information',
    content: 'For any legal or business inquiries:',
    links: [
      { label: 'Email', href: 'mailto:info@poliviumgroup.com', text: 'info@poliviumgroup.com' },
      { label: 'Website', href: 'https://poliviumgroup.com', text: 'poliviumgroup.com' },
    ]
  },
]

export default function Terms() {
  return (
    <>
      <PageHeader badge="Legal" title="Terms & Conditions" subtitle="POLIVIUM GROUP Private Limited — Effective Date: May 2026" bg="var(--n900)" />
      <section className="section">
        <div className="container" style={{maxWidth:780}}>
          <div className="reveal" style={{marginBottom:32,paddingBottom:32,borderBottom:'1px solid var(--n200)'}}>
            <p style={{color:'var(--n700)',lineHeight:1.8,fontSize:15}}>Welcome to <strong>POLIVIUM GROUP Private Limited</strong>. By accessing or using this website, you agree to comply with the following Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the website.</p>
          </div>
          {SECTIONS.map((s, i) => (
            <div key={i} className="reveal" style={{marginBottom:32,paddingBottom:32,borderBottom:'1px solid var(--n200)'}}>
              <h3 style={{fontSize:18,fontWeight:700,marginBottom:10,color:'var(--n900)'}}>{s.title}</h3>
              <p style={{color:'var(--n600)',lineHeight:1.8,fontSize:14}}>{s.content}</p>
              {s.list && (
                <ul style={{marginTop:12,display:'flex',flexDirection:'column',gap:6}}>
                  {s.list.map(item => (
                    <li key={item} style={{fontSize:14,color:'var(--n600)',display:'flex',gap:8,alignItems:'flex-start'}}>
                      <span style={{color:'var(--p500)',marginTop:2}}>•</span>{item}
                    </li>
                  ))}
                </ul>
              )}
              {s.links && (
                <ul style={{marginTop:12,display:'flex',flexDirection:'column',gap:6}}>
                  {s.links.map(link => (
                    <li key={link.text} style={{fontSize:14,color:'var(--n600)',display:'flex',gap:8,alignItems:'flex-start'}}>
                      <span style={{color:'var(--p500)',marginTop:2}}>•</span>
                      {link.label}: <a href={link.href} target="_blank" rel="noopener noreferrer" style={{color:'var(--p600)',textDecoration:'underline'}}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              )}
              {s.note && <p style={{marginTop:12,color:'var(--n500)',fontSize:13,fontStyle:'italic'}}>{s.note}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
