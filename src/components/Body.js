import React, { useEffect, useState } from 'react'
import { swiggy_API } from '../utils/constant'
const Body = () => {
    const [listOfRetaurant,setListOfRestaurant] = useState([])
    const [title ,setTitle] = useState("")
   
    const getRestaurant = async () => {
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4700346&lng=81.8720841&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING") ;
     const json = await data.json() 
     console.log(json)
    //  const headerTitle =json?.data?.cards
    
    }
    
    useEffect(() => {getRestaurant()},[])
if (listOfRetaurant.length===1){return null}
  return (
    <div className="pt-14 w-[90%] md:w-[80%] mx-auto ">
      <hr className='shadow-lg'></hr>
        <h1 className='text-sm pt-4 font-bold'>Restaurants with online food delivery in  prayagraj </h1>
        <div className='flex flex-wrap justify-evenly items-center text-xs'>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-300 mt-4'>Fast Delivery </div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-300 mt-4'> New on swiggy </div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-300 mt-4'>Rating 4.0+ </div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-300 mt-4'>Pure veg</div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-300 mt-4'>Offer</div>
        </div>
    </div>
  )
}

export default Body



