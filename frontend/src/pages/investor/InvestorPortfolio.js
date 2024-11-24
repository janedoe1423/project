import React, { useState, useEffect } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { 
    FaBuilding, FaChartLine, FaFilter, FaSearch, 
    FaSortAmountUp, FaDownload, FaInfoCircle 
} from 'react-icons/fa';
import './InvestorPortfolio.css';

const InvestorPortfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('date');
    const [timeRange, setTimeRange] = useState('1y');
    const [chartData, setChartData] = useState(null);
    const [filteredCompanies, setFilteredCompanies] = useState([]);

    const portfolioData = {
        totalValue: "450M",
        totalCompanies: 28,
        activeInvestments: 22,
        exits: 6,
        irr: 32.5,
        performanceMetrics: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            returns: [15, 22, 28, 32.5, 35],
            investments: [8, 12, 18, 24, 28]
        },
        companies: [
            {
                id: 1,
                name: "TechCorp AI",
                logo: "path/to/logo1.png",
                sector: "Artificial Intelligence",
                stage: "Series B",
                investmentDate: "2021",
                investmentAmount: "15M",
                ownership: "12%",
                valuation: "125M",
                status: "Active",
                performance: {
                    growth: 85,
                    trend: "up",
                    metrics: {
                        revenue: "+125%",
                        users: "+250k",
                        margin: "32%"
                    }
                }
            },
            {
                id: 2,
                name: "FinFlow",
                logo: "path/to/logo2.png",
                sector: "Fintech",
                stage: "Series A",
                investmentDate: "2022",
                investmentAmount: "8M",
                ownership: "15%",
                valuation: "75M",
                status: "Active",
                performance: {
                    growth: 65,
                    trend: "up",
                    metrics: {
                        revenue: "+95%",
                        users: "+150k",
                        margin: "28%"
                    }
                }
            },
            {
                id: 3,
                name: "HealthTech Pro",
                logo: "path/to/logo3.png",
                sector: "Healthcare",
                stage: "Exit",
                investmentDate: "2020",
                investmentAmount: "5M",
                ownership: "0%",
                valuation: "200M",
                status: "Exited",
                performance: {
                    growth: 150,
                    trend: "up",
                    metrics: {
                        revenue: "+200%",
                        users: "+500k",
                        margin: "35%"
                    }
                }
            },
            // Add more companies as needed
        ]
    };

    // Sample historical data for different time ranges
    const historicalData = {
        '1y': {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            returns: [28.5, 29.2, 30.1, 31.5, 32.0, 32.5, 33.1, 33.8, 34.2, 34.8, 35.0, 35.5],
            investments: [20, 21, 22, 22, 23, 23, 24, 25, 26, 27, 27, 28]
        },
        '3y': {
            labels: ['2021', '2022', '2023'],
            returns: [25.5, 30.2, 35.5],
            investments: [18, 23, 28]
        },
        '5y': {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            returns: [15.0, 22.0, 28.0, 32.5, 35.5],
            investments: [8, 12, 18, 24, 28]
        },
        'all': {
            labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            returns: [8.0, 12.0, 15.0, 22.0, 28.0, 32.5, 35.5],
            investments: [5, 7, 8, 12, 18, 24, 28]
        }
    };

    // Function to update chart data based on time range
    const updateChartData = (selectedRange) => {
        const data = historicalData[selectedRange];
        return {
            labels: data.labels,
            datasets: [
                {
                    label: 'Portfolio IRR %',
                    data: data.returns,
                    borderColor: '#6366f1',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(99, 102, 241, 0.1)'
                },
                {
                    label: 'Number of Investments',
                    data: data.investments,
                    borderColor: '#10b981',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    yAxisID: 'y2'
                }
            ]
        };
    };

    // Chart options with dual Y-axes
    const chartOptions = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Portfolio Performance Over Time'
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                    display: true,
                    text: 'IRR %'
                }
            },
            y2: {
                type: 'linear',
                display: true,
                position: 'right',
                title: {
                    display: true,
                    text: 'Number of Investments'
                },
                grid: {
                    drawOnChartArea: false,
                }
            }
        }
    };

    // Effect to update chart when time range changes
    useEffect(() => {
        setChartData(updateChartData(timeRange));
    }, [timeRange]);

    const handleTimeRangeChange = (e) => {
        setTimeRange(e.target.value);
    };

    const renderPerformanceChart = () => (
        <div className="performance-chart">
            {chartData && (
                <Line
                    data={chartData}
                    options={chartOptions}
                />
            )}
        </div>
    );

    // Filter options
    const filterOptions = [
        { value: 'all', label: 'All Companies' },
        { value: 'active', label: 'Active Investments' },
        { value: 'exited', label: 'Exited Companies' },
        { value: 'high-growth', label: 'High Growth (>50%)' },
        { value: 'early-stage', label: 'Early Stage' },
        { value: 'late-stage', label: 'Late Stage' }
    ];

    // Sort options
    const sortOptions = [
        { value: 'date', label: 'Investment Date' },
        { value: 'value', label: 'Investment Value' },
        { value: 'performance', label: 'Performance' },
        { value: 'alphabetical', label: 'Company Name' }
    ];

    // Filter and sort companies
    useEffect(() => {
        let results = [...portfolioData.companies];

        // Apply search filter
        if (searchQuery) {
            results = results.filter(company => 
                company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                company.sector.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply category filter
        switch (activeFilter) {
            case 'active':
                results = results.filter(company => company.status === 'Active');
                break;
            case 'exited':
                results = results.filter(company => company.status === 'Exited');
                break;
            case 'high-growth':
                results = results.filter(company => company.performance.growth > 50);
                break;
            case 'early-stage':
                results = results.filter(company => 
                    ['Seed', 'Series A'].includes(company.stage)
                );
                break;
            case 'late-stage':
                results = results.filter(company => 
                    ['Series B', 'Series C', 'Series D'].includes(company.stage)
                );
                break;
            default:
                break;
        }

        // Apply sorting
        results.sort((a, b) => {
            switch (sortBy) {
                case 'date':
                    return new Date(b.investmentDate) - new Date(a.investmentDate);
                case 'value':
                    return parseFloat(b.investmentAmount) - parseFloat(a.investmentAmount);
                case 'performance':
                    return b.performance.growth - a.performance.growth;
                case 'alphabetical':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

        setFilteredCompanies(results);
    }, [searchQuery, activeFilter, sortBy]);

    return (
        <div className="portfolio-container">
            {/* Portfolio Header */}
            <div className="portfolio-header">
                <h1>Investment Portfolio</h1>
                <div className="portfolio-actions">
                    <button className="action-btn">
                        <FaDownload /> Export Report
                    </button>
                    <button className="action-btn">
                        <FaFilter /> Filter View
                    </button>
                </div>
            </div>

            {/* Portfolio Overview Cards */}
            <div className="metrics-grid">
                <div className="metric-card portfolio-value">
                    <div className="metric-icon">
                        <FaChartLine />
                    </div>
                    <div className="metric-content">
                        <h3>Portfolio Value</h3>
                        <div className="metric-value">${portfolioData.totalValue}</div>
                        <div className="metric-trend positive">↑ 24.5% YTD</div>
                    </div>
                </div>
                
                <div className="metric-card active-investments">
                    <div className="metric-icon">
                        <FaBuilding />
                    </div>
                    <div className="metric-content">
                        <h3>Active Investments</h3>
                        <div className="metric-value">{portfolioData.activeInvestments}</div>
                        <div className="metric-trend">Companies</div>
                    </div>
                </div>

                <div className="metric-card portfolio-irr">
                    <div className="metric-icon">
                        <FaChartLine />
                    </div>
                    <div className="metric-content">
                        <h3>Portfolio IRR</h3>
                        <div className="metric-value">{portfolioData.irr}%</div>
                        <div className="metric-trend positive">↑ 5.2% vs LY</div>
                    </div>
                </div>

                <div className="metric-card successful-exits">
                    <div className="metric-icon">
                        <FaChartLine />
                    </div>
                    <div className="metric-content">
                        <h3>Successful Exits</h3>
                        <div className="metric-value">{portfolioData.exits}</div>
                        <div className="metric-trend">Companies</div>
                    </div>
                </div>
            </div>

            {/* Performance Chart Section */}
            <div className="chart-section">
                <div className="chart-header">
                    <h2>Portfolio Performance</h2>
                    <div className="chart-actions">
                        <select 
                            className="time-filter"
                            value={timeRange}
                            onChange={handleTimeRangeChange}
                        >
                            <option value="1y">1 Year</option>
                            <option value="3y">3 Years</option>
                            <option value="5y">5 Years</option>
                            <option value="all">All Time</option>
                        </select>
                    </div>
                </div>
                {renderPerformanceChart()}
            </div>

            {/* Portfolio Companies Section */}
            <div className="companies-section">
                <div className="section-header">
                    <h2>Portfolio Companies</h2>
                    <div className="filter-controls">
                        <select 
                            className="filter-select"
                            value={activeFilter}
                            onChange={(e) => setActiveFilter(e.target.value)}
                        >
                            {filterOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <select 
                            className="sort-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            {sortOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="companies-grid">
                    {filteredCompanies.length > 0 ? (
                        filteredCompanies.map(company => (
                            <div key={company.id} className="company-card">
                                <div className="company-header">
                                    <img src={company.logo} alt={company.name} />
                                    <span className={`status-badge ${company.status.toLowerCase()}`}>
                                        {company.status}
                                    </span>
                                </div>
                                <div className="company-info">
                                    <h3>{company.name}</h3>
                                    <p className="sector">{company.sector}</p>
                                    <div className="investment-details">
                                        <div className="detail">
                                            <span>Investment</span>
                                            <strong>${company.investmentAmount}</strong>
                                        </div>
                                        <div className="detail">
                                            <span>Ownership</span>
                                            <strong>{company.ownership}</strong>
                                        </div>
                                        <div className="detail">
                                            <span>Current Value</span>
                                            <strong>${company.valuation}</strong>
                                        </div>
                                    </div>
                                    <div className="performance-metrics">
                                        <div className={`trend ${company.performance.trend}`}>
                                            {company.performance.growth}% Growth
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No companies found matching your criteria</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InvestorPortfolio;