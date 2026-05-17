export default function PageHeader({ badge, title, subtitle, bg = 'linear-gradient(135deg,var(--p900),var(--p600),var(--s700))' }) {
  return (
    <section style={{background:bg,padding:'140px 24px 80px',textAlign:'center'}}>
      {badge && <div className="badge badge--light" style={{marginBottom:16}}>● {badge}</div>}
      <h1 style={{fontSize:'clamp(2rem,4.5vw,3rem)',fontWeight:800,color:'#fff',maxWidth:700,margin:'0 auto'}}>{title}</h1>
      {subtitle && <p style={{color:'rgba(255,255,255,.7)',marginTop:12,fontSize:16,maxWidth:560,margin:'12px auto 0'}}>{subtitle}</p>}
    </section>
  )
}
