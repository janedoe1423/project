import React, { useState, useEffect } from 'react';
import { Card, Badge, Button, Modal, Form, ProgressBar } from 'react-bootstrap';
import { FaFileAlt, FaChartLine, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaIndustry, FaUniversity, FaBuilding } from 'react-icons/fa';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
    BarChart,
    Bar,
    LabelList
} from 'recharts';

const StartupFunding = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [showNewApplication, setShowNewApplication] = useState(false);
    const [selectedFunding, setSelectedFunding] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (showDetails || showNewApplication) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [showDetails, showNewApplication]);

    // Sample data - replace with actual API data
    const fundingApplications = [
        {
            id: 1,
            applicationDate: '2024-03-15',
            requestedAmount: 500000,
            status: 'approved',
            fundingType: 'Seed Funding',
            investorType: 'Angel Investor',
            valuation: 5000000,
            equityOffered: 10,
            purpose: 'Market Expansion',
            timeline: '12 months',
            milestones: [
                { title: 'Product Launch', date: '2024-06-01' },
                { title: 'Market Entry', date: '2024-09-01' },
                { title: 'Break Even', date: '2025-03-01' }
            ],
            financialProjections: [
                { month: 'Jan', revenue: 50000 },
                { month: 'Feb', revenue: 65000 },
                { month: 'Mar', revenue: 80000 },
                { month: 'Apr', revenue: 95000 },
                { month: 'May', revenue: 120000 },
                { month: 'Jun', revenue: 150000 }
            ]
        },
        {
            id: 2,
            applicationDate: '2024-03-20',
            requestedAmount: 1000000,
            status: 'pending',
            fundingType: 'Series A',
            investorType: 'Venture Capital',
            valuation: 10000000,
            equityOffered: 15,
            purpose: 'Technology Development',
            timeline: '18 months'
        },
        // Add more sample applications as needed
    ];

    const sectorWiseAllocation = [
        { sector: 'Technology', amount: 300000 },
        { sector: 'Healthcare', amount: 200000 },
        { sector: 'Finance', amount: 150000 },
        { sector: 'Education', amount: 50000 },
        { sector: 'Retail', amount: 100000 },
    ];

    const sectorAllocation = [
        { sector: 'R&D', amount: 200000 },
        { sector: 'Marketing', amount: 150000 },
        { sector: 'Operations', amount: 100000 },
        { sector: 'HR', amount: 50000 },
        { sector: 'Sales', amount: 75000 },
    ];

    const getStatusBadge = (status) => {
        switch (status) {
            case 'approved':
                return <Badge bg="success"><FaCheckCircle /> Approved</Badge>;
            case 'rejected':
                return <Badge bg="danger"><FaTimesCircle /> Rejected</Badge>;
            case 'pending':
                return <Badge bg="warning"><FaHourglassHalf /> Pending</Badge>;
            default:
                return <Badge bg="secondary">Unknown</Badge>;
        }
    };

    const handleShowDetails = (funding) => {
        setSelectedFunding(funding);
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
        setSelectedFunding(null);
    };

    const handleNewApplication = () => {
        setShowNewApplication(true);
    };

    const handleCloseNewApplication = () => {
        setShowNewApplication(false);
    };

    // New state for funding stages
    const fundingStages = [
        {
            type: 'Government Funding',
            stages: [
                { 
                    name: 'Initial Screening', 
                    status: 'completed', 
                    progress: 100,
                    description: 'Preliminary application review',
                    icon: <FaFileAlt />
                },
                { 
                    name: 'Detailed Evaluation', 
                    status: 'in-progress', 
                    progress: 60,
                    description: 'Comprehensive business plan assessment',
                    icon: <FaChartLine />
                },
                { 
                    name: 'Technical Validation', 
                    status: 'pending', 
                    progress: 0,
                    description: 'Technical feasibility and innovation assessment',
                    icon: <FaIndustry />
                },
                { 
                    name: 'Final Approval', 
                    status: 'pending', 
                    progress: 0,
                    description: 'Final funding sanctioning',
                    icon: <FaUniversity />
                }
            ]
        },
        {
            type: 'Private Funding',
            stages: [
                { 
                    name: 'Investor Pitch', 
                    status: 'completed', 
                    progress: 100,
                    description: 'Initial presentation to potential investors',
                    icon: <FaFileAlt />
                },
                { 
                    name: 'Due Diligence', 
                    status: 'in-progress', 
                    progress: 70,
                    description: 'Comprehensive financial and operational review',
                    icon: <FaBuilding />
                },
                { 
                    name: 'Term Sheet Negotiation', 
                    status: 'pending', 
                    progress: 0,
                    description: 'Discussing investment terms and conditions',
                    icon: <FaChartLine />
                },
                { 
                    name: 'Final Investment', 
                    status: 'pending', 
                    progress: 0,
                    description: 'Closing the investment round',
                    icon: <FaUniversity />
                }
            ]
        }
    ];

    // Helper function to get progress bar variant
    const getProgressVariant = (status) => {
        switch (status) {
            case 'completed': return 'success';
            case 'in-progress': return 'warning';
            case 'pending': return 'secondary';
            default: return 'secondary';
        }
    };

    // Render funding stages progress
    const renderFundingStagesProgress = () => {
        return (
            <div className="funding-stages-container mt-4">
                <h3 className="mb-4">Funding Journey Tracking</h3>
                {fundingStages.map((fundingType, typeIndex) => (
                    <Card key={typeIndex} className="mb-4 shadow-sm">
                        <Card.Header>
                            <h5>{fundingType.type}</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="row">
                                {fundingType.stages.map((stage, stageIndex) => (
                                    <div key={stageIndex} className="col-md-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="me-3">
                                                {stage.icon}
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-2">{stage.name}</h6>
                                                <ProgressBar 
                                                    now={stage.progress} 
                                                    variant={getProgressVariant(stage.status)}
                                                    className="mb-2"
                                                />
                                                <small className="text-muted">
                                                    {stage.description}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        );
    };

    return (
        <div className="startup_funding_container p-4">
            <div className="startup_funding_header d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">Funding Applications Overview</h2>
                <Button 
                    variant="primary" 
                    onClick={handleNewApplication}
                    className="startup_funding_new-button d-flex align-items-center gap-2"
                >
                    <FaFileAlt /> New Application
                </Button>
            </div>

            <div className="startup_funding_applications row">
                {fundingApplications && fundingApplications.map((funding) => (
                    <div key={funding.id} className="col-md-6 col-lg-4 mb-4">
                        <Card className="startup_funding_card h-100 shadow-sm">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h5 className="mb-1">{funding.fundingType}</h5>
                                        <div className="text-muted small">
                                            <FaCalendarAlt className="me-1" />
                                            {new Date(funding.applicationDate).toLocaleDateString()}
                                        </div>
                                    </div>
                                    {getStatusBadge(funding.status)}
                                </div>

                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Requested Amount:</span>
                                        <strong>${funding.requestedAmount.toLocaleString()}</strong>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Valuation:</span>
                                        <strong>${funding.valuation.toLocaleString()}</strong>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Equity Offered:</span>
                                        <strong>{funding.equityOffered}%</strong>
                                    </div>
                                </div>

                                <Button 
                                    variant="outline-primary" 
                                    className="w-100"
                                    onClick={() => handleShowDetails(funding)}
                                >
                                    View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <Modal 
                show={showDetails} 
                onHide={handleCloseDetails}
                size="lg"
                centered
                className="startup_funding_modal details-modal"
                backdropClassName="custom-backdrop"
            >
                {selectedFunding && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedFunding.fundingType} Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="startup_funding_modal-body">
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h6>Application Overview</h6>
                                    <table className="table table-sm">
                                        <tbody>
                                            <tr>
                                                <td>Status:</td>
                                                <td>{getStatusBadge(selectedFunding.status)}</td>
                                            </tr>
                                            <tr>
                                                <td>Requested Amount:</td>
                                                <td>${selectedFunding.requestedAmount.toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td>Investor Type:</td>
                                                <td>{selectedFunding.investorType}</td>
                                            </tr>
                                            <tr>
                                                <td>Purpose:</td>
                                                <td>{selectedFunding.purpose}</td>
                                            </tr>
                                            <tr>
                                                <td>Timeline:</td>
                                                <td>{selectedFunding.timeline}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-6">
                                    <h6>Financial Metrics</h6>
                                    {selectedFunding.financialProjections && (
                                        <div style={{ height: '200px' }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <AreaChart
                                                    data={selectedFunding.financialProjections}
                                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Area 
                                                        type="monotone" 
                                                        dataKey="revenue" 
                                                        stroke="#8884d8" 
                                                        fill="#8884d8" 
                                                    />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h6>Key Milestones</h6>
                                    <div className="startup_funding_timeline">
                                        {selectedFunding.milestones && selectedFunding.milestones.map((milestone, index) => (
                                            <div key={index} className="startup_funding_timeline-item">
                                                <div className="startup_funding_timeline-date">
                                                    {new Date(milestone.date).toLocaleDateString()}
                                                </div>
                                                <div className="startup_funding_timeline-content">
                                                    {milestone.title}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <h6>Sector Allocation</h6>
                                    <div style={{ height: '300px' }}>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={sectorAllocation}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="sector" />
                                                <YAxis />
                                                <Tooltip />
                                                <Bar dataKey="amount" fill="#8884d8">
                                                    <LabelList dataKey="amount" position="top" />
                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseDetails}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>

            <Modal 
                show={showNewApplication} 
                onHide={handleCloseNewApplication}
                size="lg"
                centered
                className="startup_funding_modal new-application-modal"
                backdropClassName="custom-backdrop"
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Startup Funding Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="new-funding-form">
                        <h5>Basic Information</h5>
                        <Form.Group controlId="companyName" className="form-group-custom">
                            <Form.Label>Company/Startup Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter company name" className="form-control-custom" />
                        </Form.Group>
                        <Form.Group controlId="registrationNumber" className="form-group-custom">
                            <Form.Label>Registration Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter registration number" className="form-control-custom" />
                        </Form.Group>
                        <Form.Group controlId="dateOfIncorporation" className="form-group-custom">
                            <Form.Label>Date of Incorporation</Form.Label>
                            <Form.Control type="date" className="form-control-custom" />
                        </Form.Group>

                            <h5>Founder(s) Information</h5>
                            <Form.Group controlId="founderName" className="form-group-custom">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter founder's name" className="form-control-custom" />
                            </Form.Group>
                            <Form.Group controlId="contactDetails" className="form-group-custom">
                                <Form.Label>Contact Details</Form.Label>
                                <Form.Control type="text" placeholder="Enter contact details" className="form-control-custom" />
                            </Form.Group>
                            <Form.Group controlId="role" className="form-group-custom">
                                <Form.Label>Role</Form.Label>
                                <Form.Control type="text" placeholder="Enter role" className="form-control-custom" />
                            </Form.Group>
                            <Form.Group controlId="experience" className="form-group-custom">
                                <Form.Label>Experience</Form.Label>
                                <Form.Control type="text" placeholder="Enter experience" className="form-control-custom" />
                            </Form.Group>

                        <h5>Funding Details</h5>
                        <Form.Group controlId="requestedAmount">
                            <Form.Label>Requested Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter requested amount" />
                        </Form.Group>
                        <Form.Group controlId="fundingType">
                            <Form.Label>Funding Type</Form.Label>
                            <Form.Control as="select">
                                <option>Seed</option>
                                <option>Series A</option>
                                {/* Add more options as needed */}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="investorType">
                            <Form.Label>Preferred Investor Type</Form.Label>
                            <Form.Control as="select">
                                <option>Angel</option>
                                <option>Venture Capital</option>
                                {/* Add more options as needed */}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="currentValuation">
                            <Form.Label>Current Valuation</Form.Label>
                            <Form.Control type="number" placeholder="Enter current valuation" />
                        </Form.Group>
                        <Form.Group controlId="equityOffered">
                            <Form.Label>Equity Offered (%)</Form.Label>
                            <Form.Control type="number" placeholder="Enter equity offered" />
                        </Form.Group>
                        <Form.Group controlId="timeline">
                            <Form.Label>Timeline for Fund Utilization</Form.Label>
                            <Form.Control type="text" placeholder="Enter timeline" />
                        </Form.Group>

                            {/* Add more sections for Business Overview, Financial Information, etc. */}

                        <Button variant="secondary" onClick={handleCloseNewApplication}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" className="submit-button-custom">
                            Submit Application
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseNewApplication}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" className="submit-button-custom">
                        Submit Application
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* New section for funding stages progress */}
            {renderFundingStagesProgress()}
        </div>
    );
};

export default StartupFunding;