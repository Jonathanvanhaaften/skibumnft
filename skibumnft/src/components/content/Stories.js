import React from 'react'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet'

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
    <h1 className='col-start-2 sm:text-7xl text-6xl sm:m-10'>Stories</h1>
    <p className='row-start-2 col-start-2 text-4xl p-4 sm:m-10' >Coming Soon</p>
    </div>
    </Fragment>
  )
}
