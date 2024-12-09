import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import './InvestorNetwork.css';
import { FaUsers, FaRocket, FaRegClock, FaChevronDown, FaChevronUp, FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaComments, FaVideo, FaEnvelope } from 'react-icons/fa';

const collaborations = [
    {
        id: 1,
        startupName: "Startup A",
        projectTitle: "Project Alpha",
        collaborationType: "Investment",
        status: "Active",
        logo: "../assets/images/CSA.png",
        change: "+12%",
    },
    {
        id: 2,
        startupName: "Startup B",
        projectTitle: "Project Beta",
        collaborationType: "Mentorship",
        status: "Active",
        logo: "path/to/logoB.png",
        change: "+15%",
    },
    {
        id: 3,
        startupName: "Startup C",
        projectTitle: "Project Gamma",
        collaborationType: "Investment",
        status: "Pending",
        logo: "path/to/logoC.png",
        change: "+8%",
    },
    // Add more collaborations as needed
];

const collaborationRequests = [
    {
        id: 1,
        requestingEntity: "Investor Group A",
        purpose: "Funding Round",
        deadline: "2023-12-01",
    },
    {
        id: 2,
        requestingEntity: "Mentor B",
        purpose: "Mentorship Opportunity",
        deadline: "2023-11-15",
    },
    {
        id: 3,
        requestingEntity: "Startup D",
        purpose: "Partnership Proposal",
        deadline: "2023-11-30",
    },
];

// New startup recommendations data
const startupRecommendations = [
    {
        id: 1,
        name: "InnovateX",
        sector: "Technology",
        achievements: "Awarded Best Startup 2023",
        reason: "Matches your interest in tech innovations.",
        logo: "path/to/logo1.png", // Replace with actual logo paths
        details: "InnovateX is revolutionizing the tech industry with cutting-edge solutions that enhance productivity and efficiency.",
        contact: {
            email: "contact@innovatex.com",
            phone: "+1234567890",
            collaboration: "Looking for investors and partners for new projects."
        }
    },
    {
        id: 2,
        name: "EcoSolutions",
        sector: "Sustainability",
        achievements: "Secured $1M in funding",
        reason: "Aligned with your past collaborations in sustainability.",
        logo: "path/to/logo2.png",
        details: "EcoSolutions focuses on sustainable practices that reduce waste and promote eco-friendly products.",
        contact: {
            email: "contact@ecosolutions.com",
            phone: "+0987654321",
            collaboration: "Seeking partnerships for eco-friendly initiatives."
        }
    },
    {
        id: 3,
        name: "HealthTech Pro",
        sector: "Healthcare",
        achievements: "Launched 3 successful products",
        reason: "Relevant to your interest in health tech.",
        logo: "path/to/logo3.png",
        details: "HealthTech Pro is dedicated to improving healthcare outcomes through innovative technology.",
        contact: {
            email: "contact@healthtechpro.com",
            phone: "+1122334455",
            collaboration: "Open to collaborations in health tech innovations."
        }
    },
];

const mentorshipSessions = [
    {
        id: 1,
        topic: "AI in Business",
        date: "2023-10-15",
        duration: "1 hour",
        participants: "John Doe, Jane Smith",
        status: "completed",
    },
    {
        id: 2,
        topic: "Sustainable Practices",
        date: "2023-11-01",
        duration: "2 hours",
        participants: "Alice Johnson, Bob Brown",
        status: "upcoming",
    },
    {
        id: 3,
        topic: "Health Tech Innovations",
        date: "2023-11-10",
        duration: "1.5 hours",
        participants: "Charlie Davis, Emily White",
        status: "upcoming",
    },
];

// Sample communication tools data
const communicationTools = [
    {
        id: 1,
        name: "John Doe",
        role: "Business Strategy",
        status: "Active",
        lastActivity: "2 hours ago",
        nextMeeting: "Tomorrow, 2 PM",
    },
    {
        id: 2,
        name: "Tech Ventures Capital",
        role: "SaaS, AI/ML",
        status: "In Progress",
        lastActivity: "1 day ago",
        nextMeeting: "Next Week",
    },
    {
        id: 3,
        name: "InnoTech Solutions",
        role: "FinTech",
        status: "Active",
        lastActivity: "5 hours ago",
        nextMeeting: "Friday, 3 PM",
    },
];

