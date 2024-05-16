import React from 'react';
import PropTypes from 'prop-types';

function Tab({ id, label }) {
    return (
        <li className="nav-item">
            <a
                className="nav-link text-gray-500 pb-2"
                href={`#${id}`}
            >
                {label}
            </a>
        </li>
    );
}

Tab.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default Tab;
