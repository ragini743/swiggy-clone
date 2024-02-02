import React, { useEffect, useRef, useState } from "react";

import { restaurantListData } from "../utils/constant";
import RestaurantList from "./RestaurantList";
import ScrollableFood from "./ScrollableFood";

const Body = () => {
  const [listOfRetaurant, setListOfRestaurant] = useState([]);
 
  const [scrollFood, setScrollFood] = useState([]);
  const [scrollPositon,setScrollPosition] = useState(0) ;
 const itemPerScroll = 3;


  const handleRightArrow = () =>{
  const maxScroll = scrollFood.length-itemPerScroll
  const newScrollPosition = scrollPositon+itemPerScroll
  const nextScrollposition = Math.min(newScrollPosition,maxScroll)
  console.log("next",nextScrollposition)
 setScrollPosition(nextScrollposition)
 setScrollFood( scrollFood.slice(nextScrollposition, nextScrollposition + itemPerScroll))

  }

  const getRestaurant = async () => {
    //  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4700346&lng=81.8720841&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING") ;
    //  const json = await data.json()
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(restaurantListData);
      }, 2000);
    });
    const json = await p;
    // console.log(json);
    setScrollFood(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
    // setScrollPosition(json.data.cards[0].card.card.gridElements.infoWithStyle.info)
  };
  // console.log(scrollFood)
  useEffect(() => {
    getRestaurant();
  }, []);
  if (listOfRetaurant.length === 0 && scrollFood.length === 0) {
    return null;
  }


  return (
    <div className="pt-14 w-[90%] md:w-[80%] mx-auto md:pt-28">
      <div className="flex justify-between">
        <h1 className="font-bold w-[70%]">whats on your mind ? ..</h1>
        <div className="flex w-[20%]  items-center justify-between max-w-[100%]">
          <div className="w-[20%]  mr-[5%] border-gray-100 border-2 rounded-full bg-gray-200 "><img src="https://cdn.iconscout.com/icon/free/png-256/free-angle-left-b-1966289-1659461.png"alt="" className="h-auto w-full rounded-full object-contain" ></img></div>
          <div className="w-[20%] mr-[5%] border-gray-100 border-2 rounded-full bg-gray-200 " onClick={ () =>{handleRightArrow()
          console.log("hello")
          }
            }><img src="https://cdn.iconscout.com/icon/free/png-256/free-right-arrow-2693174-2234857.png"alt="" className="h-auto w-full rounded-full object-contain"></img></div>
         
        </div>
      </div>

      <div className="flex mt-10  items-center  flex-row overflow-x-auto w-[100%]">
        {scrollFood.map((data) => (
          <ScrollableFood key={data.id} data={data} />
        ))}
      </div>
      <RestaurantList />
    </div>
  );
};

export default Body;
