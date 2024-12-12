import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { 
    FaAward, FaBookOpen, FaLinkedin,
    FaGithub, FaResearchgate, FaGraduationCap,
    FaQuoteLeft, FaCertificate, FaStar, FaUser,
    FaEnvelope
} from 'react-icons/fa';
import './researcher_profile.css';
import profile from './profile.jpg';

const ResearcherProfile = () => {
    const publications = [
        {
            title: "Advanced Neural Networks in Healthcare",
            authors: "Johnson, S., et al.",
            journal: "Nature AI, 2023"
        },
        {
            title: "Machine Learning Applications in Environmental Science",
            authors: "Johnson, S., Smith, J., et al.",
            journal: "Science Direct, 2023"
        }
    ];

    const achievements = [
        {
            title: "Outstanding Research Award",
            organization: "Tech Research University",
            year: "2023"
        },
        {
            title: "Best Paper Award",
            organization: "International AI Conference",
            year: "2022"
        }
    ];

    const expertise = [
        { name: "AI", icon: <FaStar /> },
        { name: "ML", icon: <FaStar /> },
        { name: "Neural Networks", icon: <FaStar /> },
        { name: "Data Science", icon: <FaStar /> }
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, name: "LinkedIn", link: "#linkedin", className: "linkedin" },
        { icon: <FaGithub />, name: "GitHub", link: "#github", className: "github" },
        { icon: <FaResearchgate />, name: "ResearchGate", link: "#researchgate", className: "researchgate" },
        { icon: <FaGraduationCap />, name: "Education", link: "#education", className: "education" }
    ];

    const handleContactClick = () => {
        window.location.href = 'mailto:sarah.johnson@research.edu';
    };

    return (
        <Container fluid className="res_profile-researcher-profile py-4">
            <Card className="res_profile-profile-header mb-4 hover-effect">
                <div className="res_profile-profile-cover">
                    <div className="res_profile-cover-overlay"></div>
                </div>
                <Card.Body className="text-center position-relative">
                    <div className="res_profile-profile-image-wrapper">
                        <div className="res_profile-profile-image-container">
                            <img 
                                src={profile} 
                                alt="Researcher" 
                                className="res_profile-profile-image"
                            />
                            <div className="res_profile-status-indicator pulse"></div>
                        </div>
                        <div className="res_profile-profile-frame"></div>
                    </div>
                    
                    <h2 className="res_profile-profile-name mt-4">Dr. Sarah Johnson</h2>
                    <div className="res_profile-title-badge">
                        <FaStar className="res_profile-title-icon" />
                        <h5 className="res_profile-text-gradient mb-0">Senior Research Scientist</h5>
                    </div>
                    
                    <div className="res_profile-expertise-tags mb-3">
                        {expertise.map((item, index) => (
                            <Badge key={index} className="res_profile-custom-badge">
                                {item.icon} {item.name}
                            </Badge>
                        ))}
                    </div>
                    
                    <div className="res_profile-social-links">
                        {socialLinks.map((item, index) => (
                            <a 
                                key={index}
                                href={item.link} 
                                className={`res_profile-social-icon ${item.className} hover-float`}
                            >
                                {item.icon}
                                <span className="res_profile-icon-tooltip">{item.name}</span>
                            </a>
                        ))}
                    </div>
                </Card.Body>
            </Card>

            <Row className="res_profile-content-grid g-4">
                <Col lg={4}>
                    <Card className="res_profile-info-card glass-morphism hover-lift">
                        <Card.Body>
                            <h6 className="res_profile-section-title">
                                <FaUser className="res_profile-section-icon rotating" />
                                Personal Information
                            </h6>
                            <div className="res_profile-info-grid">
                                <div className="res_profile-info-item glow-hover">
                                    <div className="res_profile-info-content">
                                        <small className="res_profile-info-label">Email</small>
                                        <span className="res_profile-info-text">sarah.johnson@research.edu</span>
                                    </div>
                                </div>
                                <div className="res_profile-info-item glow-hover">
                                    <div className="res_profile-info-content">
                                        <small className="res_profile-info-label">Phone</small>
                                        <span className="res_profile-info-text">+1 (555) 123-4567</span>
                                    </div>
                                </div>
                                <div className="res_profile-info-item glow-hover">
                                    <div className="res_profile-info-content">
                                        <small className="res_profile-info-label">Institution</small>
                                        <span className="res_profile-info-text">Tech Research University</span>
                                    </div>
                                </div>
                                <div className="res_profile-info-item res_profile-collab-status glow-hover">
                                    <div className="res_profile-info-content">
                                        <small className="res_profile-info-label">Status</small>
                                        <div className="res_profile-contact-status">
                                            <span className="res_profile-info-text">
                                                Open to Collaboration
                                            </span>
                                            <Button 
                                                className="res_profile-contact-btn"
                                                onClick={handleContactClick}
                                            >
                                                <FaEnvelope /> Contact Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={8}>
                    <Row className="g-4">
                        <Col md={12}>
                            <Card className="res_profile-about-card glass-morphism hover-lift">
                                <Card.Body>
                                    <div className="res_profile-quote-wrapper">
                                        <FaQuoteLeft className="res_profile-quote-icon floating" />
                                    </div>
                                    <p className="res_profile-about-text">
                                        Distinguished researcher in AI and ML with 10+ years of experience, 
                                        focusing on healthcare and environmental science solutions.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={12}>
                            <Card className="res_profile-publications-card glass-morphism hover-lift">
                                <Card.Body>
                                    <h6 className="res_profile-section-title">
                                        <div className="res_profile-title-icon-wrapper">
                                            <FaBookOpen className="res_profile-section-icon rotating" />
                                        </div>
                                        Recent Publications
                                    </h6>
                                    <div className="res_profile-publication-grid">
                                        {publications.map((pub, index) => (
                                            <div key={index} className="res_profile-publication-item glow-hover">
                                                <div className="res_profile-pub-content">
                                                    <h6 className="res_profile-pub-title">{pub.title}</h6>
                                                    <p className="res_profile-pub-authors">{pub.authors}</p>
                                                    <small className="res_profile-pub-journal">{pub.journal}</small>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={12}>
                            <Card className="res_profile-achievements-card glass-morphism hover-lift">
                                <Card.Body>
                                    <h6 className="res_profile-section-title">
                                        <div className="res_profile-title-icon-wrapper">
                                            <FaAward className="res_profile-section-icon floating" />
                                        </div>
                                        Achievements
                                    </h6>
                                    <div className="res_profile-achievement-grid">
                                        {achievements.map((achievement, index) => (
                                            <div key={index} className="res_profile-achievement-item glow-hover">
                                                <div className="res_profile-achievement-icon-wrapper">
                                                    <FaCertificate className="res_profile-achievement-icon rotating" />
                                                </div>
                                                <div className="res_profile-achievement-content">
                                                    <h6 className="res_profile-achievement-title">{achievement.title}</h6>
                                                    <small className="res_profile-achievement-year">
                                                        {achievement.organization}, {achievement.year}
                                                    </small>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ResearcherProfile;