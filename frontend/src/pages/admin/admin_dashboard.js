import React, { useState } from 'react';
import {
    Container, Grid, Card, Typography, Box,
    LinearProgress, IconButton, Tooltip, Tabs, Tab,
    styled, keyframes, CircularProgress, List, ListItem, 
    ListItemAvatar, ListItemText, Avatar,
    Drawer, AppBar, Toolbar
} from '@mui/material';
import {
    PeopleOutline, Campaign, GavelOutlined,
    TrendingUp, NotificationsActive, MonetizationOn,
    Business, AccountBalance, Gavel, AttachMoney,
    Dashboard, People, Assignment, Notifications,
    Assessment, Menu as MenuIcon
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

    const fundingTrendsData = {
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
                    <Typography variant="h6" className="chart-title" sx={{ mb: 2 }}>
                        Monthly Funding Trends
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

    const renderActivityLog = () => (
        <ActivityLog>
            <Typography variant="h6" sx={{ mb: 3 }}>Recent Activity</Typography>
            <List>
                {[
                    { action: 'New Startup Registration', time: '5 minutes ago', icon: <Business sx={{ color: '#6366f1' }} /> },
                    { action: 'Funding Request Approved', time: '2 hours ago', icon: <AttachMoney sx={{ color: '#14b8a6' }} /> },
                    { action: 'IPR Application Submitted', time: '4 hours ago', icon: <Gavel sx={{ color: '#8b5cf6' }} /> },
                    { action: 'New Investor Joined', time: '1 day ago', icon: <AccountBalance sx={{ color: '#f59e0b' }} /> }
                ].map((item, index) => (
                    <LogItem key={index}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)' }}>
                                {item.icon}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary={item.action}
                            secondary={item.time}
                            primaryTypographyProps={{ fontWeight: 500 }}
                        />
                    </LogItem>
                ))}
            </List>
        </ActivityLog>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                {selectedMenu === 'dashboard' && (
                    <Container maxWidth="xl">
                        {renderTopCards()}
                        {renderCharts()}
                        <Grid container spacing={3} sx={{ mt: 3 }}>
                            <Grid item xs={12} md={6}>
                                {renderActivityLog()}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {/* Add your Top Campaigns component here */}
                            </Grid>
                        </Grid>
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

export default AdminDashboard;