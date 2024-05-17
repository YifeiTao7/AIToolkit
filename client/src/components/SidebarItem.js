import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

function SidebarItem({ icon, text, subItems, onClick, isActive, category }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleItemClick = () => {
    if (subItems && subItems.length > 0) {
      setIsExpanded(!isExpanded);
    } else {
      onClick(category);
    }
  };

  const handleSubItemClick = (e, subItemCategory) => {
    e.stopPropagation();
    onClick(subItemCategory);
  };

  return (
    <li className={`py-2 px-4 cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700'} mb-2`} onClick={handleItemClick}>
      <div className="flex items-center justify-between" aria-expanded={isExpanded} role="button" tabIndex="0">
        <div className="flex items-center text-base font-medium">
          <i className={`bi bi-${icon} mr-2`} aria-hidden="true"></i>
          <span>{text}</span>
        </div>
        {subItems && subItems.length > 0 && (
          <FaChevronRight className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} aria-hidden="true" />
        )}
      </div>
      {isExpanded && subItems && subItems.length > 0 && (
        <ul className="ml-6 mt-2">
          {subItems.map((subItem, index) => (
            <li key={index} className="py-1 px-3 cursor-pointer hover:bg-gray-200" onClick={(e) => handleSubItemClick(e, subItem.category)}>
              {subItem.text}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default SidebarItem;
