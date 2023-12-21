import React from "react";
import { prompts } from "../../data";
import PromptTile from "../promptTile/PromptTile";
import "./searchResultArea.css";

const SearchResultArea = () => {
  return (
    <div className="search-result">
      {prompts.map((item, i) => {
        return (
          <PromptTile key={i} chip={item.chip} title={item.title} price={item.price} image={item.image} />
        );
      })}
    </div>
  );
};

export default SearchResultArea;
