import PageHeader from '../components/PageHeader'

const SECTIONS = [
  {
    title: '1. Information We Collect',
    content: 'We may collect the following information:',
    list: ['Name', 'Phone number', 'Email address', 'Company information', 'Project requirements', 'Location details', 'Technical inquiry information', 'Website usage analytics']
  },
  {
    title: '2. Purpose of Data Collection',
    content: 'Your information may be used for:',
    list: ['Business communication', 'Project consultation', 'Proposal preparation', 'Customer support', 'Service improvement', 'Marketing communication', 'Technical assistance', 'Future business engagement']
  },
  {
    title: '3. Data Protection',
    content: 'POLIVIUM GROUP Private Limited adopts reasonable security practices and industry-standard measures to protect user data from unauthorized access, misuse, disclosure, or alteration.'
  },
  {
    title: '4. Sharing of Information',
    content: 'We do not sell, trade, or rent personal information to third parties. Information may only be shared:',
    list: ['With authorized project partners or vendors', 'When required by law', 'For project execution purposes', 'To comply with regulatory obligations']
  },
  {
    title: '5. Cookies & Analytics',
    content: 'Our website may use cookies and analytics tools to improve user experience, website functionality, performance monitoring, and marketing effectiveness.',
    note: 'Users may disable cookies through browser settings if preferred.'
  },
  {
    title: '6. User Rights',
    content: 'Users may request:',
    list: ['Access to personal data', 'Correction of information', 'Deletion of data', 'Withdrawal from marketing communications'],
    note: 'Requests may be submitted through official contact channels.'
  },
  {
    title: '7. Consent',
    content: 'By using this website, you consent to the collection and use of information as described in this Privacy Policy.'
  },
  {
    title: '8. Policy Updates',
    content: 'POLIVIUM GROUP Private Limited reserves the right to update this Privacy Policy at any time without prior notice.'
  },
  {
    title: '9. Contact Information',
    content: 'For privacy-related concerns:',
    list: ['Email: info@poliviumgroup.com', 'Alternate Email: poliviumgroup@gmail.com', 'Website: poliviumgroup.com']
  },
]

export default function Privacy() {
  return (
    <>
      <PageHeader badge="Legal" title="Privacy Policy" subtitle="POLIVIUM GROUP Private Limited — Effective Date: May 2026" bg="var(--n900)" />
      <section className="section">
        <div className="container" style={{maxWidth:780}}>
          <div className="reveal" style={{marginBottom:32,paddingBottom:32,borderBottom:'1px solid var(--n200)'}}>
            <p style={{color:'var(--n700)',lineHeight:1.8,fontSize:15}}>POLIVIUM GROUP Private Limited respects your privacy and is committed to protecting your personal information.</p>
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
              {s.note && <p style={{marginTop:12,color:'var(--n500)',fontSize:13,fontStyle:'italic'}}>{s.note}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
