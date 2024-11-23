import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { 
    FaUser, FaEnvelope, FaPhone, FaUniversity, 
    FaAward, FaBookOpen, FaHandshake, FaLinkedin,
    FaGithub, FaResearchgate, FaGraduationCap
} from 'react-icons/fa';
import './researcher_profile.css';

const ResearcherProfile = () => {
    return (
        <Container fluid className="researcher-profile py-4">
            {/* Profile Header */}
            <Card className="profile-header mb-4 border-0">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col md={3} className="text-center">
                            <div className="profile-image-wrapper mb-3 mb-md-0">
                                <img 
                                    src="https://via.placeholder.com/150" 
                                    alt="Researcher" 
                                    className="profile-image"
                                />
                            </div>
                        </Col>
                        <Col md={9}>
                            <h2 className="mb-2">Dr. Sarah Johnson</h2>
                            <h5 className="text-purple mb-2">Senior Research Scientist</h5>
                            <p className="text-muted mb-3">Department of Computer Science</p>
                            <div className="social-links mb-3">
                                <a href="#linkedin"><FaLinkedin /></a>
                                <a href="#github"><FaGithub /></a>
                                <a href="#researchgate"><FaResearchgate /></a>
                                <a href="#education"><FaGraduationCap /></a>
                            </div>
                            <div className="expertise-tags">
                                <Badge className="me-2 mb-2">Artificial Intelligence</Badge>
                                <Badge className="me-2 mb-2">Machine Learning</Badge>
                                <Badge className="me-2 mb-2">Neural Networks</Badge>
                                <Badge className="me-2 mb-2">Data Science</Badge>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Row>
                {/* Left Column */}
                <Col lg={4}>
                    {/* Personal Info */}
                    <Card className="mb-4 border-0">
                        <Card.Header className="bg-white">
                            <h5 className="mb-0"><FaUser className="me-2" />Personal Information</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="info-item">
                                <FaEnvelope className="me-2 text-purple" />
                                <div>
                                    <small className="text-muted">Email</small>
                                    <p className="mb-0">sarah.johnson@research.edu</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaPhone className="me-2 text-purple" />
                                <div>
                                    <small className="text-muted">Phone</small>
                                    <p className="mb-0">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaUniversity className="me-2 text-purple" />
                                <div>
                                    <small className="text-muted">Institution</small>
                                    <p className="mb-0">Tech Research University</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Collaboration Status */}
                    <Card className="mb-4 border-0 text-center">
                        <Card.Body>
                            <FaHandshake className="collab-icon mb-3" />
                            <h5 className="mb-3">Open to Collaboration</h5>
                            <Button variant="purple" className="w-100">Contact Me</Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Right Column */}
                <Col lg={8}>
                    {/* About */}
                    <Card className="mb-4 border-0">
                        <Card.Header className="bg-white">
                            <h5 className="mb-0">About</h5>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-0">
                                Dr. Sarah Johnson is a distinguished researcher in artificial intelligence 
                                and machine learning with over 10 years of experience. Her work focuses 
                                on developing innovative solutions for complex problems in healthcare and 
                                environmental science.
                            </p>
                        </Card.Body>
                    </Card>

                    {/* Publications */}
                    <Card className="mb-4 border-0">
                        <Card.Header className="bg-white">
                            <h5 className="mb-0"><FaBookOpen className="me-2" />Recent Publications</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="publication-item">
                                <h6>Advanced Neural Networks in Healthcare</h6>
                                <p className="text-muted mb-1">Johnson, S., Smith, J., Davis, R.</p>
                                <p className="text-muted mb-2">Nature AI, 2023</p>
                                <Button variant="link" className="p-0">View Publication</Button>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Achievements */}
                    <Card className="border-0">
                        <Card.Header className="bg-white">
                            <h5 className="mb-0"><FaAward className="me-2" />Achievements</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="achievement-item">
                                <FaAward className="text-purple me-3" />
                                <div>
                                    <h6 className="mb-1">Outstanding Research Award</h6>
                                    <p className="text-muted mb-0">Tech Research University, 2023</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ResearcherProfile;