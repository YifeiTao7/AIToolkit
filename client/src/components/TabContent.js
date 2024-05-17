import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import UrlCard from './UrlCard';

function TabContent({ selectedCategory }) {
  const [urlCards, setUrlCards] = useState([]);
  const [activeTab, setActiveTab] = useState('popular');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/.netlify/functions/index/api/urlCards');
        setUrlCards(response.data);
        console.log('Fetched URL Cards:', response.data);
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
  }, [selectedCategory]);

  const tabs = [
    { id: 'popular', label: 'Popular' },
    { id: 'all', label: 'All' },
    { id: 'category', label: 'Category' }
  ];

  console.log('Selected Category:', selectedCategory);
  
  const filteredUrlCards = selectedCategory === 'all'
    ? urlCards
    : urlCards.filter(card => card.category === selectedCategory);

  console.log('Filtered URL Cards:', filteredUrlCards);

  const displayedUrlCards = activeTab === 'popular'
    ? urlCards.filter(card => card.popular)
    : filteredUrlCards;

  console.log('Displayed URL Cards:', displayedUrlCards);

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
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tab-content">
        <div className="tab-pane active">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
            {displayedUrlCards.map((card, index) => (
              <UrlCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabContent;
