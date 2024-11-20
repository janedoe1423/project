import React, { useState } from "react";
import { Card, Button, Modal, Row, Col, Typography, Space } from "antd";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { EyeOutlined, LineChartOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

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
            ]
        },
        // Add more companies as needed
    ]);

    const [detailsModal, setDetailsModal] = useState(false);
    const [analysisModal, setAnalysisModal] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);

    const showDetails = (company) => {
        setSelectedCompany(company);
        setDetailsModal(true);
    };

    const showAnalysis = (company) => {
        setSelectedCompany(company);
        setAnalysisModal(true);
    };

    return (
        <div style={{ padding: "24px" }}>
            <Title level={2}>Investment Portfolio</Title>
            
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {investments.map((company) => (
                    <Card 
                        key={company.id}
                        style={{ 
                            borderRadius: '12px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
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
                                    >
                                        View Details
                                    </Button>
                                    <Button 
                                        icon={<LineChartOutlined />} 
                                        type="primary" 
                                        block
                                        onClick={() => showAnalysis(company)}
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
                title={`${selectedCompany?.companyName} Details`}
                open={detailsModal}
                onCancel={() => setDetailsModal(false)}
                footer={null}
                width={700}
            >
                {selectedCompany && (
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <Card title="Investment Details">
                                <Row gutter={[16, 16]}>
                                    <Col span={12}>
                                        <Text type="secondary">Initial Investment</Text>
                                        <Title level={4}>${selectedCompany.investmentAmount.toLocaleString()}</Title>
                                    </Col>
                                    <Col span={12}>
                                        <Text type="secondary">Current Value</Text>
                                        <Title level={4}>${selectedCompany.currentValue.toLocaleString()}</Title>
                                    </Col>
                                    {/* Add more details as needed */}
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                )}
            </Modal>

            {/* Analysis Modal */}
            <Modal
                title={`${selectedCompany?.companyName} Analysis`}
                open={analysisModal}
                onCancel={() => setAnalysisModal(false)}
                footer={null}
                width={800}
            >
                {selectedCompany && (
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <Card title="Investment Growth">
                                <div style={{ height: 300 }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={selectedCompany.performanceData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Area 
                                                type="monotone" 
                                                dataKey="value" 
                                                stroke="#8884d8" 
                                                fill="#8884d8" 
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </Card>
                        </Col>
                        {/* Add more analysis components as needed */}
                    </Row>
                )}
            </Modal>
        </div>
    );
};

export default InvestorInvestments;
