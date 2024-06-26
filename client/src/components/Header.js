import React from 'react';
import logo from '../logo.png';

function Header() {
  return (
    <header className="bg-white p-4 shadow sticky top-0 z-40">
      <div className="container mx-auto flex justify-center items-center">
        <button className="flex items-center space-x-2 sm:space-x-4" title="AI Toolkit" onClick={() => {}}>
          <img
            src={logo}
            className="h-12 w-auto sm:h-20"
            alt="AI Toolkit"
          />
          <span className="text-2xl sm:text-5xl font-bold">AI Toolkit</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
