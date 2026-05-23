import s from './Footer.module.css'

export default function Footer({ setPage }) {
  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <div className={s.grid}>
          <div>
            <img src="/images/logo-white.png" alt="Polivium" style={{height:48,borderRadius:4,marginBottom:16}} />
            <p className={s.desc}>End-to-end Solar EPC for industries, businesses & governments.<br/> Trust • Energy • Creativity • Execution.</p>
          </div>
          <div>
            <h4 className={s.heading}>Company</h4>
            <button onClick={()=>setPage('about')}>About</button>
            <button onClick={()=>setPage('services')}>Services</button>
            <button onClick={()=>setPage('epc')}>EPC</button>
            <button onClick={()=>setPage('contact')}>Contact</button>
          </div>
          <div>
            <h4 className={s.heading}>Solutions</h4>
            <button onClick={()=>setPage('financing')}>Financing</button>
            <button onClick={()=>setPage('assetmanagement')}>Operations & Maintenance</button>
            <button onClick={()=>setPage('calculator')}>Solar Calculator</button>
            {/* <button onClick={()=>setPage('ni_hydrogen')}>Green Hydrogen</button> */}
            <button onClick={()=>setPage('ni_cbg')}>CBG Plants</button>
          </div>
          <div>
            <h4 className={s.heading}>Contact</h4>
            <p>✉ info@poliviumgroup.com</p>
            <p>☎ +91 755 017 0694</p>
            <p>📍 <a href="https://maps.app.goo.gl/kTJDbW1cpNns3NQdA?g_st=aw" target="_blank" rel="noopener noreferrer" style={{color:'inherit'}}>Ongole, India</a></p>
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <p>© 2026 Polivium Group Private Limited. All Rights Reserved.</p>
        <div className={s.legal}>
          <button onClick={()=>setPage('terms')}>Terms</button>
          <button onClick={()=>setPage('privacy')}>Privacy</button>
          <button onClick={()=>setPage('warranty')}>Warranty</button>
        </div>
      </div>
    </footer>
  )
}
