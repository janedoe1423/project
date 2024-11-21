import React, { useState } from "react";
import { Card, Button, Modal, Row, Col, Typography, Space, Statistic, Radio, Progress, Avatar, Descriptions, Tabs, Tag } from "antd";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Cell, BarChart, Bar, Legend } from 'recharts';
import { ArrowUpOutlined, LineChartOutlined, UserOutlined, PieChartOutlined, DollarOutlined, RiseOutlined, Badge, EyeOutlined, SafetyOutlined, FundOutlined, BarChartOutlined, UpOutlined, DownOutlined, InfoCircleOutlined, DotChartOutlined, StockOutlined, ThunderboltOutlined, GlobalOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Title, Text } = Typography;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const sampleData = {
    performanceData: [
        { date: 'Jan', revenue: 4000, projection: 4400 },
        { date: 'Feb', revenue: 5000, projection: 5200 },
        { date: 'Mar', revenue: 6000, projection: 6100 },
        { date: 'Apr', revenue: 7000, projection: 7300 },
        { date: 'May', revenue: 8000, projection: 8200 },
    ],
    marketData: [
        { name: 'North America', value: 400 },
        { name: 'Europe', value: 300 },
        { name: 'Asia', value: 300 },
        { name: 'Others', value: 200 },
    ],
    riskData: [
        { subject: 'Market Risk', value: 80 },
        { subject: 'Financial Risk', value: 60 },
        { subject: 'Operational Risk', value: 70 },
        { subject: 'Competition Risk', value: 50 },
        { subject: 'Regulatory Risk', value: 65 },
    ],
    financialData: [
        { name: 'Revenue', actual: 4000, target: 4500 },
        { name: 'Profit', actual: 2000, target: 2200 },
        { name: 'Growth', actual: 3000, target: 3200 },
        { name: 'Margin', actual: 2800, target: 3000 },
    ]
};

const analysisCategories = {
    performance: {
        title: "Performance Metrics",
        description: "Comprehensive analysis of company's financial and operational performance",
        graphs: [
            {
                id: "revenue",
                title: "Revenue Analysis",
                description: "Track revenue growth patterns and projections",
                icon: <LineChartOutlined />,
                data: sampleData.performanceData
            },
            {
                id: "profitMargins",
                title: "Profit Margins",
                description: "Analysis of gross, operating, and net profit margins",
                icon: <BarChartOutlined />,
                data: sampleData.financialData
            }
        ]
    },
    market: {
        title: "Market Analysis",
        description: "Market positioning and competitive landscape analysis",
        graphs: [
            {
                id: "marketShare",
                title: "Market Distribution",
                description: "Geographic and demographic market share breakdown",
                icon: <PieChartOutlined />,
                data: sampleData.marketData
            },
            {
                id: "competitiveLandscape",
                title: "Competitive Position",
                description: "Analysis of market position relative to competitors",
                icon: <DotChartOutlined />,
                data: sampleData.competitorData
            }
        ]
    },
    risk: {
        title: "Risk Assessment",
        description: "Comprehensive risk analysis and mitigation strategies",
        graphs: [
            {
                id: "riskMetrics",
                title: "Risk Metrics",
                description: "Multi-dimensional risk assessment visualization",
                icon: <SafetyOutlined />,
                data: sampleData.riskData
            }
        ]
    },
    growth: {
        title: "Growth Indicators",
        description: "Key growth metrics and future projections",
        graphs: [
            {
                id: "customerGrowth",
                title: "Customer Acquisition",
                description: "Customer growth trends and retention rates",
                icon: <StockOutlined />,
                data: sampleData.customerData
            },
            {
                id: "marketExpansion",
                title: "Market Expansion",
                description: "Geographic expansion and market penetration analysis",
                icon: <GlobalOutlined />,
                data: sampleData.expansionData
            }
        ]
    }
};

