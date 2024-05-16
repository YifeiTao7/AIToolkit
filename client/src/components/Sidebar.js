import React, { useState, useEffect } from 'react';
import SidebarItem from './SidebarItem';
import axios from 'axios';
import logo from '../logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar({ onSelectCategory }) {
  const [sidebarItems, setSidebarItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchSidebarItems = async () => {
      try {
        const response = await axios.get('/.netlify/functions/index/api/sidebarItems');
        setSidebarItems(response.data);
      } catch (err) {
        console.error('Error fetching sidebar items', err);
      }
    };

    fetchSidebarItems();
  }, []);

  const handleItemClick = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);
    setIsSidebarOpen(false); // Close the sidebar on mobile after selecting a category
  };

  return (
    <>
      <button
        className="md:hidden p-4 bg-gray-800 text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        Toggle Sidebar
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 border-r border-gray-300 overflow-y-auto transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform md:translate-x-0 md:static`}
      >
        <div className="sidebar-logo p-4">
          <div className="logo overflow-hidden flex items-center space-x-4">
            <img src={logo} className="h-20 w-auto" alt="AI Tool" />
            <span className="text-3xl font-bold">AI Toolkit</span>
          </div>
        </div>
        <div className="sidebar-menu p-4">
          <ul>
            {sidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                text={item.text}
                subItems={item.subItems}
                onClick={(category) => handleItemClick(category)}
                isActive={activeCategory === item.category}
                category={item.category}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
