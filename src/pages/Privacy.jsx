import PageHeader from '../components/PageHeader'

const DATA = [
  {t:'Commitment to Privacy',c:'Polivium Group is committed to protecting your personal data in accordance with the Digital Personal Data Protection Act, 2023.'},
  {t:'Data We Collect',c:'Name, email, phone, location, electricity consumption data, and project-related information when you interact with our services.'},
  {t:'How We Use Data',c:'To provide solar consultation, generate proposals, process orders, deliver services, and communicate project updates.'},
  {t:'Sharing of Data',c:'We may share data with financing partners, equipment suppliers, and installation teams strictly for service delivery.'},
  {t:'Your Rights',c:'You have the right to access, correct, and erase your personal data. You may withdraw consent at any time.'},
  {t:'Data Retention',c:'Personal data is retained for the duration of the business relationship plus 5 years for legal compliance.'},
  {t:'Security',c:'We implement industry-standard security measures including encryption, access controls, and regular audits.'},
  {t:'Grievance Redressal',c:'For privacy concerns, contact our Grievance Officer at privacy@polivium.com. We respond within 30 days.'},
]

export default function Privacy() {
  return (
    <>
      <PageHeader badge="Legal" title="Privacy Policy" subtitle="In compliance with DPDP Act, 2023" bg="var(--n900)" />
      <section className="section"><div className="container" style={{maxWidth:780}}>
        {DATA.map((s,i) => <div key={i} className="reveal" style={{marginBottom:32,paddingBottom:32,borderBottom:'1px solid var(--n200)'}}><h3 style={{fontSize:18,fontWeight:700,marginBottom:8}}>{s.t}</h3><p style={{color:'var(--n500)',lineHeight:1.8,fontSize:14}}>{s.c}</p></div>)}
      </div></section>
    </>
  )
}
