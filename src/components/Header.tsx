import React from 'react';
import Logo from './Logo';
import ContactButton from './ContactButton';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2">
      <Logo />
      <div className="flex-grow"></div>
      <ContactButton />
    </header>
  );
};

export default Header;
