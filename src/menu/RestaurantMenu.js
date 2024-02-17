
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
const RestaurantMenu = () => {
    const params = useParams() ;
    const {resId} = params
    console.log("params1",params )
    const resMenu = useRestaurantMenu(resId)
    console.log("asdfg",resMenu)
  const {name ,avgRating ,totalRatingsString,cuisines,freeDetails ,sla ,veg} = resMenu.data.cards[0].card.card.info

    // const [resMenu,setResMenu] = useState([])
    // const [labelContainer,setLabelContainer] = useState([])
    
 
        // if(resMenu===null){return <shimmer />}
  return (
    <div className='pt-16 md:pt-28 overflow-hidden  box-border mt-10'>
        <div>
            <h1>{params.resName}</h1>
        </div>
    </div>
  )
}

export default RestaurantMenu ;