import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import IssueContainer from './IssueContainer'

const IssueType = () => {
  
  const params =useParams()
  console.log("params",params)

  return (
    <div>
       
       <IssueContainer />
     </div>
  )
}

export default IssueType ;