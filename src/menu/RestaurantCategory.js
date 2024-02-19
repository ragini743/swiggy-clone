import React from 'react'
import ItemList from "./ItemList"

const RestaurantCategory = ({cardData}) => {
  // console.log("cardData",cardData)
  const {title ,itemCards} = cardData.card.card
  
  return (
    <div className='mt-6'>
       <div className='text-2xl font-bold text-black'>{title}({itemCards.length})</div>
       <div>
        <ItemList itemCards={itemCards} />
        </div> 
    </div>
  )
}

export default RestaurantCategory ;