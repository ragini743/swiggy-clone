import React, { useEffect, useState } from 'react'

const RestaurantChain = ({topRestaurant}) => {
  const [resData,setResData] = useState([])
  
  const data = topRestaurant.card.card.gridElements.infoWithStyle.restaurants
  // setResData(data)
  useEffect(()=>{
    setResData(data)
  },[])
  // console.log(topRestaurant)
  const {title} = topRestaurant.card.card.header
  console.log(resData)
  if(resData.length===0){
    return null
  }

  return (
    <div className='mt-14'>
      <hr className='shadow-lg mb-10'></hr>
      <h1 className='font-bold'>{title}</h1>
       <div className='flex mt-10  items-center  flex-row overflow-x-auto w-[100%]'>
        {resData.map(() =>{

        })}
       </div>
    </div>
  )
}

export default RestaurantChain