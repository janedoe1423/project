import React, { useState, useEffect } from 'react';
import './admin_dashboard.css';
import {
    Container, Grid, Card, Typography, Box,
    LinearProgress, IconButton, Tooltip, Tabs, Tab,
    styled, keyframes, CircularProgress, List, ListItem, 
    ListItemAvatar, ListItemText, Avatar,
    Drawer, AppBar, Toolbar, Button
} from '@mui/material';
import {
    PeopleOutline, Campaign, GavelOutlined,
    TrendingUp, NotificationsActive, MonetizationOn,
    Business, AccountBalance, Gavel, AttachMoney,
    Dashboard, People, Assignment, Notifications,
    Assessment, Menu as MenuIcon, Feedback, SupportAgent,
    Security, Engineering
} from '@mui/icons-material';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip as ChartTooltip,
    Legend,
    ArcElement,
    BarElement
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    ChartTooltip,
    Legend,
    ArcElement,
    BarElement
);

// Add CardIcon styled component
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

// Add ChartCard styled component
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

// Add chartOptions configuration
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

const industryChartOptions = {
    ...chartOptions,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                padding: 20,
                usePointStyle: true,
                font: { size: 12 }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(17, 24, 39, 0.9)',
            padding: 12,
            titleFont: { size: 14, weight: 'bold' },
            bodyFont: { size: 13 },
            displayColors: true,
            callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += context.parsed.y.toLocaleString();
                    }
                    return label;
                }
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0, 0, 0, 0.05)'
            },
            ticks: {
                callback: function(value) {
                    return value.toLocaleString();
                }
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
};

