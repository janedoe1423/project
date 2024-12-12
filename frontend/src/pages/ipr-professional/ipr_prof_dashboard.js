import React, { useState } from 'react';
import { 
    FaPlus, FaFileAlt, FaChartLine, FaUserTie, 
    FaBell, FaCalendarAlt, FaCheckCircle, FaClock,
    FaArrowUp, FaArrowDown, FaBook, FaGraduationCap, FaFilter, FaEdit, FaTimesCircle
} from 'react-icons/fa';
import { 
    Card, Grid, Button, Typography, Box, 
    LinearProgress, Avatar, Chip, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, TextField
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import './ipr_dashboard.css';
import { useIPR } from './IPRContent';

const IPRProfessionalDashboard = () => {
    const { allIPRs, updateIPRStatus, updateIPRStage, updateApplicationStatus } = useIPR();
    const [rejectDialog, setRejectDialog] = useState({
        open: false,
        stageIndex: null,
        iprId: null,
        message: ''
    });
    
    const performanceMetrics = [
        { 
            label: 'Filing Success Rate', 
            value: Math.round((allIPRs.granted.length / 
                (allIPRs.granted.length + allIPRs.rejected.length)) * 100) || 0,
            trend: 'up',
            change: '+5%',
            icon: <FaCheckCircle className="metric-icon success" />
        },
        { 
            label: 'Pending Cases', 
            value: allIPRs.pending.length,
            trend: 'down',
            change: '-3%',
            icon: <FaClock className="metric-icon warning" />
        }
    ];

    const recentCases = [...allIPRs.pending, ...allIPRs.granted]
        .sort((a, b) => new Date(b.filingDate) - new Date(a.filingDate))
        .slice(0, 3)
        .map(ipr => ({
            id: ipr.applicationNumber,
            type: ipr.type,
            title: ipr.title,
            client: ipr.inventors,
            status: ipr.status,
            date: ipr.filingDate
        }));

    const upcomingTasks = [
        {
            title: 'Patent Filing Deadline',
            client: 'InnovateAI',
            date: '2024-02-20',
            priority: 'high'
        },
        {
            title: 'Client Consultation',
            client: 'TechStart Ltd',
            date: '2024-02-18',
            priority: 'medium'
        }
    ];

    const handleStatusUpdate = (iprId, newStatus) => {
        updateIPRStatus(iprId, newStatus, {
            lastUpdatedBy: 'Dr. Sarah Johnson',
            updateDate: new Date().toISOString()
        });
    };

    const handleStageComplete = (iprId, stageIndex) => {
        updateIPRStage(iprId, stageIndex);
    };

    const handleStageReject = () => {
        if (rejectDialog.iprId && rejectDialog.stageIndex !== null) {
            updateIPRStage(rejectDialog.iprId, rejectDialog.stageIndex, {
                rejected: true,
                rejectionMessage: rejectDialog.message,
                rejectedBy: 'Dr. Sarah Johnson',
                rejectedDate: new Date().toISOString()
            });

            updateIPRStatus(rejectDialog.iprId, 'rejected', {
                lastUpdatedBy: 'Dr. Sarah Johnson',
                updateDate: new Date().toISOString(),
                rejectionStage: rejectDialog.stageIndex,
                rejectionReason: rejectDialog.message
            });

            setRejectDialog({ open: false, stageIndex: null, iprId: null, message: '' });
        }
    };

    const renderStageProgress = (ipr) => (
        <Box className="stage-progress-container">
            {ipr.progressStages.map((stage, index) => (
                <Box 
                    key={index}
                    className={`stage-item ${stage.completed ? 'completed' : ''} 
                              ${stage.current ? 'current' : ''}
                              ${stage.rejected ? 'rejected' : ''}
                              ${ipr.status === 'rejected' ? 'ipr-rejected' : ''}`}
                >
                    <div className="stage-marker">
                        {stage.completed ? (
                            <FaCheckCircle className="stage-icon completed" />
                        ) : stage.rejected ? (
                            <FaTimesCircle className="stage-icon rejected" />
                        ) : (
                            <span className="stage-number">{index + 1}</span>
                        )}
                    </div>
                    <div className="stage-content">
                        <Typography variant="subtitle2" className="stage-title">
                            {stage.name}
                        </Typography>
                        {stage.current && (
                            <Typography variant="caption" color="textSecondary">
                                Started: {new Date(ipr.currentStage.startDate).toLocaleDateString()}
                            </Typography>
                        )}
                        {stage.completed && (
                            <Typography variant="caption" className="completed-date">
                                Completed: {new Date(stage.completedDate).toLocaleDateString()}
                            </Typography>
                        )}
                        {stage.rejected && (
                            <Box className="rejection-info">
                                <Typography variant="caption" color="error">
                                    Rejected: {new Date(stage.rejectedDate).toLocaleDateString()}
                                </Typography>
                                <Typography variant="caption" className="rejection-message">
                                    Reason: {stage.rejectionMessage}
                                </Typography>
                            </Box>
                        )}
                    </div>
                    {stage.current && ipr.status !== 'rejected' && (
                        <Box className="stage-actions">
                            <Button
                                size="small"
                                variant="outlined"
                                color="success"
                                onClick={() => handleStageComplete(ipr.id, index)}
                                className="complete-stage-btn"
                            >
                                Complete Stage
                            </Button>
                            <Button
                                size="small"
                                variant="outlined"
                                color="error"
                                onClick={() => setRejectDialog({
                                    open: true,
                                    stageIndex: index,
                                    iprId: ipr.id,
                                    message: ''
                                })}
                                className="reject-stage-btn"
                            >
                                Reject Stage
                            </Button>
                        </Box>
                    )}
                </Box>
            ))}
            {ipr.status === 'rejected' && (
                <Box className="ipr-rejection-notice">
                    <Typography variant="body2" color="error">
                        IPR Rejected at Stage {ipr.rejectionStage + 1}: {ipr.progressStages[ipr.rejectionStage].name}
                    </Typography>
                    <Typography variant="caption" className="rejection-message">
                        Reason: {ipr.rejectionReason}
                    </Typography>
                </Box>
            )}
        </Box>
    );

    const renderApplicationStatus = (ipr) => (
        <Box className="application-status-section">
            <Typography variant="h6" className="section-title">
                Application Status Details
            </Typography>
            
            {/* Received Status */}
            <Box className="status-block received">
                <Typography variant="subtitle1">Application Received</Typography>
                <Box className="status-details">
                    <Typography variant="body2">
                        Date: {new Date(ipr.applicationStatus.received.date).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2">
                        Acknowledgment: {ipr.applicationStatus.received.acknowledgmentNumber}
                    </Typography>
                </Box>
            </Box>

            {/* Review Status */}
            <Box className="status-block review">
                <Typography variant="subtitle1">Under Review</Typography>
                <Box className="status-details">
                    {ipr.applicationStatus.review.initiationDate ? (
                        <>
                            <Typography variant="body2">
                                Started: {new Date(ipr.applicationStatus.review.initiationDate).toLocaleDateString()}
                            </Typography>
                            <Typography variant="body2">
                                Current Stage: {ipr.applicationStatus.review.currentStage}
                            </Typography>
                            <Typography variant="body2">
                                Reviewing Officer: {ipr.applicationStatus.review.reviewingOfficer}
                            </Typography>
                        </>
                    ) : (
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => updateApplicationStatus(ipr.id, 'review', {
                                initiationDate: new Date().toISOString(),
                                currentStage: 'Initial Screening',
                                reviewingOfficer: 'Dr. Sarah Johnson'
                            })}
                        >
                            Start Review
                        </Button>
                    )}
                </Box>
            </Box>

            {/* Shortlisted Status */}
            <Box className="status-block shortlisted">
                <Typography variant="subtitle1">Shortlisting</Typography>
                <Box className="status-details">
                    {ipr.applicationStatus.shortlisted.date ? (
                        <>
                            <Typography variant="body2">
                                Date: {new Date(ipr.applicationStatus.shortlisted.date).toLocaleDateString()}
                            </Typography>
                            <Typography variant="body2">
                                Reason: {ipr.applicationStatus.shortlisted.reason}
                            </Typography>
                        </>
                    ) : (
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => updateApplicationStatus(ipr.id, 'shortlisted', {
                                date: new Date().toISOString(),
                                reason: 'Meets all technical requirements'
                            })}
                        >
                            Mark as Shortlisted
                        </Button>
                    )}
                </Box>
            </Box>

            {/* Sanctioned Status */}
            <Box className="status-block sanctioned">
                <Typography variant="subtitle1">Sanction Details</Typography>
                <Box className="status-details">
                    {ipr.applicationStatus.sanctioned.date ? (
                        <>
                            <Typography variant="body2">
                                Date: {new Date(ipr.applicationStatus.sanctioned.date).toLocaleDateString()}
                            </Typography>
                            <Typography variant="body2">
                                Order Number: {ipr.applicationStatus.sanctioned.orderNumber}
                            </Typography>
                            <Typography variant="body2">
                                Amount: ${ipr.applicationStatus.sanctioned.amount}
                            </Typography>
                        </>
                    ) : (
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => updateApplicationStatus(ipr.id, 'sanctioned', {
                                date: new Date().toISOString(),
                                orderNumber: `SAN${Math.floor(Math.random() * 10000)}`,
                                amount: 5000
                            })}
                        >
                            Sanction Application
                        </Button>
                    )}
                </Box>
            </Box>

            {/* Disbursed Status */}
            <Box className="status-block disbursed">
                <Typography variant="subtitle1">Disbursement Details</Typography>
                <Box className="status-details">
                    {ipr.applicationStatus.disbursed.date ? (
                        <>
                            <Typography variant="body2">
                                Date: {new Date(ipr.applicationStatus.disbursed.date).toLocaleDateString()}
                            </Typography>
                            <Typography variant="body2">
                                Mode: {ipr.applicationStatus.disbursed.mode}
                            </Typography>
                            <Typography variant="body2">
                                Reference: {ipr.applicationStatus.disbursed.referenceNumber}
                            </Typography>
                        </>
                    ) : (
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => updateApplicationStatus(ipr.id, 'disbursed', {
                                date: new Date().toISOString(),
                                mode: 'Direct Bank Transfer',
                                referenceNumber: `TXN${Math.floor(Math.random() * 10000)}`
                            })}
                        >
                            Mark as Disbursed
                        </Button>
                    )}
                </Box>
            </Box>

            {/* Rejected Status */}
            {ipr.status === 'rejected' && (
                <Box className="status-block rejected">
                    <Typography variant="subtitle1">Rejection Details</Typography>
                    <Box className="status-details">
                        <Typography variant="body2">
                            Date: {new Date(ipr.applicationStatus.rejected.date).toLocaleDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Reason: {ipr.applicationStatus.rejected.reason}
                        </Typography>
                        <Typography variant="body2">
                            Rejected By: {ipr.applicationStatus.rejected.rejectedBy}
                        </Typography>
                    </Box>
                </Box>
            )}
        </Box>
    );

    return (
        <Box className="ipr-professional-dashboard">
            {/* Header Section */}
            <Box className="dashboard-header">
                <Box className="header-left">
                    <Typography variant="h4">IPR Professional Dashboard</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Welcome back, Dr. Sarah Johnson
                    </Typography>
                </Box>
                <Box className="header-actions">
                    <Button 
                        variant="contained" 
                        startIcon={<FaPlus />}
                        className="primary-button"
                    >
                        New Case
                    </Button>
                    <Button 
                        variant="outlined"
                        startIcon={<FaBell />}
                        className="notification-button"
                    >
                        Notifications
                    </Button>
                </Box>
            </Box>

            {/* Metrics Grid */}
            <Grid container spacing={3} className="metrics-grid">
                {performanceMetrics.map((metric, index) => (
                    <Grid item xs={12} md={6} lg={3} key={index}>
                        <Card className="metric-card">
                            <Box className="metric-content">
                                {metric.icon}
                                <Box className="metric-details">
                                    <Typography variant="h6">{metric.label}</Typography>
                                    <Typography variant="h4">{metric.value}%</Typography>
                                    <Chip 
                                        icon={metric.trend === 'up' ? <FaArrowUp /> : <FaArrowDown />}
                                        label={metric.change}
                                        className={`trend-chip ${metric.trend}`}
                                        size="small"
                                    />
                                </Box>
                            </Box>
                            <LinearProgress 
                                variant="determinate" 
                                value={metric.value}
                                className={`metric-progress ${metric.trend}`}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Main Content Grid */}
            <Grid container spacing={3} className="main-content">
                {/* Recent Cases with Process Tracking */}
                <Grid item xs={12}>
                    <Card className="cases-card">
                        <Box className="card-header">
                            <Typography variant="h6">Active Cases</Typography>
                            <Box className="header-actions">
                                <Button 
                                    variant="outlined"
                                    startIcon={<FaFilter />}
                                >
                                    Filter
                                </Button>
                                <Button 
                                    variant="contained"
                                    startIcon={<FaChartLine />}
                                >
                                    Analytics
                                </Button>
                            </Box>
                        </Box>
                        <Box className="cases-list">
                            {[...allIPRs.pending].map((ipr, index) => (
                                <Card key={index} className="case-item-card">
                                    <Box className="case-header">
                                        <Box className="case-title">
                                            <Typography variant="h6">
                                                {ipr.title}
                                            </Typography>
                                            <Chip 
                                                label={ipr.type}
                                                size="small"
                                                className="type-chip"
                                            />
                                        </Box>
                                        <Box className="case-meta">
                                            <Typography variant="caption">
                                                ID: {ipr.applicationNumber}
                                            </Typography>
                                            <Typography variant="caption">
                                                Filed: {ipr.filingDate}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    
                                    <Box className="case-progress">
                                        {renderStageProgress(ipr)}
                                    </Box>

                                    <Box className="case-footer">
                                        <Box className="case-inventors">
                                            <Typography variant="body2">
                                                Inventors: {ipr.inventors}
                                            </Typography>
                                        </Box>
                                        <Box className="case-actions">
                                            <Button 
                                                variant="outlined"
                                                size="small"
                                                startIcon={<FaEdit />}
                                            >
                                                Update
                                            </Button>
                                            <Select
                                                value={ipr.status}
                                                onChange={(e) => handleStatusUpdate(ipr.id, e.target.value)}
                                                size="small"
                                                className="status-select"
                                            >
                                                <MenuItem value="pending">Pending</MenuItem>
                                                <MenuItem value="granted">Granted</MenuItem>
                                                <MenuItem value="rejected">Rejected</MenuItem>
                                            </Select>
                                        </Box>
                                    </Box>
                                </Card>
                            ))}
                        </Box>
                    </Card>
                </Grid>

                {/* Upcoming Tasks */}
                <Grid item xs={12} lg={4}>
                    <Card className="tasks-card">
                        <Box className="card-header">
                            <Typography variant="h6">Upcoming Tasks</Typography>
                            <Button 
                                variant="text" 
                                endIcon={<FaCalendarAlt />}
                            >
                                Calendar
                            </Button>
                        </Box>
                        <Box className="tasks-list">
                            {upcomingTasks.map((task, index) => (
                                <Box key={index} className="task-item">
                                    <Box className="task-priority" data-priority={task.priority} />
                                    <Box className="task-info">
                                        <Typography variant="subtitle2">
                                            {task.title}
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            {task.client} • Due {task.date}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Card>
                </Grid>
            </Grid>

            {/* Rejection Dialog */}
            <Dialog 
                open={rejectDialog.open} 
                onClose={() => setRejectDialog({ ...rejectDialog, open: false })}
            >
                <DialogTitle>Reject Stage</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Rejection Reason"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        value={rejectDialog.message}
                        onChange={(e) => setRejectDialog({ ...rejectDialog, message: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setRejectDialog({ ...rejectDialog, open: false })}>
                        Cancel
                    </Button>
                    <Button onClick={handleStageReject} color="error">
                        Reject Stage
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default IPRProfessionalDashboard;
