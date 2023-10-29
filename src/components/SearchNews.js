import React from "react";
import "./SearchNews.css";

const SearchNews = () => {
  return (
    <div className="SearchNews">
      <input placeholder="search" />
      <button className="btn-search">🔎</button>
    </div>
  );
};

export default SearchNews;
