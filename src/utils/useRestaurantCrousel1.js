import React from "react";
import { restaurantListData } from "./constant";
import { useEffect, useState } from "react";

const useRestaurantCrousel1 = () => {
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [scrollFood, setScrollFood] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);



  const getRestaurant = async () => {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(restaurantListData);
      }, 2000);
    });
    const json = await p;
   

    setScrollFood(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
    setTopRestaurant(json.data.cards[1]);
  };

  return [scrollFood, topRestaurant]
};

export default useRestaurantCrousel1;
