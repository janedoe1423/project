import React, { useState, useEffect } from 'react';
import { 
    Container, 
    Grid, 
    Card, 
    CardContent, 
    Typography,
    Box,
    Button
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import './startup_dashboard.css';
import StartupMetricsDashboard from './startup_metrics';

const StartupDashboard = () => {
    const [metrics, setMetrics] = useState([
        {
            title: 'Growth Rate',
            value: '78%',
            trend: '+12%',
            icon: <TrendingUpIcon />,
            gradient: 'var(--purple-gradient)',
            description: 'Month over month growth'
        },
        {
            title: 'Revenue',
            value: '$125K',
            trend: '+25%',
            icon: <MonetizationOnIcon />,
            gradient: 'var(--red-gradient)',
            description: 'Total monthly revenue'
        },
        {
            title: 'User Base',
            value: '12,456',
            trend: '+18%',
            icon: <GroupIcon />,
            gradient: 'var(--green-gradient)',
            description: 'Active users this month'
        },
        {
            title: 'Market Share',
            value: '34%',
            trend: '+5%',
            icon: <ShowChartIcon />,
            gradient: 'var(--blue-gradient)',
            description: 'Current market position'
        }
    ]);

    const [graphData, setGraphData] = useState(null);

    // Function to update metrics based on graph changes
    const updateMetrics = (newGraphData) => {
        const updatedMetrics = metrics.map(metric => {
            switch(metric.title) {
                case 'Growth Rate':
                    return {
                        ...metric,
                        value: `${newGraphData.growth}%`,
                        trend: `${newGraphData.growthChange}%`
                    };
                case 'Revenue':
                    return {
                        ...metric,
                        value: `$${newGraphData.revenue}K`,
                        trend: `${newGraphData.revenueChange}%`
                    };
                case 'User Base':
                    return {
                        ...metric,
                        value: newGraphData.users.toLocaleString(),
                        trend: `${newGraphData.userGrowth}%`
                    };
                case 'Market Share':
                    return {
                        ...metric,
                        value: `${newGraphData.marketShare}%`,
                        trend: `${newGraphData.marketShareChange}%`
                    };
                default:
                    return metric;
            }
        });
        setMetrics(updatedMetrics);
    };

    // Handle graph data changes
    const handleGraphChange = (newData) => {
        setGraphData(newData);
        updateMetrics(newData);
    };

    return (
        <>
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Typography 
                variant="h4" 
                className="startup-dashboard-title"
                sx={{ 
                    mb: 4, 
                    color: 'var(--text-primary)', 
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    textAlign: 'center',
                    fontSize: { xs: '1.8rem', md: '2.2rem' }
                }}
            >
                Startup Metrics Dashboard
            </Typography>
            
            <Grid container spacing={4}>
                {metrics.map((card, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card 
                            className="startup-dashboard-metric-card"
                            sx={{ 
                                background: card.gradient,
                                minHeight: 220,
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '16px'
                            }}
                        >
                            <CardContent>
                                {/* Header with enhanced styling */}
                                <Box sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center', 
                                    mb: 3 
                                }}>
                                    <Typography 
                                        variant="h6" 
                                        sx={{ 
                                            color: '#fff',
                                            fontSize: '1.2rem',
                                            fontWeight: 600,
                                            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        {card.title}
                                    </Typography>
                                    <Box 
                                        sx={{ 
                                            backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                            borderRadius: '12px',
                                            p: 1.2,
                                            display: 'flex',
                                            backdropFilter: 'blur(4px)'
                                        }}
                                    >
                                        {React.cloneElement(card.icon, { 
                                            sx: { color: '#fff', fontSize: 32 } 
                                        })}
                                    </Box>
                                </Box>

                                {/* Value with enhanced styling */}
                                <Typography 
                                    variant="h4" 
                                    sx={{ 
                                        color: '#fff',
                                        fontWeight: 800,
                                        mb: 1,
                                        fontSize: '2.2rem',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    {card.value}
                                </Typography>

                                {/* Description in glass container */}
                                <Box className="startup-dashboard-metric-card-content">
                                    <Typography 
                                        variant="body2" 
                                        sx={{ 
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            mb: 2,
                                            fontSize: '0.95rem',
                                            fontWeight: 500
                                        }}
                                    >
                                        {card.description}
                                    </Typography>

                                    {/* Trend indicator */}
                                    <Box 
                                        sx={{ 
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                            p: 1,
                                            borderRadius: '8px',
                                            width: 'fit-content'
                                        }}
                                    >
                                        <Typography 
                                            variant="body2" 
                                            sx={{ 
                                                color: '#fff',
                                                fontWeight: 600
                                            }}
                                        >
                                            {card.trend}
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            sx={{ 
                                                color: 'rgba(255, 255, 255, 0.9)'
                                            }}
                                        >
                                            vs last month
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </Container>
            <StartupMetricsDashboard 
                onDataChange={handleGraphChange}
                initialData={graphData}
            />
        </>
    );
};

export default StartupDashboard;