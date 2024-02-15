import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  faqIssuedata,
  legelIssuedata,
  partnerIssuedata,
} from "../utils/issueData";

export const IssueList = ({ data ,isActive,isShow}) => {
console.log("isActive",isActive)
  const { title, hyperLink, description, hyperLinkText } = data;
  console.log(data);
  let descriptionList;
  if (description)
    descriptionList = description.split("\n").map((item, index) => (
      <li key={index} className="list-none">
        {item}
      </li>
    ));

  return (
    <div className=" pt-4  mx-auto overflow-scroll ">
      <div className="pl-4 pb-4">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-xs sm:text-lg text-black">{title}</h1>
          <div className="w-[5%] " onClick={()=>isShow(data.id)}>
            <img src={isActive?"./collapse-arrow.png":"./down-arrow.png"} alt=""></img>
          </div>
        </div>
       {isActive?(<div className="">
          <h2 className="text-[0.5rem] sm:text-sm text-black pb-4">
            {description ? descriptionList : null}
          </h2>
          <h2 className="text-orange-400 font-semibold text-[0.5rem] sm:text-sm pb-4">
            <a
              href={hyperLink ? hyperLink : null}
              rel="noreferrer"
              target="_blank"
            >
              {hyperLinkText}
            </a>
          </h2>

          {data.options.emailId !== undefined ? (
            <div>
              <a href={data.options.emailId}>send a mail</a>
            </div>
          ) : null}
          {data.options.length !== 0 ? (
            <div className="">
              <div className="border-2 border-orange-400 text-orange-400 font-bold inline p-2">
                {" "}
                <a
                  href=" mailto:partnersupport@swiggy.in?subject=I%20want%20to%20partner%20my%20restaurant%20with%20Swiggy"
                  rel="noreferrer"
                  target="_blank"
                >
                  Send an email
                </a>
              </div>
              <h3 className="text-black text-[0.5rem] sm:text-xs my-3">
                {data.options[0].waitTime}
              </h3>
            </div>
          ) : null}
        </div>):null}
        
      </div>
      <hr className="shadow-md "></hr>
    </div>
  );
};

const IssueContainer = ({ issueType, setIssueType }) => {
  // console.log('issuecontainertype', issueType);
  const [issueData, setIssueData] = useState([]);
  const [activeId, setActiveId] = useState(0);
  const isShow = (itemId) => {
    setActiveId(itemId);
}
  const partnerFetchData = async () => {
    let resolvedData;

    if (issueType.type === "partner-onboarding")
      resolvedData = partnerIssuedata;
    else if (issueType.type === "legal") resolvedData = legelIssuedata;
    else if (issueType.type === "faq") resolvedData = faqIssuedata;

    // console.log("resolvedData:", resolvedData);

    if (resolvedData) {
      setIssueData(resolvedData.data.issues.data);
    } else {
      setIssueData(partnerIssuedata.data.issues.data);
    }
  };

  useEffect(() => {
    partnerFetchData();
  }, [issueType.type]);

  if (issueData.length === 0) {
    return;
  }

  return (
    <div className="pt-4 issuContiane">
      <h1 className="text-black font-bold text-xl mb-4">{issueType.title}</h1>
      {issueData.map((data, index) => {
        return <IssueList key={data.id} data={data} isActive={activeId===data.id ?true:false} isShow={isShow} />;
      })}
    </div>
  );
};

export default IssueContainer;
