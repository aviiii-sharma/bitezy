import React from 'react'
import Restaurantcards from '../restaurants/restaurantcard'

const restaurantgrid = () => {
  return (
    <>
    <div className='exploremenu flex w-[85rem] justify-between mb-7'>
    <h2 className='text-black text-2xl font-bold'>Restaurants with online food delivery in _____</h2>
    </div>
    <div className='restaurantList flex flex-col items-center justify-center '>
    <Restaurantcards  />
    </div>
    </>
  )
}

export default restaurantgrid
