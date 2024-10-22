import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ContactForm from './ContactForm';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col justify-center bg-white  max-sm:w-full">
      <div className="flex flex-col py-px w-full bg-black max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col w-full  max-md:max-w-full">
          <div className="flex relative flex-col pb-10 bg-black bg-opacity-10 max-md:max-w-full">
            {/* <Header/> */}
            <Hero />
            {/* <Footer /> */}
          </div>
        </div>
        <div className="flex flex-col items-start self-center mt-72 max-w-full max-md:mt-10">
          <div className="flex flex-col self-center pb-4 mt-4 max-w-full text-5xl text-white leading-[54px] w-[940px] max-md:pb-24 max-sm:px-4 max-sm:mx-4">
            <div className="self-stretch py-1 pr-2 w-full min-h-[170px] max-md:max-w-full text-center">
              Your business solutions <br /> in one place
            </div>
          </div>
          <AboutSection />
          <ServicesSection />
        </div>
        <ContactForm />
        <div className="flex flex-col pt-10 pr-3 pb-3 pl-20 bg-black  max-md:pl-5 max-md:max-w-full">
          <div className="pt-5 pb-1.5 text-2xl font-light leading-8 text-white whitespace-nowrap ">
            kamal@neuralspark.ai
          </div>
          <div className="flex max-w-full w-[228px] max-md:pr-5">
            <div className="flex z-10 flex-col items-start self-start mr-0 border-t border-solid border-t-neutral-700 opacity-[0.79]">
              <div className="flex shrink-0 h-0.5 border-t-2 border-solid border-t-white w-[200px]" />
            </div>
          </div>
          Continuing from where we left off:

          <div className="pt-5 pb-0.5 text-sm font-light leading-5 text-white">
            Copyright @ NeuralSpark AI
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
