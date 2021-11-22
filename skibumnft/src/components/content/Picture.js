import React from 'react';
import  bgimg from '../../images/bgimg.jpg'

const Picture = props => {
    return (
            <div className=" w-full h-full p-4 m-14 bg-fixed bg-cover rounded relative flex justify-center" style={{ backgroundImage: `url('${bgimg}` }}>
          <div className="bg-black w-3/4">

          </div>
        </div> 
    );
};

export default Picture;
