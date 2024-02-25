import React from 'react'
import { restaurantListData } from './constant';
import { useEffect ,useState } from 'react';

const useRestaurantCrousel1 = () => {
  

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

  };
  
  return (
    scrollFood
  )
}

export default useRestaurantCrousel1
