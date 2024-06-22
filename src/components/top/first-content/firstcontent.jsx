import React from 'react'
import logo from './logo.png'

function firstcontent() {
  return (
    <div className='image-content flex flex-col justify-center items-center w-full absolute bottom-[calc(50%-7rem)] '>
      <img className='h-20' src={logo} alt="logo" />
      <h1 className='text-[2rem] font-light'>Discover the best food & drinks in Kanpur</h1>
    </div>
  )
}

export default firstcontent