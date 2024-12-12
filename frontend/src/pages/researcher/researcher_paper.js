import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { 
    FaFilter, FaBookOpen, FaCalendar, 
    FaUsers, FaQuoteRight, FaEye, FaCircle,
    FaBrain, FaHeartbeat, FaLeaf
} from 'react-icons/fa';
import './researcher_works.css';

const ResearcherWorks = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedAbstracts, setExpandedAbstracts] = useState({});
    const [loading, setLoading] = useState(true);

    // Categories configuration
    const categories = [
        { id: 'all', name: 'All Research', icon: <FaBookOpen />, count: 7 },
        { id: 'ai', name: 'Artificial Intelligence', icon: <FaBrain />, count: 3 },
        { id: 'healthcare', name: 'Healthcare', icon: <FaHeartbeat />, count: 2 },
        { id: 'environmental', name: 'Environmental', icon: <FaLeaf />, count: 2 }
    ];

    // Research data with direct paper URLs
    const researchData = {
        ai: [
            {
                id: 1,
                title: "Deep Learning Applications in Medical Imaging Analysis",
                abstract: "This groundbreaking research explores the implementation of advanced deep learning architectures for medical image analysis. We present a novel convolutional neural network architecture that achieves state-of-the-art accuracy in detecting early-stage abnormalities across multiple imaging modalities including MRI, CT, and X-ray scans.",
                publishedDate: "2023",
                contributors: 5,
                citations: 125,
                impactScore: 4.8,
                tags: ["Deep Learning", "Medical Imaging", "CNN", "Healthcare AI"],
                isOpenCollab: true,
                references: 45,
                journal: "IEEE Transactions on Medical Imaging",
                doi: "10.1109/TMI.2023.1234567",
                category: "ai",
                authors: ["John Smith", "Maria Garcia", "David Chen"],
                institution: "Stanford University",
                paperUrl: "https://ieeexplore.ieee.org/document/9090149"
            },
            {
                id: 2,
                title: "Transformer Models for Clinical Natural Language Processing",
                abstract: "An innovative approach to implementing transformer-based models in clinical documentation analysis. This research introduces a specialized BERT model pre-trained on extensive medical literature and clinical notes, achieving superior performance in medical entity recognition and relationship extraction.",
                publishedDate: "2023",
                contributors: 4,
                citations: 87,
                impactScore: 4.5,
                tags: ["NLP", "BERT", "Clinical Data", "Transformers"],
                isOpenCollab: true,
                references: 38,
                journal: "Journal of Biomedical Informatics",
                doi: "10.1016/j.jbi.2023.789012",
                category: "ai",
                authors: ["Emily Johnson", "Michael Zhang"],
                institution: "MIT",
                paperUrl: "https://www.sciencedirect.com/science/article/pii/S1532046420302021"
            },
            {
                id: 3,
                title: "Reinforcement Learning for Autonomous Systems",
                abstract: "A comprehensive study on applying reinforcement learning algorithms to autonomous systems, featuring novel approaches to policy optimization and reward shaping.",
                publishedDate: "2023",
                contributors: 6,
                citations: 95,
                impactScore: 4.7,
                tags: ["Reinforcement Learning", "Autonomous Systems", "AI"],
                isOpenCollab: true,
                references: 52,
                journal: "Nature Machine Intelligence",
                doi: "10.1038/s42256-023-00001-x",
                category: "ai",
                authors: ["Alex Thompson", "Sarah Lee"],
                institution: "Carnegie Mellon University",
                paperUrl: "https://www.nature.com/articles/s42256-023-00001-x"
            }
        ],
        healthcare: [
            {
                id: 4,
                title: "Novel Drug Delivery Systems Using Nanotechnology",
                abstract: "Investigation of innovative nanoparticle-based drug delivery systems for targeted cancer therapy. This research presents breakthrough findings in improving drug efficacy while minimizing side effects through precise delivery mechanisms.",
                publishedDate: "2023",
                contributors: 6,
                citations: 156,
                impactScore: 4.9,
                tags: ["Nanotechnology", "Drug Delivery", "Cancer Treatment"],
                isOpenCollab: true,
                references: 58,
                journal: "Nature Nanotechnology",
                doi: "10.1038/s41565-023-01123-w",
                category: "healthcare",
                authors: ["Thomas Anderson", "Rachel White"],
                institution: "Johns Hopkins University",
                paperUrl: "https://www.nature.com/articles/s41565-023-01123-w"
            },
            {
                id: 5,
                title: "Genomic Analysis of Rare Diseases",
                abstract: "Comprehensive genomic study identifying novel genetic markers associated with rare diseases, utilizing advanced sequencing technologies and bioinformatics approaches.",
                publishedDate: "2023",
                contributors: 8,
                citations: 112,
                impactScore: 4.6,
                tags: ["Genomics", "Rare Diseases", "Bioinformatics"],
                isOpenCollab: true,
                references: 65,
                journal: "Nature Genetics",
                doi: "10.1038/s41588-023-00002-y",
                category: "healthcare",
                authors: ["Jennifer Brown", "Robert Chen"],
                institution: "Harvard Medical School",
                paperUrl: "https://www.nature.com/articles/s41588-023-00002-y"
            }
        ],
        environmental: [
            {
                id: 6,
                title: "Climate Change Impact on Biodiversity Patterns",
                abstract: "A comprehensive analysis of global biodiversity changes in response to climate variations. This study presents novel findings on species adaptation patterns and ecosystem resilience across different geographical regions.",
                publishedDate: "2023",
                contributors: 8,
                citations: 145,
                impactScore: 4.8,
                tags: ["Climate Change", "Biodiversity", "Ecosystem"],
                isOpenCollab: true,
                references: 72,
                journal: "Nature Climate Change",
                doi: "10.1038/s41558-023-01675-8",
                category: "environmental",
                authors: ["Emma Wilson", "James Taylor"],
                institution: "Oxford University",
                paperUrl: "https://www.nature.com/articles/s41558-023-01675-8"
            },
            {
                id: 7,
                title: "Sustainable Energy Storage Solutions",
                abstract: "Novel research on advanced energy storage technologies, focusing on sustainable materials and improved efficiency for renewable energy systems.",
                publishedDate: "2023",
                contributors: 7,
                citations: 98,
                impactScore: 4.7,
                tags: ["Energy Storage", "Sustainability", "Renewable Energy"],
                isOpenCollab: true,
                references: 61,
                journal: "Nature Energy",
                doi: "10.1038/s41560-023-00003-z",
                category: "environmental",
                authors: ["Michael Green", "Lisa Wong"],
                institution: "ETH Zurich",
                paperUrl: "https://www.nature.com/articles/s41560-023-00003-z"
            }
        ]
    };

    // Get all works as a flat array
    const allWorks = Object.values(researchData).flat();

    // Simulate loading effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Filter works based on category and search query
    const getFilteredWorks = () => {
        let filtered = activeCategory === 'all' ? allWorks : researchData[activeCategory] || [];

        if (searchQuery) {
            filtered = filtered.filter(work => 
                work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                work.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
                work.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                work.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        return filtered;
    };

    const handleViewPaper = (work) => {
        if (work.paperUrl) {
            window.open(work.paperUrl, '_blank');
        } else {
            alert('Paper URL not available.');
        }
    };

    const handleCitation = (work) => {
        const citation = `${work.authors.join(', ')}. (${work.publishedDate}). ${work.title}. ${work.journal}. DOI: ${work.doi}`;
        navigator.clipboard.writeText(citation);
        alert('Citation copied to clipboard!');
    };

    const toggleAbstract = (workId) => {
        setExpandedAbstracts(prev => ({
            ...prev,
            [workId]: !prev[workId]
        }));
    };

    return (
        <Container fluid className="res_work-researcher-works">
            <div className="res_work-section-header">
                <h2>Research Works</h2>
            </div>

            <Row>
                {/* Sidebar Filters */}
                <Col lg={3}>
                    <div className="res_work-category-filters">
                        <div className="res_work-filters-header">
                            <h5><FaFilter /> Categories</h5>
                        </div>
                        
                        <div className="res_work-search-container">
                            <Form.Control
                                type="text"
                                placeholder="Search research..."
                                className="res_work-neumorphic-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                className={`res_work-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <span className="res_work-category-icon">{category.icon}</span>
                                {category.name}
                                <span className="res_work-count-badge">{category.count}</span>
                            </Button>
                        ))}
                    </div>
                </Col>

                {/* Research Works List */}
                <Col lg={9}>
                    {loading ? (
                        [...Array(3)].map((_, index) => (
                            <div key={index} className="res_work-research-skeleton" />
                        ))
                    ) : (
                        getFilteredWorks().map(work => (
                            <div key={work.id} className="res_work-research-list-item">
                                <div className="res_work-research-list-content">
                                    <div className="res_work-research-list-header">
                                        <h3 className="res_work-work-title">
                                            <FaBookOpen className="res_work-work-title-icon" />
                                            {work.title}
                                        </h3>
                                        <div className="res_work-research-list-badges">
                                            <div className="res_work-impact-badge">
                                                Impact: {work.impactScore}
                                            </div>
                                            <div className={`res_work-collab-badge ${work.isOpenCollab ? 'open' : 'closed'}`}>
                                                <FaCircle /> {work.isOpenCollab ? 'Open' : 'Closed'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="res_work-research-meta">
                                        <span className="res_work-meta-item">
                                            <FaCalendar className="res_work-meta-icon" /> {work.publishedDate}
                                        </span>
                                        <span className="res_work-meta-item">
                                            <FaUsers className="res_work-meta-icon" /> {work.contributors} Contributors
                                        </span>
                                        <span className="res_work-meta-item">
                                            <FaQuoteRight className="res_work-meta-icon" /> {work.citations} Citations
                                        </span>
                                    </div>

                                    <div className="res_work-research-authors">
                                        Authors: {work.authors.join(', ')} | {work.institution}
                                    </div>

                                    <div className="res_work-research-tags">
                                        {work.tags.map((tag, index) => (
                                            <span key={index} className="res_work-research-tag">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="res_work-research-abstract">
                                        {expandedAbstracts[work.id] 
                                            ? work.abstract 
                                            : `${work.abstract.slice(0, 200)}...`}
                                        <button 
                                            className="res_work-abstract-toggle"
                                            onClick={() => toggleAbstract(work.id)}
                                        >
                                            {expandedAbstracts[work.id] ? 'Show Less' : 'Show More'}
                                        </button>
                                    </div>

                                    <div className="res_work-research-list-footer">
                                        <div className="res_work-journal-info">
                                            Published in: {work.journal} | DOI: {work.doi}
                                        </div>
                                        <div className="res_work-research-actions">
                                            <button 
                                                className="res_work-action-btn res_work-view-btn"
                                                onClick={() => handleViewPaper(work)}
                                                disabled={loading}
                                            >
                                                <FaEye /> View Paper
                                            </button>
                                            <button 
                                                className="res_work-action-btn res_work-cite-btn"
                                                onClick={() => handleCitation(work)}
                                                disabled={loading}
                                            >
                                                <FaQuoteRight /> Cite
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default ResearcherWorks;