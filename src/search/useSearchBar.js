import React, { useState } from 'react'

const useSearchBar = () => {
    const [searchSuggestion,setSearchSuggestion] =useState([])

    if(searchSuggestion.length===0){return
    }
  return (
    searchSuggestion
  )
}

export default useSearchBar