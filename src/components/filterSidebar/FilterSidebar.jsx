import React from "react";
import FilterField from "../filterField/FilterField";
import "./filterSidebar.css";

const FilterSidebar = () => {
  const filterFieldData = [
    {
      title: "Type",
      checkbox: ["All", "Image", "Text"] 
    },
    {
      title: "Sort by",
      checkbox: ["Hottest", "Top", "Newest"],
    },
    {
      title: "Model",
      checkbox: ["All", "DALLE-E", "GPT", "Leonardo AI", "Llama", "Midjourney", "Stable Diffusion"],
    },
    {
      title: "Category",
      checkbox: ["All", "3D", "Accessory", "Ads", "Animal", "Anime", "Art", "Avatar", "Building", "Business", "Cartoon", "Celebrity", "Chatbot", "Clothes", "Coach", "Code", "Conversion", "Copy", "Cute", "Cyberpunk", "Drawing", "Drink", "Email", "Fantasy", "Fashion", "Fashion", "Fix", "Food", "Fun", "Funny", "Future", "Future", "Games", "Generation", "Glass", "Graphic Design", "Health", "Holiday", "Icons", "Ideas", "Illustration", "Ink", "Interiors", "Jewelery", "Landscape", "Language", "Logo", "Marketing", "Mockup", "Monogram", "Monster", "Music", "Nature", "Painting", "Pattern", "People", "Photography", "Pixel Art", "Plan", "Product", "Prompts", "Psychedelic", "Retro", "Scary", "SEO", "Social", "Space", "Sport", "Statues", "Streampunk", "Study", "Unique Style", "Summarise", "Synthwave", "Texture", "Translate", "Travel", "Vehicle", "Wallpaper", "Wood", "Writing"],
    },
  ];
  return (
    <div className="sidebar">
      {filterFieldData.map((item) => {return(
        <FilterField title={item.title} checkbox={item.checkbox}/>
      )})}
    </div>
  );
};

export default FilterSidebar;
