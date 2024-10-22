import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex grow shrink items-center self-stretch my-auto max-w-[150px] w-[120px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb60baff5e8b7fe739778e7b299e6d7b736ccb06c504010d1451bcf761b811b?placeholderIfAbsent=true&apiKey=9d9796e9e6b74b058a205587047b814b" alt="Company Logo" className="object-contain self-stretch my-auto aspect-[3] max-w-[150px] w-[150px]" />
    </div>
  );
};

export default Logo;