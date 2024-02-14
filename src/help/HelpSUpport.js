import React, { useEffect, useState } from "react";
import PartenerBoarding from "./IssueType";
import { Link } from "react-router-dom";
import TitleComponent from "./TitleComponent";
import IssueContainer from "./IssueContainer";
import IssueType from "./IssueType";

const HelpSUpport = () => {
  const [listTitle, setListTitle] = useState([]);
  const [selectedIssueType, setSelectedIssueType] = useState('legal');

  const titleFetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/support?");
    const json = await data.json();
  //  console.log("json",json)
    setListTitle(json.data.issueTypes.data);
  };
  useEffect(() => {
    titleFetchData();
  }, []);
 
  if (listTitle.length === 0) {
    return null;
  }
  console.log('selectedIssueType', selectedIssueType);
  return (
    <div className="pt-16 md:pt-28 bg-blue-500 text-white px-10 h-[100vh]">
      <div className="mb-2">
        <div>
          <h1 className="font-bold text-2xl">Help & Support</h1>
          <p>Let's take a step ahead and help you better.</p>
        </div>
      </div>

      <div className="bg-white mt-8 flex">
        <aside className="bg-sky-100 text-gray-600 px-10 pt-5 pb-10 float-left  font-bold md:text-lg h-[100vh]">
          {listTitle.map((title) => {
            return (
              // <Link to={"issue/" + title.type}>
                <TitleComponent title={title} selectedIssueType={selectedIssueType} setSelectedIssueType={setSelectedIssueType}/>
              // </Link>
            );
          })}
        </aside>
        <IssueType issueType={selectedIssueType} />
      </div>
    </div>
  );
};

export default HelpSUpport;
