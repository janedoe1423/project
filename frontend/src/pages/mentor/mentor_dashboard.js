// frontend/src/pages/mentor/mentor_dashboard.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { 
    FaUsers, FaCalendarAlt, FaStar, 
    FaLightbulb, FaChartLine, FaBullseye,
    FaBell, FaHandshake, FaHistory, FaBook 
} from 'react-icons/fa';
import './mentor_dashboard.css';

// Styled Components
const MentorDashboardContainer = styled.div`
    padding: 2rem;
    min-height: 100vh;
`;

const MentorDashboardCard = styled(motion.div)`
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
`;

const MentorSectionTitle = styled.h3`
    color: white;
    margin-bottom: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const MentorDashboard = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    // Sample data
    const activeMentorships = [
        { id: 1, name: "TechStart Inc.", progress: 75 },
        { id: 2, name: "InnovateLab", progress: 45 },
        { id: 3, name: "DataVision AI", progress: 60 }
    ];

    const upcomingSessions = [
        { id: 1, title: "Product Strategy Review", date: "2024-03-15", time: "10:00 AM" },
        { id: 2, title: "Technical Architecture Discussion", date: "2024-03-16", time: "2:00 PM" }
    ];

    const mentorshipFeedback = [
        { id: 1, mentee: "John Doe", rating: 4.5, comment: "Great insights and support!" },
        { id: 2, mentee: "Jane Smith", rating: 4.8, comment: "Very helpful and knowledgeable." }
    ];

    const engagementOpportunities = [
        { id: 1, opportunity: "AI Startup Mentorship", expertise: "Artificial Intelligence" },
        { id: 2, opportunity: "Blockchain Workshop", expertise: "Blockchain Technology" }
    ];

    return (
        <MentorDashboardContainer>
            <h1 className="mentor-dashboard-title mb-4">Mentor Dashboard</h1>
            
            <Row>
                {/* Active Mentorships */}
                <Col lg={6}>
                    <MentorDashboardCard
                        as={motion.div}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.1 }}
                    >
                        <MentorSectionTitle>
                            <FaUsers /> Active Mentorships
                        </MentorSectionTitle>
                        {activeMentorships.map(mentorship => (
                            <div key={`mentor-mentorship-${mentorship.id}`} className="mb-3">
                                <h5>{mentorship.name}</h5>
                                <div className="mentor-progress">
                                    <div 
                                        className="mentor-progress-bar" 
                                        role="progressbar" 
                                        style={{ width: `${mentorship.progress}%` }}
                                    >
                                        {mentorship.progress}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </MentorDashboardCard>
                </Col>

                {/* Schedule Overview */}
                <Col lg={6}>
                    <MentorDashboardCard
                        as={motion.div}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <MentorSectionTitle>
                            <FaCalendarAlt /> Upcoming Sessions
                        </MentorSectionTitle>
                        {upcomingSessions.map(session => (
                            <Card key={`mentor-session-${session.id}`} className="mb-3 bg-transparent text-white">
                                <Card.Body>
                                    <Card.Title>{session.title}</Card.Title>
                                    <Card.Text>
                                        {session.date} at {session.time}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </MentorDashboardCard>
                </Col>

                {/* Mentorship Feedback */}
                <Col lg={6}>
                    <MentorDashboardCard
                        as={motion.div}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 }}
                    >
                        <MentorSectionTitle>
                            <FaStar /> Mentorship Feedback
                        </MentorSectionTitle>
                        {mentorshipFeedback.map(feedback => (
                            <div key={`mentor-feedback-${feedback.id}`} className="mb-3">
                                <h5>{feedback.mentee}</h5>
                                <p>Rating: {feedback.rating} <FaStar /></p>
                                <p>"{feedback.comment}"</p>
                            </div>
                        ))}
                    </MentorDashboardCard>
                </Col>

                {/* Opportunities for Engagement */}
                <Col lg={6}>
                    <MentorDashboardCard
                        as={motion.div}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                    >
                        <MentorSectionTitle>
                            <FaLightbulb /> Opportunities for Engagement
                        </MentorSectionTitle>
                        {engagementOpportunities.map(opportunity => (
                            <div key={`mentor-opportunity-${opportunity.id}`} className="mb-3">
                                <h5>{opportunity.opportunity}</h5>
                                <p>Expertise: {opportunity.expertise}</p>
                            </div>
                        ))}
                    </MentorDashboardCard>
                </Col>

                {/* Impact Overview */}
                <Col lg={12}>
                    <MentorDashboardCard
                        as={motion.div}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5 }}
                    >
                        <MentorSectionTitle>
                            <FaChartLine /> Impact Overview
                        </MentorSectionTitle>
                        <Row>
                            <Col md={3}>
                                <div className="text-center">
                                    <h2>15</h2>
                                    <p>Active Mentees</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="text-center">
                                    <h2>4.8</h2>
                                    <p>Average Rating</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="text-center">
                                    <h2>45</h2>
                                    <p>Sessions Completed</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="text-center">
                                    <h2>89%</h2>
                                    <p>Success Rate</p>
                                </div>
                            </Col>
                        </Row>
                    </MentorDashboardCard>
                </Col>

                {/* Notifications */}
                <Col lg={6}>
                    <MentorDashboardCard
                        as={motion.div}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.6 }}
                    >
                        <MentorSectionTitle>
                            <FaBell /> Recent Notifications
                        </MentorSectionTitle>
                        <div className="mentor-notifications">
                            <div className="notification-item">
                                <Badge bg="primary">New</Badge> Feedback received from TechStart Inc.
                            </div>
                            <div className="notification-item">
                                <Badge bg="warning">Reminder</Badge> Upcoming session with InnovateLab
                            </div>
                            <div className="notification-item">
                                <Badge bg="success">Update</Badge> DataVision AI completed milestone
                            </div>
                        </div>
                    </MentorDashboardCard>
                </Col>

                {/* Resource Recommendations */}
                <Col lg={6}>
                    <MentorDashboardCard
                        as={motion.div}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.7 }}
                    >
                        <MentorSectionTitle>
                            <FaBook /> Resource Recommendations
                        </MentorSectionTitle>
                        <ul className="mentor-resources-list">
                            <li>Startup Growth Strategies Guide</li>
                            <li>Technical Architecture Best Practices</li>
                            <li>Leadership Development Framework</li>
                            <li>Innovation Management Toolkit</li>
                        </ul>
                    </MentorDashboardCard>
                </Col>
            </Row>
        </MentorDashboardContainer>
    );
};

export default MentorDashboard;