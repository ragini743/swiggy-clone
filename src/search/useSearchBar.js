import React, { useState } from "react";

const useSearchBar = () => {
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [searchQuey,setSearchQuery] =useState ("")
  const suggestion_API =
    "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=25.4990941&lng=81.8582923&trackingId=undefined&str=biryani";
  if (searchSuggestion.length === 0) {
    return;
  }
  return searchSuggestion;
};

export default useSearchBar;
