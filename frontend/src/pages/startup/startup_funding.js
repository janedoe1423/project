import React, { useState } from 'react';
import { Card, Badge, Button, Modal } from 'react-bootstrap';
import { FaFileAlt, FaChartLine, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa';
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
    const [selectedFunding, setSelectedFunding] = useState(null);

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

    return (
        <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">Funding Applications Overview</h2>
                <Button 
                    variant="primary" 
                    href="#funding/new"
                    className="d-flex align-items-center gap-2"
                >
                    <FaFileAlt /> New Application
                </Button>
            </div>

            <div className="row">
                {fundingApplications.map((funding) => (
                    <div key={funding.id} className="col-md-6 col-lg-4 mb-4">
                        <Card className="h-100 shadow-sm">
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
                onHide={() => setShowDetails(false)}
                size="lg"
            >
                {selectedFunding && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedFunding.fundingType} Application Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
                                    <div className="timeline">
                                        {selectedFunding.milestones.map((milestone, index) => (
                                            <div key={index} className="timeline-item">
                                                <div className="timeline-date">
                                                    {new Date(milestone.date).toLocaleDateString()}
                                                </div>
                                                <div className="timeline-content">
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
                            <Button variant="secondary" onClick={() => setShowDetails(false)}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </div>
    );
};

export default StartupFunding;