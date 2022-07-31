import React from 'react'
import DownloadAds from './DownloadAds'

function Download() {
  return (
    <div className=""
    style={{ 
        display:"flex",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"flex-start",
        paddingLeft:"5rem",
        paddingRight:"5rem",
        backgroundColor:"#020917",
        height:"48rem",
        paddingTop:"18rem",
        marginTop:"10rem",
        position: "relative",
        zIndex:"0",
        borderBottomLeftRadius:"5rem",
        borderBottomRightRadius:"5rem",
     }}
    >
    {/* tild icon or path icon */}
    <img src={require("../img/Path318.png")} alt="" className="" style={{ 
        width:"5rem"
     }} />
    {/* heading */}
    <div className="headline"
    style={{
        marginTop:"1.75rem", display:"flex",
        flexDirection: "column",alignItems: "center",fontSize:"2rem"
    }}
    >
      <span>Download The Best Music</span>
      <span>
        <b>App Now!</b>
      </span>
      <span className=""
      style={{
        fontSize: "1rem",
        color:"rgb(156 163 173)",
        paddingLeft: "5rem",
        paddingRight: "5rem",
        textAlign: "center",
        marginTop: "1rem"
      }}
      >
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
    {/* dowload ads */}
    <div className="mt-14">
      <DownloadAds/>
    </div>
  </div>
  )
}

export default Download