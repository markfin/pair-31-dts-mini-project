import React from 'react'
import Feature from './Feature'
function Experience() {
  return (
    <div className="experience" style={{ 
      display:"flex", flexDirection:"column", alignItems: "center", justifyContent:"flex-start",paddingLeft:"5rem", paddingRight:"5rem",backgroundColor:"#020917", height:"60rem",paddingTop:"18rem",marginTop:'10rem',position:"relative",zIndex:"2",borderBottomRightRadius:"5rem", borderBottomLeftRadius:"5rem"
     }}>
      <img src={require("../img/Path318.png")} alt="" style={{
        width:"5rem"
      }}/>
      <div className="headline" style={{
        marginTop:"1.75rem", display:"flex",flexDirection: "column", alignItems: "center", fontSize: "2rem"
      }}>
<span>An Amazing  App can change your daily life</span>
<span><b>Music Experience</b></span>
      </div>
      <div className="feature"
      style={{ 
        display:"flex", flexDirection: "row", alignItems: "center",  justifyContent:"space-around", marginTop:"6rem", width:"100%",
       }}
      >
      <Feature icon="Group 2" title="For Live Music" />
        <Feature icon="music icon" title="For Daily Music" />
        <Feature icon="Group 4" title="For Artists" />
      </div>
    </div>
  )
}

export default Experience