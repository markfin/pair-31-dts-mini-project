import React from 'react'
import {Link} from 'react-router-dom'

function CenterMenu() {
  return (
   
    <div className="menu">
        <ul className="" style={{ display:"flex", listStyle:"none",
           justifyContent:"space-between", width:'100%'}}>
            <li className="tekan" style={{marginRight:"3rem", cursor:"pointer"}}>
            <Link to="/">
            Home
            </Link>
            </li>
            <li style={{marginRight:"3rem", cursor:"pointer"}}>
            <Link to="music/">
            Music
            </Link>
            </li>
            <li style={{marginRight:"3rem", cursor:"pointer"}}>Artist</li>
            <li style={{marginRight:"3rem", cursor:"pointer"}}>Event Schedule</li>
            <li></li>
        </ul>
    </div>
  )
}

export default CenterMenu