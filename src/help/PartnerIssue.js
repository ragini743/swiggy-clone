import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { partnerIssuedata } from '../utils/issueData'


export const IssueList = ({data}) =>{
    console.log("dtata",data)
return(<div>
    fghjkl
</div>

)
}

const PartnerIssue = () => {
    const [issueData,setIssueData] = useState([])
const partnerFetchData = async() =>{
 const data= new Promise((resolve,reject)=>{
    resolve(partnerIssuedata)
 })
 const json = await data
//  console.log("json",json)
 setIssueData(json.data.issues.data)
};
useEffect(()=>{
    partnerFetchData()
},[])
// console.log("setIssue",issueData)
  return (
    <div className='pt-16'>
     {issueData.map((data) =>{return (
        <IssueList key={data.id} data={data} />
     )})} 
    </div>
  )
}

export default PartnerIssue