import React, { useState } from 'react';
import { 
    FaCalendarAlt, FaCheckCircle, FaFileAlt, FaHistory,
    FaChartLine,FaEye, 
    FaFilter, FaSortAmountDown, FaSearch, FaClock, FaFileUpload
} from 'react-icons/fa';
import { Button, Badge, Modal,Dropdown } from 'react-bootstrap';
import './researcher_grantsfunding.css';

const ResearchGrantsFunding = () => {
    // State Management
    const [activeTab, setActiveTab] = useState('available');
    const [setShowModal] = useState(false);
    const [selectedGrant, setSelectedGrant] = useState(null);
    const [filterCategory, setFilterCategory] = useState('all');
    const [sortBy, setSortBy] = useState('deadline');
    const [searchQuery, setSearchQuery] = useState('');
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    // Enhanced Grant Data
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
                description: "Research funding for innovative AI applications in healthcare and automation",
                requirements: [
                    "PhD in Computer Science or related field",
                    "Previous AI research experience",
                    "Published papers in top-tier conferences"
                ],
                fundingPeriod: "2 years",
                eligibility: "Senior Researchers",
                successRate: "35%",
                previousWinners: ["MIT", "Stanford", "Berkeley"],
                keyAreas: ["Machine Learning", "Neural Networks", "Healthcare AI"],
                fundingAgency: "National Science Foundation",
                totalBudget: "$5,000,000",
                applicationProcess: [
                    "Initial Proposal",
                    "Technical Review",
                    "Panel Interview",
                    "Final Decision"
                ]
            },
            {
                id: 2,
                title: "Climate Change Research Fund",
                amount: "$180,000",
                deadline: "2024-07-15",
                category: "Environmental",
                matchScore: 88,
                status: "Open",
                description: "Supporting innovative climate change research initiatives",
                requirements: [
                    "Environmental Science background",
                    "Track record in climate research",
                    "International collaboration experience"
                ],
                fundingPeriod: "18 months",
                eligibility: "Research Teams",
                successRate: "28%",
                previousWinners: ["Harvard", "ETH Zurich", "Oxford"],
                keyAreas: ["Climate Modeling", "Sustainability", "Green Technology"],
                fundingAgency: "Environmental Protection Agency",
                totalBudget: "$3,500,000",
                applicationProcess: [
                    "Concept Note",
                    "Full Proposal",
                    "Expert Review",
                    "Final Selection"
                ]
            }
        ],
        applications: [
            {
                id: 1,
                grantName: "Medical Research Grant 2024",
                submissionDate: "2024-02-15",
                status: "Under Review",
                amount: "$150,000",
                progress: 65,
                nextDeadline: "2024-03-30",
                requiredDocuments: [
                    { name: "Ethics Approval", status: "pending" },
                    { name: "Budget Report", status: "completed" },
                    { name: "Research Timeline", status: "completed" }
                ],
                reviewerComments: "Pending ethics committee approval",
                applicationStages: [
                    { name: "Initial Submission", completed: true, date: "2024-02-15" },
                    { name: "Technical Review", completed: true, date: "2024-02-28" },
                    { name: "Ethics Review", completed: false, date: "2024-03-15" },
                    { name: "Final Decision", completed: false, date: "2024-03-30" }
                ],
                teamMembers: [
                    { name: "Dr. John Smith", role: "Principal Investigator" },
                    { name: "Dr. Sarah Johnson", role: "Co-Investigator" }
                ]
            }
        ],
        fundingHistory: [
            {
                id: 1,
                grantName: "Tech Innovation Fund",
                year: "2023",
                amount: "$200,000",
                status: "Completed",
                outcomes: [
                    "Published 3 papers in top-tier journals",
                    "Filed 1 patent for AI algorithm",
                    "Developed new machine learning framework"
                ],
                publications: [
                    {
                        title: "Novel AI Approach to Data Analysis",
                        journal: "Nature AI",
                        date: "2023-12",
                        citations: 25,
                        doi: "10.1038/ai-2023-001"
                    }
                ],
                teamMembers: ["Dr. John Doe", "Dr. Jane Smith"],
                budgetUtilization: 98,
                impactMetrics: {
                    citations: 45,
                    downloads: 1200,
                    mediaReferences: 8,
                    patents: 1
                },
                keyAchievements: [
                    "Best Paper Award at AI Conference 2023",
                    "Featured in Tech Review Magazine",
                    "Successfully commercialized research output"
                ]
            }
        ]
    };

    // Filtering and Sorting Functions
    const filterGrants = (grants) => {
        return grants.filter(grant => {
            const matchesCategory = filterCategory === 'all' || grant.category === filterCategory;
            const matchesSearch = grant.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                grant.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    };

    const sortGrants = (grants) => {
        return [...grants].sort((a, b) => {
            switch(sortBy) {
                case 'deadline':
                    return new Date(a.deadline) - new Date(b.deadline);
                case 'amount':
                    return parseInt(b.amount.replace(/\D/g, '')) - parseInt(a.amount.replace(/\D/g, ''));
                case 'matchScore':
                    return b.matchScore - a.matchScore;
                default:
                    return 0;
            }
        });
    };

    // Handler Functions
    const handleApplyNow = (grant) => {
        setSelectedGrant(grant);
        setShowModal(true);
    };

    const handleViewDetails = (grant) => {
        setSelectedGrant(grant);
        setShowDetailsModal(true);
    };

    // Component for Grant Details Modal
    const GrantDetailsModal = ({ grant, show, onHide }) => (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{grant?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="res_gf-grant-details-content">
                    <div className="res_gf-grant-overview">
                        <h5>Grant Overview</h5>
                        <p>{grant?.description}</p>
                        <div className="res_gf-grant-metrics">
                            <div className="res_gf-metric">
                                <label>Amount</label>
                                <span>{grant?.amount}</span>
                            </div>
                            <div className="res_gf-metric">
                                <label>Success Rate</label>
                                <span>{grant?.successRate}</span>
                            </div>
                            <div className="res_gf-metric">
                                <label>Duration</label>
                                <span>{grant?.fundingPeriod}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="res_gf-requirements-section">
                        <h5>Requirements</h5>
                        <ul>
                            {grant?.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="res_gf-key-areas">
                        <h5>Key Research Areas</h5>
                        <div className="res_gf-tags">
                            {grant?.keyAreas.map((area, index) => (
                                <Badge key={index} bg="info" className="me-2">{area}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );

    const ApplicationProgress = ({ application }) => (
        <div className="res_gf-application-progress-tracker">
            <div className="res_gf-stages">
                {application.applicationStages.map((stage, index) => (
                    <div key={index} className={`res_gf-stage ${stage.completed ? 'completed' : ''}`}>
                        <div className="res_gf-stage-marker">
                            {stage.completed ? <FaCheckCircle /> : <FaClock />}
                        </div>
                        <div className="res_gf-stage-info">
                            <span className="res_gf-stage-name">{stage.name}</span>
                            <span className="res_gf-stage-date">{stage.date}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="res_gf-required-documents">
                <h6>Required Documents</h6>
                <div className="res_gf-documents-list">
                    {application.requiredDocuments.map((doc, index) => (
                        <div key={index} className="res_gf-document-item">
                            <div className="res_gf-document-info">
                                <span className="res_gf-document-name">{doc.name}</span>
                                <Badge bg={doc.status === 'completed' ? 'success' : 'warning'}>
                                    {doc.status}
                                </Badge>
                            </div>
                            <Button
                                variant={doc.status === 'completed' ? 'outline-success' : 'outline-primary'}
                                size="sm"
                            >
                                <FaFileUpload /> {doc.status === 'completed' ? 'Update' : 'Upload'}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const FundingHistoryDetails = ({ history }) => (
        <div className="res_gf-funding-history-details">
            <div className="res_gf-impact-metrics">
                <h5>Impact Metrics</h5>
                <div className="res_gf-metrics-grid">
                    <div className="res_gf-metric-card">
                        <span className="res_gf-metric-value">{history.impactMetrics.citations}</span>
                        <span className="res_gf-metric-label">Citations</span>
                    </div>
                    <div className="res_gf-metric-card">
                        <span className="res_gf-metric-value">{history.impactMetrics.downloads}</span>
                        <span className="res_gf-metric-label">Downloads</span>
                    </div>
                    <div className="res_gf-metric-card">
                        <span className="res_gf-metric-value">{history.budgetUtilization}%</span>
                        <span className="res_gf-metric-label">Budget Utilized</span>
                    </div>
                    <div className="res_gf-metric-card">
                        <span className="res_gf-metric-value">{history.impactMetrics.patents}</span>
                        <span className="res_gf-metric-label">Patents Filed</span>
                    </div>
                </div>
            </div>
            
            <div className="res_gf-publications">
                <h5>Publications</h5>
                {history.publications.map((pub, index) => (
                    <div key={index} className="res_gf-publication-item">
                        <h6>{pub.title}</h6>
                        <p>{pub.journal} - {pub.date}</p>
                        <div className="res_gf-publication-metrics">
                            <span>Citations: {pub.citations}</span>
                            <span>DOI: {pub.doi}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="res_gf-achievements">
                <h5>Key Achievements</h5>
                <ul className="res_gf-achievements-list">
                    {history.keyAchievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <div className="res_gf-grants-container">
            <header className="res_gf-grants-header">
                <h1>Research Grants & Funding</h1>
                <div className="res_gf-quick-stats">
                    <div className="res_gf-stat-card">
                        <FaChartLine />
                        <div>
                            <h3>Active Applications</h3>
                            <span>{grantData.applications.length} Pending</span>
                        </div>
                    </div>
                    <div className="res_gf-stat-card">
                        <FaCalendarAlt />
                        <div>
                            <h3>Upcoming Deadlines</h3>
                            <span>{grantData.availableGrants.length} This Month</span>
                        </div>
                    </div>
                    <div className="res_gf-stat-card">
                        <FaHistory />
                        <div>
                            <h3>Total Funding</h3>
                            <span>$1.2M</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="res_gf-search-filter-bar">
                <div className="res_gf-search-box">
                    <FaSearch />
                    <input 
                        type="text" 
                        placeholder="Search grants..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="res_gf-filter-options">
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-primary">
                            <FaFilter /> Category: {filterCategory}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setFilterCategory('all')}>All</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilterCategory('Technology')}>Technology</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilterCategory('Environmental')}>Environmental</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-primary">
                            <FaSortAmountDown /> Sort By: {sortBy}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setSortBy('deadline')}>Deadline</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSortBy('amount')}>Amount</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSortBy('matchScore')}>Match Score</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className="res_gf-grants-tabs">
                <button 
                    className={`res_gf-tab-btn ${activeTab === 'available' ? 'active' : ''}`}
                    onClick={() => setActiveTab('available')}
                >
                    <FaFileAlt /> Available Grants
                </button>
                <button 
                    className={`res_gf-tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
                    onClick={() => setActiveTab('applications')}
                >
                    <FaCheckCircle /> My Applications
                </button>
                <button 
                    className={`res_gf-tab-btn ${activeTab === 'history' ? 'active' : ''}`}
                    onClick={() => setActiveTab('history')}
                >
                    <FaHistory /> Funding History
                </button>
            </div>

            {activeTab === 'available' && (
                <div className="res_gf-grants-grid">
                    {sortGrants(filterGrants(grantData.availableGrants)).map(grant => (
                        <div key={grant.id} className="res_gf-grant-card">
                            <div className="res_gf-grant-header">
                                <span className="res_gf-grant-category">{grant.category}</span>
                                <span className="res_gf-match-score">
                                    {grant.matchScore}% Match
                                </span>
                            </div>
                            <h3>{grant.title}</h3>
                            <p>{grant.description}</p>
                            <div className="res_gf-grant-details">
                                <div className="res_gf-detail">
                                    <span>Amount</span>
                                    <strong>{grant.amount}</strong>
                                </div>
                                <div className="res_gf-detail">
                                    <span>Deadline</span>
                                    <strong>{new Date(grant.deadline).toLocaleDateString()}</strong>
                                </div>
                            </div>
                            <div className="res_gf-grant-actions">
                                <Button 
                                    className="res_gf-btn-view-details"
                                    onClick={() => handleViewDetails(grant)}
                                >
                                    <FaEye /> View Details
                                </Button>
                                <Button 
                                    className="res_gf-btn-apply"
                                    onClick={() => handleApplyNow(grant)}
                                >
                                    Apply Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'applications' && (
                <div className="res_gf-applications-list">
                    {grantData.applications.map(app => (
                        <div key={app.id} className="res_gf-application-card">
                            <div className="res_gf-app-header">
                                <h3>{app.grantName}</h3>
                                <Badge bg={app.status === 'Under Review' ? 'warning' : 'success'}>
                                    {app.status}
                                </Badge>
                            </div>
                            <ApplicationProgress application={app} />
                            <div className="res_gf-app-details">
                                <span>Submitted: {app.submissionDate}</span>
                                <span>Amount: {app.amount}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'history' && (
                <div className="res_gf-funding-history">
                    {grantData.fundingHistory.map(history => (
                        <div key={history.id} className="res_gf-history-card">
                            <div className="res_gf-history-header">
                                <h3>{history.grantName}</h3>
                                <span className="res_gf-year">{history.year}</span>
                            </div>
                            <FundingHistoryDetails history={history} />
                        </div>
                    ))}
                </div>
            )}

            <GrantDetailsModal 
                grant={selectedGrant}
                show={showDetailsModal}
                onHide={() => setShowDetailsModal(false)}
            />
        </div>
    );
};

export default ResearchGrantsFunding;