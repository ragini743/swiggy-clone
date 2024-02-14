import React from 'react'


const TitleComponent = ({title, setSelectedIssueType, selectedIssueType}) => {

   const classNames = title===selectedIssueType ? 'bg-white' : ''
   const style = selectedIssueType==='partner-onboarding'?"bg-white" : ""
  
  return (
    <div className={`mb-4 ${classNames} `}  onClick={() => {setSelectedIssueType(title)}} >
        <div>
        <h1  className='hover:bg-white hover:text-yellow-600 p-2'>{title.title}</h1>
      
        </div>
    
    </div>
  )
}

export default TitleComponent