const insightsData = {
    1: {
        labels: ['Engagement', 'Satisfaction', 'Knowledge Gain'],
        data: [80, 90, 75], // Example data for the first session
    },
    2: {
        labels: ['Engagement', 'Satisfaction', 'Knowledge Gain'],
        data: [70, 85, 80], // Example data for the second session
    },
    3: {
        labels: ['Engagement', 'Satisfaction', 'Knowledge Gain'],
        data: [90, 95, 85], // Example data for the third session
    },
};

const feedbacks = [
    {
        id: 1,
        startupName: "Tech Ventures Capital",
        rating: 4,
        review: "Great collaboration experience!",
    },
    {
        id: 2,
        startupName: "InnoTech Solutions",
        rating: 5,
        review: "Innovative ideas and excellent teamwork.",
    },
];

const events = [
    {
        id: 1,
        name: "Startup Pitch Night",
        date: "2023-11-15",
        location: "Online",
    },
    {
        id: 2,
        name: "Networking Gala",
        date: "2023-12-01",
        location: "City Hall",
    },
];

const InvestorNetwork = () => {
    const [expandedRequest, setExpandedRequest] = useState(null);
    const [notification, setNotification] = useState({ visible: false, type: '', message: '', position: {} });
    const [selectedStartup, setSelectedStartup] = useState(null); // State for selected startup
    const [contactDetails, setContactDetails] = useState(null); // State for contact details
    const [selectedSession, setSelectedSession] = useState(null); // State for selected session
    const [chatVisible, setChatVisible] = useState(false); // State for chat visibility
    const [messages, setMessages] = useState([]); // State for chat messages
    const [newMessage, setNewMessage] = useState(""); // State for new message input
    const [newFeedback, setNewFeedback] = useState({ rating: 0, review: "" }); // State for new feedback
    const [feedbackList, setFeedbackList] = useState(feedbacks); // State for feedback list

    const toggleRequest = (id) => {
        setExpandedRequest(expandedRequest === id ? null : id);
    };

    const handleAccept = (event) => {
        const rect = event.target.getBoundingClientRect();
        setNotification({
            visible: true,
            type: 'success',
            message: 'Collaboration Accepted!',
            position: { top: rect.bottom + window.scrollY, left: rect.left }
        });
        setTimeout(() => setNotification({ visible: false }), 3000); // Hide after 3 seconds
    };

    const handleDecline = (event) => {
        const rect = event.target.getBoundingClientRect();
        setNotification({
            visible: true,
            type: 'error',
            message: 'Collaboration Declined!',
            position: { top: rect.bottom + window.scrollY, left: rect.left }
        });
        setTimeout(() => setNotification({ visible: false }), 3000); // Hide after 3 seconds
    };

    const handleExplore = (startup) => {
        setSelectedStartup(startup);
    };

    const handleContact = (startup) => {
        setContactDetails(startup.contact);
    };

    const handleCloseDetails = () => {
        setSelectedStartup(null);
        setContactDetails(null);
    };

    const handleSessionClick = (session) => {
        setSelectedSession(session); // Set the selected session for insights
    };

    const handleMessageClick = () => {
        setChatVisible(true); // Show chat modal
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { sender: "You", text: newMessage, time: new Date().toLocaleTimeString() }]);
            setNewMessage(""); // Clear input
        }
    };

    const handleFeedbackSubmit = () => {
        if (newFeedback.rating > 0 && newFeedback.review.trim()) {
            setFeedbackList([...feedbackList, { id: feedbackList.length + 1, ...newFeedback }]);
            setNewFeedback({ rating: 0, review: "" }); // Reset feedback input
        }
    };

    return (
        <div className="investor-network-container">
            <header className="dashboard-header">
                <h2 className="investor-network-title">Collaborators Dashboard</h2>
                <div className="dashboard-controls">
                    <button className="control-button active">Week</button>
                    <button className="control-button">Month</button>
                    <button className="control-button">Year</button>
                    <div className="notification-icon">🔔</div>
                </div>
            </header>
            <p className="investor-network-description">Active collaborations with startups and co-investors.</p>
            
            <div className="collaborators-section">
                <div className="collaborators-list">
                    {collaborations.map(collab => (
                        <div key={collab.id} className="collaborator-card">
                            <img src={collab.logo} alt={`${collab.startupName} logo`} className="collaborator-logo" />
                            <h3 className="collaborator-name">{collab.startupName}</h3>
                            <p className="project-title">{collab.projectTitle}</p>
                            <p className="collaboration-type">
                                <FaRocket /> {collab.collaborationType}
                            </p>
                            <p className={`status ${collab.status.toLowerCase()}`}>
                                {collab.status === "Active" ? <FaUsers /> : <FaRegClock />} {collab.status}
                            </p>
                            <p className="change">{collab.change}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Collaboration Requests Section */}
            <div className="collaboration-requests-section">
                <h2 className="requests-title">Collaboration Requests</h2>
                {collaborationRequests.map(request => (
                    <div key={request.id} className="request-card">
                        <div className="request-header" onClick={() => toggleRequest(request.id)}>
                            <h3 className="requesting-entity">{request.requestingEntity}</h3>
                            <p className="request-purpose">{request.purpose}</p>
                            <p className="request-deadline">Deadline: {request.deadline}</p>
                            {expandedRequest === request.id ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {expandedRequest === request.id && (
                            <div className="request-details">
                                <button className="action-button accept" onClick={handleAccept}>Accept</button>
                                <button className="action-button decline" onClick={handleDecline}>Decline</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Startup Recommendations Section */}
            <div className="startup-recommendations-section">
                <h2 className="recommendations-title">Startup Recommendations</h2>
                <div className="recommendations-list">
                    {startupRecommendations.map(startup => (
                        <div key={startup.id} className="recommendation-card">
                            <img src={startup.logo} alt={`${startup.name} logo`} className="recommendation-logo" />
                            <h3 className="recommendation-name">{startup.name}</h3>
                            <p className="recommendation-sector">{startup.sector}</p>
                            <p className="recommendation-achievements">{startup.achievements}</p>
                            <p className="recommendation-reason">{startup.reason}</p>
                            <div className="button-group">
                                <button className="explore-button" onClick={() => handleExplore(startup)}>Explore</button>
                                <button className="contact-button" onClick={() => handleContact(startup)}>Contact Founder</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mentorship Involvement Section */}
            <div className="mentorship-involvement-section">
                <h2 className="mentorship-title">Mentorship Involvement</h2>
                <div className="mentorship-calendar">
                    {mentorshipSessions.map(session => (
                        <div key={session.id} className={`mentorship-card ${session.status}`} onClick={() => handleSessionClick(session)}>
                            <h3>{session.topic}</h3>
                            <p><strong>Date:</strong> {session.date}</p>
                            <p><strong>Duration:</strong> {session.duration}</p>
                            <p><strong>Participants:</strong> {session.participants}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Communication Tools Section */}
            <div className="communication-tools-section">
                <h2 className="communication-title">Communication Tools</h2>
                <div className="communication-list">
                    {communicationTools.map(tool => (
                        <div key={tool.id} className="communication-card">
                            <div className="user-info">
                                <div className="user-initials">{tool.name.split(' ').map(n => n[0]).join('')}</div>
                                <div className="user-details">
                                    <h3 className="user-name">{tool.name}</h3>
                                    <p className="user-role">{tool.role}</p>
                                </div>
                            </div>
                            <div className="user-status">
                                <span className={`status ${tool.status.toLowerCase().replace(' ', '-')}`}>{tool.status}</span>
                                <p className="last-activity">Last activity: {tool.lastActivity}</p>
                            </div>
                            <div className="user-actions">
                                <button className="action-button message" onClick={handleMessageClick}>Message</button>
                                <button className="action-button schedule">{tool.nextMeeting}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Feedback Exchange Section */}
            <div className="feedback-exchange-section">
                <h2 className="feedback-title">Feedback Exchange</h2>
                <div className="feedback-form">
                    <h3>Rate and Review</h3>
                    <div className="rating-input">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`star ${newFeedback.rating >= star ? 'filled' : ''}`}
                                onClick={() => setNewFeedback({ ...newFeedback, rating: star })}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <textarea
                        value={newFeedback.review}
                        onChange={(e) => setNewFeedback({ ...newFeedback, review: e.target.value })}
                        placeholder="Write your review..."
                    />
                    <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
                </div>
                <div className="feedback-history">
                    <h3>Feedback History</h3>
                    {feedbackList.map((feedback) => (
                        <div key={feedback.id} className="feedback-card">
                            <h4>{feedback.startupName}</h4>
                            <div className="rating">{'★'.repeat(feedback.rating)}</div>
                            <p>{feedback.review}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Event Invitations Section */}
            <div className="event-invitations-section">
                <h2 className="event-title">Event Invitations</h2>
                <div className="event-list">
                    {events.map((event) => (
                        <div key={event.id} className="event-card">
                            <h3>{event.name}</h3>
                            <p><strong>Date:</strong> {event.date}</p>
                            <p><strong>Location:</strong> {event.location}</p>
                            <button className="rsvp-button">RSVP</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Notification Pop-up */}
            {notification.visible && (
                <div className={`notification ${notification.type}`} style={{ top: notification.position.top, left: notification.position.left }}>
                    {notification.type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
                    <span>{notification.message}</span>
                </div>
            )}

            {/* Startup Details Modal */}
            {selectedStartup && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseDetails}>&times;</span>
                        <h2>{selectedStartup.name}</h2>
                        <p><strong>Sector:</strong> {selectedStartup.sector}</p>
                        <p><strong>Achievements:</strong> {selectedStartup.achievements}</p>
                        <p><strong>Details:</strong> {selectedStartup.details}</p>
                    </div>
                </div>
            )}

            {/* Contact Details Modal */}
            {contactDetails && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseDetails}>&times;</span>
                        <h2>Contact Information</h2>
                        <p><strong>Email:</strong> {contactDetails.email}</p>
                        <p><strong>Phone:</strong> {contactDetails.phone}</p>
                        <p><strong>Collaboration Opportunities:</strong> {contactDetails.collaboration}</p>
                    </div>
                </div>
            )}

            {/* Insights Modal for Mentorship Sessions */}
            {selectedSession && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setSelectedSession(null)}>&times;</span>
                        <h2>Insights for {selectedSession.topic}</h2>
                        <p><strong>Date:</strong> {selectedSession.date}</p>
                        <p><strong>Duration:</strong> {selectedSession.duration}</p>
                        <p><strong>Participants:</strong> {selectedSession.participants}</p>
                        <div className="insights-graph">
                            <Bar
                                data={{
                                    labels: insightsData[selectedSession.id].labels,
                                    datasets: [
                                        {
                                            label: 'Insights',
                                            data: insightsData[selectedSession.id].data,
                                            backgroundColor: 'rgba(59, 130, 246, 0.5)',
                                            borderColor: 'rgba(59, 130, 246, 1)',
                                            borderWidth: 1,
                                        },
                                    ],
                                }}
                                options={{
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Chat Modal */}
            {chatVisible && (
                <div className="chat-modal">
                    <div className="chat-header">
                        <h3>Chat with John Doe</h3>
                        <div>
                            <button className="cancel-chat" onClick={() => setChatVisible(false)}>Cancel</button>
                            <button className="close-chat" onClick={() => setChatVisible(false)}>×</button>
                        </div>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.sender === "You" ? "sent" : "received"}`}>
                                <span>{msg.sender}: {msg.text}</span>
                                <span className="message-time">{msg.time}</span>
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InvestorNetwork;
