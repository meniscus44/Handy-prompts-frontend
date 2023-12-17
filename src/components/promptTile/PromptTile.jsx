import React from "react";
import "./promptTile.css";

const PromptTile = ({ chip, image, title, price }) => {
	return (
		<div className="item-tile">
			<div className="tile-chip">
				<span>{chip}</span>
			</div>
			<div className="tile-image-wrapper">
				<img src={image} alt="" className="tile-image" />
			</div>
			<div className="tile-info">
				<h4>{title}</h4>
				{price && <div className="tile-info-price">{price}</div>}
			</div>
		</div>
	);
};

export default PromptTile;
