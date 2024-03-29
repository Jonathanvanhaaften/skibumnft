


// import  bgimg from '../../images/bgimg.jpg'
// import f_logo from '../../images/f_logo_RGB-White_58.png'
// import insta_logo from '../../images/Instagram_Glyph_Gradient_RGB.png'
// import tiktok_logo from '../../images/tiktok-logo.png'
// import twitter_logo from '../../images/twitter-logo.png'
// import opensea_logo from '../../images/opensea.png'





export default function Footer() {
  const {REACT_APP_FACEBOOK_URL} = process.env
    const {REACT_APP_INSTA_URL} = process.env
    const {REACT_APP_TWITTER_URL} = process.env
    const {REACT_APP_TIKTOK_URL} = process.env
    const {REACT_APP_OPENSEA_URL} = process.env
    return (
      <div className="h-100 grid grid-rows-6 bg-black h-12 w-full relative text-white " 
      style={{ backgroundImage: `url('/bgimg.jpg')` }}>

<div  className="row-start-3 p-7 bg-fixed bg-black bg-cover h-20 relative">                   
      <div className="flex  justify-center relative bg-black "> 
     
                <a className="px-2" href={REACT_APP_FACEBOOK_URL}>
                    <img className="w-10 h-10" src='/f_logo_RGB-White_58.png' alt="Facebook" />
                </a>
               <a className="px-2" href={REACT_APP_TWITTER_URL}>
                    <img className="w-10 h-10" src='/twitter-logo.png' alt="Twitter" />
                </a>
                <a className="px-2" href={REACT_APP_TIKTOK_URL}>
                    <img className="w-12 h-12" src='/tiktok-logo.png' alt="tiktok" />
                </a>
                <a className="px-2" href={REACT_APP_INSTA_URL}>
                    <img className="w-10 h-10" src='/Instagram_Glyph_Gradient_RGB.png' alt="Instagram" />
                </a>
                <a className="px-2" href={REACT_APP_OPENSEA_URL}>
                    <img className="w-10 h-10" src='/opensea.png'alt="OpenSea" />
                </a>
                </div> 
     </div>
     <div className=" row-start-2 relative bg-black bg-cover flex justify-center ">
     <a  href="mailto:Patrol@skibumnft.com"  className="text-2xl">patrol@skibumnft.com</a>
     </div>
      </div>
      
    )
}
