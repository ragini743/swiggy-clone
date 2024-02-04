import React from "react";
import { s } from "../utils/constant";

const Restaurants = ({ restaurantData }) => {
  console.log(restaurantData);
  const { cloudinaryImageId, name, areaName, avgRating, cuisines, sla } =
    restaurantData.info;
  const url = s + cloudinaryImageId;
  return (
    <div>
      <div className="h-full text-[.5rem] sm:text-sm grid gap-5">
        <div className="rounded-2xl ">
          <img
            src={url}
            alt=""
            className="h-full w-full object-cover object-center"
          ></img>
        </div>
        <div>
        <p>{name} </p>
        <div>
          <span className="bg-green-600 text-white font-extrabold px-2">*</span>
          <span>{avgRating}</span>
          <span>. {sla.slaString}</span>
        </div>
        <div>{cuisines.join(",")} </div>
        <p>{areaName}</p>
        </div>
      
      </div>
    </div>
  );
};

export default Restaurants;
