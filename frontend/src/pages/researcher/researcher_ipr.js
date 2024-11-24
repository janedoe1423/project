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
    FaCertificate, FaUsers, FaChevronDown, FaCircle
} from 'react-icons/fa';
import './researcher_ipr.css';

const ResearcherIPR = () => {
    const [selectedStatus, setSelectedStatus] = useState('granted');
    const [selectedIPR, setSelectedIPR] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newIPR, setNewIPR] = useState({
        title: '',
        type: '',
        description: '',
        inventors: '',
        filingDate: ''
    });

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

    // Render IPR List Item
    const renderIPRListItem = (ipr) => (
        <ListGroup.Item 
            key={ipr.id}
            action
            active={selectedIPR?.id === ipr.id}
            onClick={() => setSelectedIPR(ipr)}
            className="border-0 p-3 ipr-list-item"
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

    // Render Detail Content
    const renderDetailContent = () => {
        if (!selectedIPR) return null;

        switch (selectedStatus) {
            case 'granted':
                return (
                    <>
                        <div className="detail-section">
                            <h6>Patent Information</h6>
                            <p className="mb-2">
                                <strong>Patent Number:</strong> {selectedIPR.patentNumber}
                            </p>
                            <p className="mb-2">
                                <strong>Grant Date:</strong> {selectedIPR.grantDate}
                            </p>
                            <p className="mb-2">
                                <strong>Expiry Date:</strong> {selectedIPR.expiryDate}
                            </p>
                        </div>
                        <div className="detail-section">
                            <h6>Inventors</h6>
                            <ListGroup variant="flush">
                                {selectedIPR.inventors.map((inventor, index) => (
                                    <ListGroup.Item key={index} className="px-0">
                                        <FaUsers className="me-2 text-purple" />
                                        {inventor}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                        <div className="detail-section">
                            <h6>Description</h6>
                            <p>{selectedIPR.description}</p>
                        </div>
                        <div className="detail-section">
                            <h6>Documents</h6>
                            <ListGroup variant="flush">
                                {selectedIPR.documents.map((doc, index) => (
                                    <ListGroup.Item key={index} className="px-0">
                                        <FaFileAlt className="me-2 text-purple" />
                                        {doc.name}
                                        <Button 
                                            variant="link" 
                                            className="float-end p-0"
                                            size="sm"
                                        >
                                            <FaDownload />
                                        </Button>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </>
                );

            case 'pending':
                return (
                    <>
                        <div className="detail-section">
                            <h6>Application Status</h6>
                            <p className="mb-2">
                                <strong>Application Number:</strong> {selectedIPR.applicationNumber}
                            </p>
                            <p className="mb-2">
                                <strong>Filing Date:</strong> {selectedIPR.filingDate}
                            </p>
                            <p className="mb-2">
                                <strong>Current Stage:</strong> {selectedIPR.currentStage.name}
                            </p>
                        </div>
                        <div className="detail-section">
                            <h6>Progress Timeline</h6>
                            <div className="timeline">
                                {selectedIPR.progressStages.map((stage, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className={`timeline-marker ${stage.completed ? 'completed' : ''}`}>
                                            {stage.completed ? 
                                                <FaCheckCircle /> : 
                                                stage.current ? 
                                                <FaHourglassHalf /> : 
                                                <FaCircle />
                                            }
                                        </div>
                                        <div className="timeline-content">
                                            <h6>{stage.name}</h6>
                                            {stage.date && <small>{stage.date}</small>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                );

            case 'rejected':
                return (
                    <>
                        <div className="detail-section">
                            <h6>Rejection Details</h6>
                            <p className="mb-2">
                                <strong>Application Number:</strong> {selectedIPR.applicationNumber}
                            </p>
                            <p className="mb-2">
                                <strong>Filing Date:</strong> {selectedIPR.filingDate}
                            </p>
                            <p className="mb-2">
                                <strong>Rejection Date:</strong> {selectedIPR.rejectionDate}
                            </p>
                        </div>
                        <div className="detail-section">
                            <h6>Rejection Reasons</h6>
                            <ListGroup variant="flush">
                                {selectedIPR.rejectionReasons.map((reason, index) => (
                                    <ListGroup.Item key={index} className="px-0">
                                        <FaExclamationTriangle className="me-2 text-danger" />
                                        {reason}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    // Render IPR Details
    const renderIPRDetails = () => {
        if (!selectedIPR) {
            return (
                <Card className="neumorphic-card h-100 empty-state">
                    <Card.Body className="d-flex align-items-center justify-content-center">
                        <div className="text-center text-muted">
                            <FaFolder size={48} className="mb-3" />
                            <h5>Select an IPR to view details</h5>
                        </div>
                    </Card.Body>
                </Card>
            );
        }

        return (
            <Card className="neumorphic-card h-100">
                <Card.Header className={`bg-${getStatusColor(selectedStatus)} bg-opacity-10`}>
                    <h5 className={`mb-0 text-${getStatusColor(selectedStatus)}`}>
                        {getStatusIcon(selectedStatus)}
                        {getStatusTitle(selectedStatus)}
                    </h5>
                </Card.Header>
                <Card.Body>
                    {renderDetailContent()}
                </Card.Body>
            </Card>
        );
    };

    // Helper functions for status
    const getStatusColor = (status) => {
        switch(status) {
            case 'granted': return 'success';
            case 'pending': return 'warning';
            case 'rejected': return 'danger';
            default: return 'secondary';
        }
    };

    const getStatusIcon = (status) => {
        switch(status) {
            case 'granted': return <FaCheckCircle className="me-2" />;
            case 'pending': return <FaHourglassHalf className="me-2" />;
            case 'rejected': return <FaTimesCircle className="me-2" />;
            default: return null;
        }
    };

    const getStatusTitle = (status) => {
        switch(status) {
            case 'granted': return 'Granted Patent Details';
            case 'pending': return 'Pending Application Details';
            case 'rejected': return 'Rejected Application Details';
            default: return 'IPR Details';
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

            {/* Status Header */}
            <Row className="mb-4">
                <Col>
                    <div className="status-header">
                        {Object.keys(iprData).map(status => (
                            <div 
                                key={status}
                                className={`status-item ${status} ${selectedStatus === status ? 'active' : ''}`}
                                onClick={() => {
                                    setSelectedStatus(status);
                                    setSelectedIPR(null);
                                }}
                            >
                                <div className="status-count">
                                    {iprData[status]?.length || 0}
                                </div>
                                <div className="status-label">
                                    {status} IPRs
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>

            {/* Main Content */}
            <Row>
                <Col md={5}>
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

                <Col md={7}>
                    {renderIPRDetails()}
                </Col>
            </Row>

            {/* Add New IPR Modal */}
            <Modal 
                show={showAddModal} 
                onHide={() => setShowAddModal(false)} 
                size="lg"
                className="neumorphic-modal"
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
                                value={newIPR.title}
                                onChange={(e) => setNewIPR({...newIPR, title: e.target.value})}
                                placeholder="Enter IPR title"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <Form.Select
                                value={newIPR.type}
                                onChange={(e) => setNewIPR({...newIPR, type: e.target.value})}
                            >
                                <option value="">Select type</option>
                                <option value="patent">Patent</option>
                                <option value="copyright">Copyright</option>
                                <option value="trademark">Trademark</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3}
                                value={newIPR.description}
                                onChange={(e) => setNewIPR({...newIPR, description: e.target.value})}
                                placeholder="Enter description"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Inventors</Form.Label>
                            <Form.Control 
                                type="text"
                                value={newIPR.inventors}
                                onChange={(e) => setNewIPR({...newIPR, inventors: e.target.value})}
                                placeholder="Enter inventors (comma separated)"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Filing Date</Form.Label>
                            <Form.Control 
                                type="date"
                                value={newIPR.filingDate}
                                onChange={(e) => setNewIPR({...newIPR, filingDate: e.target.value})}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="purple" onClick={() => setShowAddModal(false)}>
                        Submit Application
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ResearcherIPR;