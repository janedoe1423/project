import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Button,
} from "@mui/material";
import img1 from "../../assets/images/fundingimag1_2.jpg"
import img2 from "../../assets/images/pashu_palak.jpg"
import img3 from "../../assets/images/Garuda.jpg"
import img4 from "../../assets/images/Adinix.jpg"
import img5 from "../../assets/images/OROFIT.webp"
import img6 from "../../assets/images/CSA.png"

// Export the startups array
export const startups = [
    {
        name: "EVEEIO Electric",
        description: "Eveeio Electric is a 'tech-enabled' 3PL logistics service provider...",
        tags: ["Equity", "Demat", "PRIVATE LIMITED"],
        image: img1,
        badge: "New This Month: Early Birds",
    },
    {
        name: "PashuPalak",
        description: "PashuPalak specializes in supplying fresh milk and dairy products...",
        tags: ["Equity", "Demat", "PRIVATE LIMITED"],
        image: img2,
        badge: "New This Month: Early Birds",
    },
    {
        name: "Garuda Aerospace",
        description: "Rapidly growing drone tech company, with its focus on affordable...",
        tags: ["CCPS", "Demat", "PRIVATE LIMITED"],
        image: img3,
        badge: "Closing Fast - Hurry Up",
    },
    {
        name: "Aidnix Software",
        description: "One-stop shop for comprehensive Portfolio Analysis...",
        tags: ["Equity", "Demat", "PRIVATE LIMITED"],
        image: img4,
        badge: "New This Month: Early Birds",
    },
    {
        name: "Orofit",
        description: "Orofit provides the perfect blend of tailored & ready-to-wear apparel...",
        tags: ["Equity", "Physical", "PRIVATE LIMITED"],
        image: img5,
    },
    {
        name: "CSA Advisor",
        description: "CSA Investments is an investment management firm...",
        tags: ["Equity", "Demat", "PRIVATE LIMITED"],
        image: img6,
        badge: "New This Month: Early Birds",
    },
];

const StartupFunding = () => {
    const navigate = useNavigate();

    const handleCardClick = (startup) => {
        navigate(`/startup/${encodeURIComponent(startup.name)}`);
    };

    return (
        <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
            <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                    mb: 4, 
                    textAlign: 'center',
                    fontWeight: 'bold' 
                }}
            >
                Startup Funding
            </Typography>
            <Grid container spacing={3}>
                {startups.map((startup, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card 
                            onClick={() => handleCardClick(startup)}
                            sx={{ 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
                                    zIndex: 1,
                                    cursor: 'pointer'
                                }
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={startup.image}
                                alt={startup.name}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                {startup.badge && (
                                    <Chip
                                        label={startup.badge}
                                        color="secondary"
                                        sx={{ 
                                            mb: 2,
                                            borderRadius: '16px',
                                            fontWeight: 500
                                        }}
                                    />
                                )}
                                <Typography 
                                    variant="h5" 
                                    component="div"
                                    sx={{ 
                                        mb: 1,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {startup.name}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="text.secondary" 
                                    sx={{ mb: 2, minHeight: '60px' }}
                                >
                                    {startup.description}
                                </Typography>
                                <Box sx={{ 
                                    display: 'flex', 
                                    gap: 1, 
                                    flexWrap: 'wrap', 
                                    mb: 2 
                                }}>
                                    {startup.tags.map((tag, i) => (
                                        <Chip 
                                            key={i} 
                                            label={tag} 
                                            variant="outlined"
                                            sx={{
                                                borderRadius: '8px',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                                                }
                                            }}
                                        />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default StartupFunding;