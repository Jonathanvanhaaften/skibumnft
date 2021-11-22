import React from 'react'
import {Link} from 'react-router-dom'
const dropdown = ({isOpen,toggle}) => {
    return (
        <div className={isOpen ? "grid grid-rows-4 text-white text-center items-center bg-black" :"hidden"}onClick={toggle}>
              <Link className="p-4" to='/'>
                    Home
                </Link>
                <Link className="p-4" to='/links'>
                    Links
                </Link>
                <Link className="p-4" to='/about'>
                    About
                </Link>
             
        </div>
    )
}

export default dropdown
