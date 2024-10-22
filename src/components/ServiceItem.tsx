import React from 'react';

interface ServiceItemProps {
  number: string;
  title: string;
  services: string[];
  tagline: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ number, title, services, tagline }) => {
  return (
    <div className="my-16 max-w-full max-md:mt-10 max-sm:px-4 max-sm:mx-4">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex gap-10 mt-1.5 text-2xl leading-8 text-white max-md:mt-10">
            <div className="font-light">/ {number}</div>
            <div className="flex-auto font-extralight">{title}</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow font-thin max-md:mt-10">
            <div className="text-2xl leading-10 text-white min-h-[173px]">
              {services.map((service, index) => (
                <React.Fragment key={index}>
                  {service}
                  <br />
                </React.Fragment>
              ))}
            </div>
            <div className="self-start mt-6 text-xs leading-5 text-white text-opacity-100 tracking-[2px] font-bold">
              / {tagline}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
