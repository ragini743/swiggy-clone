import React, { useEffect, useState } from 'react'
import Restaurants from './Restaurants'
import LoadingState from './LoadingState'
import { PromotedLableTwo } from './Restaurants' 
import { Link } from 'react-router-dom'
import { Loader } from './LoaderSkelton'


const RestaurantList = ({listOfRestaurant ,setItems}) => {


const [onlineFood ,setOnlineFood] = useState([])
const RestaurantWithPromoted2 = PromotedLableTwo()
// console.log("as",RestaurantWithPromoted2)
const data = listOfRestaurant.card.card.gridElements.infoWithStyle.restaurants
useEffect(()=>{
  setOnlineFood(data)
  setItems(data)
} ,[])
if(onlineFood.length ===0){return <Loader />}


  return (
    <div className='mt-10'>
        
        <div className='mt-5 grid grid-cols-2 md:grid-cols-4 gap-10 grid-flow-row-dense relative '> 
          {onlineFood.map((restaurantData,index) =>{return (
            
            
            restaurantData.info.aggregatedDiscountInfoV3?(
              <Link to={`/restaurant/${encodeURIComponent(restaurantData.info.name)}-/${restaurantData.info.id}`} key={restaurantData.info.id} >
            <RestaurantWithPromoted2 restaurantData={restaurantData} /></Link>):
           
            (  <Link to={`/restaurant/${encodeURIComponent(restaurantData.info.name)}-/${restaurantData.info.id}`} >
            <Restaurants className=""  restaurantData={restaurantData} index = {index}  /> </Link>)
           

          )})}
       
        </div>

    </div>
  )
}

export default RestaurantList