import React from "react";
import Hero from "../components/hero/Hero";
import PromptsCarousel from "../components/promptsCarousel/PromptsCarousel";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="max-w-[1400px] my-0 mx-auto py-[20px] px-0 w-[90%]">
        <div className="py-0 px-[10px]">
          <h4 className="text-[20px]">Featured Prompts</h4>
          <div className="h-[1px] w-full bg-gray-400 opacity-0.4 my-[10px] mx-0"></div>
        </div>
        <PromptsCarousel />
      </div>
      <div className="max-w-[1400px] my-0 mx-auto py-[20px] px-0 w-[90%]">
        <div className="py-0 px-[10px]">
          <h4 className="text-[20px]">Newest Prompts</h4>
          <div className="h-[1px] w-full bg-gray-400 opacity-0.4 my-[10px] mx-0"></div>
        </div>
        <PromptsCarousel />
      </div>
      <div className="max-w-[1400px] my-0 mx-auto py-[20px] px-0 w-[90%]">
        <div className="py-0 px-[10px]">
          <h4 className="text-[20px]">Newest Prompts</h4>
          <div className="h-[1px] w-full bg-gray-400 opacity-0.4 my-[10px] mx-0"></div>
        </div>
        <PromptsCarousel />
      </div>

      <div className="py-[100px] px-0 text-center max-w-[768px] my-0 mx-auto">
        <h4 className="text-3xl pb-[25px]">
          What is <span className="rainbox-text">HandyPrompts?</span>
        </h4>

        <div className="text-lg">
          Prompts are becoming a powerful new way of programming AI models like
          ChatGPT and Midjourney.
          <p>However, it's hard to find good quality prompts online.</p>
          <p>
            If you're good at prompt engineering, there's also no clear way to
            make a living from your skills.
          </p>
          <p>
            HandyPrompts is a marketplace for buying and selling quality prompts
            that produce the best results, and save you money on API costs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
