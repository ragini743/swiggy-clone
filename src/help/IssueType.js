import React from 'react'

import IssueContainer from './IssueContainer'

const IssueType = ({selectedIssueType,setSelectedIssueType}) => {

  return (
    <div className='overflow-scroll h-[100vh] w-[70%]'>
       <div className='w-[80%] mx-[10%]'>
        {/* <TitleComponent /> */}
        <IssueContainer issueType={selectedIssueType} setIssueType={setSelectedIssueType} />
       </div>
       
     </div>
  )
}

export default IssueType ;