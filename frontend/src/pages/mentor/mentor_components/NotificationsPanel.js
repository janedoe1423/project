import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from 'react-bootstrap';
import { FaBell, FaCircle } from 'react-icons/fa';
import './NotificationsPanel.css';

const NotificationsPanel = () => {
    const notifications = [
        {
            id: 1,
            type: 'new',
            message: 'New mentoring request from TechStart Inc.',
            time: '5 minutes ago',
            unread: true
        },
        {
            id: 2,
            type: 'feedback',
            message: 'Sarah left a 5-star feedback for your last session',
            time: '1 hour ago',
            unread: true
        },
        {
            id: 3,
            type: 'milestone',
            message: 'DataVision AI completed their funding milestone!',
            time: '2 hours ago',
            unread: false
        },
        {
            id: 4,
            type: 'reminder',
            message: 'Upcoming session with InnovateLab tomorrow at 10 AM',
            time: '3 hours ago',
            unread: false
        }
    ];

    return (
        <div className="mentor-notifications-panel">
            <div className="mentor-notifications-header">
                <h3>
                    <FaBell className="notification-icon" />
                    Notifications
                    <Badge className="notification-badge">2</Badge>
                </h3>
            </div>
            <div className="mentor-notifications-list">
                {notifications.map((notification) => (
                    <motion.div
                        key={notification.id}
                        className={`notification-item ${notification.unread ? 'unread' : ''}`}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {notification.unread && (
                            <FaCircle className="unread-indicator" />
                        )}
                        <div className="notification-content">
                            <p className="notification-message">{notification.message}</p>
                            <span className="notification-time">{notification.time}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsPanel;