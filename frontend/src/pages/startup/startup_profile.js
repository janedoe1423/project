import React, { useState } from "react";
import { 
  FaMapMarkerAlt, FaGlobe, FaPhone, FaEnvelope, FaIndustry, 
  FaClock, FaTrophy, FaUsers, FaChartLine, FaEdit, FaDownload,
  FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaMedal,
  FaGraduationCap, FaCertificate, FaHandshake, FaLightbulb,
  FaNewspaper, FaCode, FaStar, FaAward, FaShieldAlt,
  FaBriefcase, FaChartPie, FaFileAlt, FaHandsHelping
} from "react-icons/fa";
import "./startup_profile.css";

const StartupProfile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isEditing, setIsEditing] = useState(false);

  const companyInfo = {
    basicInfo: {
      name: "TechVision Innovations",
      logo: "/path/to/logo.png",
      tagline: "Transforming Tomorrow Through Technology",
      founded: "2019",
      type: "Product-based",
      industry: "AI & Machine Learning",
      registration: "GSTIN: 29ABCDE1234F1Z5",
      location: "Silicon Valley, CA",
      website: "www.techvision.com",
      phone: "+1 (555) 123-4567",
      email: "contact@techvision.com",
      socialLinks: {
        linkedin: "https://linkedin.com/company/techvision",
        twitter: "https://twitter.com/techvision",
        instagram: "https://instagram.com/techvision"
      }
    },
    
    visionMission: {
      vision: "To become the global leader in enterprise AI solutions by 2026",
      mission: "To democratize artificial intelligence and make it accessible to businesses of all sizes",
      values: ["Innovation", "Customer Focus", "Sustainability", "Excellence"]
    },

    metrics: [
      {
        title: "Total Revenue",
        value: "$2.5M",
        icon: FaChartLine,
        gradient: "linear-gradient(135deg, #20BF55 0%, #01BAEF 100%)",
        growth: "+25% YoY"
      },
      {
        title: "Team Size",
        value: "45+",
        icon: FaUsers,
        gradient: "linear-gradient(135deg, #6B48FF 0%, #0097FF 100%)",
        growth: "+15 this year"
      },
      {
        title: "Customers",
        value: "100+",
        icon: FaHandshake,
        gradient: "linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)",
        growth: "+40% QoQ"
      },
      {
        title: "Patents",
        value: "5",
        icon: FaShieldAlt,
        gradient: "linear-gradient(135deg, #FF8008 0%, #FFC837 100%)",
        growth: "3 Pending"
      }
    ],

    products: [
      {
        name: "AI Analytics Suite",
        description: "Enterprise-grade analytics platform powered by AI",
        features: ["Real-time Analysis", "Predictive Modeling", "Custom Dashboards"],
        targetAudience: "Enterprise Businesses",
        launchDate: "2022",
        demoLink: "https://demo.techvision.com",
        image: "/path/to/product1.jpg"
      },
      // Add more products...
    ],

    team: [
      {
        name: "Dr. Sarah Johnson",
        role: "CEO & Founder",
        image: "/path/to/sarah.jpg",
        bio: "PhD in Machine Learning from Stanford",
        linkedin: "https://linkedin.com/in/sarahjohnson",
        skills: ["AI/ML", "Leadership", "Strategy"]
      },
      // Add more team members...
    ],

    achievements: [
      {
        title: "Best AI Startup 2023",
        organization: "Tech Innovation Awards",
        icon: FaAward,
        date: "December 2023"
      },
      // Add more achievements...
    ],

    financials: {
      revenueModel: "SaaS Subscription",
      funding: [
        {
          round: "Series B",
          amount: "$50M",
          date: "2023",
          investors: ["Tech Ventures", "AI Capital"]
        }
      ]
    }
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <div className="startup_profile_about-section">
            <div className="startup_profile_vision-mission">
              <h2>Vision & Mission</h2>
              <div className="startup_profile_card">
                <h3><FaLightbulb /> Vision</h3>
                <p>{companyInfo.visionMission.vision}</p>
              </div>
              <div className="startup_profile_card">
                <h3><FaChartLine /> Mission</h3>
                <p>{companyInfo.visionMission.mission}</p>
              </div>
              <div className="startup_profile_values">
                <h3>Our Values</h3>
                <div className="startup_profile_values-grid">
                  {companyInfo.visionMission.values.map((value, index) => (
                    <span key={index} className="startup_profile_value-tag">{value}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'products':
        return (
          <div className="startup_profile_products-section">
            {companyInfo.products.map((product, index) => (
              <div key={index} className="startup_profile_product-card">
                <img src={product.image} alt={product.name} />
                <div className="startup_profile_product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="startup_profile_features">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="startup_profile_feature-tag">{feature}</span>
                    ))}
                  </div>
                  <a href={product.demoLink} className="startup_profile_button-primary">
                    View Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        );

      // Add more cases for other tabs...
    }
  };

  return (
    <div className="startup_profile_container">
      {/* Header Section */}
      <div className="startup_profile_header-section">
        <div className="startup_profile_logo-container">
          <img src={companyInfo.basicInfo.logo} alt="Company Logo" />
          <button 
            className="startup_profile_edit-button"
            onClick={() => setIsEditing(!isEditing)}
          >
            <FaEdit /> Edit Profile
          </button>
        </div>

        <div className="startup_profile_company-info">
          <h1>{companyInfo.basicInfo.name}</h1>
          <span className="startup_profile_engagement-badge">
            {companyInfo.basicInfo.type}
          </span>
          
          <div className="startup_profile_meta-info">
            <span><FaMapMarkerAlt />{companyInfo.basicInfo.location}</span>
            <span><FaGlobe />{companyInfo.basicInfo.website}</span>
            <span><FaPhone />{companyInfo.basicInfo.phone}</span>
            <span><FaEnvelope />{companyInfo.basicInfo.email}</span>
            <span><FaIndustry />{companyInfo.basicInfo.industry}</span>
          </div>

          <div className="startup_profile_social-links">
            <a href={companyInfo.basicInfo.socialLinks.linkedin}><FaLinkedin /></a>
            <a href={companyInfo.basicInfo.socialLinks.twitter}><FaTwitter /></a>
            <a href={companyInfo.basicInfo.socialLinks.instagram}><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="startup_profile_metrics-grid">
        {companyInfo.metrics.map((metric, index) => (
          <div 
            key={index} 
            className="startup_profile_metric-card"
            style={{ background: metric.gradient }}
          >
            <metric.icon className="startup_profile_metric-icon" />
            <div className="startup_profile_metric-content">
              <h3>{metric.value}</h3>
              <p>{metric.title}</p>
              <span>{metric.growth}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="startup_profile_tabs">
        {['about', 'products', 'team', 'achievements', 'financials'].map((tab) => (
          <button 
            key={tab}
            className={`startup_profile_tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Dynamic Content Based on Active Tab */}
      <div className="startup_profile_content-grid">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default StartupProfile;
