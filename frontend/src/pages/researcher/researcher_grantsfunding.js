import React, { useState } from 'react';
import { 
    FaCalendarAlt, FaCheckCircle, FaFileAlt, FaHistory,
    FaLightbulb, FaBook, FaChartLine, FaBell 
} from 'react-icons/fa';
import './researcher_grantsfunding.css';

const ResearchGrantsFunding = () => {
    const [activeTab, setActiveTab] = useState('available');

    const grantData = {
        availableGrants: [
            {
                id: 1,
                title: "AI Research Innovation Grant",
                amount: "$250,000",
                deadline: "2024-06-30",
                category: "Technology",
                matchScore: 95,
                status: "Open",
                description: "Research funding for innovative AI applications"
            },
            {
                id: 2,
                title: "Climate Change Research Fund",
                amount: "$180,000",
                deadline: "2024-07-15",
                category: "Environmental",
                matchScore: 88,
                status: "Open",
                description: "Supporting climate change research initiatives"
            }
            // Add more grants...
        ],
        applications: [
            {
                id: 1,
                grantName: "Medical Research Grant 2024",
                submissionDate: "2024-02-15",
                status: "Under Review",
                amount: "$150,000",
                progress: 65
            }
            // Add more applications...
        ],
        fundingHistory: [
            {
                id: 1,
                grantName: "Tech Innovation Fund",
                year: "2023",
                amount: "$200,000",
                status: "Completed",
                outcomes: "Published 3 papers, 1 patent filed"
            }
            // Add more history...
        ]
    };

    return (
        <div className="grants-container">
            <header className="grants-header">
                <h1>Research Grants & Funding</h1>
                <div className="quick-stats">
                    <div className="stat-card">
                        <FaChartLine />
                        <div>
                            <h3>Active Applications</h3>
                            <span>4 Pending</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <FaCalendarAlt />
                        <div>
                            <h3>Upcoming Deadlines</h3>
                            <span>3 This Month</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <FaHistory />
                        <div>
                            <h3>Total Funding</h3>
                            <span>$1.2M</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="grants-tabs">
                <button 
                    className={`tab-btn ${activeTab === 'available' ? 'active' : ''}`}
                    onClick={() => setActiveTab('available')}
                >
                    <FaFileAlt /> Available Grants
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
                    onClick={() => setActiveTab('applications')}
                >
                    <FaCheckCircle /> My Applications
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'recommendations' ? 'active' : ''}`}
                    onClick={() => setActiveTab('recommendations')}
                >
                    <FaLightbulb /> Recommendations
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
                    onClick={() => setActiveTab('history')}
                >
                    <FaHistory /> Funding History
                </button>
            </div>

            {/* Available Grants Section */}
            {activeTab === 'available' && (
                <div className="grants-grid">
                    {grantData.availableGrants.map(grant => (
                        <div key={grant.id} className="grant-card">
                            <div className="grant-header">
                                <span className="grant-category">{grant.category}</span>
                                <span className="match-score">
                                    {grant.matchScore}% Match
                                </span>
                            </div>
                            <h3>{grant.title}</h3>
                            <p>{grant.description}</p>
                            <div className="grant-details">
                                <div className="detail">
                                    <span>Amount</span>
                                    <strong>{grant.amount}</strong>
                                </div>
                                <div className="detail">
                                    <span>Deadline</span>
                                    <strong>{new Date(grant.deadline).toLocaleDateString()}</strong>
                                </div>
                            </div>
                            <div className="grant-actions">
                                <button className="btn-apply">Apply Now</button>
                                <button className="btn-save">Save</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Applications Section */}
            {activeTab === 'applications' && (
                <div className="applications-list">
                    {grantData.applications.map(app => (
                        <div key={app.id} className="application-card">
                            <div className="app-header">
                                <h3>{app.grantName}</h3>
                                <span className={`status ${app.status.toLowerCase()}`}>
                                    {app.status}
                                </span>
                            </div>
                            <div className="app-progress">
                                <div 
                                    className="progress-bar" 
                                    style={{width: `${app.progress}%`}}
                                />
                            </div>
                            <div className="app-details">
                                <span>Submitted: {app.submissionDate}</span>
                                <span>Amount: {app.amount}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add other tab content sections */}
        </div>
    );
};

export default ResearchGrantsFunding;