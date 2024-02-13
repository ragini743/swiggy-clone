import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// partiner -> data fetching.
/// legal -> data fetching.
// 
const IssueComponent = () => {
  const [issueDis,setIssueDis] = useState()
  const params =useParams()
  console.log("params",params)
    // issue_type
    // if issue_type == 'partner:
    // return <partner>
    // else if issu_type = 'legal'
    // return <legal>
    // else:
    // return <error>
    
    
    // data call

  return (
    <div>
        hello partner
     </div>
  )
}

export default IssueComponent