const InvestorInvestments = () => {
    const [investments, setInvestments] = useState([
        {
            id: 1,
            companyName: "Tech Startup X",
            logo: "https://placeholder.com/150",
            description: "An innovative AI-powered solution for businesses",
            sector: "Technology",
            investmentAmount: 500000,
            currentValue: 750000,
            returns: 50,
            investmentDate: "2023-01-15",
            performanceData: [
                { month: 'Jan', value: 500000 },
                { month: 'Feb', value: 520000 },
                { month: 'Mar', value: 580000 },
                { month: 'Apr', value: 600000 },
                { month: 'May', value: 750000 },
            ],
            additionalDetails: {
                foundedYear: 2020,
                location: "San Francisco, CA",
                employeeCount: 150,
                fundingRound: "Series B",
                keyMetrics: {
                    revenue: 2500000,
                    growthRate: 125,
                    marketShare: 15,
                    burnRate: 180000
                },
                riskMetrics: {
                    marketRisk: "Medium",
                    executionRisk: "Low",
                    competitiveRisk: "Medium"
                },
                financials: {
                    cashFlow: 350000,
                    grossMargin: 68,
                    runwayMonths: 18
                },
                performanceHistory: [
                    { quarter: "Q1 2023", revenue: 1800000, users: 15000, margin: 65 },
                    { quarter: "Q2 2023", revenue: 2100000, users: 18500, margin: 67 },
                    { quarter: "Q3 2023", revenue: 2500000, users: 22000, margin: 68 }
                ],
                marketAnalysis: {
                    targetMarketSize: "12B",
                    competitorCount: 8,
                    marketGrowthRate: 25,
                    marketPosition: "Market Leader",
                    geographicPresence: ["North America", "Europe", "Asia"],
                    industryTrends: ["AI Adoption", "Cloud Migration", "Digital Transformation"]
                },
                teamInfo: {
                    executiveTeam: [
                        { name: "John Doe", role: "CEO", experience: "15 years" },
                        { name: "Jane Smith", role: "CTO", experience: "12 years" }
                    ],
                    boardMembers: ["Alice Johnson", "Bob Wilson"],
                    advisors: ["Dr. Tech Expert", "Industry Veteran"]
                },
                intellectualProperty: {
                    patents: 5,
                    trademarks: 3,
                    proprietaryTech: ["AI Algorithm", "Data Processing Engine"]
                },
                customerMetrics: {
                    totalCustomers: 250,
                    enterpriseCustomers: 50,
                    customerRetention: 95,
                    nps: 75
                }
            }
        },
        {
            id: 2,
            companyName: "HealthTech Solutions",
            logo: "https://placeholder.com/150",
            description: "Revolutionary healthcare management platform",
            sector: "Healthcare",
            investmentAmount: 750000,
            currentValue: 1200000,
            returns: 60,
            investmentDate: "2023-02-20",
            performanceData: [
                { month: 'Jan', value: 750000 },
                { month: 'Feb', value: 800000 },
                { month: 'Mar', value: 900000 },
                { month: 'Apr', value: 1000000 },
                { month: 'May', value: 1200000 },
            ],
            additionalDetails: {
                foundedYear: 2019,
                location: "Boston, MA",
                employeeCount: 200,
                fundingRound: "Series C",
                keyMetrics: {
                    revenue: 3500000,
                    growthRate: 150,
                    marketShare: 20,
                    burnRate: 220000
                },
                riskMetrics: {
                    marketRisk: "Medium",
                    executionRisk: "Low",
                    competitiveRisk: "Medium"
                },
                financials: {
                    cashFlow: 350000,
                    grossMargin: 68,
                    runwayMonths: 18
                },
                performanceHistory: [
                    { quarter: "Q1 2023", revenue: 1800000, users: 15000, margin: 65 },
                    { quarter: "Q2 2023", revenue: 2100000, users: 18500, margin: 67 },
                    { quarter: "Q3 2023", revenue: 2500000, users: 22000, margin: 68 }
                ],
                marketAnalysis: {
                    targetMarketSize: "12B",
                    competitorCount: 8,
                    marketGrowthRate: 25,
                    marketPosition: "Market Leader",
                    geographicPresence: ["North America", "Europe", "Asia"],
                    industryTrends: ["AI Adoption", "Cloud Migration", "Digital Transformation"]
                },
                teamInfo: {
                    executiveTeam: [
                        { name: "John Doe", role: "CEO", experience: "15 years" },
                        { name: "Jane Smith", role: "CTO", experience: "12 years" }
                    ],
                    boardMembers: ["Alice Johnson", "Bob Wilson"],
                    advisors: ["Dr. Tech Expert", "Industry Veteran"]
                },
                intellectualProperty: {
                    patents: 5,
                    trademarks: 3,
                    proprietaryTech: ["AI Algorithm", "Data Processing Engine"]
                },
                customerMetrics: {
                    totalCustomers: 250,
                    enterpriseCustomers: 50,
                    customerRetention: 95,
                    nps: 75
                }
            }
        }
    ]);

    const [detailsModal, setDetailsModal] = useState(false);
    const [analysisModal, setAnalysisModal] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [expandedGraphs, setExpandedGraphs] = useState({});
    const [graphModal, setGraphModal] = useState({ visible: false, type: null });
    const [activeGraphs, setActiveGraphs] = useState({});

    const showDetails = (company) => {
        setSelectedCompany(company);
        setDetailsModal(true);
    };

    const showAnalysis = (company) => {
        setSelectedCompany(company);
        setAnalysisModal(true);
    };

    const toggleGraph = (graphId) => {
        setExpandedGraphs(prev => ({
            ...prev,
            [graphId]: !prev[graphId]
        }));
    };

    const renderGraph = (graph) => {
        switch (graph.id) {
            case "revenue":
                return <LineChart data={graph.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#1890ff" name="Actual Revenue" />
                    <Line type="monotone" dataKey="projection" stroke="#52c41a" strokeDasharray="5 5" name="Projected" />
                </LineChart>;
            case "profitMargins":
                return <BarChart data={graph.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="actual" fill="#1890ff" name="Actual" />
                    <Bar dataKey="target" fill="#52c41a" name="Target" />
                </BarChart>;
            case "marketShare":
                return <PieChart data={graph.data}>
                    <Pie
                        data={graph.data}
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        nameKey="name"
                    >
                        {graph.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>;
            case "competitiveLandscape":
                return <RadarChart data={graph.data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Risk Level" dataKey="value" stroke="#1890ff" fill="#1890ff" fillOpacity={0.6} />
                    <Tooltip />
                    <Legend />
                </RadarChart>;
            case "riskMetrics":
                return <RadarChart data={graph.data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Risk Level" dataKey="value" stroke="#1890ff" fill="#1890ff" fillOpacity={0.6} />
                    <Tooltip />
                    <Legend />
                </RadarChart>;
            case "customerGrowth":
                return <LineChart data={graph.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#1890ff" name="Actual" />
                    <Line type="monotone" dataKey="projection" stroke="#52c41a" strokeDasharray="5 5" name="Projected" />
                </LineChart>;
            case "marketExpansion":
                return <LineChart data={graph.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#1890ff" name="Actual" />
                    <Line type="monotone" dataKey="projection" stroke="#52c41a" strokeDasharray="5 5" name="Projected" />
                </LineChart>;
            default:
                return null;
        }
    };

    return (
        <div style={{ padding: "24px" }}>
            <Title level={2}>Investment Portfolio</Title>
            
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {investments.map((company) => (
                    <Card 
                        key={company.id}
                        className="investment-card"
                        style={{ 
                            borderRadius: '12px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0 6px 16px rgba(0,0,0,0.12)'
                            }
                        }}
                    >
                        <Row align="middle" gutter={[24, 24]}>
                            <Col span={4}>
                                <img 
                                    src={company.logo} 
                                    alt={company.companyName}
                                    style={{ width: '100%', maxWidth: '100px' }}
                                />
                            </Col>
                            
                            <Col span={12}>
                                <Title level={4}>{company.companyName}</Title>
                                <Text type="secondary">{company.sector}</Text>
                                <Text style={{ display: 'block', marginTop: '8px' }}>
                                    {company.description}
                                </Text>
                            </Col>

                            <Col span={4}>
                                <div style={{ textAlign: 'center' }}>
                                    <Text type="secondary">Current Value</Text>
                                    <Title level={4} style={{ margin: '8px 0', color: '#52c41a' }}>
                                        ${company.currentValue.toLocaleString()}
                                    </Title>
                                    <Text type="success">+{company.returns}%</Text>
                                </div>
                            </Col>

                            <Col span={4}>
                                <Space direction="vertical" style={{ width: '100%' }}>
                                    <Button 
                                        icon={<EyeOutlined />} 
                                        block 
                                        onClick={() => showDetails(company)}
                                        style={{
                                            borderRadius: '6px',
                                            height: '40px'
                                        }}
                                    >
                                        View Details
                                    </Button>
                                    <Button 
                                        icon={<LineChartOutlined />} 
                                        type="primary" 
                                        block
                                        onClick={() => showAnalysis(company)}
                                        style={{
                                            borderRadius: '6px',
                                            height: '40px',
                                            background: 'linear-gradient(45deg, #1890ff, #722ed1)'
                                        }}
                                    >
                                        Analysis
                                    </Button>
                                </Space>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </Space>

            {/* Details Modal */}
            <Modal
                title={null}
                open={detailsModal}
                onCancel={() => setDetailsModal(false)}
                footer={null}
                width={1000}
                className="details-modal"
            >
                {selectedCompany && (
                    <>
                        {/* Header Section */}
                        <div className="company-header">
                            <Row align="middle" gutter={24}>
                                <Col span={4}>
                                    <img 
                                        src={selectedCompany.logo} 
                                        alt={selectedCompany.companyName}
                                        className="company-logo"
                                    />
                                </Col>
                                <Col span={20}>
                                    <Title level={2}>{selectedCompany.companyName}</Title>
                                    <Tag color="blue">{selectedCompany.sector}</Tag>
                                    <Tag color="green">{selectedCompany.additionalDetails.fundingRound}</Tag>
                                </Col>
                            </Row>
                        </div>

                        {/* Quick Stats */}
                        <Row gutter={[16, 16]} className="quick-stats">
                            <Col span={6}>
                                <Statistic 
                                    title="Investment Value"
                                    value={selectedCompany.currentValue}
                                    prefix="$"
                                    formatter={value => `${(value / 1000000).toFixed(2)}M`}
                                    className="stat-card"
                                />
                            </Col>
                            <Col span={6}>
                                <Statistic
                                    title="Total Return"
                                    value={selectedCompany.returns}
                                    suffix="%"
                                    valueStyle={{ color: '#3f8600' }}
                                    className="stat-card"
                                />
                            </Col>
                            <Col span={6}>
                                <Statistic
                                    title="Investment Period"
                                    value={moment(selectedCompany.investmentDate).fromNow(true)}
                                    className="stat-card"
                                />
                            </Col>
                            <Col span={6}>
                                <Statistic
                                    title="Market Share"
                                    value={selectedCompany.additionalDetails.keyMetrics.marketShare}
                                    suffix="%"
                                    className="stat-card"
                                />
                            </Col>
                        </Row>

                        {/* Detailed Information */}
                        <Tabs defaultActiveKey="1" className="details-tabs">
                            <Tabs.TabPane tab="Company Overview" key="1">
                                <Row gutter={[24, 24]}>
                                    <Col span={12}>
                                        <Card title="Company Information" className="info-card">
                                            <Descriptions column={1}>
                                                <Descriptions.Item label="Founded">{selectedCompany.additionalDetails.foundedYear}</Descriptions.Item>
                                                <Descriptions.Item label="Location">{selectedCompany.additionalDetails.location}</Descriptions.Item>
                                                <Descriptions.Item label="Employees">{selectedCompany.additionalDetails.employeeCount}</Descriptions.Item>
                                                <Descriptions.Item label="Market Position">{selectedCompany.additionalDetails.marketAnalysis.marketPosition}</Descriptions.Item>
                                            </Descriptions>
                                        </Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card title="Key Metrics" className="info-card">
                                            <Row gutter={[16, 16]}>
                                                <Col span={12}>
                                                    <Progress 
                                                        type="dashboard"
                                                        percent={selectedCompany.additionalDetails.keyMetrics.growthRate}
                                                        format={percent => `${percent}%`}
                                                        title="Growth Rate"
                                                    />
                                                </Col>
                                                <Col span={12}>
                                                    <Progress
                                                        type="dashboard"
                                                        percent={selectedCompany.additionalDetails.customerMetrics.customerRetention}
                                                        format={percent => `${percent}%`}
                                                        title="Retention"
                                                        strokeColor="#52c41a"
                                                    />
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tabs.TabPane>

                            <Tabs.TabPane tab="Team & Leadership" key="2">
                                <Row gutter={[24, 24]}>
                                    {selectedCompany.additionalDetails.teamInfo.executiveTeam.map(member => (
                                        <Col span={8} key={member.name}>
                                            <Card className="team-card">
                                                <Avatar size={64} icon={<UserOutlined />} />
                                                <Title level={4}>{member.name}</Title>
                                                <Text type="secondary">{member.role}</Text>
                                                <Text>{member.experience}</Text>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Tabs.TabPane>

                            <Tabs.TabPane tab="Market Analysis" key="3">
                                <Row gutter={[24, 24]}>
                                    <Col span={12}>
                                        <Card title="Market Size & Growth" className="market-card">
                                            <Statistic
                                                title="Target Market Size"
                                                value={selectedCompany.additionalDetails.marketAnalysis.targetMarketSize}
                                                suffix="B"
                                            />
                                            <Statistic
                                                title="Market Growth Rate"
                                                value={selectedCompany.additionalDetails.marketAnalysis.marketGrowthRate}
                                                suffix="%"
                                                valueStyle={{ color: '#3f8600' }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card title="Geographic Presence" className="market-card">
                                            {selectedCompany.additionalDetails.marketAnalysis.geographicPresence.map(region => (
                                                <Tag color="blue" key={region}>{region}</Tag>
                                            ))}
                                        </Card>
                                    </Col>
                                </Row>
                            </Tabs.TabPane>
                        </Tabs>
                    </>
                )}
            </Modal>

            {/* Analysis Modal */}
            <Modal
                title={null}
                open={analysisModal}
                onCancel={() => setAnalysisModal(false)}
                footer={null}
                width={1200}
                className="analysis-modal"
            >
                {selectedCompany && (
                    <>
                        {/* Analysis Modal Content */}
                        <div className="analysis-dashboard">
                            {/* Summary Section */}
                            <div className="analysis-summary">
                                <div className="summary-header">
                                    <div className="company-title">
                                        <Title level={3}>{selectedCompany?.companyName} Analysis</Title>
                                        <Tag color="blue" style={{ padding: '4px 12px', fontSize: '14px' }}>
                                            {selectedCompany?.sector}
                                        </Tag>
                                    </div>
                                    <div className="company-subtitle">
                                        <Avatar src={selectedCompany?.logo} className="company-logo" />
                                        <Text type="secondary">Comprehensive analysis and performance metrics</Text>
                                    </div>
                                </div>

                                {/* Key Metrics Row */}
                                <Row gutter={[24, 24]}>
                                    <Col span={6}>
                                        <div className="metric-box primary-gradient">
                                            <div className="metric-icon">
                                                <RiseOutlined />
                                            </div>
                                            <div className="metric-content">
                                                <div className="metric-title">ROI</div>
                                                <div className="metric-value">+{selectedCompany?.returns}%</div>
                                                <div className="metric-trend">
                                                    <ArrowUpOutlined /> 12.5% vs last month
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="metric-box success-gradient">
                                            <div className="metric-icon">
                                                <FundOutlined />
                                            </div>
                                            <div className="metric-content">
                                                <div className="metric-title">Market Share</div>
                                                <div className="metric-value">{selectedCompany?.additionalDetails.keyMetrics.marketShare}%</div>
                                                <div className="metric-trend">
                                                    <ArrowUpOutlined /> Growing steadily
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="metric-box info-gradient">
                                            <div className="metric-icon">
                                                <ThunderboltOutlined />
                                            </div>
                                            <div className="metric-content">
                                                <div className="metric-title">Growth Rate</div>
                                                <div className="metric-value">{selectedCompany?.additionalDetails.keyMetrics.growthRate}%</div>
                                                <div className="metric-trend">
                                                    <ArrowUpOutlined /> Above target
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="metric-box warning-gradient">
                                            <div className="metric-icon">
                                                <SafetyOutlined />
                                            </div>
                                            <div className="metric-content">
                                                <div className="metric-title">Risk Score</div>
                                                <div className="metric-value">Low</div>
                                                <div className="metric-trend">
                                                    <ArrowUpOutlined /> Stable outlook
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* Analysis Categories */}
                            <div className="analysis-cards">
                                {Object.entries(analysisCategories).map(([key, category]) => (
                                    <div key={key} className="analysis-section">
                                        <div className="category-header" style={{ borderColor: category.color }}>
                                            <Title level={4}>
                                                {category.title}
                                                <Text type="secondary" style={{ fontSize: '14px', marginLeft: '12px' }}>
                                                    {category.description}
                                                </Text>
                                            </Title>
                                        </div>
                                        
                                        <Row gutter={[24, 24]}>
                                            {category.graphs.map(graph => (
                                                <Col span={12} key={graph.id}>
                                                    <Card className="analysis-card">
                                                        <div className="card-header">
                                                            <span className="card-icon">{graph.icon}</span>
                                                            <div>
                                                                <Title level={5}>{graph.title}</Title>
                                                                <Text type="secondary">{graph.description}</Text>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="card-content">
                                                            {activeGraphs[graph.id] ? (
                                                                <div className="graph-container">
                                                                    <ResponsiveContainer width="100%" height={300}>
                                                                        {renderGraph(graph)}
                                                                    </ResponsiveContainer>
                                                                </div>
                                                            ) : (
                                                                <Button 
                                                                    type="primary"
                                                                    onClick={() => setActiveGraphs(prev => ({
                                                                        ...prev,
                                                                        [graph.id]: true
                                                                    }))}
                                                                    icon={<EyeOutlined />}
                                                                    className="view-analysis-btn"
                                                                >
                                                                    View Analysis
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </Modal>

            {/* Graph Detail Modal */}
            <Modal
                title={null}
                open={graphModal.visible}
                onCancel={() => setGraphModal({ visible: false, type: null })}
                footer={null}
                width={1000}
                className="graph-detail-modal"
            >
                {graphModal.type === 'revenue' && (
                    <div className="graph-detail">
                        <div className="graph-header">
                            <Title level={3}>Revenue Growth Analysis</Title>
                            <Text type="secondary">Detailed view of revenue trends and patterns</Text>
                        </div>
                        <div className="graph-content">
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart data={selectedCompany.performanceData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line 
                                        type="monotone" 
                                        dataKey="value" 
                                        stroke="#1890ff" 
                                        strokeWidth={2}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default InvestorInvestments;
