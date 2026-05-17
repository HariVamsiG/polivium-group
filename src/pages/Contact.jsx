import { useState } from 'react'
import PageHeader from '../components/PageHeader'

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',phone:'',location:'',bill:'',type:'commercial',message:''})
  const [sent, setSent] = useState(false)
  const u = (k,v) => setForm({...form,[k]:v})

  return (
    <>
      <PageHeader badge="Get in Touch" title="Contact Us" subtitle="Get a free consultation for your solar project" />
      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {sent ? (
              <div className="card" style={{padding:48,textAlign:'center'}}><span style={{fontSize:56}}>✅</span><h3 style={{fontSize:22,fontWeight:700,marginTop:16}}>Thank You!</h3><p style={{color:'var(--n500)',marginTop:8}}>We'll get back to you within 24 hours.</p></div>
            ) : (
              <form className="card" style={{padding:36}} onSubmit={e=>{e.preventDefault();setSent(true)}}>
                <h3 style={{fontSize:20,fontWeight:700,marginBottom:24}}>Get Free Consultation</h3>
                <div style={{display:'flex',flexDirection:'column',gap:14}}>
                  <input className="input" placeholder="Full Name *" required value={form.name} onChange={e=>u('name',e.target.value)} />
                  <input className="input" type="email" placeholder="Email *" required value={form.email} onChange={e=>u('email',e.target.value)} />
                  <input className="input" placeholder="Phone *" required value={form.phone} onChange={e=>u('phone',e.target.value)} />
                  <input className="input" placeholder="Location" value={form.location} onChange={e=>u('location',e.target.value)} />
                  <input className="input" type="number" placeholder="Monthly EB Bill (₹)" value={form.bill} onChange={e=>u('bill',e.target.value)} />
                  <select className="input" value={form.type} onChange={e=>u('type',e.target.value)}>
                    <option value="commercial">Commercial & Industrial</option>
                    <option value="residential">Residential</option>
                    <option value="government">Government</option>
                  </select>
                  <textarea className="input" rows={3} placeholder="Message (optional)" value={form.message} onChange={e=>u('message',e.target.value)} />
                  <button className="btn btn--primary" type="submit" style={{width:'100%'}}>Submit Enquiry →</button>
                </div>
              </form>
            )}
            <div style={{display:'flex',flexDirection:'column',gap:20}}>
              <div className="card" style={{padding:32}}>
                <h3 style={{fontSize:18,fontWeight:700,marginBottom:16}}>Contact Information</h3>
                <div style={{display:'flex',flexDirection:'column',gap:14,color:'var(--n500)',fontSize:14}}>
                  <p>📧 info@poliviumgroup.com</p><p>📞 +91 755 017 0694</p><p>📍 Hyderabad, Telangana, India</p>
                </div>
              </div>
              <div className="card" style={{padding:32}}>
                <h3 style={{fontSize:18,fontWeight:700,marginBottom:12}}>Working Hours</h3>
                <p style={{color:'var(--n500)',fontSize:14}}>Mon – Sat: 9:00 AM – 6:00 PM</p>
                <p style={{color:'var(--n500)',fontSize:14,marginTop:4}}>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
