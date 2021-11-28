import { Fragment } from "react"
import React from 'react'
import Picture from './Picture'


const Gallery = () => {
    return (
        
       <Fragment><div>
           <div className="md:grid md:grid-col-6 md:grid-rows-3 sm:mb-20 mr-8">
            <div className="col-start-1 
             w-full h-full flex justify-center m-4  sm:pb-20 row-spam-2">
                <Picture/>
            </div>
            <div className="col-start-2 
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                <Picture/>
            </div>
                    <div className="col-start-3 
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                        <Picture/>
                    </div>
                    {/* Start of row 2 */}
                    <div className="col-start-1 row-start-2
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                <Picture/>
            </div>
            <div className="col-start-2 row-start-2
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                <Picture/>
            </div>
                    <div className="col-start-3 row-start-2
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                        <Picture/>
                    </div>
                       {/* Start of row 3 */}
                       <div className="col-start-1 row-start-3
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                <Picture/>
            </div>
            <div className="col-start-2 row-start-3
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                <Picture/>
            </div>
                    <div className="col-start-3 row-start-3
             w-full h-full flex justify-center m-4 sm:pb-20 row-spam-2">
                        <Picture/>
                    </div>
                </div>
            </div>

       </Fragment>
    )
}

export default Gallery
