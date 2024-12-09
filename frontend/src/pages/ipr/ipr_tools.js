import React from 'react';
import { 
    FaSearch, FaCalculator, FaClock, FaSitemap, 
    FaClipboardCheck, FaTrademark, FaFileAlt,
    FaBell, FaChartLine, FaChessKnight
} from 'react-icons/fa';
import './ipr_tools.css';

const IprTools = () => {
    const tools = [
        {
            title: "Prior Art Search Helper",
            icon: <FaSearch />,
            description: "Comprehensive search across patent databases worldwide",
            features: ["Multiple Database Access", "Guided Search Process", "Result Analysis"],
            color: "#2563EB", // Blue
            action: "Start Search"
        },
        {
            title: "Fee Calculator",
            icon: <FaCalculator />,
            description: "Estimate complete IPR filing and maintenance costs",
            features: ["Jurisdiction-wise Calculation", "Multi-year Projection", "Fee Breakdown"],
            color: "#059669", // Green
            action: "Calculate Fees"
        },
        {
            title: "Patent Expiry Checker",
            icon: <FaClock />,
            description: "Check and track patent expiration dates",
            features: ["Validity Period", "Extension Options", "Renewal Deadlines"],
            color: "#DC2626", // Red
            action: "Check Expiry"
        },
        {
            title: "IP Classification Helper",
            icon: <FaSitemap />,
            description: "Find the right category for your intellectual property",
            features: ["Category Finder", "Classification Guide", "Filing Recommendations"],
            color: "#7C3AED", // Purple
            action: "Classify IP"
        },
        {
            title: "Filing Readiness Assessment",
            icon: <FaClipboardCheck />,
            description: "Evaluate your preparation for IPR filing",
            features: ["Readiness Checklist", "Gap Analysis", "Preparation Guide"],
            color: "#0891B2", // Cyan
            action: "Start Assessment"
        },
        {
            title: "Trademark Availability Checker",
            icon: <FaTrademark />,
            description: "Search trademark databases for availability",
            features: ["Global Database Search", "Similarity Check", "Class-wise Search"],
            color: "#9333EA", // Violet
            action: "Check Availability"
        },
        {
            title: "Document Templates",
            icon: <FaFileAlt />,
            description: "Standardized templates for various IPR documents",
            features: ["Multiple Formats", "Customizable Templates", "Filing Guidelines"],
            color: "#EA580C", // Orange
            action: "View Templates"
        },
        {
            title: "Deadline Tracker",
            icon: <FaBell />,
            description: "Track important dates and set reminders",
            features: ["Custom Alerts", "Timeline View", "Priority Management"],
            color: "#B45309", // Amber
            action: "Set Reminders"
        },
        {
            title: "IPR Value Estimator",
            icon: <FaChartLine />,
            description: "Calculate estimated value of your intellectual property",
            features: ["Market Analysis", "Value Metrics", "Comparison Tools"],
            color: "#DB2777", // Pink
            action: "Estimate Value"
        },
        {
            title: "IPR Strategy Planner",
            icon: <FaChessKnight />,
            description: "Align your IP strategy with business goals",
            features: ["Strategy Builder", "Goal Setting", "Action Planning"],
            color: "#4F46E5", // Indigo
            action: "Plan Strategy"
        }
    ];

    return (
        <div className="ipr-tools">
            <div className="tools-header">
                <h1>Tools & Calculators</h1>
                <p>Interactive tools to simplify your IPR journey</p>
            </div>

            <div className="tools-grid">
                {tools.map((tool, index) => (
                    <div 
                        className="tool-card" 
                        key={index}
                        style={{'--tool-color': tool.color}}
                    >
                        <div className="tool-icon" style={{color: tool.color}}>
                            {tool.icon}
                        </div>
                        <h3>{tool.title}</h3>
                        <p>{tool.description}</p>
                        <ul className="tool-features">
                            {tool.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <button 
                            className="tool-button"
                            style={{backgroundColor: tool.color}}
                        >
                            {tool.action}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IprTools;
