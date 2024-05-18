import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/.netlify/functions/index/api/articles/${id}`);
        setArticle(response.data);
      } catch (err) {
        console.error('Error fetching article', err);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  // Split the content into paragraphs
  const paragraphs = article.content.split('\n\n');

  const getRandomImage = (usedIndices) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * 22) + 1;
    } while (usedIndices.has(randomIndex));
    usedIndices.add(randomIndex);
    return `https://storage.googleapis.com/yifeitaoblogs/AI/backgroung-ai/${randomIndex}.jpg`;
  };

  const usedIndices = new Set();
  const mainImage = getRandomImage(usedIndices);
  const midArticleImage = getRandomImage(usedIndices);

  return (
    <div className="article-details-container mx-auto max-w-4xl my-8 px-4 bg-white shadow-lg rounded-lg p-8">
      <div className="flex justify-between items-center mb-8">
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold">{article.title}</h1>
      </div>
      <div className="prose prose-lg max-w-none text-gray-800 h-96 overflow-y-auto scrollbar-hide">
        <div className="relative overflow-hidden rounded-lg mb-8">
          <img 
            src={mainImage} 
            alt={article.title} 
            className="w-full h-64 object-cover"
          />
        </div>
        {paragraphs.map((paragraph, index) => (
          <div key={index} className="mb-1">
            <p className={`text-lg leading-relaxed font-serif ${index === 0 ? 'first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:pr-2' : ''}`}>
              {index === 0 ? '\u00A0\u00A0' : '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}{paragraph}
            </p>
            {index === Math.floor(paragraphs.length / 2) && (
              <div className="my-8">
                <img
                  src={midArticleImage}
                  alt="Mid-article"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleDetails;
