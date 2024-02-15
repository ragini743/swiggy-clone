import React, { useEffect, useState } from "react";
import PartenerBoarding from "./IssueType";
import { Link } from "react-router-dom";
import TitleComponent from "./TitleComponent";
import IssueContainer from "./IssueContainer";
import IssueType from "./IssueType";

const HelpSUpport = () => {
  const [listTitle, setListTitle] = useState([]);
  const [selectedIssueType, setSelectedIssueType] = useState('partner-onboarding');

  const titleFetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/support?");
    const json = await data.json();

    setListTitle(json.data.issueTypes.data);
  };
  useEffect(() => {
    titleFetchData();
  }, []);
 
  if (listTitle.length === 0) {
    return null;
  }

  return (
    <div className="pt-16 md:pt-28 bg-blue-500 text-white px-10 h-[100vh] overflow-hidden">
      <div className="mb-2 md:my-4 ml-[10%]">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl">Help & Support</h1>
          <p>Let's take a step ahead and help you better.</p>
        </div>
      </div>

      <div className="bg-white mt-8 flex w-[80%] mx-auto">
        <aside className="bg-sky-100 text-gray-600 px-8 pt-8 pb-10 w-[25%]  font-bold md:text-lg h-[100vh] overflow-hidden">
          {listTitle.map((title) => {
            return (
              // <Link to={"issue/" + title.type}>
                <TitleComponent title={title} selectedIssueType={selectedIssueType} setSelectedIssueType={setSelectedIssueType}/>
              // </Link>
            );
          })}
        </aside>
        <IssueType selectedIssueType={selectedIssueType} setSelectedIssueType={setSelectedIssueType} className="w-[75%]" />
      </div>
    </div>
  );
};

export default HelpSUpport;
