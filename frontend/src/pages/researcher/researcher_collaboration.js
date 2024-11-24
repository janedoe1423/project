import React, { useState, useEffect } from 'react';
import {
    Container, Row, Col, Card, Form, 
    InputGroup, Button, ListGroup, Badge,
    Nav, Tab, Modal, Toast
} from 'react-bootstrap';
import {
    FaSearch, FaUser, FaCircle, FaPaperPlane,
    FaUniversity, FaUserPlus, FaCalendarAlt,
    FaFile, FaStar, FaTimes, FaCheck
} from 'react-icons/fa';
import './researcher_collaboration.css';

const ResearchersCollaborationRequests = () => {
    // State management
    const [activeTab, setActiveTab] = useState('requests');
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [collaborationRequests, setCollaborationRequests] = useState([
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            institution: "Stanford University",
            status: "pending",
            expertise: "AI Research",
            projectTitle: "AI in Healthcare",
            description: "Looking to collaborate on AI applications in medical diagnosis",
            email: "sarah.johnson@stanford.edu"
        },
        {
            id: 2,
            name: "Prof. Michael Chen",
            institution: "MIT",
            status: "accepted",
            expertise: "Quantum Computing",
            projectTitle: "Quantum Algorithms",
            description: "Research on quantum computing applications",
            email: "m.chen@mit.edu"
        }
    ]);

    const [activeCollaborations, setActiveCollaborations] = useState([
        {
            id: 1,
            name: "Dr. Emily Williams",
            institution: "Oxford University",
            status: "in_progress",
            projectTitle: "Biotech Research",
            progress: 75,
            nextMeeting: "2024-04-15T10:00:00",
            email: "e.williams@oxford.edu"
        }
    ]);

    // Handler functions
    const handleViewDetails = (request) => {
        setSelectedRequest(request);
        setShowModal(true);
    };

    const handleAcceptRequest = (requestId) => {
        setCollaborationRequests(prevRequests => 
            prevRequests.map(req => 
                req.id === requestId 
                    ? { ...req, status: 'accepted' } 
                    : req
            )
        );
        showToastMessage('Collaboration request accepted!');
    };

    const handleDeclineRequest = (requestId) => {
        setCollaborationRequests(prevRequests => 
            prevRequests.map(req => 
                req.id === requestId 
                    ? { ...req, status: 'rejected' } 
                    : req
            )
        );
        showToastMessage('Collaboration request declined.');
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Implement search functionality
        showToastMessage('Search functionality will be implemented soon.');
    };

    const showToastMessage = (message) => {
        setToastMessage(message);
        setShowToast(true);
    };

    const handleScheduleMeeting = (collaborationId) => {
        // Implement calendar integration
        showToastMessage('Calendar integration coming soon!');
    };

    const handleShareDocument = (collaborationId) => {
        // Implement document sharing
        showToastMessage('Document sharing feature coming soon!');
    };

    return (
        <Container fluid className="researcher-collaboration py-4">
            {/* Toast Notification */}
            <Toast 
                show={showToast} 
                onClose={() => setShowToast(false)}
                style={{
                    position: 'fixed',
                    top: 20,
                    right: 20,
                    zIndex: 1000
                }}
                delay={3000}
                autohide
            >
                <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>

            {/* Details Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Collaboration Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedRequest && (
                        <div>
                            <h4>{selectedRequest.projectTitle}</h4>
                            <p className="text-muted">
                                <FaUser className="me-2" />
                                {selectedRequest.name}
                            </p>
                            <p className="text-muted">
                                <FaUniversity className="me-2" />
                                {selectedRequest.institution}
                            </p>
                            <div className="expertise-tag mb-3">
                                {selectedRequest.expertise}
                            </div>
                            <h5>Project Description</h5>
                            <p>{selectedRequest.description}</p>
                            <h5>Contact</h5>
                            <p>
                                <a href={`mailto:${selectedRequest.email}`}>
                                    {selectedRequest.email}
                                </a>
                            </p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    {selectedRequest?.status === 'pending' && (
                        <>
                            <Button 
                                variant="success" 
                                onClick={() => handleAcceptRequest(selectedRequest.id)}
                            >
                                <FaCheck className="me-2" />
                                Accept
                            </Button>
                            <Button 
                                variant="danger" 
                                onClick={() => handleDeclineRequest(selectedRequest.id)}
                            >
                                <FaTimes className="me-2" />
                                Decline
                            </Button>
                        </>
                    )}
                </Modal.Footer>
            </Modal>

            <Row>
                <Col md={12} className="mb-4">
                    <h2 className="section-title">Research Collaboration Hub</h2>
                    <Tab.Container defaultActiveKey="requests">
                        <Nav variant="pills" className="collaboration-nav">
                            <Nav.Item>
                                <Nav.Link eventKey="requests">
                                    <FaUserPlus /> Requests
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="active">
                                    <FaCircle /> Active
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="find">
                                    <FaSearch /> Find
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="calendar">
                                    <FaCalendarAlt /> Calendar
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content className="mt-4">
                            <Tab.Pane eventKey="requests">
                                <Row>
                                    {collaborationRequests.map(request => (
                                        <Col md={6} lg={4} xl={3} key={request.id}>
                                            <Card className="collaboration-card">
                                                <Card.Header className={`status-${request.status}`}>
                                                    {request.status.toUpperCase()}
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="researcher-info">
                                                        <div className="researcher-avatar">
                                                            <FaUser />
                                                        </div>
                                                        <div>
                                                            <h5>{request.name}</h5>
                                                            <p className="institution">
                                                                <FaUniversity /> {request.institution}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <h6 className="project-title">{request.projectTitle}</h6>
                                                    <p className="project-description">
                                                        {request.description.substring(0, 100)}...
                                                    </p>
                                                    <div className="expertise-tag">
                                                        {request.expertise}
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Button 
                                                        variant="outline-primary" 
                                                        size="sm"
                                                        className="me-2"
                                                        onClick={() => handleViewDetails(request)}
                                                    >
                                                        View Details
                                                    </Button>
                                                    {request.status === 'pending' && (
                                                        <>
                                                            <Button 
                                                                variant="success" 
                                                                size="sm"
                                                                className="me-2"
                                                                onClick={() => handleAcceptRequest(request.id)}
                                                            >
                                                                Accept
                                                            </Button>
                                                            <Button 
                                                                variant="danger"
                                                                size="sm"
                                                                onClick={() => handleDeclineRequest(request.id)}
                                                            >
                                                                Decline
                                                            </Button>
                                                        </>
                                                    )}
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="active">
                                <Row>
                                    {activeCollaborations.map(collab => (
                                        <Col md={6} lg={4} xl={3} key={collab.id}>
                                            <Card className="collaboration-card">
                                                <Card.Body>
                                                    <div className="researcher-info">
                                                        <div className="researcher-avatar">
                                                            <FaUser />
                                                        </div>
                                                        <div>
                                                            <h5>{collab.name}</h5>
                                                            <p className="institution">
                                                                <FaUniversity /> {collab.institution}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <h6 className="project-title">{collab.projectTitle}</h6>
                                                    <div className="progress mb-3">
                                                        <div 
                                                            className="progress-bar bg-purple" 
                                                            style={{ width: `${collab.progress}%` }}
                                                        >
                                                            {collab.progress}%
                                                        </div>
                                                    </div>
                                                    <div className="next-meeting">
                                                        <FaCalendarAlt /> Next Meeting: {
                                                            new Date(collab.nextMeeting).toLocaleDateString()
                                                        }
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Button 
                                                        variant="outline-primary"
                                                        size="sm"
                                                        className="me-2"
                                                        onClick={() => handleShareDocument(collab.id)}
                                                    >
                                                        <FaFile /> Documents
                                                    </Button>
                                                    <Button 
                                                        variant="primary"
                                                        size="sm"
                                                        onClick={() => handleScheduleMeeting(collab.id)}
                                                    >
                                                        <FaCalendarAlt /> Schedule
                                                    </Button>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="find">
                                <Row>
                                    <Col md={12} className="mb-4">
                                        <Card className="search-card">
                                            <Card.Body>
                                                <Form onSubmit={handleSearchSubmit}>
                                                    <Row>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Research Area</Form.Label>
                                                                <Form.Control 
                                                                    type="text" 
                                                                    placeholder="e.g., AI, Biotech"
                                                                    value={searchTerm}
                                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Institution</Form.Label>
                                                                <Form.Control type="text" placeholder="University name" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Expertise Level</Form.Label>
                                                                <Form.Select>
                                                                    <option>All Levels</option>
                                                                    <option>Early Career</option>
                                                                    <option>Mid Career</option>
                                                                    <option>Senior</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Button variant="primary" type="submit" size="sm">
                                                        <FaSearch /> Search Collaborators
                                                    </Button>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="calendar">
                                <Card className="calendar-card">
                                    <Card.Body>
                                        <div className="text-center py-5">
                                            <FaCalendarAlt className="large-icon mb-3" />
                                            <h4>Collaboration Calendar</h4>
                                            <p>Coming Soon</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    );
};

export default ResearchersCollaborationRequests;