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
import './admin_investors_management.css';
// Import necessary icons and components
import { 
    FaUsers, 
    FaChartLine, 
    FaMapMarkerAlt, 
    FaMoneyBillWave, 
    FaArrowUp, 
    FaArrowDown, 
    FaCheckCircle, 
    FaTimesCircle, 
    FaChartPie, 
    FaBuilding, 
    FaGlobe,
    FaDownload,
    FaFilter,
    FaChartArea,
    FaGlobeAmericas,
    FaIndustry,
    FaHandshake,
    FaUserClock,
    FaBalanceScale,
    FaMapMarkedAlt,
    FaFilePdf,
    FaFileExcel,
    FaSearch,
    FaEye,
    FaEdit
} from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

const downloadPDF = async () => {
    try {
        // Create PDF document
        const pdf = new jsPDF('landscape', 'pt', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const margins = 40;

        // Get all report cards
        const reportCards = document.querySelectorAll('.ad_in_mn-metrics-card');
        let yOffset = margins;

        // Process each card
        for (let i = 0; i < reportCards.length; i++) {
            const card = reportCards[i];
            
            // Capture each card as canvas
            const canvas = await html2canvas(card, {
                scale: 2,
                logging: false,
                useCORS: true,
                allowTaint: true
            });
            
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = pdfWidth - (margins * 2);
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            // Add new page if card doesn't fit
            if (yOffset + imgHeight > pdfHeight - margins) {
                pdf.addPage();
                yOffset = margins;
            }

            // Add image to PDF
            pdf.addImage(imgData, 'PNG', margins, yOffset, imgWidth, imgHeight);
            yOffset += imgHeight + 20;
        }

        // Save the PDF
        pdf.save('investment_reports.pdf');

    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('There was an error generating the PDF. Please try again.');
    }
};

const downloadCSV = () => {
    // Sample data for CSV
    const csvData = [
        ['Report Type', 'Metric', 'Value', 'Period'],
        ['Investor Performance', 'ROI', '32%', 'June 2023'],
        ['Investor Performance', 'Engagement Score', '88', 'June 2023'],
        ['Funding Flow', 'Tech Investment North', '$45M', 'Q2 2023'],
        ['Startup Impact', 'Jobs Created', '750', 'Q4 2023'],
        ['Startup Impact', 'Revenue Generated', '$7M', 'Q4 2023'],
        ['Collaboration', 'Successful Matches', '58', 'June 2023'],
        ['Top Sectors', 'Tech ROI', '28%', '2023'],
        ['Policy Impact', 'Investment Volume', '$120M', 'Q4 2023']
    ];

    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'investment_reports.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// Add this sample data for investors
const investorsData = [
    {
        id: 1,
        name: "Global Tech Ventures",
        type: "Venture Capital",
        totalInvestment: 25000000,
        sectors: ["Technology", "AI", "Fintech"],
        successRate: 78,
        activeDeals: 12,
        location: "San Francisco, CA",
        performance: "High",
        status: "Active"
    },
    {
        id: 2,
        name: "Healthcare Innovation Fund",
        type: "Private Equity",
        totalInvestment: 18000000,
        sectors: ["Healthcare", "Biotech"],
        successRate: 82,
        activeDeals: 8,
        location: "Boston, MA",
        performance: "Very High",
        status: "Active"
    },
    // Add more sample investors...
];

// Create a safer y-axis callback function
const getYAxisCallback = (chartType) => {
    return function(value) {
        if (chartType === 'percentage') {
            return value + '%';
        }
        return value;
    };
};

// Enhanced chart options with better axis handling
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 10,
            right: 20,
            top: 20,
            bottom: 40 // Increased bottom padding for x-axis labels
        }
    },
    plugins: {
        legend: {
            position: 'top',
            align: 'start',
            labels: {
                boxWidth: 12,
                padding: 15,
                font: {
                    size: 11,
                    family: "'Inter', sans-serif",
                    weight: '500'
                },
                usePointStyle: true,
                pointStyle: 'circle'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            titleColor: '#1e293b',
            bodyColor: '#475569',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            padding: 10,
            bodySpacing: 5,
            bodyFont: {
                size: 11
            },
            titleFont: {
                size: 12,
                weight: '600'
            },
            displayColors: true,
            boxWidth: 8,
            boxHeight: 8,
            usePointStyle: true
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: '#f1f5f9',
                drawBorder: false,
                lineWidth: 1
            },
            ticks: {
                padding: 8,
                font: {
                    size: 10,
                    family: "'Inter', sans-serif"
                },
                maxTicksLimit: 8 // Limit number of y-axis ticks
            }
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                padding: 5,
                font: {
                    size: 10,
                    family: "'Inter', sans-serif"
                },
                maxRotation: 30, // Reduced rotation angle
                minRotation: 30,
                autoSkip: true,
                maxTicksLimit: 12, // Limit number of x-axis labels
                callback: function(value) {
                    // Truncate long labels
                    if (typeof value === 'string' && value.length > 12) {
                        return value.substr(0, 12) + '...';
                    }
                    return value;
                }
            }
        }
    }
};

// Specific options for pie/doughnut charts
const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 10,
            right: 10,
            top: 20,
            bottom: 20
        }
    },
    plugins: {
        legend: {
            position: 'bottom',
            align: 'center',
            labels: {
                padding: 15,
                font: {
                    size: 11,
                    family: "'Inter', sans-serif",
                    weight: '500'
                },
                usePointStyle: true,
                pointStyle: 'circle'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            titleColor: '#1e293b',
            bodyColor: '#475569',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            padding: 10,
            bodyFont: {
                size: 11
            }
        }
    },
    cutout: '60%'
};

