import React, { useState } from 'react';
import {
    Container,
    Box,
    Typography,
    List,
    ListItem,
    IconButton,
    Button,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ClearIcon from '@mui/icons-material/Clear';
import './startup_notify.css';

const NotificationsPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    
    // Sample notifications data
    const sampleNotifications = [
        {
            id: 1,
            type: 'connection',
            status: 'unread',
            sender: {
                name: 'John Doe',
                role: 'Investor',
                avatar: '👤'
            },
            message: 'Requested to connect with you',
            timestamp: '2 hours ago'
        },
        {
            id: 2,
            type: 'meeting',
            status: 'pending',
            sender: {
                name: 'Sarah Wilson',
                role: 'Mentor',
                avatar: '👩‍💼'
            },
            message: 'Scheduled a mentoring session for tomorrow at 2 PM',
            timestamp: '3 hours ago'
        },
        {
            id: 3,
            type: 'update',
            status: 'read',
            sender: {
                name: 'System',
                role: 'Update',
                avatar: '🔔'
            },
            message: 'Your startup profile has been verified successfully',
            timestamp: '1 day ago'
        },
        {
            id: 4,
            type: 'message',
            status: 'unread',
            sender: {
                name: 'Alex Brown',
                role: 'Accelerator',
                avatar: '📨'
            },
            message: 'Sent you a message regarding your application',
            timestamp: '2 days ago'
        }
    ];

    // Initialize notifications state with sample data
    const [notifications, setNotifications] = useState(sampleNotifications);

    const renderNotification = (notification) => (
        <div className="startup_notify_notification-card" key={notification.id}>
            <ListItem>
                <div className={`startup_notify_notification-avatar startup_notify_avatar-${notification.type} ${notification.status === 'unread' ? 'startup_notify_avatar-unread' : ''}`}>
                    {notification.sender.avatar}
                </div>
                
                <div className="startup_notify_notification-content">
                    <div className="startup_notify_notification-header">
                        <div className="startup_notify_notification-sender">
                            {notification.sender.name}
                            <span className={`startup_notify_status-chip startup_notify_status-${notification.status}`}>
                                {notification.sender.role}
                            </span>
                        </div>
                        <span className={`startup_notify_status-chip startup_notify_status-${notification.status}`}>
                            {notification.status}
                        </span>
                    </div>
                    
                    <div className="startup_notify_notification-message">
                        {notification.message}
                    </div>
                    
                    <div className="startup_notify_notification-time">
                        <AccessTimeIcon className="startup_notify_time-icon" />
                        {notification.timestamp}
                    </div>
                </div>

                {notification.status === 'pending' && (
                    <div className="startup_notify_notification-actions">
                        <Button className="startup_notify_action-button startup_notify_accept-button">
                            Accept
                        </Button>
                        <IconButton className="startup_notify_action-button startup_notify_decline-button">
                            <ClearIcon />
                        </IconButton>
                    </div>
                )}
            </ListItem>
        </div>
    );

    return (
        <div className="startup_notify_page">
            <Container maxWidth="lg">
                <div className="startup_notify_header">
                    <Typography className="startup_notify_title" variant="h4">
                        Notifications
                    </Typography>
                    <Typography className="startup_notify_subtitle" variant="body1">
                        Stay updated with your latest activities and connections
                    </Typography>
                </div>

                <div className="startup_notify_tabs">
                    <div className="startup_notify_tab-buttons">
                        {['All', 'Connections', 'Meetings', 'Messages', 'Updates'].map((tab, index) => (
                            <button
                                key={index}
                                className={`startup_notify_tab-button ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <List>
                    {notifications.map((notification) => renderNotification(notification))}
                </List>
            </Container>
        </div>
    );
};

export default NotificationsPage;