import React from "react";
import PromptTile from "../promptTile/PromptTile";
import image1 from "../../assets/1.webp";
import image2 from "../../assets/2.webp";
import image3 from "../../assets/3.webp";
import image4 from "../../assets/4.webp";

const Hero = () => {
  return (
    <div className=" py-[48px] px-[10px] w-[90%] max-w-[1400px] m-auto text-[48px]">
      <div className="text-[30px] flex justify-center text-left lg:text-[48px] ">
        <div className="w-[100%] p-0 text-left pb-0 lg:w-[50%]">
          <h1 className="text-[30px] font-medium leading-tight text-center lg:text-left lg:text-[48px]  ">
            <span className="rainbox-text">
              Midjourney, ChatGPT, DALL·E, Stable Diffusion & more
            </span>
            <br />
            Prompt Marketplace
          </h1>
          <div className="text-[24px] mb-[32px] opacity-0.8 mt-2 text-center lg:text-left">
            Search 100,000+ top AI prompts. Produce better outputs, save on time
            & API costs, sell your own prompts.
          </div>
          <div className="flex justify-center lg:block">
            <div className="text-[24px] font-medium text-[#222236] inline-flex rounded-md py-[8px] px-[16px] cursor-pointer bg-gradient-to-b from-[#fee5a5] via-[#fea5a5] to-[#f69393] transition duration-300 ease-in mr-[8px] hover:opacity-80">
              Find a prompt
            </div>
            <div className="text-[24px] font-medium text-white bg-[#222236] inline-flex rounded-md py-[8px] px-[16px] cursor-pointer transition duration-300 ease-in mr-[8px] hover:opacity-80 border border-solid border-white">
              Sell a prompt
            </div>
          </div>
        </div>

        <div className="w-[50%] justify-center hidden lg:flex">
          <div className="flex max-w-full gap-[16px] justify-center m-auto">
            <div className="flex flex-col gap-[16px]">
              <PromptTile
                chip={"⛵ Midjourney"}
                image={image1}
                title={"Roomscape Compositions"}
              />
              <PromptTile
                chip={"⛵ Midjourney"}
                image={image2}
                title={"Epic Cosmic Dreams"}
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <PromptTile
                chip={"🎨 DALL·E"}
                image={image3}
                title={"Hightech Neon Icons Pack Generator"}
              />
              <PromptTile
                chip={"🤖 GPT"}
                image={image4}
                title={"Code Optimization Pro Gpt"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
