import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, LinearProgress } from '@mui/material';
import innovationImage from '../assets/images/innovation.jpeg';
import gujaratBg from '../assets/images/Gujaratpicture.jpg';
import styled from '@emotion/styled';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useNavigate } from 'react-router-dom';

// Define ActionButton component
const ActionButton = styled(Button)`
    padding: 12px 36px;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 8px;
    text-transform: none;
    transition: all 0.3s ease;
    margin-right: 16px;
    
    &.primary {
        background: #00A3FF;
        color: white;
        &:hover {
            background: #0088D1;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 163, 255, 0.3);
        }
    }
    
    &.secondary {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        backdrop-filter: blur(10px);
        &:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
        }
    }
`;

// New styled components
const StatsCard = styled(Card)`
    background: rgba(255, 255, 255, 0.03);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid rgba(148, 112, 248, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        border-color: #C2FA4F;
    }
`;

const GradientText = styled(Typography)`
    background: linear-gradient(90deg, #9470F8 0%, #C2FA4F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

function Innovations() {
    const navigate = useNavigate();

    return (
        <Box sx={{
            minHeight: '100vh',
            position: 'relative',
            backgroundColor: '#0B0910',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${gujaratBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.1,
                zIndex: 0,
                filter: 'hue-rotate(240deg) saturate(1.5)'
            }
        }}>
            {/* Top gradient bar */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '8px',
                    background: 'linear-gradient(90deg, #9470F8 0%, #C2FA4F 100%)',
                    zIndex: 4
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, pt: 8, pb: 4 }}>
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 6,
                    mb: 8,
                    flexDirection: { xs: 'column', md: 'row' }
                }}>
                    {/* Quote Section */}
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                color: '#FFFFFF',
                                fontFamily: 'Raleway, sans-serif',
                                fontWeight: 700,
                                fontSize: { xs: '2rem', md: '3rem' },
                                lineHeight: 1.2,
                                mb: 2
                            }}
                        >
                            Take your ideas from
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                color: '#C2FA4F',
                                fontFamily: 'Raleway, sans-serif',
                                fontWeight: 700,
                                fontSize: { xs: '2rem', md: '3rem' },
                                lineHeight: 1.2,
                                mb: 4
                            }}
                        >
                            CONCEPT TO CREATION
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontSize: '1.1rem',
                                lineHeight: 1.6,
                                mb: 4,
                                maxWidth: '600px'
                            }}
                        >
                            Transform your innovative ideas into reality with our comprehensive 
                            support system. Connect with mentors, access resources, and bring 
                            your vision to life in Gujarat's thriving startup ecosystem.
                        </Typography>

                        {/* Action Buttons moved here */}
                        <Box sx={{ 
                            display: 'flex', 
                            gap: 2, 
                            mb: 4
                        }}>
                            <ActionButton className="primary">
                                Innovate
                            </ActionButton>
                            <ActionButton className="secondary">
                                PROJECTS
                            </ActionButton>
                        </Box>
                    </Box>

                    {/* Image Section */}
                    <Box sx={{ flex: 1 }}>
                        <img
                            src={innovationImage}
                            alt="Innovation"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                            }}
                        />
                    </Box>
                </Box>

                {/* Title Section */}
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        mb: 2,
                        position: 'relative',
                        textShadow: '0 0 20px rgba(148, 112, 248, 0.5)',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60px',
                            height: '4px',
                            background: '#C2FA4F'
                        }
                    }}
                >
                    Innovation Support
                </Typography>

                {/* Overview Box */}
                <Box
                    sx={{
                        background: 'rgba(148, 112, 248, 0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(148, 112, 248, 0.1)',
                        padding: { xs: 3, md: 5 },
                        marginBottom: 8,
                        position: 'relative',
                        overflow: 'hidden',
                        textAlign: 'center',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '2px',
                            background: 'linear-gradient(90deg, #9470F8 0%, #C2FA4F 100%)',
                            opacity: 0.5
                        }
                    }}
                >
                    <Grid container spacing={4}>
                        {[
                            { 
                                icon: '💡', 
                                title: 'Ideation Support',
                                description: 'Get expert guidance to refine and validate your innovative ideas.',
                                gradient: 'linear-gradient(135deg, #9470F8 0%, #6544C4 100%)'
                            },
                            { 
                                icon: '🔧', 
                                title: 'Technical Resources',
                                description: 'Access state-of-the-art tools and technologies for development.',
                                gradient: 'linear-gradient(135deg, #C2FA4F 0%, #9BCD3D 100%)'
                            },
                            { 
                                icon: '🤝', 
                                title: 'Mentorship',
                                description: 'Connect with experienced mentors who guide your journey.',
                                gradient: 'linear-gradient(135deg, #9470F8 0%, #AE63F0 100%)'
                            },
                            { 
                                icon: '���', 
                                title: 'Launch Support',
                                description: 'Get comprehensive support to launch your innovation successfully.',
                                gradient: 'linear-gradient(135deg, #C2FA4F 0%, #9BCD3D 100%)'
                            }
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Box
                                    sx={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        borderRadius: '16px',
                                        padding: '24px',
                                        border: '1px solid rgba(148, 112, 248, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 30px rgba(148, 112, 248, 0.1)',
                                            borderColor: 'rgba(148, 112, 248, 0.3)',
                                            background: 'rgba(255, 255, 255, 0.05)'
                                        }
                                    }}
                                >
                                    <Typography sx={{ fontSize: '2rem', mb: 2 }}>
                                        {item.icon}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#C2FA4F',
                                            mb: 2,
                                            fontWeight: 600
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            fontSize: '0.9rem',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Achievements Section */}
                <Box sx={{ mt: 12 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: '#FFFFFF',
                            textAlign: 'center',
                            mb: 6,
                            fontWeight: 600
                        }}
                    >
                        Our Achievements
                    </Typography>

                    <Grid container spacing={4}>
                        {[
                            {
                                icon: <TimelineIcon sx={{ fontSize: 40, color: '#C2FA4F' }} />,
                                stat: '85%',
                                label: 'Success Rate',
                                progress: 85
                            },
                            {
                                icon: <GroupsIcon sx={{ fontSize: 40, color: '#C2FA4F' }} />,
                                stat: '500+',
                                label: 'Active Innovators',
                                progress: 75
                            },
                            {
                                icon: <RocketLaunchIcon sx={{ fontSize: 40, color: '#C2FA4F' }} />,
                                stat: '200+',
                                label: 'Projects Launched',
                                progress: 65
                            },
                            {
                                icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#C2FA4F' }} />,
                                stat: '₹50Cr+',
                                label: 'Funding Raised',
                                progress: 90
                            }
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <StatsCard>
                                    {item.icon}
                                    <GradientText variant="h3" sx={{ my: 2, fontWeight: 700 }}>
                                        {item.stat}
                                    </GradientText>
                                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                                        {item.label}
                                    </Typography>
                                    <LinearProgress 
                                        variant="determinate" 
                                        value={item.progress}
                                        sx={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            '& .MuiLinearProgress-bar': {
                                                background: 'linear-gradient(90deg, #9470F8 0%, #C2FA4F 100%)'
                                            }
                                        }}
                                    />
                                </StatsCard>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Benefits Section */}
                    <Box sx={{ mt: 12 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: '#FFFFFF',
                                textAlign: 'center',
                                mb: 6,
                                fontWeight: 600
                            }}
                        >
                            Benefits for Gujarat
                        </Typography>

                        <Grid container spacing={4}>
                            {[
                                {
                                    title: 'For Citizens',
                                    points: [
                                        'Faster services delivery',
                                        'Improved transparency',
                                        'Better resource access',
                                        'Enhanced quality of life'
                                    ]
                                },
                                {
                                    title: 'For Businesses',
                                    points: [
                                        'Innovation challenges',
                                        'Public-private partnerships',
                                        'Market access',
                                        'Growth opportunities'
                                    ]
                                },
                                {
                                    title: 'For Government',
                                    points: [
                                        'Streamlined governance',
                                        'Efficient problem-solving',
                                        'Public participation',
                                        'Data-driven decisions'
                                    ]
                                }
                            ].map((section, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Box
                                        sx={{
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            borderRadius: '16px',
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid rgba(148, 112, 248, 0.1)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                borderColor: '#C2FA4F'
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: '#C2FA4F',
                                                mb: 3,
                                                fontWeight: 600
                                            }}
                                        >
                                            {section.title}
                                        </Typography>
                                        {section.points.map((point, idx) => (
                                            <Box
                                                key={idx}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    mb: 2,
                                                    gap: 2
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: '50%',
                                                        background: '#C2FA4F'
                                                    }}
                                                />
                                                <Typography
                                                    sx={{
                                                        color: 'rgba(255,255,255,0.7)'
                                                    }}
                                                >
                                                    {point}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Call for Participation */}
                    <Box
                        sx={{
                            mt: 12,
                            background: 'linear-gradient(135deg, rgba(148, 112, 248, 0.1) 0%, rgba(194, 250, 79, 0.1) 100%)',
                            borderRadius: '24px',
                            p: 6,
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                color: '#FFFFFF',
                                mb: 3,
                                fontWeight: 600
                            }}
                        >
                            Join the Innovation Movement
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgba(255,255,255,0.7)',
                                mb: 4,
                                maxWidth: '800px',
                                mx: 'auto'
                            }}
                        >
                            Be part of Gujarat's innovation journey. Whether you're a startup, 
                            educational institution, or local innovator, your ideas can shape 
                            the future of our state.
                        </Typography>
                        <ActionButton 
                            className="primary"
                            onClick={() => navigate('/research')}
                        >
                            Start Innovating Today
                        </ActionButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Innovations;
