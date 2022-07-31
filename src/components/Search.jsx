import React, {useState } from 'react'
import MusicPlayer from './MusicPlayer'
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (
    <div className="search " style={{ 
        position:"relative",
        height:"65rem",
        
        paddingLeft:"5rem",
        paddingRight:"5rem",
        backgroundColor:"#081730",
        paddingTop:"18rem",
        paddingBottom:"18rem",
        marginTop:"-15rem",
        zIndex:1,
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        borderBottomRightRadius:"5rem",
        borderBottomLeftRadius:"5rem",
      
     }}>
        <div className="left" style={{ 
flex:"1 1 0%"
         }}>
{/* <img src={require("../img/backgraphics.png")} alt="" style={{ 
    position: "absolute", top:"22rem",left:"-47rem"
 }}/>
 <img src={require("../img/d1.png")} alt="" style={{ 
    position: "absolute", width:"16rem", top:"26rem"
 }}/>
 <img src={require("../img/d2.png")} alt="" style={{ 
    position: "absolute",width:"9rem", top:"32.7rem", left:"7rem"
 }}/>
  
 <img src={require("../img/d3.png")} alt="" style={{ 
    position: "absolute", width:"9rem", top:"33rem", left:"17rem"
 }}/>
 <img src={require("../img/d4.png")} alt="" style={{ 
    position: "absolute", width:"17rem", top:"50rem", left:"2rem"
 }}/> */}

 <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/backgraphics.png")}
          alt=""
          className="absolute"
          style={{ 
    position: "absolute", top:"22rem",left:"-47rem"
 }}
        />
        <motion.img
          src={require("../img/d1.png")}
          alt=""
          className="absolute"
          style={{ 
    position: "absolute", width:"16rem", top:"26rem"
 }}
        />{" "}
        <motion.img
          src={require("../img/d2.png")}
          alt=""
          className="absolute"
          style={{ 
            width:"9rem",
            top:"32.7rem",
            left:"7rem"
           }}
        />{" "}
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={require("../img/d3.png")}
          alt=""
          className="absolute"
          style={{ 
    position: "absolute", width:"9rem", top:"33rem", left:"17rem"
 }}
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/d4.png")}
          alt=""
          className="absolute"
          style={{ 
    position: "absolute", width:"17rem", top:"50rem", left:"2rem"
 }}
        />
        </div>
       
<div className="right" style={{ display:"flex", alignItems: "flex-start", flexDirection: "column", justifyContent: "flex-start", flex:"1 1 0%", height: "100%", paddingTop:"9rem"}}>
<div className="searchbar " style={{ display:"flex", justifyContent: "flex-start", width:"100%"}}>
<input type="text" placeholder="enter keyword or URL" className=''
    style={{  flex:"19", outline:'2px solid transparent', outlineOffset:'2px', backgroundColor:"#020917", borderRadius:".75rem", padding:".75rem", height:"3rem"}}
/>
<div className="searchIcon" style={{ display:"flex", flex:"1 1 0%", alignItems:"center ", borderRadius:".75rem",marginLeft:"1rem",backgroundColor:"linear-gradient(to bottom left)"}}>
<img src={
    require("../img/search.png")
} alt="" style={{ width:"1.5rem"}}/>
</div>
</div>
  <div className="tild" style={{ 
    display:"flex", justifyContent:"flex-start",marginTop:"1.75rem", alignItems:"center", width:"100%"
   }}>
          <img
            src={require("../img/Path318.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>
        <div className="detail" style={{ 
            display:"flex",
            flexDirection:"column",
            marginTop:"1.25rem",
            fontSize:"2.25rem",
            lineHeight:"2.25rem",  
         }}>
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="" style={{ 
            fontSize:".875rem",
            marginTop:".75rem",
            color:"#4D586A"
           }}>
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
        <MusicPlayer/>
        </VisibilitySensor>
</div>
        </div>
  )
}

export default Search