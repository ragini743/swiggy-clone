import React from 'react'

const RestaurantCategory = ({cardData}) => {
  console.log("cardData",cardData)
  const {title} = cardData.card.card
  return (
    <div>
       <div>{title}</div> 
    </div>
  )
}

export default RestaurantCategory ;