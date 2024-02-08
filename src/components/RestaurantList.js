import React, { useEffect, useState } from 'react'
import Restaurants from './Restaurants'
import LoadingState from './LoadingState'
import { PromotedLableTwo } from './Restaurants' 


const RestaurantList = ({listOfRestaurant ,setItems}) => {


const [onlineFood ,setOnlineFood] = useState([])
const RestaurantWithPromoted2 = PromotedLableTwo()
console.log("as",RestaurantWithPromoted2)
const data = listOfRestaurant.card.card.gridElements.infoWithStyle.restaurants
useEffect(()=>{
  setOnlineFood(data)
  setItems(data)
} ,[])
if(onlineFood.length ===0){return null}


  return (
    <div className='mt-10'>
        
        <div className='mt-5 grid grid-cols-2 md:grid-cols-4 gap-10 grid-flow-row-dense relative '> 
          {onlineFood.map((restaurantData,index) =>{return (
            restaurantData.info.aggregatedDiscountInfoV3?(<RestaurantWithPromoted2 restaurantData={restaurantData} />):
            <Restaurants className="" key={restaurantData.info.id} restaurantData={restaurantData} index = {index}  />

          )})}
       
        </div>

    </div>
  )
}

export default RestaurantList