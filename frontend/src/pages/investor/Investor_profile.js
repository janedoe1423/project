import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Chip,
    Avatar,
    Link,
    Paper,
    Grid,
    CircularProgress
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';

function InvestorProfile() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const investor = location.state?.investor;

    // If no investor data, redirect back to investors list
    React.useEffect(() => {
        if (!investor) {
            navigate('/investors');
        }
    }, [investor, navigate]);

    if (!investor) {
        return (
            <Box sx={{ 
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(180deg, rgba(11, 9, 16, 0.8) 0%, rgba(11, 9, 16, 1) 100%)'
            }}>
                <CircularProgress sx={{ color: '#9470F8' }} />
            </Box>
        );
    }

    return (
        <Box sx={{ 
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #1E1E1E 0%, #0B0910 100%)',
            pt: 3,
            pb: 8
        }}>
            <Container maxWidth="lg">
                {/* Header with new design */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 3
                }}>
                    <Typography 
                        variant="h4" 
                        sx={{ 
                            color: '#FFFFFF',
                            fontSize: '2rem',
                            fontWeight: 600
                        }}
                    >
                        Investor Profile Details
                    </Typography>
                    <Button
                        onClick={() => navigate(-1)}
                        startIcon={<ArrowBackIcon />}
                        sx={{
                            color: '#FFFFFF',
                            bgcolor: '#00A76F',
                            px: 3,
                            py: 1,
                            borderRadius: '8px',
                            '&:hover': {
                                bgcolor: '#007867',
                                transform: 'translateY(-2px)',
                                transition: 'all 0.3s'
                            }
                        }}
                    >
                        BACK
                    </Button>
                </Box>

                {/* Main Content with enhanced styling */}
                <Paper sx={{
                    bgcolor: 'rgba(30, 30, 30, 0.95)',
                    borderRadius: '20px',
                    p: 4,
                    border: '1px solid rgba(148, 112, 248, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}>
                    {/* Basic Details with new layout */}
                    <Box sx={{ mb: 5 }}>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                color: '#9470F8',
                                mb: 3,
                                borderBottom: '2px solid #9470F8',
                                pb: 1,
                                display: 'inline-block',
                                fontWeight: 600
                            }}
                        >
                            BASIC DETAIL
                        </Typography>

                        <Grid container spacing={4}>
                            {/* Profile Section */}
                            <Grid item xs={12} md={3}>
                                <Box sx={{
                                    width: 200,
                                    height: 200,
                                    position: 'relative',
                                    margin: 'auto'
                                }}>
                                    <Box sx={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        border: '4px solid #9470F8',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(45deg, rgba(148, 112, 248, 0.1), transparent)',
                                            zIndex: 1
                                        }
                                    }}>
                                        <Avatar
                                            src={investor?.profileImage}
                                            sx={{ 
                                                width: '100%', 
                                                height: '100%',
                                                bgcolor: 'rgba(148, 112, 248, 0.2)'
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Enhanced Contact Details */}
                            <Grid item xs={12} md={9}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography 
                                        variant="h4" 
                                        sx={{ 
                                            color: '#FFFFFF',
                                            mb: 1,
                                            fontWeight: 600,
                                            fontSize: '2rem'
                                        }}
                                    >
                                        {investor?.name}
                                    </Typography>

                                    {/* Location with enhanced styling */}
                                    <Box sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: 1,
                                        bgcolor: 'rgba(194, 250, 79, 0.05)',
                                        p: 1,
                                        borderRadius: '8px',
                                        width: 'fit-content'
                                    }}>
                                        <LocationOnIcon sx={{ color: '#C2FA4F' }} />
                                        <Typography sx={{ color: '#FFFFFF' }}>
                                            {investor?.location}
                                        </Typography>
                                    </Box>

                                    {/* Contact Links with hover effects */}
                                    <Box sx={{ 
                                        display: 'flex', 
                                        gap: 3,
                                        mt: 2 
                                    }}>
                                        <Link 
                                            href={`mailto:${investor?.email}`}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                                color: '#C2FA4F',
                                                textDecoration: 'none',
                                                padding: '8px 16px',
                                                borderRadius: '8px',
                                                bgcolor: 'rgba(194, 250, 79, 0.05)',
                                                transition: 'all 0.3s',
                                                '&:hover': {
                                                    bgcolor: 'rgba(194, 250, 79, 0.1)',
                                                    transform: 'translateY(-2px)'
                                                }
                                            }}
                                        >
                                            <EmailIcon />
                                            <Typography>{investor?.email}</Typography>
                                        </Link>

                                        <Link 
                                            href={investor?.linkedin}
                                            target="_blank"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                                color: '#C2FA4F',
                                                textDecoration: 'none',
                                                padding: '8px 16px',
                                                borderRadius: '8px',
                                                bgcolor: 'rgba(194, 250, 79, 0.05)',
                                                transition: 'all 0.3s',
                                                '&:hover': {
                                                    bgcolor: 'rgba(194, 250, 79, 0.1)',
                                                    transform: 'translateY(-2px)'
                                                }
                                            }}
                                        >
                                            <LinkedInIcon />
                                            <Typography>LinkedIn Profile</Typography>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Investment Details with enhanced layout */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ 
                                mb: 4,
                                bgcolor: 'rgba(148, 112, 248, 0.05)',
                                p: 3,
                                borderRadius: '16px',
                                border: '1px solid rgba(148, 112, 248, 0.1)'
                            }}>
                                <Typography variant="h6" sx={{ 
                                    color: '#9470F8',
                                    mb: 3,
                                    borderBottom: '2px solid #9470F8',
                                    pb: 1,
                                    display: 'inline-block'
                                }}>
                                    INVESTMENT DETAILS
                                </Typography>
                                
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <DetailItem label="Investor Category" value={investor?.category} />
                                    <DetailItem label="Investor Type" value={investor?.type} />
                                    <DetailItem label="Investment Range" value={investor?.investmentRange} />
                                    <DetailItem label="Portfolio Size" value={investor?.portfolioSize} />
                                    <DetailItem label="Investment Stage" value={investor?.investmentStage} />
                                    <DetailItem label="Preferred Deal Size" value={investor?.dealSize} />
                                </Box>
                            </Box>
                        </Grid>

                        {/* Industry & Focus Areas with enhanced styling */}
                        <Grid item xs={12} md={8}>
                            <Box sx={{ 
                                mb: 4,
                                bgcolor: 'rgba(148, 112, 248, 0.05)',
                                p: 3,
                                borderRadius: '16px',
                                border: '1px solid rgba(148, 112, 248, 0.1)'
                            }}>
                                <Typography variant="h6" sx={{ 
                                    color: '#9470F8',
                                    mb: 3,
                                    borderBottom: '2px solid #9470F8',
                                    pb: 1,
                                    display: 'inline-block'
                                }}>
                                    INDUSTRY & FOCUS AREAS
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    <ChipSection 
                                        title="Manufacturing / Services / Trade"
                                        items={['Manufacturing', 'Services', 'Trade']}
                                    />
                                    <ChipSection 
                                        title="Industry Belongs To"
                                        items={['Agri-Tech', 'Auto & Truck Manufacturers', 'Auto Vehicle Parts & Service Retailers']}
                                    />
                                    <ChipSection 
                                        title="Focus Sectors"
                                        items={['Agri-Tech', 'Auto & Truck Manufacturers', 'Auto Vehicle Parts & Service Retailers']}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Additional Sections */}
                    <Box sx={{ mt: 4 }}>
                        {/* Investment Criteria */}
                        <Box sx={{ 
                            mb: 4,
                            bgcolor: 'rgba(148, 112, 248, 0.05)',
                            p: 3,
                            borderRadius: '16px',
                            border: '1px solid rgba(148, 112, 248, 0.1)'
                        }}>
                            <Typography variant="h6" sx={{ 
                                color: '#9470F8',
                                mb: 3,
                                borderBottom: '2px solid #9470F8',
                                pb: 1,
                                display: 'inline-block'
                            }}>
                                INVESTMENT CRITERIA
                            </Typography>
                            
                            <Grid container spacing={3}>
                                {[
                                    {
                                        title: "Stage Preference",
                                        items: ["Seed", "Early Stage", "Growth Stage"]
                                    },
                                    {
                                        title: "Expected Traction",
                                        items: ["Monthly Revenue > ₹10L", "Active User Base > 10,000", "Market Validation"]
                                    },
                                    {
                                        title: "Team Requirements",
                                        items: ["Strong Technical Background", "Industry Experience", "Full-time Commitment"]
                                    },
                                    {
                                        title: "Market Focus",
                                        items: ["Market Size > ₹1000Cr", "High Growth Potential", "Clear Competition Strategy"]
                                    }
                                ].map((criteria, index) => (
                                    <Grid item xs={12} md={6} key={index}>
                                        <Box sx={{ 
                                            bgcolor: 'rgba(194, 250, 79, 0.05)',
                                            p: 2,
                                            borderRadius: '12px',
                                            height: '100%'
                                        }}>
                                            <Typography sx={{ 
                                                color: '#C2FA4F',
                                                mb: 2,
                                                fontWeight: 500
                                            }}>
                                                {criteria.title}
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                                {criteria.items.map((item, idx) => (
                                                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <CheckIcon sx={{ color: '#C2FA4F', fontSize: '1rem' }} />
                                                        <Typography sx={{ color: '#FFFFFF' }}>
                                                            {item}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                        {/* Past Investments */}
                        <Box sx={{ 
                            mb: 4,
                            bgcolor: 'rgba(148, 112, 248, 0.05)',
                            p: 3,
                            borderRadius: '16px',
                            border: '1px solid rgba(148, 112, 248, 0.1)'
                        }}>
                            <Typography variant="h6" sx={{ 
                                color: '#9470F8',
                                mb: 3,
                                borderBottom: '2px solid #9470F8',
                                pb: 1,
                                display: 'inline-block'
                            }}>
                                PAST INVESTMENTS
                            </Typography>

                            <Grid container spacing={3}>
                                {[
                                    {
                                        name: "TechStart Solutions",
                                        description: "AI-powered SaaS platform for business automation",
                                        amount: "₹2.5 Cr",
                                        year: "2023",
                                        status: "Active",
                                        return: "+45% Growth"
                                    },
                                    {
                                        name: "GreenEnergy Systems",
                                        description: "Renewable energy solutions for industrial applications",
                                        amount: "₹3.8 Cr",
                                        year: "2022",
                                        status: "Active",
                                        return: "+60% Growth"
                                    },
                                    {
                                        name: "HealthTech Innovations",
                                        description: "Digital healthcare platform for remote diagnostics",
                                        amount: "₹1.5 Cr",
                                        year: "2023",
                                        status: "Active",
                                        return: "+30% Growth"
                                    }
                                ].map((investment, index) => (
                                    <Grid item xs={12} md={4} key={index}>
                                        <Box sx={{ 
                                            bgcolor: 'rgba(194, 250, 79, 0.05)',
                                            p: 3,
                                            borderRadius: '12px',
                                            height: '100%',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 8px 24px rgba(194, 250, 79, 0.1)'
                                            }
                                        }}>
                                            <Typography sx={{ 
                                                color: '#C2FA4F',
                                                mb: 1,
                                                fontWeight: 600,
                                                fontSize: '1.1rem'
                                            }}>
                                                {investment.name}
                                            </Typography>
                                            <Typography sx={{ 
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                mb: 2,
                                                fontSize: '0.9rem'
                                            }}>
                                                {investment.description}
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                <Typography sx={{ color: '#FFFFFF' }}>
                                                    Amount
                                                </Typography>
                                                <Typography sx={{ color: '#C2FA4F' }}>
                                                    {investment.amount}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                <Typography sx={{ color: '#FFFFFF' }}>
                                                    Year
                                                </Typography>
                                                <Typography sx={{ color: '#C2FA4F' }}>
                                                    {investment.year}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography sx={{ color: '#FFFFFF' }}>
                                                    Growth
                                                </Typography>
                                                <Typography sx={{ 
                                                    color: '#C2FA4F',
                                                    fontWeight: 600
                                                }}>
                                                    {investment.return}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

// Helper Components
const DetailItem = ({ label, value }) => (
    <Box>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 0.5 }}>
            {label}
        </Typography>
        <Typography sx={{ color: '#FFFFFF', fontWeight: 500 }}>
            {value}
        </Typography>
    </Box>
);

const ChipSection = ({ title, items }) => (
    <Box>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1.5 }}>
            {title}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {items.map((item, index) => (
                <Chip
                    key={index}
                    label={item}
                    sx={{
                        bgcolor: 'rgba(194, 250, 79, 0.1)',
                        color: '#C2FA4F',
                        '&:hover': {
                            bgcolor: 'rgba(194, 250, 79, 0.2)'
                        }
                    }}
                />
            ))}
        </Box>
    </Box>
);

export default InvestorProfile;
