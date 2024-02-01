import React from 'react'
import { useState ,useEffect } from 'react'
import { restaurantListData } from '../utils/constant'

const RestaurantList = () => {


  return (
    <div>
        <hr className='shadow-lg'></hr>
        <h1 className='text-sm pt-4 font-bold'>Restaurants with online food delivery in  prayagraj </h1>
        <div className='flex flex-wrap justify-evenly items-center text-xs'>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'>Fast Delivery </div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'> New on swiggy </div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'>Rating 4.0+ </div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'>Pure veg</div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'>Offer</div>
        </div>

    </div>
  )
}

export default RestaurantList