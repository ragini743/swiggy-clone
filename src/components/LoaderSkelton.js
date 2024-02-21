import React from "react";
import ContentLoader from "react-content-loader";

const LoaderSkelton= () => {
  const margin = 10
  return (
    <ContentLoader
      viewBox="0 0 250 265"
      height={265}
      width={280}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      margin-top="5"
      padding="0"
    >
      {/* Restaurant card */}
      <rect x="0" y="10" rx="8" ry="8" width="350" height="180" />

     
      <rect x="0" y="200" rx="8" ry="8" width="220" height="20" />
      <rect x="0" y="230" rx="8" ry="8" width="180" height="20" />
      
    </ContentLoader>
  );
};

export default LoaderSkelton;


export const Loader = ()=>{
  return( <div className="grid grid-cols-2 md:grid-cols-4 gap-5 grid-flow-row-dense  mx-auto mt-6">
     
  <LoaderSkelton />

    
    <LoaderSkelton />
    <LoaderSkelton />
    <LoaderSkelton />
    <LoaderSkelton />
    <LoaderSkelton />
    <LoaderSkelton />
    <LoaderSkelton />
    <LoaderSkelton />
    <LoaderSkelton />
    <LoaderSkelton />
    <LoaderSkelton />
    <LoaderSkelton />
    <LoaderSkelton />
    <LoaderSkelton />
  </div>

  )
}