// Add this CSS to your component or CSS file
const chartContainerStyle = {
    width: '100%',
    height: '300px', // Fixed height for charts
    position: 'relative',
    marginTop: '10px'
};

// Specific options for pie/doughnut charts in reports
const reportsPieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 15,
            right: 25,
            top: 25,
            bottom: 25
        }
    },
    plugins: {
        legend: {
            position: 'right',
            align: 'center',
            labels: {
                padding: 15,
                font: {
                    size: 11,
                    family: "'Inter', sans-serif",
                    weight: '500'
                },
                usePointStyle: true,
                pointStyle: 'circle'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            titleColor: '#1e293b',
            bodyColor: '#475569',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            padding: 12,
            bodySpacing: 6,
            bodyFont: {
                size: 11
            },
            titleFont: {
                size: 12,
                weight: '600'
            },
            displayColors: true,
            boxWidth: 8,
            boxHeight: 8,
            usePointStyle: true
        }
    },
    cutout: '65%',
    radius: '85%'
};

// Define reportsChartOptions first
const reportsChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 15,
            right: 25,
            top: 25,
            bottom: 45
        }
    },
    plugins: {
        legend: {
            position: 'top',
            align: 'start',
            labels: {
                boxWidth: 12,
                padding: 15,
                font: {
                    size: 11,
                    family: "'Inter', sans-serif",
                    weight: '500'
                },
                usePointStyle: true,
                pointStyle: 'circle'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            titleColor: '#1e293b',
            bodyColor: '#475569',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            padding: 12,
            bodySpacing: 6,
            bodyFont: {
                size: 11
            },
            titleFont: {
                size: 12,
                weight: '600'
            },
            displayColors: true,
            boxWidth: 8,
            boxHeight: 8,
            usePointStyle: true
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: '#f1f5f9',
                drawBorder: false,
                lineWidth: 1
            },
            ticks: {
                padding: 10,
                font: {
                    size: 10,
                    family: "'Inter', sans-serif"
                },
                maxTicksLimit: 6,
                callback: function(value) {
                    if (value >= 1000000) {
                        return '$' + (value / 1000000).toFixed(1) + 'M';
                    } else if (value >= 1000) {
                        return '$' + (value / 1000).toFixed(1) + 'K';
                    }
                    return '$' + value;
                }
            }
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                padding: 8,
                font: {
                    size: 10,
                    family: "'Inter', sans-serif"
                },
                maxRotation: 25,
                minRotation: 25,
                autoSkip: true,
                maxTicksLimit: 8,
                callback: function(value) {
                    if (typeof value === 'string') {
                        return value.length > 10 ? value.substring(0, 10) + '...' : value;
                    }
                    return value;
                }
            }
        }
    }
};

