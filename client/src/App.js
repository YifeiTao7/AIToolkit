import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Showcase from './components/Showcase';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import TabContent from './components/TabContent';
import Footer from './components/Footer';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <div className="home blog sidebar_no flex h-screen flex-col lg:flex-row">
        <Helmet>
          <title>AI Toolkit - Your Source for AI Tools</title>
          <meta name="description" content="Discover the best AI tools for writing, image generation, video editing, and more. Stay updated with the latest AI technologies." />
          <meta name="keywords" content="AI, AI tools, AI writing, AI image, AI video, AI chat, AI programming" />
        </Helmet>
        <Sidebar onSelectCategory={handleCategorySelect} />
        <div className="main-content flex-1 flex flex-col lg:ml-64"> {/* Adjust the margin-left here */}
          <Header />
          <Routes>
            <Route path="/" element={<Showcase className="flex-1 w-full" />} />
            <Route path="/articles/:id" element={<ArticleDetails />} />
          </Routes>
          <TabContent selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} /> {/* Ensure onSelectCategory is passed here */}
          <ArticleList />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
