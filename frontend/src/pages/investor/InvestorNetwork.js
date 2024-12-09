import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import './InvestorNetwork.css';
import { FaUsers, FaRocket, FaRegClock, FaChevronDown, FaChevronUp, FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaComments, FaVideo, FaEnvelope, FaChartLine, FaHandshake, FaLightbulb, FaUserFriends } from 'react-icons/fa';

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
    const [activeSection, setActiveSection] = useState('collaborators'); // New state for active section

    const menuItems = [
        { id: 'collaborators', label: 'Active Collaborations', icon: <FaHandshake /> },
        { id: 'requests', label: 'Collaboration Requests', icon: <FaUsers /> },
        { id: 'recommendations', label: 'Startup Recommendations', icon: <FaLightbulb /> },
        { id: 'mentorship', label: 'Mentorship', icon: <FaUserFriends /> },
        { id: 'communication', label: 'Communication', icon: <FaComments /> },
        { id: 'events', label: 'Events', icon: <FaCalendarAlt /> }
    ];

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

    const renderSection = () => {
        switch(activeSection) {
            case 'collaborators':
                return (
                    <div className="investor_network-collaborators-section">
                        <div className="investor_network-collaborators-list">
                            {collaborations.map(collab => (
                                <div key={collab.id} className="investor_network-collaborator-card">
                                    <img src={collab.logo} alt={`${collab.startupName} logo`} className="investor_network-collaborator-logo" />
                                    <h3 className="investor_network-collaborator-name">{collab.startupName}</h3>
                                    <p className="investor_network-project-title">{collab.projectTitle}</p>
                                    <p className="investor_network-collaboration-type">
                                        <FaRocket /> {collab.collaborationType}
                                    </p>
                                    <p className={`investor_network-status ${collab.status.toLowerCase()}`}>
                                        {collab.status === "Active" ? <FaUsers /> : <FaRegClock />} {collab.status}
                                    </p>
                                    <p className="investor_network-change">{collab.change}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'requests':
                return (
                    <div className="investor_network-collaboration-requests-section">
                        <h2 className="investor_network-requests-title">Collaboration Requests</h2>
                        {collaborationRequests.map(request => (
                            <div key={request.id} className="investor_network-request-card">
                                <div className="investor_network-request-header" onClick={() => toggleRequest(request.id)}>
                                    <h3 className="investor_network-requesting-entity">{request.requestingEntity}</h3>
                                    <p className="investor_network-request-purpose">{request.purpose}</p>
                                    <p className="investor_network-request-deadline">Deadline: {request.deadline}</p>
                                    {expandedRequest === request.id ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {expandedRequest === request.id && (
                                    <div className="investor_network-request-details">
                                        <button className="investor_network-action-button accept" onClick={handleAccept}>Accept</button>
                                        <button className="investor_network-action-button decline" onClick={handleDecline}>Decline</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );
            // ... Add other cases for each section
        }
    };

    return (
        <div className="investor_network-container">
            <header className="investor_network-dashboard-header">
                <div className="investor_network-header-content">
                    <div className="investor_network-header-left">
                        <h1 className="investor_network-title">Investor Network</h1>
                        <p className="investor_network-subtitle">Welcome back, John Doe</p>
                    </div>
                    <div className="investor_network-header-right">
                        <div className="investor_network-stats">
                            <div className="investor_network-stat-item">
                                <FaChartLine />
                                <div className="investor_network-stat-content">
                                    <span className="investor_network-stat-value">$2.5M</span>
                                    <span className="investor_network-stat-label">Total Investment</span>
                                </div>
                            </div>
                            <div className="investor_network-stat-item">
                                <FaHandshake />
                                <div className="investor_network-stat-content">
                                    <span className="investor_network-stat-value">12</span>
                                    <span className="investor_network-stat-label">Active Collaborations</span>
                                </div>
                            </div>
                        </div>
                        <div className="investor_network-profile">
                            <div className="investor_network-notification-icon">🔔</div>
                            <div className="investor_network-avatar">JD</div>
                        </div>
                    </div>
                </div>

                <nav className="investor_network-menu-bar">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            className={`investor_network-menu-item ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => setActiveSection(item.id)}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </header>

            <main className="investor_network-main-content">
                {renderSection()}
            </main>

            {/* Notification Pop-up */}
            {notification.visible && (
                <div className={`investor_network-notification ${notification.type}`} style={{ top: notification.position.top, left: notification.position.left }}>
                    {notification.type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
                    <span>{notification.message}</span>
                </div>
            )}

            {/* Startup Details Modal */}
            {selectedStartup && (
                <div className="investor_network-modal">
                    <div className="investor_network-modal-content">
                        <span className="investor_network-close" onClick={handleCloseDetails}>&times;</span>
                        <h2>{selectedStartup.name}</h2>
                        <p><strong>Sector:</strong> {selectedStartup.sector}</p>
                        <p><strong>Achievements:</strong> {selectedStartup.achievements}</p>
                        <p><strong>Details:</strong> {selectedStartup.details}</p>
                    </div>
                </div>
            )}

            {/* Contact Details Modal */}
            {contactDetails && (
                <div className="investor_network-modal">
                    <div className="investor_network-modal-content">
                        <span className="investor_network-close" onClick={handleCloseDetails}>&times;</span>
                        <h2>Contact Information</h2>
                        <p><strong>Email:</strong> {contactDetails.email}</p>
                        <p><strong>Phone:</strong> {contactDetails.phone}</p>
                        <p><strong>Collaboration Opportunities:</strong> {contactDetails.collaboration}</p>
                    </div>
                </div>
            )}

            {/* Insights Modal for Mentorship Sessions */}
            {selectedSession && (
                <div className="investor_network-modal">
                    <div className="investor_network-modal-content">
                        <span className="investor_network-close" onClick={() => setSelectedSession(null)}>&times;</span>
                        <h2>Insights for {selectedSession.topic}</h2>
                        <p><strong>Date:</strong> {selectedSession.date}</p>
                        <p><strong>Duration:</strong> {selectedSession.duration}</p>
                        <p><strong>Participants:</strong> {selectedSession.participants}</p>
                        <div className="investor_network-insights-graph">
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
                <div className="investor_network-chat-modal">
                    <div className="investor_network-chat-header">
                        <h3>Chat with John Doe</h3>
                        <div>
                            <button className="investor_network-cancel-chat" onClick={() => setChatVisible(false)}>Cancel</button>
                            <button className="investor_network-close-chat" onClick={() => setChatVisible(false)}>×</button>
                        </div>
                    </div>
                    <div className="investor_network-chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`investor_network-chat-message ${msg.sender === "You" ? "sent" : "received"}`}>
                                <span>{msg.sender}: {msg.text}</span>
                                <span className="investor_network-message-time">{msg.time}</span>
                            </div>
                        ))}
                    </div>
                    <div className="investor_network-chat-input">
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
