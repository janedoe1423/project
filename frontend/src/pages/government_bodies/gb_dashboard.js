import React from 'react';
import { 
    BarChart, Bar, LineChart, Line, PieChart, Pie, 
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
    FaUsers, FaChartLine, FaFileContract, FaBullhorn, 
    FaCheckCircle, FaExclamationTriangle, FaHandshake,
    FaMoneyBillWave, FaClipboardList, FaStar
} from 'react-icons/fa';
import { MdPolicy } from 'react-icons/md';
import './gb_dashboard.css';

// Sample data for charts
const sectoralGrowthData = [
    { sector: 'Technology', growth: 65, funding: 85 },
    { sector: 'Healthcare', growth: 45, funding: 55 },
    { sector: 'Fintech', growth: 55, funding: 65 },
    { sector: 'EdTech', growth: 35, funding: 45 },
    { sector: 'AgriTech', growth: 40, funding: 35 }
];

const policyImpactData = [
    { month: 'Jan', registrations: 20, success: 15 },
    { month: 'Feb', registrations: 25, success: 18 },
    { month: 'Mar', registrations: 35, success: 28 },
    { month: 'Apr', registrations: 45, success: 35 },
    { month: 'May', registrations: 40, success: 32 }
];

const Dashboard = () => {
    return (
        <div className="gb_dashboard-container">
            <h1 className="gb_dashboard-title">Government Dashboard</h1>
            
            {/* Real-Time Ecosystem Metrics */}
            <div className="gb_dashboard-metrics-grid">
                <div className="gb_metric-card">
                    <FaUsers className="gb_card-icon" />
                    <div className="gb_card-content">
                        <h3>Total Startups</h3>
                        <p className="gb_metric-number">2,547</p>
                        <span className="gb_metric-trend positive">↑ 12.5%</span>
                    </div>
                </div>

                <div className="gb_metric-card">
                    <FaHandshake className="gb_card-icon" />
                    <div className="gb_card-content">
                        <h3>Active Researchers</h3>
                        <p className="gb_metric-number">1,238</p>
                        <span className="gb_metric-trend positive">↑ 8.3%</span>
                    </div>
                </div>

                <div className="gb_metric-card">
                    <FaMoneyBillWave className="gb_card-icon" />
                    <div className="gb_card-content">
                        <h3>Total Investors</h3>
                        <p className="gb_metric-number">847</p>
                        <span className="gb_metric-trend positive">↑ 15.7%</span>
                    </div>
                </div>

                <div className="gb_metric-card">
                    <FaClipboardList className="gb_card-icon" />
                    <div className="gb_card-content">
                        <h3>Collaborations</h3>
                        <p className="gb_metric-number">324</p>
                        <span className="gb_metric-trend positive">↑ 10.2%</span>
                    </div>
                </div>
            </div>

            {/* Funding Overview & Policy Impact */}
            <div className="gb_dashboard-charts-grid">
                <div className="gb_chart-card">
                    <h3>Funding Overview</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={sectoralGrowthData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="sector" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="funding" fill="#2979ff" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="gb_chart-card">
                    <h3>Policy Impact</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={policyImpactData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="registrations" stroke="#2979ff" />
                            <Line type="monotone" dataKey="success" stroke="#00c853" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Active Programs & Pending Tasks */}
            <div className="gb_dashboard-programs-grid">
                <div className="gb_programs-card">
                    <h3>Active Programs</h3>
                    <div className="gb_programs-list">
                        <div className="gb_program-item">
                            <div className="gb_program-icon">
                                <FaBullhorn />
                            </div>
                            <div className="gb_program-content">
                                <h4>Startup India Initiative</h4>
                                <p>1200+ Startups Enrolled</p>
                                <div className="gb_progress-bar">
                                    <div className="gb_progress" style={{width: '75%'}}></div>
                                </div>
                            </div>
                        </div>
                        {/* Add more program items */}
                    </div>
                </div>

                <div className="gb_tasks-card">
                    <h3>Pending Tasks</h3>
                    <div className="gb_tasks-list">
                        <div className="gb_task-item">
                            <FaExclamationTriangle className="gb_task-icon" />
                            <div className="gb_task-content">
                                <h4>Policy Review</h4>
                                <p>Due in 3 days</p>
                            </div>
                        </div>
                        {/* Add more task items */}
                    </div>
                </div>
            </div>

            {/* User Feedback Summary */}
            <div className="gb_feedback-section">
                <h3>User Feedback Summary</h3>
                <div className="gb_feedback-grid">
                    <div className="gb_feedback-card">
                        <div className="gb_feedback-header">
                            <FaStar className="gb_feedback-icon" />
                            <h4>Startup Satisfaction</h4>
                        </div>
                        <p className="gb_feedback-rating">4.5/5</p>
                        <p className="gb_feedback-text">Based on 1,200 responses</p>
                    </div>
                    {/* Add more feedback cards */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;