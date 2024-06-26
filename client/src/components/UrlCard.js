import React from 'react';
import PropTypes from 'prop-types';

function UrlCard({ href, src, alt, title, description, category, popular }) {
    return (
        <div className="url-card h-24 sm:h-32 md:h-40 lg:h-40 xl:h-40">
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
                            className="h-10 w-10 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 xl:h-12 xl:w-12"
                        />
                    </div>
                    <div className="url-info">
                        <strong className="block text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">{title}</strong>
                        <p className="text-xs text-gray-500 sm:text-xs md:text-sm lg:text-base xl:text-base">{description}</p>
                        <p className="text-xs text-gray-500 sm:text-xs md:text-sm lg:text-base xl:text-base">{category}</p>
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
