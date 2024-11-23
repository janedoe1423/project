import React, { useState } from 'react';
import { 
    Container, Row, Col, Card, Form, 
    Button, Badge, Table, Dropdown, Modal 
} from 'react-bootstrap';
import { 
    FaSearch, FaFilter, FaDownload, FaPlus, 
    FaQuoteRight, FaUsers, FaLightbulb, FaExternalLinkAlt,
    FaCalendar, FaBook, FaLink
} from 'react-icons/fa';
import './researcher_works.css';

const ResearcherWorks = () => {
    // States
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [newWork, setNewWork] = useState({
        title: '',
        journal: '',
        year: '',
        categories: [],
        keyFindings: '',
        collaborators: '',
        citations: 0,
        link: ''
    });

    // Categories Data
    const categories = [
        { id: 'all', name: 'All Works' },
        { id: 'ai', name: 'Artificial Intelligence' },
        { id: 'healthcare', name: 'Healthcare' },
        { id: 'environmental', name: 'Environmental Studies' }
    ];

    // Sample Works Data
    const [works, setWorks] = useState([
        {
            id: 1,
            title: 'Advanced Neural Networks in Healthcare',
            journal: 'Nature AI',
            year: '2023',
            categories: ['Healthcare', 'Artificial Intelligence'],
            keyFindings: 'Improved disease prediction accuracy by 45%',
            collaborators: 'Stanford Medical',
            citations: 125,
            link: '#'
        },
        {
            id: 2,
            title: 'Environmental Impact Analysis using ML',
            journal: 'Science of Environment',
            year: '2023',
            categories: ['Environmental Studies', 'Artificial Intelligence'],
            keyFindings: 'Reduced carbon footprint prediction error by 30%',
            collaborators: 'Green Earth Institute',
            citations: 89,
            link: '#'
        },
        {
            id: 3,
            title: 'Quantum Computing in Drug Discovery',
            journal: 'Quantum Science',
            year: '2022',
            categories: ['Healthcare', 'Artificial Intelligence'],
            keyFindings: 'Accelerated drug screening process by 5x',
            collaborators: 'Pharma Research Lab',
            citations: 156,
            link: '#'
        }
    ]);

    // Filtering Logic
    const filteredWorks = works.filter(work => {
        const matchesCategory = 
            activeCategory === 'all' || 
            work.categories.some(cat => 
                cat.toLowerCase() === categories.find(c => c.id === activeCategory)?.name.toLowerCase()
            );
        
        const matchesSearch = 
            work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            work.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
            work.keyFindings.toLowerCase().includes(searchTerm.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });

    // Add New Work Handler
    const handleAddWork = () => {
        const workId = works.length + 1;
        const newWorkData = {
            ...newWork,
            id: workId,
            citations: 0
        };
        setWorks([...works, newWorkData]);
        setShowAddModal(false);
        setNewWork({
            title: '',
            journal: '',
            year: '',
            categories: [],
            keyFindings: '',
            collaborators: '',
            citations: 0,
            link: ''
        });
    };

    return (
        <Container fluid className="researcher-works py-4">
            {/* Header Section */}
            <div className="section-header mb-4">
                <Row className="align-items-center">
                    <Col>
                        <h2 className="mb-0">Research Works</h2>
                    </Col>
                    <Col xs="auto">
                        <Button 
                            variant="purple" 
                            className="neumorphic-btn"
                            onClick={() => setShowAddModal(true)}
                        >
                            <FaPlus className="me-2" />
                            Add New Work
                        </Button>
                    </Col>
                </Row>
            </div>

            <Row>
                {/* Filters Sidebar */}
                <Col lg={3}>
                    <Card className="neumorphic-card mb-4">
                        <Card.Header className="bg-transparent">
                            <h5 className="mb-0"><FaFilter className="me-2" />Filters</h5>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    type="search" 
                                    placeholder="Search works..."
                                    className="neumorphic-input"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </Form.Group>
                            
                            <div className="category-filters">
                                {categories.map(category => (
                                    <Button
                                        key={category.id}
                                        variant={activeCategory === category.id ? 'purple' : 'light'}
                                        className="neumorphic-btn mb-2 w-100 text-start"
                                        onClick={() => setActiveCategory(category.id)}
                                    >
                                        {category.name}
                                    </Button>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Export Options */}
                    <Card className="neumorphic-card">
                        <Card.Header className="bg-transparent">
                            <h5 className="mb-0"><FaDownload className="me-2" />Export</h5>
                        </Card.Header>
                        <Card.Body>
                            <Button variant="outline-purple" className="neumorphic-btn mb-2 w-100">
                                Export as BibTeX
                            </Button>
                            <Button variant="outline-purple" className="neumorphic-btn w-100">
                                Export as APA
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Main Content */}
                <Col lg={9}>
                    <Card className="neumorphic-card">
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="research-table">
                                    <thead>
                                        <tr>
                                            <th>Title & Key Findings</th>
                                            <th>Citations</th>
                                            <th>Category</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredWorks.map(work => (
                                            <tr key={work.id}>
                                                <td>
                                                    <h6 className="mb-1">
                                                        {work.title}
                                                        <a href={work.link} className="ms-2 text-purple">
                                                            <FaExternalLinkAlt />
                                                        </a>
                                                    </h6>
                                                    <p className="text-muted mb-1 small">
                                                        Published in {work.journal}, {work.year}
                                                    </p>
                                                    <div className="key-findings">
                                                        <FaLightbulb className="text-purple me-2" />
                                                        <small>{work.keyFindings}</small>
                                                    </div>
                                                    <div className="collaboration-notes">
                                                        <FaUsers className="text-purple me-2" />
                                                        <small>{work.collaborators}</small>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="citations-badge">
                                                        <FaQuoteRight className="me-2" />
                                                        {work.citations}
                                                    </div>
                                                </td>
                                                <td>
                                                    {work.categories.map((category, index) => (
                                                        <Badge 
                                                            key={index} 
                                                            bg="purple" 
                                                            className={index > 0 ? 'ms-1' : ''}
                                                        >
                                                            {category}
                                                        </Badge>
                                                    ))}
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="link" className="no-caret">
                                                            •••
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>Edit</Dropdown.Item>
                                                            <Dropdown.Item>View Details</Dropdown.Item>
                                                            <Dropdown.Item>Download Citation</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Add New Work Modal */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add New Research Work</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text"
                                value={newWork.title}
                                onChange={(e) => setNewWork({...newWork, title: e.target.value})}
                            />
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Journal</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        value={newWork.journal}
                                        onChange={(e) => setNewWork({...newWork, journal: e.target.value})}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        value={newWork.year}
                                        onChange={(e) => setNewWork({...newWork, year: e.target.value})}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Categories</Form.Label>
                            <Form.Select 
                                multiple
                                value={newWork.categories}
                                onChange={(e) => setNewWork({
                                    ...newWork, 
                                    categories: Array.from(e.target.selectedOptions, option => option.value)
                                })}
                            >
                                {categories
                                    .filter(cat => cat.id !== 'all')
                                    .map(category => (
                                        <option key={category.id} value={category.name}>
                                            {category.name}
                                        </option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Key Findings</Form.Label>
                            <Form.Control 
                                as="textarea"
                                rows={3}
                                value={newWork.keyFindings}
                                onChange={(e) => setNewWork({...newWork, keyFindings: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Collaborators</Form.Label>
                            <Form.Control 
                                type="text"
                                value={newWork.collaborators}
                                onChange={(e) => setNewWork({...newWork, collaborators: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>External Link</Form.Label>
                            <Form.Control 
                                type="url"
                                value={newWork.link}
                                onChange={(e) => setNewWork({...newWork, link: e.target.value})}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="purple" onClick={handleAddWork}>
                        Add Work
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ResearcherWorks;