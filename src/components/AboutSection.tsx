import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch py-4 text-white max-md:mt-10 max-md:max-w-full max-sm:px-4 max-sm:mx-4">
      <h2 className="text-2xl leading-8 uppercase tracking-[2px]">/ ABOUT NEURALSPARK AI</h2>
      <div className="flex flex-col pt-5 mt-12 w-full text-2xl font-thin leading-9 max-md:mt-10 max-md:max-w-full">
        <p>NeuralSpark AI, your strategic AI partner.</p>
        <p className="mt-9 max-md:max-w-full">
          We specialise in turning your ideas into effective AI solutions. Our expertise spans across <br />
          various industries, focusing on generative and ethical AI practices. We are committed to <br />
          guiding your business to the AI-powered future it deserves.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;