import React from 'react'
import Exploremenu from './exploremenu/exploremenu'
import Restaurantgrid from './restaurantgrid/restaurantgrid'

const middle = () => {
  return (
    <div className='middle w-full flex flex-col items-center'>
      <Exploremenu />
      <Restaurantgrid />
    </div>
    
  )
}

export default middle