import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const error = useRouteError()
    console.log("error",error)
  return (
    <div>
        <h1>Ooops!</h1>
        <p>something went wrong</p>
    </div>
  )
}

export default Error