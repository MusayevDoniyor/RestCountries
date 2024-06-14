import React from "react";
import searchIcon from "../assets/search.svg";
import "../Styles/CSS/index.css";

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <img src={searchIcon} alt="Search" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
