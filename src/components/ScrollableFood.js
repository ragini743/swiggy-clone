import React from 'react'
import {  CircleCdnUrl } from '../utils/constant'



const ScrollableFood = ({data}) => {
 
 const Url = CircleCdnUrl+data.imageId

  return (
    <div className='mr-[5%]'>
       
        <div className='flex flex-col items-center justify-center '>
            <div className='w-24 sm:w-40 min-w-sm max-w-md flex ' >
                <img src={Url} alt="" className=' w-full  h-auto'></img>
            </div>
            
        </div>
    </div>
  )
}

export default ScrollableFood;
