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
        setIsSidebarOpen(false); // Close sidebar on mobile after selecting a category
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="fixed top-0 left-0 h-full w-64 bg-gray-100 border-r border-gray-300 overflow-y-auto hidden lg:block">
                <div className="sidebar-logo p-4">
                    <div className="logo overflow-hidden flex items-center space-x-4">
                        <img
                            src={logo}
                            className="h-20 w-auto"
                            alt="AI Tool"
                        />
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
            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-40 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>
                <div className="fixed inset-y-0 left-0 w-64 bg-gray-100 border-r border-gray-300 overflow-y-auto">
                    <div className="sidebar-logo p-4 flex justify-between items-center">
                        <div className="logo overflow-hidden flex items-center space-x-4">
                            <img
                                src={logo}
                                className="h-20 w-auto"
                                alt="AI Tool"
                            />
                            <span className="text-3xl font-bold">AI Toolkit</span>
                        </div>
                        <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900">
                            <i className="bi bi-x-lg"></i>
                        </button>
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
            </div>
            {/* Mobile Toggle Button */}
            <button onClick={toggleSidebar} className="lg:hidden fixed top-4 left-4 z-50 bg-gray-100 p-2 rounded-md shadow-lg">
                <i className="bi bi-list text-2xl"></i>
            </button>
        </>
    );
}

export default Sidebar;
