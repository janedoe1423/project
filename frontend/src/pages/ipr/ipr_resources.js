import React from 'react';
import { FaBook, FaClipboardList, FaCoins, FaQuestion, 
         FaExclamationTriangle, FaPlay, FaGlobe, FaBookOpen, 
         FaBalanceScale, FaFileDownload } from 'react-icons/fa';
import './ipr_resources.css';

const IprResources = () => {
    const resources = [
        {
            title: "IPR Filing Process",
            icon: <FaClipboardList />,
            description: "Step-by-step guide for patents, trademarks, and copyrights",
            content: ["Patent Filing Steps", "Trademark Registration", "Copyright Protection"],
            color: "#4F46E5" // Indigo
        },
        {
            title: "IPR Checklist",
            icon: <FaFileDownload />,
            description: "Downloadable checklist of required documents and details",
            content: ["Document Requirements", "Application Forms", "Supporting Materials"],
            color: "#059669" // Emerald
        },
        {
            title: "IPR Costs",
            icon: <FaCoins />,
            description: "Estimated costs for filing and maintaining IPR",
            content: ["Filing Fees", "Maintenance Costs", "Professional Charges"],
            color: "#B45309" // Amber
        },
        {
            title: "IPR FAQs",
            icon: <FaQuestion />,
            description: "Frequently asked questions and their answers",
            content: ["General Questions", "Process Queries", "Timeline FAQs"],
            color: "#DC2626" // Red
        },
        {
            title: "IPR Do's and Don'ts",
            icon: <FaExclamationTriangle />,
            description: "Guidelines to avoid mistakes during filing",
            content: ["Best Practices", "Common Mistakes", "Success Tips"],
            color: "#7C3AED" // Purple
        },
        {
            title: "Interactive Tutorials",
            icon: <FaPlay />,
            description: "Videos and animations explaining key concepts",
            content: ["Video Guides", "Interactive Modules", "Training Sessions"],
            color: "#2563EB" // Blue
        },
        {
            title: "Glossary of Terms",
            icon: <FaBook />,
            description: "Technical jargon used in IPR process",
            content: ["Legal Terms", "Technical Definitions", "Abbreviations"],
            color: "#DB2777" // Pink
        },
        {
            title: "Country-Specific Regulations",
            icon: <FaGlobe />,
            description: "Rules in different jurisdictions",
            content: ["International Laws", "Regional Guidelines", "Local Requirements"],
            color: "#0891B2" // Cyan
        },
        {
            title: "E-books and Guides",
            icon: <FaBookOpen />,
            description: "Free and premium resources on IPR",
            content: ["Beginner Guides", "Advanced Materials", "Case Studies"],
            color: "#9333EA" // Violet
        },
        {
            title: "Legal Limitations",
            icon: <FaBalanceScale />,
            description: "What IPR covers and doesn't cover",
            content: ["Scope of Protection", "Exclusions", "Limitations"],
            color: "#EA580C" // Orange
        }
    ];

    return (
        <div className="ipr-resources">
            <div className="resources-header">
                <h1>Resources & Knowledge Hub</h1>
                <p>Comprehensive guides and tools for your IPR journey</p>
            </div>

            <div className="resources-grid">
                {resources.map((resource, index) => (
                    <div 
                        className="resource-card" 
                        key={index}
                        style={{'--hover-color': resource.color}}
                    >
                        <div className="resource-icon" style={{color: resource.color}}>
                            {resource.icon}
                        </div>
                        <h3>{resource.title}</h3>
                        <p>{resource.description}</p>
                        <ul className="resource-content">
                            {resource.content.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <button className="resource-button" style={{backgroundColor: resource.color}}>
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IprResources;
