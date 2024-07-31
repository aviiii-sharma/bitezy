import React from 'react';
import restaurantdata from '../../restaurant.json';
import Ratinglogo from './ratinglogo';

const RestaurantCard = () => {
  return (
    <div className='grid gap-10 grid-cols-4 w-[85rem]'>
      {restaurantdata.map((restaurant, id) => {
        const info = restaurant.info;
        const discountInfo = info.aggregatedDiscountInfoV3;
        return (
          
          <div key={id} className='card flex flex-col h-auto cursor-pointer'>
            <div className='group flex justify-start items-end relative overflow-hidden rounded-xl'>
            <img
              className='group-hover:scale-110 duration-200 object-cover overflow-hidden relative w-[20em] h-52'
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
              alt={`${info.name} image`}
              />

            <div className=" absolute z-10 h-1/2 w-full flex items-end pl-3 pb-1 bg-gradient-to-b from-transparent via-transparent to-gray-900">
              {discountInfo && (
                <div className="text-xl font-bold text-slate-50">
                  {discountInfo.header} {discountInfo.subHeader}
                </div>
              )}
            </div>

            
              </div>
            <div className="card-content pl-3 pt-3">
              <h1 className='font-semibold text-lg'>{info.name}</h1>
              <h2 className='flex items-center font-semibold text-base'><Ratinglogo/>{info.avgRating} • {`${info.sla.slaString}`}</h2>
              <h2 className='text-sm'>{info.cuisines.slice(0, 3).join(", ")}</h2>
              <h2 className='text-sm'>{`${info.areaName}`}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCard;
