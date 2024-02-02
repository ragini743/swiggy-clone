import React, { useEffect, useState } from "react";
import { restaurantListData } from "../utils/constant";
import RestaurantList from "./RestaurantList";
import ScrollableFood from "./ScrollableFood";
const Body = () => {
  const [listOfRetaurant, setListOfRestaurant] = useState([]);
  const [scrollFood, setScrollFood] = useState([]);
  const getRestaurant = async () => {
    //  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4700346&lng=81.8720841&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING") ;
    //  const json = await data.json()
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(restaurantListData);
      }, 2000);
    });
    const json = await p;
    console.log(json);
    setScrollFood(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
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
     <h1 className='font-bold'>whats on your mind ? ..</h1>
      <div className="flex mt-10 justify-evenly items-center  flex-row flex-wrap w-[100%]">
      
      {scrollFood.map((data) => (<ScrollableFood key ={data.id} data={data} />
        )
      )}
      </div>
      <RestaurantList />
    </div>
  );
};

export default Body;
