import PageHeader from '../components/PageHeader'

const DATA = [
  {t:'Definitions & Interpretation',c:'These Terms govern your use of Polivium Group services including solar EPC, asset management, and related offerings.'},
  {t:'Scope of Services',c:'Polivium provides end-to-end solar EPC services including engineering, procurement, construction, financing facilitation, and O&M.'},
  {t:'Payment Terms',c:'Payment schedules are defined in individual project contracts. Standard terms include milestone-based payments aligned with project progress.'},
  {t:'Warranties & Guarantees',c:'All installations carry manufacturer warranties on equipment and Polivium workmanship guarantee as specified in the project agreement.'},
  {t:'Limitation of Liability',c:'Polivium liability is limited to the contract value. We are not liable for indirect, consequential, or incidental damages.'},
  {t:'Termination',c:'Either party may terminate with 30 days written notice. Termination does not affect accrued rights or obligations.'},
  {t:'Governing Law',c:'These terms are governed by the laws of India. Disputes shall be resolved through arbitration in Hyderabad.'},
]

export default function Terms() {
  return (
    <>
      <PageHeader badge="Legal" title="Terms & Conditions" bg="var(--n900)" />
      <section className="section"><div className="container" style={{maxWidth:780}}>
        {DATA.map((s,i) => <div key={i} className="reveal" style={{marginBottom:32,paddingBottom:32,borderBottom:'1px solid var(--n200)'}}><h3 style={{fontSize:18,fontWeight:700,marginBottom:8}}>{s.t}</h3><p style={{color:'var(--n500)',lineHeight:1.8,fontSize:14}}>{s.c}</p></div>)}
      </div></section>
    </>
  )
}
