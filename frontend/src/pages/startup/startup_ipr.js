import React, { useState, useEffect } from 'react';
import { 
    FaShieldAlt, FaUsers, FaFolder, FaCheckCircle, 
    FaHourglassHalf, FaTimesCircle, FaDownload, FaEye,
    FaPlus, FaEdit, FaTrash, FaFileAlt
} from 'react-icons/fa';
import { Card, ListGroup, Modal, Form, Button, Tabs, Tab } from 'react-bootstrap';
import { useIPR } from '../ipr-professional/IPRContent';
import './startup_ipr.css';

const StartupIPRRights = () => {
    const { allIPRs, addNewIPR, acceptIPRRequest, requestIPR, isIPRAccepted } = useIPR();
    const [selectedStatus, setSelectedStatus] = useState('pending');
    const [selectedIPR, setSelectedIPR] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newIPR, setNewIPR] = useState({
        title: '',
        type: '',
        description: '',
        inventors: '',
        filingDate: '',
        applicationNumber: '',
        currentStage: {
            name: 'Filing',
            startDate: new Date().toISOString().split('T')[0],
            estimatedCompletion: ''
        },
        progressStages: [
            { name: 'Filing', completed: false, current: true },
            { name: 'Formality Check', completed: false, current: false },
            { name: 'Technical Review', completed: false, current: false },
            { name: 'Examiner Interview', completed: false, current: false },
            { name: 'Final Decision', completed: false, current: false }
        ],
        requestForPatent: false,
        applicationAcceptance: false,
        iprSpecificationSubmitted: false,
        iprFiled: false,
        iprStatus: 'pending'
    });
    const [iprRequestStatus, setIprRequestStatus] = useState(null);
    const [showRequestModal, setShowRequestModal] = useState(false);
    const [requestMessage, setRequestMessage] = useState('');

    // Render IPR List based on selected status
    const renderIPRList = () => {
        const currentList = allIPRs[selectedStatus] || [];
        
        return (
            <ListGroup className="startup_ipr_list">
                {currentList.map((ipr) => (
                    <ListGroup.Item
                        key={ipr.id}
                        action
                        active={selectedIPR?.id === ipr.id}
                        onClick={() => setSelectedIPR(ipr)}
                        className="startup_ipr_list-item"
                    >
                        <div className="startup_ipr_list-item-content">
                            <h6>{ipr.title}</h6>
                            <p className="text-muted">
                                {ipr.applicationNumber} • {ipr.filingDate}
                            </p>
                            <div className="startup_ipr_list-item-status">
                                {ipr.status === 'pending' && (
                                    <span className="status-badge pending">
                                        <FaHourglassHalf /> Pending
                                    </span>
                                )}
                                {ipr.status === 'granted' && (
                                    <span className="status-badge granted">
                                        <FaCheckCircle /> Granted
                                    </span>
                                )}
                                {ipr.status === 'rejected' && (
                                    <span className="status-badge rejected">
                                        <FaTimesCircle /> Rejected
                                    </span>
                                )}
                            </div>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        );
    };

    const handleAddIPR = () => {
        const currentDate = new Date();
        const newIprEntry = {
            id: Date.now(),
            ...newIPR,
            status: 'pending',
            filingDate: currentDate.toISOString().split('T')[0],
            applicationNumber: `IPR${Math.floor(Math.random() * 10000)}/${currentDate.getFullYear()}`,
            documents: [
                { name: 'Application Form', type: 'PDF' },
                { name: 'Technical Specifications', type: 'DOC' }
            ],
            lastUpdated: currentDate.toISOString(),
            lastUpdatedBy: 'Startup User',
            iprStatus: 'requested'
        };

        addNewIPR(newIprEntry);
        setShowAddModal(false);
        setNewIPR({
            title: '',
            type: '',
            description: '',
            inventors: '',
            filingDate: '',
            currentStage: {
                name: 'Filing',
                startDate: new Date().toISOString().split('T')[0],
                estimatedCompletion: ''
            },
            progressStages: [
                { name: 'Filing', completed: false, current: true },
                { name: 'Formality Check', completed: false, current: false },
                { name: 'Technical Review', completed: false, current: false },
                { name: 'Examiner Interview', completed: false, current: false },
                { name: 'Final Decision', completed: false, current: false }
            ],
            requestForPatent: false,
            applicationAcceptance: false,
            iprSpecificationSubmitted: false,
            iprFiled: false,
            iprStatus: 'requested'
        });
    };

    const handleRequestIPR = () => {
        requestIPR(newIPR);
        console.log("Request for IPR permission sent:", requestMessage);
        setShowRequestModal(false);
        setRequestMessage('');
    };

    const handleAcceptIPR = (iprId) => {
        acceptIPRRequest(iprId);
    };

    const handleSubmitIPR = () => {
        if (iprRequestStatus === 'accepted') {
            // Submit IPR details logic here
        }
    };

    // Effect to update selected IPR when status changes
    useEffect(() => {
        if (selectedIPR) {
            const updatedIPR = [...allIPRs.granted, ...allIPRs.pending, ...allIPRs.rejected]
                .find(ipr => ipr.id === selectedIPR.id);
            if (updatedIPR) {
                setSelectedIPR(updatedIPR);
            }
        }
    }, [allIPRs, selectedIPR]);

    const renderDetailContent = () => {
        if (!selectedIPR) return null;
        
        return (
            <Card className="startup_ipr_detail-card">
                <div className="startup_ipr_detail-header">
                    <h3>{selectedIPR.title}</h3>
                    <div className="startup_ipr_detail-meta">
                        <span><FaFolder /> {selectedIPR.type}</span>
                        <span><FaUsers /> {selectedIPR.inventors}</span>
                    </div>
                </div>

                <div className="startup_ipr_detail-content">
                    <div className="startup_ipr_detail-section">
                        <h5>Description</h5>
                        <p>{selectedIPR.description}</p>
                    </div>

                    <div className="startup_ipr_detail-section">
                        <h5>Progress Stages</h5>
                        <div className="startup_ipr_stages">
                            {selectedIPR.progressStages.map((stage, index) => (
                                <div 
                                    key={index} 
                                    className={`stage-item ${stage.completed ? 'completed' : ''} ${stage.current ? 'current' : ''}`}
                                >
                                    <div className="stage-marker">
                                        {stage.completed ? <FaCheckCircle /> : index + 1}
                                    </div>
                                    <div className="stage-info">
                                        <h6>{stage.name}</h6>
                                        {stage.current && (
                                            <p className="text-muted">
                                                Started: {new Date(selectedIPR.currentStage.startDate).toLocaleDateString()}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="startup_ipr_detail-section">
                        <h5>Documents</h5>
                        <div className="startup_ipr_documents">
                            {selectedIPR.documents.map((doc, index) => (
                                <div key={index} className="document-item">
                                    <FaFileAlt />
                                    <span>{doc.name}</span>
                                    <div className="document-actions">
                                        <Button variant="link" size="sm">
                                            <FaDownload /> Download
                                        </Button>
                                        <Button variant="link" size="sm">
                                            <FaEye /> View
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="startup_ipr_detail-section">
                        <h5>Status Updates</h5>
                        <div className="startup_ipr_updates">
                            <div className="update-item">
                                <span className="update-date">
                                    {new Date(selectedIPR.lastUpdated).toLocaleDateString()}
                                </span>
                                <span className="update-by">
                                    Updated by: {selectedIPR.lastUpdatedBy}
                                </span>
                                <span className={`update-status ${selectedIPR.status}`}>
                                    Status: {selectedIPR.status.charAt(0).toUpperCase() + selectedIPR.status.slice(1)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        );
    };

    return (
        <div className="startup_ipr_container">
            <div className="startup_ipr_header">
                <h2>Intellectual Property Rights</h2>
                <Button 
                    variant="primary" 
                    onClick={() => setShowAddModal(true)}
                    className="startup_ipr_add-button"
                    disabled={!isIPRAccepted}
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
                            <FaCheckCircle /> Granted ({allIPRs.granted.length})
                        </Button>
                        <Button 
                            variant={selectedStatus === 'pending' ? 'primary' : 'light'}
                            onClick={() => setSelectedStatus('pending')}
                        >
                            <FaHourglassHalf /> Pending ({allIPRs.pending.length})
                        </Button>
                        <Button 
                            variant={selectedStatus === 'rejected' ? 'primary' : 'light'}
                            onClick={() => setSelectedStatus('rejected')}
                        >
                            <FaTimesCircle /> Rejected ({allIPRs.rejected.length})
                        </Button>
                    </div>
                    {renderIPRList()}
                </div>

                <div className="startup_ipr_details">
                    {selectedIPR && renderDetailContent()}
                </div>
            </div>

            {/* Add Modal */}
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
                                <option value="Patent">Patent</option>
                                <option value="Trademark">Trademark</option>
                                <option value="Copyright">Copyright</option>
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
                                value={newIPR.inventors}
                                onChange={(e) => setNewIPR({...newIPR, inventors: e.target.value})}
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
            {iprRequestStatus === 'accepted' && (
                <Button onClick={handleSubmitIPR}>Submit IPR Details</Button>
            )}

            <Button 
                variant="secondary" 
                onClick={() => setShowRequestModal(true)}
                className="startup_ipr_request-button"
            >
                Request Permission to Apply for IPR
            </Button>

            <Modal show={showRequestModal} onHide={() => setShowRequestModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Request Permission to Apply for IPR</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="requestMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={requestMessage}
                                onChange={(e) => setRequestMessage(e.target.value)}
                                placeholder="Please provide your message here..."
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowRequestModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleRequestIPR}>
                        Send Request
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default StartupIPRRights;