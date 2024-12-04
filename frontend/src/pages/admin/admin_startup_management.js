import React, { useState } from "react";
import { Line, Bar, Radar } from 'react-chartjs-2';
import 'chart.js/auto';
import './admin_startup_management.css';

// Data for the bar chart
const regionData = [
    { name: 'Ahmedabad', startups: 450 },
    { name: 'Surat', startups: 320 },
    { name: 'Vadodara', startups: 200 },
    { name: 'Rajkot', startups: 150 },
    { name: 'Gandhinagar', startups: 120 },
    { name: 'Bhavnagar', startups: 80 },
    { name: 'Jamnagar', startups: 50 }
];

// Sort the data by startup count in descending order
const sortedRegionData = regionData.sort((a, b) => b.startups - a.startups);

const startupBarChartData = {
    labels: sortedRegionData.map(region => region.name),
    datasets: [
        {
            label: 'Number of Startups',
            data: sortedRegionData.map(region => region.startups),
            backgroundColor: [
                '#4A90E2',
                '#50E3C2',
                '#B8E986',
                '#F8E71C',
                '#F5A623',
                '#D0021B',
                '#9013FE'
            ],
        }
    ]
};

const barChartOptions = {
    indexAxis: 'y', // This makes the chart horizontal
    plugins: {
        title: {
            display: true,
            text: 'Startup Distribution by Region in Gujarat'
        }
    },
    scales: {
        x: {
            beginAtZero: true,
            max: 500 // Adjust the max value based on your data range
        }
    },
    responsive: true,
    maintainAspectRatio: false,
};

const radarChartData = {
    labels: ['Funding', 'Sector Focus', 'Innovation Hubs', 'Global Reach'],
    datasets: [
        {
            label: 'Gujarat',
            data: [3, 4, 2, 2],
            backgroundColor: 'rgba(74, 144, 226, 0.2)',
            borderColor: '#4A90E2',
            pointBackgroundColor: '#4A90E2',
        },
        {
            label: 'Bengaluru',
            data: [5, 5, 5, 4],
            backgroundColor: 'rgba(22, 163, 74, 0.2)',
            borderColor: '#16A34A',
            pointBackgroundColor: '#16A34A',
        },
        {
            label: 'Singapore',
            data: [4, 4, 5, 5],
            backgroundColor: 'rgba(220, 38, 38, 0.2)',
            borderColor: '#DC2626',
            pointBackgroundColor: '#DC2626',
        }
    ]
};

const radarChartOptions = {
    scales: {
        r: {
            beginAtZero: true,
            max: 5
        }
    },
    responsive: true,
    maintainAspectRatio: false,
};

