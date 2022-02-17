import React from 'react'
import {Fragment} from 'react'
import { Helmet } from "react-helmet";
import InstagramEmbed from 'react-instagram-embed';
import Youtube from "./Youtube";
import ScrollToTop from '../ScrollToTop'

function ChrisBentart() {
  return (
    <Fragment>
          {/* helmet meta data for seo */}
          <Helmet>
                        <html lang="en"/>
                        <title>Ski Bum NFT (Benchelter NFT Article)</title>
                        
                        <meta name="description" content="Pro Skier Chris Benchelter enters into the NFT world from sking to art NFTs"/>
                         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                      </Helmet>
                      <div className="bg-black md:grid md:p-4 md:grid-cols-3 sm:grid-cols-1 md:grid-rows-20 text-white">
                      <div className='col-start-1 sm:text-7xl col-span-2 text-6xl sm:m-10'>Pro Skier Chris Benchelter enters into the NFT world from sking to art NFTs</div>
                      
                        <InstagramEmbed url='https://www.instagram.com/p/B9AHuMqnvnp/'
  clientAccessToken='496284042016370|65abf0cb7787fa467f3266c9439db24e'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
                     
                     <br/>
                     <div className='col-start-2 col-span-2 '>
                     <Youtube embedId='PNs68O5JSKg'/></div>
                     <div className='col-start-2 sm:text-7xl text-6xl sm:m-10'>Coming Soon</div>
                     </div>
                     <br/>
                     <ScrollToTop/>
    </Fragment>
  )
}

export default ChrisBentart