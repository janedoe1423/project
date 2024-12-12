import React, { useState } from 'react';
import { 
    FaClipboardCheck, FaHistory, FaChartPie, FaMoneyBillWave,
    FaChartLine, FaBell, FaClipboardList, FaBook,
    FaBullhorn, FaComments, FaSearch, FaInfoCircle,
    FaExclamationCircle, FaCheckCircle, FaTimesCircle,
    FaEdit, FaTrash, FaEye, FaDownload, FaFilter
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './gb_policy.css';

const PolicyImplementation = () => {
    const [selectedPolicy, setSelectedPolicy] = useState(null);
    const [selectedInitiative, setSelectedInitiative] = useState(null);
    const [activePolicies, setActivePolicies] = useState([
        {
            id: 1,
            name: "Startup India Seed Fund",
            description: "Financial assistance for early-stage startups",
            status: "active",
            startDate: "2024-01-15",
            endDate: "2025-01-14",
            eligibility: "Early-stage technology startups",
            category: "Financial",
            progress: 85
        },
        {
            id: 2,
            name: "Research Innovation Program",
            description: "Support for academic research projects",
            status: "under_review",
            startDate: "2024-02-01",
            endDate: "2024-12-31",
            eligibility: "Research institutions",
            category: "Research",
            progress: 45
        },
        {
            id: 3,
            name: "IPR Fast Track Scheme",
            description: "Expedited patent filing for startups",
            status: "active",
            startDate: "2024-03-01",
            endDate: "2025-02-28",
            eligibility: "Registered startups",
            category: "IPR",
            progress: 60
        }
    ]);

    const [filterStatus, setFilterStatus] = useState('all');

    const policyMetrics = {
        activeCount: 25,
        underReview: 8,
        totalBeneficiaries: 1250,
        totalFunding: "₹450Cr"
    };

    const policyInitiatives = [
        {
            icon: <FaClipboardCheck />,
            title: "Active Policies Dashboard",
            description: "Current active policies with status tracking",
            stats: "25 Active • 8 Under Review",
            status: "active"
        },
        {
            icon: <FaHistory />,
            title: "Policy Updates & Amendments",
            description: "Recent policy changes and updates",
            stats: "Last updated: 2 days ago",
            status: "active"
        },
        {
            icon: <FaChartPie />,
            title: "Policy Outreach Metrics",
            description: "Analytics on policy awareness and utilization",
            stats: "85% Awareness Rate",
            status: "active"
        },
        {
            icon: <FaMoneyBillWave />,
            title: "Resource Allocation",
            description: "Government resources distribution tracking",
            stats: "₹450Cr Allocated",
            status: "active"
        },
        {
            icon: <FaChartLine />,
            title: "Policy Impact Tracking",
            description: "Measure policy effectiveness and impact",
            stats: "1200+ Startups Assisted",
            status: "active"
        },
        {
            icon: <FaClipboardList />,
            title: "Compliance Checklists",
            description: "Implementation guidelines and compliance",
            stats: "15 Active Checklists",
            status: "active"
        },
        {
            icon: <FaBell />,
            title: "Policy Review Alerts",
            description: "Notifications for policy reviews and renewals",
            stats: "3 Pending Reviews",
            status: "warning"
        },
        {
            icon: <FaBook />,
            title: "Policy Action Log",
            description: "Track actions taken under policies",
            stats: "250+ Actions Logged",
            status: "active"
        },
        {
            icon: <FaBullhorn />,
            title: "Public Awareness Campaigns",
            description: "Track policy promotion and outreach",
            stats: "12 Active Campaigns",
            status: "active"
        },
        {
            icon: <FaComments />,
            title: "Stakeholder Feedback",
            description: "Collect and analyze policy feedback",
            stats: "4.5/5 Avg. Rating",
            status: "active"
        }
    ];

    // Update initiativeDetails structure
    const initiativeDetails = {
        "Active Policies Dashboard": {
            metrics: [
                { label: "Active Policies", value: "25" },
                { label: "Under Review", value: "8" },
                { label: "Recently Updated", value: "12" }
            ],
            actions: [
                { label: "View All Policies", handler: () => console.log("View policies") },
                { label: "Download Report", handler: () => console.log("Download report") }
            ],
            recentUpdates: [
                "Policy A updated on 12/03/2024",
                "Policy B added on 10/03/2024",
                "Policy C archived on 08/03/2024"
            ],
            content: (
                <div className="gb_policy-dashboard">
                    <div className="gb_policy-controls">
                        <div className="gb_search-filter">
                            <input 
                                type="text" 
                                placeholder="Search policies..."
                                className="gb_search-input"
                            />
                            <select 
                                className="gb_filter-select"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="under_review">Under Review</option>
                                <option value="expired">Expired</option>
                            </select>
                        </div>
                        <button className="gb_add-policy-btn">
                            + Add New Policy
                        </button>
                    </div>

                    <div className="gb_policies-grid">
                        {activePolicies.map(policy => (
                            <motion.div 
                                key={policy.id}
                                className={`gb_policy-card ${policy.status}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="gb_policy-header">
                                    <h3>{policy.name}</h3>
                                    <span className={`gb_status-badge ${policy.status}`}>
                                        {policy.status.replace('_', ' ')}
                                    </span>
                                </div>
                                
                                <p className="gb_policy-desc">{policy.description}</p>
                                
                                <div className="gb_policy-progress">
                                    <div className="gb_progress-bar">
                                        <div 
                                            className="gb_progress-fill"
                                            style={{ width: `${policy.progress}%` }}
                                        />
                                    </div>
                                    <span>{policy.progress}% Complete</span>
                                </div>

                                <div className="gb_policy-details">
                                    <div className="gb_detail-item">
                                        <span className="gb_label">Start:</span>
                                        <span>{policy.startDate}</span>
                                    </div>
                                    <div className="gb_detail-item">
                                        <span className="gb_label">End:</span>
                                        <span>{policy.endDate}</span>
                                    </div>
                                </div>

                                <div className="gb_policy-actions">
                                    <button className="gb_action-icon" title="View">
                                        <FaEye />
                                    </button>
                                    <button className="gb_action-icon" title="Edit">
                                        <FaEdit />
                                    </button>
                                    <button className="gb_action-icon" title="Download">
                                        <FaDownload />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )
        }
        // ... other initiatives ...
    };

    // Updated Modal component with null checks
    const InitiativeModal = ({ initiative, onClose }) => {
        if (!initiative || !initiativeDetails[initiative.title]) {
            return null;
        }

        const details = initiativeDetails[initiative.title];

        return (
            <motion.div 
                className="gb_modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div 
                    className="gb_modal-content"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="gb_modal-header">
                        <h2>{initiative.title}</h2>
                        <button className="gb_modal-close" onClick={onClose}>×</button>
                    </div>
                    
                    <div className="gb_modal-body">
                        {details.metrics && (
                            <div className="gb_modal-metrics">
                                {details.metrics.map((metric, index) => (
                                    <div key={index} className="gb_modal-metric">
                                        <span className="gb_metric-label">{metric.label}</span>
                                        <span className="gb_metric-value">{metric.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {details.recentUpdates && (
                            <div className="gb_modal-updates">
                                <h3>Recent Updates</h3>
                                <ul>
                                    {details.recentUpdates.map((update, index) => (
                                        <li key={index}>{update}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {details.content && (
                            <div className="gb_modal-custom-content">
                                {details.content}
                            </div>
                        )}

                        {details.actions && (
                            <div className="gb_modal-actions">
                                {details.actions.map((action, index) => (
                                    <button 
                                        key={index}
                                        className="gb_action-button"
                                        onClick={action.handler}
                                    >
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div className="gb_policy-container">
            <motion.h1 
                className="gb_policy-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Policy Implementation Dashboard
            </motion.h1>

            {/* Key Metrics */}
            <div className="gb_policy-stats-grid">
                <motion.div 
                    className="gb_stat-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <FaClipboardCheck className="gb_stat-icon" />
                    <h3>Active Policies</h3>
                    <p className="gb_stat-number">{policyMetrics.activeCount}</p>
                    <span className="gb_stat-label">Currently Active</span>
                </motion.div>

                <motion.div 
                    className="gb_stat-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <FaExclamationCircle className="gb_stat-icon warning" />
                    <h3>Under Review</h3>
                    <p className="gb_stat-number">{policyMetrics.underReview}</p>
                    <span className="gb_stat-label">Pending Review</span>
                </motion.div>

                <motion.div 
                    className="gb_stat-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <FaChartLine className="gb_stat-icon success" />
                    <h3>Total Beneficiaries</h3>
                    <p className="gb_stat-number">{policyMetrics.totalBeneficiaries}</p>
                    <span className="gb_stat-label">Startups & Researchers</span>
                </motion.div>

                <motion.div 
                    className="gb_stat-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <FaMoneyBillWave className="gb_stat-icon" />
                    <h3>Total Funding</h3>
                    <p className="gb_stat-number">{policyMetrics.totalFunding}</p>
                    <span className="gb_stat-label">Allocated Resources</span>
                </motion.div>
            </div>

            {/* Policy Initiatives Grid */}
            <h2 className="gb_section-title">Policy Implementation Initiatives</h2>
            <div className="gb_quick-wins-grid">
                {policyInitiatives.map((initiative, index) => (
                    <motion.div 
                        key={index}
                        className={`gb_quick-win-card ${initiative.status}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        onClick={() => setSelectedInitiative(initiative)}
                    >
                        <div className="gb_quick-win-icon">{initiative.icon}</div>
                        <h3>{initiative.title}</h3>
                        <p>{initiative.description}</p>
                        <div className="gb_quick-win-stats">{initiative.stats}</div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedInitiative && (
                    <InitiativeModal 
                        initiative={selectedInitiative}
                        onClose={() => setSelectedInitiative(null)}
                    />
                )}
            </AnimatePresence>

            {/* Action Center */}
            <div className="gb_action-center">
                <h2 className="gb_section-title">Quick Actions</h2>
                <div className="gb_action-grid">
                    <button className="gb_action-button">
                        <FaClipboardList /> Review Pending Policies
                    </button>
                    <button className="gb_action-button">
                        <FaBell /> Check Notifications
                    </button>
                    <button className="gb_action-button">
                        <FaChartLine /> View Impact Reports
                    </button>
                    <button className="gb_action-button">
                        <FaComments /> View Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PolicyImplementation;