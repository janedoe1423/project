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
        target_audience: "Enterprise Businesses",
        launch_date: "2022",
        demo_link: "https://demo.techvision.com/analytics",
        image: "/images/products/analytics-suite.jpg"
      },
      {
        name: "SmartBot Platform",
        description: "Conversational AI platform for customer service automation",
        features: ["Natural Language Processing", "Multi-language Support", "Integration APIs"],
        target_audience: "Customer Service Teams",
        launch_date: "2023",
        demo_link: "https://demo.techvision.com/smartbot",
        image: "/images/products/smartbot.jpg"
      }
    ],

    team: [
      {
        name: "Dr. Sarah Johnson",
        role: "CEO & Founder",
        image: "/images/team/sarah.jpg",
        bio: "PhD in Machine Learning from Stanford. Former Research Lead at Google AI. 15+ years experience in AI and entrepreneurship.",
        linkedin: "https://linkedin.com/in/sarahjohnson",
        skills: ["AI/ML", "Leadership", "Strategy", "Research", "Product Vision"]
      },
      {
        name: "Michael Chen",
        role: "CTO",
        image: "/images/team/michael.jpg",
        bio: "Ex-Google AI Tech Lead. Expert in large-scale ML systems and cloud architecture. MS in Computer Science from MIT.",
        linkedin: "https://linkedin.com/in/michaelchen",
        skills: ["System Architecture", "Cloud Computing", "Team Leadership", "ML Engineering"]
      },
      {
        name: "Dr. Emily Rodriguez",
        role: "Head of Research",
        image: "/images/team/emily.jpg",
        bio: "Published researcher in NLP and Computer Vision. Previously at OpenAI. PhD from Berkeley in AI.",
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        skills: ["NLP", "Computer Vision", "Research Management", "Deep Learning"]
      },
      {
        name: "Alex Kumar",
        role: "Product Director",
        image: "/images/team/alex.jpg",
        bio: "10+ years in product management. Previously led AI products at Microsoft. MBA from Harvard.",
        linkedin: "https://linkedin.com/in/alexkumar",
        skills: ["Product Strategy", "UX Design", "Agile Management", "Go-to-Market"]
      }
    ],

    achievements: [
      {
        title: "Best AI Startup 2023",
        organization: "Tech Innovation Awards",
        date: "December 2023",
        icon: FaAward
      },
      {
        title: "Top 10 AI Companies to Watch",
        organization: "Forbes Technology",
        date: "October 2023",
        icon: FaStar
      },
      {
        title: "Innovation Excellence Award",
        organization: "AI Summit 2023",
        date: "September 2023",
        icon: FaTrophy
      },
      {
        title: "Best Enterprise AI Solution",
        organization: "Global Tech Awards",
        date: "August 2023",
        icon: FaMedal
      }
    ],

    financials: {
      revenue_model: "Enterprise SaaS Subscription + Custom Solutions",
      funding_rounds: [
        {
          round: "Series B",
          amount: "$50M",
          date: "December 2023",
          investors: ["Tech Ventures Capital", "AI Growth Fund", "Innovation Partners"]
        },
        {
          round: "Series A",
          amount: "$15M",
          date: "March 2022",
          investors: ["Early Stage Ventures", "Future Tech Fund", "Angel Consortium"]
        },
        {
          round: "Seed",
          amount: "$3M",
          date: "January 2021",
          investors: ["Startup Accelerator", "Angel Investors Group", "Tech Seed Fund"]
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
                  <a href={product.demo_link} className="startup_profile_button-primary">
                    View Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        );

      case 'team':
        return (
          <div className="startup_profile_team-section">
            <div className="startup_profile_team-grid">
              {companyInfo.team.map((member, index) => (
                <div key={index} className="startup_profile_team-card">
                  <div className="startup_profile_team-member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="startup_profile_team-member-info">
                    <h3>{member.name}</h3>
                    <p className="startup_profile_role">{member.role}</p>
                    <p className="startup_profile_bio">{member.bio}</p>
                    <div className="startup_profile_skills">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className="startup_profile_skill-tag">{skill}</span>
                      ))}
                    </div>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="startup_profile_linkedin-link">
                      <FaLinkedin /> Connect on LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="startup_profile_achievements-section">
            <div className="startup_profile_achievements-grid">
              {companyInfo.achievements.map((achievement, index) => (
                <div key={index} className="startup_profile_achievement-card">
                  <div className="startup_profile_achievement-icon">
                    <achievement.icon />
                  </div>
                  <div className="startup_profile_achievement-content">
                    <h3>{achievement.title}</h3>
                    <p>{achievement.organization}</p>
                    <span>{achievement.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'financials':
        return (
          <div className="startup_profile_financials-section">
            <div className="startup_profile_revenue-model">
              <h2>Revenue Model</h2>
              <p>{companyInfo.financials.revenue_model}</p>
            </div>
            <div className="startup_profile_funding-history">
              <h2>Funding History</h2>
              {companyInfo.financials.funding_rounds.map((round, index) => (
                <div key={index} className="startup_profile_funding-card">
                  <div className="startup_profile_funding-header">
                    <h3>{round.round}</h3>
                    <span className="startup_profile_amount">{round.amount}</span>
                  </div>
                  <p className="startup_profile_date">{round.date}</p>
                  <div className="startup_profile_investors">
                    {round.investors.map((investor, idx) => (
                      <span key={idx} className="startup_profile_investor-tag">
                        {investor}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
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
