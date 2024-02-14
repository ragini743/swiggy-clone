import React from 'react'
import IssueType from './IssueType'

const TitleComponent = ({title, setSelectedIssueType, selectedIssueType}) => {
   const classNames = title===selectedIssueType ? 'bg-slate-900' : ''
  return (
    <div className={classNames} onClick={() => {setSelectedIssueType(title)}}>
        <div>
        <h1  className='hover:bg-white hover:text-yellow-600'>{title.title}</h1>
        {/* <IssueType /> */}
        </div>
    
    </div>
  )
}

export default TitleComponent