const AdminStartupManagement = () => {
    const [timeFrame, setTimeFrame] = useState('daily');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalStartups = 500;
    const totalAmountFunded = "$1.2M";
    const totalIPRPending = 15;
    const startups = Array.from({ length: 50 }, (_, idx) => ({
        id: idx + 1,
        name: `Startup ${idx + 1}`,
        registrationId: `REG${idx + 1}`,
        founders: `Founder ${idx + 1}`,
        status: ['Pending', 'Granted'][Math.floor(Math.random() * 2)],
        sector: ['Technology', 'Healthcare', 'Fintech'][Math.floor(Math.random() * 3)],
        dateRegistered: '2024-01-01',
        fundingStage: ['Seed', 'Series A', 'Series B'][Math.floor(Math.random() * 3)],
        funding: `$${Math.floor(Math.random() * 1000)}K`
    }));

    const activityData = {
        daily: [20, 25, 30, 35, 25, 30, 40],
        weekly: [150, 180, 200, 170],
        monthly: [500, 600, 550, 700, 650, 800]
    };

    const chartData = {
        labels: timeFrame === 'daily' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] :
                timeFrame === 'weekly' ? ['Week 1', 'Week 2', 'Week 3', 'Week 4'] :
                ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Active Users',
                data: activityData[timeFrame],
                fill: false,
                backgroundColor: '#4A90E2',
                borderColor: '#4A90E2',
                tension: 0.4,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#4A90E2',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
            },
            {
                label: 'Success Rates',
                data: timeFrame === 'daily' ? [70, 72, 68, 75, 70, 73, 74] :
                      timeFrame === 'weekly' ? [68, 70, 72, 74] :
                      [65, 70, 75, 80, 85, 90],
                fill: false,
                backgroundColor: '#16A34A',
                borderColor: '#16A34A',
                tension: 0.4,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#16A34A',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
            },
            {
                label: 'IPR Pending',
                data: timeFrame === 'daily' ? [15, 14, 13, 12, 11, 10, 9] :
                      timeFrame === 'weekly' ? [15, 14, 13, 12] :
                      [15, 14, 13, 12, 11, 10],
                fill: false,
                backgroundColor: '#DC2626',
                borderColor: '#DC2626',
                tension: 0.4,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#DC2626',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
            }
        ]
    };

    const chartOptions = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `Active Users: ${context.raw}`;
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    const totalPages = Math.ceil(startups.length / itemsPerPage);
    const currentStartups = startups.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Add these filter states
    const [filters, setFilters] = useState({
        status: '',
        sector: '',
        date: '',
        fundingStage: ''
    });

    // Handle filter changes
    const handleFilterChange = (filterName, value) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: value
        }));
        setCurrentPage(1); // Reset to first page when filter changes
    };

    // Filter the startups based on all criteria
    const filteredStartups = startups.filter(startup => {
        return (
            (filters.status ? startup.status === filters.status : true) &&
            (filters.sector ? startup.sector === filters.sector : true) &&
            (filters.date ? startup.dateRegistered === filters.date : true) &&
            (filters.fundingStage ? startup.fundingStage === filters.fundingStage : true)
        );
    });

    const startupSuccessData = [
        {
            name: "GreenTech Inc.",
            sector: "EnergyTech",
            fundingGoal: "$500,000",
            fundsRaised: "$450,000",
            successRate: "90%",
            investors: 8,
            duration: "January 1, 2024 - March 1, 2024",
            milestones: "Prototype completed",
            growthRate: "15%"
        },
        {
            name: "HealthifyAI",
            sector: "Healthcare",
            fundingGoal: "$1,000,000",
            fundsRaised: "$1,000,000",
            successRate: "100%",
            investors: 20,
            duration: "November 15, 2023 - February 15, 2024",
            milestones: "FDA approval",
            growthRate: "30%"
        },
        {
            name: "AgriSmart",
            sector: "AgriTech",
            fundingGoal: "$250,000",
            fundsRaised: "$125,000",
            successRate: "50%",
            investors: 5,
            duration: "October 10, 2023 - January 10, 2024",
            milestones: "Beta product launched",
            growthRate: "10%"
        },
        {
            name: "FinTechGo",
            sector: "FinTech",
            fundingGoal: "$750,000",
            fundsRaised: "$750,000",
            successRate: "100%",
            investors: 12,
            duration: "January 1, 2024 - February 15, 2024",
            milestones: "First customer acquired",
            growthRate: "20%"
        },
        {
            name: "EduTechX",
            sector: "EducationTech",
            fundingGoal: "$300,000",
            fundsRaised: "$180,000",
            successRate: "60%",
            investors: 10,
            duration: "December 1, 2023 - March 1, 2024",
            milestones: "Pilot project success",
            growthRate: "18%"
        },
        {
            name: "CleanOceans Initiative",
            sector: "EnvironmentalTech",
            fundingGoal: "$600,000",
            fundsRaised: "$540,000",
            successRate: "90%",
            investors: 15,
            duration: "October 15, 2023 - January 15, 2024",
            milestones: "Strategic partnerships formed",
            growthRate: "25%"
        },
        {
            name: "SmartHomes IoT",
            sector: "Internet of Things",
            fundingGoal: "$400,000",
            fundsRaised: "$320,000",
            successRate: "80%",
            investors: 9,
            duration: "November 1, 2023 - February 1, 2024",
            milestones: "MVP launched",
            growthRate: "22%"
        },
        {
            name: "AgriBloom",
            sector: "AgriTech",
            fundingGoal: "$200,000",
            fundsRaised: "$160,000",
            successRate: "80%",
            investors: 6,
            duration: "December 1, 2023 - February 28, 2024",
            milestones: "Initial market entry",
            growthRate: "12%"
        },
        {
            name: "MedConnect",
            sector: "HealthTech",
            fundingGoal: "$900,000",
            fundsRaised: "$810,000",
            successRate: "90%",
            investors: 18,
            duration: "October 1, 2023 - January 30, 2024",
            milestones: "Software deployment in hospitals",
            growthRate: "28%"
        },
        {
            name: "ZeroWaste Solutions",
            sector: "Sustainability",
            fundingGoal: "$450,000",
            fundsRaised: "$360,000",
            successRate: "80%",
            investors: 10,
            duration: "November 15, 2023 - February 15, 2024",
            milestones: "Zero-waste certification achieved",
            growthRate: "20%"
        }
    ];

    // Update the random status generator to only include funding statuses
    const getRandomStatus = () => {
        const statuses = ['Active', 'Funded', 'Partially Funded', 'Fully Funded'];
        return statuses[Math.floor(Math.random() * statuses.length)];
    };

    return (
        <div className="dashboard">
            {/* Stats Cards */}
            <div className="stats-container">
                <div className="stat-card">
                    <h3>Total Startups</h3>
                    <div className="number">{totalStartups}</div>
                </div>
                
                <div className="stat-card">
                    <h3>Total Amount Funded</h3>
                    <div className="number">{totalAmountFunded}</div>
                </div>
                
                <div className="stat-card">
                    <h3>Total IPR Pending</h3>
                    <div className="number">{totalIPRPending}</div>
                </div>
            </div>

            {/* Activity Graph */}
            <div className="activity-section">
                <div className="activity-header">
                    <h3>Startup Activity</h3>
                    <select 
                        value={timeFrame} 
                        onChange={(e) => setTimeFrame(e.target.value)}
                        className="timeframe-select"
                    >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
                <div className="activity-graph">
                    <Line data={chartData} options={chartOptions} />
                </div>
                <div className="graph-legend">
                    <div className="legend-item">
                        <div className="legend-color active"></div>
                        <span>Active Users</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color success"></div>
                        <span>Success Rates</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color pending"></div>
                        <span>IPR Pending</span>
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="filters-section">
                <h3>Filters</h3>
                <div className="filters-grid">
                    <div className="filter-group">
                        <label>Status</label>
                        <select 
                            value={filters.status}
                            onChange={(e) => handleFilterChange('status', e.target.value)}
                            className="filter-select"
                        >
                            <option value="">All Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Granted">Granted</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Sector</label>
                        <select 
                            value={filters.sector}
                            onChange={(e) => handleFilterChange('sector', e.target.value)}
                            className="filter-select"
                        >
                            <option value="">All Sectors</option>
                            <option value="Technology">Technology</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Fintech">Fintech</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="Education">Education</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Registration Date</label>
                        <input 
                            type="date"
                            value={filters.date}
                            onChange={(e) => handleFilterChange('date', e.target.value)}
                            className="filter-input"
                        />
                    </div>

                    <div className="filter-group">
                        <label>Funding Stage</label>
                        <select 
                            value={filters.fundingStage}
                            onChange={(e) => handleFilterChange('fundingStage', e.target.value)}
                            className="filter-select"
                        >
                            <option value="">All Stages</option>
                            <option value="Seed">Seed</option>
                            <option value="Series A">Series A</option>
                            <option value="Series B">Series B</option>
                            <option value="Series C">Series C</option>
                            <option value="Growth">Growth</option>
                        </select>
                    </div>
                </div>
                <button 
                    className="clear-filters-btn"
                    onClick={() => setFilters({
                        status: '',
                        sector: '',
                        date: '',
                        fundingStage: ''
                    })}
                >
                    Clear Filters
                </button>
            </div>

            {/* Startup List */}
            <div className="startup-list-section">
                <h3>Startup List</h3>
                <table className="startup-table">
                    <thead>
                        <tr>
                            <th>Startup Name</th>
                            <th>Registration ID</th>
                            <th>Founder(s) Name</th>
                            <th>Status</th>
                            <th>Date Registered</th>
                            <th>Total Funding Raised</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentStartups.map(startup => (
                            <tr key={startup.id}>
                                <td>{startup.name}</td>
                                <td>{startup.registrationId}</td>
                                <td>{startup.founders}</td>
                                <td>
                                    <span className={`status-badge ${startup.status.toLowerCase()}`}>
                                        {startup.status}
                                    </span>
                                </td>
                                <td>{startup.dateRegistered}</td>
                                <td>{startup.funding}</td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="action-btn view" title="View">
                                            View
                                        </button>
                                        <button className="action-btn edit" title="Edit">
                                            Edit
                                        </button>
                                        <button className="action-btn delete" title="Delete">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="pagination">
                    <button 
                        className="pagination-btn"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        ←
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index + 1}
                            className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    
                    <button 
                        className="pagination-btn"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        →
                    </button>
                </div>
            </div>

            {/* Success Rates Table */}
            <div className="success-rates-section">
                <h3>Startup Success Rates</h3>
                <div className="table-wrapper">
                    <table className="success-rates-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Sector</th>
                                <th>Funding Goal</th>
                                <th>Funds Raised</th>
                                <th>Success Rate</th>
                                <th>Investors</th>
                                <th>Milestones</th>
                                <th>Growth Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {startupSuccessData.map((startup, index) => (
                                <tr key={index}>
                                    <td>{startup.name}</td>
                                    <td>{startup.sector}</td>
                                    <td>{startup.fundingGoal}</td>
                                    <td>{startup.fundsRaised}</td>
                                    <td>{startup.successRate}</td>
                                    <td>{startup.investors}</td>
                                    <td>{startup.milestones}</td>
                                    <td>{startup.growthRate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Horizontal Bar Chart Section */}
            <div className="bar-chart-section">
                <h3>Startup Distribution by Region in Gujarat</h3>
                <div className="bar-chart-container">
                    <Bar data={startupBarChartData} options={barChartOptions} />
                </div>
            </div>

            <div className="radar-chart-section">
                <h3>Competitor Analysis</h3>
                <div className="radar-chart-container">
                    <Radar data={radarChartData} options={radarChartOptions} />
                </div>
            </div>
        </div>
    );
};

// CSS styles
const styles = `
.dashboard {
    padding: 12px;
    max-width: 1400px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Stats Container */
.stats-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 12px;
}

.stat-card {
    background: white;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.stat-card h3 {
    font-size: 0.9rem;
    color: #4B5563;
    margin-bottom: 8px;
}

.stat-card .number {
    font-size: 1.5rem;
    font-weight: 600;
    color: #4A90E2;
}

/* Activity Graph Section */
.activity-section {
    background: white;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.activity-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.activity-header h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1F2937;
}

.timeframe-select {
    padding: 8px 16px;
    border: 1px solid #E5E7EB;
    border-radius: 6px;
    font-size: 0.9rem;
    background-color: white;
    cursor: pointer;
}

.activity-graph {
    height: 350px; /* Increased height */
    position: relative;
    margin: 0 -10px; /* Negative margin to utilize full width */
}

/* Filters Section */
.filters-section {
    background: white;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.filters-section h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1F2937;
    margin-bottom: 16px;
}

.filters-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 20px;
}

.filter-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.filter-group label {
    font-size: 0.9rem;
    font-weight: 500;
    color: #4B5563;
}

.filter-select,
.filter-input {
    padding: 8px 12px;
    border: 1px solid #E5E7EB;
    border-radius: 6px;
    font-size: 0.9rem;
    background-color: white;
    width: 100%;
}

.filter-input[type="date"] {
    min-height: 38px; /* Consistent height with select inputs */
}

.clear-filters-btn {
    padding: 8px 16px;
    background-color: #F3F4F6;
    border: 1px solid #E5E7EB;
    border-radius: 6px;
    color: #4B5563;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.clear-filters-btn:hover {
    background-color: #E5E7EB;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .filters-grid {
        grid-template-columns: 1fr;
    }
    
    .activity-graph {
        height: 300px;
    }
}

/* Graph Legend */
.graph-legend {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-top: 16px;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: #4B5563;
}

.legend-color {
    width: 12px;
    height: 12px;
    border-radius: 3px;
}

.legend-color.active { background-color: #60A5FA; }
.legend-color.success { background-color: #34D399; }
.legend-color.pending { background-color: #F87171; }

/* Startup List Section */
.startup-list-section {
    background: white;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.startup-list-section h3 {
    font-size: 0.9rem;
    color: #4B5563;
    margin-bottom: 8px;
}

.startup-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.8rem;
}

.startup-table th,
.startup-table td {
    padding: 6px 8px;
    text-align: left;
    border-bottom: 1px solid #E5E7EB;
}

.startup-table th {
    background: #F9FAFB;
    font-weight: 500;
    color: #4B5563;
    font-size: 0.75rem;
}

/* Success Rates Section */
.success-rates-section {
    background: white;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.success-rates-section h3 {
    font-size: 0.9rem;
    color: #4B5563;
    margin-bottom: 8px;
}

.table-wrapper {
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: #CBD5E1 #F1F5F9;
}

.success-rates-table {
    width: 100%;
    min-width: 900px;
    border-collapse: collapse;
    font-size: 0.8rem;
}

.success-rates-table th,
.success-rates-table td {
    padding: 6px 8px;
    text-align: left;
    border-bottom: 1px solid #E5E7EB;
    white-space: nowrap;
}

.success-rates-table th {
    background: #F9FAFB;
    font-weight: 500;
    color: #4B5563;
    font-size: 0.75rem;
}

/* Status Badges */
.status-badge {
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 500;
    display: inline-block;
}

.status-badge.funded {
    background-color: #DCFCE7;
    color: #16A34A;
    border: 1px solid #86EFAC;
}

.status-badge.partially-funded {
    background-color: #FEF3C7;
    color: #D97706;
    border: 1px solid #FDE68A;
}

.status-badge.fully-funded {
    background-color: #F0FDF4;
    color: #15803D;
    border: 1px solid #BBF7D0;
}

/* Action Buttons */
.action-buttons {
    display: flex;
    gap: 4px;
}

.action-btn {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    color: white;
}

.action-btn.view {
    background-color: #6ae953;
}

.action-btn.edit {
    background-color: #408cfc;
}

.action-btn.delete {
    background-color: #FF3D42;
}

/* Pagination */
.pagination {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-top: 12px;
}

.pagination-btn {
    padding: 4px 8px;
    border: 1px solid #E5E7EB;
    border-radius: 4px;
    font-size: 0.8rem;
    background: white;
    cursor: pointer;
}

.pagination-btn.active {
    background: #4F46E5;
    color: white;
    border-color: #4F46E5;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .stats-container {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .startup-table,
    .success-rates-table {
        font-size: 0.75rem;
    }
}

@media (max-width: 768px) {
    .stats-container {
        grid-template-columns: 1fr;
    }
    
    .dashboard {
        padding: 8px;
    }
}

.bar-chart-section {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

.bar-chart-section h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}

.bar-chart-container {
    height: 400px;
    position: relative;
}
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default AdminStartupManagement;  