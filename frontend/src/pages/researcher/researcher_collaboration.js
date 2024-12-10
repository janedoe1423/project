// researcher_collaboration.js
import React, { useState, useCallback, useMemo } from 'react';
import { Row, Col } from 'react-bootstrap';
import {
    FaSearch,
    FaUniversity, FaStar, FaQuoteRight, FaBook
} from 'react-icons/fa';
import './researcher_collaboration.css';

const ResearcherCollaboration = () => {
    // Sample Data
    const [collaborationRequests] = useState([
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            institution: "Stanford University",
            status: "active",
            expertise: "AI Research",
            projectTitle: "AI in Healthcare: Advanced Diagnostic Systems",
            description: "Leading research on developing AI-powered diagnostic tools for early disease detection.",
            date: "2024-03-15",
            researchAreas: ["AI", "Healthcare", "Machine Learning"],
            fundingAmount: "$500,000",
            teamSize: 5,
            progress: 65,
            h_index: 32,
            citations: 4500,
            publications: 85,
            profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
            collaborationScore: 98
        },
        {
            id: 2,
            name: "Prof. Michael Chen",
            institution: "MIT",
            status: "pending",
            expertise: "Quantum Computing",
            projectTitle: "Quantum Algorithms for Drug Discovery",
            description: "Developing quantum computing applications for accelerating drug discovery process.",
            date: "2024-03-10",
            researchAreas: ["Quantum Computing", "Drug Discovery", "Algorithms"],
            fundingAmount: "$750,000",
            teamSize: 7,
            progress: 30,
            h_index: 28,
            citations: 3800,
            publications: 65,
            profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
            collaborationScore: 92
        }
    ]);

    // States
    const [viewMode] = useState('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [sortOrder] = useState('desc');
    const [selectedResearchArea, setSelectedResearchArea] = useState('');
    const [selectedInstitution, setSelectedInstitution] = useState('');
    const [expandedDescriptions, setExpandedDescriptions] = useState({});

    // Memoized Values
    const uniqueResearchAreas = useMemo(() => {
        const areas = new Set();
        collaborationRequests.forEach(request => {
            request.researchAreas.forEach(area => areas.add(area));
        });
        return Array.from(areas).sort();
    }, [collaborationRequests]);

    const uniqueInstitutions = useMemo(() => {
        return Array.from(new Set(collaborationRequests.map(r => r.institution))).sort();
    }, [collaborationRequests]);

    // Filter Function
    const filterResearchers = useCallback(() => {
        return collaborationRequests
            .filter(request => {
                const matchesSearch = request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    request.projectTitle.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesStatus = filterStatus === 'all' || request.status === filterStatus;
                const matchesResearchArea = !selectedResearchArea ||
                    request.researchAreas.includes(selectedResearchArea);
                const matchesInstitution = !selectedInstitution ||
                    request.institution === selectedInstitution;

                return matchesSearch && matchesStatus && matchesResearchArea && matchesInstitution;
            })
            .sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
            });
    }, [collaborationRequests, searchQuery, filterStatus, selectedResearchArea, 
        selectedInstitution, sortOrder]);

    // Progress Color
    const getProgressColor = (progress) => {
        if (progress < 30) return '#ef4444';
        if (progress < 70) return '#f59e0b';
        return '#10b981';
    };

    return (
        <div className="collaboration-page">
            {/* Header Section */}
            <div className="research-header">
                <div className="header-main">
                    <div className="header-left">
                        <h1>Research Collaborations</h1>
                        <div className="header-stats">
                            <div className="stat-item">
                                <span className="stat-value">{collaborationRequests.length}</span>
                                <span className="stat-label">Total Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">
                                    {collaborationRequests.filter(r => r.status === 'active').length}
                                </span>
                                <span className="stat-label">Active</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="header-search">
                        <div className="search-wrapper">
                            <FaSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search researchers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="header-filters">
                    <div className="filter-group">
                        <select 
                            value={filterStatus} 
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="filter-select"
                        >
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>

                        <select
                            value={selectedResearchArea}
                            onChange={(e) => setSelectedResearchArea(e.target.value)}
                            className="filter-select"
                        >
                            <option value="">All Research Areas</option>
                            {uniqueResearchAreas.map(area => (
                                <option key={area} value={area}>{area}</option>
                            ))}
                        </select>

                        <select
                            value={selectedInstitution}
                            onChange={(e) => setSelectedInstitution(e.target.value)}
                            className="filter-select"
                        >
                            <option value="">All Institutions</option>
                            {uniqueInstitutions.map(inst => (
                                <option key={inst} value={inst}>{inst}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Researchers Grid */}
            <Row className="researchers-grid">
                {filterResearchers().map(researcher => (
                    <Col key={researcher.id} md={viewMode === 'list' ? 12 : 4}>
                        <div className={`researcher-card ${viewMode}`}>
                            <div className="researcher-info">
                                <div className="researcher-avatar" 
                                     style={{ backgroundImage: `url(${researcher.profileImage})` }}>
                                </div>
                                <div className="researcher-details">
                                    <h3>{researcher.name}</h3>
                                    <div className="institution">
                                        <FaUniversity />
                                        <span>{researcher.institution}</span>
                                    </div>
                                    <div className={`status-badge ${researcher.status}`}>
                                        {researcher.status}
                                    </div>
                                </div>
                            </div>

                            <div className="project-info">
                                <h4>{researcher.projectTitle}</h4>
                                <div className="description-container">
                                    <p className={expandedDescriptions[researcher.id] ? 'expanded' : ''}>
                                        {researcher.description}
                                    </p>
                                    <button 
                                        className="desc-toggle-btn"
                                        onClick={() => setExpandedDescriptions(prev => ({
                                            ...prev,
                                            [researcher.id]: !prev[researcher.id]
                                        }))}
                                    >
                                        {expandedDescriptions[researcher.id] ? 'Show Less' : 'Show More'}
                                    </button>
                                </div>
                            </div>

                            <div className="metrics">
                                <div className="metric">
                                    <FaStar />
                                    <span>H-index: {researcher.h_index}</span>
                                </div>
                                <div className="metric">
                                    <FaQuoteRight />
                                    <span>Citations: {researcher.citations}</span>
                                </div>
                                <div className="metric">
                                    <FaBook />
                                    <span>Publications: {researcher.publications}</span>
                                </div>
                            </div>

                            <div className="research-areas">
                                {researcher.researchAreas.map((area, index) => (
                                    <span key={index} className="area-tag">
                                        {area}
                                    </span>
                                ))}
                            </div>

                            <div className="progress-section">
                                <div className="progress-label">
                                    <span>Progress</span>
                                    <span>{researcher.progress}%</span>
                                </div>
                                <div className="progress-bar">
                                    <div 
                                        className="progress-fill"
                                        style={{
                                            width: `${researcher.progress}%`,
                                            backgroundColor: getProgressColor(researcher.progress)
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ResearcherCollaboration;