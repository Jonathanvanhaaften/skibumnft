import React from 'react';
import  bgimg from '../../images/bgimg.jpg'

const Picture = ({picture,setPic}) => {
  if (setPic  ){
    return(
    <div className=" w-full h-full p-4 m-14 bg-fixed bg-cover rounded relative flex justify-center " style={{ backgroundImage: `url('${bgimg}` }}>
    <img className='inline-block' src={picture} alt="" /> </div>
         )
  }else{
    return (
      
  <div className=" w-full h-full p-4 m-14 bg-fixed bg-cover rounded relative flex justify-center " style={{ backgroundImage: `url('${bgimg}` }}>
          <div className="bg-black w-3/4 text-9xl ">
         
<p className=" flex justify-center text-white md:pt-40">?</p>
          </div>
        </div> 
    );}
};
// {if picture = undefined then ? else image }
export default Picture;
