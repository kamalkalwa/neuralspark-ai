import React from 'react';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center bg-white w-full">
      <MainContent />
    </div>
  );
};

export default App;