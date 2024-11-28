import React, { useState } from 'react';
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
    const metricCards = [
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
    ];

    return (
        <>
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Typography 
                variant="h4" 
                className="dashboard-title"
                sx={{ mb: 4, color: 'var(--text-primary)', fontWeight: 600 }}
            >
                Startup Metrics Dashboard
            </Typography>
            
            <Grid container spacing={3}>
                {metricCards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card 
                            className="metric-card"
                            sx={{ 
                                background: card.gradient,
                                minHeight: 200,
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <CardContent>
                                {/* Header */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                    <Typography 
                                        variant="h6" 
                                        sx={{ 
                                            color: '#fff',
                                            fontSize: '1.1rem',
                                            fontWeight: 500
                                        }}
                                    >
                                        {card.title}
                                    </Typography>
                                    <Box 
                                        sx={{ 
                                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                            borderRadius: '50%',
                                            p: 1,
                                            display: 'flex'
                                        }}
                                    >
                                        {React.cloneElement(card.icon, { 
                                            sx: { color: '#fff', fontSize: 28 } 
                                        })}
                                    </Box>
                                </Box>

                                {/* Value */}
                                <Typography 
                                    variant="h4" 
                                    sx={{ 
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        mb: 1
                                    }}
                                >
                                    {card.value}
                                </Typography>

                                {/* Description */}
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        mb: 2,
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    {card.description}
                                </Typography>

                                {/* Trend */}
                                <Box 
                                    sx={{ 
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        p: 1,
                                        borderRadius: 1,
                                        width: 'fit-content'
                                    }}
                                >
                                    <Typography 
                                        variant="body2" 
                                        sx={{ 
                                            color: '#fff',
                                            fontWeight: 500
                                        }}
                                    >
                                        {card.trend}
                                    </Typography>
                                    <Typography 
                                        variant="body2" 
                                        sx={{ 
                                            color: 'rgba(255, 255, 255, 0.8)'
                                        }}
                                    >
                                        vs last month
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </Container>
            <StartupMetricsDashboard />
        </>
    );
};

export default StartupDashboard;