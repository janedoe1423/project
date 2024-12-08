import React, { useState } from "react";
import { Card, Button, Modal, Row, Col, Typography, Space, Statistic, Progress, Avatar, Descriptions, Tabs, Tag } from "antd";
import {
    LineChart, Line, BarChart, Bar, PieChart, Pie,
    RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    CartesianGrid, XAxis, YAxis, Tooltip, Legend, Cell, ResponsiveContainer
} from 'recharts';
import { ArrowUpOutlined, LineChartOutlined, UserOutlined, PieChartOutlined, DollarOutlined, RiseOutlined, Badge, EyeOutlined, SafetyOutlined, FundOutlined, BarChartOutlined, UpOutlined, DownOutlined, InfoCircleOutlined, DotChartOutlined, StockOutlined, ThunderboltOutlined, GlobalOutlined, UserAddOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Title, Text } = Typography;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

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
    ],
    competitivePosition: [
        { name: 'Q1 2023', market: 15, competitor1: 12, competitor2: 10 },
        { name: 'Q2 2023', market: 18, competitor1: 13, competitor2: 11 },
        { name: 'Q3 2023', market: 22, competitor1: 15, competitor2: 13 },
        { name: 'Q4 2023', market: 25, competitor1: 16, competitor2: 14 }
    ],
    customerAcquisition: [
        { name: 'Jan', customers: 1200 },
        { name: 'Feb', customers: 1800 },
        { name: 'Mar', customers: 2200 },
        { name: 'Apr', customers: 2800 },
        { name: 'May', customers: 3500 },
        { name: 'Jun', customers: 4200 }
    ],
    marketExpansion: [
        { name: 'North America', value: 35 },
        { name: 'Europe', value: 25 },
        { name: 'Asia', value: 20 },
        { name: 'Latin America', value: 12 },
        { name: 'Africa', value: 8 }
    ]
};

const analysisCategories = {
    performance: {
        title: "Performance Metrics",
        description: "Key performance indicators and growth metrics",
        graphs: [
            {
                id: "competitive",
                title: "Competitive Position",
                description: "Market share comparison with competitors",
                icon: <LineChartOutlined />
            },
            {
                id: "acquisition",
                title: "Customer Acquisition",
                description: "New customer growth over time",
                icon: <UserAddOutlined />
            },
            {
                id: "expansion",
                title: "Market Expansion",
                description: "Geographic market distribution",
                icon: <GlobalOutlined />
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
                icon: <PieChartOutlined />
            },
            {
                id: "competitive",
                title: "Competitive Position",
                description: "Analysis of market position relative to competitors",
                icon: <DotChartOutlined />
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
                icon: <SafetyOutlined />
            }
        ]
    },
    growth: {
        title: "Growth Indicators",
        description: "Key growth metrics and future projections",
        graphs: [
            {
                id: "acquisition",
                title: "Customer Acquisition",
                description: "Customer growth trends and retention rates",
                icon: <StockOutlined />
            },
            {
                id: "expansion",
                title: "Market Expansion",
                description: "Geographic expansion and market penetration analysis",
                icon: <GlobalOutlined />
            }
        ]
    }
};

const sampleInvestments = [
    {
        id: 1,
        companyName: "Tech Innovators Inc.",
        logo: "https://placeholder.com/100",
        sector: "Technology",
        description: "Leading AI and machine learning solutions provider",
        currentValue: 2500000,
        returns: 25,
        investmentDate: "2022-01-15",
        additionalDetails: {
            foundedYear: 2018,
            location: "San Francisco, CA",
            employeeCount: 250,
            fundingRound: "Series B",
            keyMetrics: {
                marketShare: 15,
                growthRate: 85
            },
            marketAnalysis: {
                marketPosition: "Market Leader",
                targetMarketSize: 50,
                marketGrowthRate: 12,
                geographicPresence: ["North America", "Europe", "Asia"]
            },
            teamInfo: {
                executiveTeam: [
                    {
                        name: "John Smith",
                        role: "CEO",
                        experience: "15+ years in tech"
                    },
                    {
                        name: "Sarah Johnson",
                        role: "CTO",
                        experience: "12+ years in AI"
                    }
                ]
            },
            customerMetrics: {
                customerRetention: 92
            }
        }
    },
    {
        id: 2,
        companyName: "GreenEnergy Solutions",
        logo: "https://placeholder.com/100",
        sector: "Clean Energy",
        description: "Innovative renewable energy and sustainable solutions provider",
        currentValue: 1800000,
        returns: 32,
        investmentDate: "2022-03-20",
        additionalDetails: {
            foundedYear: 2019,
            location: "Austin, TX",
            employeeCount: 180,
            fundingRound: "Series A",
            keyMetrics: {
                marketShare: 12,
                growthRate: 92
            },
            marketAnalysis: {
                marketPosition: "Fast Growing",
                targetMarketSize: 35,
                marketGrowthRate: 15,
                geographicPresence: ["North America", "Europe"]
            },
            teamInfo: {
                executiveTeam: [
                    {
                        name: "Michael Chen",
                        role: "CEO",
                        experience: "12+ years in renewable energy"
                    },
                    {
                        name: "Emily Rodriguez",
                        role: "CTO",
                        experience: "10+ years in clean tech"
                    }
                ]
            },
            customerMetrics: {
                customerRetention: 88
            }
        }
    }
];

