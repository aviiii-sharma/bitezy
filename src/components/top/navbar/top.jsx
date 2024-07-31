import React from 'react'
import Navbar from './navbar/navbar'
import Firstcontent from './first-content/firstcontent'

const top = () => {
    let foodpic = require('./');
  return (
    <div className=" h-[calc(-30rem + 100vh)] min-h-[36rem] max-h-[57rem]  bg-gray-400 w-full relative overflow-hidden">  
        <Navbar />
        <Firstcontent />
    </div>
  )
}

export default top