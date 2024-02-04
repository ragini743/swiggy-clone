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
        <div className="rounded-xl w-[100%] h-[100%] ">
          <img
            src={url}
            alt=""
            className=" w-96 h-44 object-cover object-center rounded-xl"
          ></img>
        </div>
        <div className="md:text-[1rem]">
        <p className="font-bold md:text-lg">{name} </p>
        <div className="font-bold md:text-[1rem] pt-1">
          <span className="bg-green-600 text-white font-extrabold px-2">*</span>
          <span>{avgRating}</span>
          <span>. {sla.slaString}</span>
        </div>
        <div className="pt-1">{cuisines.join(",")} </div>
        <p className="pt-1">{areaName}</p>
        </div>
      
      </div>
    </div>
  );
};

export default Restaurants;
