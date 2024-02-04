import React, { useState } from 'react'
import { loadingData } from '../utils/loadingData'

const LoadingState = () => {
    const [isLoading,setIsLoading] = useState ([])
    const getLoadingData = async() => {
        // const data = fetch("")
        const promise =new Promise((resolve,reject) =>{
            setTimeout(() =>{
                resolve(loadingData)
            },1000)
        })

    }
   if(isLoading.length===0){return null}
  return (
    <div></div>
  )
}

export default LoadingState