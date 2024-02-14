import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  faqIssuedata,
  legelIssuedata,
  partnerIssuedata,
} from "../utils/issueData";

export const IssueList = ({ data }) => {
  // console.log("dtata",data)
  const { title, hyperLink, description, hyperLinkText } = data;
  // console.log("sdf",data.options[0])

  return (
    <div className="shadow-md  py-4 w-[90%] mx-auto">
      <div className="pl-4">
        <h1 className="text-xs sm:text-lg">{title}</h1>
        <h2 className="text-[0.5rem] sm:text-sm">
          {description ? description : null}{" "}
        </h2>
        <h2 className="text-orange-600 text-[0.5rem] sm:text-sm">
          <a href={hyperLink ? hyperLink : null}>{hyperLinkText}</a>
        </h2>

        {data.options.emailId !== undefined ? (
          <div>
            <a href={data.options.emailId}>send a mail</a>
          </div>
        ) : null}
        <h3>{data.options.waitTime ? data.options.waitTime : null}</h3>
      </div>
    </div>
  );
};

const IssueContainer = ({issueType}) => {
  console.log('issuecontainertype', issueType);
  const [issueData, setIssueData] = useState([]);
  // const params = useParams();

  // console.log("params", params);
  const partnerFetchData = async () => {
    const data = new Promise((resolve, reject) => {
      if (issueType === "partner-onboarding" || !issueType)
        return resolve(partnerIssuedata);
      if (issueType === "legal") return resolve(legelIssuedata);
      if (issueType === "faq") return resolve(faqIssuedata);
    });
    const json = await data;
    console.log("json", json);
    setIssueData(json.data.issues.data);
  };

  useEffect(() => {
    partnerFetchData();
  }, []);

  if (issueData.length === 0) {
    return;
  }

  console.log(issueData)

  return (
    <div className="pt-10 md:pt-28 issuContianer">
      {issueData.map((data) => {
        return <IssueList key={data.id} data={data} />;
      })}
    </div>
  );
};

export default IssueContainer;
