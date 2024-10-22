import React from 'react';

const ContactButton: React.FC = () => {
  return (
    <div className="flex flex-col grow shrink self-stretch pt-5 pr-9 pb-2.5 my-auto w-auto text-sm font-light leading-10 max-w-[187px] text-white text-opacity-90">
      <button className="px-5 py-px w-full border border-solid border-white border-opacity-40 rounded-[50px] max-md:px-5">
        LET'S TALK
      </button>
    </div>
  );
};

export default ContactButton;