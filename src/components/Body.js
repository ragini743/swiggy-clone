import React, { useEffect, useState } from "react";

import { restaurantListData } from "../utils/constant";
import RestaurantList from "./RestaurantList";

import RestaurantChain from "./RestaurantChain";
import InfiniteRestaurant from "./InfiniteRestaurant";
import Footer from "./Footer";

import MySpinnerComponent from "./MySpinnerComponent";
import ScrollableFoodList from "./ScrollableFoodList";
import useStatus from "../utils/useStatus";
import useRestaurantCrousel1 from "../utils/useRestaurantCrousel1";

const Body = () => {
  const [items, setItems] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  

  const [scrollPositon, setScrollPosition] = useState(0);
  const onlineStatus = useStatus();
  useEffect(() => {
    getRestaurant();
  }, []);
  const itemPerScroll = 3;
  const [scrollFood] = useRestaurantCrousel1();

  // []
  // const handleRightArrow = () => {
  //   const maxScroll = scrollFood.length - itemPerScroll;
  //   const newScrollPosition = scrollPositon + itemPerScroll;
  //   const nextScrollposition = Math.min(newScrollPosition, maxScroll);
  //   console.log("next", nextScrollposition);
  //   setScrollPosition(nextScrollposition);
  //   setScrollFood(
  //     scrollFood.slice(nextScrollposition, nextScrollposition + itemPerScroll)
  //   );
  // };
  const getRestaurant = async () => {
    //  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4700346&lng=81.8720841&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING") ;
    //  const json = await data.json()
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(restaurantListData);
      }, 2000);
    });
    const json = await p;

  
    setListOfRestaurant(json.data.cards[4]);
  };

  useEffect(() => {
    getRestaurant();
  }, []);
  if (listOfRestaurant.length === 0 && scrollFood.length === 0) {
    return (
      <div className="pt-16">
        <MySpinnerComponent />
      </div>
    );
  }

  if (onlineStatus === false) {
    return <p className="pt-28 pl-4 font-bold text-lg">you are offline !! </p>;
  }

  return (
    <div className="pt-16 md:pt-28 overflow-hidden  box-border">
      <div className=" w-[80%]  max-w-70% mx-auto">
        <div className="">
          <div className="flex justify-between">
            <h1 className="font-bold md:text-2xl">whats on your mind ? ..</h1>
            <div className="flex  items-center justify-between w-[20%] ">
              <div className="w-[20%]  mr-[5%] border-gray-100 border-2 rounded-full bg-gray-200 ">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-angle-left-b-1966289-1659461.png"
                  alt=""
                  className="h-auto w-full rounded-full object-contain"
                ></img>
              </div>
              <div
                className="w-[20%] mr-[5%] border-gray-100 border-2 rounded-full bg-gray-200 "
                onClick={() => {
                  // handleRightArrow();
                  console.log("hello");
                }}
              >
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-right-arrow-2693174-2234857.png"
                  alt=""
                  className="h-auto w-full rounded-full object-contain"
                ></img>
              </div>
            </div>
          </div>
          <ScrollableFoodList scrollFood={scrollFood} />
        </div>

        <RestaurantChain />

        <InfiniteRestaurant items={items} setItems={setItems} />

        <RestaurantList
          listOfRestaurant={listOfRestaurant}
          setListOfRestaurant={setListOfRestaurant}
          items={items}
          setItems={setItems}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
