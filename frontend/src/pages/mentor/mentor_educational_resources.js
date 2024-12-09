// frontend/src/pages/mentor/educational_resources.js
import React from 'react';
import { 
    FaBook, FaChalkboardTeacher, FaRobot, FaFileAlt,
    FaLightbulb, FaBell, FaUsers, FaBookmark,
    FaPlusCircle, FaStar
} from 'react-icons/fa';
import './mentor_educational_resources.css';

const MentorEducationalResources = () => {
    const resources = [
        {
            title: "Resource Library",
            icon: <FaBook />,
            description: "Access our comprehensive collection of mentoring materials",
            items: ["Articles", "Video Tutorials", "Case Studies", "Research Papers"],
            action: "Browse Library",
            color: "#2563EB" // Blue
        },
        {
            title: "Workshops",
            icon: <FaChalkboardTeacher />,
            description: "Enhance your mentoring skills through interactive sessions",
            items: ["Upcoming Sessions", "Past Recordings", "Workshop Materials"],
            action: "View Schedule",
            color: "#059669" // Green
        },
        {
            title: "AI-Powered Recommendations",
            icon: <FaRobot />,
            description: "Personalized course suggestions based on your profile",
            items: ["Skill Gap Analysis", "Learning Path", "Progress Tracking"],
            action: "Get Recommendations",
            color: "#DC2626" // Red
        },
        {
            title: "Templates & Tools",
            icon: <FaFileAlt />,
            description: "Ready-to-use templates for effective mentoring",
            items: ["Session Plans", "Progress Trackers", "Feedback Forms"],
            action: "Download Templates",
            color: "#7C3AED" // Purple
        },
        {
            title: "Best Practices",
            icon: <FaLightbulb />,
            description: "Expert guidelines for handling different mentoring scenarios",
            items: ["Mentoring Techniques", "Communication Tips", "Problem Solving"],
            action: "Learn More",
            color: "#0891B2" // Cyan
        },
        {
            title: "Policy Updates",
            icon: <FaBell />,
            description: "Stay informed about latest startup policies and guidelines",
            items: ["Recent Changes", "Upcoming Policies", "Impact Analysis"],
            action: "View Updates",
            color: "#9333EA" // Violet
        },
        {
            title: "Mentor Forums",
            icon: <FaUsers />,
            description: "Connect and share experiences with fellow mentors",
            items: ["Discussion Boards", "Success Stories", "Challenges"],
            action: "Join Discussion",
            color: "#EA580C" // Orange
        },
        {
            title: "Bookmarks",
            icon: <FaBookmark />,
            description: "Quick access to your saved resources",
            items: ["Saved Articles", "Favorite Templates", "Marked Updates"],
            action: "View Bookmarks",
            color: "#0D9488" // Teal
        },
        {
            title: "Request Resources",
            icon: <FaPlusCircle />,
            description: "Suggest new resources or topics for the platform",
            items: ["Submit Request", "Track Status", "Popular Requests"],
            action: "Make Request",
            color: "#DB2777" // Pink
        },
        {
            title: "Featured Content",
            icon: <FaStar />,
            description: "Trending and most valuable resources for mentors",
            items: ["Top Articles", "Popular Workshops", "Essential Templates"],
            action: "Explore Featured",
            color: "#B45309" // Amber
        }
    ];

    return (
        <div className="mentor-resources">
            <div className="mentor-resources-header">
                <h1>Educational Resources</h1>
                <p>Enhance your mentoring journey with our curated resources</p>
            </div>

            <div className="mentor-resources-grid">
                {resources.map((resource, index) => (
                    <div 
                        className="mentor-resources-card" 
                        key={index}
                        style={{'--resource-color': resource.color}}
                    >
                        <div className="mentor-resources-icon" style={{color: resource.color}}>
                            {resource.icon}
                        </div>
                        <h3>{resource.title}</h3>
                        <p>{resource.description}</p>
                        <ul className="mentor-resources-list">
                            {resource.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <button 
                            className="mentor-resources-button"
                            style={{backgroundColor: resource.color}}
                        >
                            {resource.action}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MentorEducationalResources;