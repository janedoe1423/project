import React from 'react';
import { 
    FaComments, FaPhone, FaUserTie, FaClipboardList,
    FaUsers, FaRobot, FaBookReader, FaVideo,
    FaFileAlt, FaHandHoldingHeart
} from 'react-icons/fa';
import './ipr_support.css';

const IprSupport = () => {
    const supportFeatures = [
        {
            title: "Live Chat Support",
            icon: <FaComments />,
            description: "Get instant help with your IPR-related queries",
            features: ["24/7 Availability", "Quick Response", "Expert Guidance"],
            action: "Start Chat",
            color: "#2563EB" // Blue
        },
        {
            title: "IPR Helpline",
            icon: <FaPhone />,
            description: "Connect with official government IPR helplines",
            features: ["Toll-Free Numbers", "Regional Support", "Multiple Languages"],
            action: "View Numbers",
            color: "#059669" // Green
        },
        {
            title: "Ask an Expert",
            icon: <FaUserTie />,
            description: "Public Q&A sessions with IPR professionals",
            features: ["Scheduled Sessions", "Expert Panel", "Topic-wise Discussions"],
            action: "Book Session",
            color: "#DC2626" // Red
        },
        {
            title: "Process Explainers",
            icon: <FaClipboardList />,
            description: "Simplified guides for complex IPR procedures",
            features: ["Step-by-Step Guides", "Visual Aids", "Downloadable PDFs"],
            action: "View Guides",
            color: "#7C3AED" // Purple
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
            title: "Video Q&A",
            icon: <FaVideo />,
            description: "Pre-recorded sessions on common topics",
            features: ["Curated Content", "Expert Answers", "Searchable Library"],
            action: "Watch Videos",
            color: "#0D9488" // Teal
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
                        >
                            {feature.action}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IprSupport;