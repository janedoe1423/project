import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line, Bar, Pie } from "react-chartjs-2";
import "./InvestorDashboard.css";
import { FaEdit } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

// Add this helper function at the top of your component
const aggregateData = (monthlyData, period) => {
    if (period === 'monthly') return monthlyData;

    const periods = {
        quarterly: 3,
        yearly: 12
    };

    const aggregate = [];
    const interval = periods[period];
    
    for (let i = 0; i < monthlyData.length; i += interval) {
        const slice = monthlyData.slice(i, i + interval);
        aggregate.push(slice.reduce((a, b) => a + b) / slice.length);
    }
    
    return aggregate;
};

// Add this function to get period labels
const getPeriodLabels = (period) => {
    switch (period) {
        case 'monthly':
            return ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
        case 'quarterly':
            return ["Q1", "Q2"];
        case 'yearly':
            return ["2024"];
        default:
            return ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    }
};

// Add this number formatting helper function
const formatNumber = (num) => {
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
};

const InvestorDashboard = () => {
    const [timeFilter, setTimeFilter] = useState('monthly');

    // Create base data object
    const baseData = {
        cashBalance: [1200000, 1350000, 1400000, 1450000, 1480000, 1500000],
        grossBurn: [270000, 265000, 255000, 250000, 245000, 250000],
        ebitda: [250000, 265000, 280000, 290000, 295000, 300000],
        revenue: [650000, 680000, 720000, 750000, 780000, 800000]
    };

    // Function to get current period data
    const getCurrentPeriodData = (dataKey) => {
        const aggregatedData = aggregateData(baseData[dataKey], timeFilter);
        const currentValue = aggregatedData[aggregatedData.length - 1];
        const previousValue = aggregatedData[aggregatedData.length - 2] || aggregatedData[0];
        const change = ((currentValue - previousValue) / previousValue) * 100;

        return {
            value: currentValue,
            change: Number(change.toFixed(1)),
            graphData: {
                title: `${dataKey.charAt(0).toUpperCase() + dataKey.slice(1)} Trend`,
                description: `${timeFilter.charAt(0).toUpperCase() + timeFilter.slice(1)} ${dataKey} trend showing changes and projections`,
                type: "line",
                data: {
                    labels: getPeriodLabels(timeFilter),
                    datasets: [{
                        label: dataKey,
                        data: aggregatedData,
                        borderColor: getDataColor(dataKey),
                        backgroundColor: getDataBackgroundColor(dataKey),
                        fill: true,
                        tension: 0.4
                    }]
                }
            }
        };
    };

    // Helper function to get consistent colors
    const getDataColor = (dataKey) => {
        const colors = {
            cashBalance: "#2563eb",
            grossBurn: "#ef4444",
            ebitda: "#10b981",
            revenue: "#3b82f6"
        };
        return colors[dataKey];
    };

    const getDataBackgroundColor = (dataKey) => {
        const colors = {
            cashBalance: "rgba(37, 99, 235, 0.1)",
            grossBurn: "rgba(239, 68, 68, 0.1)",
            ebitda: "rgba(16, 185, 129, 0.1)",
            revenue: "rgba(59, 130, 246, 0.1)"
        };
        return colors[dataKey];
    };

    // Generate current period KPI data
    const kpiData = {
        cashBalance: {
            value: 2500000,
            change: 12,
            graphData: {
                title: "Cash Balance Trend",
                type: "line",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [{
                        label: "Cash Balance",
                        data: [2200000, 2300000, 2400000, 2450000, 2480000, 2500000],
                        borderColor: "#6f42c1",
                        tension: 0.4
                    }]
                }
            }
        },
        grossBurn: {
            value: 150000,
            change: -5,
            graphData: {
                title: "Gross Burn Trend",
                type: "line",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [{
                        label: "Gross Burn",
                        data: [160000, 155000, 153000, 151000, 152000, 150000],
                        borderColor: "#dc2626",
                        tension: 0.4
                    }]
                }
            }
        },
        ebitda: {
            value: 300000,
            change: 8,
            graphData: {
                title: "EBITDA Trend",
                type: "line",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [{
                        label: "EBITDA",
                        data: [270000, 280000, 285000, 290000, 295000, 300000],
                        borderColor: "#059669",
                        tension: 0.4
                    }]
                }
            }
        },
        revenue: {
            value: 1200000,
            change: 15,
            graphData: {
                title: "Revenue Trend",
                type: "line",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [{
                        label: "Revenue",
                        data: [1000000, 1050000, 1100000, 1150000, 1180000, 1200000],
                        borderColor: "#2563eb",
                        tension: 0.4
                    }]
                }
            }
        }
    };

    // Update graphOptions based on timeFilter
    const graphOptions = [
        {
            id: 1,
            section: "Financial Health",
            title: "Cash Flow Analysis",
            description: `${timeFilter.charAt(0).toUpperCase() + timeFilter.slice(1)} cash flow analysis`,
            type: "line",
            data: {
                labels: getPeriodLabels(timeFilter),
                datasets: [
                    {
                        label: "Operating Cash Flow",
                        data: aggregateData([100000, 120000, 115000, 130000, 145000, 150000], timeFilter),
                        borderColor: "#4CAF50",
                        tension: 0.4
                    },
                    {
                        label: "Investing Cash Flow",
                        data: aggregateData([-50000, -60000, -45000, -70000, -65000, -80000], timeFilter),
                        borderColor: "#FF6384",
                        tension: 0.4
                    }
                ]
            }
        },
        {
            id: 2,
            section: "Financial Health",
            title: "Burn Rate Analysis",
            description: "Monthly cash burn rate trends, including gross and net burn. Helps predict runway and cash management efficiency.",
            type: "bar",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "Monthly Burn Rate",
                    data: [250000, 240000, 235000, 225000, 220000, 215000],
                    backgroundColor: "#36A2EB"
                }]
            }
        },
        {
            id: 3,
            section: "Growth Metrics",
            title: "Revenue Growth",
            description: "Monthly recurring revenue (MRR) growth with breakdown by customer segments and revenue types. Includes year-over-year growth rates.",
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "MRR",
                    data: [300000, 320000, 350000, 380000, 410000, 450000],
                    borderColor: "#4CAF50",
                    fill: true,
                    backgroundColor: "rgba(76, 175, 80, 0.1)"
                }]
            }
        },
        {
            id: 4,
            section: "Growth Metrics",
            title: "Customer Acquisition",
            description: "New customer acquisition rates, customer churn, and net customer growth. Includes CAC and LTV metrics.",
            type: "bar",
            stacked: true,
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                    {
                        label: "New Customers",
                        data: [50, 60, 75, 65, 80, 90],
                        backgroundColor: "#4CAF50"
                    },
                    {
                        label: "Churned Customers",
                        data: [-10, -8, -12, -9, -11, -13],
                        backgroundColor: "#FF6384"
                    }
                ]
            }
        },
        {
            id: 5,
            section: "Funding & Team",
            title: "Funding Overview",
            description: "Total funding raised, funding rounds breakdown, and current runway. Includes burn multiple and efficiency metrics.",
            type: "pie",
            data: {
                labels: ["Series A", "Series B", "Grants", "Angel Investment"],
                datasets: [{
                    data: [2000000, 5000000, 500000, 1000000],
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
                }]
            }
        },
        {
            id: 6,
            section: "Funding & Team",
            title: "Team Growth",
            description: "Employee headcount by department, hiring velocity, and retention rates. Track team expansion and department distribution.",
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                    {
                        label: "Engineering",
                        data: [20, 22, 25, 28, 30, 35],
                        borderColor: "#FF6384"
                    },
                    {
                        label: "Sales",
                        data: [15, 17, 18, 20, 22, 25],
                        borderColor: "#36A2EB"
                    }
                ]
            }
        }
    ];

    // Chart options helper function
    const getChartOptions = (graph) => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: graph.title
            }
        }
    });

    // Render KPI Card helper function
    const renderKPICard = (title, data) => (
        <div className="investor_dashboard-kpi-card">
            <h4>{title}</h4>
            <div className="investor_dashboard-kpi-value">
                ${formatNumber(data.value)}
            </div>
            <div className="investor_dashboard-kpi-trend-indicator">
                <span className="investor_dashboard-trend-value">
                    {data.change}% from previous period
                </span>
            </div>
        </div>
    );

    // Add this state for edit mode
    const [editMode, setEditMode] = useState(false);
    const [editingData, setEditingData] = useState(null);

    // Add edit button and functionality to graph boxes
    const renderGraphBox = (graph) => (
        <div key={graph.id} className="investor_dashboard-graph-box">
            <div className="investor_dashboard-graph-header">
                <h3>{graph.title}</h3>
                <button 
                    className="investor_dashboard-edit-button"
                    onClick={() => handleEditGraph(graph)}
                >
                    <FaEdit /> Edit
                </button>
            </div>
            <div className="investor_dashboard-graph-container">
                {graph.type === "line" && (
                    <Line 
                        data={graph.data} 
                        options={getChartOptions(graph)}
                    />
                )}
                {graph.type === "bar" && (
                    <Bar 
                        data={graph.data} 
                        options={getChartOptions(graph)}
                    />
                )}
                {graph.type === "pie" && (
                    <Pie 
                        data={graph.data} 
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'top',
                                }
                            }
                        }}
                    />
                )}
            </div>
        </div>
    );

    // Add edit modal
    const EditDataModal = ({ show, onHide, data, onSave }) => {
        const [editedData, setEditedData] = useState(data);

        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Graph Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {data?.datasets?.[0]?.data.map((value, index) => (
                            <Form.Group key={index}>
                                <Form.Label>{data.labels[index]}</Form.Label>
                                <Form.Control 
                                    type="number"
                                    value={editedData.datasets[0].data[index]}
                                    onChange={(e) => {
                                        const newData = {...editedData};
                                        newData.datasets[0].data[index] = Number(e.target.value);
                                        setEditedData(newData);
                                    }}
                                />
                            </Form.Group>
                        ))}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Cancel</Button>
                    <Button variant="primary" onClick={() => onSave(editedData)}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        );
    };

    // Add these functions to handle edit functionality
    const handleEditGraph = (graph) => {
        setEditingData(graph);
        setEditMode(true);
    };

    const handleSaveEdit = (newData) => {
        // Update the graph data in your state/backend
        const updatedGraphs = graphOptions.map(graph => 
            graph.id === editingData.id ? {...graph, data: newData} : graph
        );
        // Update your state/backend with the new data
        setEditMode(false);
        setEditingData(null);
    };

    return (
        <div className="investor_dashboard-container">
            <div className="investor_dashboard-header">
                <h2>Investment Analytics Dashboard</h2>
                <div className="investor_dashboard-time-filter">
                    <select 
                        value={timeFilter} 
                        onChange={(e) => setTimeFilter(e.target.value)}
                    >
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>
            </div>

            {/* KPI Cards Section */}
            <section className="investor_dashboard-kpi-overview">
                <h3>Key Performance Indicators</h3>
                <div className="investor_dashboard-kpi-grid">
                    {renderKPICard("Cash Balance", getCurrentPeriodData('cashBalance'))}
                    {renderKPICard("Gross Burn", getCurrentPeriodData('grossBurn'))}
                    {renderKPICard("EBITDA", getCurrentPeriodData('ebitda'))}
                    {renderKPICard("Revenue", getCurrentPeriodData('revenue'))}
                </div>
            </section>

            {/* Graphs Grid */}
            <div className="investor_dashboard-graphs-container">
                {graphOptions.map(graph => renderGraphBox(graph))}
            </div>

            <EditDataModal 
                show={editMode}
                onHide={() => setEditMode(false)}
                data={editingData?.data}
                onSave={handleSaveEdit}
            />
        </div>
    );
};

export default InvestorDashboard;
