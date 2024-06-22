import React from 'react'
import Exploremenu from './explore-menu/exploremenu'
import Restaurantgrid from './restaurantgrid/restaurantgrid'

const middle = () => {
  return (
    <div className='ml-[calc(10% + 36px)] mr-[calc(10% + 36px)] flex flex-col items-center justify-center'>
      <Exploremenu />
      <Restaurantgrid />
    </div>
  )
}

export default middle