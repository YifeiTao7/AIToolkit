import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="container mx-auto text-center px-4 md:px-0">
                <p className="text-white text-sm mb-2">
                    For business inquiries, contact us at:
                </p>
                <a
                    href="mailto:yifeitao970407@gmail.com"
                    className="text-blue-400 text-lg block"
                    aria-label="Send an email to yifeitao970407@gmail.com for business inquiries"
                >
                    yifeitao970407@gmail.com
                </a>
                <p className="text-white text-sm mt-4">
                    If you have any suggestions or new ideas for the website, please also contact our admin:
                </p>
                <a
                    href="mailto:yifeitao970407@gmail.com"
                    className="text-blue-400 text-lg block"
                    aria-label="Send an email to yifeitao970407@gmail.com for suggestions or new ideas"
                >
                    yifeitao970407@gmail.com
                </a>
                <div className="text-gray-500 text-xs mt-4">
                    &copy; 2024 AI Toolkit. All rights reserved.
                </div>
                <div className="mt-4">
                    <a href="/sitemap.xml" className="text-gray-400 text-sm" aria-label="View sitemap">Sitemap</a>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="text-gray-400 hover:text-white">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter profile" className="text-gray-400 hover:text-white">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn profile" className="text-gray-400 hover:text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our GitHub profile" className="text-gray-400 hover:text-white">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
