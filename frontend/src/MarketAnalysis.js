import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './MarketAnalysis.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChartLine, 
    faLightbulb, 
    faArrowTrendUp, 
    faUsers, 
    faBuilding,
    faGlobe,
    faDollarSign,
    faRocket,
    faChartPie,
    faCheck,
    faBolt,
    faGear,
    faMoneyBill,
    faIndustry,
    faHandHoldingDollar,
    faMoneyBillWave,
    faScaleBalanced,
    faStar,
    faHandshake,
    faAward,
    faLeaf,
    faRobot,
    faVideo,
    faPeopleGroup,
    faLock,
    faNetworkWired,
    faCloud,
    faDatabase,
    faDownload,
    faBalanceScale,
    faChartBar,
    faUserCheck,
    faComments
} from '@fortawesome/free-solid-svg-icons';

// Chart.js imports
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement,
    RadialLinearScale,
    ScatterController
} from 'chart.js';

import {
    Line,
    Pie,
    Bar,
    Radar,
    Scatter,
    Doughnut
} from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement,
    RadialLinearScale,
    ScatterController
);

const MarketAnalysis = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const images = [
        { 
            url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80',
            caption: 'Market Growth Trends 2024' 
        },
        { 
            url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80',
            caption: 'Industry Analysis Dashboard' 
        },
        { 
            url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80',
            caption: 'Global Market Statistics' 
        }
    ];

    const sampleLineData = [
        { name: '2018', value: 400 },
        { name: '2019', value: 300 },
        { name: '2020', value: 500 },
        { name: '2021', value: 700 },
        { name: '2022', value: 600 },
    ];

    const samplePieData = [
        { name: 'Tech', value: 400 },
        { name: 'Finance', value: 300 },
        { name: 'Healthcare', value: 300 },
        { name: 'Retail', value: 200 },
    ];

    const sampleBarData = [
        { name: '18-24', value: 400 },
        { name: '25-34', value: 300 },
        { name: '35-44', value: 300 },
        { name: '45-54', value: 200 },
    ];

    const sampleRadarData = [
        { subject: 'Pricing', A: 120, B: 110, fullMark: 150 },
        { subject: 'Reach', A: 98, B: 130, fullMark: 150 },
        { subject: 'Quality', A: 86, B: 130, fullMark: 150 },
        { subject: 'Support', A: 99, B: 100, fullMark: 150 },
        { subject: 'Innovation', A: 85, B: 90, fullMark: 150 },
    ];

    // Market Growth Data
    const marketGrowthData = {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Market Growth ($B)',
            data: [45, 52, 65, 82, 96, 110],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            fill: true,
            tension: 0.4,
        }]
    };

    // Industry Distribution Data
    const industryDistributionData = {
        labels: ['Tech', 'Healthcare', 'Finance', 'Retail', 'Manufacturing'],
        datasets: [{
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
                'rgba(37, 99, 235, 0.8)',
                'rgba(124, 58, 237, 0.8)',
                'rgba(5, 150, 105, 0.8)',
                'rgba(234, 88, 12, 0.8)',
                'rgba(79, 70, 229, 0.8)'
            ],
            borderColor: [
                '#2563eb',
                '#7c3aed',
                '#059669',
                '#ea580c',
                '#4f46e5'
            ],
            borderWidth: 1
        }]
    };

    // Audience Segmentation Data
    const audienceSegmentationData = {
        labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
        datasets: [{
            label: 'Age Distribution',
            data: [15, 30, 25, 20, 10],
            backgroundColor: 'rgba(79, 70, 229, 0.8)',
            borderColor: '#4f46e5',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(79, 70, 229, 1)',
            hoverBorderColor: '#4338ca'
        }]
    };

    // Competitor Analysis Data
    const competitorAnalysisData = {
        labels: ['Product Quality', 'Price', 'Market Reach', 'Innovation', 'Customer Service'],
        datasets: [
            {
                label: 'Company A',
                data: [90, 85, 70, 88, 92],
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: '#2563eb',
                pointBackgroundColor: '#2563eb',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#2563eb'
            },
            {
                label: 'Company B',
                data: [85, 90, 85, 75, 80],
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                borderColor: '#7c3aed',
                pointBackgroundColor: '#7c3aed',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#7c3aed'
            }
        ]
    };

    // Chart Options
    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Market Growth Trend'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value ($B)'
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        }
    };

    const pieChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Industry Distribution'
            }
        }
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Audience Age Distribution'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Percentage (%)'
                }
            }
        }
    };

    const radarChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Competitive Analysis'
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    };

    const adoptionRatesData = {
        labels: ['Early Adopters', 'Early Majority', 'Late Majority', 'Laggards'],
        datasets: [
            {
                data: [15, 35, 35, 15],
                backgroundColor: [
                    '#2563eb',
                    '#4f46e5',
                    '#7c3aed',
                    '#059669'
                ],
            }
        ]
    };

    // Risk vs. Opportunity Matrix Data
    const riskOpportunityData = {
        datasets: [{
            label: 'Market Segments',
            data: [
                { x: 20, y: 80, r: 15, label: 'AI & ML', sector: 'Technology' },
                { x: 70, y: 30, r: 12, label: 'IoT', sector: 'Hardware' },
                { x: 40, y: 60, r: 20, label: 'Cloud Services', sector: 'Infrastructure' },
                { x: 80, y: 20, r: 8, label: 'Blockchain', sector: 'Finance' },
                { x: 30, y: 70, r: 12, label: 'Cybersecurity', sector: 'Security' },
                { x: 60, y: 40, r: 10, label: '5G', sector: 'Telecom' },
                { x: 50, y: 50, r: 15, label: 'Green Tech', sector: 'Sustainability' }
            ],
            backgroundColor: [
                'rgba(37, 99, 235, 0.6)',  // Blue
                'rgba(124, 58, 237, 0.6)', // Purple
                'rgba(5, 150, 105, 0.6)',  // Green
                'rgba(234, 88, 12, 0.6)',  // Orange
                'rgba(79, 70, 229, 0.6)',  // Indigo
                'rgba(220, 38, 38, 0.6)',  // Red
                'rgba(16, 185, 129, 0.6)'  // Emerald
            ],
            borderColor: [
                '#2563eb',
                '#7c3aed',
                '#059669',
                '#ea580c',
                '#4f46e5',
                '#dc2626',
                '#10b981'
            ],
            borderWidth: 2
        }]
    };

    // Risk vs. Opportunity Matrix Options
    const riskOpportunityOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const point = context.raw;
                        return [
                            `Sector: ${point.sector}`,
                            `Risk Level: ${point.x}%`,
                            `Opportunity: ${point.y}%`,
                            `Market Size: ${point.r * 2}B`
                        ];
                    }
                }
            },
            title: {
                display: true,
                text: 'Risk vs. Opportunity Matrix',
                font: {
                    size: 16,
                    family: "'DM Sans', sans-serif"
                }
            }
        },
        scales: {
            x: {
                min: 0,
                max: 100,
                title: {
                    display: true,
                    text: 'Risk Level (%)',
                    font: {
                        size: 14,
                        family: "'DM Sans', sans-serif"
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            y: {
                min: 0,
                max: 100,
                title: {
                    display: true,
                    text: 'Opportunity Level (%)',
                    font: {
                        size: 14,
                        family: "'DM Sans', sans-serif"
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }
        }
    };

    return (
        <div className="market_analysis_container">
            <h1 className="market_analysis_title">Market Analysis</h1>
            
            {/* Carousel Section */}
            <div className="market_analysis_carousel">
                <Carousel 
                    showArrows={true} 
                    showThumbs={false} 
                    infiniteLoop={true} 
                    autoPlay={true}
                >
                    {images.map((image, index) => (
                        <div key={`market_analysis_slide_${index}`}>
                            <img src={image.url} alt={image.caption} />
                            <p className="market_analysis_legend">{image.caption}</p>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Navigation Menu */}
            <div className="market_analysis_menu">
                {['overview', 'snapshot', 'infographs', 'reports', 'showcase'].map(section => (
                    <button
                        key={`market_analysis_btn_${section}`}
                        className={`market_analysis_menu_item ${activeSection === section ? 'active' : ''}`}
                        onClick={() => setActiveSection(section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </div>

            {/* Content Sections */}
            <div className="market_analysis_content">
                {activeSection === 'overview' && (
                    <div className="market_analysis_overview">
                        <section className="market_analysis_growth">
                            <h2>
                                <FontAwesomeIcon icon={faChartLine} /> Market Growth Summary
                            </h2>
                            <p>Industry showing remarkable growth with 15.7% CAGR</p>
                        </section>

                        <section className="market_analysis_highlights">
                            <h2>
                                <FontAwesomeIcon icon={faLightbulb} /> Industry Highlights
                            </h2>
                            <ul>
                                <li><FontAwesomeIcon icon={faArrowTrendUp} /> Record-breaking market capitalization</li>
                                <li><FontAwesomeIcon icon={faCheck} /> Sustainable practices adoption at 67%</li>
                                <li><FontAwesomeIcon icon={faBolt} /> Digital transformation acceleration</li>
                            </ul>
                        </section>

                        <section className="market_analysis_trends">
                            <h2>
                                <FontAwesomeIcon icon={faArrowTrendUp} /> Top-Sector Trends
                            </h2>
                            <div className="market_analysis_trends_grid">
                                <div><FontAwesomeIcon icon={faGear} /> AI & Machine Learning</div>
                                <div><FontAwesomeIcon icon={faLightbulb} /> Sustainable Tech</div>
                                <div><FontAwesomeIcon icon={faUsers} /> Remote Solutions</div>
                                <div><FontAwesomeIcon icon={faChartLine} /> Blockchain Integration</div>
                            </div>
                        </section>

                        <section className="market_analysis_audience">
                            <h2>
                                <FontAwesomeIcon icon={faUsers} /> Audience Overview
                            </h2>
                            <div className="market_analysis_demographics">
                                <p>Primary: Tech-savvy professionals (25-45)</p>
                                <p>Secondary: Enterprise decision-makers</p>
                                <p>Geographic Focus: North America, Europe, APAC</p>
                            </div>
                        </section>

                        <section className="market_analysis_competitors">
                            <h2>
                                <FontAwesomeIcon icon={faBuilding} /> Competitor Snapshot
                            </h2>
                            <ul>
                                <li>Market Leader: TechCorp (35% share)</li>
                                <li>Rising Star: InnovateTech (15% growth)</li>
                                <li>Emerging Players: 5 new entrants</li>
                            </ul>
                        </section>

                        <section className="market_analysis_regional">
                            <h2>
                                <FontAwesomeIcon icon={faGlobe} /> Regional Insights
                            </h2>
                            <ul>
                                <li>North America: 45% market share</li>
                                <li>Europe: 30% market share</li>
                                <li>Asia Pacific: 20% market share</li>
                                <li>Rest of World: 5% market share</li>
                            </ul>
                        </section>

                        <section className="market_analysis_economic">
                            <h2>Economic Contributions</h2>
                            {/* Add economic data */}
                        </section>

                        <section className="market_analysis_startup">
                            <h2>Startup Landscape</h2>
                            {/* Add startup information */}
                        </section>

                        <section className="market_analysis_segmentation">
                            <h2>Market Segmentation</h2>
                            {/* Add segmentation data */}
                        </section>

                        <div className="market_analysis_cta">
                            <button className="market_analysis_cta_button">
                                Explore Detailed Reports
                            </button>
                        </div>
                    </div>
                )}

                {activeSection === 'snapshot' && (
                    <div className="market_analysis_snapshot">
                        <h2 className="market_analysis_section_title">
                            <FontAwesomeIcon icon={faChartPie} /> Market Snapshot
                        </h2>
                        
                        <div className="market_analysis_metrics_grid">
                            <div className="market_analysis_metric market_analysis_metric_size">
                                <FontAwesomeIcon icon={faMoneyBill} />
                                <h3>Total Market Size</h3>
                                <p className="market_analysis_number">$157B</p>
                                <p className="market_analysis_label">Current Market Value</p>
                                <div className="market_analysis_trend positive">↑ 12.3% YoY</div>
                            </div>

                            <div className="market_analysis_metric market_analysis_metric_growth">
                                <FontAwesomeIcon icon={faChartLine} />
                                <h3>Growth Rate</h3>
                                <p className="market_analysis_number">15.7%</p>
                                <p className="market_analysis_label">Projected CAGR 2024-2025</p>
                                <div className="market_analysis_trend positive">↑ 2.1% from 2023</div>
                            </div>

                            <div className="market_analysis_metric market_analysis_metric_funding">
                                <FontAwesomeIcon icon={faHandHoldingDollar} />
                                <h3>Total Funding</h3>
                                <p className="market_analysis_number">$42B</p>
                                <p className="market_analysis_label">Startup Investments</p>
                                <div className="market_analysis_trend positive">↑ 8.5% Q4</div>
                            </div>

                            <div className="market_analysis_metric market_analysis_metric_users">
                                <FontAwesomeIcon icon={faUsers} />
                                <h3>Active Users</h3>
                                <p className="market_analysis_number">85M+</p>
                                <p className="market_analysis_label">Global User Base</p>
                                <div className="market_analysis_trend positive">↑ 5.2M MoM</div>
                            </div>
                        </div>

                        <div className="market_analysis_detailed_metrics">
                            <div className="market_analysis_card market_analysis_industries">
                                <h3><FontAwesomeIcon icon={faIndustry} /> Top Industries</h3>
                                <div className="market_analysis_bar_chart">
                                    <div className="market_analysis_bar" style={{width: '85%'}}>
                                        <span>Technology</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="market_analysis_bar" style={{width: '70%'}}>
                                        <span>Healthcare</span>
                                        <span>70%</span>
                                    </div>
                                    <div className="market_analysis_bar" style={{width: '65%'}}>
                                        <span>Finance</span>
                                        <span>65%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="market_analysis_card market_analysis_segments">
                                <h3><FontAwesomeIcon icon={faUsers} /> Customer Segments</h3>
                                <div className="market_analysis_segment_grid">
                                    <div className="market_analysis_segment">
                                        <div className="market_analysis_segment_value">45%</div>
                                        <div className="market_analysis_segment_label">Enterprise</div>
                                    </div>
                                    <div className="market_analysis_segment">
                                        <div className="market_analysis_segment_value">35%</div>
                                        <div className="market_analysis_segment_label">SMB</div>
                                    </div>
                                    <div className="market_analysis_segment">
                                        <div className="market_analysis_segment_value">20%</div>
                                        <div className="market_analysis_segment_label">Consumer</div>
                                    </div>
                                </div>
                            </div>

                            <div className="market_analysis_card market_analysis_regions">
                                <h3><FontAwesomeIcon icon={faGlobe} /> Geographic Performance</h3>
                                <div className="market_analysis_region_list">
                                    <div className="market_analysis_region">
                                        <span>North America</span>
                                        <div className="market_analysis_progress" style={{width: '45%'}}>45%</div>
                                    </div>
                                    <div className="market_analysis_region">
                                        <span>Europe</span>
                                        <div className="market_analysis_progress" style={{width: '30%'}}>30%</div>
                                    </div>
                                    <div className="market_analysis_region">
                                        <span>Asia Pacific</span>
                                        <div className="market_analysis_progress" style={{width: '20%'}}>20%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="market_analysis_card market_analysis_emerging">
                                <h3><FontAwesomeIcon icon={faRocket} /> Emerging Markets</h3>
                                <div className="market_analysis_emerging_grid">
                                    <div className="market_analysis_emerging_item">
                                        <span>Southeast Asia</span>
                                        <span className="market_analysis_growth_tag">+25%</span>
                                    </div>
                                    <div className="market_analysis_emerging_item">
                                        <span>Latin America</span>
                                        <span className="market_analysis_growth_tag">+18%</span>
                                    </div>
                                    <div className="market_analysis_emerging_item">
                                        <span>Middle East</span>
                                        <span className="market_analysis_growth_tag">+15%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'infographs' && (
                    <div className="market_analysis_infographs">
                        <h2 className="infographs_main_title">
                            <FontAwesomeIcon icon={faChartPie} className="icon-pulse" /> Market Intelligence
                        </h2>
                        
                        <div className="infographs_grid">
                            {/* Market Growth Chart */}
                            <div className="infograph_card">
                                <h3>
                                    <FontAwesomeIcon icon={faChartLine} className="icon-pulse" />
                                    Market Growth Trend
                                </h3>
                                <div className="chart_container">
                                    <Line data={marketGrowthData} options={lineChartOptions} />
                                </div>
                            </div>

                            {/* Industry Distribution */}
                            <div className="infograph_card">
                                <h3>
                                    <FontAwesomeIcon icon={faChartPie} className="icon-rotate" />
                                    Industry Distribution
                                </h3>
                                <div className="chart_container">
                                    <Pie data={industryDistributionData} options={pieChartOptions} />
                                </div>
                            </div>

                            {/* Audience Segmentation */}
                            <div className="infograph_card">
                                <h3>
                                    <FontAwesomeIcon icon={faPeopleGroup} className="icon-bounce" />
                                    Audience Demographics
                                </h3>
                                <div className="chart_container">
                                    <Bar data={audienceSegmentationData} options={barChartOptions} />
                                </div>
                            </div>

                            {/* Competitor Analysis */}
                            <div className="infograph_card">
                                <h3>
                                    <FontAwesomeIcon icon={faBuilding} className="icon-rotate" />
                                    Competitor Analysis
                                </h3>
                                <div className="chart_container">
                                    <Radar data={competitorAnalysisData} options={radarChartOptions} />
                                </div>
                            </div>

                            {/* Product Adoption Rates */}
                            <div className="infograph_card">
                                <h3>
                                    <FontAwesomeIcon icon={faRocket} className="icon-pulse" />
                                    Adoption Rates
                                </h3>
                                <div className="chart_container">
                                    <Doughnut data={adoptionRatesData} options={{
                                        responsive: true,
                                        plugins: {
                                            legend: {
                                                position: 'right',
                                            },
                                            title: {
                                                display: true,
                                                text: 'Product Adoption Distribution'
                                            }
                                        }
                                    }} />
                                </div>
                            </div>

                            {/* Risk vs. Opportunity Matrix */}
                            <div className="infograph_card">
                                <h3>
                                    <FontAwesomeIcon icon={faBolt} className="icon-bounce" />
                                    Risk vs. Opportunity Matrix
                                </h3>
                                <div className="chart_container">
                                    <Scatter data={riskOpportunityData} options={riskOpportunityOptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'reports' && (
                    <div className="market_analysis_reports">
                        <h2 className="reports_main_title">
                            <FontAwesomeIcon icon={faChartPie} className="icon-pulse" /> Market Intelligence Reports
                        </h2>
                        
                        <div className="reports_columns_container">
                            {/* Left Column */}
                            <div className="reports_column">
                                {[
                                    {
                                        title: "Annual Market Reports",
                                        description: "Comprehensive overview of the year's trends and data.",
                                        icon: faChartLine,
                                        color: "#2563eb"
                                    },
                                    {
                                        title: "Competitor Analysis",
                                        description: "Detailed comparisons of major players.",
                                        icon: faUsers,
                                        color: "#4f46e5"
                                    },
                                    {
                                        title: "Funding Reports",
                                        description: "Breakdown of investment flows and funding stages.",
                                        icon: faMoneyBillWave,
                                        color: "#059669"
                                    },
                                    {
                                        title: "Policy Impact Reports",
                                        description: "Analysis of how policies influenced the market.",
                                        icon: faScaleBalanced,
                                        color: "#ea580c"
                                    },
                                    {
                                        title: "Regional Insights",
                                        description: "In-depth analysis of performance in specific regions.",
                                        icon: faGlobe,
                                        color: "#7c3aed"
                                    }
                                ].map((report, index) => (
                                    <div key={index} className="report_card" style={{"--report-color": report.color}}>
                                        <div className="report_icon">
                                            <FontAwesomeIcon icon={report.icon} />
                                        </div>
                                        <div className="report_content">
                                            <h4>{report.title}</h4>
                                            <p>{report.description}</p>
                                        </div>
                                        <button className="download_btn">
                                            <FontAwesomeIcon icon={faDownload} /> Download
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Right Column */}
                            <div className="reports_column">
                                {[
                                    {
                                        title: "Audience Behavior",
                                        description: "Customer behavior insights and purchase trends.",
                                        icon: faPeopleGroup,
                                        color: "#f59e0b"
                                    },
                                    {
                                        title: "Technology Impact",
                                        description: "Role of emerging technologies in market transformation.",
                                        icon: faRobot,
                                        color: "#10b981"
                                    },
                                    {
                                        title: "Startup Case Studies",
                                        description: "Reports highlighting success stories and lessons learned.",
                                        icon: faLightbulb,
                                        color: "#3b82f6"
                                    },
                                    {
                                        title: "Trend Forecasts",
                                        description: "Data-driven predictions for the next 5-10 years.",
                                        icon: faChartLine,
                                        color: "#8b5cf6"
                                    },
                                    {
                                        title: "Sustainability Reports",
                                        description: "Analysis of environmental and social impacts.",
                                        icon: faLeaf,
                                        color: "#22c55e"
                                    }
                                ].map((report, index) => (
                                    <div key={index} className="report_card" style={{"--report-color": report.color}}>
                                        <div className="report_icon">
                                            <FontAwesomeIcon icon={report.icon} />
                                        </div>
                                        <div className="report_content">
                                            <h4>{report.title}</h4>
                                            <p>{report.description}</p>
                                        </div>
                                        <button className="download_btn">
                                            <FontAwesomeIcon icon={faDownload} /> Download
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'showcase' && (
                    <div className="market_analysis_showcase">
                        <div className="market_analysis_showcase_grid">
                            {/* Left Column */}
                            <div className="market_analysis_showcase_column">
                                {/* Top Startups */}
                                <section className="market_analysis_showcase_card glass_effect">
                                    <div className="card_header">
                                        <FontAwesomeIcon icon={faStar} className="header_icon" />
                                        <h2>Leading Startups</h2>
                                    </div>
                                    <div className="market_analysis_list">
                                        {[
                                            {
                                                name: "TechCorp AI",
                                                growth: "156%",
                                                focus: "AI Analytics",
                                                stage: "Series B",
                                                funding: "$50M",
                                                icon: faRobot,
                                                color: "#4f46e5"
                                            },
                                            {
                                                name: "CloudFlow",
                                                growth: "128%",
                                                focus: "Cloud Solutions",
                                                stage: "Series A",
                                                funding: "$25M",
                                                icon: faCloud,
                                                color: "#0891b2"
                                            },
                                            {
                                                name: "DataSense",
                                                growth: "98%",
                                                focus: "Big Data",
                                                stage: "Series C",
                                                funding: "$75M",
                                                icon: faDatabase,
                                                color: "#7c3aed"
                                            }
                                        ].map((item, index) => (
                                            <div key={index} className="showcase_item" style={{"--item-color": item.color}}>
                                                <div className="item_icon">
                                                    <FontAwesomeIcon icon={item.icon} />
                                                </div>
                                                <div className="item_content">
                                                    <div className="item_header">
                                                        <h3>{item.name}</h3>
                                                        <span className="growth_badge">↑ {item.growth}</span>
                                                    </div>
                                                    <p>{item.focus}</p>
                                                    <div className="item_footer">
                                                        <span className="info_badge">{item.stage}</span>
                                                        <span className="info_badge">{item.funding}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Tech Solutions */}
                                <section className="market_analysis_showcase_card glass_effect">
                                    <div className="card_header">
                                        <FontAwesomeIcon icon={faGear} className="header_icon" />
                                        <h2>Tech Solutions</h2>
                                    </div>
                                    <div className="market_analysis_list">
                                        {[
                                            {
                                                name: "AI Analytics Suite",
                                                icon: faRobot,
                                                description: "Enterprise AI Solution",
                                                metrics: ["98% Accuracy", "50M+ API Calls"],
                                                color: "#6366f1"
                                            },
                                            {
                                                name: "IoT Platform",
                                                icon: faNetworkWired,
                                                description: "Smart Device Management",
                                                metrics: ["10K+ Devices", "Real-time Data"],
                                                color: "#0ea5e9"
                                            }
                                        ].map((item, index) => (
                                            <div key={index} className="showcase_item" style={{"--item-color": item.color}}>
                                                <div className="item_icon">
                                                    <FontAwesomeIcon icon={item.icon} />
                                                </div>
                                                <div className="item_content">
                                                    <h3>{item.name}</h3>
                                                    <p>{item.description}</p>
                                                    <div className="metrics_container">
                                                        {item.metrics.map((metric, i) => (
                                                            <span key={i} className="metric_badge">{metric}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Right Column */}
                            <div className="market_analysis_showcase_column">
                                {/* Success Stories */}
                                <section className="market_analysis_showcase_card">
                                    <h2 className="market_analysis_showcase_title">
                                        <FontAwesomeIcon icon={faRocket} /> Success Stories
                                    </h2>
                                    <div className="market_analysis_story_list">
                                        {[
                                            {
                                                title: "Market Leadership",
                                                company: "TechCorp AI",
                                                description: "From startup to market leader in 18 months",
                                                achievement: "10x Growth"
                                            },
                                            {
                                                title: "Innovation Award",
                                                company: "DataSense",
                                                description: "Revolutionary data processing solution",
                                                achievement: "Industry First"
                                            }
                                        ].map((story, index) => (
                                            <div key={index} className="market_analysis_story_item">
                                                <div className="market_analysis_story_details">
                                                    <div className="market_analysis_story_badge">{story.achievement}</div>
                                                    <h3>{story.title}</h3>
                                                    <p>{story.company}</p>
                                                    <p>{story.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Major Investors */}
                                <section className="market_analysis_showcase_card">
                                    <h2 className="market_analysis_showcase_title">
                                        <FontAwesomeIcon icon={faHandshake} /> Major Investors
                                    </h2>
                                    <div className="market_analysis_investor_list">
                                        {[
                                            {
                                                name: "Tech Ventures",
                                                portfolio: "25+ Companies",
                                                aum: "$2B+",
                                                focus: "AI & Cloud"
                                            },
                                            {
                                                name: "Innovation Capital",
                                                portfolio: "15+ Companies",
                                                aum: "$1.5B+",
                                                focus: "Deep Tech"
                                            }
                                        ].map((investor, index) => (
                                            <div key={index} className="market_analysis_investor_item">
                                                <div className="market_analysis_investor_details">
                                                    <h3>{investor.name}</h3>
                                                    <p>{investor.focus}</p>
                                                    <div className="market_analysis_metrics">
                                                        <span>{investor.portfolio}</span>
                                                        <span>{investor.aum}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MarketAnalysis;