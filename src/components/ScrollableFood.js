import React from 'react'
import { CDN_URL } from '../utils/constant'
const ScrollableFood = ({data}) => {
    console.log("scroll",data)
    const text = data.action.text
 const Url =CDN_URL+data.imageId

  return (
    <div className='mr-[5%]'>
       
        <div className='flex flex-col'>
            <div className='w-24 h-24 md:w-40 md:h-40 rounded-full shadow-lg' >
                <img src={Url} alt="" className='rounded-full w-full object-contain h-[100%] '></img>
            </div>
            <p className='text-xs md:text-sm text-center'>{text}</p>
        </div>
    </div>
  )
}

export default ScrollableFood;
