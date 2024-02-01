import React, { useEffect, useState } from 'react'
import { restaurantListData } from '../utils/constant'
const Body = () => {
  const [listOfRetaurant , setListOfRestaurant] = useState([])
       
  const getRestaurant = async () => {
  //  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4700346&lng=81.8720841&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING") ;
  //  const json = await data.json() 
  const p = new Promise((resolve,reject) =>{
    setTimeout(() =>{
   resolve( restaurantListData)
    } ,2000)
  })
  const json = await p
  console.log(json)
  // const json = restaurantListData
  
  }
  
  useEffect(() => {getRestaurant()},[])
if (listOfRetaurant.length === 1){
  return null
}
  return (
    <div className="pt-14 w-[90%] md:w-[80%] mx-auto ">

    </div>
  )
}

export default Body



