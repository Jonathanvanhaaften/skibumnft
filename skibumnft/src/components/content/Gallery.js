import { Fragment } from "react"
import React from 'react'
import Picture from './Picture'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'

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
        
       <Fragment>
              {/* helmet meta data for seo */}
              <Helmet>
                        <html lang="en"/>
                        <title>Ski Bum NFT Gallery</title>
                        <meta name="description" content="Ski Bum NFTs Gallery of NFTs sold and for sale"/>
                         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                      </Helmet>
                     
                    {/* Start of components */}
          <div>
         <div className="md:grid md:grid-col-6 md:grid-rows-3 sm:mb-20 mr-8">
         
            < div  className="col-start-1 
             w-full h-full flex justify-center m-4  sm:pb-20 ">
                <Picture picture={nikkysnotch} link={REACT_APP_NOTCH_URL} setPic={'OpenSea'} alt={"Nikkys Notch NFT on OpenSea"}/>
           </div> 
            
            <div  className="col-start-2 
             w-full h-full flex justify-center m-4 sm:pb-20 ">
                <Picture picture={deep} setPic={'OpenSea'}link={REACT_APP_DEEP_URL} alt={"Deep NFT on OpenSea"} />
            </div>
             <div  className="col-start-3 
             w-full h-full flex justify-center m-4 sm:pb-20 ">
                        <Picture picture={deepvan} setPic={'OpenSea'} link={REACT_APP_DEEPVAN_URL} alt={"Deep Van NFT on OpenSea"} />
                   </div>

                    {/* Start of row 2 */}
                    
                    <div  className="col-start-1 row-start-2
             w-full h-full flex justify-center m-4 sm:pb-20 ">
                 <Picture picture={kickingview} setPic={'OpenSea'}link={REACT_APP_VIEW_URL} alt={"Kicking Horse View NFT on OpenSea"} />
            </div>
            
            <div  className="col-start-2 row-start-2
             w-full h-full flex justify-center m-4 sm:pb-20 ">
                 <Picture picture={firstsnow} setPic={'OpenSea'}link={REACT_APP_FIRST_URL} alt={"First Snow NFT on OpenSea"} />
            </div>
            
                    <div  className="col-start-3 row-start-2
             w-full h-full flex justify-center m-4 sm:pb-20 ">
                      <Picture picture={overthebridgeoncemore}link={REACT_APP_BRIDGE_URL} setPic={'OpenSea'} alt={"Bridge in Rogers Pass NFT on OpenSea"} />
                    </div>
                       {/* Start of row 3 */}
                      
                       <div  className="col-start-1 row-start-3
             w-full h-full flex justify-center m-4 sm:pb-20 ">
                <Picture picture={tothenextskitown} setPic={'OpenSea'}link={REACT_APP_NEXT_URL} alt={"To the Next NFT on OpenSea"} />
            </div>
            
            < div  className="col-start-2 row-start-3
             w-full h-full flex justify-center m-4 sm:pb-20 ">
                <Picture picture={Imnotstuckyourstuck} setPic={'OpenSea'}link={REACT_APP_POWDERHUNTER_URL} alt={"Stuck NFT on OpenSea"} />
            </div>
            
                    < div className="col-start-3 row-start-3
             w-full h-full flex justify-center m-4 sm:pb-20 ">
                       <Picture picture={traverselookout} setPic={'OpenSea'} link={REACT_APP_LOOKOUT_URL}alt={"Lookout NFT on OpenSea"} />
                    </div>
               
            
                      {/* Start of row 4 */}
                      
                      <div className="col-start-1 row-start-4
             w-full h-full flex justify-center m-4 sm:pb-20 ">
                <Picture picture={backseatdriver} setPic={'OpenSea'} link={REACT_APP_BACK_URL}alt={"Backseat NFT on OpenSea"} />
            </div>
            
            < div className="col-start-2 row-start-4
             w-full h-full flex justify-center m-4 sm:pb-20 ">
                <Picture picture={drivesafe} setPic={'OpenSea'}link={REACT_APP_DRIVE_URL} alt={"Drive Safe on NFT OpenSea"} />
            </div>
            
                    < div className="col-start-3 row-start-4
             w-full h-full flex justify-center m-4 sm:pb-20 ">
                       <Picture picture={skibumgrind} setPic={'OpenSea'}link={REACT_APP_EARN_URL} alt={"Ski Bum Grind NFT on OpenSea"} />
                    
                    </div>
                </div>
            </div>
         <ScrollToTop/>
       </Fragment>
    )
}

export default Gallery
