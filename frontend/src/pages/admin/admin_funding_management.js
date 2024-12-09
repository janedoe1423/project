import React, { useState } from 'react';
import {
    Container, Grid, Card, Typography, Box,
    LinearProgress, IconButton, Tooltip, Tabs, Tab,
    styled, keyframes, CircularProgress, List, ListItem, ListItemAvatar, ListItemText, Avatar,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TextField, Button, MenuItem, Select, FormControl, InputLabel
} from '@mui/material';
import {
    PeopleOutline, Campaign, GavelOutlined,
    TrendingUp, NotificationsActive, MonetizationOn
} from '@mui/icons-material';
import { Line, Pie, Bar, Funnel, Bubble } from 'react-chartjs-2';

// Enhanced Styled Components with animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shimmerAnimation = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const StyledCard = styled(Card)(({ theme, gradient }) => ({
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: `${fadeIn} 0.5s ease-out forwards`,
    padding: '24px',
    borderRadius: '16px',
    background: 'white',
    
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '4px',
        height: '100%',
        background: gradient || 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        transition: 'width 0.3s ease',
    },

    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        animation: `${shimmerAnimation} 2s infinite`,
        opacity: 0,
        transition: 'opacity 0.3s ease',
    },

    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        '&::before': {
            width: '100%',
            opacity: 0.1,
        }
    }
}));

const StyledProgressBar = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    margin: '8px 0',
    position: 'relative',
    overflow: 'hidden',

    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        transform: 'translateX(-100%)',
        animation: 'shimmer 2s infinite',
    },

    '& .MuiLinearProgress-bar': {
        borderRadius: 5,
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    },

    '@keyframes shimmer': {
        '100%': {
            transform: 'translateX(100%)',
        },
    }
}));

const ChartCard = styled(Card)(({ theme }) => ({
    padding: '24px',
    borderRadius: '16px',
    height: '100%',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    background: 'white',
    position: 'relative',
    overflow: 'hidden',

    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
    },

    '&:hover': {
        transform: 'translateY(-5px) scale(1.02)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        '&::before': {
            opacity: 1,
        },
        '& .chart-title': {
            color: '#6366f1',
            transform: 'translateX(8px)',
        }
    }
}));

// Add these new styled components
const CardIcon = styled(Box)(({ theme }) => ({
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    marginRight: '16px',

    '& svg': {
        fontSize: '24px',
        color: '#6366f1',
        transition: 'all 0.3s ease',
    }
}));

const CardTitle = styled(Typography)(({ theme }) => ({
    transition: 'all 0.3s ease',
    fontWeight: 600,
    color: '#1e293b',
}));

const CardValue = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1e293b',
    marginBottom: '16px',
    transition: 'all 0.3s ease',
}));

const MetricBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: 'rgba(99, 102, 241, 0.05)',
        transform: 'translateY(-4px)'
    }
}));

const StatBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    backgroundColor: 'rgba(99, 102, 241, 0.05)',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        transform: 'translateY(-4px)'
    }
}));

// Sample data for the bar chart
const fundingSuccessData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Funds Allocated',
            data: [50, 60, 70, 80, 90, 100, 110],
            backgroundColor: 'rgba(76, 175, 80, 0.5)', // Green
            borderColor: 'rgba(76, 175, 80, 1)', // Darker green
            fill: true,
            tension: 0.4,
        },
        {
            label: 'Pending Requests',
            data: [20, 30, 25, 35, 40, 45, 50],
            backgroundColor: 'rgba(255, 235, 59, 0.5)', // Yellow
            borderColor: 'rgba(255, 235, 59, 1)', // Darker yellow
            fill: true,
            tension: 0.4,
        },
        {
            label: 'Approval Rates',
            data: [70, 75, 80, 85, 90, 95, 100],
            backgroundColor: 'rgba(33, 150, 243, 0.5)', // Blue
            borderColor: 'rgba(33, 150, 243, 1)', // Darker blue
            fill: true,
            tension: 0.4,
        }
    ]
};

