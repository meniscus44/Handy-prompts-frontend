import React from "react";
import "./promptTile.css";
const PromptTile = ({ chip, image, title, price }) => {
  return (
    <div className="item-tile">
      <div className="absolute z-1 top-[8px] left-[8px] opacity-0.85 bg-[#222236] rounded-sm py-[2px] px-[4px] text-[12px]">
        <span>{chip}</span>
      </div>
      <div className="h-[100%] w-auto">
        <img src={image} alt="" className="h-[100%] w-auto" />
      </div>
      <div className="absolute z-1 bottom-0 left-0 p-[8px] bg-[#000] text-white w-[100%] opacity-0.85 h-[30px] flex justify-between">
        <h4>{title}</h4>
        {price && <div className="text-[12px] flex items-center">{price}</div>}
      </div>
    </div>
  );
};

export default PromptTile;
