import PageHeader from '../components/PageHeader'

const DATA = [
  { title:'50 MW Solar Park', loc:'Telangana', type:'Utility', cap:'50 MW', img:'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80' },
  { title:'Rooftop Installation', loc:'Hyderabad', type:'Commercial', cap:'2.5 MW', img:'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=500&q=80' },
  { title:'Industrial Captive Plant', loc:'Maharashtra', type:'Industrial', cap:'15 MW', img:'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&q=80' },
  { title:'Government PSU Project', loc:'Rajasthan', type:'Government', cap:'100 MW', img:'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&q=80' },
  { title:'Carport Solar', loc:'Bangalore', type:'Commercial', cap:'500 kW', img:'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=500&q=80' },
  { title:'Floating Solar', loc:'Kerala', type:'Utility', cap:'10 MW', img:'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80' },
  { title:'Warehouse Rooftop', loc:'Chennai', type:'Industrial', cap:'3 MW', img:'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=500&q=80' },
  { title:'Hospital Solar', loc:'Delhi', type:'Commercial', cap:'200 kW', img:'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80' },
]

export default function Projects() {
  return (
    <>
      <PageHeader badge="Portfolio" title="Our Projects" subtitle="500MW+ installed across 15+ states in India" />
      <section className="section">
        <div className="container">
          <div className="grid grid--4">
            {DATA.map(p => (
              <div key={p.title} className="card reveal">
                <img src={p.img} alt={p.title} style={{height:160,width:'100%',objectFit:'cover'}} />
                <div style={{padding:20}}>
                  <h3 style={{fontSize:15,fontWeight:700}}>{p.title}</h3>
                  <p style={{fontSize:12.5,color:'var(--n500)',marginTop:4}}>📍 {p.loc} • {p.cap}</p>
                  <span style={{display:'inline-block',marginTop:8,padding:'3px 10px',background:'var(--p50)',color:'var(--p600)',borderRadius:20,fontSize:11,fontWeight:600}}>{p.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
