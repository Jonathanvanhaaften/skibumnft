
import React from 'react'
import Mailchimp from './Mailchimp'
import Picture from './Picture'

export default function Dashboard() {
    return (
        <div className="bg-black grid p-6 grid-cols-3 grid-rows-5 text-white">
            <div>
                <h1 className="text-7xl">The Misson</h1>
                <p>We are forestering a community of Ski, Snowboard style 
                    enthusiasts and connecting it all into the world of NFTs and Metaverses</p>
            </div>
                <div>
               
                </div>
                <div className="row-span-2">
                    <Mailchimp/>
                </div>
            <div className="row-start-3 col-start-2 flex justify-center">
                <div>
                    <h2 className="text-7xl" >Road Map</h2>
                    <h3 className="text-xl">Stage One</h3>
                    <p>Deploy website</p>
                    <p>Build Community</p>
                    <h4 className="text-xl">Stage Two</h4>
                    <p>Deploy First Five Nft</p>
                </div>
            </div>
            <div className="col-start-1 row-start-5 flex justify-center">
                <Picture/>
            </div>
        </div>
    )
}
