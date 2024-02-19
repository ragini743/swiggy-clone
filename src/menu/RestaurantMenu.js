import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import LabelCard from "./LabelCard";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const [labelContainer, setLabelContainer] = useState([]);
 const [category,setCategory] = useState([])
 const [isShowItems ,setIsShowItems ] = useState([]) 
  
  const resMenu = useRestaurantMenu(resId);


  useEffect(() => {
    if(resMenu){
      setLabelContainer(
        resMenu.data.cards[1].card.card.gridElements.infoWithStyle.offers
      );
      setCategory(resMenu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c?.["card"]?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
    }

  }, [resMenu]);
// console.log("label",labelContainer)
  if (resMenu === null) {
    return <shimmer />;
  }
  if(labelContainer.length===0){return null}
  const {
    name,
    avgRating,
    totalRatingsString,
    cuisines,
    feeDetails,
    sla,
    costForTwoMessage,
    veg,
    locality,
  } = resMenu.data.cards[0].card.card.info;
  const { message } = feeDetails;
  const { slaString } = sla;
  

  // console.log("freeDetails", resMenu.data.cards[0].card.card.info);

  return (
    <div className="pt-16 md:pt-28 overflow-hidden  box-border mt-10 md:w-[70%] mx-auto lg:w-[50%] text-gray-500">
      <div className="flex justify-between text-sm">
        <div>
          <h1 className="font-bold md:text-lg text-black">{name}</h1>
          <p>{locality}</p>
          <h1>{cuisines.join(",")}</h1>
          <h1>{message}</h1>
        </div>
        <div className="border-2 border-gray-300 flex flex-col justify-evenly items-center">
          <div className="text-green-600 font-bold ">
            <span className="inline-block w-4">&#9733;</span>
            {avgRating}
          </div>
          <h1 className="border-t-2 border-gray text-sm p-1">
            {totalRatingsString}
          </h1>
        </div>
      </div>
      <hr className="my-4 border-dashed border-gray border-[1px]"></hr>
      <div className="flex items-center font-bold text-black">
        <div className="mr-10">{slaString}</div>
        <div className="flex">
          <div className="w-6 mr-2">
            <img src="/rs-symbol.png" alt="" className="w-[100%] h-full"></img>
          </div>
          {costForTwoMessage}
        </div>
      </div>
      <div className="flex  overflow-scroll py-8">
      {
        labelContainer.slice(1).map((card,index)=>{return <LabelCard card={card} key={index} /> })
      }
      </div>
      <div className="border-gray-400 border-b-[1px] mt-10 pb-6">
        {veg === true ? (
          <div className="flex items-center ">
            <div className="w-10">
              <img src="/pureVeg.png" alt="" className=""></img>
            </div>
            <h1 className="ml-2">veg</h1>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="w-10">
              <img src="/nonVeg.png" alt=""></img>
            </div>
            <h1 className="ml-2">non-veg</h1>
          </div>
        )}
      </div>
      <div>
        {category.map((cardData)=>{return <RestaurantCategory cardData={cardData} />})}
      </div>
     
    </div>
  );
};

export default RestaurantMenu;
