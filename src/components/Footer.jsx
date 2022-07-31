import React from 'react'
import CenterMenu from './CenterMenu'
import { Facebook, LinkedIn, Twitter, YouTube} from '@mui/icons-material'
function Footer() {
  return (
    <div className='footer' style={{ 
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"flex-start",
      paddingLeft:"5rem",
      paddingRight:"5rem",
      backgroundColor:"#081730",
      height:"45rem",
      paddingTop:"18rem",
      marginTop:"10rem",
      position: "relative",
      zIndex:"-1"

   }}>
    <CenterMenu/>
    <div className='' style={{ 
      display:"flex",
      justifyContent:"center",
      marginTop:"14px",
      width:"100%"
     }}>
     <div className="facebook" style={{
      borderRadius:"50%", borderWidth:"2px",borderColor:"white", padding:".5rem", marginRight:"5rem"
     }}>
<Facebook/>
     </div>
     <div className="twitter"   style={{
      borderRadius:"50%", borderWidth:"2px",borderColor:"white", padding:".5rem", marginRight:"5rem"}}>
        <Twitter/>
     </div>
<div className="youtube"  style={{
      borderRadius:"50%", borderWidth:"2px",borderColor:"white", padding:".5rem", marginRight:"5rem"}}>
    <YouTube/>
</div>
<div className="linkedin"  style={{
      borderRadius:"50%", borderWidth:"2px",borderColor:"white", padding:".5rem", marginRight:"5rem"}}>
    <LinkedIn/>
</div>
    </div>
    <span className="" 
    style={{ 
      fontSize:"1rem", color:"rgb(156 163 173)", paddingRight:"15rem", paddingLeft:"15rem",textAlign:"center", marginTop:"4rem"
     }}
    >
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
  )
}

export default Footer