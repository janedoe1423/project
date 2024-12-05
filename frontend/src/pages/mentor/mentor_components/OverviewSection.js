import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const OverviewSection = () => {
    const stats = {
        completedSessions: 85,
        activeMentees: 12,
        averageRating: 4.8,
        pendingSessions: 5
    };

    return (
        <div className="mentor-overview-section">
            <h3 className="mentor-section-title">Overview</h3>
            <Row>
                <Col md={3}>
                    <div className="mentor-stat-card">
                        <CircularProgressbar 
                            value={stats.completedSessions} 
                            text={`${stats.completedSessions}%`}
                        />
                        <h4>Completed Sessions</h4>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="mentor-stat-card">
                        <h2>{stats.activeMentees}</h2>
                        <h4>Active Mentees</h4>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="mentor-stat-card">
                        <h2>{stats.averageRating}</h2>
                        <h4>Average Rating</h4>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="mentor-stat-card">
                        <h2>{stats.pendingSessions}</h2>
                        <h4>Pending Sessions</h4>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default OverviewSection;