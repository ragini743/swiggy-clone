import React from 'react'
import { s } from '../utils/constant'
const RestoLoading = ({item}) => {
// console.log("sdfg",item)
const { name , cloudinaryImageId , avgRating , areaName , sla , cuisines } =item.info
const url = s + cloudinaryImageId;
return (
  <div className='relative'>
    <div className=" text-[.5rem] sm:text-sm mb-20">
      <div className="rounded-xl w-[100%] ">
        <img
          src={url}
          alt=""
          className=" w-96 h-44 object-cover object-center rounded-xl"
        ></img>
      </div>
      <div className="md:text-[1rem]">
      <p className="font-bold md:text-lg overflow-hidden">{name} </p>
      <div className="font-bold md:text-[1rem] pt-1">
        <span className="bg-green-600 text-white font-extrabold px-2">*</span>
        <span>{avgRating}</span>
        <span>. {sla.slaString}</span>
      </div>
      <div className="pt-1 overflow-hidden text-ellipsis break-words break-all">{cuisines.join(",")}... </div>
      <p className="pt-1">{areaName}</p>
      </div>
    
    </div>
  </div>
);
}

export default RestoLoading


export const PromotedLable = () =>{
  return (props) =>{
// console.log("props",props)
const {item} =props ;
// console.log("i",item)
const discountHeader= item.info?.aggregatedDiscountInfoV3.header||item.info.aggregatedDiscountInfoV2.header
const discountsubHeader= item.info?.aggregatedDiscountInfoV3.subHeader||item.info.aggregatedDiscountInfoV2.subHeader
const data =discountHeader+discountsubHeader

return(
<div className='reltive'>
  <label className="label11  absolute  z-10 font-bold text-center  ">{data}</label>
  <RestoLoading {...props} />
</div>
)
}
}