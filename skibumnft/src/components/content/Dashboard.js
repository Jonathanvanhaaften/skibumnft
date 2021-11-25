
import React from 'react'
import Mailchimp from './Mailchimp'
import Picture from './Picture'

export default function Dashboard() {
    return (
        <div className="bg-black grid p-4 grid-cols-3  grid-rows-8 text-white">
            <div className="row-start-1 pl-40 pt-20">
                <h1 className="text-7xl">The Misson</h1>
                <p className="text-2xl p-4">We are fostering a community of Ski, Snowboard style 
                    enthusiasts and connecting it all into the world of NFTs and Metaverses  </p>
                    
            </div>
                <div>
               
                </div>
                <div className="row-start-3 row-span-2 col-start-3">
                    <Mailchimp/>
                </div>
            <div className="row-start-5 col-start-2 flex justify-center row-span-2">
                <div className="">
                    <h2 className="text-7xl text-center p-10" >Road Map</h2>
                    <h3 className="text-4xl text-center p-5">Stage One</h3>
                    <p className=" text-2xl ">Deploy website</p>
                    <p className=" text-2xl " >Build Community</p>
                    <h3 className="text-4xl text-center p-5">Stage Two</h3>
                    <p className=" text-2xl ">Deploy First Five Nft</p>
                    <p className="text-2xl ">Upgrading the Website</p>
                    <p className=" text-2xl ">Building Links to other artist for our Community</p>
                    <p className=" text-2xl ">Upgrading the Road Map</p>
                    <h3 className="text-4xl text-center p-5">Stage Three</h3>
                    <p className=" text-2xl ">Looking foward to Metaverses</p>
                    <p className=" text-2xl ">Checking in with Community about future drops</p>
                </div>
            </div>
            <div className="col-start-1 row-start-5
             w-full h-full flex justify-center m-4 row-spam-2">
                <Picture/>
            </div>
            <div className="col-start-3 row-start-6
             w-full h-full flex justify-center m-4 pb-40 row-spam-2">
                <Picture/>
            </div>
            
            
        </div>
    )
}
