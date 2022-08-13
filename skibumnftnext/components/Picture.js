import Image from "next/image";

const Picture = ({picture,height,width,setPic,alt,link,title,eth}) => {
  const {REACT_APP_FOUNDATION_URL} = process.env
  // if (setPic  ){
    return(
    
    <div className="max-w-sm p-4 m-14 bg-fixed bg-cover rounded relative overflow-hidden  justify-center "
           style={{ backgroundImage:  `url('/bgimg.jpg')`  }}>  <div>
    <Image className='w-full' src={picture} width={width}height={height} alt={alt} /> 
    </div>
    <div className='text-white text-4xl'>
      <strong>
      {title}</strong></div>
    <ul className='flex justify-between text-white'>
      <li><strong>
    <a href={link} className='text-white text-2xl hover:text-indigo-500'>{setPic}</a></strong>
      </li>
      <li>
        <strong><p className='text-2xl'>{eth}</p></strong>
        
      </li>
    </ul>
    {console.log(picture)}
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