const AdminDashboard = () => {
    // Add state declarations
    const [selectedMenu, setSelectedMenu] = useState('dashboard');
    const [mobileOpen, setMobileOpen] = useState(false);
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
            rejected: 15
        }
    });

    // Add chart data states
    const roleDistributionData = {
        labels: ['Technology', 'Healthcare', 'Finance', 'Education', 'Others'],
        datasets: [{
            data: [45, 25, 15, 10, 5],
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
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Startups',
                data: [180, 220, 205, 195, 250, 230, 210],
                borderColor: 'rgba(99, 102, 241, 1)',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Investors',
                data: [80, 95, 87, 90, 110, 105, 95],
                borderColor: 'rgba(16, 185, 129, 1)',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4
            }
        ]
    };

    const [timeFrame, setTimeFrame] = useState('monthly');
    const fundingTrendsData = {
        weekly: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Weekly Funding (Millions)',
                data: [0.8, 1.2, 0.9, 1.5, 1.1, 0.7, 1.3],
                backgroundColor: 'rgba(99, 102, 241, 0.8)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 2,
                borderRadius: 5,
                barThickness: 20
            }]
        },
        monthly: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Monthly Funding (Millions)',
                data: [2.5, 3.2, 4.1, 3.8, 4.5, 5.2],
                backgroundColor: 'rgba(99, 102, 241, 0.8)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 2,
                borderRadius: 5,
                barThickness: 20
            }]
        },
        yearly: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Yearly Funding (Millions)',
                data: [25.5, 32.1, 45.8, 52.3, 68.7, 75.2],
                backgroundColor: 'rgba(99, 102, 241, 0.8)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 2,
                borderRadius: 5,
                barThickness: 20
            }]
        }
    };

    const startups = [
        {
            id: 1,
            name: "MediTech Solutions",
            sector: "Healthcare",
            stage: "Growth Stage",
            country: "India",
            state: "Gujarat",
            city: "Ahmedabad",
            zone: "West"
        },
        {
            id: 2,
            name: "EduLearn AI",
            sector: "Education",
            stage: "Early Stage",
            country: "India",
            state: "Karnataka",
            city: "Bengaluru",
            zone: "South"
        },
        {
            id: 3,
            name: "FinSecure",
            sector: "Finance",
            stage: "Mature Stage",
            country: "USA",
            state: "California",
            city: "San Francisco",
            zone: "West"
        },
        {
            id: 4,
            name: "TechCloud Solutions",
            sector: "Technology",
            stage: "Growth Stage",
            country: "India",
            state: "Maharashtra",
            city: "Mumbai",
            zone: "West"
        },
        {
            id: 5,
            name: "AgriTech Innovations",
            sector: "Others",
            stage: "Ideate Stage",
            country: "India",
            state: "Punjab",
            city: "Chandigarh",
            zone: "North"
        },
        {
            id: 6,
            name: "HealthCare Connect",
            sector: "Healthcare",
            stage: "Early Stage",
            country: "India",
            state: "Tamil Nadu",
            city: "Chennai",
            zone: "South"
        },
        {
            id: 7,
            name: "EduVR Tech",
            sector: "Education",
            stage: "Growth Stage",
            country: "USA",
            state: "Texas",
            city: "Austin",
            zone: "South"
        },
        {
            id: 8,
            name: "BlockChain Solutions",
            sector: "Technology",
            stage: "Early Stage",
            country: "India",
            state: "Telangana",
            city: "Hyderabad",
            zone: "South"
        },
        {
            id: 9,
            name: "Green Energy Tech",
            sector: "Others",
            stage: "Mature Stage",
            country: "India",
            state: "Delhi",
            city: "New Delhi",
            zone: "North"
        },
        {
            id: 10,
            name: "FinTech Pay",
            sector: "Finance",
            stage: "Growth Stage",
            country: "USA",
            state: "New York",
            city: "New York City",
            zone: "East"
        },
        {
            id: 11,
            name: "AI Research Labs",
            sector: "Technology",
            stage: "Early Stage",
            country: "India",
            state: "Karnataka",
            city: "Bengaluru",
            zone: "South"
        },
        {
            id: 12,
            name: "EduTech Solutions",
            sector: "Education",
            stage: "Ideate Stage",
            country: "India",
            state: "Maharashtra",
            city: "Pune",
            zone: "West"
        },
        {
            id: 13,
            name: "BioTech Research",
            sector: "Healthcare",
            stage: "Mature Stage",
            country: "USA",
            state: "Massachusetts",
            city: "Boston",
            zone: "East"
        },
        {
            id: 14,
            name: "Smart Manufacturing",
            sector: "Others",
            stage: "Growth Stage",
            country: "India",
            state: "Gujarat",
            city: "Vadodara",
            zone: "West"
        },
        {
            id: 15,
            name: "CryptoFinance",
            sector: "Finance",
            stage: "Early Stage",
            country: "India",
            state: "Maharashtra",
            city: "Mumbai",
            zone: "West"
        }
    ];

    // Add summary statistics
    const startupStats = {
        totalCount: startups.length,
        bySector: {
            Healthcare: startups.filter(s => s.sector === "Healthcare").length,
            Technology: startups.filter(s => s.sector === "Technology").length,
            Finance: startups.filter(s => s.sector === "Finance").length,
            Education: startups.filter(s => s.sector === "Education").length,
            Others: startups.filter(s => s.sector === "Others").length
        },
        byStage: {
            'Ideate Stage': startups.filter(s => s.stage === "Ideate Stage").length,
            'Early Stage': startups.filter(s => s.stage === "Early Stage").length,
            'Growth Stage': startups.filter(s => s.stage === "Growth Stage").length,
            'Mature Stage': startups.filter(s => s.stage === "Mature Stage").length
        },
        byRegion: {
            India: startups.filter(s => s.country === "India").length,
            USA: startups.filter(s => s.country === "USA").length
        },
        byZone: {
            North: startups.filter(s => s.zone === "North").length,
            South: startups.filter(s => s.zone === "South").length,
            East: startups.filter(s => s.zone === "East").length,
            West: startups.filter(s => s.zone === "West").length
        }
    };

    const [visibleStartups, setVisibleStartups] = useState(5);

    const handleShowMore = () => {
        setVisibleStartups(prev => prev + 5);
    };

    const handleShowLess = () => {
        setVisibleStartups(5);
    };

    // Add renderCharts function
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
                            options={chartOptions}
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
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6" className="chart-title">
                            Funding Trends
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {['weekly', 'monthly', 'yearly'].map((period) => (
                                <Button
                                    key={period}
                                    variant={timeFrame === period ? 'contained' : 'outlined'}
                                    size="small"
                                    onClick={() => setTimeFrame(period)}
                                    sx={{
                                        textTransform: 'capitalize',
                                        minWidth: '80px',
                                        backgroundColor: timeFrame === period ? 'primary.main' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: timeFrame === period ? 'primary.dark' : 'rgba(99, 102, 241, 0.08)'
                                        }
                                    }}
                                >
                                    {period}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ height: 300, position: 'relative' }}>
                        <Bar 
                            data={fundingTrendsData[timeFrame]} 
                            options={chartOptions}
                        />
                    </Box>
                </ChartCard>
            </Grid>
        </Grid>
    );

    const renderTopCards = () => (
        <Grid container spacing={3} sx={{ mb: 4 }}>
            {[
                {
                    title: 'Total Users',
                    value: dashboardData.users.startups.active + 
                           dashboardData.users.investors.active + 
                           dashboardData.users.researchers.total,
                    icon: <PeopleOutline />,
                    color: '#6366f1',
                    subtitle: 'Active platform users'
                },
                {
                    title: 'Active Startups',
                    value: dashboardData.users.startups.active,
                    icon: <Business />,
                    color: '#8b5cf6',
                    subtitle: 'Currently engaging'
                },
                {
                    title: 'Active Investors',
                    value: dashboardData.users.investors.active,
                    icon: <AccountBalance />,
                    color: '#14b8a6',
                    subtitle: 'Ready to invest'
                },
                {
                    title: 'Total Funds',
                    value: dashboardData.campaigns.funding.total,
                    icon: <MonetizationOn />,
                    color: '#f59e0b',
                    subtitle: 'Raised so far'
                }
            ].map((card, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <GlowingCard glowColor={card.color}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <CardIcon className="card-icon" sx={{ backgroundColor: `${card.color}15` }}>
                                {card.icon}
                            </CardIcon>
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">
                                    {card.title}
                                </Typography>
                                <AnimatedValue className="card-value">
                                    {typeof card.value === 'string' ? card.value : card.value.toLocaleString()}
                                </AnimatedValue>
                            </Box>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            {card.subtitle}
                        </Typography>
                    </GlowingCard>
                </Grid>
            ))}
        </Grid>
    );

    const RecentActivity = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [isAutoPlaying, setIsAutoPlaying] = useState(true);

        const activities = [
            {
                icon: <Business className="activity-icon" />,
                title: "New Startup Registration",
                time: "5 minutes ago",
                bgColor: "#F3F6FF"
            },
            {
                icon: <MonetizationOn className="activity-icon" />,
                title: "Funding Request Approved",
                time: "2 hours ago",
                bgColor: "#F0FDF4"
            },
            {
                icon: <Gavel className="activity-icon" />,
                title: "IPR Application Submitted",
                time: "4 hours ago",
                bgColor: "#FAF5FF"
            },
            {
                icon: <AccountBalance className="activity-icon" />,
                title: "New Investor Joined",
                time: "1 day ago",
                bgColor: "#FEF9C3"
            },
            {
                icon: <Feedback className="activity-icon" />,
                title: "Feedback Received",
                description: "Startup 'NextGenTech' submitted feedback about the platform UI",
                time: "3 hours ago",
                bgColor: "#F0F9FF"
            },
            {
                icon: <SupportAgent className="activity-icon" />,
                title: "Support Ticket Raised",
                description: "Startup 'AgriFuture' raised a ticket regarding grant application delays",
                time: "6 hours ago",
                bgColor: "#FFF1F2"
            },
            {
                icon: <Security className="activity-icon" />,
                title: "Security Alert",
                description: "Suspicious login detected for Startup 'TechPioneers' account",
                time: "30 minutes ago",
                bgColor: "#FEF2F2"
            },
            {
                icon: <Engineering className="activity-icon" />,
                title: "System Maintenance",
                description: "Scheduled downtime completed successfully on December 1, 2024",
                time: "1 day ago",
                bgColor: "#F0F9FF"
            }
        ];

        // Auto-play functionality
        useEffect(() => {
            let interval;
            if (isAutoPlaying) {
                interval = setInterval(() => {
                    setCurrentSlide((prev) => (prev + 1) % activities.length);
                }, 3000);
            }
            return () => clearInterval(interval);
        }, [isAutoPlaying, activities.length]);

        const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % activities.length);
        };

        const prevSlide = () => {
            setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
        };

        const goToSlide = (index) => {
            setCurrentSlide(index);
        };

        return (
            <div className="recent-activity-container">
                <h2 className="activity-title">Recent Activity</h2>
                <div className="title-underline">
                    <div className="line-gradient"></div>
                </div>
                
                <div className="carousel-wrapper">
                    <button className="nav-button prev" onClick={prevSlide}>
                        <span>‹</span>
                    </button>
                    
                    <div className="carousel-content">
                        <div 
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`
                            }}
                        >
                            {activities.map((activity, index) => (
                                <div 
                                    key={index}
                                    className="activity-slide"
                                    style={{ backgroundColor: activity.bgColor }}
                                >
                                    <div className="activity-icon-wrapper">
                                        {activity.icon}
                                    </div>
                                    <div className="activity-info">
                                        <h3>{activity.title}</h3>
                                        <span className="activity-time">{activity.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="nav-button next" onClick={nextSlide}>
                        <span>›</span>
                    </button>
                </div>

                <div className="carousel-indicators">
                    {activities.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        );
    };

    // Add this data near your other state declarations
    const [industryData] = useState({
        daily: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Dairy Industry',
                    data: [320, 350, 345, 360, 375, 380, 395],
                    borderColor: 'rgba(99, 102, 241, 1)',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    fill: true
                },
                {
                    label: 'Textile Industry',
                    data: [280, 290, 285, 295, 300, 310, 315],
                    borderColor: 'rgba(16, 185, 129, 1)',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    fill: true
                },
                {
                    label: 'Chemical Industry',
                    data: [420, 435, 430, 445, 460, 465, 480],
                    borderColor: 'rgba(245, 158, 11, 1)',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    fill: true
                }
            ]
        },
        weekly: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Dairy Production (tons)',
                    data: [1200, 1250, 1300, 1350],
                    backgroundColor: 'rgba(99, 102, 241, 0.8)',
                    borderRadius: 5
                },
                {
                    label: 'Textile Production (units)',
                    data: [950, 1000, 1050, 1100],
                    backgroundColor: 'rgba(16, 185, 129, 0.8)',
                    borderRadius: 5
                }
            ]
        },
        monthly: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Renewable Energy (MWh)',
                    data: [5000, 5200, 5400, 5600, 5800, 6000],
                    backgroundColor: 'rgba(99, 102, 241, 0.8)',
                    borderRadius: 5
                },
                {
                    label: 'Chemical Industry (MWh)',
                    data: [7000, 7200, 7400, 7600, 7800, 8000],
                    backgroundColor: 'rgba(245, 158, 11, 0.8)',
                    borderRadius: 5
                }
            ]
        },
        yearly: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [
                {
                    label: 'Ports & Logistics Growth (%)',
                    data: [15, 18, 22, 25, 30],
                    borderColor: 'rgba(99, 102, 241, 1)',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Other Industries Growth (%)',
                    data: [12, 14, 16, 19, 22],
                    borderColor: 'rgba(245, 158, 11, 1)',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    tension: 0.4
                }
            ]
        }
    });

    // Add this function to render the industry trends
    const renderIndustryTrends = () => (
        <div className="industry-trends-section">
            <Typography variant="h5" className="section-title" sx={{ mb: 3 }}>
                Gujarat Industry Trends
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <ChartCard>
                        <Typography variant="h6" className="chart-title">
                            Daily Revenue Trends
                        </Typography>
                        <Box sx={{ height: 300 }}>
                            <Line 
                                data={industryData.daily}
                                options={{
                                    ...industryChartOptions,
                                    plugins: {
                                        ...industryChartOptions.plugins,
                                        title: {
                                            display: true,
                                            text: 'Past Week Revenue'
                                        }
                                    }
                                }}
                            />
                        </Box>
                    </ChartCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ChartCard>
                        <Typography variant="h6" className="chart-title">
                            Weekly Production Output
                        </Typography>
                        <Box sx={{ height: 300 }}>
                            <Bar 
                                data={industryData.weekly}
                                options={{
                                    ...industryChartOptions,
                                    plugins: {
                                        ...industryChartOptions.plugins,
                                        title: {
                                            display: true,
                                            text: 'Dairy vs Textile Production'
                                        }
                                    }
                                }}
                            />
                        </Box>
                    </ChartCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ChartCard>
                        <Typography variant="h6" className="chart-title">
                            Monthly Energy Consumption
                        </Typography>
                        <Box sx={{ height: 300 }}>
                            <Bar 
                                data={industryData.monthly}
                                options={{
                                    ...industryChartOptions,
                                    plugins: {
                                        ...industryChartOptions.plugins,
                                        title: {
                                            display: true,
                                            text: 'Energy Consumption by Industry'
                                        }
                                    },
                                    scales: {
                                        x: { stacked: true },
                                        y: { stacked: true }
                                    }
                                }}
                            />
                        </Box>
                    </ChartCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ChartCard>
                        <Typography variant="h6" className="chart-title">
                            Yearly Revenue Growth
                        </Typography>
                        <Box sx={{ height: 300 }}>
                            <Line 
                                data={industryData.yearly}
                                options={{
                                    ...industryChartOptions,
                                    plugins: {
                                        ...industryChartOptions.plugins,
                                        title: {
                                            display: true,
                                            text: 'Industry Growth Comparison'
                                        }
                                    }
                                }}
                            />
                        </Box>
                    </ChartCard>
                </Grid>
            </Grid>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                {selectedMenu === 'dashboard' && (
                    <Container maxWidth="xl">
                        {renderTopCards()}
                        {renderCharts()}
                        <div className="dashboard">
                            <div className="table-section">
                                <h2 className="table-title">Total Startups Registered</h2>
                                <div className="table-container">
                                    <table className="startups-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Sector</th>
                                                <th>Stage</th>
                                                <th>Country</th>
                                                <th>State</th>
                                                <th>City</th>
                                                <th>Zone</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {startups.slice(0, visibleStartups).map(startup => (
                                                <tr key={startup.id}>
                                                    <td>{startup.name}</td>
                                                    <td>{startup.sector}</td>
                                                    <td>{startup.stage}</td>
                                                    <td>{startup.country}</td>
                                                    <td>{startup.state}</td>
                                                    <td>{startup.city}</td>
                                                    <td>{startup.zone}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {visibleStartups < startups.length ? (
                                    <button className="more-btn" onClick={handleShowMore}>
                                        More
                                    </button>
                                ) : (
                                    <button className="less-btn" onClick={handleShowLess}>
                                        Less
                                    </button>
                                )}
                            </div>
                        </div>
                        {renderIndustryTrends()}
                    </Container>
                )}
            </Box>
        </Box>
    );
};

const GlowingCard = styled(Card)(({ theme, glowColor = '#6366f1' }) => ({
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '24px',
    transition: 'all 0.3s ease-in-out',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '16px',
        padding: '2px',
        background: `linear-gradient(45deg, transparent, ${glowColor}, transparent)`,
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
    },

    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: `0 8px 25px ${glowColor}25`,
        '&:before': {
            opacity: 1,
        },
        '& .card-icon': {
            transform: 'scale(1.1) rotate(5deg)',
            background: glowColor,
            '& svg': {
                color: 'white',
            },
        },
        '& .card-value': {
            color: glowColor,
            transform: 'scale(1.05)',
        },
    },
}));

const AnimatedValue = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 700,
    transition: 'all 0.3s ease-in-out',
    background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}));

const ActivityLog = styled(Box)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '16px',
    padding: '20px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 30px rgba(99, 102, 241, 0.1)',
    }
}));

const LogItem = styled(ListItem)(({ theme }) => ({
    borderRadius: '8px',
    marginBottom: '8px',
    transition: 'all 0.2s ease',
    '&:hover': {
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        transform: 'translateX(5px)',
    }
}));

// Update the styles
const styles = `
    .dashboard {
        padding: 2rem;
        max-width: 100%;
        box-sizing: border-box;
    }

    .table-section {
        margin: 2rem 0;
    }

    .table-title {
        font-size: 1.75rem;
        color: #1e2f4d;
        margin-bottom: 1.5rem;
        font-weight: 600;
        padding-left: 0.5rem;
    }

    .table-container {
        overflow-x: auto;
        background: white;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .startups-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        min-width: 800px;
    }

    .startups-table th,
    .startups-table td {
        padding: 12px 16px;
        text-align: left;
        border-bottom: 1px solid #E5E7EB;
    }

    .startups-table th {
        background-color: #F9FAFB;
        font-weight: 600;
        color: #374151;
        position: sticky;
        top: 0;
    }

    .startups-table th:first-child,
    .startups-table td:first-child {
        padding-left: 24px;
    }

    .startups-table th:last-child,
    .startups-table td:last-child {
        padding-right: 24px;
    }

    .startups-table tr:nth-child(even) {
        background-color: #F9FAFB;
    }

    .startups-table tr:hover {
        background-color: #F3F4F6;
    }

    /* Fixed column widths */
    .startups-table th:nth-child(1) { width: 20%; } /* Name */
    .startups-table th:nth-child(2) { width: 15%; } /* Sector */
    .startups-table th:nth-child(3) { width: 15%; } /* Stage */
    .startups-table th:nth-child(4) { width: 12%; } /* Country */
    .startups-table th:nth-child(5) { width: 15%; } /* State */
    .startups-table th:nth-child(6) { width: 13%; } /* City */
    .startups-table th:nth-child(7) { width: 10%; } /* Zone */

    .more-btn, .less-btn {
        margin-top: 1rem;
        padding: 0.5rem 1.5rem;
        background-color: #4F46E5;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        transition: background-color 0.2s ease;
    }

    .more-btn:hover, .less-btn:hover {
        background-color: #4338CA;
    }

    @media (max-width: 768px) {
        .table-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .startups-table th, 
        .startups-table td {
            padding: 8px 12px;
        }
    }

    .security-alert {
        border-left: 4px solid #DC2626;
    }

    .activity-icon-wrapper .activity-icon {
        font-size: 24px;
        color: #4B5563;
    }

    .security-alert .activity-icon {
        color: #DC2626;
    }

    @media (min-width: 768px) {
        .activity-track {
            grid-template-columns: repeat(8, 1fr); /* Updated to show all 8 activities */
        }
    }

    /* Add animation for security alerts */
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }

    .security-alert {
        animation: pulse 2s infinite;
    }

    .recent-activity-container {
        max-width: 800px;
        margin: 2rem auto;
        padding: 0 1rem;
    }

    .activity-title {
        font-size: 2.5rem;
        color: #1e2f4d;
        text-align: center;
        margin-bottom: 0.5rem;
        font-weight: 600;
    }

    .title-underline {
        position: relative;
        height: 2px;
        margin-bottom: 2rem;
    }

    .line-gradient {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #e9d5ff, #e11d48, #e9d5ff);
    }

    .carousel-wrapper {
        position: relative;
        padding: 0 40px;
        margin: 2rem 0;
    }

    .carousel-content {
        overflow: hidden;
        border-radius: 16px;
    }

    .carousel-track {
        display: flex;
        transition: transform 0.5s ease;
    }

    .activity-slide {
        flex: 0 0 100%;
        padding: 2rem;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        background-color: #fef9c3;
        border-radius: 16px;
        min-height: 100px;
    }

    .activity-icon-wrapper {
        background: white;
        padding: 12px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .activity-icon-wrapper svg {
        font-size: 24px;
        color: #4b5563;
    }

    .activity-info h3 {
        font-size: 1.25rem;
        color: #1e2f4d;
        margin: 0 0 0.5rem 0;
        font-weight: 500;
    }

    .activity-time {
        font-size: 0.875rem;
        color: #6b7280;
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: white;
        border: none;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: #4b5563;
        z-index: 2;
    }

    .nav-button.prev {
        left: 0;
    }

    .nav-button.next {
        right: 0;
    }

    .carousel-indicators {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 1.5rem;
    }

    .indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: none;
        background-color: #d1d5db;
        cursor: pointer;
        padding: 0;
        transition: all 0.3s ease;
    }

    .indicator.active {
        background-color: #4f46e5;
        transform: scale(1.2);
    }

    @media (max-width: 640px) {
        .activity-title {
            font-size: 2rem;
        }

        .activity-slide {
            padding: 1.5rem;
        }

        .nav-button {
            width: 32px;
            height: 32px;
            font-size: 1.25rem;
        }
    }

    .industry-trends-section {
        margin-top: 3rem;
        padding: 2rem;
        background: white;
        border-radius: 16px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    .section-title {
        color: #1e293b;
        font-weight: 600;
        position: relative;
        padding-bottom: 0.5rem;
        margin-bottom: 2rem;
    }

    .section-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 3px;
        background: linear-gradient(to right, #6366f1, #8b5cf6);
        border-radius: 3px;
    }

    .chart-container {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        height: 100%;
        transition: transform 0.3s ease;
    }

    .chart-container:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        .industry-trends-section {
            padding: 1rem;
        }
        
        .section-title {
            font-size: 1.5rem;
        }
    }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default AdminDashboard;