import React from 'react'
import Navbar from './navbar/navbar'
import Firstcontent from './first-content/firstcontent'
import foodpic from './food.jpg'

const Top = () => {
  return (
    <div 
      className="h-[calc(-30rem + 100vh)] font-light min-h-[36rem] max-h-[57rem] w-full relative overflow-hidden text-white" 
      style={{ backgroundImage: `url(${foodpic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Navbar />
      <Firstcontent />
    </div>
  )
}

export default Top
