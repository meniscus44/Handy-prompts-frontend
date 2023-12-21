import React from "react";
import "./filterField.css";

const FilterField = ({ title, checkbox }) => {
  return (
    <div className="field">
      <div className="field-title">{title}</div>
      {checkbox.map((element) => {
        return (
          <div className="field-check">
            <div className="check-container">
              <input type="checkbox" id="myCheckbox"/>
            </div>
            <div>{element}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterField;
