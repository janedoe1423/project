import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IPROverview from './ipr/ipr_overview';
import IprResources from './ipr/ipr_resources';
import IprTools from './ipr/ipr_tools';
import IprInsights from './ipr/ipr_insights';
import IprSupport from './ipr/ipr_support';
import './IPR.css';

const IPR = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const carouselImages = [
        {
            url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3',
            title: 'Protecting Your Intellectual Property',
            description: 'Navigate the world of patents, trademarks, and copyrights'
        },
        {
            url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3',
            title: 'Innovation & Rights Management',
            description: 'Comprehensive solutions for your IP needs'
        },
        {
            url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3',
            title: 'Global IP Protection',
            description: 'Securing your innovations worldwide'
        }
    ];

    const menuItems = [
        { id: 'overview', label: 'Overview', icon: '📋' },
        { id: 'resources', label: 'Resources & Knowledge Hub', icon: '📚' },
        { id: 'tools', label: 'Tools & Calculators', icon: '🔧' },
        { id: 'insights', label: 'IPR Insights & Data', icon: '📊' },
        { id: 'support', label: 'Support System', icon: '💡' }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'overview':
                return <IPROverview />;
            case 'resources':
                return <IprResources />;
            case 'tools':
                return <IprTools />;
            case 'insights':
                return <IprInsights />;
            case 'support':
                return <IprSupport />;
            default:
                return <IPROverview />;
        }
    };

    return (
        <div className="ipr-container">
            {/* Hero Section with Carousel */}
            <div className="ipr-hero">
                <Carousel 
                    autoPlay 
                    infiniteLoop 
                    showStatus={false} 
                    showThumbs={false}
                    interval={5000}
                    className="ipr-carousel"
                >
                    {carouselImages.map((image, index) => (
                        <div key={index} className="carousel-slide">
                            <img src={image.url} alt={image.title} />
                            <div className="carousel-content">
                                <h2>{image.title}</h2>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Navigation Menu */}
            <nav className="ipr-nav">
                <div className="ipr-nav-container">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            className={`ipr-nav-item ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => setActiveSection(item.id)}
                        >
                            <span className="ipr-nav-icon">{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Content Sections */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="ipr-content"
            >
                {renderContent()}
            </motion.div>
        </div>
    );
};

export default IPR;
