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
import img1 from "../assets/images/fundingimag1_2.jpg"
import img2 from "../assets/images/pashu_palak.jpg"
import img3 from "../assets/images/Garuda.jpg"
import img4 from "../assets/images/Adinix.jpg"
import img5 from "../assets/images/OROFIT.webp"
import img6 from "../assets/images/CSA.png"
import crowdfundingBanner from "../assets/images/crowdfunding-banner.webp";
import BuildIcon from '@mui/icons-material/Build';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GavelIcon from '@mui/icons-material/Gavel';
import InventoryIcon from '@mui/icons-material/Inventory';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BusinessIcon from '@mui/icons-material/Business';

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
        <Box>
            {/* Banner Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: '300px',
                    width: '100%',
                    mb: 4,
                }}
            >
                <Box
                    component="img"
                    src={crowdfundingBanner}
                    alt="Crowdfunding Banner"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '0 20px',
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            fontSize: { xs: '2rem', md: '3.5rem' },
                            color: '#ffffff',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                    >
                        Startup Funding
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            maxWidth: '800px',
                            fontSize: { xs: '1rem', md: '1.5rem' },
                            color: '#e0e0e0',
                            fontWeight: 500,
                            textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
                        }}
                    >
                        Invest in the next generation of innovative startups and be part of their success story
                    </Typography>
                </Box>
            </Box>

            {/* Overview Section */}
            <Box 
                sx={{ 
                    p: { xs: 3, md: 5 }, 
                    maxWidth: '1200px', 
                    margin: '0 auto',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    mb: 6,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Decorative element */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: 'linear-gradient(90deg, #D6168B 0%, #8B1EA7 100%)',
                    }}
                />

                <Typography 
                    variant="h3" 
                    sx={{
                        mb: 4,
                        fontWeight: 600,
                        color: '#8B1EA7',
                        textAlign: 'center',
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            display: 'block',
                            width: '60px',
                            height: '3px',
                            background: '#D6168B',
                            margin: '12px auto 0',
                            borderRadius: '2px',
                        }
                    }}
                >
                    Overview
                </Typography>

                <Typography 
                    variant="body1" 
                    sx={{
                        fontSize: '1.1rem',
                        lineHeight: 2,
                        color: '#2A2A2A',
                        textAlign: 'justify',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        '& .highlight': {
                            color: '#D6168B',
                            fontWeight: 500,
                            transition: 'color 0.3s ease',
                            '&:hover': {
                                color: '#8B1EA7',
                            }
                        }
                    }}
                >
                    Funding refers to the money required to start and run a business. It is a financial 
                    investment in a company for <span className="highlight">product development</span>, {' '}
                    <span className="highlight">manufacturing</span>, {' '}
                    <span className="highlight">expansion</span>, {' '}
                    <span className="highlight">sales and marketing</span>, office spaces, and {' '}
                    <span className="highlight">inventory</span>. Many startups choose to not raise funding 
                    from third parties and are funded by their founders only (to prevent debts and equity 
                    dilution). However, most startups do raise funding, especially as they grow larger and 
                    scale their operations. This page shall be your virtual guide to Startup funding.
                </Typography>

                {/* Decorative corners */}
                <Box sx={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    width: '30px',
                    height: '30px',
                    border: '3px solid #D6168B',
                    borderRight: 'none',
                    borderBottom: 'none',
                }}/>
                <Box sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    width: '30px',
                    height: '30px',
                    border: '3px solid #D6168B',
                    borderLeft: 'none',
                    borderBottom: 'none',
                }}/>
                <Box sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    width: '30px',
                    height: '30px',
                    border: '3px solid #D6168B',
                    borderRight: 'none',
                    borderTop: 'none',
                }}/>
                <Box sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    width: '30px',
                    height: '30px',
                    border: '3px solid #D6168B',
                    borderLeft: 'none',
                    borderTop: 'none',
                }}/>
            </Box>

            {/* Why Funding Section */}
            <Box 
                sx={{ 
                    p: { xs: 3, md: 5 }, 
                    maxWidth: '1200px', 
                    margin: '0 auto 40px auto',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                }}
            >
                {/* Section Header */}
                <Box sx={{ mb: 4 }}>
                    <Typography 
                        variant="h4" 
                        sx={{
                            fontWeight: 600,
                            color: '#8B1EA7',
                            display: 'flex',
                            alignItems: 'center',
                            '&::before': {
                                content: '""',
                                width: '4px',
                                height: '24px',
                                backgroundColor: '#D6168B',
                                marginRight: '12px',
                                borderRadius: '2px',
                            }
                        }}
                    >
                        Why funding is required for startups
                    </Typography>
                    
                    <Typography 
                        sx={{ 
                            mt: 2, 
                            color: '#555', 
                            fontSize: '1.1rem',
                            lineHeight: 1.8 
                        }}
                    >
                        A startup might require funding for one, a few, or all of the following purposes. 
                        It is important that an entrepreneur is clear about why they are raising funds. 
                        Founders should have a detailed financial and business plan before they approach investors.
                    </Typography>
                </Box>

                {/* Cards Grid */}
                <Grid container spacing={3}>
                    {[
                        { icon: <BuildIcon />, title: 'Prototype Creation' },
                        { icon: <DeveloperModeIcon />, title: 'Product Development' },
                        { icon: <GroupsIcon />, title: 'Team Hiring' },
                        { icon: <AccountBalanceWalletIcon />, title: 'Working Capital' },
                        { icon: <GavelIcon />, title: 'Legal and Consulting Services' },
                        { icon: <InventoryIcon />, title: 'Raw Material and Equipment\'s' },
                        { icon: <WorkspacePremiumIcon />, title: 'Licenses and Certifications' },
                        { icon: <ShowChartIcon />, title: 'Marketing and Sales' },
                        { icon: <BusinessIcon />, title: 'Office Space and Admin Expenses' },
                    ].map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card 
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    p: 3,
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                                    },
                                    cursor: 'pointer',
                                    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 2,
                                        background: 'linear-gradient(135deg, #D6168B 0%, #8B1EA7 100%)',
                                        color: 'white',
                                        '& svg': {
                                            fontSize: '2rem',
                                        }
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                <Typography 
                                    variant="h6" 
                                    sx={{
                                        textAlign: 'center',
                                        fontWeight: 500,
                                        color: '#2A2A2A',
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Existing content */}
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
        </Box>
    );
};

export default StartupFunding;