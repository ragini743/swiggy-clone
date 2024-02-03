import React from 'react'
import { CDN_URL } from '../utils/constant'

const TopRestaurant = ({resInfo}) => {
    console.log(resInfo)
    const{name,cloudinaryImageId,avgRating,areaName,sla} = resInfo.info
    const timing =sla.slaString
    console.log(cloudinaryImageId)
    const URL =CDN_URL+cloudinaryImageId
    console.log(URL)
  return (
    <div className=' ml-[5%]'>
        <div className='flex flex-col  '>
          <div className=' rounded-2xl min-w-28 sm:w-36 md:w-48 lg:w-68'>
             <img src={URL} alt='' className='h-full w-full object-contain rounded-2xl'></img>
          </div>
          <p className='text-xs'>{name} </p>
          <p className='text-xs'><span>*</span> {avgRating} . {timing} </p>
          <div>
            
          </div>
          <p className='text-xs sm:text-md'>{areaName}</p>
        </div>
        
    </div>
  )
}

export default TopRestaurant