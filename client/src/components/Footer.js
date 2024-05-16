import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="container mx-auto text-center">
                <p className="text-white text-sm mb-2">For business inquiries, contact us at:</p>
                <a href="mailto:yifeitao970407@gmail.com" className="text-blue-400 text-lg">
                    yifeitao970407@gmail.com
                </a>
                <p className="text-white text-sm mt-4">If you have any suggestions or new ideas for the website, please also contact our admin:</p>
                <a href="mailto:yifeitao970407@gmail.com" className="text-blue-400 text-lg">
                    yifeitao970407@gmail.com
                </a>
                <div className="text-gray-500 text-xs mt-4">
                    &copy; 2024 AI toolkit
                </div>
            </div>
        </footer>
    );
}

export default Footer;
