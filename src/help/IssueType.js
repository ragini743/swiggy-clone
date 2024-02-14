import React from 'react'
import { useParams } from 'react-router-dom'

import TitleComponent from './TitleComponent'
import IssueContainer from './IssueContainer'

const IssueType = ({issueType}) => {
  console.log('type::::', issueType)
  return (
    <div>
       <div className='w-[80%] md:w-[50%] mx-auto'>
        {/* <TitleComponent /> */}
        <IssueContainer issueType={issueType}/>
       </div>
       
     </div>
  )
}

export default IssueType ;