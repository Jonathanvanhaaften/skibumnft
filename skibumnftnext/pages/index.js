import Head from 'next/head'
import Link from 'next/link'


import Image from 'next/image'
import Picture from './../components/Picture'
import InstagramEmbed from 'react-instagram-embed';
import ScrollToTop from '../components/ScrollToTop'


// import van_img from '../public/vanlife.png'
// import turns from '../public/turns.png'
// import knees from '../public/powderrknees.png'
// import zima from '../public/zimaafterthestorm.png'
// import tour from '../public/tourpause.png'
// import sunny from '../public/sunny.png'

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
export default function Dashboard() {
    const {REACT_APP_FOUNDATION_URL} = process.env
    const {REACT_APP_FTURN_URL} = process.env
    const {REACT_APP_FKNESS_URL} = process.env
    const {REACT_APP_FZIMA_URL} = process.env
    const {REACT_APP_FPAUSE_URL} = process.env

    
    
    return (
        <div>
             
        <div className="bg-black md:grid md:p-4 md:grid-cols-3 sm:grid-cols-1 md:grid-rows-20 text-white">
          
            <div className="row-start-1  2xl:col-span-2 md:col-span-2 md:pl-40  pt-4">
                <h1 className="sm:text-7xl text-3xl pl-10">The Misson</h1>
                <p className="text-2xl p-4">

We are fostering a community of skiing and snowboarding enthusiasts, 
and connecting the culture with the world of NFTs and metaverses.
I’ve been ski-bumming for over 20 years in Whistler and the Kootenay Rockies of BC, Canada.
 I’m Jonathan vanHaaften, and I’ve worked in the hospitality industry all over the world, mostly in mountain towns.
This project means a lot to me. My work evokes feelings of joy and freedom in and around the mountains, 
along with the spontaneous nature of the ski-bum life, chasing the powder.</p> 
                    
            </div>
{/*  sm:grid-rows-1 */}
            {/* */}
                <div>
               
                </div>
               

            <div className="col-start-3 row-start-1
             w-full h-full flex justify-center sm:m-4 row-spam-2">
                <Picture picture={<Image scr ='/vankife.png'layout='full'/> } 
                 alt={"Ski Bum Van Image"}/>
            </div>
{/* 
            <div className="row-start-3 col-start-2 flex justify-center mr-10 col-span-2 row-span-3">
                <div className="">
                    <h2 className="text-7xl text-center p-10" >Road Map</h2>
                    <div className="m-10">
                   <Picture className="" picture={roadmap} setPic={true} alt={"Roadmap"}/>
                    </div>
                </div>
            </div> */}
             <div className="row-start-6 row-span-2 col-start-2 ">
             
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
 <div className="bg-black md:grid md:p-4 md:grid-cols-3 sm:grid-cols-1 md:grid-rows-15 text-white">

 <div className="row-start-1  2xl:col-span-2 md:col-span-2 md:pl-40  pt-4 ">

                <a href={REACT_APP_FOUNDATION_URL}  
                className="transform transition-all
                sm:text-7xl text-3xl pl-10  rounded-md hover:bg-indigo-500 duration-300 ">Foundation Collection:</a>
               
                <p className="sm:text-7xl text-3xl pl-10 pt-3">Ski Bum Life</p>
                
                    
                    
            </div>
            <div className="col-start-2 col-span-2 row-start-11 row-spam-2 md:grid mb-20">
            <div className=" col-start-1 row-start-7
             w-full h-full flex justify-center sm:m-4 row-spam-2">
               <Picture  picture={<Image scr ='/turns.png'layout='full'/> } 
               setPic={"Foundation"} title={'Turns'} eth={'0.40 ETH'} link={REACT_APP_FTURN_URL} alt={"Turns NFT on Foundation"}/>
           </div>
            
            < div className="  col-start-2 row-start-7
             w-full h-full flex justify-center sm:m-4 row-spam-2">
                  <Picture picture={<Image scr ='/powderknees.png'layout='full'/> }
                   setPic={"Foundation"}  title={'Powder Knees'} eth={'0.30 ETH'} 
                   link={REACT_APP_FKNESS_URL}alt={"Powder Kness on NFT Foundation"} />
             </div></div>
             
             <div className="col-start-1 col-span-2 row-start-11 row-spam-2 md:grid mb-20">
             <div className=" col-start-2 row-start-11
             w-full h-full flex justify-center sm:m-4 row-spam-2">
               <Picture  picture={<Image scr ='/tourpause.png'layout='full'/> }
                setPic={"Foundation"}  title={'After Powder Pause'} eth={'0.40 ETH'}  link={REACT_APP_FPAUSE_URL} alt={"After Powder Pause NFT on Foundation"}/>
           </div>
            
            < div className="  col-start-3 row-start-11
             w-full h-full flex justify-center sm:m-4 row-spam-2">
                  <Picture picture={<Image scr ='/zimaafterthestorm.png'layout='full'/> } setPic={"Foundation"}  title={'Zima After the Storm'} eth={'0.10 ETH'} link={REACT_APP_FZIMA_URL} alt={"Zima After the storm NFT on Foundation"} />
             </div></div>
            {/* <div className="col-start-3 row-start-6
             w-full h-full flex justify-center sm:m-4 sm:pb-40 row-spam-2">
                <Picture/>
            </div>
             */}
            </div>

            <div className="bg-black md:grid md:p-4  sm:grid-cols-1 md:grid-cols-3 md:grid-rows-20 text-white">

          

 <div className="row-start-1  2xl:col-span-2 md:col-span-2 md:pl-40  pt-4 ">
                
                <p className="sm:text-7xl text-3xl pl-10 ">Ski Bum Life</p>
                <p className="text-2xl p-4">
                     Living as a ski bum for over 20 years from whistler to BC's powder highway, a few enhanced photos 
                     from the last few seasons while working at a ski lodge.</p>
                    
                    </div>

            
                   
                <div className="row-start-2  sm:text-7xl text-3xl  col-start-2  pt-4 m-5 ">
                   <p className='text-center pr-10'> Intoducing</p>
                   
                    <p className="text-2xl p-4 pr-10 ">
                      Ski Bum NFT Stories. News, and happening from around the ski and NFT communitys.</p>   
                </div>

               

                <div className="row-start-3 col-start-2  text-center sm:text-7xl text-3xl   pt-4 ">
                    <button className='transform transition-all  text-center py-3 row-start-4 text-6xl col-start-2 
                      rounded-md hover:bg-indigo-500 duration-300'>
                    
                    <Link className="text-center p-3" href='/stories'>Stories</Link></button>
                     
    <button className='transform transition-all  text-center py-3 row-start-4 text-4xl col-start-2  mt-10 rounded-md hover:bg-indigo-500 duration-300 '>
    
    <Link className="" href='/chrisBenart'>Pro Skier Chris Benchelter enters into the NFT world from sking to art NFTs </Link>
    </button>

<button className='transform transition-all  text-center py-3 row-start-5 text-4xl col-start-2  mt-10 rounded-md hover:bg-indigo-500 duration-300 '>
    <Link className="   
     " href='/chrisSold'>Pro Skier Chris Benchelter NFT gose to Auction </Link></button>
                </div>

                   
                <div className="row-start-4  sm:text-7xl text-3xl  col-start-2  pt-4 m-5 border-indigo-500 border-8 shadow-md shadow-white">
                   <p className='text-center '>Come Check out <br /> the Gallery</p>
                   
                    <p className="text-2xl p-4 mt-5 text-center ">Ski Bum NFT Gallery. All the Ski Bum NFTs and Collections.</p>   
                </div>

               
     <div className="row-start-5 col-start-2 text-center sm:text-7xl text-3xl  pt-4 ">
               <button className='transform transition-all  text-center py-3  text-6xl  rounded-md hover:bg-indigo-500 duration-300'>
                <Link className="text-center p-3" href='/gallery'>Gallery</Link></button>
                </div>
                <div className="row-start-6 col-span-2  sm:text-7xl text-3xl  col-start-2  py-3  m-5  border-indigo-500 border-8">
                   <p className='text-center pr-10'>Come by & check out Ski NFT Instagram</p>
                   
                     
                </div>

             <div className="row-start-7 col-start-3  md:pr-20">
                 <br />
             <InstagramEmbed url='https://www.instagram.com/p/CYKBR_SJvUV/'
  clientAccessToken='496284042016370|65abf0cb7787fa467f3266c9439db24e'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
             </div>  
             </div>
             <div className="bg-black md:grid md:p-4  sm:grid-cols-1 md:grid-cols-3 md:grid-rows-20 text-white">
      <div className="row-start-1  sm:text-7xl text-3xl  col-start-2  pt-4  py-3  m-5  border-indigo-500 border-8 ">
                   <p className='text-center pr-10 md:pr-0'>Excited to Join the Sunnies Commuity</p>
                   
                       
                   
                </div> 
                < div className="pr-20 md:pr-0 row-start-3 col-start-1 row-span-3">
   

       <Picture className="" picture={<Image scr ='/sunny.png'layout='full'/> } setPic={true} alt={"The Sunnies NFT"} />
     
       </div>  
     <div className="row-start-6 col-start-2">   <p className="text-3xl p-4 mt-5 text-center ">
         <br />
         Check out their twiter, its a 
     community filled with NFT artists & welcoming people</p>
        </div>
       <div className="row-start-7 row-span-2 col-start-3 md:pr-20 ">
             
             <TwitterFollowButton
               screenName={'thesunniesnft'}
                   />
       <TwitterTimelineEmbed
            sourceType="profile"
           screenName="thesunniesnft"
           options={{height: 900}}
           />
          </div> 
          </div> <div className="bg-black md:grid md:p-4  sm:grid-cols-1 md:grid-cols-3 md:grid-rows-20 text-white">
          <div className="row-start-9 col-start-2">
          <button className='transform transition-all  text-center py-3  text-6xl  rounded-md hover:bg-indigo-500 duration-300'>
                <a href="https://www.sunniesnft.com/">The Sunnies Website</a></button></div>
            </div>
        
            <ScrollToTop/>
       </div>
    )
}

// export default function Home() {

//   return (
//     <div className=''>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>


//     </div>
//   )
// }
