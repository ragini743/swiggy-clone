import { useState } from 'react';
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
const RestaurantMenu = () => {
    const params = useParams() ;
    const {resId} = params
    const [labelContainer,setLabelContainer] = useState([])
        // const [resMenu,setResMenu] = useState([])
    // console.log("params1",params )
    const resMenu = useRestaurantMenu(resId)
    console.log("asdfg",resMenu)
    if(resMenu===null){return <shimmer />}
  const {name ,avgRating ,totalRatingsString,cuisines,feeDetails ,sla , costForTwoMessage,veg} = resMenu.data.cards[0].card.card.info ;
  const {message} = feeDetails ;
  const {slaString} = sla ;

console.log("freeDetails",sla)

   
  return (
    <div className='pt-16 md:pt-28 overflow-hidden  box-border mt-10'>
      <div>
        <div>
            <h1>{name}</h1>
            <h1>{cuisines.join(",")}</h1>
            <h1>{message}</h1>
        </div>
        <div>
          <div>
             <span>*</span>{avgRating}
          </div>
          <h1>{totalRatingsString}</h1>
        </div>
      </div>
      <hr></hr>
      <div>
      <div>{slaString}</div> 
      <div>{costForTwoMessage}</div> 
      </div>
      <div>

      </div>
      <div>
        
      {(veg===true)?"veg":"non-veg"}
      </div>
     
       
    </div>
  )
}

export default RestaurantMenu ;