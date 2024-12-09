// Import necessary libraries
import React from 'react';
import { FaPlus, FaFileAlt, FaChartLine } from 'react-icons/fa'; // Import icons for quick actions
import './ipr_dashboard.css'; // Import your CSS

const IPRProfessionalDashboard = () => {
    // Sample data for demonstration
    const performanceMetrics = [
        { label: 'Filing Success Rate', value: '85%' },
        { label: 'Pending Cases', value: '15%' },
    ];

    const caseUpdates = [
        "Patent #12345 filed successfully.",
        "Trademark application #67890 is under review.",
        "Copyright renewal for #54321 completed.",
    ];

    const clientRequests = [
        "Startup A needs help with trademark filing.",
        "Startup B is looking for copyright advice.",
    ];

    const revenueInsights = {
        totalRevenue: "$300,000",
        revenueFromFilings: "$150,000",
    };

    const trendsAnalysis = [
        "Increase in trademark filings in tech sector.",
        "Rise in copyright registrations for digital content.",
    ];

    const educationalLinks = [
        { title: "IPR Policies", url: "/ipr-policies" },
        { title: "Filing Guides", url: "/filing-guides" },
    ];

    return (
        <div id="ipr-professional-dashboard">
            <h2>IPR Professional Dashboard</h2>

            {/* Performance Metrics */}
            <div className="performance-metrics">
                <h3>Performance Metrics</h3>
                <ul>
                    {performanceMetrics.map((metric, index) => (
                        <li key={index}>
                            {metric.label}: {metric.value}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Case Updates */}
            <div className="case-updates">
                <h3>Case Updates</h3>
                <ul>
                    {caseUpdates.map((update, index) => (
                        <li key={index}>{update}</li>
                    ))}
                </ul>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
                <h3>Quick Actions</h3>
                <button><FaPlus /> Add New Case</button>
                <button><FaFileAlt /> File Application</button>
            </div>

            {/* Client Requests */}
            <div className="client-requests">
                <h3>Client Requests</h3>
                <ul>
                    {clientRequests.map((request, index) => (
                        <li key={index}>{request}</li>
                    ))}
                </ul>
            </div>

            {/* Revenue Insights */}
            <div className="revenue-insights">
                <h3>Revenue Insights</h3>
                <p>Total Revenue: {revenueInsights.totalRevenue}</p>
                <p>Revenue from Filings: {revenueInsights.revenueFromFilings}</p>
            </div>

            {/* Trends Analysis */}
            <div className="trends-analysis">
                <h3>Trends Analysis</h3>
                <ul>
                    {trendsAnalysis.map((trend, index) => (
                        <li key={index}>{trend}</li>
                    ))}
                </ul>
            </div>

            {/* Educational Links */}
            <div className="educational-links">
                <h3>Educational Links</h3>
                <ul>
                    {educationalLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Export the component
export default IPRProfessionalDashboard;
