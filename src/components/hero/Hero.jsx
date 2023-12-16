import React from "react";
import "./hero.css";
import PromptTile from "../promptTile/PromptTile";
import image1 from "../../assets/1.webp";
import image2 from "../../assets/2.webp";
import image3 from "../../assets/3.webp";
import image4 from "../../assets/4.webp";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="two-col hero">
        <div className="left-col hero-left">
          <h1>
            <span className="rainbox-text">Midjourney, ChatGPT, DALL·E, Stable Diffusion & more</span>
            <br />
            Prompt Marketplace
          </h1>
          <div className="hero-subtext">Search 100,000+ top AI prompts. Produce better outputs, save on time & API costs, sell your own prompts.</div>
          <div className="action-button buy-hero">Find a prompt</div>
          <div className="action-button sell-hero outline">Sell a prompt</div>
        </div>
        <div className="right-col hide-mobile">
          <div className="hero-prompts">
            <PromptTile chip={"⛵ Midjourney"} image={image1} title={"Roomscape Compositions"} />
            <PromptTile chip={"⛵ Midjourney"} image={image2} title={"Epic Cosmic Dreams"} />
            <PromptTile chip={"🎨 DALL·E"} image={image3} title={"Hightech Neon Icons Pack Generator"} />
            <PromptTile chip={"🤖 GPT"} image={image4} title={"Code Optimization Pro Gpt"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
