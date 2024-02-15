import React from 'react'

import IssueContainer from './IssueContainer'

const IssueType = ({selectedIssueType,setSelectedIssueType}) => {

  return (
    <div className='overflow-scroll h-[100vh] w-[75%] pb-80'>
       <div className='w-[90%] mx-[5%]'>
        {/* <TitleComponent /> */}
        <IssueContainer issueType={selectedIssueType} setIssueType={setSelectedIssueType} />
       </div>
       
     </div>
  )
}

export default IssueType ;