// Sample data for the funding success trends chart
const fundingSuccessTrendsData = {
    'Industrial and Manufacturing': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        data: [50, 60, 70, 80, 90, 100, 110],
    },
    'Gems and Jewelry': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        data: [30, 40, 50, 60, 70, 80, 90],
    },
    'Renewable Energy and Power': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        data: [20, 30, 40, 50, 60, 70, 80],
    },
    'Agriculture and Allied': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        data: [10, 20, 30, 40, 50, 60, 70],
    },
    'Infrastructure and Logistics': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        data: [15, 25, 35, 45, 55, 65, 75],
    },
    'Infrastructure and Real Estate': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        data: [25, 35, 45, 55, 65, 75, 85],
    },
    'Technology and Innovation': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        data: [40, 50, 60, 70, 80, 90, 100],
    }
};

// Sample data for funding performance across sectors
const fundingPerformanceData = {
    'Industrial and Manufacturing': { totalFunds: 10000000, successRate: 90, startupsFunded: 15 },
    'Gems and Jewelry': { totalFunds: 5000000, successRate: 70, startupsFunded: 10 },
    'Renewable Energy and Power': { totalFunds: 8000000, successRate: 85, startupsFunded: 12 },
    'Agriculture and Allied': { totalFunds: 3000000, successRate: 60, startupsFunded: 8 },
    'Infrastructure and Logistics': { totalFunds: 12000000, successRate: 95, startupsFunded: 20 },
    'Infrastructure and Real Estate': { totalFunds: 7000000, successRate: 75, startupsFunded: 9 },
    'Technology and Innovation': { totalFunds: 15000000, successRate: 80, startupsFunded: 18 },
};

// Function to prepare data for the bubble chart
const prepareBubbleChartData = () => {
    const labels = Object.keys(fundingPerformanceData);
    const data = labels.map(sector => {
        const { totalFunds, successRate, startupsFunded } = fundingPerformanceData[sector];
        return {
            x: startupsFunded, // Position on x-axis
            y: successRate, // Position on y-axis
            r: totalFunds / 1000000, // Bubble size (scaled down for better visualization)
            sector,
            totalFunds,
            successRate
        };
    });

    return {
        datasets: [{
            label: 'Funding Performance by Sector',
            data,
            backgroundColor: data.map(item => {
                // Color gradient based on success rate
                const green = Math.floor((item.successRate / 100) * 255);
                const red = 255 - green;
                return `rgba(${red}, ${green}, 0, 0.6)`;
            }),
        }]
    };
};

