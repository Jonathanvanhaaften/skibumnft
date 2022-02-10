
import React from 'react'
import Picture from './Picture'
import roadmap from '../../images/roadmapmain.jpg'
import van_img from '../../images/vanlife.png'
import deep from '../../images/nftart/deep.png'
import knees from '../../images/nftart/powderrknees.png'

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
export default function Dashboard() {
    return (
        <div>
        <div className="bg-black md:grid md:p-4 md:grid-cols-3 sm:grid-cols-1 md:grid-rows-20 text-white">
          
            <div className="row-start-1  2xl:col-span-2 md:col-span-2 md:pl-40  pt-4">
                <h1 className="sm:text-7xl text-3xl pl-10">The Misson</h1>
                <p className="text-2xl p-4">We are fostering a community of ski, snowboard style 
                    enthusiasts and connecting it all into the world of NFTs and metaverses  </p>
                    
                    
            </div>
{/*  sm:grid-rows-1 */}
            {/* */}
                <div>
               
                </div>
               

            <div className="col-start-1 row-start-4
             w-full h-full flex justify-center sm:m-4 row-spam-2">
                <Picture picture={van_img} setPic={true}/>
            </div>

            <div className="row-start-3 col-start-2 flex justify-center mr-10 col-span-2 row-span-3">
                <div className="">
                    <h2 className="text-7xl text-center p-10" >Road Map</h2>
                    <div className="m-10">
                   <Picture className="" picture={roadmap} setPic={true}/>
                    </div>
                </div>
            </div>
             <div className="row-start-6 row-span-2 col-start-2">
                      <TwitterFollowButton
                        screenName={'Skibumnft'}
                            />
                <TwitterTimelineEmbed
                     sourceType="profile"
                    screenName="Skibumnft"
                    options={{height: 900}}
                    />
                   </div>

 </div>
 <div className="bg-black md:grid md:p-4 md:grid-cols-3 sm:grid-cols-1 md:grid-rows-20 text-white">

 <div className="row-start-1  2xl:col-span-2 md:col-span-2 md:pl-40  pt-4">
                <h2 className="sm:text-7xl text-3xl pl-10">Foundation Collection:</h2>
                <p className="sm:text-7xl text-3xl pl-10">Ski Bum Life</p>
                
                    
                    
            </div>
            <div className=" col-start-2 row-start-7
             w-full h-full flex justify-center sm:m-4 row-spam-2">
                <Picture picture={deep} setPic={true}/>
            </div>
            <div className=" col-start-3 row-start-7
             w-full h-full flex justify-center sm:m-4 row-spam-2">
                <Picture picture={knees} setPic={true}/>
            </div>
            {/* <div className="col-start-3 row-start-6
             w-full h-full flex justify-center sm:m-4 sm:pb-40 row-spam-2">
                <Picture/>
            </div>
             */}
            </div>
       </div>
    )
}
