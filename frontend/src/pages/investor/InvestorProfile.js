import React, { useState, useEffect } from 'react';
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
    const [investorData, setInvestorData] = useState(null);

    useEffect(() => {
        const fetchInvestorData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/investor/cc79e6dc-8fe1-4488-8768-b58cdf0dbd10/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setInvestorData(data);
            } catch (error) {
                console.error('Error fetching investor data:', error);
            }
        };

        fetchInvestorData();
    }, []);

    if (!investorData) {
        return <div>Loading...</div>;
    }

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
                        className={activeSection === 'compliance' ? 'active' : ''}
                        onClick={() => setActiveSection('compliance')}>
                        Compliance Documents
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

                    {activeSection === 'compliance' && (
                        <div className="compliance-section">
                            <h3>Compliance Documents</h3>
                            {investorData.compliance_documents ? (
                                <ul>
                                    {investorData.compliance_documents.map(doc => (
                                        <li key={doc.id}>
                                            <h4>{doc.document_type}</h4>
                                            <p>Uploaded at: {doc.uploaded_at}</p>
                                            <p>Verified: {doc.is_verified ? 'Yes' : 'No'}</p>
                                            {doc.verification_notes && <p>Notes: {doc.verification_notes}</p>}
                                            {doc.expiry_date && <p>Expiry Date: {doc.expiry_date}</p>}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Compliance documents data is not available.</p>
                            )}
                        </div>
                    )}

                    {activeSection === 'thesis' && (
                        <div className="thesis-section">
                            <h3>Investment Thesis</h3>
                            {investorData.investment_thesis ? (
                                <>
                                    <p>Preferred Stages: {investorData.investment_thesis.preferred_stages}</p>
                                    <p>Ticket Size: ${investorData.investment_thesis.min_ticket_size} - ${investorData.investment_thesis.max_ticket_size}</p>
                                    <p>Geographic Focus: {investorData.investment_thesis.geographic_focus}</p>
                                    <p>Industry Focus: {investorData.investment_thesis.industry_focus}</p>
                                    <p>Investment Criteria: {investorData.investment_thesis.investment_criteria}</p>
                                </>
                            ) : (
                                <p>Investment thesis data is not available.</p>
                            )}
                        </div>
                    )}

                    {activeSection === 'experience' && (
                        <div className="experience-section">
                            <h3>Experience</h3>
                            {investorData.experiences ? (
                                <ul>
                                    {investorData.experiences.map(exp => (
                                        <li key={exp.id}>
                                            <h4>{exp.role} at {exp.company}</h4>
                                            <p>{exp.description}</p>
                                            <p>{exp.start_date} - {exp.is_current ? 'Present' : exp.end_date}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Experience data is not available.</p>
                            )}
                            <h3>Education</h3>
                            {investorData.education ? (
                                <ul>
                                    {investorData.education.map(edu => (
                                        <li key={edu.id}>
                                            <h4>{edu.degree} from {edu.school}</h4>
                                            <p>{edu.description}</p>
                                            <p>Year: {edu.year}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Education data is not available.</p>
                            )}
                            <h3>Achievements</h3>
                            {investorData.achievements ? (
                                <ul>
                                    {investorData.achievements.map(ach => (
                                        <li key={ach.id}>
                                            <h4>{ach.title} ({ach.year})</h4>
                                            <p>{ach.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Achievements data is not available.</p>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default InvestorProfile;