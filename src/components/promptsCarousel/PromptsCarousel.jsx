import React from "react";
import Slider from "react-slick";
import "./promptsCarousel.css";
import PromptTile from "../promptTile/PromptTile";
import { prompts } from "../../data";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PromptsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    variableWidth: true,
    gap: "1rem"
  };
  return (
    <div>
      <Slider {...settings}>
        {prompts.map((item) => {
          return(
            // <div>
              <PromptTile chip={item.chip} title={item.title} price={item.price} image={item.image}/>
            // </div>
          )
            }
          )
        }
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
