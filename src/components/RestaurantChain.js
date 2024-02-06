import React, { useEffect, useState } from 'react'
import TopRestaurant from './TopRestaurant'

const RestaurantChain = ({topRestaurant}) => {
  const [resData,setResData] = useState([])
  
  const data = topRestaurant.card.card.gridElements.infoWithStyle.restaurants

  useEffect(()=>{
    setResData(data)
  },[])

  const {title} = topRestaurant.card.card.header
  
  if(resData.length===0){
    return null
  }

  return (
    <div className='mt-10 md:mt-14'>
      <hr className='shadow-lg mb-6 sm:mb-10'></hr>
      <h1 className='font-bold md:text-2xl mb-6 sm:mb-10'>{title}</h1>
       <div className='overflow-x-auto  w-[100%] flex items-center '>
        {resData.map((resInfo) =>{
         return <TopRestaurant key={resInfo.info.id} resInfo={resInfo} />
        })}
      
       </div>
    </div>
  )
}

export default RestaurantChain