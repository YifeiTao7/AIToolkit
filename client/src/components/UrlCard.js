import React from 'react';
import PropTypes from 'prop-types';

function UrlCard({ href, src, alt, title, description, category, popular }) {
    return (
        <div className="url-card h-24">
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
                            className="h-10 w-10"
                        />
                    </div>
                    <div className="url-info">
                        <strong className="block text-sm">{title}</strong>
                        <p className="text-xs text-gray-500">{description}</p>
                        <p className="text-xs text-gray-500">{category}</p>
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
    category: PropTypes.string.isRequired,  // 新增的属性类型验证
    popular: PropTypes.bool.isRequired      // 新增的属性类型验证
};

export default UrlCard;
