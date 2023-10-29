import React from "react";
import SearchNews from "./SearchNews";
import DateFilterNews from "./DateFilterNews";
import "./FilterNews.css";

const FilterNews = () => {
  return (
    <div className="FilterNews">
      <SearchNews />
      <DateFilterNews />
    </div>
  );
};

export default FilterNews;