const AdminDashboard = () => {
    const [showInvestorChart, setShowInvestorChart] = useState(false);
    const [chartOption, setChartOption] = useState('monthly');
    const [selectedSector, setSelectedSector] = useState('Industrial and Manufacturing'); // Default sector

    // Define the handleInvestorCardClick function
    const handleInvestorCardClick = () => {
        setShowInvestorChart(!showInvestorChart);
    };

    // Sample dashboard data with proper structure
    const [dashboardData] = useState({
        users: {
            startups: { active: 250, pending: 45, suspended: 12 },
            investors: { active: 150, totalInvestment: '25M', recentDeals: 15 },
            researchers: { total: 100, topics: 35, collaborations: 28 }
        },
        campaigns: {
            running: 45,
            successful: 120,
            failed: 25,
            funding: {
                today: '500K',
                weekly: '2.5M',
                total: '45M'
            }
        },
        ipr: {
            total: 135,
            approved: 85,
            pending: 35,
            rejected: 15,
            categories: {
                patents: 45,
                trademarks: 35,
                copyrights: 20,
                others: 35
            }
        }
    });

    // Chart data
    const [chartData] = useState({
        daily: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            startups: [180, 220, 205, 195, 250, 230, 210],
            investors: [80, 95, 87, 90, 110, 105, 95],
            researchers: [45, 52, 48, 50, 55, 51, 49]
        },
        funding: {
            monthly: [
                { month: 'Jan', amount: 2.5 },
                { month: 'Feb', amount: 3.2 },
                { month: 'Mar', amount: 4.1 },
                { month: 'Apr', amount: 3.8 },
                { month: 'May', amount: 4.5 },
                { month: 'Jun', amount: 5.2 }
            ],
            daily: [
                { day: 'Mon', amount: 100 },
                { day: 'Tue', amount: 120 },
                { day: 'Wed', amount: 110 },
                { day: 'Thu', amount: 130 },
                { day: 'Fri', amount: 140 },
                { day: 'Sat', amount: 150 },
                { day: 'Sun', amount: 160 }
            ]
        },
        industries: [
            { name: 'Technology', value: 45 },
            { name: 'Healthcare', value: 25 },
            { name: 'Finance', value: 15 },
            { name: 'Education', value: 10 },
            { name: 'Others', value: 5 }
        ]
    });

    // Sample data for pending requests
    const [pendingRequests, setPendingRequests] = useState([
        { name: 'Startup A', sector: 'Technology', amount: 1000000, date: '2023-01-15', status: 'Under Review' },
        { name: 'Startup B', sector: 'Healthcare', amount: 500000, date: '2023-01-20', status: 'Awaiting Approval' },
        { name: 'Startup C', sector: 'Finance', amount: 750000, date: '2023-01-25', status: 'Approved' },
        // Add more sample data as needed
    ]);

    // Sample data for funnel chart using bar chart representation
    const funnelData = {
        labels: ['Submitted', 'Reviewed', 'Approved', 'Disbursed'],
        datasets: [{
            label: 'Requests',
            data: [10, 8, 5, 3], // Sample data for each stage
            backgroundColor: ['#2196F3', '#FFC107', '#4CAF50', '#FF5722'], // Color coding for each stage
        }]
    };

    // Render KPI Cards with error handling
    const renderKPICards = () => (
        <Grid container spacing={3}>
           

            <Grid item xs={12} md={6} lg={3}>
                <StyledCard onClick={handleInvestorCardClick} gradient="linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)">
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <CardIcon className="card-icon">
                            <PeopleOutline />
                        </CardIcon>
                        <CardTitle variant="h6" className="card-title">
                            Investors
                        </CardTitle>
                    </Box>
                    <CardValue className="card-value">
                        {dashboardData?.users?.investors?.active || 0}
                    </CardValue>
                </StyledCard>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <StyledCard gradient="linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)">
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <CardIcon className="card-icon">
                            <PeopleOutline />
                        </CardIcon>
                        <CardTitle variant="h6" className="card-title">
                            Startups
                        </CardTitle>
                    </Box>
                    <CardValue className="card-value">
                        {dashboardData?.users?.startups?.active || 0}
                    </CardValue>
                </StyledCard>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <StyledCard gradient="linear-gradient(135deg, #43cea2 0%, #185a9d 100%)">
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <CardIcon className="card-icon">
                            <MonetizationOn />
                        </CardIcon>
                        <CardTitle variant="h6" className="card-title">
                            Total Funding
                        </CardTitle>
                    </Box>
                    <CardValue className="card-value">
                        ${dashboardData?.campaigns?.funding?.total || '0'}
                    </CardValue>
                </StyledCard>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <StyledCard gradient="linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)">
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <CardIcon className="card-icon">
                            <PeopleOutline />
                        </CardIcon>
                        <CardTitle variant="h6" className="card-title">
                            Active Users
                        </CardTitle>
                    </Box>
                    <CardValue className="card-value">
                        {(dashboardData?.users?.startups?.active || 0) + 
                         (dashboardData?.users?.investors?.active || 0) +
                         (dashboardData?.users?.researchers?.total || 0)}
                    </CardValue>
                </StyledCard>
            </Grid>
        </Grid>
    );

    // Chart configurations with error handling
    const roleDistributionData = {
        labels: chartData?.industries?.map(item => item.name) || [],
        datasets: [{
            data: chartData?.industries?.map(item => item.value) || [],
            backgroundColor: [
                'rgba(99, 102, 241, 0.8)',
                'rgba(16, 185, 129, 0.8)',
                'rgba(59, 130, 246, 0.8)',
                'rgba(245, 158, 11, 0.8)',
                'rgba(107, 114, 128, 0.8)'
            ],
            borderWidth: 1,
            borderColor: '#ffffff'
        }]
    };

    const activityTrendsData = {
        labels: chartData?.daily?.labels || [],
        datasets: [
            {
                label: 'Startups',
                data: chartData?.daily?.startups || [],
                borderColor: 'rgba(99, 102, 241, 1)',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Investors',
                data: chartData?.daily?.investors || [],
                borderColor: 'rgba(16, 185, 129, 1)',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Researchers',
                data: chartData?.daily?.researchers || [],
                borderColor: 'rgba(59, 130, 246, 1)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4
            }
        ]
    };

    const fundingTrendsData = {
        labels: chartData?.funding[chartOption]?.map(item => item.month || item.day) || [],
        datasets: [{
            label: `${chartOption.charAt(0).toUpperCase() + chartOption.slice(1)} Funding (Millions)`,
            data: chartData?.funding[chartOption]?.map(item => item.amount) || [],
            backgroundColor: 'rgba(9, 102, 241, 0.8)',
            borderColor: 'rgba(99, 102, 241, 1)',
            borderWidth: 2,
            borderRadius: 5,
            barThickness: 20
        }]
    };

    // Chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true,
                    font: {
                        size: 12
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                padding: 12,
                titleFont: {
                    size: 14,
                    weight: 'bold'
                },
                bodyFont: {
                    size: 13
                },
                boxPadding: 5
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };

    // Function to handle chart option change
    const handleChartOptionChange = (event) => {
        setChartOption(event.target.value);
    };

    // Function to handle sector change
    const handleSectorChange = (event) => {
        setSelectedSector(event.target.value);
    };

    // Get the current data based on selected sector
    const currentFundingData = fundingSuccessTrendsData[selectedSector];

    // Render Charts with enhanced styling
    const renderCharts = () => (
        <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} md={6}>
                <ChartCard>
                    <Typography variant="h6" className="chart-title" sx={{ mb: 2 }}>
                        Industry Distribution
                    </Typography>
                    <Box sx={{ height: 300, position: 'relative' }}>
                        <Pie 
                            data={roleDistributionData} 
                            options={{
                                ...chartOptions,
                                plugins: {
                                    ...chartOptions.plugins,
                                    tooltip: {
                                        ...chartOptions.plugins.tooltip,
                                        callbacks: {
                                            label: (context) => {
                                                const label = context.label || '';
                                                const value = context.raw || 0;
                                                return `${label}: ${value}%`;
                                            }
                                        }
                                    }
                                }
                            }}
                        />
                    </Box>
                </ChartCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <ChartCard>
                    <Typography variant="h6" className="chart-title" sx={{ mb: 2 }}>
                        Daily Activity Trends
                    </Typography>
                    <Box sx={{ height: 300, position: 'relative' }}>
                        <Line 
                            data={activityTrendsData} 
                            options={chartOptions}
                        />
                    </Box>
                </ChartCard>
            </Grid>
            <Grid item xs={12}>
                <ChartCard>
                    <Typography variant="h6" className="chart-title" sx={{ mb: 2 }}>
                         Funding Trends
                    </Typography>
                    <Box sx={{ height: 300, position: 'relative' }}>
                        <Bar 
                            data={fundingTrendsData} 
                            options={chartOptions}
                        />
                    </Box>
                </ChartCard>
            </Grid>
        </Grid>
    );

    // Render Funding Success Trends section
    const renderFundingSuccessTrends = () => (
        <Grid item xs={12}>
            <ChartCard>
                <Typography variant="h6" className="chart-title" sx={{ mb: 2 }}>
                    Funding Success Trends
                </Typography>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="sector-select-label">Select Sector</InputLabel>
                    <Select
                        labelId="sector-select-label"
                        value={selectedSector}
                        onChange={handleSectorChange}
                    >
                        <MenuItem value="Industrial and Manufacturing">Industrial and Manufacturing</MenuItem>
                        <MenuItem value="Gems and Jewelry">Gems and Jewelry</MenuItem>
                        <MenuItem value="Renewable Energy and Power">Renewable Energy and Power</MenuItem>
                        <MenuItem value="Agriculture and Allied">Agriculture and Allied</MenuItem>
                        <MenuItem value="Infrastructure and Logistics">Infrastructure and Logistics</MenuItem>
                        <MenuItem value="Infrastructure and Real Estate">Infrastructure and Real Estate</MenuItem>
                        <MenuItem value="Technology and Innovation">Technology and Innovation</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ height: 300, position: 'relative' }}>
                    <Line 
                        data={{
                            labels: currentFundingData.labels,
                            datasets: [{
                                label: 'Funds Allocated',
                                data: currentFundingData.data,
                                borderColor: 'rgba(76, 175, 80, 1)', // Darker green
                                backgroundColor: 'rgba(76, 175, 80, 0.5)', // Green
                                fill: true,
                                tension: 0.4,
                            }]
                        }} 
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'bottom',
                                },
                                tooltip: {
                                    backgroundColor: 'rgba(17, 24, 39, 0.9)',
                                    padding: 12,
                                    titleFont: {
                                        size: 14,
                                        weight: 'bold'
                                    },
                                    bodyFont: {
                                        size: 13
                                    },
                                    boxPadding: 5
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    grid: {
                                        color: 'rgba(0, 0, 0, 0.05)'
                                    }
                                },
                                x: {
                                    grid: {
                                        display: false
                                    }
                                }
                            }
                        }}
                    />
                </Box>
            </ChartCard>
        </Grid>
    );

    // Render Comparative Analysis section
    const renderComparativeAnalysis = () => (
        <Grid item xs={12}>
            <ChartCard>
                <Typography variant="h6" className="chart-title" sx={{ mb: 2 }}>
                    Comparative Analysis
                </Typography>
                <Box sx={{ height: 400, position: 'relative' }}>
                    <Bubble 
                        data={prepareBubbleChartData()} 
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                tooltip: {
                                    callbacks: {
                                        label: (context) => {
                                            const { sector, totalFunds, successRate } = context.raw;
                                            return `${sector}: ₹${totalFunds.toLocaleString()}, Success Rate: ${successRate}%`;
                                        }
                                    }
                                },
                                legend: {
                                    display: false
                                }
                            },
                            scales: {
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Number of Startups Funded'
                                    },
                                    beginAtZero: true,
                                },
                                y: {
                                    title: {
                                        display: true,
                                        text: 'Funding Success Rate (%)'
                                    },
                                    beginAtZero: true,
                                    max: 100,
                                }
                            }
                        }}
                    />
                </Box>
            </ChartCard>
        </Grid>
    );

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Typography variant="h4" sx={{ mb: 4 }}>
                Admin Dashboard
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                {renderKPICards()}
                {renderFundingSuccessTrends()}
                {renderComparativeAnalysis()}
            </Grid>

            {/* Pending Funding Requests Panel */}
            <Typography variant="h5" sx={{ mb: 2 }}>
                Pending Funding Requests
            </Typography>

            {/* Filters */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <TextField label="Sector" variant="outlined" size="small" sx={{ width: '30%' }} />
                <TextField label="Status" variant="outlined" size="small" sx={{ width: '30%' }} />
                <TextField label="Amount Range" variant="outlined" size="small" sx={{ width: '30%' }} />
                <Button variant="contained" color="primary">Filter</Button>
            </Box>

            {/* Interactive Table */}
            <TableContainer sx={{ mb: 4 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel>Startup Name</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Sector</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Requested Amount</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Submission Date</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Status</TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pendingRequests.map((request, index) => (
                            <TableRow key={index}>
                                <TableCell>{request.name}</TableCell>
                                <TableCell>{request.sector}</TableCell>
                                <TableCell>₹{(request.amount / 10000000).toFixed(2)} Cr</TableCell>
                                <TableCell>{request.date}</TableCell>
                                <TableCell style={{ color: request.status === 'Under Review' ? 'blue' : request.status === 'Awaiting Approval' ? 'orange' : 'green' }}>
                                    {request.status}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Bar Chart as Funnel Representation */}
            <ChartCard>
                <Typography variant="h6" className="chart-title">Request Flow Funnel</Typography>
                <Box sx={{ height: 300, position: 'relative' }}>
                    <Bar 
                        data={funnelData} 
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'top',
                                },
                                tooltip: {
                                    callbacks: {
                                        label: (context) => {
                                            const label = context.label || '';
                                            const value = context.raw || 0;
                                            return `${label}: ${value}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    grid: {
                                        color: 'rgba(0, 0, 0, 0.05)'
                                    }
                                },
                                x: {
                                    grid: {
                                        display: false
                                    }
                                }
                            }
                        }}
                    />
                </Box>
            </ChartCard>

            {renderCharts()}
        </Container>
    );
};

export default AdminDashboard;
