import React from "react";
import ContentLoader from "react-content-loader";

const GmailLoader = () => {
  return (
    <ContentLoader
      viewBox="0 0 1200 800"
      height={800}
      width={1200}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      
      {/* <rect x="0" y="0" rx="0" ry="0" width="800" height="10" /> */}

      {/* Sidebar */}
      <rect x="0" y="50" rx="0" ry="0" width="300" height="750" />

      {/* Email List */}
      <rect x="350" y="50" rx="0" ry="0" width="900" height="750" />
    </ContentLoader>
  );
};

export default GmailLoader;



 
