import React from 'react';
import logo from '../logo.png';

function Header() {
    return (
        <div className="bg-white p-4 shadow sticky top-0 z-50">
            <div className="container mx-auto flex justify-center items-center">
                <button className="flex items-center space-x-4" title="AI Toolkit" onClick={() => {}}>
                    <img
                        src={logo}
                        className="h-20 w-auto"
                        alt="AI Toolkit"
                    />
                    <span className="text-5xl font-bold">AI Toolkit</span>
                </button>
            </div>
        </div>
    );
}

export default Header;
