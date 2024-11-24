import React from "react";
import { 
    Container, Row, Col, Button, ProgressBar, 
    Badge, ListGroup, Card 
} from "react-bootstrap";
import { 
    FaLightbulb, FaUsers, FaMoneyBillWave, FaCopyright,
    FaChartLine, FaSearch, FaPlus, FaHandshake,
    FaBrain, FaAward, FaFileAlt, FaFlask
} from "react-icons/fa";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip,
    ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import "./researcher_dashboard.css";

const ResearcherDashboard = () => {
    const collaborationData = [
        { month: 'Jan', value: 4 },
        { month: 'Feb', value: 3 },
        { month: 'Mar', value: 6 },
        { month: 'Apr', value: 8 }
    ];

    const grantData = [
        { name: 'Approved', value: 70 },
        { name: 'Pending', value: 20 },
        { name: 'Rejected', value: 10 }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
        <Container fluid className="dashboard-container py-4">
            {/* Stats Overview */}
            <Row className="mb-4">
                <Col lg={3} md={6} className="mb-3">
                    <Card className="stat-card gradient-blue">
                        <Card.Body>
                            <div className="stat-icon">
                                <FaUsers />
                            </div>
                            <h3>23</h3>
                            <p>Active Collaborations</p>
                            <div className="stat-trend">
                                <FaChartLine /> +15% this month
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} className="mb-3">
                    <Card className="stat-card gradient-green">
                        <Card.Body>
                            <div className="stat-icon">
                                <FaMoneyBillWave />
                            </div>
                            <h3>$2.5M</h3>
                            <p>Active Grants</p>
                            <div className="stat-trend">
                                <FaChartLine /> +8% this month
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} className="mb-3">
                    <Card className="stat-card gradient-purple">
                        <Card.Body>
                            <div className="stat-icon">
                                <FaCopyright />
                            </div>
                            <h3>12</h3>
                            <p>Active IPRs</p>
                            <div className="stat-trend">
                                <FaChartLine /> +2 new
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} className="mb-3">
                    <Card className="stat-card gradient-orange">
                        <Card.Body>
                            <div className="stat-icon">
                                <FaBrain />
                            </div>
                            <h3>45</h3>
                            <p>Research Insights</p>
                            <div className="stat-trend">
                                <FaChartLine /> +5 this week
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Quick Actions Section */}
            <Row className="mb-4">
                <Col>
                    <Card className="quick-actions-card">
                        <Card.Body>
                            <h4 className="section-title mb-3">
                                <FaLightbulb className="me-2" />
                                Quick Actions
                            </h4>
                            <div className="quick-actions-grid">
                                <Button variant="gradient-primary">
                                    <FaPlus className="action-icon" />
                                    <span>New Research Project</span>
                                </Button>
                                <Button variant="gradient-success">
                                    <FaSearch className="action-icon" />
                                    <span>Find Collaborators</span>
                                </Button>
                                <Button variant="gradient-info">
                                    <FaMoneyBillWave className="action-icon" />
                                    <span>Grant Applications</span>
                                </Button>
                                <Button variant="gradient-purple">
                                    <FaFileAlt className="action-icon" />
                                    <span>Research Publications</span>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Research Insights and Collaborations */}
            <Row className="mb-4">
                <Col lg={8}>
                    <Card className="insights-card">
                        <Card.Header>
                            <h2 className="section-title">
                                <FaLightbulb className="me-2" />
                                Recent Research Insights
                            </h2>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="insight-item">
                                    <div className="insight-header">
                                        <h4>Machine Learning Algorithm Enhancement</h4>
                                        <Badge bg="primary">AI & ML</Badge>
                                    </div>
                                    <p>Improved accuracy by 15% using novel approach</p>
                                    <div className="insight-meta">
                                        <span className="date">Updated 2 days ago</span>
                                        <ProgressBar now={75} variant="success" className="progress-sm" />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="insight-item">
                                    <div className="insight-header">
                                        <h4>Quantum Computing Breakthrough</h4>
                                        <Badge bg="info">Quantum</Badge>
                                    </div>
                                    <p>New qubit stability mechanism discovered</p>
                                    <div className="insight-meta">
                                        <span className="date">Updated 5 days ago</span>
                                        <ProgressBar now={60} variant="info" className="progress-sm" />
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card className="collaboration-card">
                        <Card.Header>
                            <h2 className="section-title">
                                <FaHandshake className="me-2" />
                                Collaboration Trends
                            </h2>
                        </Card.Header>
                        <Card.Body>
                            <div className="chart-container">
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={collaborationData}>
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="value" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                                <div className="chart-description">
                                    Monthly collaboration activities
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Grants and IPR Status */}
            <Row>
                <Col lg={6}>
                    <Card className="grants-card">
                        <Card.Header>
                            <h2 className="section-title">
                                <FaAward className="me-2" />
                                Grant Status Overview
                            </h2>
                        </Card.Header>
                        <Card.Body>
                            <div className="chart-container">
                                <ResponsiveContainer width="100%" height={250}>
                                    <PieChart>
                                        <Pie
                                            data={grantData}
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {grantData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="chart-legend">
                                    {grantData.map((entry, index) => (
                                        <div key={index} className="legend-item">
                                            <span className="legend-color" style={{ backgroundColor: COLORS[index] }}></span>
                                            <span>{entry.name}: {entry.value}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card className="ipr-card">
                        <Card.Header>
                            <h2 className="section-title">
                                <FaCopyright className="me-2" />
                                IPR Status
                            </h2>
                        </Card.Header>
                        <Card.Body>
                            <div className="ipr-list">
                                <div className="ipr-item">
                                    <div className="ipr-header">
                                        <h4>AI-Based Pattern Recognition</h4>
                                        <Badge bg="warning">Pending</Badge>
                                    </div>
                                    <ProgressBar now={70} variant="warning" className="my-2" />
                                    <small className="text-muted">Patent Application Phase</small>
                                </div>
                                <div className="ipr-item">
                                    <div className="ipr-header">
                                        <h4>Quantum Algorithm</h4>
                                        <Badge bg="success">Approved</Badge>
                                    </div>
                                    <ProgressBar now={100} variant="success" className="my-2" />
                                    <small className="text-muted">Patent Granted</small>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ResearcherDashboard;