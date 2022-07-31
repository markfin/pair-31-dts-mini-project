import React, {useState} from 'react'
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

function Feature({ icon, title }) {

  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };
  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor
    onChange={(isVisible) => setElementIsVisible(isVisible)}
    // minTopValue={100}
  >
    <div className=""
    style={{ 
        display:"flex",
        alignItems: 'center',
        justifyContent:"center",
        flexDirection: 'column',
        position:"relative",
        textAlign:"center",
        marginLeft:"3rem",
        marginRight:"3rem",
     }}
    >
       {/* icon */}
       <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className="icon"
          style={{ 
            borderRadius:"1rem",
            padding:"1rem",
            backgroundColor:"#081730"
           }}
        >
<img src={require(`../img/${icon}.png`)} alt=""  style={{ width:"3rem" }}/>
        </motion.div>
<span className="mt-5">{title}</span>

<span className="" style={{color:"#707070", marginTop:"1rem"  }}>
  Nunc elementum, dolor vitae lacinia pulvinar, augue felis scelerisque
  libero, sit amet laoreet lorem.
</span>

<span className="" style={{
    color:"#E600FF", textDecoration:"underline",marginTop:"3rem", cursor:"pointer"
}}>
  Learn more
</span>
    </div>
    </VisibilitySensor>

    
  )
}

export default Feature