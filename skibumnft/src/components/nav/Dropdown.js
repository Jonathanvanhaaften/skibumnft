import React from 'react'
import {Link} from 'react-router-dom'
import f_logo from '../../images/f_logo_RGB-White_58.png'
import insta_logo from '../../images/Instagram_Glyph_Gradient_RGB.png'
import tiktok_logo from '../../images/tiktok-logo.png'
import twitter_logo from '../../images/twitter-logo.png'
import opensea_logo from '../../images/opensea.png'
const dropdown = ({isOpen,toggle}) => {
    const {REACT_APP_FACEBOOK_URL} = process.env
    const {REACT_APP_INSTA_URL} = process.env
    const {REACT_APP_TWITTER_URL} = process.env
    const {REACT_APP_TIKTOK_URL} = process.env
    const {REACT_APP_OPENSEA_URL} = process.env
    return (
        <div className={isOpen ? "grid grid-rows-4 text-white text-center justify-content items-center bg-black" :"hidden"}onClick={toggle}>
              <Link className="p-4" to='/'>
                    Home
                </Link>
                <Link className="p-4" to='/links'>
                    Links
                </Link>
                <Link className="p-4" to='/gallery'>
                    Gallery
                </Link>
                <Link className="px-4" to='/stories'>
                    Stories
                </Link>
                <a className="p-2 mx-auto" href={REACT_APP_OPENSEA_URL}>
                    <img className="w-10 h-10" src={opensea_logo} alt="Facebook" /></a>
                <a className="p-2 mx-auto" href={REACT_APP_FACEBOOK_URL}>
                    <img className="w-10 h-10" src={f_logo} alt="Facebook" />
                </a>
               <a className="p-2 mx-auto" href={REACT_APP_TWITTER_URL}>
                    <img className="w-10 h-10" src={twitter_logo} alt="Twitter" />
                </a>
                <a className="p-2 mx-auto" href={REACT_APP_TIKTOK_URL}>
                    <img className="w-12 h-12" src={tiktok_logo} alt="tiktok" />
                </a>
                <a className="p-2 mx-auto" href={REACT_APP_INSTA_URL}>
                    <img className="w-10 h-10" src={insta_logo} alt="Instagram" />
                </a>
        </div>
    )
}

export default dropdown
