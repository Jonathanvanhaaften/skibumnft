
import React from 'react'
import Mailchimp from './Mailchimp'
import Picture from './Picture'

export default function Dashboard() {
    return (
        <div className="bg-black md:grid md:p-4 md:grid-cols-3 sm:grid-cols-1 md:grid-rows-9 text-white">
            <div className="row-start-1  2xl:col-span-2 md:col-span-2 md:pl-40  pt-4">
                <h1 className="sm:text-7xl text-3xl pl-10">The Misson</h1>
                <p className="text-2xl p-4">We are fostering a community of ski, snowboard style 
                    enthusiasts and connecting it all into the world of NFTs and metaverses  </p>
                    
                    
            </div>
{/*  sm:grid-rows-1 */}
            {/* */}
                <div>
               
                </div>
                <div className="row-start-3 row-span-2 col-start-3">
                    <Mailchimp/>
                </div>
<div className="col-start-1 row-start-4
             w-full h-full flex justify-center sm:m-4 row-spam-2">
                <Picture/>
            </div>

            <div className="row-start-5 col-start-2 flex justify-center row-span-2">
                <div className="">
                    <h2 className="text-7xl text-center p-10" >Road Map</h2>
                    <div className="m-10">
                    <h3 className="text-4xl text-center p-5">Stage One</h3>
                    <p className=" text-2xl ">deploy website</p>
                    <p className=" text-2xl " >build community</p>
                    <h3 className="text-4xl text-center p-5">Stage Two</h3>
                    <p className=" text-2xl ">deploy first five NFTs</p>
                    <p className="text-2xl ">upgrading the website</p>
                    <p className=" text-2xl ">building links to other artist for our community</p>
                    <p className=" text-2xl ">upgrading the road map</p>
                    <h3 className="text-4xl text-center p-5">Stage Three</h3>
                    <p className=" text-2xl ">looking foward to metaverses</p>
                    <p className=" text-2xl ">checking in with community about future drops</p>
                    </div>
                </div>
            </div>
            
            <div className="col-start-3 row-start-6
             w-full h-full flex justify-center sm:m-4 sm:pb-40 row-spam-2">
                <Picture/>
            </div>
            
            
        </div>
    )
}
