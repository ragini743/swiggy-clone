import React from 'react'

const TitleComponent = ({title}) => {
   
  return (
    <div className='titleCOmponent'>
        <div>
        <h1  className='hover:bg-white hover:text-yellow-600'>{title.title}</h1>
        </div>
    
    </div>
  )
}

export default TitleComponent