import React from 'react';
import SearchResultArea from '../components/searchResultArea/SearchResultArea';
import FilterSidebar from '../components/filterSidebar/FilterSidebar';

const Marketplace = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", width: "100%", margin: "auto", padding: "48px 64px", maxWidth: "1400px"}}>
      <FilterSidebar/>
      <SearchResultArea/>
    </div>
  )
}

export default Marketplace