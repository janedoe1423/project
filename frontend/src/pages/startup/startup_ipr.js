import React, { useState } from 'react';
import { 
    FaShieldAlt, FaUsers, FaFolder, FaCheckCircle, 
    FaHourglassHalf, FaTimesCircle, FaDownload, FaEye,
    FaPlus, FaEdit, FaTrash
} from 'react-icons/fa';
import { Card, ListGroup, Modal, Form, Button, Tabs, Tab } from 'react-bootstrap';
import './startup_ipr.css';

const StartupIPRRights = () => {
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
            },
            {
                id: 2,
                title: "Blockchain-Based Supply Chain System",
                patentNumber: "US987654321",
                grantDate: "2023-03-10",
                expiryDate: "2043-03-10",
                inventors: ["Alice Chen", "Bob Wilson"],
                description: "Decentralized supply chain tracking system",
                citations: 15,
                documents: [
                    { name: "Patent Document", type: "PDF" },
                    { name: "Implementation Guide", type: "PDF" }
                ]
            }
        ],
        pending: [
            {
                id: 3,
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
                ]
            }
        ],
        rejected: [
            {
                id: 4,
                title: "Neural Network Training Method",
                applicationNumber: "US2023/98765",
                filingDate: "2023-01-15",
                rejectionDate: "2023-06-20",
                reason: "Prior art exists",
                appealStatus: "Appeal filed on 2023-07-15",
                documents: [
                    { name: "Rejection Notice", type: "PDF" },
                    { name: "Appeal Document", type: "PDF" }
                ]
            }
        ]
    };

    const handleAddIPR = () => {
        // Add new IPR logic here
        setShowAddModal(false);
        setNewIPR({
            title: '',
            type: '',
            description: '',
            inventors: '',
            filingDate: ''
        });
    };

    const renderIPRList = () => {
        const currentList = iprData[selectedStatus] || [];
        return (
            <div className="startup_ipr_list">
                {currentList.map((ipr) => (
                    <Card 
                        key={ipr.id}
                        className={`startup_ipr_card ${selectedIPR?.id === ipr.id ? 'active' : ''}`}
                        onClick={() => setSelectedIPR(ipr)}
                    >
                        <Card.Body>
                            <div className="startup_ipr_card-header">
                                <FaShieldAlt className="startup_ipr_icon" />
                                <div className="startup_ipr_card-title">
                                    <h5>{ipr.title}</h5>
                                    <span className="startup_ipr_id">
                                        {selectedStatus === 'granted' ? ipr.patentNumber : ipr.applicationNumber}
                                    </span>
                                </div>
                            </div>
                            <div className="startup_ipr_card-content">
                                <p>{ipr.description}</p>
                                <div className="startup_ipr_card-footer">
                                    <span>
                                        {selectedStatus === 'granted' ? `Granted: ${ipr.grantDate}` :
                                         selectedStatus === 'pending' ? `Filed: ${ipr.filingDate}` :
                                         `Rejected: ${ipr.rejectionDate}`}
                                    </span>
                                    <div className="startup_ipr_actions">
                                        <Button variant="link" size="sm">
                                            <FaEdit />
                                        </Button>
                                        <Button variant="link" size="sm" className="text-danger">
                                            <FaTrash />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        );
    };

    const renderDetailContent = () => {
        if (!selectedIPR) return null;

        switch (selectedStatus) {
            case 'granted':
                return (
                    <div className="startup_ipr_detail-content">
                        <div className="startup_ipr_detail-section">
                            <h6>Patent Information</h6>
                            <p><strong>Patent Number:</strong> {selectedIPR.patentNumber}</p>
                            <p><strong>Grant Date:</strong> {selectedIPR.grantDate}</p>
                            <p><strong>Expiry Date:</strong> {selectedIPR.expiryDate}</p>
                            <p><strong>Citations:</strong> {selectedIPR.citations}</p>
                        </div>
                        
                        <div className="startup_ipr_detail-section">
                            <h6>Inventors</h6>
                            <ListGroup variant="flush">
                                {selectedIPR.inventors?.map((inventor, index) => (
                                    <ListGroup.Item key={index}>
                                        <FaUsers className="me-2" />
                                        {inventor}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>

                        <div className="startup_ipr_detail-section">
                            <h6>Documents</h6>
                            {selectedIPR.documents?.map((doc, index) => (
                                <div key={index} className="startup_ipr_document-item">
                                    <span>
                                        <FaFolder className="me-2" />
                                        {doc.name}
                                    </span>
                                    <div>
                                        <Button variant="link" size="sm">
                                            <FaEye /> View
                                        </Button>
                                        <Button variant="link" size="sm">
                                            <FaDownload /> Download
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            
            case 'pending':
                return (
                    <div className="startup_ipr_detail-content">
                        <div className="startup_ipr_detail-section">
                            <h6>Application Status</h6>
                            <p><strong>Application Number:</strong> {selectedIPR.applicationNumber}</p>
                            <p><strong>Filing Date:</strong> {selectedIPR.filingDate}</p>
                            <p><strong>Current Stage:</strong> {selectedIPR.currentStage?.name}</p>
                            <p><strong>Estimated Completion:</strong> {selectedIPR.currentStage?.estimatedCompletion}</p>
                        </div>

                        <div className="startup_ipr_detail-section">
                            <h6>Progress Timeline</h6>
                            <div className="startup_ipr_timeline">
                                {selectedIPR.progressStages?.map((stage, index) => (
                                    <div key={index} className={`startup_ipr_timeline-item ${stage.completed ? 'completed' : ''} ${stage.current ? 'current' : ''}`}>
                                        <div className="startup_ipr_timeline-marker">
                                            {stage.completed ? <FaCheckCircle /> : 
                                             stage.current ? <FaHourglassHalf /> : 
                                             <div className="startup_ipr_timeline-dot" />}
                                        </div>
                                        <div className="startup_ipr_timeline-content">
                                            <h6>{stage.name}</h6>
                                            {stage.date && <p>{stage.date}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'rejected':
                return (
                    <div className="startup_ipr_detail-content">
                        <div className="startup_ipr_detail-section">
                            <h6>Rejection Details</h6>
                            <p><strong>Application Number:</strong> {selectedIPR.applicationNumber}</p>
                            <p><strong>Filing Date:</strong> {selectedIPR.filingDate}</p>
                            <p><strong>Rejection Date:</strong> {selectedIPR.rejectionDate}</p>
                            <p><strong>Reason:</strong> {selectedIPR.reason}</p>
                            <p><strong>Appeal Status:</strong> {selectedIPR.appealStatus}</p>
                        </div>

                        <div className="startup_ipr_detail-section">
                            <h6>Documents</h6>
                            {selectedIPR.documents?.map((doc, index) => (
                                <div key={index} className="startup_ipr_document-item">
                                    <span>
                                        <FaFolder className="me-2" />
                                        {doc.name}
                                    </span>
                                    <div>
                                        <Button variant="link" size="sm">
                                            <FaEye /> View
                                        </Button>
                                        <Button variant="link" size="sm">
                                            <FaDownload /> Download
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="startup_ipr_container">
            <div className="startup_ipr_header">
                <h2>Intellectual Property Rights</h2>
                <Button 
                    variant="primary" 
                    onClick={() => setShowAddModal(true)}
                    className="startup_ipr_add-button"
                >
                    <FaPlus /> Add New IPR
                </Button>
            </div>

            <div className="startup_ipr_content">
                <div className="startup_ipr_sidebar">
                    <div className="startup_ipr_status-tabs">
                        <Button 
                            variant={selectedStatus === 'granted' ? 'primary' : 'light'}
                            onClick={() => setSelectedStatus('granted')}
                        >
                            <FaCheckCircle /> Granted ({iprData.granted.length})
                        </Button>
                        <Button 
                            variant={selectedStatus === 'pending' ? 'primary' : 'light'}
                            onClick={() => setSelectedStatus('pending')}
                        >
                            <FaHourglassHalf /> Pending ({iprData.pending.length})
                        </Button>
                        <Button 
                            variant={selectedStatus === 'rejected' ? 'primary' : 'light'}
                            onClick={() => setSelectedStatus('rejected')}
                        >
                            <FaTimesCircle /> Rejected ({iprData.rejected.length})
                        </Button>
                    </div>
                    {renderIPRList()}
                </div>

                <div className="startup_ipr_details">
                    {renderDetailContent()}
                </div>
            </div>

            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New IPR</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={newIPR.title}
                                onChange={(e) => setNewIPR({...newIPR, title: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <Form.Select 
                                value={newIPR.type}
                                onChange={(e) => setNewIPR({...newIPR, type: e.target.value})}
                            >
                                <option value="">Select Type</option>
                                <option value="patent">Patent</option>
                                <option value="trademark">Trademark</option>
                                <option value="copyright">Copyright</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3}
                                value={newIPR.description}
                                onChange={(e) => setNewIPR({...newIPR, description: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Inventors</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Separate multiple inventors with commas"
                                value={newIPR.inventors}
                                onChange={(e) => setNewIPR({...newIPR, inventors: e.target.value})}
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
                    <Button variant="primary" onClick={handleAddIPR}>
                        Add IPR
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default StartupIPRRights;