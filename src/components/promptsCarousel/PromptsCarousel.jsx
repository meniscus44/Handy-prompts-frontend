import React from "react";
import Slider from "react-slick";
// import "./promptsCarousel.css";
import PromptTile from "../promptTile/PromptTile";
import { prompts } from "../../data";
// import "~slick-carousel/slick/slick.css";
// import "../../../node_modules/slick-carousel/slick/slick-theme.css";
// import "../../../node_modules/slick-carousel/slick/slick.css";

const PromptsCarousel = () => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		variableWidth: true,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<Slider {...settings}>
				{prompts.map((item, i) => {
					return (
						// <div>
						<PromptTile
							key={i}
							chip={item.chip}
							title={item.title}
							price={item.price}
							image={item.image}
						/>
						// </div>
					);
				})}
			</Slider>
			{/* <Splide aria-label="My Favorite Images" options={ {
    rewind: true,
    width : 2000,
    gap   : '16px',
    // perPage : 4,
    // autoWidth : true
    fixedWidth : "240px"
  } }>
        
        {prompts.map((item) => 
              <SplideSlide><PromptTile chip={item.chip} title={item.title} price={item.price} image={item.image}/></SplideSlide>
          )
        }
        
      </Splide> */}
		</div>
	);
};

export default PromptsCarousel;
