import React, { useEffect, useState } from 'react'
import TopRestaurant from './TopRestaurant'
import { Link } from 'react-router-dom'
import { Loader } from './LoaderSkelton'

const RestaurantChain = ({topRestaurant}) => {
  const [resData,setResData] = useState([])
  console.log("top",topRestaurant)
  const data = topRestaurant.card.card.gridElements.infoWithStyle.restaurants

  useEffect(()=>{
    setResData(data)
  },[])

  const {title} = topRestaurant.card.card.header
  
  if(resData.length===0){
    return <Loader />
  }

  return (
    <div className='mt-10 md:mt-14'>
      <hr className='shadow-lg mb-6 sm:mb-10'></hr>
      <h1 className='font-bold md:text-2xl mb-6 sm:mb-10'>{title}</h1>
       <div className='overflow-x-auto  w-[100%] flex items-center '>
        {resData.map((resInfo) =>{
         return (<Link to={`/restaurant/${encodeURIComponent(resInfo.info.name)}-/${resInfo.info.id}`} key={resInfo.info.id} className='mr-[5%]'>
          {console.log("resInfo",resInfo)}
         <TopRestaurant  resInfo={resInfo} />
         </Link>
         )
        })}
      
       </div>
    </div>
  )
}

export default RestaurantChain