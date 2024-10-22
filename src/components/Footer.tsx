import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap gap-5 justify-between mt-32 mr-5 w-full max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="px-4 mx-4 my-auto text-2xl leading-8 text-white uppercase tracking-[2px]">
        / AI Studio
      </div>
      <div className="flex gap-6 px-4 mx-4">
        <div className="my-auto text-2xl tracking-wide leading-8 text-white basis-auto">
          CONTACT US
        </div>
        <div className="flex flex-col justify-center min-h-[50px]">
          <div className="flex flex-1 justify-center items-center py-4 pr-4 pl-4 rounded-3xl max-w-[50px] size-full">
            <div className="flex overflow-hidden flex-col flex-1 shrink self-stretch my-auto w-full basis-0 max-w-[50px]">
              <div className="flex overflow-hidden flex-col justify-center items-center w-full min-h-[19px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fbafb2bd8c34367e4318db1481c433baf0e70f1aba5a1d01319228b8fab88a8?placeholderIfAbsent=true&apiKey=9d9796e9e6b74b058a205587047b814b" alt="Contact icon" className="object-contain w-full aspect-square" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;