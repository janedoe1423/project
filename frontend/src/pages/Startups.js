import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Container, Typography, CircularProgress } from '@mui/material';
import gujaratBg from '../assets/images/Gujaratpicture.jpg';

function Startup() {
    const [startups, setStartups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch startups data from your API
        fetchStartups();
    }, []);

    const fetchStartups = async () => {
        try {
            const response = await fetch('your-api-endpoint/startups');
            const data = await response.json();
            setStartups(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching startups:', error);
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                position: 'relative',
                backgroundColor: '#f8f9fa',
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
                    opacity: 0.15,
                    zIndex: 0,
                    filter: 'saturate(1.2)'
                },
                '&::after': {
                    content: '""',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                     zIndex: 1
                }
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '8px',
                    background: 'linear-gradient(90deg, #FF9933 33.33%, #FFFFFF 33.33%, #FFFFFF 66.66%, #138808 66.66%)',
                    zIndex: 4
                }}
            />

            <Box
                sx={{
                    position: 'fixed',
                    top: '10%',
                    right: '5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(19,136,8,0.03) 0%, rgba(255,153,51,0.03) 100%)',
                    zIndex: 2
                }}
            />

            <Box
                sx={{
                    position: 'fixed',
                    top: '20%',
                    left: 0,
                    width: '100px',
                    height: '80%',
                    background: 'linear-gradient(180deg, rgba(19,136,8,0.02) 0%, rgba(255,153,51,0.02) 100%)',
                    clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)',
                    zIndex: 2
                }}
            />

            <Container 
                maxWidth="lg" 
                sx={{ 
                    position: 'relative',
                    zIndex: 3,
                    pt: 8,
                    pb: 8
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        color: '#1a237e',
                        fontWeight: 700,
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        mb: 6,
                        position: 'relative',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60px',
                            height: '4px',
                            background: '#FF9933'
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60px',
                            height: '4px',
                            background: '#138808'
                        }
                    }}
                >
                    Startup Listings
                </Typography>

                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <CircularProgress sx={{ color: '#8B1EA7' }} />
                    </Box>
                ) : (
                    <div className="row g-4">
                        {startups.map((startup) => (
                            <div key={startup.id} className="col-md-3">
                                <div 
                                    className="card"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.9)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '15px',
                                        border: '1px solid rgba(139, 30, 167, 0.1)',
                                        boxShadow: '0 4px 20px rgba(139, 30, 167, 0.05)',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 30, 167, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 30, 167, 0.05)';
                                    }}
                                >
                                    <img 
                                        src={startup.imageUrl} 
                                        alt={startup.name}
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <div className="card-body p-4">
                                        <h5 
                                            style={{
                                                color: '#8B1EA7',
                                                fontSize: '1.25rem',
                                                fontWeight: '600',
                                                marginBottom: '1rem'
                                            }}
                                        >
                                            {startup.name}
                                        </h5>
                                        <p style={{ 
                                            margin: '0.5rem 0',
                                            color: '#666'
                                        }}>
                                            <strong>Founder:</strong> {startup.founder}
                                        </p>
                                        <p style={{ 
                                            margin: '0.5rem 0 1.5rem',
                                            color: '#666'
                                        }}>
                                            <strong>Domain:</strong> {startup.domain}
                                        </p>
                                        <button 
                                            className="btn w-100"
                                            style={{
                                                backgroundColor: '#8B1EA7',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '8px',
                                                padding: '10px',
                                                fontWeight: '500',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = '#7B1A93';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = '#8B1EA7';
                                            }}
                                            onClick={() => viewStartup(startup.id)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </Box>
    );
}

function viewStartup(id) {
    console.log("Navigate to startup profile with ID:", id);
}

export default Startup;
