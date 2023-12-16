import React from 'react';
import Hero from '../components/hero/Hero';
import PromptsCarousel from '../components/promptsCarousel/PromptsCarousel';

const Home = () => {
  return (
    <div>
        <Hero/>
        <div className="prompts-wrapper">
          <PromptsCarousel/>
        </div>
    </div>
  )
}

export default Home