import React, { useState } from 'react';
import './InvestorProfile.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaGlobe, 
         FaEdit, FaChartLine, FaBuilding, FaDollarSign, 
         FaTrophy, FaGraduationCap, FaBriefcase, FaSave, 
         FaTimes } from 'react-icons/fa';

const InvestorProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [investorData, setInvestorData] = useState({
        name: "Sarah Johnson",
        title: "Lead Investment Partner",
        company: "Venture Capital Partners",
        avatar: "https://example.com/avatar.jpg",
        email: "sarah.johnson@vcp.com",
        phone: "+1 (555) 123-4567",
        linkedin: "linkedin.com/in/sarahjohnson",
        twitter: "@sarahjinvests",
        website: "sarahjohnson.com",
        bio: "15+ years of experience in venture capital and startup investments. Focused on fintech and AI/ML startups.",
        stats: {
            totalInvestments: 45,
            portfolioCompanies: 28,
            successfulExits: 12,
            aum: "250M"
        },
        expertise: [
            "Fintech", "Artificial Intelligence", "SaaS", 
            "B2B Enterprise", "Healthcare Tech", "Deep Tech"
        ],
        experience: [
            {
                role: "Lead Investment Partner",
                company: "Venture Capital Partners",
                period: "2019 - Present",
                description: "Leading investments in early-stage technology companies"
            },
            {
                role: "Investment Director",
                company: "Tech Ventures Global",
                period: "2015 - 2019",
                description: "Managed $100M+ portfolio of technology investments"
            },
            {
                role: "Senior Investment Associate",
                company: "Innovation Capital",
                period: "2012 - 2015",
                description: "Focus on Series A and B investments in enterprise software"
            }
        ],
        education: [
            {
                degree: "MBA, Finance",
                school: "Harvard Business School",
                year: "2012"
            },
            {
                degree: "BSc, Computer Science",
                school: "Stanford University",
                year: "2008"
            }
        ],
        achievements: [
            {
                title: "Forbes 30 Under 30 - Venture Capital",
                year: "2015",
                description: "Recognized for outstanding contributions to VC industry"
            },
            {
                title: "Women in VC Leadership Award",
                year: "2019",
                description: "Awarded for promoting diversity in venture capital"
            },
            {
                title: "Top 100 Rising Stars in VC",
                year: "2020",
                description: "Featured in Venture Capital Journal"
            }
        ],
        investmentThesis: [
            {
                category: "Investment Stage",
                details: "Focus on Seed to Series B investments"
            },
            {
                category: "Ticket Size",
                details: "$1M - $10M initial investment"
            },
            {
                category: "Geographic Focus",
                details: "North America and Europe"
            },
            {
                category: "Industry Focus",
                details: "Enterprise SaaS, Fintech, AI/ML"
            }
        ]
    });

    const [editedData, setEditedData] = useState({...investorData});

    const handleEdit = () => {
        setIsEditing(true);
        setEditedData({...investorData});
    };

    const handleSave = () => {
        setInvestorData({...editedData});
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedData({...investorData});
    };

    const handleChange = (field, value) => {
        setEditedData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="investor-profile-container">
            {/* Header Section */}
            <div className="profile-header">
                <div className="profile-avatar">
                    <img src={investorData.avatar} alt={investorData.name} />
                    {!isEditing ? (
                        <button className="edit-profile-btn" onClick={handleEdit}>
                            <FaEdit /> Edit Profile
                        </button>
                    ) : (
                        <div className="edit-actions">
                            <button className="save-btn" onClick={handleSave}>
                                <FaSave /> Save
                            </button>
                            <button className="cancel-btn" onClick={handleCancel}>
                                <FaTimes /> Cancel
                            </button>
                        </div>
                    )}
                </div>
                <div className="profile-info">
                    {isEditing ? (
                        <div className="edit-fields">
                            <input
                                type="text"
                                value={editedData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                className="edit-input"
                            />
                            <input
                                type="text"
                                value={editedData.title}
                                onChange={(e) => handleChange('title', e.target.value)}
                                className="edit-input"
                            />
                        </div>
                    ) : (
                        <>
                            <h1>{investorData.name}</h1>
                            <h2>{investorData.title} at {investorData.company}</h2>
                        </>
                    )}
                    <div className="contact-info">
                        <a href={`mailto:${investorData.email}`}><FaEnvelope /> {investorData.email}</a>
                        <a href={`tel:${investorData.phone}`}><FaPhone /> {investorData.phone}</a>
                        <a href={`https://${investorData.linkedin}`} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href={`https://twitter.com/${investorData.twitter}`} target="_blank" rel="noopener noreferrer">
                            <FaTwitter /> Twitter
                        </a>
                        <a href={`https://${investorData.website}`} target="_blank" rel="noopener noreferrer">
                            <FaGlobe /> Website
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
                <div className="stat-card">
                    <FaChartLine className="stat-icon" />
                    <div className="stat-content">
                        <h3>{investorData.stats.totalInvestments}</h3>
                        <p>Total Investments</p>
                    </div>
                </div>
                <div className="stat-card">
                    <FaBuilding className="stat-icon" />
                    <div className="stat-content">
                        <h3>{investorData.stats.portfolioCompanies}</h3>
                        <p>Portfolio Companies</p>
                    </div>
                </div>
                <div className="stat-card">
                    <FaChartLine className="stat-icon" />
                    <div className="stat-content">
                        <h3>{investorData.stats.successfulExits}</h3>
                        <p>Successful Exits</p>
                    </div>
                </div>
                <div className="stat-card">
                    <FaDollarSign className="stat-icon" />
                    <div className="stat-content">
                        <h3>${investorData.stats.aum}</h3>
                        <p>Assets Under Management</p>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="profile-tabs">
                <button 
                    className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Overview
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                    onClick={() => setActiveTab('experience')}
                >
                    Experience
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
                    onClick={() => setActiveTab('achievements')}
                >
                    Achievements
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'thesis' ? 'active' : ''}`}
                    onClick={() => setActiveTab('thesis')}
                >
                    Investment Thesis
                </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {activeTab === 'overview' && (
                    <div className="overview-section">
                        <h3>About</h3>
                        <p>{investorData.bio}</p>
                    </div>
                )}

                {activeTab === 'experience' && (
                    <div className="experience-section">
                        <h3>Experience</h3>
                        <div className="experience-grid">
                            {investorData.experience.map((experience, index) => (
                                <div className="experience-card" key={index}>
                                    <h4>{experience.role} at {experience.company}</h4>
                                    <p className="experience-period">{experience.period}</p>
                                    <p className="experience-description">{experience.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'achievements' && (
                    <div className="achievements-section">
                        <h3>Achievements</h3>
                        <div className="achievements-grid">
                            {investorData.achievements.map((achievement, index) => (
                                <div className="achievement-card" key={index}>
                                    <h4>{achievement.title}</h4>
                                    <p className="achievement-year">{achievement.year}</p>
                                    <p className="achievement-description">{achievement.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'thesis' && (
                    <div className="thesis-section">
                        <h3>Investment Thesis</h3>
                        <div className="thesis-grid">
                            {investorData.investmentThesis.map((thesis, index) => (
                                <div className="thesis-card" key={index}>
                                    <h4>{thesis.category}</h4>
                                    <p className="thesis-details">{thesis.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InvestorProfile;