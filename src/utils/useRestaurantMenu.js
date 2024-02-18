import { menu_URL } from "./constant";
import { useState,useEffect } from "react";
const useRestaurantMenu = (resId) =>{
    const[resInfo,setResInfo] =useState(null)
   
    useEffect(() => {
        fetchData()
    },[]
    )
    const fetchData = async () =>{
        const data = await fetch(menu_URL+resId)
        const json = await data.json()
        setResInfo(json)
    }
    return resInfo
}

export default useRestaurantMenu