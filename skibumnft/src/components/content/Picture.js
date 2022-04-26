import React from 'react';
import  bgimg from '../../images/bgimg.jpg'

const Picture = ({picture,setPic,alt,link}) => {
  const {REACT_APP_FOUNDATION_URL} = process.env
  // if (setPic  ){
    return(
    
    <div className="max-w-sm p-4 m-14 bg-fixed bg-cover rounded relative overflow-hidden  justify-center "
           style={{ backgroundImage: `url('${bgimg}` }}>  <div>
    <img className='w-full' src={picture} alt={alt} /> 
    </div>
    <strong>
    <a href={link} className='text-white text-2xl'>{setPic}</a></strong>
    </div>
         )
//   }else{
//     return ( w-full h-full object-scale-down
      
//   <div className=" w-full h-full p-4 m-14 bg-fixed bg-cover rounded relative flex justify-center "
//      style={{ backgroundImage: `url('${bgimg}` }}>
//           <div className="bg-black w-3/4 text-9xl ">
         
// <p className=" flex justify-center text-white md:pt-40">?</p>
//           </div>
//         </div> 
//     );}
// };
// {if picture = undefined then ? else image }
    };
export default Picture;
