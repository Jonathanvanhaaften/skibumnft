import React from 'react'
import {Fragment} from 'react'
import { Helmet } from "react-helmet";
import InstagramEmbed from 'react-instagram-embed';
import Youtube from "./Youtube";
import ScrollToTop from '../ScrollToTop'
import { Link } from 'react-router-dom'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function ChrisBentart() {
    return (
      <Fragment>
            {/* helmet meta data for seo */}
            <Helmet>
                          <html lang="en"/>
                          <title>Ski Bum NFT (Benchelter NFT Article)</title>
                          
                          <meta name="description" content="Pro Skier Chris Benchelter Sells his frist NFT for 8 ETH(Ethereum)"/>
                           <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        </Helmet>
                        <div className="bg-black md:grid p-10 md:p-4 md:grid-cols-3 sm:grid-cols-1 md:grid-rows-26 text-white">
                       
                        <div className='row-start-1 text-5xl p-10 col-span-2'><p>Pro Skier Chris Benchelter NFT gose to Auction </p></div>
                       

                      <div className='col-start-2 row-start-2 '>
                      <TwitterFollowButton 
                        screenName={'Skibumnft'}
                            />
                          <TwitterTweetEmbed
  tweetId={'1499977375781511169'}
/></div>
                     
                      <br /><div className='row-start-3 text-3xl col-start-2 col-span-2 text-white'>
                       <br />
                       <br />
                       <br />
                       <br />
                          <br /><p>Chris Benchelters NFT has gone to Auction for 8 ETH on <button className='transform transition-all    rounded-md hover:bg-indigo-500 duration-300'>
                              <a href="https://superrare.com/">SuperRare.</a> </button> <br />
                              Whether the collector will accept the pair of Limited-Edition hand signed Grateful Dead Atomic skis, & Book/Vinyl LP from 
                              'Fire on the Mountain' is unclear.  This is an amazing break through for the future of the Ski industry entering into the NFT community.
                              With Chirs's NFT Being minted for only a month before the <button className='transform transition-all    rounded-md hover:bg-indigo-500 duration-300'>
                              <a href="https://superrare.com/">SuperRare</a> </button> auction begun. I personally can't wait to see Chris Benchelter's
                              next NFT, and hope this inspires more people in the ski industry to enter the NFT community.  
                          </p>
                          <br />
                                     
 
                          <br />
                          <br />
                      </div> <div className='col-start-1 row-start-3 md:p-20'>                        
                          <InstagramEmbed url='https://www.instagram.com/p/CZuPkeOJDyE/'
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
  /></div>
                 <div className="row-start-4  sm:text-7xl text-3xl  col-start-2  pt-4 m-5 border-indigo-500 border-8 shadow-md shadow-white">
                   <p className='text-center '>Come Check out <br /> the Gallery</p>
                   
                    <p className="text-2xl p-4 mt-5 text-center ">Ski Bum NFT Gallery. All the Ski Bum NFTs and Collections.</p>   
                </div>

               
     <div className="row-start-5 col-start-2 text-center sm:text-7xl text-3xl  pt-4 ">
               <button className='transform transition-all  text-center py-3  text-6xl  rounded-md hover:bg-indigo-500 duration-300'>
                <Link className="text-center p-3" to='/gallery'>Gallery</Link></button>
                </div>
  
   </div>


                       <br/>
                       <ScrollToTop/>
      </Fragment>
    )
  }
  
  export default ChrisBentart