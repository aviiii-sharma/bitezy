import React from 'react';
import bannerdata from '../../banner.json';

const Foods = ({ slide }) => {
  return (
    <div className='bannermenu flex'>
      {bannerdata.map((food, id) => {
        const { altText } = food.info.accessibility;
        const imageId  = food.info.imageId;
        
        return (
          <div 
            style={{
              transform: `translateX(-${slide * 100}%)`
            }} 
            key={id} 
            className='imgcard w-[150px] duration-500'
          >
            <img
              className='object-cover shrink-0 cursor-pointer'
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imageId}`}
              alt={altText}
            />
            <hr className='mt-4 mb-4'/>
          </div>
        );
      })}
    </div>
  );
}

export default Foods;
