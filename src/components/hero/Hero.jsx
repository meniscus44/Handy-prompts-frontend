import React from "react";
import "./hero.css";

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
          <div className="hero-subtext">
            Search 100,000+ top AI prompts. Produce better outputs, save on time & API costs, sell your own prompts.
          </div>
          <div className="action-button buy-hero">Find a prompt</div>
          <div className="action-button sell-hero outline">Sell a prompt</div>
        </div>
        <div className="right-col hide-mobile">
          <div className="hero-prompts">
            <div className="item-tile">
              <div className="tile-chip">
                <span>⛵ Midjourney</span>
              </div>
              <div className="tile-image-wrapper">
                <img src={require("../../assets/1.webp")} alt="" className="tile-image"/>
              </div>
              <div className="tile-info">
                <h4>Roomscape Compositions</h4>
              </div>
            </div>
            <div className="item-tile">
            <div className="tile-chip">
                <span>⛵ Midjourney</span>
              </div>
              <div className="tile-image-wrapper">
                <img src={require("../../assets/2.webp")} alt="" className="tile-image"/>
              </div>
              <div className="tile-info">
                <h4>Epic Cosmic Dreams</h4>
              </div>
            </div>
            <div className="item-tile">
            <div className="tile-chip">
                <span>🎨 DALL·E</span>
              </div>
              <div className="tile-image-wrapper">
                <img src={require("../../assets/3.webp")} alt="" className="tile-image"/>
              </div>
              <div className="tile-info">
                <h4>Hightech Neon Icons Pack Generator</h4>
              </div>
            </div>
            <div className="item-tile">
            <div className="tile-chip">
                <span>🤖 GPT</span>
              </div>
              <div className="tile-image-wrapper">
                <img src={require("../../assets/4.webp")} alt="" className="tile-image"/>
              </div>
              <div className="tile-info">
                <h4>Code Optimization Pro Gpt</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
