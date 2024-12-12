import React, { useState } from 'react';
import { 
    FaComments, FaPhone, FaUserTie, FaClipboardList,
    FaUsers, FaRobot, FaBookReader, FaVideo,
    FaFileAlt, FaHandHoldingHeart
} from 'react-icons/fa';
import './ipr_support.css';

const IprSupport = () => {
    const [showChat, setShowChat] = useState(false);
    const [showBooking, setShowBooking] = useState(false);

    const supportFeatures = [
        
        {
            title: "Ask an Expert",
            icon: <FaUserTie />,
            description: "Public Q&A sessions with IPR professionals",
            features: ["Scheduled Sessions", "Expert Panel", "Topic-wise Discussions"],
            action: "Book Session",
            color: "#DC2626",
            onClick: () => setShowBooking(true)
        },
       
        {
            title: "Interactive Forums",
            icon: <FaUsers />,
            description: "Connect with peers and share experiences",
            features: ["Community Support", "Topic Categories", "Expert Moderation"],
            action: "Join Forum",
            color: "#0891B2" // Cyan
        },
        {
            title: "AI Document Analyzer",
            icon: <FaRobot />,
            description: "Check document formatting and compliance",
            features: ["Quick Analysis", "Format Checking", "Error Detection"],
            action: "Analyze Now",
            color: "#9333EA" // Violet
        },
        {
            title: "Guided Tutorials",
            icon: <FaBookReader />,
            description: "Interactive learning for first-time filers",
            features: ["Interactive Content", "Progress Tracking", "Practice Tests"],
            action: "Start Learning",
            color: "#EA580C" // Orange
        },
        
        {
            title: "Virtual Filing Mockup",
            icon: <FaFileAlt />,
            description: "Practice IPR filing in a simulated environment",
            features: ["Realistic Interface", "Sample Forms", "Instant Feedback"],
            action: "Try Demo",
            color: "#DB2777" // Pink
        },
        {
            title: "Government Scheme Finder",
            icon: <FaHandHoldingHeart />,
            description: "Find relevant government support programs",
            features: ["Eligibility Check", "Scheme Matching", "Application Support"],
            action: "Find Schemes",
            color: "#B45309" // Amber
        }
    ];

    const startChat = () => {
        // Implement chat initiation logic here
        alert("Chat started!");
        // You can replace this with actual chat integration logic
    };

    return (
        <div className="ipr-support">
            <div className="ipr-support-header">
                <h1>IPR Support System</h1>
                <p>Comprehensive assistance for your intellectual property journey</p>
            </div>

            <div className="ipr-support-grid">
                {supportFeatures.map((feature, index) => (
                    <div 
                        className="ipr-support-card" 
                        key={index}
                        style={{'--feature-color': feature.color}}
                    >
                        <div className="ipr-support-icon" style={{color: feature.color}}>
                            {feature.icon}
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                        <ul className="ipr-support-features">
                            {feature.features.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <button 
                            className="ipr-support-button"
                            style={{backgroundColor: feature.color}}
                            onClick={feature.onClick}
                        >
                            {feature.action}
                        </button>
                    </div>
                ))}
            </div>

            {showChat && (
                <div className="chat-modal">
                    <div className="chat-content">
                        {/* Chatbot component or logic here */}
                        <button onClick={() => setShowChat(false)}>Close Chat</button>
                    </div>
                </div>
            )}

            {showBooking && (
                <div className="booking-modal">
                    <div className="booking-content">
                        <h2>Expert Sessions</h2>
                        <div className="session-section">
                            <h3>Scheduled Sessions</h3>
                            <ul>
                                <li>Session 1: Understanding Patents - Date & Time</li>
                                <li>Session 2: Trademark Basics - Date & Time</li>
                                {/* Add more sessions */}
                            </ul>
                        </div>
                        <div className="session-section">
                            <h3>Expert Panel</h3>
                            <ul>
                                <li>Dr. John Doe - Patent Specialist</li>
                                <li>Ms. Jane Smith - Trademark Attorney</li>
                                {/* Add more experts */}
                            </ul>
                        </div>
                        <div className="session-section">
                            <h3>Topic-wise Discussions</h3>
                            <ul>
                                <li>Patents</li>
                                <li>Trademarks</li>
                                <li>Copyrights</li>
                                {/* Add more topics */}
                            </ul>
                        </div>
                        <button onClick={() => setShowBooking(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IprSupport;