import PageHeader from '../components/PageHeader'

const SECTIONS = [
  {
    title: '1. Product Warranty',
    content: 'Warranty for equipment shall be applicable as per the respective Original Equipment Manufacturer (OEM) warranty terms and conditions. This includes:',
    list: ['Solar modules', 'Inverters', 'Batteries', 'Mounting structures', 'Cables & electrical components', 'Monitoring systems']
  },
  {
    title: '2. Installation & Workmanship Warranty',
    content: 'POLIVIUM GROUP Private Limited may provide workmanship warranty for installation and EPC services as agreed under individual project contracts. Warranty terms may vary based on:',
    list: ['Project scope', 'Site conditions', 'System type', 'Commercial agreements']
  },
  {
    title: '3. Warranty Exclusions',
    content: 'Warranty shall not apply in cases involving:',
    list: ['Natural disasters (floods, lightning, fire, earthquakes)', 'Grid fluctuations', 'Unauthorized modifications', 'Improper operation or negligence', 'Third-party damages or vandalism', 'Force majeure events']
  },
  {
    title: '4. System Performance',
    content: 'Energy generation and system performance depend on multiple external factors including weather, irradiation, maintenance practices, shading conditions, and grid availability.',
    note: 'POLIVIUM GROUP Private Limited does not guarantee uninterrupted generation or exact energy output unless specifically agreed in writing.'
  },
  {
    title: '5. Service Support',
    content: 'Technical support, maintenance services, inspections, and AMC (Annual Maintenance Contract) services may be provided as per project agreements.'
  },
  {
    title: '6. Warranty Claim Process',
    content: 'Customers must submit the following through official communication channels for warranty evaluation:',
    list: ['Project details', 'Invoice / reference number', 'Description of issue', 'Supporting photographs / videos']
  },
  {
    title: '7. Inspection Rights',
    content: 'POLIVIUM GROUP Private Limited reserves the right to inspect systems and verify issues before approving warranty claims or replacement requests.'
  },
  {
    title: '8. Contact Information',
    content: 'For warranty and service support:',
    links: [
      { label: 'Email', href: 'mailto:info@poliviumgroup.com', text: 'info@poliviumgroup.com' },
      { label: 'Website', href: 'https://poliviumgroup.com', text: 'poliviumgroup.com' },
    ]
  },
]

export default function Warranty() {
  return (
    <>
      <PageHeader badge="Legal" title="Warranty & Service Policy" subtitle="POLIVIUM GROUP Private Limited — Effective Date: May 2026" bg="var(--n900)" />
      <section className="section">
        <div className="container" style={{maxWidth:780}}>
          <div className="reveal" style={{marginBottom:32,paddingBottom:32,borderBottom:'1px solid var(--n200)'}}>
            <p style={{color:'var(--n700)',lineHeight:1.8,fontSize:15}}>POLIVIUM GROUP Private Limited is committed to delivering reliable and high-quality renewable energy and EPC solutions.</p>
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
