import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { 
    FaUsers, FaChartLine, FaTrophy, FaBell,
    FaCalendarAlt, FaLightbulb, FaRocket, 
    FaBookReader, FaBrain, FaStar, FaGraduationCap,
    FaChalkboardTeacher, FaClock, FaCheckCircle,
    FaUserGraduate, FaAward, FaCertificate, FaComments, FaTimes
} from 'react-icons/fa';
import './mentor_dashboard.css';

const MentorDashboard = () => {
    const [selectedTimeframe, setSelectedTimeframe] = useState('week');
    const [showAllNotifications, setShowAllNotifications] = useState(false);
    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
    const [showFullNotifications, setShowFullNotifications] = useState(false);

    const mentorStats = [
        { icon: <FaUsers />, value: '45', label: 'Active Mentees', trend: '+12%' },
        { icon: <FaStar />, value: '4.9', label: 'Average Rating', trend: '+0.3' },
        { icon: <FaChalkboardTeacher />, value: '128', label: 'Sessions Completed', trend: '+15%' },
        { icon: <FaClock />, value: '256', label: 'Hours Mentored', trend: '+8%' }
    ];

    const upcomingSessions = [
        { id: 1, mentee: 'John Doe', topic: 'Machine Learning Basics', time: '2:00 PM', date: '2024-03-20' },
        { id: 2, mentee: 'Jane Smith', topic: 'Data Structures', time: '4:30 PM', date: '2024-03-21' },
        { id: 3, mentee: 'Mike Johnson', topic: 'Web Development', time: '1:00 PM', date: '2024-03-22' }
    ];

    const recentAchievements = [
        { id: 1, title: 'Top Mentor', description: 'Ranked #1 in Machine Learning category', icon: <FaTrophy /> },
        { id: 2, title: '100 Sessions', description: 'Completed 100 successful sessions', icon: <FaAward /> },
        { id: 3, title: 'Perfect Rating', description: 'Maintained 5-star rating for 3 months', icon: <FaStar /> }
    ];

    const notifications = [
        { id: 1, message: 'New session request from John', time: '2 hours ago', isNew: true },
        { id: 2, message: 'Review reminder for last session', time: '5 hours ago', isNew: true },
        { id: 10, message: 'Review reminder for last session', time: '5 hours ago', isNew: true },
        { id: 3, message: 'Achievement unlocked: 50 sessions', time: '1 day ago', isNew: false },
        { id: 4, message: 'New resource recommendation', time: '2 days ago', isNew: false },
        { id: 6, message: 'New resource recommendation', time: '2 days ago', isNew: false },
        { id: 5, message: 'New resource recommendation', time: '2 days ago', isNew: false }
    ];

    const trendingTopics = [
        { topic: 'Machine Learning', sessions: 45, growth: '+25%' },
        { topic: 'Web Development', sessions: 38, growth: '+18%' },
        { topic: 'Data Science', sessions: 32, growth: '+20%' },
        { topic: 'Mobile Development', sessions: 28, growth: '+15%' }
    ];

    const menteeProgress = [
        { mentee: 'John Doe', progress: 75, topics: ['ML', 'AI'], status: 'On Track' },
        { mentee: 'Jane Smith', progress: 60, topics: ['Web Dev'], status: 'Needs Attention' },
        { mentee: 'Mike Johnson', progress: 90, topics: ['Data Science'], status: 'Excellent' }
    ];

    const handleNotificationClick = () => {
        setShowNotificationDropdown(!showNotificationDropdown);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.mentor-dashboard-notification-dropdown-container')) {
                setShowNotificationDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="mentor-dashboard">
            {/* Header Section */}
            <div className="mentor-dashboard-header">
                <h1><FaBrain /> Mentor Dashboard</h1>
                <div className="mentor-dashboard-controls">
                    <div className="mentor-dashboard-timeframe">
                        {['week', 'month', 'year'].map((timeframe) => (
                            <button
                                key={timeframe}
                                className={`mentor-dashboard-timeframe-button ${selectedTimeframe === timeframe ? 'active' : ''}`}
                                onClick={() => setSelectedTimeframe(timeframe)}
                            >
                                {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className="mentor-dashboard-notification-dropdown-container">
                        <button 
                            className="mentor-dashboard-notification-button"
                            onClick={handleNotificationClick}
                        >
                            <div className="notification-icon-wrapper">
                                <FaBell className="notification-bell" />
                                {notifications.some(n => n.isNew) && (
                                    <span className="mentor-dashboard-notification-badge pulse"></span>
                                )}
                            </div>
                        </button>
                        {showNotificationDropdown && (
                            <div className="mentor-dashboard-notification-dropdown">
                                <div className="mentor-dashboard-notification-header">
                                    <h3>Notifications</h3>
                                    <small>{notifications.filter(n => n.isNew).length} new</small>
                                </div>
                                <div className="mentor-dashboard-notification-list-dropdown">
                                    {notifications.slice(0, 4).map((notification, index) => (
                                        <div key={index} className="mentor-dashboard-notification-item-dropdown">
                                            <span className={`mentor-dashboard-notification-dot ${notification.isNew ? 'new' : ''}`}></span>
                                            <div className="mentor-dashboard-notification-content">
                                                <p>{notification.message}</p>
                                                <small>{notification.time}</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button 
                                    className="mentor-dashboard-view-all"
                                    onClick={() => {
                                        setShowNotificationDropdown(false);
                                        setShowFullNotifications(true);
                                    }}
                                >
                                    View All Notifications
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <Row className="mentor-dashboard-stats">
                {mentorStats.map((stat, index) => (
                    <Col lg={3} md={6} key={index}>
                        <div className="mentor-dashboard-stat-card">
                            <div className="mentor-dashboard-stat-icon">{stat.icon}</div>
                            <div className="mentor-dashboard-stat-value">{stat.value}</div>
                            <div className="mentor-dashboard-stat-label">{stat.label}</div>
                            <div className="mentor-dashboard-stat-trend">{stat.trend}</div>
                        </div>
                    </Col>
                ))}
            </Row>

            <Row>
                <Col lg={8}>
                    {/* Engagement Chart */}
                    <div className="mentor-dashboard-card">
                        <h2><FaChartLine /> Engagement Metrics</h2>
                        <div className="mentor-dashboard-chart-container">
                            <div className="mentor-dashboard-chart-bars">
                                {[60, 80, 40, 90, 70, 85, 55].map((height, index) => (
                                    <div 
                                        key={index}
                                        className="mentor-dashboard-chart-bar"
                                        style={{ height: `${height}%` }}
                                    >
                                        <span className="mentor-dashboard-chart-value">{height}%</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mentor-dashboard-chart-labels">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                                    <span key={index} className="mentor-dashboard-chart-label">{day}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mentee Progress */}
                    <div className="mentor-dashboard-card">
                        <h2><FaUserGraduate /> Mentee Progress</h2>
                        <div className="mentor-dashboard-progress-grid">
                            {menteeProgress.map((mentee, index) => (
                                <div key={index} className="mentor-dashboard-progress-card">
                                    <h4>{mentee.mentee}</h4>
                                    <div className="mentor-dashboard-progress-bar">
                                        <div 
                                            className="mentor-dashboard-progress-fill"
                                            style={{ width: `${mentee.progress}%` }}
                                        ></div>
                                    </div>
                                    <div className="mentor-dashboard-topics">
                                        {mentee.topics.map((topic, i) => (
                                            <span key={i} className="mentor-dashboard-topic-tag">{topic}</span>
                                        ))}
                                    </div>
                                    <span className={`mentor-dashboard-status-badge ${mentee.status.toLowerCase().replace(' ', '-')}`}>
                                        {mentee.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trending Topics */}
                    <div className="mentor-dashboard-card">
                        <h2><FaLightbulb /> Trending Topics</h2>
                        <div className="mentor-dashboard-trending-grid">
                            {trendingTopics.map((topic, index) => (
                                <div key={index} className="mentor-dashboard-trending-card">
                                    <h4>{topic.topic}</h4>
                                    <div className="mentor-dashboard-trending-stats">
                                        <span>{topic.sessions} sessions</span>
                                        <span className="mentor-dashboard-trending-growth">{topic.growth}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>

                <Col lg={4}>
                    {/* Quick Actions */}
                    <div className="mentor-dashboard-card">
                        <h2><FaRocket /> Quick Actions</h2>
                        <div className="mentor-dashboard-quick-actions">
                            <button className="mentor-dashboard-button primary">
                                <FaCalendarAlt /> Schedule Session
                            </button>
                            <button className="mentor-dashboard-button secondary">
                                <FaComments /> View Messages
                            </button>
                            <button className="mentor-dashboard-button secondary">
                                <FaBookReader /> Add Resources
                            </button>
                        </div>
                    </div>

                    {/* Upcoming Sessions */}
                    <div className="mentor-dashboard-card">
                        <h2><FaCalendarAlt /> Upcoming Sessions</h2>
                        <div className="mentor-dashboard-sessions-list">
                            {upcomingSessions.map((session, index) => (
                                <div key={index} className="mentor-dashboard-session-item">
                                    <div className="mentor-dashboard-session-header">
                                        <h4>{session.mentee}</h4>
                                        <span>{session.time}</span>
                                    </div>
                                    <p>{session.topic}</p>
                                    <span className="mentor-dashboard-session-date">{session.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>

            {showFullNotifications && (
                <div className="mentor-dashboard-full-notifications">
                    <div className="mentor-dashboard-full-notifications-content">
                        <button 
                            className="mentor-dashboard-close-button"
                            onClick={() => setShowFullNotifications(false)}
                        >
                            <FaTimes />
                        </button>
                        <h2><FaBell /> All Notifications</h2>
                        <div className="mentor-dashboard-full-notifications-list">
                            {notifications.map((notification, index) => (
                                <div key={index} className="mentor-dashboard-notification-item">
                                    <span className={`mentor-dashboard-notification-dot ${notification.isNew ? 'new' : ''}`}></span>
                                    <div className="mentor-dashboard-notification-content">
                                        <p>{notification.message}</p>
                                        <small>{notification.time}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MentorDashboard;