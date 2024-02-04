import React from 'react'
import { CDN_URL } from '../utils/constant'

const TopRestaurant = ({resInfo}) => {
   
    const{name,cloudinaryImageId,avgRating,areaName,sla} = resInfo.info
    const timing =sla.slaString
  
    const URL =CDN_URL+cloudinaryImageId
   
  return (
    <div className=' mr-[5%]'>
        <div className='flex flex-col text-[.5rem] sm:text-sm  flex-1 basis-0'>
          <div className=' rounded-2xl w-20 sm:w-36 md:w-48 max-w-md'>
             <img src={URL} alt='' className='h-full w-full object-contain rounded-2xl'></img>
          </div>
          <p className='font-bold'>{name} </p>
          <p className=''><span>*</span> {avgRating} . {timing} </p>
          <div>
            
          </div>
          <p className='sm:text-md'>{areaName}</p>
        </div>
        
    </div>
  )
}

export default TopRestaurant