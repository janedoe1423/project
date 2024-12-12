import React, { useState } from 'react';
import { Card, Badge, Button, Modal, Form, Col, Row } from 'react-bootstrap';
import { FaFileAlt, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaUpload, FaBuilding, FaUsers, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    LabelList,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import './startup_funding.css';
import { useNavigate } from 'react-router-dom';

const submitFundingApplication = async (applicationData) => {
    try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/funding/applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(applicationData)
        });

        if (!response.ok) {
            throw new Error('Failed to submit application');
        }

        const data = await response.json();
        return {
            success: true,
            data
        };
    } catch (error) {
        console.error('Error submitting funding application:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

const StartupFunding = () => {
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState(false);
    const [selectedFunding, setSelectedFunding] = useState(null);
    const [showNewApplication, setShowNewApplication] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [validated, setValidated] = useState(false);

    // Sample funding applications with more detailed data
    const fundingApplications = [
        {
            id: 1,
            startupName: "EcoTech Solutions",
            applicationDate: '2024-03-15',
            requestedAmount: 500000,
            status: 'approved',
            fundingType: 'Seed Funding',
            investorType: 'Angel Investor',
            valuation: 5000000,
            equityOffered: 10,
            purpose: 'Market Expansion & Product Development',
            timeline: '12 months',
            industry: 'Clean Technology',
            location: 'San Francisco, CA',
            teamSize: 15,
            foundedYear: 2022,
            currentRevenue: 250000,
            projectedRevenue: 1500000,
            patentStatus: 'Two patents pending',
            competitors: ['GreenTech Inc', 'EcoSolutions', 'CleanFuture'],
            marketSize: '8.5B USD',
            milestones: [
                { title: 'Product Launch', date: '2024-06-01', description: 'Launch of EcoTech 2.0 Platform' },
                { title: 'Market Entry', date: '2024-09-01', description: 'Expansion to European Markets' },
                { title: 'Break Even', date: '2025-03-01', description: 'Projected Break-Even Point' }
            ],
            financialProjections: [
                { month: 'Jan', revenue: 50000, expenses: 40000, profit: 10000 },
                { month: 'Feb', revenue: 65000, expenses: 45000, profit: 20000 },
                { month: 'Mar', revenue: 80000, expenses: 50000, profit: 30000 },
                { month: 'Apr', revenue: 95000, expenses: 55000, profit: 40000 },
                { month: 'May', revenue: 120000, expenses: 60000, profit: 60000 },
                { month: 'Jun', revenue: 150000, expenses: 70000, profit: 80000 }
            ],
            fundAllocation: [
                { category: 'R&D', percentage: 40 },
                { category: 'Marketing', percentage: 25 },
                { category: 'Operations', percentage: 20 },
                { category: 'HR', percentage: 15 }
            ],
            teamMembers: [
                { name: 'Sarah Johnson', role: 'CEO', experience: '10 years in CleanTech' },
                { name: 'Dr. Michael Chen', role: 'CTO', experience: 'PhD in Environmental Engineering' },
                { name: 'David Miller', role: 'CFO', experience: '15 years in Finance' }
            ],
            traction: {
                users: 5000,
                partnerships: 3,
                pilotPrograms: 2
            }
        },
        {
            id: 2,
            startupName: "HealthAI Solutions",
            applicationDate: '2024-03-20',
            requestedAmount: 1000000,
            status: 'pending',
            fundingType: 'Series A',
            investorType: 'Venture Capital',
            valuation: 10000000,
            equityOffered: 15,
            purpose: 'AI Platform Development & Team Expansion',
            timeline: '18 months',
            industry: 'Healthcare Technology',
            location: 'Boston, MA',
            teamSize: 25,
            foundedYear: 2021,
            currentRevenue: 750000,
            projectedRevenue: 3000000,
            patentStatus: 'Three patents granted',
            competitors: ['MedTech AI', 'HealthCore', 'AIHealth'],
            marketSize: '12B USD',
            milestones: [
                { title: 'AI Engine 2.0', date: '2024-07-01', description: 'Launch of Enhanced AI Diagnostics' },
                { title: 'Hospital Partnerships', date: '2024-10-01', description: '50 Hospital Network Integration' },
                { title: 'International Expansion', date: '2025-01-01', description: 'Entry into Asian Markets' }
            ],
            financialProjections: [
                { month: 'Jul', revenue: 150000, expenses: 100000, profit: 50000 },
                { month: 'Aug', revenue: 180000, expenses: 110000, profit: 70000 },
                { month: 'Sep', revenue: 220000, expenses: 130000, profit: 90000 },
                { month: 'Oct', revenue: 270000, expenses: 150000, profit: 120000 },
                { month: 'Nov', revenue: 320000, expenses: 170000, profit: 150000 },
                { month: 'Dec', revenue: 400000, expenses: 200000, profit: 200000 }
            ],
            fundAllocation: [
                { category: 'Technology Development', percentage: 45 },
                { category: 'Sales & Marketing', percentage: 25 },
                { category: 'Team Expansion', percentage: 20 },
                { category: 'Operations', percentage: 10 }
            ],
            teamMembers: [
                { name: 'Dr. Emily Wong', role: 'CEO', experience: '15 years in Healthcare Tech' },
                { name: 'Alex Turner', role: 'CTO', experience: 'Ex-Google AI Lead' },
                { name: 'Lisa Martinez', role: 'COO', experience: '12 years in Operations' }
            ],
            traction: {
                users: 10000,
                partnerships: 5,
                pilotPrograms: 3
            }
        }
    ];

    // Continue in next part...
        // Form state with more detailed fields
        const [formData, setFormData] = useState({
            basicInfo: {
                startupName: '',
                registrationNumber: '',
                incorporationDate: '',
                industry: '',
                location: '',
                website: ''
            },
            founderInfo: {
                name: '',
                email: '',
                phone: '',
                linkedin: '',
                experience: '',
                previousStartups: ''
            },
            fundingDetails: {
                requestedAmount: '',
                fundingType: '',
                investorType: '',
                valuation: '',
                equityOffered: '',
                timeline: '',
                purpose: '',
                marketSize: ''
            },
            teamInfo: {
                teamSize: '',
                keyMembers: [],
                hiring: ''
            },
            financials: {
                currentRevenue: '',
                projectedRevenue: '',
                burnRate: '',
                runway: ''
            },
            documents: {
                pitchDeck: null,
                financialModel: null,
                marketResearch: null
            }
        });
    
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
    
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
    
        const renderDetailedModal = () => {
            if (!selectedFunding) return null;
    
            return (
                <Modal 
                    show={showDetails} 
                    onHide={() => setShowDetails(false)}
                    className="startup_funding_modal"
                    size="xl"
                    centered
                    backdrop={true}
                >
                    <Modal.Header closeButton className="gradient-header">
                        <Modal.Title>
                            <div className="d-flex align-items-center">
                                <FaBuilding className="me-2" />
                                {selectedFunding.startupName}
                            </div>
                            <div className="modal-subtitle">
                                {selectedFunding.fundingType} Application Details
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="funding-details-container">
                            {/* Overview Section */}
                            <section className="detail-section">
                                <h5><FaChartLine className="me-2" />Company Overview</h5>
                                <Row>
                                    <Col md={6}>
                                        <div className="info-card">
                                            <div className="info-label">Industry</div>
                                            <div className="info-value">{selectedFunding.industry}</div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="info-card">
                                            <div className="info-label">Location</div>
                                            <div className="info-value">{selectedFunding.location}</div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="info-card">
                                            <div className="info-label">Team Size</div>
                                            <div className="info-value">{selectedFunding.teamSize} employees</div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="info-card">
                                            <div className="info-label">Founded</div>
                                            <div className="info-value">{selectedFunding.foundedYear}</div>
                                        </div>
                                    </Col>
                                </Row>
                            </section>
    
                            {/* Financial Metrics */}
                            <section className="detail-section">
                                <h5><FaMoneyBillWave className="me-2" />Financial Metrics</h5>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <AreaChart data={selectedFunding.financialProjections}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" name="Revenue" />
                                            <Area type="monotone" dataKey="expenses" stroke="#82ca9d" fill="#82ca9d" name="Expenses" />
                                            <Area type="monotone" dataKey="profit" stroke="#ffc658" fill="#ffc658" name="Profit" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </section>
    
                            {/* Fund Allocation */}
                            <section className="detail-section">
                                <h5>Fund Allocation</h5>
                                <Row>
                                    <Col md={6}>
                                        <ResponsiveContainer width="100%" height={300}>
                                            <PieChart>
                                                <Pie
                                                    data={selectedFunding.fundAllocation}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                                    outerRadius={80}
                                                    fill="#8884d8"
                                                    dataKey="percentage"
                                                >
                                                    {selectedFunding.fundAllocation.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </Col>
                                    <Col md={6}>
                                        <div className="allocation-details">
                                            {selectedFunding.fundAllocation.map((item, index) => (
                                                <div key={index} className="allocation-item">
                                                    <span className="allocation-dot" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                                                    <span className="allocation-category">{item.category}</span>
                                                    <span className="allocation-percentage">{item.percentage}%</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                            </section>
    
                            {/* Team Section */}
                            <section className="detail-section">
                                <h5><FaUsers className="me-2" />Key Team Members</h5>
                                <div className="team-grid">
                                    {selectedFunding.teamMembers.map((member, index) => (
                                        <div key={index} className="team-card">
                                            <div className="team-member-name">{member.name}</div>
                                            <div className="team-member-role">{member.role}</div>
                                            <div className="team-member-experience">{member.experience}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
    
                            {/* Milestones */}
                            <section className="detail-section">
                                <h5><FaCalendarAlt className="me-2" />Key Milestones</h5>
                                <div className="timeline-container">
                                    {selectedFunding.milestones.map((milestone, index) => (
                                        <div key={index} className="timeline-item">
                                            <div className="timeline-date">
                                                {new Date(milestone.date).toLocaleDateString()}
                                            </div>
                                            <div className="timeline-content">
                                                <h6>{milestone.title}</h6>
                                                <p>{milestone.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowDetails(false)}>
                            Close
                        </Button>
                        <Button variant="primary">
                            Download Details
                        </Button>
                    </Modal.Footer>
                </Modal>
            );
        };
    
        // Add new validation helper
        const validateFinancialProjections = (projections) => {
            // Basic validation rules for financial projections
            if (!projections.currentRevenue || !projections.projectedRevenue) {
                return false;
            }
            
            // Ensure projected revenue is realistic (e.g., not more than 10x current revenue)
            if (projections.projectedRevenue > projections.currentRevenue * 10) {
                return false;
            }
            
            return true;
        };
    
        // Add new state for form validation
        const [formErrors, setFormErrors] = useState({});
        const [isSubmitting, setIsSubmitting] = useState(false);
    
        // Add file upload state
        const [uploadedFiles, setUploadedFiles] = useState({
            pitchDeck: null,
            businessPlan: null,
            financialProjections: null,
            iprDocuments: null,
            pastFundingProof: null
        });
    
        // Handle file upload
        const handleFileUpload = (event, fileType) => {
            const file = event.target.files[0];
            if (file) {
                // Validate file size (max 10MB) and type
                if (file.size > 10 * 1024 * 1024) {
                    setFormErrors(prev => ({
                        ...prev,
                        [fileType]: 'File size should be less than 10MB'
                    }));
                    return;
                }
    
                setUploadedFiles(prev => ({
                    ...prev,
                    [fileType]: file
                }));
    
                // Clear error if exists
                setFormErrors(prev => ({
                    ...prev,
                    [fileType]: null
                }));
            }
        };
    
        // Handle form submission
        const handleSubmit = async (event) => {
            event.preventDefault();
            setIsSubmitting(true);
            
            try {
                // Prepare form data for submission
                const applicationData = {
                    id: Date.now(), // Generate a temporary ID
                    startupName: formData.basicInfo.startupName,
                    applicationDate: new Date().toISOString(),
                    requestedAmount: parseFloat(formData.fundingDetails.requestedAmount),
                    status: 'pending',
                    fundingType: formData.fundingDetails.fundingType,
                    investorType: formData.fundingDetails.investorType,
                    valuation: parseFloat(formData.fundingDetails.valuation),
                    equityOffered: parseFloat(formData.fundingDetails.equityOffered),
                    purpose: formData.fundingDetails.purpose,
                    timeline: formData.fundingDetails.timeline,
                    industry: formData.basicInfo.industry,
                    location: formData.basicInfo.location,
                    documents: uploadedFiles,
                    teamMembers: formData.teamMembers || [],
                    financialProjections: formData.financials || [],
                    milestones: formData.milestones || []
                };

                // Navigate to Funding page with application data
                navigate('/funding', { 
                    state: { 
                        newApplication: applicationData,
                        fromStartupFunding: true 
                    }
                });
                
                setShowNewApplication(false);
                
            } catch (error) {
                setFormErrors(prev => ({
                    ...prev,
                    submit: 'Failed to prepare application. Please try again.'
                }));
            } finally {
                setIsSubmitting(false);
            }
        };
    
        // Update the form section in the modal
        const renderApplicationForm = () => (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/* Basic Information */}
                <section className="detail-section">
                    <h5>Basic Information</h5>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Startup Name *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter startup name"
                                    required
                                    isInvalid={!!formErrors.startupName}
                                    onChange={(e) => {
                                        setFormData(prev => ({
                                            ...prev,
                                            basicInfo: {
                                                ...prev.basicInfo,
                                                startupName: e.target.value
                                            }
                                        }));
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.startupName}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        {/* Add more basic info fields */}
                    </Row>
                </section>
    
                {/* Funding Requirements */}
                <section className="detail-section">
                    <h5>Funding Requirements</h5>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Requested Amount (USD) *</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter amount"
                                    required
                                    isInvalid={!!formErrors.requestedAmount}
                                    onChange={(e) => {
                                        setFormData(prev => ({
                                            ...prev,
                                            fundingDetails: {
                                                ...prev.fundingDetails,
                                                requestedAmount: e.target.value
                                            }
                                        }));
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.requestedAmount}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Purpose of Funding *</Form.Label>
                                <Form.Select 
                                    required
                                    onChange={(e) => {
                                        setFormData(prev => ({
                                            ...prev,
                                            fundingDetails: {
                                                ...prev.fundingDetails,
                                                purpose: e.target.value
                                            }
                                        }));
                                    }}
                                >
                                    <option value="">Select purpose</option>
                                    <option value="R&D">Research & Development</option>
                                    <option value="marketing">Marketing & Sales</option>
                                    <option value="infrastructure">Infrastructure</option>
                                    <option value="expansion">Market Expansion</option>
                                    <option value="operations">Operations</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </section>
    
                {/* Required Documents */}
                <section className="detail-section">
                    <h5>Required Documents</h5>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Pitch Deck *</Form.Label>
                                <Form.Control
                                    type="file"
                                    required
                                    isInvalid={!!formErrors.pitchDeck}
                                    onChange={(e) => handleFileUpload(e, 'pitchDeck')}
                                />
                                <Form.Text className="text-muted">
                                    Upload your pitch deck (PDF, max 10MB)
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.pitchDeck}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        {/* Add more document upload fields */}
                    </Row>
                </section>
    
                {/* Submit Button */}
                <div className="d-flex justify-content-end mt-4">
                    <Button 
                        variant="secondary" 
                        onClick={() => setShowNewApplication(false)}
                        className="me-2"
                    >
                        Cancel
                    </Button>
                    <Button 
                        variant="primary" 
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                </div>
            </Form>
        );
    
        return (
            <div className="startup_funding_container p-4">
                <div className="startup_funding_header d-flex justify-content-between align-items-center mb-4">
                    <h2 className="mb-0">Funding Applications</h2>
                    <Button 
                        variant="primary" 
                        onClick={() => setShowNewApplication(true)}
                        className="startup_funding_new-button"
                    >
                        <FaFileAlt className="me-2" /> New Application
                    </Button>
                </div>
    
                <div className="startup_funding_applications row">
                    {fundingApplications.map((funding) => (
                        <div key={funding.id} className="col-md-6 col-lg-4 mb-4">
                            <Card className="startup_funding_card h-100">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <h5 className="mb-1">{funding.startupName}</h5>
                                            <div className="text-muted small">
                                                <FaCalendarAlt className="me-1" />
                                                {new Date(funding.applicationDate).toLocaleDateString()}
                                            </div>
                                        </div>
                                        {getStatusBadge(funding.status)}
                                    </div>
    
                                    <div className="funding-details mb-3">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Requested:</span>
                                            <strong>${funding.requestedAmount.toLocaleString()}</strong>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Valuation:</span>
                                            <strong>${funding.valuation.toLocaleString()}</strong>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span>Equity:</span>
                                            <strong>{funding.equityOffered}%</strong>
                                        </div>
                                    </div>
    
                                    <Button 
                                        variant="outline-primary" 
                                        className="w-100"
                                        onClick={() => {
                                            setSelectedFunding(funding);
                                            setShowDetails(true);
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
    
                {renderDetailedModal()}
    
                <Modal
                    show={showNewApplication}
                    onHide={() => setShowNewApplication(false)}
                    className="startup_funding_modal"
                    size="xl"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div className="d-flex align-items-center">
                                <FaFileAlt className="me-2" />
                                New Funding Application
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {renderApplicationForm()}
                    </Modal.Body>
                </Modal>
            </div>
        );
    };
    
    export default StartupFunding;