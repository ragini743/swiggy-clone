import React, { useEffect, useState } from 'react'
import { menu_URL } from '../utils/constant'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const params=useParams()
    console.log("params1",params )
    console.log(useParams)
    const [resMenu,setResMenu] =useState([])
    const fetchMenu = async() =>{
        const data = await fetch(menu_URL)
        const json =await data.json()
        console.log("jsocn",json)
        }
        useEffect (()=>{
        fetchMenu()
        },[])
        if(resMenu===null){return <shimmer />}
  return (
    <div className='pt-16 md:pt-28 overflow-hidden  box-border mt-10'>
        <div>
            <h1>sdcfg</h1>
        </div>
    </div>
  )
}

export default RestaurantMenu