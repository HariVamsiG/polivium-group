import PageHeader from '../components/PageHeader'

const VALUES = [
  { icon: '🤝', title: 'Trust', desc: 'Transparent dealings and reliable execution in every venture we undertake.' },
  { icon: '⚡', title: 'Energy', desc: 'Passionate drive to build sustainable, technology-driven solutions.' },
  { icon: '💡', title: 'Creativity', desc: 'Innovative approaches to bridge infrastructure, energy, and business opportunities.' },
  { icon: '🎯', title: 'Execution', desc: 'On-time, on-budget delivery with uncompromising quality standards.' },
]

export default function About({ setPage }) {
  return (
    <>
      <PageHeader badge="Who We Are" title="About Polivium" subtitle="Building sustainable, technology-driven solutions for inclusive growth." />

      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{alignItems:'center',gap:60}}>
            <div style={{background:'linear-gradient(135deg,var(--p50),#fff)',borderRadius:24,overflow:'hidden',border:'1px solid var(--n200)',boxShadow:'var(--shadow-md)'}}>
              <img src="/images/sun-logo-black.png" alt="Polivium" style={{width:'100%',height:'auto',display:'block'}} />
            </div>
            <div>
              <div className="badge badge--blue" style={{marginBottom:18}}>● About POLIVIUM</div>
              <h2 style={{fontSize:'clamp(1.6rem,3vw,2.4rem)',fontWeight:800,lineHeight:1.15,marginBottom:20}}>A Diversified Emerging Enterprise</h2>
              <div style={{width:48,height:3,background:'linear-gradient(90deg,var(--p500),var(--s500))',borderRadius:2,marginBottom:20}}/>
              <p style={{color:'var(--n700)',lineHeight:1.95,fontSize:15,marginBottom:16}}>POLIVIUM is a diversified emerging enterprise focused on building sustainable, technology-driven solutions across industrial, commercial, rural, and urban ecosystems. With a strong foundation in execution excellence, innovation, and long-term value creation, we aim to bridge infrastructure, energy, and business opportunities that contribute to inclusive growth.</p>
              <p style={{color:'var(--n500)',lineHeight:1.95,fontSize:14,marginBottom:28}}>Driven by the principles of Trust, Energy, Creativity, and Execution, POLIVIUM is committed to developing impactful ventures that empower industries, strengthen communities, and support a smarter and more sustainable future.</p>
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <button className="btn btn--primary" onClick={() => setPage('services')}>Our Solutions →</button>
                <button className="btn btn--outline" onClick={() => setPage('contact')}>Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--light">
        <div className="container text-center">
          <div className="badge badge--blue" style={{marginBottom:12}}>● Our Core Values</div>
          <h2 style={{fontSize:32,fontWeight:800,marginBottom:12}}>Trust • Energy • Creativity • Execution</h2>
          <p style={{color:'var(--n500)',maxWidth:560,margin:'0 auto 48px'}}>The four pillars that drive everything we do at Polivium.</p>
          <div className="grid grid--4">
            {VALUES.map(v => (
              <div key={v.title} className="card reveal" style={{padding:28,textAlign:'center'}}>
                <span style={{fontSize:40}}>{v.icon}</span>
                <h3 style={{fontSize:17,fontWeight:700,marginTop:14}}>{v.title}</h3>
                <p style={{color:'var(--n500)',fontSize:13.5,lineHeight:1.7,marginTop:8}}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container text-center">
          <div className="badge badge--blue" style={{marginBottom:12}}>● Leadership</div>
          <h2 style={{fontSize:32,fontWeight:800,marginBottom:48}}>Meet Our Team</h2>
          <div className="grid grid--2" style={{maxWidth:700,margin:'0 auto'}}>
            <div className="card reveal" style={{textAlign:'center',borderRadius:20,overflow:'hidden'}}>
              <img src="/images/founder.png" alt="Ramakrishna Polineni" style={{height:320,width:'100%',objectFit:'cover',objectPosition:'top'}} />
              <div style={{padding:24}}>
                <h3 style={{fontSize:18,fontWeight:700}}>Ramakrishna Polineni</h3>
                <p style={{color:'var(--p600)',fontSize:13,fontWeight:600,marginTop:4}}>Founder & CEO</p>
              </div>
            </div>
            <div className="card reveal" style={{textAlign:'center',borderRadius:20,overflow:'hidden'}}>
              <img src="/images/cofounder.jpeg" alt="Avinash Polineni" style={{height:320,width:'100%',objectFit:'cover',objectPosition:'top'}} />
              <div style={{padding:24}}>
                <h3 style={{fontSize:18,fontWeight:700}}>Avinash Polineni</h3>
                <p style={{color:'var(--p600)',fontSize:13,fontWeight:600,marginTop:4}}>Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="container text-center">
          <h2 style={{fontSize:32,fontWeight:800,color:'#fff'}}>Ready to Partner With Us?</h2>
          <p style={{color:'rgba(255,255,255,.7)',marginTop:12,fontSize:16}}>Let's discuss how Polivium can power your business with sustainable solutions.</p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap',marginTop:28}}>
            <button className="btn btn--white" onClick={() => setPage('contact')}>Contact Us</button>
            <button className="btn btn--accent" onClick={() => setPage('calculator')}>☀ Savings Calculator</button>
          </div>
        </div>
      </section>
    </>
  )
}