const InvestorInvestments = () => {
    const [investments] = useState(sampleInvestments);
    const [detailsModal, setDetailsModal] = useState(false);
    const [analysisModal, setAnalysisModal] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [graphModal, setGraphModal] = useState({ visible: false, type: 'revenue' });

    const showDetails = (company) => {
        setSelectedCompany(company);
        setDetailsModal(true);
    };

    const showAnalysis = (company) => {
        setSelectedCompany(company);
        setAnalysisModal(true);
    };

    const showGraph = (type) => {
        setGraphModal({ visible: true, type: type || 'revenue' });
    };

    const renderGraph = (graph) => {
        // Debug logging
        console.log('Graph object:', graph);
        
        // Early return if graph is null/undefined
        if (!graph) {
            console.log('Graph is null or undefined');
            return <div>No graph configuration available</div>;
        }

        // Handle data with more detailed logging
        let data;
        try {
            switch(graph.id) {
                case 'competitive':
                    data = sampleData.competitivePosition;
                    return (
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="market" stroke="#1890ff" name="Market" />
                                <Line type="monotone" dataKey="competitor1" stroke="#52c41a" name="Competitor 1" />
                                <Line type="monotone" dataKey="competitor2" stroke="#ff4d4f" name="Competitor 2" />
                            </LineChart>
                        </ResponsiveContainer>
                    );

                case 'acquisition':
                    data = sampleData.customerAcquisition;
                    return (
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="customers" stroke="#1890ff" name="Customers" />
                            </LineChart>
                        </ResponsiveContainer>
                    );

                case 'expansion':
                    data = sampleData.marketExpansion;
                    return (
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                    nameKey="name"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    );

                case 'revenue':
                    data = sampleData.performanceData;
                    return (
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="revenue" stroke="#1890ff" name="Actual Revenue" />
                                <Line type="monotone" dataKey="projection" stroke="#52c41a" strokeDasharray="5 5" name="Projected" />
                            </LineChart>
                        </ResponsiveContainer>
                    );

                case 'marketShare':
                    data = sampleData.marketData;
                    return (
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                    nameKey="name"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    );

                case 'riskMetrics':
                    data = sampleData.riskData;
                    return (
                        <ResponsiveContainer width="100%" height={300}>
                            <RadarChart data={data}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar name="Risk Metrics" dataKey="value" stroke="#1890ff" fill="#1890ff" fillOpacity={0.6} />
                                <Tooltip />
                                <Legend />
                            </RadarChart>
                        </ResponsiveContainer>
                    );

                default:
                    console.log(`No rendering logic for graph type: ${graph.id}`);
                    return <div>Unsupported graph type</div>;
            }
        } catch (error) {
            console.error('Error rendering graph:', error);
            return <div>Error rendering graph</div>;
        }
    };

    return (
        <div style={{ padding: "24px" }}>
            <Title level={2}>Investment Portfolio</Title>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {investments.map((company) => (
                    <Card 
                        key={company.id}
                        className="investor_investment-investment-card"
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
                className="investor_investment-details-modal"
            >
                {selectedCompany && (
                    <>
                        {/* Header Section */}
                        <div className="investor_investment-company-header">
                            <Row align="middle" gutter={24}>
                                <Col span={4}>
                                    <img 
                                        src={selectedCompany.logo} 
                                        alt={selectedCompany.companyName}
                                        className="investor_investment-company-logo"
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
                        <Row gutter={[16, 16]} className="investor_investment-quick-stats">
                            <Col span={6}>
                                <Statistic 
                                    title="Investment Value"
                                    value={selectedCompany.currentValue}
                                    prefix="$"
                                    formatter={value => `${(value / 1000000).toFixed(2)}M`}
                                    className="investor_investment-stat-card"
                                />
                            </Col>
                            <Col span={6}>
                                <Statistic
                                    title="Total Return"
                                    value={selectedCompany.returns}
                                    suffix="%"
                                    valueStyle={{ color: '#3f8600' }}
                                    className="investor_investment-stat-card"
                                />
                            </Col>
                            <Col span={6}>
                                <Statistic
                                    title="Investment Period"
                                    value={moment(selectedCompany.investmentDate).fromNow(true)}
                                    className="investor_investment-stat-card"
                                />
                            </Col>
                            <Col span={6}>
                                <Statistic
                                    title="Market Share"
                                    value={selectedCompany.additionalDetails.keyMetrics.marketShare}
                                    suffix="%"
                                    className="investor_investment-stat-card"
                                />
                            </Col>
                        </Row>

                        {/* Detailed Information */}
                        <Tabs defaultActiveKey="1" className="investor_investment-details-tabs">
                            <Tabs.TabPane tab="Company Overview" key="1">
                                <Row gutter={[24, 24]}>
                                    <Col span={12}>
                                        <Card title="Company Information" className="investor_investment-info-card">
                                            <Descriptions column={1}>
                                                <Descriptions.Item label="Founded">{selectedCompany.additionalDetails.foundedYear}</Descriptions.Item>
                                                <Descriptions.Item label="Location">{selectedCompany.additionalDetails.location}</Descriptions.Item>
                                                <Descriptions.Item label="Employees">{selectedCompany.additionalDetails.employeeCount}</Descriptions.Item>
                                                <Descriptions.Item label="Market Position">{selectedCompany.additionalDetails.marketAnalysis.marketPosition}</Descriptions.Item>
                                            </Descriptions>
                                        </Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card title="Key Metrics" className="investor_investment-info-card">
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
                                            <Card className="investor_investment-team-card">
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
                                        <Card title="Market Size & Growth" className="investor_investment-market-card">
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
                                        <Card title="Geographic Presence" className="investor_investment-market-card">
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
                className="investor_investment-analysis-modal"
            >
                {selectedCompany && (
                    <>
                        {/* Analysis Modal Content */}
                        <div className="analysis-dashboard">
                            <div className="investor_investment-analysis-summary">
                                <div className="investor_investment-summary-header">
                                    <div className="investor_investment-title-container">
                                        <Title level={3} className="investor_investment-dashboard-title">
                                            Investment Analysis Dashboard
                                        </Title>
                                        <Tag color="blue" className="investor_investment-dashboard-tag">
                                            {selectedCompany?.sector}
                                        </Tag>
                                    </div>
                                    <Text className="investor_investment-dashboard-subtitle">
                                        Comprehensive performance metrics and analytical insights
                                    </Text>
                                </div>

                                <div style={{ padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                    {/* ROI Card */}
                                    <div style={{ 
                                        flex: '1 1 250px',
                                        minWidth: '250px',
                                        background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                                        borderRadius: '15px',
                                        padding: '25px',
                                        color: 'white',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    }}>
                                        <div style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            marginBottom: '20px' 
                                        }}>
                                            <div style={{ 
                                                background: 'rgba(255,255,255,0.2)', 
                                                borderRadius: '10px',
                                                padding: '10px',
                                                marginRight: '15px'
                                            }}>
                                                <RiseOutlined style={{ fontSize: '24px' }} />
                                            </div>
                                            <span style={{ fontSize: '18px' }}>ROI</span>
                                        </div>
                                        <div style={{ 
                                            fontSize: '36px', 
                                            fontWeight: 'bold',
                                            margin: '15px 0' 
                                        }}>
                                            +{selectedCompany?.returns}%
                                        </div>
                                        <div style={{ 
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            background: 'rgba(255,255,255,0.15)',
                                            padding: '8px 15px',
                                            borderRadius: '20px',
                                            fontSize: '14px'
                                        }}>
                                            <ArrowUpOutlined style={{ marginRight: '5px' }} /> 12.5% vs last month
                                        </div>
                                    </div>

                                    {/* Market Share Card */}
                                    <div style={{ 
                                        flex: '1 1 250px',
                                        minWidth: '250px',
                                        background: 'linear-gradient(135deg, #52c41a 0%, #389e0d 100%)',
                                        borderRadius: '15px',
                                        padding: '25px',
                                        color: 'white',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    }}>
                                        <div style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            marginBottom: '20px' 
                                        }}>
                                            <div style={{ 
                                                background: 'rgba(255,255,255,0.2)', 
                                                borderRadius: '10px',
                                                padding: '10px',
                                                marginRight: '15px'
                                            }}>
                                                <FundOutlined style={{ fontSize: '24px' }} />
                                            </div>
                                            <span style={{ fontSize: '18px' }}>Market Share</span>
                                        </div>
                                        <div style={{ 
                                            fontSize: '36px', 
                                            fontWeight: 'bold',
                                            margin: '15px 0' 
                                        }}>
                                            {selectedCompany?.additionalDetails.keyMetrics.marketShare}%
                                        </div>
                                        <div style={{ 
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            background: 'rgba(255,255,255,0.15)',
                                            padding: '8px 15px',
                                            borderRadius: '20px',
                                            fontSize: '14px'
                                        }}>
                                            <ArrowUpOutlined style={{ marginRight: '5px' }} /> Growing steadily
                                        </div>
                                    </div>

                                    {/* Growth Rate Card */}
                                    <div style={{ 
                                        flex: '1 1 250px',
                                        minWidth: '250px',
                                        background: 'linear-gradient(135deg, #13c2c2 0%, #08979c 100%)',
                                        borderRadius: '15px',
                                        padding: '25px',
                                        color: 'white',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    }}>
                                        <div style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            marginBottom: '20px' 
                                        }}>
                                            <div style={{ 
                                                background: 'rgba(255,255,255,0.2)', 
                                                borderRadius: '10px',
                                                padding: '10px',
                                                marginRight: '15px'
                                            }}>
                                                <ThunderboltOutlined style={{ fontSize: '24px' }} />
                                            </div>
                                            <span style={{ fontSize: '18px' }}>Growth Rate</span>
                                        </div>
                                        <div style={{ 
                                            fontSize: '36px', 
                                            fontWeight: 'bold',
                                            margin: '15px 0' 
                                        }}>
                                            {selectedCompany?.additionalDetails.keyMetrics.growthRate}%
                                        </div>
                                        <div style={{ 
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            background: 'rgba(255,255,255,0.15)',
                                            padding: '8px 15px',
                                            borderRadius: '20px',
                                            fontSize: '14px'
                                        }}>
                                            <ArrowUpOutlined style={{ marginRight: '5px' }} /> Above target
                                        </div>
                                    </div>

                                    {/* Risk Score Card */}
                                    <div style={{ 
                                        flex: '1 1 250px',
                                        minWidth: '250px',
                                        background: 'linear-gradient(135deg, #faad14 0%, #d48806 100%)',
                                        borderRadius: '15px',
                                        padding: '25px',
                                        color: 'white',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    }}>
                                        <div style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            marginBottom: '20px' 
                                        }}>
                                            <div style={{ 
                                                background: 'rgba(255,255,255,0.2)', 
                                                borderRadius: '10px',
                                                padding: '10px',
                                                marginRight: '15px'
                                            }}>
                                                <SafetyOutlined style={{ fontSize: '24px' }} />
                                            </div>
                                            <span style={{ fontSize: '18px' }}>Risk Score</span>
                                        </div>
                                        <div style={{ 
                                            fontSize: '36px', 
                                            fontWeight: 'bold',
                                            margin: '15px 0' 
                                        }}>
                                            Low
                                        </div>
                                        <div style={{ 
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            background: 'rgba(255,255,255,0.15)',
                                            padding: '8px 15px',
                                            borderRadius: '20px',
                                            fontSize: '14px'
                                        }}>
                                            <ArrowUpOutlined style={{ marginRight: '5px' }} /> Stable outlook
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Analysis Categories */}
                            <div className="investor_investment-analysis-cards">
                                {Object.entries(analysisCategories).map(([key, category]) => (
                                    <div key={key} className="investor_investment-analysis-section">
                                        <div className="investor_investment-category-header">
                                            <Title level={4} className="investor_investment-section-title">
                                                {category.title}
                                                <Text type="secondary" className="investor_investment-section-description">
                                                    {category.description}
                                                </Text>
                                            </Title>
                                        </div>
                                        
                                        <Row gutter={[24, 24]}>
                                            {category.graphs.map(graph => (
                                                <Col span={12} key={graph.id}>
                                                    <Card className="investor_investment-analysis-card">
                                                        <div className="investor_investment-card-header">
                                                            <div className="investor_investment-header-content">
                                                                <span className="investor_investment-card-icon">{graph.icon}</span>
                                                                <div className="investor_investment-header-text">
                                                                    <Title level={5}>{graph.title}</Title>
                                                                    <Text type="secondary">{graph.description}</Text>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="investor_investment-card-content">
                                                            <div className="investor_investment-graph-container">
                                                                <ResponsiveContainer width="100%" height={300}>
                                                                    {renderGraph(graph)}
                                                                </ResponsiveContainer>
                                                            </div>
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
                title="Graph Details"
                open={graphModal.visible}
                onCancel={() => setGraphModal({ visible: false, type: 'revenue' })}
                footer={null}
                width={1000}
                className="investor-investment-graph-detail-modal"
            >
                <div className="investor-investment-graph-detail">
                    {graphModal.type && (
                        <>
                            <div className="investor-investment-graph-header">
                                <Title level={3}>
                                    {graphModal.type === 'revenue' ? 'Revenue Growth Analysis' : 'Performance Analysis'}
                                </Title>
                                <Text type="secondary">Detailed view of trends and patterns</Text>
                            </div>
                            <div className="investor-investment-graph-content">
                                {renderGraph({
                                    id: graphModal.type,
                                    data: sampleData[`${graphModal.type}Data`] || []
                                })}
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default InvestorInvestments;
