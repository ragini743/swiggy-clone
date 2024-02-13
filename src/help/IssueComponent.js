import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PartnerIssue from './PartnerIssue'

// partiner -> data fetching.
/// legal -> data fetching.
// 
const IssueComponent = () => {
  
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
    let componetToRender 
    if(params.type==="partner-onboarding"){
      componetToRender=<PartnerIssue />
    }
   
  return (
    <div>
       {componetToRender} 
     </div>
  )
}

export default IssueComponent