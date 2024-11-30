import React, { useState } from 'react';
import './InvestorProfile.css';
import { 
    FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaGlobe,
    FaEdit, FaChartLine, FaBuilding, FaDollarSign,
    FaTrophy, FaGraduationCap, FaBriefcase, FaSave,
    FaTimes, FaRocket, FaUserTie, FaMapMarkerAlt,
    FaFileContract, FaHandshake, FaChartBar, FaCertificate
} from 'react-icons/fa';

const InvestorProfile = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [isEditing, setIsEditing] = useState(false);

    const investorData = {
        // Basic Info (from Investor model)
        id: "uuid-here",
        email: "sarah.johnson@vcp.com",
        profile_picture: "/path/to/profile.jpg",
        title: "Lead Investment Partner",
        company: "Venture Capital Partners",
        bio: "15+ years of experience in venture capital and startup investments",
        phone: "+1 (555) 123-4567",
        first_name: "Sarah",
        last_name: "Johnson",
        
        // Social & Professional Links
        linkedin_url: "linkedin.com/in/sarahjohnson",
        twitter_handle: "@sarahjinvests",
        website: "sarahjohnson.com",
        
        // Investment Stats
        total_investments: 45,
        portfolio_companies: 28,
        successful_exits: 12,
        assets_under_management: "250000000",
        
        // Legal & Compliance
        is_verified: true,
        created_at: "2023-01-01T00:00:00Z",
        updated_at: "2024-03-15T00:00:00Z",

        // Experience (from InvestorExperience model)
        experiences: [
            {
                id: "exp-uuid-1",
                role: "Lead Investment Partner",
                company: "Venture Capital Partners",
                start_date: "2020-01",
                end_date: null,
                is_current: true,
                description: "Leading investment strategy and portfolio management"
            },
            {
                id: "exp-uuid-2",
                role: "Investment Director",
                company: "Tech Ventures Inc",
                start_date: "2015-01",
                end_date: "2019-12",
                is_current: false,
                description: "Managed early-stage investments in technology sector"
            }
        ],

        // Education (from InvestorEducation model)
        education: [
            {
                id: "edu-uuid-1",
                degree: "MBA, Finance",
                school: "Harvard Business School",
                year: 2010,
                description: "Specialized in Venture Capital and Private Equity"
            },
            {
                id: "edu-uuid-2",
                degree: "BSc, Computer Science",
                school: "MIT",
                year: 2005,
                description: "Focus on AI and Machine Learning"
            }
        ],

        // Achievements (from InvestorAchievement model)
        achievements: [
            {
                id: "ach-uuid-1",
                title: "Top 40 Under 40 VCs",
                year: 2022,
                description: "Recognized by Forbes",
                proof_document: "/path/to/proof.pdf"
            }
        ],

        // Investment Thesis (from InvestmentThesis model)
        investment_thesis: {
            preferred_stages: "EARLY",
            min_ticket_size: "1000000",
            max_ticket_size: "10000000",
            geographic_focus: "North America and Europe",
            industry_focus: ["Enterprise SaaS", "Fintech", "AI/ML"],
            investment_criteria: [
                "Strong founding team",
                "Product-market fit",
                "Scalable business model"
            ]
        },

        // Expertise (from Expertise model)
        expertise: [
            {
                id: "exp-uuid-1",
                name: "Fintech",
                years_of_experience: 8,
                description: "Specialized in payment systems and digital banking"
            },
            {
                id: "exp-uuid-2",
                name: "Enterprise SaaS",
                years_of_experience: 10,
                description: "Focus on B2B software solutions"
            }
        ],

        // Investment Preferences (from InvestmentPreference model)
        investment_preferences: {
            preferred_sectors: ["Fintech", "HealthTech", "Enterprise SaaS"],
            investment_philosophy: "Value-driven growth investment approach",
            due_diligence_process: "Comprehensive 3-stage evaluation process",
            value_addition: "Strategic guidance, network access, and operational support",
            co_investment_preferences: "Open to syndication with aligned investors",
            exit_strategy: "Strategic acquisition or IPO within 5-7 years"
        },

        // Compliance Documents (from ComplianceDocument model)
        compliance_documents: [
            {
                id: "doc-uuid-1",
                document_type: "ACCREDITED_PROOF",
                file: "/path/to/document.pdf",
                uploaded_at: "2024-01-01T00:00:00Z",
                is_verified: true,
                verification_notes: "Verified by compliance team",
                expiry_date: "2025-01-01"
            }
        ]
    };

    return (
        <div className="investor-profile-new">
            {/* Hero Section */}
            <section className="profile-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="profile-avatar">
                        <img 
                            src={investorData.profile_picture} 
                            alt={`${investorData.first_name} ${investorData.last_name}`} 
                        />
                    </div>
                    <div className="profile-intro">
                        <h1>{`${investorData.first_name} ${investorData.last_name}`}</h1>
                        <h2>{investorData.title} at {investorData.company}</h2>
                        <div className="profile-tags">
                            <span className="tag">Venture Capital</span>
                            <span className="tag">Tech Investment</span>
                            <span className="tag">Early Stage</span>
                        </div>
                    </div>
                    {/* Edit Profile Button */}
                    <button 
                        className="edit-profile-btn"
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        {isEditing ? <FaTimes /> : <FaEdit />}
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="quick-stats">
                <div className="iv-stat-cards">
                    <div className="iv-stat-card">
                        <FaChartLine className="stat-icon" />
                        <div className="stat-info">
                            <h3>{investorData.total_investments}</h3>
                            <p>Total Investments</p>
                        </div>
                    </div>
                    <div className="iv-stat-card">
                        <FaBuilding className="stat-icon" />
                        <div className="stat-info">
                            <h3>{investorData.portfolio_companies}</h3>
                            <p>Portfolio Companies</p>
                        </div>
                    </div>
                    <div className="iv-stat-card">
                        <FaRocket className="stat-icon" />
                        <div className="stat-info">
                            <h3>{investorData.successful_exits}</h3>
                            <p>Successful Exits</p>
                        </div>
                    </div>
                    <div className="iv-stat-card">
                        <FaDollarSign className="stat-icon" />
                        <div className="stat-info">
                            <h3>${(parseInt(investorData.assets_under_management) / 1000000).toFixed(1)}M</h3>
                            <p>Assets Under Management</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="main-content">
                <nav className="profile-nav">
                    <button 
                        className={activeSection === 'overview' ? 'active' : ''}
                        onClick={() => setActiveSection('overview')}>
                        Overview
                    </button>
                    <button 
                        className={activeSection === 'investments' ? 'active' : ''}
                        onClick={() => setActiveSection('investments')}>
                        Investments
                    </button>
                    <button 
                        className={activeSection === 'thesis' ? 'active' : ''}
                        onClick={() => setActiveSection('thesis')}>
                        Investment Thesis
                    </button>
                    <button 
                        className={activeSection === 'experience' ? 'active' : ''}
                        onClick={() => setActiveSection('experience')}>
                        Experience
                    </button>
                </nav>

                <div className="content-area">
                    {activeSection === 'overview' && (
                        <div className="overview-section">
                            <h3>Overview</h3>
                            <p>{investorData.bio}</p>
                            <div className="contact-info">
                                <p><FaEnvelope /> {investorData.email}</p>
                                <p><FaPhone /> {investorData.phone}</p>
                                <p><FaLinkedin /> <a href={`https://${investorData.linkedin_url}`} target="_blank" rel="noopener noreferrer">{investorData.linkedin_url}</a></p>
                                <p><FaTwitter /> <a href={`https://twitter.com/${investorData.twitter_handle}`} target="_blank" rel="noopener noreferrer">{investorData.twitter_handle}</a></p>
                                <p><FaGlobe /> <a href={`https://${investorData.website}`} target="_blank" rel="noopener noreferrer">{investorData.website}</a></p>
                            </div>
                        </div>
                    )}

                    {activeSection === 'investments' && (
                        <div className="investments-section">
                            <h3>Investments</h3>
                            <ul>
                                {investorData.experiences.map(exp => (
                                    <li key={exp.id}>
                                        <h4>{exp.role} at {exp.company}</h4>
                                        <p>{exp.description}</p>
                                        <p>{exp.start_date} - {exp.is_current ? 'Present' : exp.end_date}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeSection === 'thesis' && (
                        <div className="thesis-section">
                            <h3>Investment Thesis</h3>
                            <p>Preferred Stages: {investorData.investment_thesis.preferred_stages}</p>
                            <p>Ticket Size: ${investorData.investment_thesis.min_ticket_size} - ${investorData.investment_thesis.max_ticket_size}</p>
                            <p>Geographic Focus: {investorData.investment_thesis.geographic_focus}</p>
                            <p>Industry Focus: {investorData.investment_thesis.industry_focus.join(', ')}</p>
                            <p>Investment Criteria:</p>
                            <ul>
                                {investorData.investment_thesis.investment_criteria.map((criteria, index) => (
                                    <li key={index}>{criteria}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeSection === 'experience' && (
                        <div className="experience-section">
                            <h3>Experience</h3>
                            <ul>
                                {investorData.experiences.map(exp => (
                                    <li key={exp.id}>
                                        <h4>{exp.role} at {exp.company}</h4>
                                        <p>{exp.description}</p>
                                        <p>{exp.start_date} - {exp.is_current ? 'Present' : exp.end_date}</p>
                                    </li>
                                ))}
                            </ul>
                            <h3>Education</h3>
                            <ul>
                                {investorData.education.map(edu => (
                                    <li key={edu.id}>
                                        <h4>{edu.degree} from {edu.school}</h4>
                                        <p>{edu.description}</p>
                                        <p>Year: {edu.year}</p>
                                    </li>
                                ))}
                            </ul>
                            <h3>Achievements</h3>
                            <ul>
                                {investorData.achievements.map(ach => (
                                    <li key={ach.id}>
                                        <h4>{ach.title} ({ach.year})</h4>
                                        <p>{ach.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default InvestorProfile;