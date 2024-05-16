import React from 'react';
import PropTypes from 'prop-types';

function UrlCard({ href, src, alt, title, description, category, popular }) {
    return (
        <div className="url-card h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56">
            <div className="url-body bg-white shadow-md rounded-lg p-4 h-full flex flex-col justify-between">
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                    title={description}
                >
                    <div className="url-img rounded-full mr-4 flex items-center justify-center">
                        <img
                            src={src}
                            alt={alt}
                            className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24"
                        />
                    </div>
                    <div className="url-info">
                        <strong className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{title}</strong>
                        <p className="text-xs text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">{description}</p>
                        <p className="text-xs text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">{category}</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

UrlCard.propTypes = {
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    popular: PropTypes.bool.isRequired
};

export default UrlCard;
