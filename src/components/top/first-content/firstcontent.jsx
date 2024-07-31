import React from 'react'
import logo from './logo.png'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { IoLocationSharp } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";
import citiesList from '../../cities.json';


function firstcontent() {
  const [searchRestaurant, setSearchRestaurant] = useState('');
  
  return (
    <div className='image-content flex flex-col justify-center items-center w-full absolute bottom-[calc(50%-7rem)] '>
      <img className='h-20' src={logo} alt="logo" />
      <h1 className='text-[2rem] font-light mt-3'>Discover the best food & drinks in Kanpur</h1>

      <div className='w-[48rem] flex bg-white mt-5 rounded-lg h-12 justify-between'>
        <IoLocationSharp className='location-icon text-red-400 h-full ml-3 w-10' />
        <input className='search-box text-black w-maxcontent p-2 outline-none text-sm' placeholder='Select city'></input>
        <PiLineVerticalThin className='seperator text-black h-full w-9'/>
        <CiSearch className='search-icon text-black h-full ml-2 mr-2 w-8'/>
        <input className='search-box text-black w-full p-2 outline-none' 
          placeholder='Search for you favourite Restaurant' 
          value={searchRestaurant} 
          onChange={(e) => {
            setSearchRestaurant(e.target.value);
          }}/>
        <button className='search-btn text-black mr-4 h-full'>Search</button>
      </div>
      
    </div>  
  ) 
}

export default firstcontent;