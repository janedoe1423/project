import React from 'react';
import { motion } from 'framer-motion';
import { Row, Col } from 'react-bootstrap';
import { 
    FaUsers, FaCalendarAlt, FaStar, FaTrophy,
    FaBell, FaChartLine, FaLightbulb, FaRocket
} from 'react-icons/fa';

// Import components
import OverviewSection from './mentor_components/OverviewSection';
import NotificationsPanel from './mentor_components/NotificationsPanel';
import EngagementMetrics from './mentor_components/EngagementMetrics';
import UpcomingSchedule from './mentor_components/UpcomingSchedule';
import AchievementsPanel from './mentor_components/AchievementsPanel';
import MentorSpotlight from './mentor_components/MentorSpotlight';
import SuggestionsBox from './mentor_components/SuggestionsBox';
import SessionAnalytics from './mentor_components/SessionAnalytics';
import TrendingTopics from './mentor_components/TrendingTopics';
import QuickAccessPanel from './mentor_components/QuickAccessPanel';

const MentorDashboard = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="mentor-dashboard-container">
            <h1 className="mentor-dashboard-title">Mentor Dashboard</h1>
            
            <Row className="mentor-dashboard-grid">
                {/* Overview Section */}
                <Col lg={8}>
                    <motion.div
                        className="mentor-dashboard-card"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <OverviewSection />
                    </motion.div>
                </Col>

                {/* Quick Notifications */}
                <Col lg={4}>
                    <motion.div
                        className="mentor-dashboard-card"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <NotificationsPanel />
                    </motion.div>
                </Col>

                {/* Engagement Metrics */}
                <Col lg={6}>
                    <motion.div
                        className="mentor-dashboard-card"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 }}
                    >
                        <EngagementMetrics />
                    </motion.div>
                </Col>

                {/* Upcoming Schedule */}
                <Col lg={6}>
                    <motion.div
                        className="mentor-dashboard-card"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                    >
                        <UpcomingSchedule />
                    </motion.div>
                </Col>

                {/* Achievements Panel */}
                <Col lg={4}>
                    <motion.div
                        className="mentor-dashboard-card"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5 }}
                    >
                        <AchievementsPanel />
                    </motion.div>
                </Col>

                {/* Mentor Spotlight */}
                <Col lg={8}>
                    <motion.div
                        className="mentor-dashboard-card"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.6 }}
                    >
                        <MentorSpotlight />
                    </motion.div>
                </Col>

                {/* Additional Sections */}
                <Col lg={12}>
                    <Row>
                        <Col md={4}>
                            <SuggestionsBox />
                        </Col>
                        <Col md={4}>
                            <SessionAnalytics />
                        </Col>
                        <Col md={4}>
                            <TrendingTopics />
                        </Col>
                    </Row>
                </Col>

                {/* Quick Access Panel */}
                <Col lg={12}>
                    <QuickAccessPanel />
                </Col>
            </Row>
        </div>
    );
};

export default MentorDashboard;