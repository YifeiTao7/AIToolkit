import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LazyLoad from 'react-lazyload';

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/.netlify/functions/index/api/articles');
        setArticles(response.data.reverse()); // Reverse the articles array here
      } catch (err) {
        console.error('Error fetching articles', err);
      }
    };

    fetchArticles();
  }, []);

  const PAGE_SIZE = 6;
  const totalPages = Math.ceil(articles.length / PAGE_SIZE);
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const currentArticles = articles.slice(startIdx, startIdx + PAGE_SIZE);

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

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getRandomImages = () => {
    const usedIndices = new Set();
    const images = [];
    while (images.length < PAGE_SIZE) {
      const randomIndex = Math.floor(Math.random() * 22) + 1;
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        images.push(`https://storage.googleapis.com/yifeitaoblogs/AI/backgroung-ai/${randomIndex}.jpg`);
      }
    }
    return images;
  };

  const randomImages = getRandomImages();

  return (
    <div className="article-list-container w-full mx-auto my-8 px-4 bg-white h-full">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentArticles.map((article, index) => (
          <Link 
            key={article.id} 
            to={`/articles/${article.id}`}
            onClick={handleLinkClick}
            className="article-summary mb-4 bg-white bg-opacity-75 shadow-lg rounded-lg transform transition-transform hover:scale-105 overflow-hidden"
          >
            <LazyLoad height={150} offset={100}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={randomImages[index]} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h2>
                <p className="mb-2 text-gray-800 text-sm">{article.description}</p>
              </div>
            </LazyLoad>
          </Link>
        ))}
      </div>
      <div className="flex justify-between mt-8">
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
  );
}

export default ArticleList;
