
import React,  { useState } from 'react'
import "../Index.css"
import DownloadAds from './DownloadAds'
import VisibilitySensor from "react-visibility-sensor"
import { motion } from "framer-motion"
function Hero() {
    const [elementIsVisible, setElementIsVisible] = useState(false);
    const bg = {
        true: {
          left: "7rem",
        },
        false: {
          left: "19rem",
        },
      };
      const musicPlayer = {
        true: {
          left: "295px",
        },
        false: {
          left: "235px",
        },
      };
      const rect = {
        true: {
          left: "11rem",
        },
        false: {
          left: "13rem",
        },
      }
      const heart = {
        true: {
          left: "9rem",
        },
        false: {
          left: "12.5rem",
        },
      };

  return (
    <VisibilitySensor onChange={(isVisible)=> setElementIsVisible (isVisible)} minTopValue={300}>

   <div className="wrapper" style={{
    backgroundColor:"#081730", display:"flex", alignItems:"center", justifyContent:"space-between", paddingLeft:"5rem", paddingRight:"5rem", borderBottomRightRadius:"5rem", borderBottomLeftRadius:"5rem", width:"100%", height:"35rem", position:"relative", zIndex:"3"
   }}>
<div className="heading"
style={{ display:"flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", height: "100%", fontSize:"3rem"}}
>
<span>
    Experience The
</span>
<span>
    <b>Best Quality of Music</b>
</span>
<span className="" style={{ fontSize:"15px", color:"#525D6E" }}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat?
    <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil amet corrupti?
</span>
<div>
    <span className="" fontSize="13px"> Download Now On IOS and Android </span>
    <DownloadAds/>
</div>
</div>


{/* <div className="images" style={{ position:"relative", width:"50%" }}>
<img src={require("../img/backgraphics.png")} alt=""  style={{ position:"absolute",top:"8rem", left:"19rem"  }}/>
<img src={require("../img//p 1.png")} alt="" style={{ position:"absolute",top:"-15rem", height:"34rem", left:"13rem" }}/>
<img src={require("../img//p 2.png")} alt="" style={{ position:"absolute", left:"235px", top:"94px" , width:"175px" }}/>
<img src={require("../img//p 4.png")} alt="" style={{ position:"absolute",width:"5rem", left:"12.5rem", top:"12rem" }}/>
</div> */}
<div className="images " style={{ position:"relative", width:"50%" }}>
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../img/backgraphics.png")}
            alt=""
            className="absolute"
            style={{ position:"absolute",top:"-8rem", left:"19rem"  }}
          />
          <img
            src={require("../img/p 1.png")}
            alt=""
            className="absolute"
            style={{ position:"absolute",top:"-15rem", height:"34rem", left:"13rem" }}
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src={require("../img/p 2.png")}
            alt=""
            className="absolute "
            style={{ position:"absolute", left:"235px", top:"94px" , width:"175px" }}
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../img/p 3.png")}
            alt=""
            className="absolute w-[5rem] left-[13rem] top-[12rem]"
            style={{ position: "absolute",width:"5rem",  left:"13rem", top:"12rem" }}
          />
          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../img/p 4.png")}
            alt=""
            className="absolute"
            style={{ position:"absolute",width:"5rem", left:"12.5rem", top:"12rem" }}
          />
        </div>
   </div>
    </VisibilitySensor>
  )
}

export default Hero