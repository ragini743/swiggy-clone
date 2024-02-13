import React from 'react'
import PartenerBoarding from './IssueComponent'

const TitleComponent = ({title}) => {
  return (
    <div>
        <h1  className='hover:bg-white hover:text-yellow-600'>{title.title}</h1>
       
    </div>
  )
}

export default TitleComponent