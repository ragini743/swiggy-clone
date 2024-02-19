import React, { useEffect } from "react";
const mediaAssets =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
  const forCloseRestaurant ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_grayscale,c_fit/"

const ItemList = ({ itemCards }) => {
  console.log("itemcards", itemCards);

  return (
    <div className="my-4">
      {itemCards.map((item) => {
        const { id, name, price, description, isveg, imageId } = item.card.info;
        // console.log(isveg=="1")
        return (
          console.log("itme", item),
          (
            <div key={id} className="mb-10">
              <div className=" flex justify-between mb-8">
                <div className="w-[80%] ">
                  {isveg === true ? (
                    <div className="w-4">
                      <img src="/pureVeg-logo.png" alt=""></img>
                    </div>
                  ) : null}

                  <div className="font-bold text-gray-700">{name}</div>
                  <div className=" text-gray-700">
                    <span className="mr-1 ">&#8377;</span>
                    {(item.card.info.price||item.card.info.defaultPrice)/100}
                  </div>
                  <div>{description}</div>
                </div>
                <div className="w-[15%] rounded-lg h-[100px] ">
                  <img
                    src={mediaAssets + imageId}
                    alt=""
                    className="w-[100%] h-[100%] object-cover  rounded-lg"
                  ></img>
                </div>
              </div>
              <hr className="border-gray-400"></hr>
            </div>
          )
        );
      })}
    </div>
  );
};

export default ItemList;
