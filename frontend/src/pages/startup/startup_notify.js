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
import './startup_notify.css';
// ... (keep other imports)

const NotificationsPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    // ... (keep other state and data)

    const renderNotification = (notification) => (
        <div className="notification-card" key={notification.id}>
            <ListItem>
                <div className={`notification-avatar avatar-${notification.type} ${notification.status === 'unread' ? 'avatar-unread' : ''}`}>
                    {notification.sender.avatar}
                </div>
                
                <div className="notification-content">
                    <div className="notification-header">
                        <div className="notification-sender">
                            {notification.sender.name}
                            <span className={`status-chip status-${notification.status}`}>
                                {notification.sender.role}
                            </span>
                        </div>
                        <span className={`status-chip status-${notification.status}`}>
                            {notification.status}
                        </span>
                    </div>
                    
                    <div className="notification-message">
                        {notification.message}
                    </div>
                    
                    <div className="notification-time">
                        <AccessTimeIcon className="time-icon" />
                        {notification.timestamp}
                    </div>
                </div>

                {notification.status === 'pending' && (
                    <div className="notification-actions">
                        <Button className="action-button accept-button">
                            Accept
                        </Button>
                        <IconButton className="action-button decline-button">
                            <ClearIcon />
                        </IconButton>
                    </div>
                )}
            </ListItem>
        </div>
    );

    return (
        <div className="notification-page">
            <Container maxWidth="lg">
                <div className="notification-header">
                    <Typography className="notification-title" variant="h4">
                        Notifications
                    </Typography>
                    <Typography className="notification-subtitle" variant="body1">
                        Stay updated with your latest activities and connections
                    </Typography>
                </div>

                <div className="notification-tabs">
                    <div className="tab-buttons">
                        {['All', 'Connections', 'Meetings', 'Messages', 'Updates'].map((tab, index) => (
                            <button
                                key={index}
                                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <List>
                    {/* ... (keep existing notification filtering and rendering) ... */}
                </List>
            </Container>
        </div>
    );
};

export default NotificationsPage;