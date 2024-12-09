import React from 'react';
import { 
    FaLightbulb, FaCopyright, FaGlobe, FaUsers,
    FaCheckCircle, FaChartLine, FaClock, FaRocket,
    FaExclamationTriangle, FaTrophy
} from 'react-icons/fa';
import './ipr_overview.css';

const IPROverview = () => {
    const sections = [
        {
            title: "What is IPR?",
            icon: <FaLightbulb />,
            content: "Intellectual Property Rights protect creations of the mind, including inventions, literary and artistic works, designs, symbols, names, and images used in commerce.",
            color: "#2563EB" // Blue
        },
        {
            title: "Types of IPR",
            icon: <FaCopyright />,
            content: {
                types: [
                    { name: "Patents", desc: "New inventions and technological innovations" },
                    { name: "Trademarks", desc: "Brands, logos, and distinctive signs" },
                    { name: "Copyrights", desc: "Creative works, software, and artistic content" },
                    { name: "Trade Secrets", desc: "Confidential business information" }
                ]
            },
            color: "#059669" // Green
        },
        {
            title: "Why IPR Matters",
            icon: <FaCheckCircle />,
            content: {
                benefits: [
                    "Legal Protection for Innovations",
                    "Market Competitiveness",
                    "Revenue Generation",
                    "Business Growth",
                    "Investor Attraction"
                ]
            },
            color: "#DC2626" // Red
        },
        {
            title: "Global vs. National IPR",
            icon: <FaGlobe />,
            content: {
                comparison: [
                    { aspect: "Coverage", global: "International Protection", national: "Country-Specific" },
                    { aspect: "Cost", global: "Higher Investment", national: "More Affordable" },
                    { aspect: "Process", global: "Complex Filing", national: "Streamlined" }
                ]
            },
            color: "#7C3AED" // Purple
        },
        {
            title: "Who Can File?",
            icon: <FaUsers />,
            content: {
                eligibility: [
                    "Individual Inventors",
                    "Startups and MSMEs",
                    "Large Corporations",
                    "Research Institutions",
                    "Academic Organizations"
                ]
            },
            color: "#0891B2" // Cyan
        },
        {
            title: "Common Misconceptions",
            icon: <FaExclamationTriangle />,
            content: {
                myths: [
                    { myth: "IPR is only for big companies", reality: "Accessible to all innovators" },
                    { myth: "Process is too complex", reality: "Support systems available" },
                    { myth: "Very expensive", reality: "Various fee concessions exist" }
                ]
            },
            color: "#9333EA" // Violet
        },
        {
            title: "Success Stories",
            icon: <FaTrophy />,
            content: {
                stories: [
                    { company: "TechStart", impact: "200% growth post-patent" },
                    { company: "DesignPro", impact: "Global expansion with trademark" },
                    { company: "InnovateNow", impact: "₹10Cr funding secured" }
                ]
            },
            color: "#EA580C" // Orange
        },
        {
            title: "IPR Timeline",
            icon: <FaClock />,
            content: {
                stages: [
                    { phase: "Filing", duration: "1-2 months" },
                    { phase: "Examination", duration: "12-18 months" },
                    { phase: "Grant", duration: "2-3 years" },
                    { phase: "Maintenance", duration: "20 years" }
                ]
            },
            color: "#0D9488" // Teal
        },
        {
            title: "Importance for Startups",
            icon: <FaRocket />,
            content: {
                benefits: [
                    "Competitive Advantage",
                    "Investor Confidence",
                    "Market Position",
                    "Licensing Opportunities",
                    "Valuation Boost"
                ]
            },
            color: "#DB2777" // Pink
        }
    ];

    return (
        <div className="ipr-overview">
            <div className="ipr-overview-header">
                <h1>Understanding Intellectual Property Rights</h1>
                <p>Your comprehensive guide to protecting innovations and creative works</p>
            </div>

            <div className="ipr-overview-grid">
                {sections.map((section, index) => (
                    <div 
                        className="ipr-overview-card" 
                        key={index}
                        style={{'--section-color': section.color}}
                    >
                        <div className="ipr-overview-icon" style={{color: section.color}}>
                            {section.icon}
                        </div>
                        <h2>{section.title}</h2>
                        
                        {typeof section.content === 'string' ? (
                            <p>{section.content}</p>
                        ) : (
                            <div className="ipr-overview-content">
                                {section.content.types && (
                                    <div className="ipr-overview-types">
                                        {section.content.types.map((type, i) => (
                                            <div key={i} className="ipr-overview-type">
                                                <h4>{type.name}</h4>
                                                <p>{type.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                
                                {section.content.benefits && (
                                    <ul className="ipr-overview-benefits">
                                        {section.content.benefits.map((benefit, i) => (
                                            <li key={i}>{benefit}</li>
                                        ))}
                                    </ul>
                                )}

                                {section.content.comparison && (
                                    <div className="ipr-overview-comparison">
                                        {section.content.comparison.map((item, i) => (
                                            <div key={i} className="comparison-row">
                                                <span>{item.aspect}</span>
                                                <span>{item.global}</span>
                                                <span>{item.national}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.content.myths && (
                                    <div className="ipr-overview-myths">
                                        {section.content.myths.map((item, i) => (
                                            <div key={i} className="myth-item">
                                                <p className="myth">Myth: {item.myth}</p>
                                                <p className="reality">Reality: {item.reality}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.content.stories && (
                                    <div className="ipr-overview-stories">
                                        {section.content.stories.map((story, i) => (
                                            <div key={i} className="story-item">
                                                <h4>{story.company}</h4>
                                                <p>{story.impact}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.content.stages && (
                                    <div className="ipr-overview-timeline">
                                        {section.content.stages.map((stage, i) => (
                                            <div key={i} className="timeline-item">
                                                <span className="phase">{stage.phase}</span>
                                                <span className="duration">{stage.duration}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IPROverview;