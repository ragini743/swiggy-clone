import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  faqIssuedata,
  legelIssuedata,
  partnerIssuedata,
} from "../utils/issueData";

export const IssueList = ({ data }) => {

  const { title, hyperLink, description, hyperLinkText } = data;
  

  return (
    <div className=" py-4  mx-auto overflow-scroll pb-10">
      <div className="pl-4">
        <h1 className="text-xs sm:text-lg text-black">{title}</h1>
        <h2 className="text-[0.5rem] sm:text-sm text-black pb-4">
          {description ? description : null}{" "}
        </h2>
        <h2 className="text-orange-600 text-[0.5rem] sm:text-sm pb-4">
          <a href={hyperLink ? hyperLink : null}>{hyperLinkText}</a>
        </h2>

        {data.options.emailId !== undefined ? (
          <div>
            <a href={data.options.emailId}>send a mail</a>
          </div>
        ) : null}
        <h3>{data.options.waitTime ? data.options.waitTime : null}</h3>
      </div>
      <hr className="shadow-md "></hr>
    </div>
  );
};

const IssueContainer = ({issueType ,setIssueType}) => {
  console.log('issuecontainertype', issueType);
  const [issueData, setIssueData] = useState([]);

  const partnerFetchData = async () => {
    let resolvedData;
   
    if (issueType.type === "partner-onboarding")
      resolvedData = partnerIssuedata;
    else if (issueType.type === "legal")
      resolvedData = legelIssuedata;
    else if (issueType.type === "faq")
      resolvedData = faqIssuedata;
  
    console.log("resolvedData:", resolvedData);
   
    if (resolvedData) {
      setIssueData(resolvedData.data.issues.data);
    } else {
      setIssueData(partnerIssuedata.data.issues.data
        ) 
    }
  
  };

  useEffect(() => {
    partnerFetchData();
  }, [issueType.type]);

  if (issueData.length === 0) {
    return;
  }

  return (
    <div className="pt-4 issuContianer">
      <h1 className="text-black font-bold text-xl mb-4">{issueType.title}</h1>
      {issueData.map((data) => {
        return <IssueList key={data.id} data={data} />;
      })}
   
    </div>

  );
};

export default IssueContainer;
