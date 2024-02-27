import React from "react";

import ScrollableFood from "./ScrollableFood";
import useRestaurantCrousel1 from "../utils/useRestaurantCrousel1";

const ScrollableFoodList = () => {
  const [scrollFood, ] = useRestaurantCrousel1();

  if (scrollFood.length === 0) {
    return;
  }

  return (
    <div className="w-full h-full">
  
      <div className="flex mt-6   items-center  flex-row overflow-x-auto w-[100%]">
        {scrollFood.map((data) => (
          <ScrollableFood key={data.id} data={data} />
        ))} 
       </div>
    </div>
  );
};

export default ScrollableFoodList;
