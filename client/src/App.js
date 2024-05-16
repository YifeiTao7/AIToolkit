import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Showcase from './components/Showcase';
import TabContent from './components/TabContent';
import Footer from './components/Footer';
import './style.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="home blog sidebar_no flex flex-col lg:flex-row h-screen">
      <Sidebar onSelectCategory={setSelectedCategory} />
      <div className="main-content flex-1 flex flex-col lg:ml-64">
        <Header />
        <div className="flex flex-1">
          <Showcase className="flex-1 h-full" />
        </div>
        <TabContent selectedCategory={selectedCategory} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
