import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {
    FaChartLine, FaUsers, FaClock, FaStar,
    FaDownload, FaTrophy, FaCheckCircle, FaChartBar,
    FaFileAlt, FaLightbulb, FaFileExport, FaSpinner
} from 'react-icons/fa';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
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
import './mentor_reports.css';


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

const MentorReports = () => {
    const [activeTab, setActiveTab] = useState('summary');
    const [dateRange, setDateRange] = useState('month');
    const [isExporting, setIsExporting] = useState(false);
    const reportRef = useRef(null);

    // Sample data for charts
    const sessionData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sessions Completed',
            data: [12, 19, 15, 17, 22, 24],
            borderColor: '#3b82f6',
            tension: 0.4
        }]
    };

    const impactData = {
        labels: ['Problem Solving', 'Technical Skills', 'Communication', 'Leadership'],
        datasets: [{
            label: 'Before Mentoring',
            data: [65, 59, 80, 81],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'After Mentoring',
            data: [85, 89, 90, 91],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }]
    };

    const timeAllocationData = {
        labels: ['1:1 Sessions', 'Group Sessions', 'Review Work', 'Preparation'],
        datasets: [{
            data: [40, 20, 25, 15],
            backgroundColor: [
                'rgba(59, 130, 246, 0.8)', // blue
                'rgba(16, 185, 129, 0.8)', // green
                'rgba(245, 158, 11, 0.8)', // yellow
                'rgba(239, 68, 68, 0.8)'   // red
            ],
            borderColor: [
                'rgba(59, 130, 246, 1)',
                'rgba(16, 185, 129, 1)',
                'rgba(245, 158, 11, 1)',
                'rgba(239, 68, 68, 1)'
            ],
            borderWidth: 2,
            hoverOffset: 15,
            hoverBorderWidth: 3
        }]
    };

    const timeAllocationOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    padding: 20,
                    font: {
                        size: 14
                    },
                    generateLabels: (chart) => {
                        const datasets = chart.data.datasets;
                        return chart.data.labels.map((label, index) => ({
                            text: `${label}: ${datasets[0].data[index]}%`,
                            fillStyle: datasets[0].backgroundColor[index],
                            strokeStyle: datasets[0].borderColor[index],
                            lineWidth: 1,
                            hidden: false,
                            index: index
                        }));
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const value = context.formattedValue || '';
                        return `${label}: ${value}%`;
                    }
                }
            }
        },
        layout: {
            padding: 20
        },
        animation: {
            animateScale: true,
            animateRotate: true,
            duration: 1000
        }
    };

    const exportReport = async (format) => {
        if (format === 'pdf') {
            setIsExporting(true);
            try {
                const content = reportRef.current;
                const canvas = await html2canvas(content, {
                    scale: 2,
                    logging: false,
                    useCORS: true,
                    backgroundColor: '#ffffff'
                });

                const imgWidth = 210; // A4 width in mm
                const pageHeight = 297; // A4 height in mm
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                let heightLeft = imgHeight;
                let position = 0;
                heightLeft -= pageHeight;

                const doc = new jsPDF('p', 'mm', 'a4');
                doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    doc.addPage();
                    doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }

                // Add metadata
                doc.setProperties({
                    title: 'Mentor Report',
                    subject: 'Mentor Performance Report',
                    author: 'Mentor Platform',
                    keywords: 'mentor, report, performance',
                    creator: 'Mentor Platform'
                });

                // Save the PDF
                doc.save(`mentor-report-${new Date().toISOString().split('T')[0]}.pdf`);
            } catch (error) {
                console.error('Error generating PDF:', error);
                // Add error notification here
            } finally {
                setIsExporting(false);
            }
        }
    };

    return (
        <div className="mentor-reports">
            {/* Header Section */}
            <div className="mentor-reports-header">
                <h1><FaChartLine /> Mentor Reports</h1>
                <div className="mentor-reports-controls">
                    <select 
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="mentor-reports-select"
                    >
                        <option value="week">Last Week</option>
                        <option value="month">Last Month</option>
                        <option value="quarter">Last Quarter</option>
                        <option value="year">Last Year</option>
                    </select>
                    <button 
                        className={`mentor-reports-export-btn ${isExporting ? 'exporting' : ''}`}
                        onClick={() => exportReport('pdf')}
                        disabled={isExporting}
                    >
                        {isExporting ? (
                            <>
                                <FaSpinner className="spinner" /> Exporting...
                            </>
                        ) : (
                            <>
                                <FaFileExport /> Export Report
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Wrap the content to be exported in a ref */}
            <div ref={reportRef}>
                {/* Quick Stats */}
                <div className="mentor-reports-stats">
                    <div className="stat-card">
                        <FaUsers className="stat-icon" />
                        <div className="stat-content">
                            <h3>Active Mentees</h3>
                            <p>24</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <FaClock className="stat-icon" />
                        <div className="stat-content">
                            <h3>Hours Mentored</h3>
                            <p>156</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <FaStar className="stat-icon" />
                        <div className="stat-content">
                            <h3>Average Rating</h3>
                            <p>4.9</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <FaTrophy className="stat-icon" />
                        <div className="stat-content">
                            <h3>Mentor Rank</h3>
                            <p>#3</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mentor-reports-content">
                    {/* Session Summary */}
                    <div className="report-card">
                        <h2><FaFileAlt /> Session Summary</h2>
                        <div className="chart-container">
                            <Line data={sessionData} options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    }
                                }
                            }} />
                        </div>
                    </div>

                    {/* Impact Analysis */}
                    <div className="report-card">
                        <h2><FaChartBar /> Impact Analysis</h2>
                        <div className="chart-container">
                            <Bar data={impactData} options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    }
                                }
                            }} />
                        </div>
                    </div>

                    {/* Enhanced Time Allocation Section */}
                    <div className="report-card">
                        <h2><FaClock /> Time Allocation</h2>
                        <div className="chart-container" style={{ height: '400px', position: 'relative' }}>
                            <Doughnut 
                                data={timeAllocationData} 
                                options={timeAllocationOptions}
                                plugins={[{
                                    beforeDraw: function(chart) {
                                        const ctx = chart.ctx;
                                        const width = chart.width;
                                        const height = chart.height;
                                        
                                        // Clear the center area
                                        const centerX = width / 2;
                                        const centerY = height / 2;
                                        const radius = Math.min(width, height) / 4;
                                        
                                        ctx.restore();
                                        
                                        // Draw decorative circle only
                                        ctx.beginPath();
                                        ctx.arc(centerX, centerY, radius * 0.85, 0, Math.PI * 2);
                                        ctx.strokeStyle = 'rgba(203, 213, 225, 0.3)';
                                        ctx.lineWidth = 1;
                                        ctx.stroke();
                                        
                                        // Draw outer decorative circle
                                        ctx.beginPath();
                                        ctx.arc(centerX, centerY, radius * 0.95, 0, Math.PI * 2);
                                        ctx.strokeStyle = 'rgba(203, 213, 225, 0.1)';
                                        ctx.lineWidth = 1;
                                        ctx.stroke();
                                        
                                        ctx.save();
                                    }
                                }]}
                            />
                        </div>
                        <div className="chart-legend" style={{ 
                            marginTop: '1rem', 
                            display: 'flex', 
                            justifyContent: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap'
                        }}>
                            {timeAllocationData.labels.map((label, index) => (
                                <div key={index} style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '0.5rem'
                                }}>
                                    <div style={{ 
                                        width: '12px', 
                                        height: '12px', 
                                        borderRadius: '50%',
                                        backgroundColor: timeAllocationData.datasets[0].backgroundColor[index]
                                    }} />
                                    <span>{label}: {timeAllocationData.datasets[0].data[index]}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Goals Tracker */}
                    <div className="report-card">
                        <h2><FaCheckCircle /> Goals Tracker</h2>
                        <div className="goals-list">
                            {[
                                { goal: 'Complete Advanced React Course', progress: 80 },
                                { goal: 'Master System Design', progress: 60 },
                                { goal: 'Improve Communication Skills', progress: 90 },
                                { goal: 'Learn Cloud Architecture', progress: 45 }
                            ].map((goal, index) => (
                                <div key={index} className="goal-item">
                                    <div className="goal-info">
                                        <span>{goal.goal}</span>
                                        <span>{goal.progress}%</span>
                                    </div>
                                    <div className="goal-progress-bar">
                                        <div 
                                            className="goal-progress"
                                            style={{ width: `${goal.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorReports;