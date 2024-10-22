import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100vh]">
      <div className="relative z-10">
        <Header />
      </div>

      {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/211ab64973e301c503bc19a0f0a994b5a57b6e05cb654c100f62b95f38ad3bdd?placeholderIfAbsent=true&apiKey=9d9796e9e6b74b058a205587047b814b" alt="Background" className="object-cover absolute inset-0 size-full" /> */}
      <video src="/assets/hero-video.mp4" autoPlay muted loop className="object-cover absolute inset-0 size-full" />
      <div className="relative z-10 px-4 mx-4 w-full text-7xl text-white leading-[120px] mt-[120px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[68px]">
        Accelerate your business growth with AI powered <br /> solutions
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Footer />
      </div>
    </section>
  );
};

export default Hero;