const AdminInvestorsManagement = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [showDownloadMenu, setShowDownloadMenu] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);

    // Sample data for charts
    const totalInvestmentData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Total Investment (Millions)',
            data: [30, 45, 60, 55, 75, 85],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            fill: true,
        }]
    };

    const sectorInvestmentData = {
        labels: ['Technology', 'Healthcare', 'Finance', 'Real Estate', 'Energy', 'Education'],
        datasets: [{
            label: 'Investment by Sector (Millions)',
            data: [45, 32, 28, 25, 20, 15],
            backgroundColor: [
                '#3b82f6',
                '#10b981',
                '#f59e0b',
                '#ef4444',
                '#8b5cf6',
                '#ec4899'
            ],
        }]
    };

    const fundingStageData = {
        labels: ['Seed', 'Series A', 'Series B', 'Series C', 'Growth'],
        datasets: [{
            data: [15, 25, 30, 20, 10],
            backgroundColor: [
                'rgba(99, 102, 241, 0.8)',    // Indigo
                'rgba(14, 165, 233, 0.8)',    // Sky blue
                'rgba(34, 197, 94, 0.8)',     // Green
                'rgba(249, 115, 22, 0.8)',    // Orange
                'rgba(168, 85, 247, 0.8)'     // Purple
            ],
            hoverBackgroundColor: [
                'rgba(99, 102, 241, 1)',
                'rgba(14, 165, 233, 1)',
                'rgba(34, 197, 94, 1)',
                'rgba(249, 115, 22, 1)',
                'rgba(168, 85, 247, 1)'
            ]
        }]
    };

    const successRateData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Success Rate (%)',
            data: [65, 70, 75, 80],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            tension: 0.4,
        }]
    };

    const roiDistributionData = {
        labels: ['Tech', 'Healthcare', 'Fintech', 'Real Estate', 'Energy'],
        datasets: [{
            data: [25, 20, 18, 15, 12],
            backgroundColor: [
                'rgba(59, 130, 246, 0.8)',    // Blue
                'rgba(16, 185, 129, 0.8)',    // Emerald
                'rgba(245, 158, 11, 0.8)',    // Amber
                'rgba(236, 72, 153, 0.8)',    // Pink
                'rgba(139, 92, 246, 0.8)'     // Violet
            ],
            hoverBackgroundColor: [
                'rgba(59, 130, 246, 1)',
                'rgba(16, 185, 129, 1)',
                'rgba(245, 158, 11, 1)',
                'rgba(236, 72, 153, 1)',
                'rgba(139, 92, 246, 1)'
            ]
        }]
    };

    const investmentFrequencyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Number of Deals',
            data: [12, 19, 15, 25, 22, 30],
            borderColor: '#8b5cf6',
            backgroundColor: 'rgba(139, 92, 246, 0.2)',
            type: 'line',
            tension: 0.4,
        }]
    };

    const startupMetricsData = {
        labels: ['Revenue Growth', 'Job Creation', 'Market Expansion', 'Product Development'],
        datasets: [{
            label: 'Growth Metrics',
            data: [85, 65, 75, 80],
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: '#3b82f6',
            borderWidth: 2,
        }]
    };

    const topPerformingData = {
        labels: ['Startup A', 'Startup B', 'Startup C', 'Startup D', 'Startup E'],
        datasets: [{
            label: 'ROI Multiple',
            data: [5.2, 4.8, 4.5, 4.2, 4.0],
            backgroundColor: [
                '#3b82f6',
                '#10b981',
                '#f59e0b',
                '#ef4444',
                '#8b5cf6'
            ],
        }]
    };

    const fundingGapsData = {
        labels: ['Region A', 'Region B', 'Region C', 'Region D'],
        datasets: [{
            label: 'Investment Gap (Millions)',
            data: [15, 12, 9, 5],
            backgroundColor: 'rgba(239, 68, 68, 0.6)',
        }]
    };

    const matchRateData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Match Rate (%)',
            data: [60, 65, 75, 80],
            borderColor: '#ec4899',
            backgroundColor: 'rgba(236, 72, 153, 0.2)',
            fill: true,
        }]
    };

    const investorPerformanceData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'ROI (%)',
            data: [12, 15, 18, 22, 20, 25],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            fill: true
        }, {
            label: 'Engagement Score',
            data: [65, 70, 75, 80, 85, 88],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true
        }]
    };

    const fundingFlowData = {
        labels: ['Tech', 'Healthcare', 'Finance', 'Education', 'Energy', 'Real Estate'],
        datasets: [{
            label: 'Investment Distribution ($M)',
            data: [45, 35, 28, 20, 18, 15],
            backgroundColor: [
                'rgba(59, 130, 246, 0.8)',
                'rgba(16, 185, 129, 0.8)',
                'rgba(245, 158, 11, 0.8)',
                'rgba(139, 92, 246, 0.8)',
                'rgba(236, 72, 153, 0.8)',
                'rgba(239, 68, 68, 0.8)'
            ]
        }]
    };

    const startupImpactData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Jobs Created',
            data: [250, 380, 420, 550],
            borderColor: '#8b5cf6',
            backgroundColor: 'rgba(139, 92, 246, 0.2)',
            type: 'line'
        }, {
            label: 'Revenue Generated ($M)',
            data: [2.5, 3.8, 4.2, 5.5],
            borderColor: '#ec4899',
            backgroundColor: 'rgba(236, 72, 153, 0.2)',
            type: 'line'
        }]
    };

    const performanceReportData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'ROI',
            data: [15, 18, 22, 25, 28, 32],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            fill: true
        }, {
            label: 'Engagement Score',
            data: [70, 75, 78, 82, 85, 88],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true
        }]
    };

    const collaborationData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Successful Matches',
            data: [25, 30, 35, 45, 50, 58],
            borderColor: '#ec4899',
            backgroundColor: 'rgba(236, 72, 153, 0.2)',
            fill: true
        }]
    };

    const sectorPerformanceData = {
        labels: ['Tech', 'Healthcare', 'Fintech', 'EdTech', 'CleanTech'],
        datasets: [{
            label: 'Average ROI (%)',
            data: [28, 24, 22, 20, 18],
            backgroundColor: [
                'rgba(59, 130, 246, 0.8)',
                'rgba(16, 185, 129, 0.8)',
                'rgba(245, 158, 11, 0.8)',
                'rgba(139, 92, 246, 0.8)',
                'rgba(236, 72, 153, 0.8)'
            ],
        }]
    };

    const policyImpactData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Investment Volume ($M)',
            data: [50, 75, 90, 120],
            type: 'line',
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            fill: true
        }]
    };

    const handleDownloadPDF = async () => {
        try {
            setIsDownloading(true);

            // Switch to metrics section if needed
            if (activeSection !== 'metrics') {
                setActiveSection('metrics');
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            // Force charts to update
            forceChartsUpdate();
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Create PDF with custom dimensions
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const margin = 10;
            const usableWidth = pageWidth - (2 * margin);
            const usableHeight = pageHeight - (2 * margin);

            // Get all chart containers
            const chartContainers = document.querySelectorAll('.ad_in_mn-report-card');

            // Process each chart
            for (let i = 0; i < chartContainers.length; i++) {
                // Add new page for each chart except first
                if (i > 0) {
                    pdf.addPage();
                }

                const container = chartContainers[i];

                // Create temporary container with fixed dimensions
                const tempDiv = document.createElement('div');
                tempDiv.style.cssText = `
                    position: fixed;
                    left: -9999px;
                    width: 800px;
                    height: 400px;
                    background: white;
                    padding: 20px;
                    overflow: hidden;
                `;
                document.body.appendChild(tempDiv);

                // Clone the content
                const clone = container.cloneNode(true);
                clone.style.cssText = `
                    width: 100%;
                    height: 100%;
                    background: white;
                    transform: none;
                    position: relative;
                `;
                tempDiv.appendChild(clone);

                try {
                    // Wait for rendering
                    await new Promise(resolve => setTimeout(resolve, 500));

                    // Capture the chart
                    const canvas = await html2canvas(tempDiv, {
                        scale: 2,
                        useCORS: true,
                        allowTaint: true,
                        backgroundColor: '#ffffff',
                        logging: false,
                        width: 800,
                        height: 400,
                        onclone: (clonedDoc) => {
                            const chartElement = clonedDoc.querySelector('.ad_in_mn-report-chart');
                            if (chartElement) {
                                chartElement.style.height = '300px';
                            }
                        }
                    });

                    // Calculate dimensions to fit page
                    const imgWidth = usableWidth;
                    const imgHeight = (canvas.height * usableWidth) / canvas.width;

                    // Add to PDF with centered positioning
                    const xPos = margin;
                    const yPos = (pageHeight - imgHeight) / 2;

                    pdf.addImage(
                        canvas.toDataURL('image/png', 1.0),
                        'PNG',
                        xPos,
                        yPos,
                        imgWidth,
                        imgHeight,
                        `chart-${i}`,
                        'FAST'
                    );

                } catch (error) {
                    console.error(`Error processing chart ${i + 1}:`, error);
                } finally {
                    // Clean up
                    if (tempDiv && document.body.contains(tempDiv)) {
                        document.body.removeChild(tempDiv);
                    }
                }
            }

            // Save the PDF
            pdf.save('investor-reports.pdf');

        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Error generating PDF. Please try again.');
        } finally {
            setIsDownloading(false);
        }
    };

    // Helper function to force chart updates
    const forceChartsUpdate = () => {
        const chartElements = document.querySelectorAll('.ad_in_mn-report-chart canvas');
        chartElements.forEach(canvas => {
            const chartInstance = canvas.chart;
            if (chartInstance) {
                chartInstance.update();
            }
        });
    };

    // Update your useEffect to include chart updates
    useEffect(() => {
        if (activeSection === 'metrics') {
            // Wait for charts to render then force update
            setTimeout(forceChartsUpdate, 1000);
        }
    }, [activeSection]);

    const renderSection = () => {
        switch (activeSection) {
            case 'overview':
                return (
                    <div className="ad_in_mn-section-content">
                        <h2 className="ad_in_mn-section-header">Overview</h2>
                        <div className="ad_in_mn-metric-grid">
                            <div className="ad_in_mn-metric-card">
                                <div className="ad_in_mn-card-header">
                                    <FaUsers className="ad_in_mn-card-icon" />
                                    <h3>Total Investors Count</h3>
                                </div>
                                <div className="ad_in_mn-metric-numbers">
                                    <span className="ad_in_mn-primary-number">
                                        1,234
                                        <FaArrowUp style={{ color: '#40c057', fontSize: '24px' }} />
                                    </span>
                                    <div className="ad_in_mn-sub-metrics">
                                        <span className="ad_in_mn-active">
                                            <FaCheckCircle /> Active: 956
                                        </span>
                                        <span className="ad_in_mn-inactive">
                                            <FaTimesCircle /> Inactive: 278
                                        </span>
                                    </div>
                                </div>
                            </div>
    
                            <div className="ad_in_mn-metric-card">
                                <div className="ad_in_mn-card-header">
                                    <FaChartLine className="ad_in_mn-card-icon" />
                                    <h3>Investor Segmentation</h3>
                                </div>
                                <div className="ad_in_mn-metric-list">
                                    <div>
                                        <span><FaChartPie /> Angel Investors</span>
                                        <span>45%</span>
                                    </div>
                                    <div>
                                        <span><FaBuilding /> Venture Capital</span>
                                        <span>30%</span>
                                    </div>
                                    <div>
                                        <span><FaGlobe /> Institutional</span>
                                        <span>25%</span>
                                    </div>
                                </div>
                            </div>
    
                            <div className="ad_in_mn-metric-card">
                                <div className="ad_in_mn-card-header">
                                    <FaMoneyBillWave className="ad_in_mn-card-icon" />
                                    <h3>Investment Distribution</h3>
                                </div>
                                <div className="ad_in_mn-metric-list">
                                    <div>Technology: $25M</div>
                                    <div>Healthcare: $18M</div>
                                    <div>Real Estate: $15M</div>
                                    <div>Finance: $12M</div>
                                </div>
                            </div>
    
                            <div className="ad_in_mn-metric-card">
                                <div className="ad_in_mn-card-header">
                                    <FaChartLine className="ad_in_mn-card-icon" />
                                    <h3>Average Investment Size</h3>
                                </div>
                                <div className="ad_in_mn-metric-numbers">
                                    <span className="ad_in_mn-primary-number">$2.5M</span>
                                    <div className="ad_in_mn-trend ad_in_mn-trend-up">
                                        <FaArrowUp /> 15% from last quarter
                                    </div>
                                </div>
                            </div>
    
                            <div className="ad_in_mn-metric-card">
                                <div className="ad_in_mn-card-header">
                                    <FaUsers className="ad_in_mn-card-icon" />
                                    <h3>Top Active Investors</h3>
                                </div>
                                <div className="ad_in_mn-metric-list">
                                    <div>1. Tech Ventures (25 deals)</div>
                                    <div>2. Global Fund (18 deals)</div>
                                    <div>3. Future Capital (15 deals)</div>
                                </div>
                            </div>
    
                            <div className="ad_in_mn-metric-card">
                                <div className="ad_in_mn-card-header">
                                    <FaMapMarkerAlt className="ad_in_mn-card-icon" />
                                    <h3>Pending Verifications</h3>
                                </div>
                                <div className="ad_in_mn-metric-numbers">
                                    <span className="ad_in_mn-primary-number">45</span>
                                    <div className="ad_in_mn-sub-metrics">
                                        <span>Documents: 28</span>
                                        <span>Accounts: 17</span>
                                    </div>
                                </div>
                            </div>
    
                            <div className="ad_in_mn-metric-card">
                                <div className="ad_in_mn-card-header">
                                    <FaChartLine className="ad_in_mn-card-icon" />
                                    <h3>Funding Trends</h3>
                                </div>
                                <div className="ad_in_mn-metric-numbers">
                                    <span className="ad_in_mn-primary-number">$125M</span>
                                    <div className="ad_in_mn-trend ad_in_mn-trend-up">
                                        <FaArrowUp /> 23% YoY Growth
                                    </div>
                                </div>
                            </div>
    
                            <div className="ad_in_mn-metric-card">
                                <div className="ad_in_mn-card-header">
                                    <FaUsers className="ad_in_mn-card-icon" />
                                    <h3>Investor Engagement Rate</h3>
                                </div>
                                <div className="ad_in_mn-metric-numbers">
                                    <span className="ad_in_mn-primary-number">78%</span>
                                    <div className="ad_in_mn-trend ad_in_mn-trend-up">
                                        <FaArrowUp /> 5% this month
                                    </div>
                                </div>
                            </div>
    
                            <div className="ad_in_mn-metric-card">
                                <div className="ad_in_mn-card-header">
                                    <FaMapMarkerAlt className="ad_in_mn-card-icon" />
                                    <h3>Geographical Distribution</h3>
                                </div>
                                <div className="ad_in_mn-metric-list">
                                    <div>North America: 45%</div>
                                    <div>Europe: 30%</div>
                                    <div>Asia: 20%</div>
                                    <div>Others: 5%</div>
                                </div>
                            </div>
    
                            <div className="ad_in_mn-metric-card">
                                <div className="ad_in_mn-card-header">
                                    <FaMoneyBillWave className="ad_in_mn-card-icon" />
                                    <h3>Policy-Linked Investors</h3>
                                </div>
                                <div className="ad_in_mn-metric-numbers">
                                    <span className="ad_in_mn-primary-number">234</span>
                                    <div className="ad_in_mn-sub-metrics">
                                        <span>Grant Linked: 156</span>
                                        <span>Policy Incentives: 78</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'metrics':
                return (
                    <div className="ad_in_mn-section-content">
                        <h2 className="ad_in_mn-section-header">Investment Metrics</h2>
                        <div className="ad_in_mn-metrics-section">
                            {/* Investor Performance Report */}
                            <div className="ad_in_mn-metrics-card">
                                <h3>Investor Performance Report</h3>
                                <div className="ad_in_mn-metrics-description">
                                    <p>ROI trends show consistent growth, reaching <span className="ad_in_mn-highlight">32%</span> in June. 
                                    Investor engagement has improved significantly, with a peak score of <span className="ad_in_mn-highlight">88</span>.</p>
                                    <div className="ad_in_mn-key-insights">
                                        <div className="ad_in_mn-insight-item">
                                            <FaArrowUp className="ad_in_mn-trend-up" />
                                            <span>15% increase in ROI from previous quarter</span>
                                        </div>
                                        <div className="ad_in_mn-insight-item">
                                            <FaCheckCircle className="ad_in_mn-success" />
                                            <span>Highest engagement rate in 12 months</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ad_in_mn-chart-container">
                                    <Line data={performanceReportData} options={chartOptions} />
                                </div>
                            </div>

                            {/* Funding Flow Analysis */}
                            <div className="ad_in_mn-metrics-card">
                                <h3>Regional Funding Distribution</h3>
                                <div className="ad_in_mn-metrics-description">
                                    <p>The Northern region leads investment activity with <span className="ad_in_mn-highlight">$45M</span> in tech sector funding. 
                                    Healthcare investments show strong presence in Eastern markets.</p>
                                    <div className="ad_in_mn-key-insights">
                                        <div className="ad_in_mn-insight-item">
                                            <FaGlobeAmericas className="ad_in_mn-info" />
                                            <span>North region dominates tech investments</span>
                                        </div>
                                        <div className="ad_in_mn-insight-item">
                                            <FaIndustry className="ad_in_mn-info" />
                                            <span>Healthcare funding up 25% in East</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ad_in_mn-line-chart-container">
                                    <Bar data={fundingFlowData} options={chartOptions} />
                                </div>
                            </div>

                            {/* Startup Impact Metrics */}
                            <div className="ad_in_mn-metrics-card">
                                <h3>Startup Growth Impact</h3>
                                <div className="ad_in_mn-metrics-description">
                                    <p>Portfolio startups have created <span className="ad_in_mn-highlight">750</span> new jobs and generated 
                                    <span className="ad_in_mn-highlight"> $7M</span> in revenue during Q4.</p>
                                    <div className="ad_in_mn-key-insights">
                                        <div className="ad_in_mn-insight-item">
                                            <FaHandshake className="ad_in_mn-success" />
                                            <span>25% increase in job creation</span>
                                        </div>
                                        <div className="ad_in_mn-insight-item">
                                            <FaChartLine className="ad_in_mn-trend-up" />
                                            <span>Revenue growth exceeds projections</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ad_in_mn-line-chart-container">
                                    <Line data={startupImpactData} options={chartOptions} />
                                </div>
                            </div>

                            {/* Funding Stage Analysis */}
                            <div className="ad_in_mn-metrics-card">
                                <h3>Investment Stage Distribution</h3>
                                <div className="ad_in_mn-metrics-description">
                                    <p>Series B funding dominates at <span className="ad_in_mn-highlight">30%</span> of total investments, 
                                    followed by Series A at <span className="ad_in_mn-highlight">25%</span>.</p>
                                    <div className="ad_in_mn-key-insights">
                                        <div className="ad_in_mn-insight-item">
                                            <FaChartPie className="ad_in_mn-info" />
                                            <span>Balanced stage distribution</span>
                                        </div>
                                        <div className="ad_in_mn-insight-item">
                                            <FaArrowUp className="ad_in_mn-trend-up" />
                                            <span>Growth stage funding increased</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ad_in_mn-pie-chart-container">
                                    <Doughnut data={fundingStageData} options={pieChartOptions} />
                                </div>
                            </div>

                            {/* ROI Distribution */}
                            <div className="ad_in_mn-metrics-card">
                                <h3>Sector ROI Analysis</h3>
                                <div className="ad_in_mn-metrics-description">
                                    <p>Technology sector leads with <span className="ad_in_mn-highlight">25%</span> ROI, 
                                    while Healthcare maintains strong returns at <span className="ad_in_mn-highlight">20%</span>.</p>
                                    <div className="ad_in_mn-key-insights">
                                        <div className="ad_in_mn-insight-item">
                                            <FaBalanceScale className="ad_in_mn-info" />
                                            <span>Tech sector outperforms market</span>
                                        </div>
                                        <div className="ad_in_mn-insight-item">
                                            <FaUserClock className="ad_in_mn-warning" />
                                            <span>Energy sector needs attention</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ad_in_mn-pie-chart-container">
                                    <Pie data={roiDistributionData} options={pieChartOptions} />
                                </div>
                            </div>

                            {/* Investment Frequency */}
                            <div className="ad_in_mn-metrics-card">
                                <h3>Investment Frequency Trends</h3>
                                <div className="ad_in_mn-metrics-description">
                                    <p>Peak activity reached in June with <span className="ad_in_mn-highlight">58</span> deals. 
                                    Average quarterly deal flow increased by <span className="ad_in_mn-highlight">22%</span>.</p>
                                    <div className="ad_in_mn-key-insights">
                                        <div className="ad_in_mn-insight-item">
                                            <FaChartLine className="ad_in_mn-trend-up" />
                                            <span>Consistent growth in deal frequency</span>
                                        </div>
                                        <div className="ad_in_mn-insight-item">
                                            <FaHandshake className="ad_in_mn-success" />
                                            <span>Higher deal closure rate</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ad_in_mn-line-chart-container">
                                    <Bar data={investmentFrequencyData} options={chartOptions} />
                                </div>
                            </div>

                            {/* Collaboration Success */}
                            <div className="ad_in_mn-metrics-card">
                                <h3>Investor-Startup Collaboration</h3>
                                <div className="ad_in_mn-metrics-description">
                                    <p>Successful matches increased to <span className="ad_in_mn-highlight">85%</span>. 
                                    Long-term partnerships show <span className="ad_in_mn-highlight">30%</span> growth.</p>
                                    <div className="ad_in_mn-key-insights">
                                        <div className="ad_in_mn-insight-item">
                                            <FaCheckCircle className="ad_in_mn-success" />
                                            <span>Improved matching algorithm</span>
                                        </div>
                                        <div className="ad_in_mn-insight-item">
                                            <FaArrowUp className="ad_in_mn-trend-up" />
                                            <span>Better retention rate</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ad_in_mn-line-chart-container">
                                    <Line data={collaborationData} options={chartOptions} />
                                </div>
                            </div>

                            {/* Top Performing Sectors */}
                            <div className="ad_in_mn-metrics-card">
                                <h3>Sector Performance Analysis</h3>
                                <div className="ad_in_mn-metrics-description">
                                    <p>Tech sector leads with <span className="ad_in_mn-highlight">28%</span> ROI. 
                                    Healthcare and Fintech show strong momentum.</p>
                                    <div className="ad_in_mn-key-insights">
                                        <div className="ad_in_mn-insight-item">
                                            <FaIndustry className="ad_in_mn-info" />
                                            <span>Tech sector dominance continues</span>
                                        </div>
                                        <div className="ad_in_mn-insight-item">
                                            <FaChartArea className="ad_in_mn-success" />
                                            <span>Healthcare sector growing rapidly</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ad_in_mn-pie-chart-container">
                                    <Doughnut data={sectorPerformanceData} options={pieChartOptions} />
                                </div>
                            </div>

                            {/* Policy Impact */}
                            <div className="ad_in_mn-metrics-card">
                                <h3>Policy Impact Trends</h3>
                                <div className="ad_in_mn-metrics-description">
                                    <p>Investment volume reached <span className="ad_in_mn-highlight">$120M</span> post-policy changes. 
                                    <span className="ad_in_mn-highlight">35%</span> increase in new registrations.</p>
                                    <div className="ad_in_mn-key-insights">
                                        <div className="ad_in_mn-insight-item">
                                            <FaGlobe className="ad_in_mn-info" />
                                            <span>Positive policy influence</span>
                                        </div>
                                        <div className="ad_in_mn-insight-item">
                                            <FaBuilding className="ad_in_mn-success" />
                                            <span>Increased institutional participation</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ad_in_mn-line-chart-container">
                                    <Line data={policyImpactData} options={chartOptions} />
                                </div>
                            </div>

                            {/* Regional Investment Map */}
                            <div className="ad_in_mn-metrics-card">
                                <h3>Regional Investment Distribution</h3>
                                <div className="ad_in_mn-metrics-description">
                                    <p>North region leads with <span className="ad_in_mn-highlight">$85M</span> investments. 
                                    Emerging growth in Eastern markets.</p>
                                    <div className="ad_in_mn-key-insights">
                                        <div className="ad_in_mn-insight-item">
                                            <FaMapMarkedAlt className="ad_in_mn-info" />
                                            <span>Balanced regional growth</span>
                                        </div>
                                        <div className="ad_in_mn-insight-item">
                                            <FaArrowUp className="ad_in_mn-trend-up" />
                                            <span>Eastern market potential</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ad_in_mn-region-list">
                                    <div className="ad_in_mn-region-item">
                                        <span>North Region</span>
                                        <span className="ad_in_mn-region-amount">$85M</span>
                                    </div>
                                    <div className="ad_in_mn-region-item">
                                        <span>South Region</span>
                                        <span className="ad_in_mn-region-amount">$60M</span>
                                    </div>
                                    <div className="ad_in_mn-region-item">
                                        <span>East Region</span>
                                        <span className="ad_in_mn-region-amount">$58M</span>
                                    </div>
                                    <div className="ad_in_mn-region-item">
                                        <span>West Region</span>
                                        <span className="ad_in_mn-region-amount">$72M</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'profiles':
                return (
                    <div className="ad_in_mn-section-content">
                        <h2 className="ad_in_mn-section-header">All Investor Profiles</h2>
                        
                        {/* Search and Filter Bar */}
                        <div className="ad_in_mn-profile-actions">
                            <div className="ad_in_mn-search-bar">
                                <FaSearch className="ad_in_mn-search-icon" />
                                <input 
                                    type="text" 
                                    placeholder="Search investors..." 
                                    className="ad_in_mn-search-input"
                                />
                            </div>
                            <div className="ad_in_mn-filter-buttons">
                                <button className="ad_in_mn-filter-btn active">All</button>
                                <button className="ad_in_mn-filter-btn">Active</button>
                                <button className="ad_in_mn-filter-btn">High Performers</button>
                                <button className="ad_in_mn-filter-btn">New</button>
                            </div>
                        </div>

                        {/* New Table View */}
                        <div className="ad_in_mn-table-container">
                            <table className="ad_in_mn-investors-table">
                                <thead>
                                    <tr>
                                        <th>Investor Name</th>
                                        <th>Type</th>
                                        <th>Total Investment</th>
                                        <th>Sectors</th>
                                        <th>Success Rate</th>
                                        <th>Active Deals</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {investorsData.map(investor => (
                                        <tr key={investor.id}>
                                            <td className="ad_in_mn-investor-name">
                                                {investor.name}
                                            </td>
                                            <td>{investor.type}</td>
                                            <td className="ad_in_mn-amount">
                                                ${(investor.totalInvestment / 1000000).toFixed(1)}M
                                            </td>
                                            <td>
                                                <div className="ad_in_mn-table-sectors">
                                                    {investor.sectors.map((sector, index) => (
                                                        <span key={index} className="ad_in_mn-sector-tag">
                                                            {sector}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="ad_in_mn-success-rate">
                                                <div className="ad_in_mn-progress-bar">
                                                    <div 
                                                        className="ad_in_mn-progress-fill"
                                                        style={{ width: `${investor.successRate}%` }}
                                                    ></div>
                                                </div>
                                                {investor.successRate}%
                                            </td>
                                            <td className="ad_in_mn-deals">{investor.activeDeals}</td>
                                            <td>
                                                <span className="ad_in_mn-location">
                                                    <FaMapMarkerAlt /> {investor.location}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`ad_in_mn-status-badge ${investor.status.toLowerCase()}`}>
                                                    {investor.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="ad_in_mn-table-actions">
                                                    <button className="ad_in_mn-action-btn view">
                                                        <FaEye /> View
                                                    </button>
                                                    <button className="ad_in_mn-action-btn edit">
                                                        <FaEdit /> Edit
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Keeping existing pagination */}
                        <div className="ad_in_mn-pagination">
                            <button className="ad_in_mn-page-btn">Previous</button>
                            <div className="ad_in_mn-page-numbers">
                                <button className="ad_in_mn-page-btn active">1</button>
                                <button className="ad_in_mn-page-btn">2</button>
                                <button className="ad_in_mn-page-btn">3</button>
                                <span>...</span>
                                <button className="ad_in_mn-page-btn">10</button>
                            </div>
                            <button className="ad_in_mn-page-btn">Next</button>
                        </div>
                    </div>
                );
            case 'reports':
                return (
                    <div className="ad_in_mn-section-content">
                        <h2 className="ad_in_mn-section-header">Reports and Analytics</h2>
                        
                        <div className="ad_in_mn-reports-actions">
                            <button className="ad_in_mn-report-action-btn">
                                <FaFilter /> Filter Reports
                            </button>
                            <div className="ad_in_mn-download-container">
                                <button 
                                    className="ad_in_mn-report-action-btn"
                                    onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                                >
                                    <FaDownload /> Export Reports
                                </button>
                                {showDownloadMenu && renderDownloadMenu()}
                            </div>
                        </div>

                        <div className="ad_in_mn-reports-grid">
                            {/* Performance Report */}
                            <div className="ad_in_mn-report-card" data-html2canvas-ignore="false">
                                <div className="ad_in_mn-report-header">
                                    <h3>Performance Report</h3>
                                    <p className="ad_in_mn-report-description">
                                        Monthly ROI and engagement metrics showing consistent growth trends.
                                        <span className="ad_in_mn-highlight"> Peak ROI: 32%</span>
                                    </p>
                                </div>
                                <div className="ad_in_mn-report-chart" style={{ height: '300px' }}>
                                    <Line 
                                        data={performanceReportData} 
                                        options={reportsChartOptions}
                                    />
                                </div>
                            </div>

                            {/* Funding Flow */}
                            <div className="ad_in_mn-report-card" data-html2canvas-ignore="false">
                                <div className="ad_in_mn-report-header">
                                    <h3>Funding Flow Analysis</h3>
                                    <p className="ad_in_mn-report-description">
                                        Sector-wise investment distribution across regions.
                                        <span className="ad_in_mn-highlight"> Tech leads: $45M</span>
                                    </p>
                                </div>
                                <div className="ad_in_mn-report-chart" style={{ height: '300px' }}>
                                    <Bar 
                                        data={fundingFlowData} 
                                        options={reportsChartOptions}
                                    />
                                </div>
                            </div>

                            {/* Startup Impact */}
                            <div className="ad_in_mn-report-card" data-html2canvas-ignore="false">
                                <div className="ad_in_mn-report-header">
                                    <h3>Startup Impact</h3>
                                    <p className="ad_in_mn-report-description">
                                        Job creation and revenue generation metrics.
                                        <span className="ad_in_mn-highlight"> 750 new jobs created</span>
                                    </p>
                                </div>
                                <div className="ad_in_mn-report-chart" style={{ height: '300px' }}>
                                    <Line 
                                        data={startupImpactData} 
                                        options={reportsChartOptions}
                                    />
                                </div>
                            </div>

                            {/* Collaboration Success */}
                            <div className="ad_in_mn-report-card" data-html2canvas-ignore="false">
                                <div className="ad_in_mn-report-header">
                                    <h3>Collaboration Success</h3>
                                    <p className="ad_in_mn-report-description">
                                        Investor-startup matching success rate trends.
                                        <span className="ad_in_mn-highlight"> 58 successful matches</span>
                                    </p>
                                </div>
                                <div className="ad_in_mn-report-chart" style={{ height: '300px' }}>
                                    <Line 
                                        data={collaborationData} 
                                        options={reportsChartOptions}
                                    />
                                </div>
                            </div>

                            {/* Sector Performance */}
                            <div className="ad_in_mn-report-card pie-chart" data-html2canvas-ignore="false">
                                <div className="ad_in_mn-report-header">
                                    <h3>Sector Performance</h3>
                                    <p className="ad_in_mn-report-description">
                                        ROI analysis across different sectors.
                                        <span className="ad_in_mn-highlight"> Tech ROI: 28%</span>
                                    </p>
                                </div>
                                <div className="ad_in_mn-report-chart" style={{ height: '300px' }}>
                                    <Doughnut 
                                        data={sectorPerformanceData} 
                                        options={reportsPieChartOptions}
                                    />
                                </div>
                            </div>

                            {/* Policy Impact */}
                            <div className="ad_in_mn-report-card" data-html2canvas-ignore="false">
                                <div className="ad_in_mn-report-header">
                                    <h3>Policy Impact</h3>
                                    <p className="ad_in_mn-report-description">
                                        Investment volume changes post-policy implementation.
                                        <span className="ad_in_mn-highlight"> Volume: $120M</span>
                                    </p>
                                </div>
                                <div className="ad_in_mn-report-chart" style={{ height: '300px' }}>
                                    <Line 
                                        data={policyImpactData} 
                                        options={reportsChartOptions}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const renderDownloadMenu = () => (
        <div className="ad_in_mn-download-menu">
            <button 
                onClick={handleDownloadPDF} 
                className="ad_in_mn-download-option"
                disabled={isDownloading}
            >
                <FaFilePdf /> 
                {isDownloading ? 'Generating PDF...' : 'Export as PDF'}
            </button>
            <button onClick={downloadCSV} className="ad_in_mn-download-option">
                <FaFileExcel /> Export as CSV
            </button>
        </div>
    );

    // Add loading overlay
    const renderLoadingOverlay = () => {
        if (!isDownloading) return null;
        
        return (
            <div className="ad_in_mn-loading-overlay">
                <div className="ad_in_mn-loading-spinner"></div>
                <p>Generating PDF... Please wait</p>
            </div>
        );
    };

    return (
        <div className="ad_in_mn-container">
            {renderLoadingOverlay()}
            <div className="ad_in_mn-menu-bar">
                <button onClick={() => setActiveSection('overview')}><FaUsers /> Overview</button>
                <button onClick={() => setActiveSection('metrics')}><FaChartLine /> Metrics Section</button>
                <button onClick={() => setActiveSection('profiles')}><FaMapMarkerAlt /> All Profiles Section</button>
                <button onClick={() => setActiveSection('reports')}><FaMoneyBillWave /> Report and Analytics Section</button>
            </div>
            {renderSection()}
        </div>
    );
};

export default AdminInvestorsManagement;

