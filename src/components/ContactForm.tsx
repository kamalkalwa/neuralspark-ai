import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center py-28 mt-80 bg-white leading-[114.4px] max-w-[1920px] min-h-[915px] px-[400px] text-neutral-800  max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-8 pt-5 pb-4 w-full max-w-[940px] max-md:px-5 max-md:max-w-full max-sm:px-4 max-sm:mx-4">
        <h2 className="w-full text-8xl max-md:max-w-full max-md:text-4xl">Have an idea?</h2>
        <div className="flex  items-start  pt-2.5 text-8xl font-thin max-md:max-w-full max-md:text-4xl">
          <div className="pb-4 min-w-[240px] max-md:max-w-full max-md:text-4xl">Tell us about it</div>
        </div>
        <div className="flex w-full border-t border-solid border-t-white min-h-[1px] max-md:max-w-full" />
        <form className="flex flex-col py-px w-full font-light leading-5 text-black max-md:max-w-full">
          <label htmlFor="name" className="self-start text-base">Name</label>
          <input id="name" type="text" className="flex shrink-0 mt-4 bg-white border border-solid border-stone-300 h-[38px] max-md:max-w-full" />
          
          <label htmlFor="email" className="self-start mt-6 text-base">Email Address</label>
          <input id="email" type="email" className="flex shrink-0 mt-4 bg-white border border-solid border-stone-300 h-[38px] max-md:max-w-full" />
          
          <label htmlFor="help" className="self-start mt-6 text-base">How can we help you ?</label>
          <textarea id="help" className="flex shrink-0 mt-3 bg-white border border-solid border-stone-300 h-[38px] max-md:max-w-full" />
          
          <label htmlFor="budget" className="self-start mt-6 text-base">What is your budget for this project ?</label>
          <select id="budget" className="flex flex-col justify-center py-3 pr-7 pl-4 mt-3 text-sm leading-4 bg-white border border-solid border-stone-300 min-h-[38px] text-zinc-800 max-md:pr-5 max-md:max-w-full">
            <option>less than $5k</option>
          </select>
          
          <button type="submit" className="overflow-hidden self-center px-14 py-2.5 mt-5 max-w-full text-2xl text-center text-white whitespace-nowrap bg-neutral-800 w-[180px] max-md:px-5">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;