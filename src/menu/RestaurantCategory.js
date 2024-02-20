import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemList from "./ItemList"

const RestaurantCategory = ({cardData , isVegItem}) => {


  const [isShowItems ,setIsShowItems ] = useState(true) 
  const {title ,itemCards} = cardData.card.card
  const filteredItems = isVegItem
  ? itemCards.filter(
      (item) => item.card.info.itemAttribute.vegClassifier === "VEG"
    )
  : itemCards;
 
  

  const isShow = () =>{
    setIsShowItems(true)
  }
  return (
    <div className='mt-6'>
      <div className='flex justify-between items-center'>
        <div className='text-2xl font-bold text-black'>{title}({filteredItems.length})</div>
        <div className='w-8' onClick={()=>setIsShowItems(!isShowItems)}>
          <img src={isShowItems?'/Collapse-arrow.png':"/down-arrow.png"}alt=''></img>
        </div>
      </div>
     
      {isShowItems?(<div>
        <ItemList itemCards={filteredItems} isVegItem={isVegItem} />
        </div>) :<div className='shadow-lg p-4'></div>}
        
    </div>
  )
}

export default RestaurantCategory ;