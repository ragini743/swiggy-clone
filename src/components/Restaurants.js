import React from "react";
import { s } from "../utils/constant";
import LoadingState from "./LoadingState";
const Restaurants = ({ restaurantData, index }) => {
  // console.log(restaurantData);
  const { cloudinaryImageId, name, areaName, avgRating, cuisines, sla } =
    restaurantData.info;
  const url = s + cloudinaryImageId;
  // console.log(index)
  return (
    <div className="relative">
      <div className=" text-[.5rem] sm:text-sm mb-8 sm:mb-10 md:mb-14">
        <div className="rounded-xl w-[100%]">
          <img
            src={url}
            alt=""
            className=" w-96 h-24 sm:h-40 md:h-44 object-cover object-center rounded-xl"
          ></img>
        </div>
        <div className="md:text-[1rem]">
          <p className="font-bold md:text-lg">{name} </p>
          <div className="font-bold md:text-[1rem] pt-1">
            <span className="bg-green-600 text-white font-extrabold px-2">
              *
            </span>
            <span>{avgRating}</span>
            <span>. {sla.slaString}</span>
          </div>
          <div className="pt-1 overflow-hidden text-ellipsis break-words break-all">
            {cuisines.join(",")}{" "}
          </div>
          <p className="pt-1">{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;

export const PromotedLableTwo = () => {
  return (props) => {
    // console.log("props", props);
    const { restaurantData } = props;
    // console.log("resto", restaurantData);
    const discountHeader =
      restaurantData.info?.aggregatedDiscountInfoV3.header ||
      restaurantData.info.aggregatedDiscountInfoV2.header;
    const discountsubHeader =
      restaurantData.info?.aggregatedDiscountInfoV3.subHeader ||
      restaurantData.info.aggregatedDiscountInfoV2.subHeader;
    const data = discountHeader + discountsubHeader;
  const style={
    "padding-left": "10px",
    "color": "white",
    "background-color": "#5f61638a"
   }
    return (
      <div className="reltive">
        <div className="flex justify-center relative">
        <div className="label22 absolute overflow-hidden text-center rounded-xl z-10 sm:font-extrabold  py-2 sm:text-lg left-0 right-0 text-[0.5rem] top-16 sm:top-28 md:top-[130px] shadow-2xl "style={style}>
          {data}
        </div>
        </div>
      
        <Restaurants {...props} />
      </div>
    );
  };
};
