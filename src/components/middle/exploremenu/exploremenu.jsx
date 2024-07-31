import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Foods from './foods';

const ExploreMenu = () => {
  const [slide, setSlide] = useState(0);
  const totalItems = 18; 
  const itemsPerSlide = 3; 

  const handleLeftClick = () => {
    setSlide((prevSlide) => Math.max(prevSlide - itemsPerSlide, 0));
  };

  const handleRightClick = () => {
    setSlide((prevSlide) => {
      const maxSlide = Math.ceil(totalItems / itemsPerSlide) - 1;
      return Math.min(prevSlide + itemsPerSlide, maxSlide * itemsPerSlide);
    });
  };

  return (
    <>
      <div className='exploremenu flex w-[85rem] justify-between mt-7 mb-2'>
        <h2 className='text-black text-2xl font-bold'>What's on your mind?</h2>
        <div className='arrows flex gap-3'>
          <div 
            className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex justify-center items-center cursor-pointer text-black'
            onClick={handleLeftClick}
          >
            <FaArrowLeft />
          </div>
          <div 
            className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex justify-center items-center cursor-pointer text-black'
            onClick={handleRightClick}
          >
            <FaArrowRight />
          </div>
        </div>   
      </div>
      <div className="foods flex w-[85rem] mb-5 overflow-x-hidden">
        <Foods slide={slide} />
      </div>
    </>
  );
}

export default ExploreMenu;
