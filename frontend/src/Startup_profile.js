import React from 'react';
import './Startup_profile.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FaLeaf, FaBolt, FaMountain, FaTrophy, FaMapMarkerAlt, FaCalendarAlt, FaUniversity, FaBullseye, FaMapMarkedAlt, FaCogs, FaMap } from 'react-icons/fa';

const StartupProfile = () => {
  const { id } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const description = "Dwichakra represents a paradigm shift in the Indian two-wheeler industry, offering an integrated ecosystem that caters to every aspect of a rider's journey. Founded in 2016, the company has rapidly positioned itself as a pioneer in providing comprehensive services for motorcycle enthusiasts across India.Key Offerings:1. D-Ride: An innovative ride planning and management platform designed to enhance your riding experience. It features advanced mapping and navigation, comprehensive ride tracking, efficient club management, engaging events, and personalized rider portfolios, all complemented by real-time safety features for a secure and enjoyable journey.2. D-Store: A curated e-commerce platform offering a wide range of high-quality motorcycle gear, accessories, and maintenance products.3. D-Clinic: A revolutionary digital service for motorcycle maintenance and repairs that connects riders with authorized service centres, offers real-time servicetracking, and features a chain of D-Clinics for general services. This comprehensive platform ensures that riders have convenient access to quality care for their motorcycles, enhancing the overall maintenance experience.4. D-Academy: A comprehensive educational initiative currently in the planning stages, set to launch in one year. It will focus on rider training, safety certification, and continuous skill development, aiming to elevate the standards of motorcycle riding and ensure a safer riding community.";

  const infoCards = [
    {
      icon: <FaLeaf style={{ color: '#4CD6B4' }} />,
      title: 'STAGE',
      content: 'Validation'
    },
    {
      icon: <FaBolt style={{ color: '#FFB74D' }} />,
      title: 'FOCUS INDUSTRY',
      content: 'Internet of Things'
    },
    {
      icon: <FaMountain style={{ color: '#FF7597' }} />,
      title: 'FOCUS SECTOR',
      content: 'Others'
    },
    {
      icon: <FaTrophy style={{ color: '#64B5F6' }} />,
      title: 'SERVICE AREA(S)',
      content: 'Consumer Internet, E-commerce, Mobile, Online Aggregator, Subscription Commerce'
    },
    {
      icon: <FaMapMarkerAlt style={{ color: '#BA68C8' }} />,
      title: 'LOCATION',
      content: 'Bengaluru Urban, Karnataka'
    },
    {
      icon: <FaCalendarAlt style={{ color: '#4FC3F7' }} />,
      title: 'NO OF ACTIVE YEARS',
      content: '8 Years'
    }
  ];

  const ecosystemCards = [
    {
      icon: <FaUniversity />,
      title: "Government Scheme",
      description: "Government schemes on this  Portal aid Indian startups, sourced publicly.",
      color: "#FF6B35"
    },
    {
      icon: <FaBullseye />,
      title: "Programs and Challenges",
      description: "Startup collaborates for diverse programs aiding startup growth and success.",
      color: "#FF6B35"
    },
    {
      icon: <FaMap />,
      title: "Digital Maps",
      description: "Startup  collaborates for diverse programs aiding startup growth and success.",
      color: "#FF6B35"
    },
    {
      icon: <FaCogs />,
      title: "Bharat Startup Ecosystem Registry",
      description: "Startup unifies stakeholders, fosters coordination, and facilitates networking opportunities.",
      color: "#FF6B35"
    }
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="startup-profile">
      {/* Gradient Top Bar */}
      <div className="gradient-bar"></div>

      {/* Header Section */}
      <div className="profile-header">
        <div className="header-content">
          <div className="company-info">
            <div className="company-logo">
              <img src="../assets/images/profile.png" alt="Company Logo" />
            </div>
            <div className="company-details">
              <div className="engagement-level">
                <span className="badge-explorer">ENGAGEMENT LEVEL: EXPLORER</span>
                <span className="portal-since">ACTIVE ON PORTAL SINCE: 29/11/2024</span>
              </div>
              <h1>DWICHAKRA SERVICES PRIVATE LIMITED</h1>
              <div className="contact-info">
                <span><i className="fas fa-phone"></i>0000000000</span>
                <span><i className="fas fa-envelope"></i>XXXXXXX@gmail.com</span>
                <span><i className="fas fa-globe"></i>www.dwichakra.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="profile-tabs">
        <button 
          className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => handleTabChange('profile')}
        >
          Profile
        </button>
        <button 
          className={`tab ${activeTab === 'gallery' ? 'active' : ''}`}
          onClick={() => handleTabChange('gallery')}
        >
          Gallery
        </button>
      </div>

      {/* Main Content */}
      <div className="profile-content">
        {activeTab === 'profile' ? (
          // Profile Content
          <>
            <div className="startup-details">
              {/* Description Section */}
              <div className="description-container">
                <p className="description">
                  {isExpanded ? description : description.slice(0, 200) + "..."}
                </p>
                <button 
                  className="read-more-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Show Less" : "Read More"}
                  <span className={`arrow ${isExpanded ? 'up' : 'down'}`}>
                    &#x2192;
                  </span>
                </button>
              </div>

              {/* Info Grid */}
              <div className="info-grid-container">
                {infoCards.map((card, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">{card.icon}</div>
                    <div className="info-content">
                      <h3 className="info-title">{card.title}</h3>
                      <p className="info-text">{card.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem Section */}
            <section className="ecosystem-section">
              <h2 className="ecosystem-title">Explore Startup Ecosystem</h2>
              <div className="ecosystem-grid">
                {ecosystemCards.map((card, index) => (
                  <div key={index} className="ecosystem-card">
                    <div className="icon-circle">
                      <div className="ecosystem-icon">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="ecosystem-card-title">{card.title}</h3>
                    <div className="title-underline"></div>
                    <p className="ecosystem-description">{card.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          // Gallery Content
          <div className="gallery-section">
            <h2>Gallery Coming Soon...</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartupProfile;
