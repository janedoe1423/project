import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale
} from 'chart.js';
import { 
    FaUsers, 
    FaChartLine, 
    FaMapMarkerAlt, 
    FaMoneyBillWave,
    FaDownload,
    FaFilter,
    FaFilePdf,
    FaFileExcel,
    FaSearch,
    FaEye,
    FaEdit,
    FaTrash
} from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './admin_user_management.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale
);

// Mock data for users
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Startup', registrationStatus: 'Active', lastLogin: '2023-10-01', activityStatus: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Investor', registrationStatus: 'Pending', lastLogin: '2023-09-28', activityStatus: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Mentor', registrationStatus: 'Inactive', lastLogin: '2023-09-15', activityStatus: 'Inactive' },
];

const pendingRegistrations = [
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', documentsSubmitted: true },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', documentsSubmitted: false },
];

const AdminManagement = () => {
    // States
    const [activeSection, setActiveSection] = useState('overview');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [registrations, setRegistrations] = useState(pendingRegistrations);
    const [showDownloadMenu, setShowDownloadMenu] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);

    // Chart options (your existing chart options here)
    const reportsChartOptions = {
        // ... your existing reportsChartOptions
    };

    const reportsPieChartOptions = {
        // ... your existing reportsPieChartOptions
    };

    // User Management Functions
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        filterUsers(e.target.value);
    };

    const filterUsers = (search) => {
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.role.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    const handleApprove = (id) => {
        console.log(`Email sent to user ${id} for approval.`);
        setRegistrations(registrations.filter(user => user.id !== id));
    };

    const handleReject = (id, reason) => {
        console.log(`Email sent to user ${id} for rejection. Reason: ${reason}`);
        setRegistrations(registrations.filter(user => user.id !== id));
    };

    // PDF and CSV Export Functions
    const handleDownloadPDF = async () => {
        // ... your existing PDF download logic
    };

    const downloadCSV = () => {
        // ... your existing CSV download logic
    };

    // Render Functions
    const renderUserManagement = () => {
        const pieData = {
            labels: ['Startup', 'Investor', 'Mentor'],
            datasets: [{
                data: [
                    filteredUsers.filter(user => user.role === 'Startup').length,
                    filteredUsers.filter(user => user.role === 'Investor').length,
                    filteredUsers.filter(user => user.role === 'Mentor').length
                ],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            }],
        };

        return (
            <div className="ad_mn-section-content">
                <div className="ad_mn-controls">
                    <div className="ad_mn-search">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search by name, email, or role"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <button className="ad_mn-export-btn" onClick={downloadCSV}>
                        <FaFileExcel /> Export CSV
                    </button>
                </div>

                <div className="ad_mn-chart-container">
                    <h2>User Distribution</h2>
                    <div className="ad_mn-chart">
                        <Pie data={pieData} options={reportsPieChartOptions} />
                    </div>
                </div>

                <div className="ad_mn-user-tables">
                    {['Startup', 'Investor', 'Mentor'].map(role => (
                        <div key={role} className="ad_mn-user-category">
                            <h3>{role}s</h3>
                            <div className="ad_mn-table-container">
                                <table className="ad_mn-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Last Login</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredUsers
                                            .filter(user => user.role === role)
                                            .map(user => (
                                                <tr key={user.id}>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        <span className={`status ${user.registrationStatus.toLowerCase()}`}>
                                                            {user.registrationStatus}
                                                        </span>
                                                    </td>
                                                    <td>{user.lastLogin}</td>
                                                    <td className="actions">
                                                        <button className="action-btn view">
                                                            <FaEye />
                                                        </button>
                                                        <button className="action-btn edit">
                                                            <FaEdit />
                                                        </button>
                                                        <button className="action-btn delete">
                                                            <FaTrash />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="ad_mn-pending-registrations">
                    <h2>Pending Registrations</h2>
                    <div className="ad_mn-pending-list">
                        {registrations.map(user => (
                            <div key={user.id} className="ad_mn-pending-item">
                                <div className="ad_mn-pending-info">
                                    <h4>{user.name}</h4>
                                    <p>{user.email}</p>
                                    <span className={`document-status ${user.documentsSubmitted ? 'submitted' : 'pending'}`}>
                                        Documents: {user.documentsSubmitted ? 'Submitted' : 'Pending'}
                                    </span>
                                </div>
                                <div className="ad_mn-pending-actions">
                                    <button 
                                        className="approve-btn"
                                        onClick={() => handleApprove(user.id)}
                                    >
                                        Approve
                                    </button>
                                    <button 
                                        className="reject-btn"
                                        onClick={() => {
                                            const reason = prompt('Enter reason for rejection:');
                                            if (reason) handleReject(user.id, reason);
                                        }}
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    // Your existing render functions for other sections
    const renderMetrics = () => {
        // ... your existing metrics render logic
    };

    const renderReports = () => {
        // ... your existing reports render logic
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'overview':
                return renderUserManagement();
            case 'metrics':
                return renderMetrics();
            case 'reports':
                return renderReports();
            default:
                return null;
        }
    };

    return (
        <div className="ad_mn-container">
            {isDownloading && (
                <div className="ad_mn-loading-overlay">
                    <div className="ad_mn-loading-spinner"></div>
                    <p>Generating PDF... Please wait</p>
                </div>
            )}
            
            <div className="ad_mn-menu-bar">
                <button onClick={() => setActiveSection('overview')}>
                    <FaUsers /> User Management
                </button>
                <button onClick={() => setActiveSection('metrics')}>
                    <FaChartLine /> Metrics
                </button>
                <button onClick={() => setActiveSection('reports')}>
                    <FaMoneyBillWave /> Reports
                </button>
            </div>

            {renderSection()}
        </div>
    );
};

export default AdminManagement;
