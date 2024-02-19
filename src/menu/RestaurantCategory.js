import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemList from "./ItemList"

const RestaurantCategory = ({cardData}) => {
  console.log("cardData",cardData)
  const [isShowItems ,setIsShowItems ] = useState(true) 
  const {title ,itemCards} = cardData.card.card
  // useEffect(()=>{
  //   setIsShowItems(cardData.card.card.itemCards)
  // },[])
  if(isShowItems.length===0){
    return
  }
  const isShow = () =>{
    setIsShowItems(true)
  }
  return (
    <div className='mt-6'>
      <div className='flex justify-between items-center'>
        <div className='text-2xl font-bold text-black'>{title}({itemCards.length})</div>
        <div className='w-8' onClick={()=>setIsShowItems(!isShowItems)}>
          <img src={isShowItems?'/Collapse-arrow.png':"/down-arrow.png"}alt=''></img>
        </div>
      </div>
      {isShowItems?(<div>
        <ItemList itemCards={itemCards} />
        </div>) :<div className='shadow-lg p-4'></div>}
        
    </div>
  )
}

export default RestaurantCategory ;