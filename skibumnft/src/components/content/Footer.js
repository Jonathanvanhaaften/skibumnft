
import React from 'react'

import  bgimg from '../../images/bgimg.jpg'
import f_logo from '../../images/f_logo_RGB-White_58.png'
import insta_logo from '../../images/Instagram_Glyph_Gradient_RGB.png'
import tiktok_logo from '../../images/tiktok-logo.png'
import twitter_logo from '../../images/twitter-logo.png'





export default function Footer() {
  const {REACT_APP_FACEBOOK_URL} = process.env
    const {REACT_APP_INSTA_URL} = process.env
    const {REACT_APP_TWITTER_URL} = process.env
    const {REACT_APP_TIKTOK_URL} = process.env
    return (
      <div className="h-100 grid grid-rows-6 bg-black h-12 w-full relative text-white" style={{ backgroundImage: `url('${bgimg}` }}>

<div  className="row-start-3 p-5 bg-fixed bg-black bg-cover h-20 relative">                   
      <div className="flex  justify-center relative bg-black "> 
     
                <a className="px-2" href={REACT_APP_FACEBOOK_URL}>
                    <img className="w-10 h-10" src={f_logo} alt="Facebook" />
                </a>
               <a className="px-2" href={REACT_APP_TWITTER_URL}>
                    <img className="w-10 h-10" src={twitter_logo} alt="Twitter" />
                </a>
                <a className="px-2" href={REACT_APP_TIKTOK_URL}>
                    <img className="w-12 h-12" src={tiktok_logo} alt="tiktok" />
                </a>
                <a className="px-2" href={REACT_APP_INSTA_URL}>
                    <img className="w-10 h-10" src={insta_logo} alt="Instagram" />
                </a></div> 
     </div>
     <a className="row-start-4 relative bg-black bg-cover " href="mailto:Patrol@skibumnft.com"  className="text-2xl">patrol@skibumnft.com</a>
     
      </div>
      
    )
}
