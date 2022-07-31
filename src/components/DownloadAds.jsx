import React from 'react'

function DownloadAds() {
  return (
    <div className="download">
<div className="download_images" style={{ display:"flex" }}>
<img src={require('../img/App Store.png')} alt="" className='' style={{ borderWidth:"2px", borderColor:"#232A4E" ,borderRadius:"13px", height:"3rem", width:"10rem", marginRight:"2rem"

 }}/>
<img src={require('../img/Google Play.png')} alt=""  style={{ borderWidth:"2px", borderColor:"#232A4E" ,borderRadius:"13px", height:"3rem", width:"10rem"

}}/>
</div>
    </div>
  )
}

export default DownloadAds