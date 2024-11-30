import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import innovationImage from '../assets/images/innovation.jpeg';
import gujaratBg from '../assets/images/Gujaratpicture.jpg';
import styled from '@emotion/styled';

// Styled components matching Investors.js style
const FeatureCard = styled(Box)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid rgba(148, 112, 248, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
    
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 30px rgba(148, 112, 248, 0.1)',
        borderColor: 'rgba(148, 112, 248, 0.3)',
        background: 'rgba(255, 255, 255, 0.05)'
    }
}));

function Innovations() {
    const features = [
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
            icon: '🚀', 
            title: 'Launch Support',
            description: 'Get comprehensive support to launch your innovation successfully.',
            gradient: 'linear-gradient(135deg, #C2FA4F 0%, #9BCD3D 100%)'
        }
    ];

    return (
        <Box sx={{ 
            minHeight: '100vh',
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${gujaratBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.15,
                zIndex: 0
            },
            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, #0B0910 0%, #1A1424 100%)',
                opacity: 0.9,
                zIndex: 1
            }
        }}>
            <Container 
                maxWidth="lg" 
                sx={{ 
                    position: 'relative',
                    zIndex: 2,
                    pt: 12,
                    pb: 6
                }}
            >
                {/* Hero Section */}
                <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 6,
                    mb: 8
                }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h2" sx={{
                            color: '#FFFFFF',
                            fontWeight: 700,
                            mb: 2,
                            fontFamily: 'Raleway, sans-serif',
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            textShadow: '0 0 20px rgba(148, 112, 248, 0.5)',
                        }}>
                            Take your ideas from
                            <span style={{ color: '#C2FA4F', display: 'block' }}>
                                CONCEPT TO CREATION
                            </span>
                        </Typography>

                        <Typography sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            mb: 4,
                            fontSize: '1.1rem',
                            lineHeight: 1.6
                        }}>
                            Transform your innovative ideas into reality with our comprehensive 
                            support system. Connect with mentors, access resources, and bring 
                            your vision to life in Gujarat's thriving startup ecosystem.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#C2FA4F',
                                    color: '#0B0910',
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    '&:hover': {
                                        bgcolor: '#9470F8',
                                        color: '#FFFFFF'
                                    }
                                }}
                            >
                                Get Started
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: '#FFFFFF',
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    '&:hover': {
                                        borderColor: '#C2FA4F',
                                        color: '#C2FA4F'
                                    }
                                }}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ 
                        flex: 1,
                        position: 'relative',
                        height: { xs: '300px', md: '500px' },
                        width: '100%',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(45deg, rgba(148, 112, 248, 0.3), rgba(194, 250, 79, 0.3))',
                            zIndex: 1
                        }
                    }}>
                        <Box
                            component="img"
                            src={innovationImage}
                            alt="Innovation Concept"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.8)',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
                            }}
                        />
                    </Box>
                </Box>

                {/* Features Section */}
                <Box sx={{ mb: 8 }}>
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

                    <Grid container spacing={3} sx={{ mt: 4 }}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <FeatureCard>
                                    <Typography sx={{ fontSize: '2rem', mb: 2 }}>
                                        {feature.icon}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#C2FA4F',
                                            mb: 2,
                                            fontWeight: 600
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            fontSize: '0.9rem',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </FeatureCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Innovations;
