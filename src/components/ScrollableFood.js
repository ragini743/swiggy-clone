import React from "react";
import { CircleCdnUrl } from "../utils/constant";

const ScrollableFood = ({ data }) => {
  const Url = CircleCdnUrl + data.imageId;

  return (
    <div className="mr-[5%]">
      <div className="flex flex-col text-[.5rem] sm:text-sm  flex-1 basis-0">
        <div className="flex flex-col items-center justify-center ">
          <div className="w-16 sm:w-32 md:w-36 lg:w-68">
            <img src={Url} alt="" className=" w-full  h-auto"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableFood;
