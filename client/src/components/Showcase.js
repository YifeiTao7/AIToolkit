import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Modal from './Modal'; // 引入 Modal 组件
import { Helmet } from 'react-helmet';

const recommendations = [
    {
        title: 'Jasper AI',
        description: 'Enhance your writing efficiency with the latest AI-powered tools from Jasper. Using state-of-the-art NLP techniques, it provides real-time feedback.',
        imageUrl: 'https://storage.googleapis.com/yifeitaoblogs/AI/jasper.png',
        details: 'Jasper AI is an advanced AI writing assistant that helps users quickly generate high-quality content, including blog posts, social media posts, ad copy, and more. It offers advanced grammar and style suggestions, auto-completion, and context-aware writing assistance. Using state-of-the-art NLP techniques, it provides real-time feedback, making it ideal for both professional and casual writing tasks. Compared to other tools, it offers a more intuitive interface and better integration with popular text editors.',
        url: 'https://www.jasper.ai/',
        category: 'Writing Tool'
    },
    {
        title: 'DALL-E 2',
        description: 'Generate and optimize images with cutting-edge AI from OpenAI. Utilizing GANs and other deep learning techniques.',
        imageUrl: 'https://storage.googleapis.com/yifeitaoblogs/AI/Dall-e.png',
        details: 'DALL-E 2 is a powerful image generation tool developed by OpenAI that can create high-quality images from textual descriptions. It supports text-to-image generation, image enhancement, and background removal. Utilizing GANs and other deep learning techniques, it produces high-quality results quickly. Its user-friendly interface and high processing speed outperform many traditional image editing software.',
        url: 'https://www.openai.com/dall-e-2',
        category: 'Image Tool'
    },
    {
        title: 'Synthesia',
        description: 'Smart video editing with the newest AI technologies from Synthesia. Leveraging deep learning for automated video editing.',
        imageUrl: 'https://storage.googleapis.com/yifeitaoblogs/AI/synthesia.png',
        details: 'Synthesia is an AI video generation platform that creates high-quality videos from text. It offers automated video editing, including scene detection, auto-cropping, and smart transitions. It leverages deep learning to understand the content of your videos and suggest edits that enhance the overall quality. This tool is particularly useful for creating professional-looking videos with minimal effort, offering features not found in standard video editing software.',
        url: 'https://www.synthesia.io/',
        category: 'Video Tool'
    },
    {
        title: 'Notion AI',
        description: 'Increase work productivity with innovative AI office tools from Notion. Using machine learning for task optimization.',
        imageUrl: 'https://storage.googleapis.com/yifeitaoblogs/AI/Notion.png',
        details: 'Notion AI is an intelligent assistant integrated into the Notion platform, providing AI support for task management, document editing, and note-taking. It includes smart scheduling, document automation, and real-time collaboration features. It uses machine learning to optimize your tasks and improve efficiency, providing a seamless integration with other office software. Its advantage lies in its ability to learn from your usage patterns and offer personalized recommendations.',
        url: 'https://www.notion.so/product/ai',
        category: 'Office Tool'
    },
    {
        title: 'Replika',
        description: 'Intelligent conversation assistant for seamless interactions by Replika. Advanced NLP and machine learning algorithms for natural conversations.',
        imageUrl: 'https://storage.googleapis.com/yifeitaoblogs/AI/Replika.png',
        details: 'Replika is an AI-powered chatbot designed to provide emotional support and friendly conversations. It can act as a virtual friend to help users alleviate stress and loneliness. This tool uses advanced NLP and machine learning algorithms to provide natural and human-like interactions. It supports multiple languages and can be integrated into various customer service platforms, making it a versatile choice for businesses. Its main advantage is its ability to understand and respond to complex queries accurately.',
        url: 'https://replika.com/',
        category: 'Chat Assistant'
    },
    {
        title: 'GitHub Copilot',
        description: 'Assist with coding using the latest AI programming tools from GitHub. Machine learning models trained on vast amounts of code.',
        imageUrl: 'https://storage.googleapis.com/yifeitaoblogs/AI/Copilot.png',
        details: 'GitHub Copilot is an AI coding assistant developed by GitHub and OpenAI that provides real-time code suggestions and autocompletion, significantly improving programming efficiency. It offers real-time code suggestions, detects bugs, and provides fixes, making coding faster and more reliable. It uses machine learning models trained on vast amounts of code to offer accurate and context-aware assistance. Compared to traditional coding assistants, it offers better accuracy and more advanced features.',
        url: 'https://github.com/features/copilot',
        category: 'Programming Tool'
    }
];

function Showcase() {
    const [selectedRec, setSelectedRec] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const handleItemClick = (rec) => {
        setSelectedRec(rec);
    };

    const closeModal = () => {
        setSelectedRec(null);
    };

    return (
        <div className="showcase-container w-full max-w-screen-xl mx-auto my-8 px-8">
            <Helmet>
                <title>AI Tool Recommendations</title>
                <meta name="description" content="Discover the top AI tools for various applications, including writing, image generation, video editing, and more." />
            </Helmet>
            <Slider {...settings}>
                {recommendations.map((rec, index) => (
                    <div key={index} className="p-2">
                        <div 
                            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer max-w-full mx-auto"
                            onClick={() => handleItemClick(rec)}
                        >
                            <img className="w-full h-60 sm:h-80 lg:h-96 object-cover object-center" src={rec.imageUrl} alt={rec.title} />
                            <div className="p-4">
                                <h2 className="text-gray-900 font-bold text-xl sm:text-2xl">{`Recommended AI ${rec.category} of the Week: ${rec.title}`}</h2>
                                <p className="mt-2 text-gray-600 text-sm sm:text-base">{rec.description}</p>
                                <a href={rec.url} className="text-blue-500 hover:underline mt-2 block text-sm sm:text-base">{rec.url}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <Modal show={!!selectedRec} onClose={closeModal} content={selectedRec || {}} />
        </div>
    );
}

export default Showcase;