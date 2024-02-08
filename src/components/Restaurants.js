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
    <div>
      <div className=" text-[.5rem] sm:text-sm mb-20">
        <div className="rounded-xl w-[100%]">
          <img
            src={url}
            alt=""
            className=" w-96 h-44 object-cover object-center rounded-xl"
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
          <div className="pt-1 overflow-x-hidden text-ellipsis break-words break-all">
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
    console.log("props", props);
    const { restaurantData } = props;
    console.log("resto", restaurantData);
    const discountHeader =
      restaurantData.info?.aggregatedDiscountInfoV3.header ||
      restaurantData.info.aggregatedDiscountInfoV2.header;
    const discountsubHeader =
      restaurantData.info?.aggregatedDiscountInfoV3.subHeader ||
      restaurantData.info.aggregatedDiscountInfoV2.subHeader;
    const data = discountHeader + discountsubHeader;
  const style={"background-color": "#5f61638a",
    "box-shadow": "cyan",
  
    "padding-left": "10px",
    "color": "white",
    "font-size": "larger",}
    return (
      <div className="reltive">
        <label className="label22 absolute z-10  "style={style}>
          {data}
        </label>
        <Restaurants {...props} />
      </div>
    );
  };
};
