import React, { useState } from 'react';
import './mentor_collaboration.css';
import { FaUserFriends, FaSearch, FaComments, FaProjectDiagram, 
         FaHandshake, FaCalendarAlt, FaChartLine, FaComment, 
         FaFileAlt, FaChartBar, FaEnvelope, FaTimes } from 'react-icons/fa';

const MentorCollaboration = () => {
    const [activeCollaborations] = useState([
        { id: 1, name: 'AI Startup Mentoring', progress: 65, nextMeeting: '2024-04-15', milestones: '3/5 completed' },
        { id: 2, name: 'Research Project Guide', progress: 30, nextMeeting: '2024-04-18', milestones: '2/6 completed' },
        { id: 3, name: 'Tech Mentorship Program', progress: 85, nextMeeting: '2024-04-20', milestones: '4/5 completed' },
    ]);

    const [requests] = useState([
        { id: 1, title: 'ML Algorithm Guidance', domain: 'AI/ML', experience: '5+ years' },
        { id: 2, title: 'Startup Scale Strategy', domain: 'Business', experience: '3+ years' },
        { id: 3, title: 'Data Pipeline Review', domain: 'Data Engineering', experience: '4+ years' },
    ]);

    const [recommendedConnections] = useState([
        { id: 1, name: 'Dr. Sarah Chen', expertise: 'AI Ethics', matchScore: '95%' },
        { id: 2, name: 'Mark Thompson', expertise: 'Cloud Architecture', matchScore: '88%' },
        { id: 3, name: 'Lisa Kumar', expertise: 'Data Science', matchScore: '85%' },
    ]);

    const [feedbackRequests] = useState([
        { id: 1, from: 'AI Startup Team', project: 'ML Implementation', date: '2024-04-10' },
        { id: 2, from: 'Research Group B', project: 'Data Analysis', date: '2024-04-12' },
    ]);

    const [connections] = useState([
        { id: 1, name: 'Dr. Sarah Chen', role: 'AI Ethics Expert', status: 'online', lastMessage: '2 hours ago' },
        { id: 2, name: 'Mark Thompson', role: 'Cloud Architect', status: 'offline', lastMessage: '1 day ago' },
        { id: 3, name: 'Lisa Kumar', role: 'Data Scientist', status: 'online', lastMessage: '5 mins ago' },
        { id: 4, name: 'John Doe', role: 'ML Engineer', status: 'away', lastMessage: '3 hours ago' },
    ]);

    const [activeSection, setActiveSection] = useState('report');

    // New state variables for popups
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [selectedFeedback, setSelectedFeedback] = useState(null);
    const [selectedChat, setSelectedChat] = useState(null);
    const [feedbackText, setFeedbackText] = useState('');
    const [chatMessage, setChatMessage] = useState('');

    // Sample chat messages
    const [chatMessages] = useState({
        1: [
            { id: 1, sender: 'Dr. Sarah Chen', message: 'Hello! How is the AI project going?', time: '2 hours ago' },
            { id: 2, sender: 'You', message: 'Going well! Making progress on the ethics framework.', time: '1 hour ago' },
        ],
        2: [
            { id: 1, sender: 'Mark Thompson', message: 'Can we discuss the cloud architecture?', time: '1 day ago' },
        ],
        // ... add more messages for other connections
    });

    // Function to handle request details
    const handleRequestDetails = (request) => {
        setSelectedRequest(request);
    };

    // Function to handle feedback submission
    const handleFeedbackSubmit = (request) => {
        if (feedbackText.trim()) {
            // Here you would typically make an API call to save the feedback
            console.log('Feedback submitted:', feedbackText);
            setFeedbackText('');
            setSelectedFeedback(null);
        }
    };

    // Function to handle chat messages
    const handleSendMessage = (connectionId) => {
        if (chatMessage.trim()) {
            // Here you would typically make an API call to send the message
            console.log('Message sent:', chatMessage);
            setChatMessage('');
        }
    };

    // Popup components
    const RequestDetailsPopup = ({ request, onClose }) => (
        <div className="mentor-collaboration-popup-overlay">
            <div className="mentor-collaboration-popup">
                <button className="popup-close-btn" onClick={onClose}>
                    <FaTimes />
                </button>
                <h2>{request.title}</h2>
                <div className="popup-content">
                    <p><strong>Domain:</strong> {request.domain}</p>
                    <p><strong>Experience Required:</strong> {request.experience}</p>
                    <p><strong>Description:</strong> Detailed project description and requirements would go here.</p>
                    <div className="popup-actions">
                        <button className="mentor-collaboration-action-button">Accept Request</button>
                        <button className="mentor-collaboration-action-button secondary">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    );

    const FeedbackPopup = ({ request, onClose }) => (
        <div className="mentor-collaboration-popup-overlay">
            <div className="mentor-collaboration-popup">
                <button className="popup-close-btn" onClick={onClose}>
                    <FaTimes />
                </button>
                <h2>Provide Feedback</h2>
                <div className="popup-content">
                    <p><strong>Project:</strong> {request.project}</p>
                    <p><strong>From:</strong> {request.from}</p>
                    <textarea
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        placeholder="Enter your feedback here..."
                        className="feedback-textarea"
                    />
                    <div className="popup-actions">
                        <button 
                            className="mentor-collaboration-action-button"
                            onClick={() => handleFeedbackSubmit(request)}
                        >
                            Submit Feedback
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const ChatPopup = ({ connection, onClose }) => (
        <div className="mentor-collaboration-popup-overlay">
            <div className="mentor-collaboration-popup chat">
                <button className="popup-close-btn" onClick={onClose}>
                    <FaTimes />
                </button>
                <div className="chat-header">
                    <h2>{connection.name}</h2>
                    <span className={`status-indicator ${connection.status}`}></span>
                </div>
                <div className="chat-messages">
                    {chatMessages[connection.id]?.map((msg) => (
                        <div key={msg.id} className={`chat-message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
                            <p>{msg.message}</p>
                            <span className="message-time">{msg.time}</span>
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        placeholder="Type a message..."
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(connection.id)}
                    />
                    <button onClick={() => handleSendMessage(connection.id)}>
                        <FaComment />
                    </button>
                </div>
            </div>
        </div>
    );

    const renderStatsCards = () => {
        return (
            <div className="mentor-collaboration-stats-grid">
                <div className="mentor-collaboration-stats-card">
                    <FaProjectDiagram className="mentor-collaboration-stats-icon" />
                    <div className="mentor-collaboration-stats-content">
                        <h3>15</h3>
                        <p>Active Projects</p>
                    </div>
                </div>
                <div className="mentor-collaboration-stats-card">
                    <FaHandshake className="mentor-collaboration-stats-icon" />
                    <div className="mentor-collaboration-stats-content">
                        <h3>28</h3>
                        <p>Completed Projects</p>
                    </div>
                </div>
                <div className="mentor-collaboration-stats-card">
                    <FaChartLine className="mentor-collaboration-stats-icon" />
                    <div className="mentor-collaboration-stats-content">
                        <h3>92%</h3>
                        <p>Success Rate</p>
                    </div>
                </div>
                <div className="mentor-collaboration-stats-card">
                    <FaChartBar className="mentor-collaboration-stats-icon" />
                    <div className="mentor-collaboration-stats-content">
                        <h3>4.8/5</h3>
                        <p>Average Rating</p>
                    </div>
                </div>
            </div>
        );
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'requests':
                return (
                    <div className="mentor-collaboration-dashboard-card">
                        <div className="mentor-collaboration-card-header">
                            <FaUserFriends className="mentor-collaboration-card-icon" />
                            <h2>Collaboration Requests</h2>
                        </div>
                        <div className="mentor-collaboration-card-content">
                            {requests.map(request => (
                                <div key={request.id} className="mentor-collaboration-request-item">
                                    <h3>{request.title}</h3>
                                    <p>Domain: {request.domain}</p>
                                    <p>Required Experience: {request.experience}</p>
                                    <button 
                                        className="mentor-collaboration-action-button"
                                        onClick={() => handleRequestDetails(request)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'activeCollaborations':
                return (
                    <div className="mentor-collaboration-dashboard-card">
                        <div className="mentor-collaboration-card-header">
                            <FaProjectDiagram className="mentor-collaboration-card-icon" />
                            <h2>Active Collaborations</h2>
                        </div>
                        <div className="mentor-collaboration-card-content">
                            {activeCollaborations.map(collab => (
                                <div key={collab.id} className="mentor-collaboration-collab-item">
                                    <h3>{collab.name}</h3>
                                    <div className="mentor-collaboration-progress-bar">
                                        <div className="mentor-collaboration-progress" style={{width: `${collab.progress}%`}}></div>
                                    </div>
                                    <p>Next Meeting: {collab.nextMeeting}</p>
                                    <p>Milestones: {collab.milestones}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'recommendedConnections':
                return (
                    <div className="mentor-collaboration-dashboard-card">
                        <div className="mentor-collaboration-card-header">
                            <FaUserFriends className="mentor-collaboration-card-icon" />
                            <h2>Recommended Connections</h2>
                        </div>
                        <div className="mentor-collaboration-card-content">
                            {recommendedConnections.map(connection => (
                                <div key={connection.id} className="mentor-collaboration-connection-item">
                                    <h3>{connection.name}</h3>
                                    <p>Expertise: {connection.expertise}</p>
                                    <p>Match Score: {connection.matchScore}</p>
                                    <button className="mentor-collaboration-action-button">Connect</button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'feedbackRequests':
                return (
                    <div className="mentor-collaboration-dashboard-card">
                        <div className="mentor-collaboration-card-header">
                            <FaComment className="mentor-collaboration-card-icon" />
                            <h2>Feedback Requests</h2>
                        </div>
                        <div className="mentor-collaboration-card-content">
                            {feedbackRequests.map(request => (
                                <div key={request.id} className="mentor-collaboration-feedback-item">
                                    <h3>From: {request.from}</h3>
                                    <p>Project: {request.project}</p>
                                    <p>Due: {request.date}</p>
                                    <button 
                                        className="mentor-collaboration-action-button"
                                        onClick={() => setSelectedFeedback(request)}
                                    >
                                        Provide Feedback
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'connections':
                return (
                    <div className="mentor-collaboration-dashboard-card">
                        <div className="mentor-collaboration-card-header">
                            <FaUserFriends className="mentor-collaboration-card-icon" />
                            <h2>My Connections</h2>
                        </div>
                        <div className="mentor-collaboration-card-content">
                            <div className="mentor-collaboration-connections-grid">
                                {connections.map(connection => (
                                    <div key={connection.id} className="mentor-collaboration-connection-card">
                                        <div className="connection-status-indicator" data-status={connection.status}></div>
                                        <h3>{connection.name}</h3>
                                        <p className="connection-role">{connection.role}</p>
                                        <div className="connection-actions">
                                            <button 
                                                className="connection-action-btn"
                                                onClick={() => setSelectedChat(connection)}
                                            >
                                                <FaComment /> Chat
                                            </button>
                                        </div>
                                        <span className="last-message-time">Last active: {connection.lastMessage}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'report':
            default:
                return (
                    <div className="mentor-collaboration-dashboard-card">
                        <div className="mentor-collaboration-card-header">
                            <FaChartLine className="mentor-collaboration-card-icon" />
                            <h2>Collaboration Report</h2>
                        </div>
                        <div className="mentor-collaboration-card-content">
                            <p>Summary of all collaborations and their outcomes.</p>
                            <p>Active Projects: 15</p>
                            <p>Completed Projects: 28</p>
                            <p>Success Rate: 92%</p>
                            <p>Average Rating: 4.8/5</p>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="mentor-collaboration-container">
            <h1 className="mentor-collaboration-page-title">Collaboration Hub</h1>
            
            {/* Stats Cards at the top */}
            {renderStatsCards()}

            {/* Single Menu Bar with icons */}
            <div className="mentor-collaboration-menu-bar">
                <button 
                    className={`mentor-collaboration-menu-button ${activeSection === 'requests' ? 'active' : ''}`}
                    onClick={() => setActiveSection('requests')}
                >
                    <FaUserFriends className="mentor-collaboration-menu-icon" />
                    Requests
                </button>
                <button 
                    className={`mentor-collaboration-menu-button ${activeSection === 'activeCollaborations' ? 'active' : ''}`}
                    onClick={() => setActiveSection('activeCollaborations')}
                >
                    <FaProjectDiagram className="mentor-collaboration-menu-icon" />
                    Active
                </button>
                <button 
                    className={`mentor-collaboration-menu-button ${activeSection === 'recommendedConnections' ? 'active' : ''}`}
                    onClick={() => setActiveSection('recommendedConnections')}
                >
                    <FaHandshake className="mentor-collaboration-menu-icon" />
                    Recommended
                </button>
                <button 
                    className={`mentor-collaboration-menu-button ${activeSection === 'feedbackRequests' ? 'active' : ''}`}
                    onClick={() => setActiveSection('feedbackRequests')}
                >
                    <FaComment className="mentor-collaboration-menu-icon" />
                    Feedback
                </button>
                <button 
                    className={`mentor-collaboration-menu-button ${activeSection === 'connections' ? 'active' : ''}`}
                    onClick={() => setActiveSection('connections')}
                >
                    <FaUserFriends className="mentor-collaboration-menu-icon" />
                    Connections
                </button>
            </div>

            {/* Content Section */}
            <div className="mentor-collaboration-content">
                {renderSection()}
            </div>

            {selectedRequest && (
                <RequestDetailsPopup 
                    request={selectedRequest} 
                    onClose={() => setSelectedRequest(null)} 
                />
            )}
            
            {selectedFeedback && (
                <FeedbackPopup 
                    request={selectedFeedback} 
                    onClose={() => setSelectedFeedback(null)} 
                />
            )}
            
            {selectedChat && (
                <ChatPopup 
                    connection={selectedChat} 
                    onClose={() => setSelectedChat(null)} 
                />
            )}
        </div>
    );
};

export default MentorCollaboration;