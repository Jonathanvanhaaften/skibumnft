
import React from 'react'

import  bgimg from '../../images/bgimg.jpg'


export default function Footer() {

    return (
      <div className="h-100 grid grid-rows-5 bg-black h-12 w-full relative text-white" style={{ backgroundImage: `url('${bgimg}` }}>

        <div  className="row-start-2 bg-fixed bg-black bg-cover h-20 relative">                   
      <p>Patrol@skibumnft.com</p>
      </div>
      </div>
      
    )
}
