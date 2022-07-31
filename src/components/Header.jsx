import React from 'react'
import CenterMenu from './CenterMenu'
// Di sini kita akan menggunakan useNavigate untuk bisa keluar dari halaman HomePage dan
// beralih ke halaman Login
import { useNavigate } from "react-router-dom";
import { keluarDariAplikasi } from "../authentication/firebase";

function Header() {
    // Gunakan hooks useNavigate
    const navigate = useNavigate();

    const buttonLogoutOnClickHandler = async() => {
     await keluarDariAplikasi()
      navigate("/login");
    };
  return (
  <div className="header" style={{ 
    display:"flex", backgroundColor:"rgb(8 23 48)", alignItems: "center", justifyContent:"space-between", paddingLeft:"5rem", paddingRight:"5rem", paddingTop:"2.4rem", fontSize:".8rem" }}>
<img src={require("../img/MuzicLogo.png")} alt="" className="logo" 
  style={{ width:"42px", height:"42px" }}
/>
<CenterMenu/>
<div className="buttons" style={{display:"flex"}}>

<button style={{ borderWidth:"2px", borderRadius:"10px",  borderColor:"rgb(35, 42, 78)", paddingLeft:"25px", paddingRight:"25px",backgroundColor:"#232A4E", color:"white"}}
onClick={buttonLogoutOnClickHandler}
 >Log  Out</button>
</div>
  </div> 
  )
}

export default Header
