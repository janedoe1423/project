import React, { useState } from 'react';
import { 
    Container, Row, Col, Card, Badge, 
    Button, ProgressBar, Modal, Form,
    Alert, ListGroup, Dropdown, Nav,
    Table
} from 'react-bootstrap';
import { 
    FaShieldAlt, FaClipboardList, FaCalendarAlt, 
    FaBell, FaFolder, FaRobot, FaBook, FaPlus,
    FaDownload, FaExclamationTriangle, FaCheckCircle,
    FaHourglassHalf, FaTimesCircle, FaFileAlt,
    FaCertificate, FaUsers, FaChevronDown
} from 'react-icons/fa';
import './researcher_ipr.css';

const ResearcherIPR = () => {
    const [selectedStatus, setSelectedStatus] = useState('granted');
    const [selectedIPR, setSelectedIPR] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);

    // Sample IPR Data
    const iprData = {
        granted: [
            {
                id: 1,
                title: "AI-Based Medical Diagnosis System",
                patentNumber: "US123456789",
                grantDate: "2023-05-15",
                expiryDate: "2043-05-15",
                inventors: ["Dr. John Smith", "Dr. Sarah Johnson"],
                description: "Advanced AI system for early disease detection",
                citations: 25,
                documents: [
                    { name: "Grant Certificate", type: "PDF" },
                    { name: "Technical Specifications", type: "DOC" }
                ]
            }
        ],
        pending: [
            {
                id: 2,
                title: "Quantum Computing Optimization Algorithm",
                applicationNumber: "PCT/US23/12345",
                filingDate: "2023-08-01",
                status: "Under Examination",
                currentStage: {
                    name: "Technical Review",
                    startDate: "2023-10-15",
                    estimatedCompletion: "2023-12-15"
                },
                progressStages: [
                    { name: "Filing", completed: true, date: "2023-08-01" },
                    { name: "Formality Check", completed: true, date: "2023-09-15" },
                    { name: "Technical Review", completed: false, current: true },
                    { name: "Examiner Interview", completed: false },
                    { name: "Final Decision", completed: false }
                ],
                documents: [
                    { name: "Application Form", type: "PDF" },
                    { name: "Technical Drawings", type: "PDF" }
                ]
            }
        ],
        rejected: [
            {
                id: 3,
                title: "Blockchain-based Data Storage System",
                applicationNumber: "US2023/789012",
                filingDate: "2023-02-15",
                rejectionDate: "2023-09-30",
                rejectionReasons: [
                    "Prior art exists: US Patent 9876543",
                    "Lack of inventive step in claims 1-5"
                ],
                documents: [
                    { name: "Rejection Notice", type: "PDF" },
                    { name: "Examiner's Report", type: "PDF" }
                ]
            }
        ]
    };

    // Status Badge Color
    const getStatusBadgeColor = (status) => {
        switch(status) {
            case 'granted': return 'success';
            case 'pending': return 'warning';
            case 'rejected': return 'danger';
            default: return 'secondary';
        }
    };

    // Render IPR List Item
    const renderIPRListItem = (ipr) => (
        <ListGroup.Item 
            key={ipr.id}
            action
            active={selectedIPR?.id === ipr.id}
            onClick={() => setSelectedIPR(ipr)}
            className="border-0 p-3"
        >
            <h6 className="mb-1">{ipr.title}</h6>
            <small className="text-muted d-block">
                {selectedStatus === 'granted' ? 
                    `Patent No: ${ipr.patentNumber}` :
                    `Application No: ${ipr.applicationNumber}`
                }
            </small>
            <small className="text-muted d-block">
                {selectedStatus === 'granted' ? 
                    `Granted: ${ipr.grantDate}` :
                    selectedStatus === 'pending' ?
                    `Filed: ${ipr.filingDate}` :
                    `Rejected: ${ipr.rejectionDate}`
                }
            </small>
        </ListGroup.Item>
    );

    // Render Details Based on Status
    const renderIPRDetails = () => {
        if (!selectedIPR) return null;

        switch(selectedStatus) {
            case 'granted':
                return (
                    <Card className="neumorphic-card h-100">
                        <Card.Header className="bg-success bg-opacity-10">
                            <h5 className="mb-0 text-success">
                                <FaCheckCircle className="me-2" />
                                Granted Patent Details
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <Row className="mb-4">
                                <Col md={6}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <strong>Patent Number:</strong> {selectedIPR.patentNumber}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Grant Date:</strong> {selectedIPR.grantDate}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Expiry Date:</strong> {selectedIPR.expiryDate}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col md={6}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <strong>Citations:</strong> {selectedIPR.citations}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Inventors:</strong><br />
                                            {selectedIPR.inventors?.join(", ")}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                            <div className="mt-4">
                                <h6>Documents</h6>
                                <div className="document-grid">
                                    {selectedIPR.documents?.map((doc, index) => (
                                        <Button 
                                            key={index}
                                            variant="light" 
                                            className="neumorphic-btn-light me-2 mb-2"
                                        >
                                            <FaFileAlt className="me-2" />
                                            {doc.name}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                );

            case 'pending':
                return (
                    <Card className="neumorphic-card h-100">
                        <Card.Header className="bg-warning bg-opacity-10">
                            <h5 className="mb-0 text-warning">
                                <FaHourglassHalf className="me-2" />
                                Application Status
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <Row className="mb-4">
                                <Col md={6}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <strong>Application Number:</strong><br />
                                            {selectedIPR.applicationNumber}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Filing Date:</strong><br />
                                            {selectedIPR.filingDate}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Current Stage:</strong><br />
                                            {selectedIPR.currentStage?.name}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col md={6}>
                                    <div className="status-timeline">
                                        {selectedIPR.progressStages?.map((stage, index) => (
                                            <div 
                                                key={index}
                                                className={`timeline-item ${stage.completed ? 'completed' : ''} 
                                                    ${stage.current ? 'current' : ''}`}
                                            >
                                                <div className="timeline-marker">
                                                    {stage.completed ? 
                                                        <FaCheckCircle /> : 
                                                        <FaHourglassHalf />
                                                    }
                                                </div>
                                                <div className="timeline-content">
                                                    <h6>{stage.name}</h6>
                                                    {stage.date && 
                                                        <small className="text-muted">
                                                            {stage.date}
                                                        </small>
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <div className="mt-4">
                                <h6>Application Documents</h6>
                                <div className="document-grid">
                                    {selectedIPR.documents?.map((doc, index) => (
                                        <Button 
                                            key={index}
                                            variant="light" 
                                            className="neumorphic-btn-light me-2 mb-2"
                                        >
                                            <FaFileAlt className="me-2" />
                                            {doc.name}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                );

            case 'rejected':
                return (
                    <Card className="neumorphic-card h-100">
                        <Card.Header className="bg-danger bg-opacity-10">
                            <h5 className="mb-0 text-danger">
                                <FaTimesCircle className="me-2" />
                                Rejection Details
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <Row className="mb-4">
                                <Col md={6}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <strong>Application Number:</strong><br />
                                            {selectedIPR.applicationNumber}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Filing Date:</strong><br />
                                            {selectedIPR.filingDate}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Rejection Date:</strong><br />
                                            {selectedIPR.rejectionDate}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col md={6}>
                                    <h6>Rejection Reasons:</h6>
                                    <ListGroup variant="flush">
                                        {selectedIPR.rejectionReasons?.map((reason, index) => (
                                            <ListGroup.Item key={index}>
                                                • {reason}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Col>
                            </Row>
                            <div className="mt-4">
                                <h6>Related Documents</h6>
                                <div className="document-grid">
                                    {selectedIPR.documents?.map((doc, index) => (
                                        <Button 
                                            key={index}
                                            variant="light" 
                                            className="neumorphic-btn-light me-2 mb-2"
                                        >
                                            <FaFileAlt className="me-2" />
                                            {doc.name}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                );
            default:
                return null;
        }
    };

    return (
        <Container fluid className="researcher-ipr py-4">
            {/* Header */}
            <Row className="mb-4 align-items-center">
                <Col>
                    <h2 className="page-title">
                        <FaShieldAlt className="me-2" />
                        Intellectual Property Management
                    </h2>
                </Col>
                <Col xs="auto">
                    <Button 
                        variant="purple" 
                        className="neumorphic-btn"
                        onClick={() => setShowAddModal(true)}
                    >
                        <FaPlus className="me-2" />
                        New IPR Application
                    </Button>
                </Col>
            </Row>

            {/* Main Content */}
            <Row>
                {/* Status Tabs */}
                <Col md={3}>
                    <Card className="neumorphic-card mb-4">
                        <ListGroup variant="flush">
                            {Object.keys(iprData).map(status => (
                                <ListGroup.Item 
                                    key={status}
                                    action
                                    active={selectedStatus === status}
                                    onClick={() => {
                                        setSelectedStatus(status);
                                        setSelectedIPR(null);
                                    }}
                                    className="border-0"
                                >
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-capitalize">
                                            {status} IPRs
                                        </span>
                                        <Badge bg={getStatusBadgeColor(status)}>
                                            {iprData[status]?.length || 0}
                                        </Badge>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>
                </Col>

                {/* IPR List */}
                <Col md={4}>
                    <Card className="neumorphic-card">
                        <Card.Header>
                            <h5 className="mb-0 text-capitalize">
                                {selectedStatus} Applications
                            </h5>
                        </Card.Header>
                        <ListGroup variant="flush">
                            {iprData[selectedStatus]?.map(ipr => renderIPRListItem(ipr))}
                        </ListGroup>
                    </Card>
                </Col>

                {/* Details Panel */}
                <Col md={5}>
                    {renderIPRDetails()}
                </Col>
            </Row>

            {/* Add New IPR Modal */}
            <Modal 
                show={showAddModal} 
                onHide={() => setShowAddModal(false)} 
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>New IPR Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter IPR title"
                                className="neumorphic-input"
                            />
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Select className="neumorphic-input">
                                        <option>Patent</option>
                                        <option>Trademark</option>
                                        <option>Copyright</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Filing Date</Form.Label>
                                    <Form.Control 
                                        type="date"
                                        className="neumorphic-input"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3}
                                className="neumorphic-input"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Inventors</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Add inventors (comma separated)"
                                className="neumorphic-input"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Documents</Form.Label>
                            <Form.Control 
                                type="file" 
                                multiple
                                className="neumorphic-input"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={() => setShowAddModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button variant="purple">
                        Submit Application
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ResearcherIPR;