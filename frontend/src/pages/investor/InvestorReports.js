import React, { useState } from "react";
import './InvestorReports.css'; // Ensure to import the CSS file
import { Bar, Pie, Line, Radar } from 'react-chartjs-2'; // Importing chart components
import { FaDownload } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const InvestorReports = () => {
    // Sample data for various reports
    const [roiData, setRoiData] = useState({
        labels: ['2021', '2022', '2023'],
        datasets: [
            {
                label: 'ROI (%)',
                data: [20, 30, 25],
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
            },
        ],
    });

    const [industryData, setIndustryData] = useState({
        labels: ['Tech', 'Health', 'Finance', 'Education', 'Retail'],
        datasets: [
            {
                label: 'Investments by Industry',
                data: [40, 25, 15, 10, 10],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                ],
            },
        ],
    });

    const [fundingData, setFundingData] = useState({
        labels: ['Approved', 'Rejected', 'Pending'],
        datasets: [
            {
                label: 'Funding Applications',
                data: [60, 30, 10],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                ],
            },
        ],
    });

    const [policyData, setPolicyData] = useState({
        labels: ['Before Policy', 'After Policy'],
        datasets: [
            {
                label: 'Investment Amount ($)',
                data: [50000, 120000],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                ],
            },
            {
                label: 'Startup Performance (Growth %)',
                data: [20, 50],
                backgroundColor: [
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                ],
            },
        ],
    });

    // Sample data for risk assessment
    const [riskData, setRiskData] = useState({
        labels: ['Market Volatility', 'Competition', 'Regulatory Hurdles'],
        datasets: [
            {
                label: 'Risk Level',
                data: [80, 60, 40], // Risk levels from 0 to 100
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                ],
            },
        ],
    });

    // Sample data for SWOT analysis
    const swotData = {
        strengths: ['Strong brand recognition', 'Diverse product portfolio'],
        weaknesses: ['High operational costs', 'Limited market reach'],
        opportunities: ['Emerging markets', 'Technological advancements'],
        threats: ['Intense competition', 'Regulatory changes'],
    };

    // Customization state
    const [customization, setCustomization] = useState({
        roiMetric: 'ROI (%)',
        industryMetric: 'Investments by Industry',
        fundingMetric: 'Funding Applications',
        policyMetric: 'Investment Amount ($)',
        chartType: 'Bar', // Default chart type
    });

    const handleCustomizationChange = (e) => {
        const { name, value } = e.target;
        setCustomization((prev) => ({ ...prev, [name]: value }));
    };

    const renderChart = (data, title) => {
        const chartProps = {
            data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: title,
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Value',
                        },
                    },
                },
            },
        };

        switch (customization.chartType) {
            case 'Bar':
                return <Bar {...chartProps} />;
            case 'Pie':
                return <Pie {...chartProps} />;
            case 'Line':
                return <Line {...chartProps} />;
            case 'Radar':
                return <Radar {...chartProps} />;
            default:
                return <Bar {...chartProps} />;
        }
    };

    const downloadPDF = async (sectionId, title) => {
        const section = document.getElementById(sectionId);
        
        try {
            const canvas = await html2canvas(section, {
                scale: 2,
                logging: false,
                useCORS: true
            });
            
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${title.toLowerCase().replace(/\s+/g, '-')}-report.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <div className="investor-reports-container">
            <h1>Investor Reports</h1>
            
            <div className="reports-grid">
                {/* Portfolio Performance */}
                <section id="portfolio-section" className="report-section portfolio-performance">
                    <div className="report-header">
                        <h2>Portfolio Performance</h2>
                        <button 
                            className="download-btn"
                            onClick={() => downloadPDF('portfolio-section', 'Portfolio Performance')}
                        >
                            <FaDownload /> Download PDF
                        </button>
                    </div>
                    <div className="customization-container">
                        <label htmlFor="roiMetric">Select Metric:</label>
                        <select id="roiMetric" name="roiMetric" value={customization.roiMetric} onChange={handleCustomizationChange}>
                            <option value="ROI (%)">ROI (%)</option>
                            <option value="CAGR (%)">CAGR (%)</option>
                        </select>
                    </div>
                    <div className="customization-container">
                        <label htmlFor="chartType">Select Chart Type:</label>
                        <select id="chartType" name="chartType" value={customization.chartType} onChange={handleCustomizationChange}>
                            <option value="Bar">Bar</option>
                            <option value="Pie">Pie</option>
                            <option value="Line">Line</option>
                            <option value="Radar">Radar</option>
                        </select>
                    </div>
                    {renderChart(roiData, `${customization.roiMetric} Over the Years`)}
                    <div className="summary">
                        <h3>Summary</h3>
                        <p>This report provides a comprehensive breakdown of the return on investment (ROI) across the years.</p>
                    </div>
                </section>

                {/* Investment Trends */}
                <section id="trends-section" className="report-section investment-trends">
                    <div className="report-header">
                        <h2>Investment Trends</h2>
                        <button 
                            className="download-btn"
                            onClick={() => downloadPDF('trends-section', 'Investment Trends')}
                        >
                            <FaDownload /> Download PDF
                        </button>
                    </div>
                    <div className="customization-container">
                        <label htmlFor="industryMetric">Select Metric:</label>
                        <select id="industryMetric" name="industryMetric" value={customization.industryMetric} onChange={handleCustomizationChange}>
                            <option value="Investments by Industry">Investments by Industry</option>
                            <option value="Investments by Stage">Investments by Stage</option>
                        </select>
                    </div>
                    <div className="customization-container">
                        <label htmlFor="chartType">Select Chart Type:</label>
                        <select id="chartType" name="chartType" value={customization.chartType} onChange={handleCustomizationChange}>
                            <option value="Bar">Bar</option>
                            <option value="Pie">Pie</option>
                            <option value="Line">Line</option>
                            <option value="Radar">Radar</option>
                        </select>
                    </div>
                    <div className="charts-container">
                        <div className="chart-container">
                            <h3>{customization.industryMetric}</h3>
                            {renderChart(industryData, 'Investment Distribution Across Industries')}
                        </div>
                    </div>
                    <div className="summary">
                        <h3>Summary</h3>
                        <p>This section provides insights into the current investment landscape.</p>
                    </div>
                </section>

                {/* Funding Analytics */}
                <section id="funding-section" className="report-section funding-analytics">
                    <div className="report-header">
                        <h2>Funding Analytics</h2>
                        <button 
                            className="download-btn"
                            onClick={() => downloadPDF('funding-section', 'Funding Analytics')}
                        >
                            <FaDownload /> Download PDF
                        </button>
                    </div>
                    <div className="customization-container">
                        <label htmlFor="fundingMetric">Select Metric:</label>
                        <select id="fundingMetric" name="fundingMetric" value={customization.fundingMetric} onChange={handleCustomizationChange}>
                            <option value="Funding Applications">Funding Applications</option>
                            <option value="Funding Amounts">Funding Amounts</option>
                        </select>
                    </div>
                    <div className="customization-container">
                        <label htmlFor="chartType">Select Chart Type:</label>
                        <select id="chartType" name="chartType" value={customization.chartType} onChange={handleCustomizationChange}>
                            <option value="Bar">Bar</option>
                            <option value="Pie">Pie</option>
                            <option value="Line">Line</option>
                            <option value="Radar">Radar</option>
                        </select>
                    </div>
                    <div className="chart-container">
                        {renderChart(fundingData, `${customization.fundingMetric} Status`)}
                    </div>
                    <div className="summary">
                        <h3>Summary</h3>
                        <p>This section provides insights into the status of funding applications.</p>
                    </div>
                </section>

                {/* Policy Impact Reports */}
                <section id="policy-section" className="report-section policy-impact-reports">
                    <div className="report-header">
                        <h2>Policy Impact</h2>
                        <button 
                            className="download-btn"
                            onClick={() => downloadPDF('policy-section', 'Policy Impact')}
                        >
                            <FaDownload /> Download PDF
                        </button>
                    </div>
                    <div className="customization-container">
                        <label htmlFor="policyMetric">Select Metric:</label>
                        <select id="policyMetric" name="policyMetric" value={customization.policyMetric} onChange={handleCustomizationChange}>
                            <option value="Investment Amount ($)">Investment Amount ($)</option>
                            <option value="Startup Performance (Growth %)">Startup Performance (Growth %)</option>
                        </select>
                    </div>
                    <div className="customization-container">
                        <label htmlFor="chartType">Select Chart Type:</label>
                        <select id="chartType" name="chartType" value={customization.chartType} onChange={handleCustomizationChange}>
                            <option value="Bar">Bar</option>
                            <option value="Pie">Pie</option>
                            <option value="Line">Line</option>
                            <option value="Radar">Radar</option>
                        </select>
                    </div>
                    <div className="chart-container">
                        {renderChart(policyData, 'Impact of Policy Changes on Investments and Startup Performance')}
                    </div>
                    <div className="summary">
                        <h3>Case Studies</h3>
                        <p>This section analyzes how government regulations and policies have influenced investments and startup performance.</p>
                        <p>Key Insights:</p>
                        <ul>
                            <li>Investment amounts increased significantly after the policy change, indicating a positive impact on funding.</li>
                            <li>Startup performance metrics improved, showcasing enhanced growth opportunities post-policy adoption.</li>
                            <li>Real-world case studies demonstrate the effectiveness of supportive government policies in fostering innovation.</li>
                        </ul>
                    </div>
                </section>

                {/* Risk Assessment Reports */}
                <section id="risk-section" className="report-section risk-assessment-reports">
                    <div className="report-header">
                        <h2>Risk Assessment</h2>
                        <button 
                            className="download-btn"
                            onClick={() => downloadPDF('risk-section', 'Risk Assessment')}
                        >
                            <FaDownload /> Download PDF
                        </button>
                    </div>
                    <div className="chart-container">
                        <h3>Risk Heatmap</h3>
                        {renderChart(riskData, 'Risk Levels by Category')}
                    </div>
                    <div className="summary">
                        <h3>SWOT Analysis</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Strengths</th>
                                    <th>Weaknesses</th>
                                    <th>Opportunities</th>
                                    <th>Threats</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{swotData.strengths.join(', ')}</td>
                                    <td>{swotData.weaknesses.join(', ')}</td>
                                    <td>{swotData.opportunities.join(', ')}</td>
                                    <td>{swotData.threats.join(', ')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="summary">
                        <h3>Mitigation Strategies</h3>
                        <p>This section outlines strategies to mitigate identified risks:</p>
                        <ul>
                            <li>Market Volatility: Implementing hedging strategies and diversifying investments.</li>
                            <li>Competition: Focusing on innovation and customer engagement to maintain market share.</li>
                            <li>Regulatory Hurdles: Staying informed about regulatory changes and adapting business practices accordingly.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default InvestorReports;
