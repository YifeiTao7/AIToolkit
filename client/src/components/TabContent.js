import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import UrlCard from './UrlCard';

const PAGE_SIZE = 8;

function TabContent({ selectedCategory, onSelectCategory }) {
  const [urlCards, setUrlCards] = useState([]);
  const [activeTab, setActiveTab] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/.netlify/functions/index/api/urlCards');
        setUrlCards(response.data);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setActiveTab('popular');
    } else {
      setActiveTab('category');
    }
    setCurrentPage(1); // Reset to first page when category changes
  }, [selectedCategory]);

  const tabs = [
    { id: 'popular', label: 'Popular' },
    { id: 'all', label: 'All' },
    { id: 'category', label: 'Category' }
  ];

  const filteredUrlCards = selectedCategory === 'all'
    ? urlCards
    : urlCards.filter(card => card.category === selectedCategory);

  const displayedUrlCards = activeTab === 'popular'
    ? urlCards.filter(card => card.popular)
    : filteredUrlCards;

  // Pagination logic
  const totalPages = Math.ceil(displayedUrlCards.length / PAGE_SIZE);
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const paginatedUrlCards = displayedUrlCards.slice(startIdx, startIdx + PAGE_SIZE);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setCurrentPage(1); // Reset to first page when tab changes
    if (tabId === 'all') {
      onSelectCategory('all');
    }
  };

  return (
    <div id="content" className="container mx-auto px-4">
      <Helmet>
        <title>{selectedCategory === 'all' ? 'All AI Tools' : `${selectedCategory} AI Tools`} - AI Toolkit</title>
        <meta name="description" content="Browse and discover the most popular and category-specific AI tools available." />
      </Helmet>
      <div className="flex mb-4">
        <div className="slider-menu mini_tab into w-full">
          <ul className="flex space-x-2 overflow-x-auto border-b">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`cursor-pointer text-lg font-bold py-2 px-4 rounded-t-md ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tab-content">
        <div className="tab-pane active">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {paginatedUrlCards.map((card, index) => (
              <UrlCard key={index} {...card} />
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevPage}
              className={`py-2 px-4 rounded ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500 hover:bg-blue-100'}`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
            <button
              onClick={handleNextPage}
              className={`py-2 px-4 rounded ${currentPage === totalPages ? 'text-gray-400' : 'text-blue-500 hover:bg-blue-100'}`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabContent;
