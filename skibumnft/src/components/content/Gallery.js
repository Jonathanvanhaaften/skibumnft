import { Fragment } from "react"
import React from 'react'
import Picture from './Picture'


import nikkysnotch from '../../images/nftart/nikkysnotch.png'
import backseatdriver from '../../images/nftart/backseatdriver.png'
import deep from '../../images/nftart/deep.png'
import deepvan from '../../images/nftart/deepvan.png'
import drivesafe from '../../images/nftart/drivesafe.png'
import firstsnow from '../../images/nftart/firstsnow.png'
import Imnotstuckyourstuck from '../../images/nftart/Imnotstuckyourstuck.png'
import kickingview from '../../images/nftart/kickingview.png'
import overthebridgeoncemore from '../../images/nftart/overthebridgeoncemore.png'
import skibumgrind from '../../images/nftart/skibumgrind.png'
import tothenextskitown from '../../images/nftart/tothenextskitown.png'
import traverselookout from '../../images/nftart/traverselookout.png'
import turns from '../../images/nftart/turns.png'
import powderrknees from '../../images/nftart/powderrknees.png'





const Gallery = () => {
    const {REACT_APP_DEEPVAN_URL} = process.env
    const {REACT_APP_DRIVE_URL} = process.env
    const {REACT_APP_FIRST_URL} = process.env
    const {REACT_APP_DEEP_URL} = process.env
    const {REACT_APP_POWDERHUNTER_URL} = process.env
    const {REACT_APP_BRIDGE_URL} = process.env
    const {REACT_APP_NOTCH_URL} = process.env
    const {REACT_APP_NEXT_URL} = process.env
    const {REACT_APP_VIEW_URL} = process.env
    const {REACT_APP_LOOKOUT_URL} = process.env
    const {REACT_APP_EARN_URL} = process.env
    const {REACT_APP_BACK_URL} = process.env



    return (
        
       <Fragment><div>
         <div className="md:grid md:grid-col-6 md:grid-rows-3 sm:mb-20 mr-8">
         <a href={REACT_APP_NOTCH_URL}>
            <div className="col-start-1 
             w-full h-full flex justify-center m-4  sm:pb-20 row-spam-2">
                <Picture picture={nikkysnotch} setPic={true}/>
            </div></a> 
            <a href={REACT_APP_DEEP_URL}>
            <div className="col-start-2 
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                <Picture picture={deep} setPic={true}/>
            </div></a>
            <a href={REACT_APP_DEEPVAN_URL}>   <div className="col-start-3 
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                        <Picture picture={deepvan} setPic={true}/>
                    </div></a>

                    {/* Start of row 2 */}
                    <a href={REACT_APP_VIEW_URL}>
                    <div className="col-start-1 row-start-2
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                 <Picture picture={kickingview} setPic={true}/>
            </div></a>
            <a href={REACT_APP_FIRST_URL}>
            <div className="col-start-2 row-start-2
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                 <Picture picture={firstsnow} setPic={true}/>
            </div></a>
            <a href={REACT_APP_BRIDGE_URL}>
                    <div className="col-start-3 row-start-2
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                      <Picture picture={overthebridgeoncemore} setPic={true}/>
                    </div></a>
                       {/* Start of row 3 */}
                       <a href={REACT_APP_NEXT_URL}>
                       <div className="col-start-1 row-start-3
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                <Picture picture={tothenextskitown} setPic={true}/>
            </div></a>
            <a href={REACT_APP_POWDERHUNTER_URL}>
            <div className="col-start-2 row-start-3
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                <Picture picture={Imnotstuckyourstuck} setPic={true}/>
            </div></a>
            <a href={REACT_APP_LOOKOUT_URL}>
                    <div className="col-start-3 row-start-3
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                       <Picture picture={traverselookout} setPic={true}/>
                    </div></a>
               
            
                      {/* Start of row 4 */}
                      <a href={REACT_APP_BACK_URL}>
                      <div className="col-start-1 row-start-4
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                <Picture picture={backseatdriver} setPic={true}/>
            </div></a>
            <a href={REACT_APP_DRIVE_URL}>
            <div className="col-start-2 row-start-4
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                <Picture picture={drivesafe} setPic={true}/>
            </div></a>
            <a href={REACT_APP_EARN_URL}>
                    <div className="col-start-3 row-start-4
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                       <Picture picture={skibumgrind} setPic={true}/>
                    </div>
                    </a>
                </div>
            </div>

       </Fragment>
    )
}

export default Gallery
