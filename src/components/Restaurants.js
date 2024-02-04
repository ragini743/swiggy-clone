import React from 'react'
import { s } from '../utils/constant'

const Restaurants = ({restaurantData}) => {
  console.log(restaurantData)
  const {cloudinaryImageId ,name ,areaName ,avgRating ,cuisines ,sla} =restaurantData.info
const url=s+cloudinaryImageId
  return (
    <div>
      <div className='flex flex-col text-[.5rem] sm:text-sm  flex-1 basis-0'>
        
        <div className='rounded-2xl '>
          <img src ={url}alt=''></img>
        </div>
        <p>{name} </p>
         <div>
          <span className='bg-green-600'>*</span>
          <span>{avgRating}</span>
          <span>. {sla.slaString}</span>
         </div>
         <div>{cuisines.join(",")} </div>
         <p>{areaName}</p>
         </div>
    </div>
  )
}

export default Restaurants