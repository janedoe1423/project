import React, { useState } from 'react';
import { FaBook, FaClipboardList, FaCoins, FaQuestion, 
         FaExclamationTriangle, FaPlay, FaGlobe, FaBookOpen, 
         FaBalanceScale, FaFileDownload, FaTimes } from 'react-icons/fa';
import './ipr_resources.css';

const IprResources = () => {
    const [selectedResource, setSelectedResource] = useState(null);

    const resourceDetails = {
        "IPR Filing Process": {
            sections: [
                {
                    title: "Patent Filing Steps",
                    content: [
                        "Preliminary Patent Search & Prior Art Analysis",
                        "Drafting Patent Specification & Claims",
                        "Filing Provisional Application (Optional, valid for 12 months)",
                        "Filing Complete Application with Forms 1, 2, 3, 5",
                        "Publication after 18 months",
                        "Request for Examination (within 48 months)",
                        "Responding to Office Actions",
                        "Grant and Certificate Issuance",
                        "Regular Maintenance & Renewal"
                    ]
                },
                {
                    title: "Trademark Registration",
                    content: [
                        "Comprehensive Trademark Search",
                        "Classification of Goods/Services",
                        "Filing TM-A Application",
                        "Vienna Classification for Logo",
                        "Examination Report (within 3-4 months)",
                        "Publication in Trademark Journal",
                        "Opposition Period (4 months)",
                        "Registration Certificate",
                        "Renewal every 10 years"
                    ]
                },
                {
                    title: "Copyright Protection",
                    content: [
                        "Work Categorization (Literary/Artistic/Musical)",
                        "Preparing Form XIV",
                        "Collecting Supporting Documents",
                        "Filing Application with Copyright Office",
                        "Examination Process",
                        "Registration Certificate Issuance"
                    ]
                },
                {
                    title: "Industrial Design Registration",
                    content: [
                        "Design Search and Novelty Assessment",
                        "Preparing Design Representations",
                        "Filing Form 1 and Form 2",
                        "Design Classification",
                        "Examination and Registration",
                        "Protection for 10 years, extendable by 5 years"
                    ]
                },
                {
                    title: "Common Filing Errors to Avoid",
                    content: [
                        "Incomplete disclosure in specifications",
                        "Missing priority documents",
                        "Incorrect classification selection",
                        "Late responses to office actions",
                        "Improper fee payment",
                        "Missing power of attorney"
                    ]
                },
                {
                    title: "Expedited Processing for Startups",
                    content: [
                        "DPIIT Recognition Certificate",
                        "80% fee reduction for startups",
                        "Expedited examination option",
                        "Facilitator assistance program",
                        "Special startup cell support"
                    ]
                }
            ],
            downloads: [
                "Complete Process Flowchart",
                "Timeline Document",
                "Document Checklist",
                "Fee Calculator",
                "Sample Forms Package",
                "Office Action Response Templates"
            ],
            officialLinks: [
                {
                    name: "IP India Portal",
                    url: "https://ipindia.gov.in"
                },
                {
                    name: "WIPO Portal",
                    url: "https://www.wipo.int"
                },
                {
                    name: "Patent Search",
                    url: "https://ipindiaservices.gov.in/publicsearch"
                }
            ]
        },
        "IPR Checklist": {
            sections: [
                {
                    title: "Document Requirements",
                    content: [
                        "Identity Proof",
                        "Address Proof",
                        "Technical Documents",
                        "Drawings and Diagrams",
                        "Priority Documents"
                    ]
                },
                {
                    title: "Application Forms",
                    content: [
                        "Form 1 - Application Form",
                        "Form 2 - Provisional/Complete Specification",
                        "Form 3 - Statement and Undertaking",
                        "Form 5 - Declaration of Inventorship"
                    ]
                }
            ],
            downloads: ["Complete Checklist", "Sample Forms", "Document Templates"]
        },
        // Add similar detailed content for other resources...
    };

    const ResourceModal = ({ resource, onClose }) => (
        <div className="resource-modal-overlay" onClick={onClose}>
            <div className="resource-modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header" style={{ backgroundColor: resource.color }}>
                    <div className="modal-title">
                        <span className="modal-icon">{resource.icon}</span>
                        <h2>{resource.title}</h2>
                    </div>
                    <button className="modal-close" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                <div className="modal-body">
                    <p className="modal-description">{resource.description}</p>

                    {resourceDetails[resource.title]?.sections.map((section, index) => (
                        <div key={index} className="modal-section">
                            <h3>{section.title}</h3>
                            <ul>
                                {section.content.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {resourceDetails[resource.title]?.downloads && (
                        <div className="modal-downloads">
                            <h3>Downloads</h3>
                            <div className="download-buttons">
                                {resourceDetails[resource.title].downloads.map((item, i) => (
                                    <button key={i} className="download-button">
                                        <FaFileDownload /> {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {resourceDetails[resource.title]?.officialLinks && (
                        <div className="modal-official-links">
                            <h3>Official Portals</h3>
                            <div className="official-links-grid">
                                {resourceDetails[resource.title].officialLinks.map((link, i) => (
                                    <a 
                                        key={i} 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="official-link-button"
                                    >
                                        <FaGlobe /> {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

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
                        onClick={() => setSelectedResource(resource)}
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
                        <button 
                            className="resource-button" 
                            style={{backgroundColor: resource.color}}
                            onClick={() => setSelectedResource(resource)}
                        >
                            Learn More
                        </button>
                    </div>
                ))}
            </div>

            {selectedResource && (
                <ResourceModal 
                    resource={selectedResource} 
                    onClose={() => setSelectedResource(null)} 
                />
            )}
        </div>
    );
};

export default IprResources;
