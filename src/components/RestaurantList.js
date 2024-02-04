import React, { useEffect, useState } from 'react'
import Restaurants from './Restaurants'
const RestaurantList = ({listOfRestaurant}) => {

const [onlineFood ,setOnlineFood] = useState([])
const data = listOfRestaurant.card.card.gridElements.infoWithStyle.restaurants
useEffect(()=>{
  setOnlineFood(data)
} ,[])
if(onlineFood.length ===0){return null}

  return (
    <div className='mt-10'>
        <hr className='shadow-lg'></hr>
        <h1 className='text-sm pt-4 font-bold md:text-lg'>Restaurants with online food delivery in  prayagraj </h1>
        <div className='flex flex-wrap justify-evenly items-center text-xs  md:text-sm'>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'>Fast Delivery </div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'> New on swiggy </div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'>Rating 4.0+ </div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'>Pure veg</div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'>Offer</div>
        </div>
        <div className='mt-5 grid grid-cols-2 md:grid-cols-4 gap-10 grid-rows-1'> 
          {onlineFood.map((restaurantData) =>{return (
            <Restaurants key={restaurantData.info.id} restaurantData={restaurantData} />
          )})}
        </div>

    </div>
  )
}

export default RestaurantList