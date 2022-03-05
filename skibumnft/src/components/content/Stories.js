import React from 'react'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import ChrisBentart from './ChrisBentart'

export default function Stories() {
  return (
      <Fragment >
               {/* helmet meta data for seo */}
               <Helmet>
                        <html lang="en"/>
                        <title>Ski Bum NFT Storys</title>
                        <meta name="description" content="Ski Bum NFTs Storys and blog of news and events in the ski and NFT world"/>
                         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                      </Helmet>
                     
                    {/* Start of components */}
        <div className="bg-black md:grid md:p-4 md:grid-cols-3 sm:grid-cols-1 md:grid-rows-20 text-white">
    <h1 className='col-start-2 sm:text-7xl text-center text-6xl sm:m-10'>Stories</h1>
  
    <button className='transform transition-all  text-center py-3 row-start-4 text-4xl col-start-2   rounded-md hover:bg-indigo-500 duration-300 '>
    <Link className="
      
     " to='/ChrisBenart'>Pro Skier Chris Benchelter enters into the NFT world from sking to art NFTs </Link></button>

<button className='transform transition-all  text-center py-3 row-start-5 text-4xl col-start-2  mt-10 rounded-md hover:bg-indigo-500 duration-300 '>
    <Link className="
      
     " to='/ChrisSold'>Pro Skier Chris Benchelter NFT gose to Auction </Link></button>

    </div>
    </Fragment>
  )
}
