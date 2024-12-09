import React, { useState } from 'react';
import { 
    Box, Container, Typography, Grid, Card, Tab, Tabs,
    IconButton, Chip, Avatar, LinearProgress, Paper,
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button
} from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BiotechIcon from '@mui/icons-material/Biotech';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import styled from '@emotion/styled';
import gujaratBg from './assets/images/Gujaratpicture.jpg';
import CloseIcon from '@mui/icons-material/Close';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Styled Components
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

const TabPanel = styled(Box)`
    padding: 24px 0;
`;

const ResearchCard = styled(Card)`
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

// New styled components for tabs
const StyledTabPanel = styled(Box)`
    padding: 32px 0;
`;

const FeatureCard = styled(Card)`
    background: rgba(255, 255, 255, 0.03);
    border-radius: 16px;
    padding: 24px;
    height: 100%;
    border: 1px solid rgba(148, 112, 248, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        border-color: #C2FA4F;
        box-shadow: 0 8px 30px rgba(194, 250, 79, 0.1);
    }
`;

// New styled component for the popup
const StyledDialog = styled(Dialog)`
    .MuiDialog-paper {
        background: rgba(17, 25, 40, 0.95);
        border: 1px solid rgba(194, 250, 79, 0.2);
        backdrop-filter: blur(20px);
        border-radius: 24px;
        min-width: 600px;
        max-width: 90vw;
    }
`;

function Research_inno() {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

  
    const researchAreas = [
        {
            icon: <ScienceIcon sx={{ fontSize: 40 }} />,
            title: "Artificial Intelligence & ML",
            description: "Advanced research in machine learning, neural networks, and AI applications.",
            progress: 75
        },
        {
            icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
            title: "Cognitive Computing",
            description: "Research in human-computer interaction and cognitive systems.",
            progress: 60
        },
        {
            icon: <BiotechIcon sx={{ fontSize: 40 }} />,
            title: "Biotechnology",
            description: "Innovative research in genetic engineering and biomedical sciences.",
            progress: 85
        },
        {
            icon: <EngineeringIcon sx={{ fontSize: 40 }} />,
            title: "Sustainable Engineering",
            description: "Green technology and sustainable development research.",
            progress: 70
        }
    ];

  
    const resourcesList = [
        {
            icon: <MenuBookIcon sx={{ fontSize: 40 }} />,
            title: "Digital Library Access",
            type: "Online Database",
            description: "Access to over 50,000 research papers and journals",
            access: "Premium",
            downloads: "5k+",
            lastUpdated: "2024-03-15"
        },
        {
            icon: <CloudDownloadIcon sx={{ fontSize: 40 }} />,
            title: "Research Tools Package",
            type: "Software Bundle",
            description: "Statistical analysis and research methodology tools",
            access: "Free",
            downloads: "3.2k+",
            lastUpdated: "2024-03-10"
        },
        {
            icon: <VideoLibraryIcon sx={{ fontSize: 40 }} />,
            title: "Video Tutorials",
            type: "Educational Content",
            description: "Step-by-step research methodology guides",
            access: "Free",
            downloads: "2.8k+",
            lastUpdated: "2024-03-01"
        }
    ];

    // Sample data for Collaboration
    const collaborationList = [
        {
            name: "Dr. Patel Research Group",
            institution: "Gujarat University",
            field: "AI & Machine Learning",
            members: 12,
            activeProjects: 5,
            publications: 23,
            image: "/path/to/team1.jpg",
            status: "Active"
        },
        {
            name: "Biotech Innovation Lab",
            institution: "IIT Gandhinagar",
            field: "Biotechnology",
            members: 8,
            activeProjects: 3,
            publications: 15,
            image: "/path/to/team2.jpg",
            status: "Active"
        }
    ];

    // Sample data for Publications
    const publicationsList = [
        {
            title: "Advances in AI Applications for Smart Cities",
            authors: ["Dr. R. Shah", "Dr. M. Patel"],
            journal: "International Journal of Smart Technology",
            year: 2024,
            citations: 45,
            impact: 4.5,
            category: "AI & Technology"
        },
        {
            title: "Sustainable Energy Solutions for Rural Gujarat",
            authors: ["Dr. A. Kumar", "Prof. S. Modi"],
            journal: "Renewable Energy Quarterly",
            year: 2023,
            citations: 32,
            impact: 3.8,
            category: "Sustainability"
        }
    ];

    // Sample data for Tools
    const toolsList = [
        {
            icon: <BuildIcon sx={{ fontSize: 40 }} />,
            name: "Data Analysis Suite",
            category: "Analysis",
            description: "Comprehensive tool for research data analysis",
            users: "1.2k+",
            rating: 4.8,
            status: "Available"
        },
        {
            icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
            name: "Research Paper Template",
            category: "Documentation",
            description: "Standard templates for research publication",
            users: "2.5k+",
            rating: 4.5,
            status: "Available"
        }
    ];

    // Sample data for research progress over time
    const progressData = {
        "Artificial Intelligence & ML": [
            { month: 'Jan', progress: 45 },
            { month: 'Feb', progress: 55 },
            { month: 'Mar', progress: 65 },
            { month: 'Apr', progress: 75 }
        ],
        "Cognitive Computing": [
            { month: 'Jan', progress: 30 },
            { month: 'Feb', progress: 40 },
            { month: 'Mar', progress: 50 },
            { month: 'Apr', progress: 60 }
        ],
        // ... similar data for other areas
    };

    // Sample data for research impact with more meaningful values
    const impactData = [
        { name: 'Publications', value: 35, description: '35 Research Papers' },
        { name: 'Citations', value: 45, description: '45 Academic Citations' },
        { name: 'Projects', value: 20, description: '20 Active Projects' }
    ];

    const COLORS = ['#C2FA4F', '#9470F8', '#00A3FF'];

    // Startup insights data structure
    const startupInsightsData = {
        "Artificial Intelligence & ML": {
            startups: 15,
            funding: "$25M",
            topStartups: [
                { name: "AI Solutions Ltd", focus: "Computer Vision", growth: "+45%" },
                { name: "ML Tech", focus: "NLP", growth: "+38%" },
                { name: "DataMinds", focus: "Predictive Analytics", growth: "+32%" }
            ],
            marketTrends: "Growing demand in healthcare and finance sectors"
        },
        "Cognitive Computing": {
            startups: 12,
            funding: "$18M",
            topStartups: [
                { name: "CogniTech", focus: "Brain-Computer Interface", growth: "+40%" },
                { name: "MindAI", focus: "Cognitive Analytics", growth: "+35%" },
                { name: "Neural Systems", focus: "Neural Networks", growth: "+30%" }
            ],
            marketTrends: "Increasing adoption in education and healthcare"
        },
        "Biotechnology": {
            startups: 18,
            funding: "$30M",
            topStartups: [
                { name: "BioGen", focus: "Gene Therapy", growth: "+50%" },
                { name: "LifeScience", focus: "Biomedical", growth: "+42%" },
                { name: "GenomeX", focus: "DNA Sequencing", growth: "+38%" }
            ],
            marketTrends: "Rapid growth in personalized medicine"
        },
        "Sustainable Engineering": {
            startups: 20,
            funding: "$28M",
            topStartups: [
                { name: "GreenTech", focus: "Renewable Energy", growth: "+48%" },
                { name: "EcoSolutions", focus: "Waste Management", growth: "+40%" },
                { name: "SustainableAI", focus: "Energy Optimization", growth: "+35%" }
            ],
            marketTrends: "Rising investment in clean energy solutions"
        }
    };

    const handleCardClick = (area) => {
        setSelectedCard(area);
    };

    const handleCloseDialog = () => {
        setSelectedCard(null);
    };

    const renderResearchAreaPopup = () => {
        if (!selectedCard) return null;

        const startupInsights = startupInsightsData[selectedCard.title] || {
            startups: 0,
            funding: "$0",
            topStartups: [],
            marketTrends: "No data available"
        };

        return (
            <StyledDialog
                open={Boolean(selectedCard)}
                onClose={handleCloseDialog}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: '#fff'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ color: '#C2FA4F' }}>{selectedCard.icon}</Box>
                        {selectedCard.title}
                    </Box>
                    <IconButton onClick={handleCloseDialog} sx={{ color: '#fff' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent sx={{ color: '#fff' }}>
                    <Grid container spacing={4}>
                        {/* Progress Over Time Chart */}
                        <Grid item xs={12}>
                            <Typography variant="h6" sx={{ mb: 2, color: '#C2FA4F' }}>
                                Progress Over Time
                            </Typography>
                            <Box sx={{ height: 300 }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={progressData[selectedCard.title]}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                        <XAxis dataKey="month" stroke="#fff" />
                                        <YAxis stroke="#fff" />
                                        <Tooltip 
                                            contentStyle={{ 
                                                background: 'rgba(17, 25, 40, 0.95)',
                                                border: '1px solid #C2FA4F',
                                                color: '#fff'
                                            }}
                                        />
                                        <Line 
                                            type="monotone" 
                                            dataKey="progress" 
                                            stroke="#C2FA4F" 
                                            strokeWidth={2}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </Box>
                        </Grid>

                        {/* Enhanced Pie Chart */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ mb: 2, color: '#C2FA4F' }}>
                                Research Impact
                            </Typography>
                            <Box sx={{ height: 300, position: 'relative' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={impactData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {impactData.map((entry, index) => (
                                                <Cell 
                                                    key={`cell-${index}`} 
                                                    fill={COLORS[index % COLORS.length]}
                                                    stroke="rgba(255,255,255,0.1)"
                                                    strokeWidth={2}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip 
                                            content={({ active, payload }) => {
                                                if (active && payload && payload.length) {
                                                    return (
                                                        <Box sx={{
                                                            background: 'rgba(17, 25, 40, 0.95)',
                                                            border: `2px solid ${payload[0].payload.color || '#C2FA4F'}`,
                                                            borderRadius: '8px',
                                                            padding: '12px',
                                                            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                                                        }}>
                                                            <Typography sx={{ 
                                                                color: payload[0].payload.color || '#C2FA4F',
                                                                fontWeight: 'bold'
                                                            }}>
                                                                {payload[0].payload.description}
                                                            </Typography>
                                                        </Box>
                                                    );
                                                }
                                                return null;
                                            }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                                {/* Legend */}
                                <Box sx={{ 
                                    position: 'absolute', 
                                    bottom: 0, 
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: 2
                                }}>
                                    {impactData.map((entry, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box sx={{ 
                                                width: 12, 
                                                height: 12, 
                                                borderRadius: '50%',
                                                backgroundColor: COLORS[index % COLORS.length]
                                            }} />
                                            <Typography sx={{ color: '#fff', fontSize: '0.875rem' }}>
                                                {entry.name}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>

                        {/* Key Metrics */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ mb: 2, color: '#C2FA4F' }}>
                                Key Metrics
                            </Typography>
                            <Grid container spacing={2}>
                                {[
                                    { label: 'Active Researchers', value: '25+' },
                                    { label: 'Ongoing Projects', value: '12' },
                                    { label: 'Publications', value: '45' },
                                    { label: 'Success Rate', value: '87%' }
                                ].map((metric, index) => (
                                    <Grid item xs={6} key={index}>
                                        <Card sx={{ 
                                            p: 2, 
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(194, 250, 79, 0.2)'
                                        }}>
                                            <Typography variant="h4" sx={{ color: '#C2FA4F', mb: 1 }}>
                                                {metric.value}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                                {metric.label}
                                            </Typography>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        {/* New Startup Insights Section */}
                        <Grid item xs={12}>
                            <Box sx={{ 
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '16px',
                                p: 3,
                                border: '1px solid rgba(194, 250, 79, 0.2)'
                            }}>
                                <Typography variant="h6" sx={{ color: '#C2FA4F', mb: 3 }}>
                                    Startup Ecosystem Insights
                                </Typography>
                                
                                <Grid container spacing={3}>
                                    {/* Key Statistics */}
                                    <Grid item xs={12} md={4}>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography variant="h4" sx={{ color: '#C2FA4F' }}>
                                                {startupInsights.startups}
                                            </Typography>
                                            <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                                Active Startups
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="h4" sx={{ color: '#C2FA4F' }}>
                                                {startupInsights.funding}
                                            </Typography>
                                            <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                                Total Funding
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    {/* Top Startups */}
                                    <Grid item xs={12} md={8}>
                                        <Typography variant="subtitle1" sx={{ color: '#fff', mb: 2 }}>
                                            Top Performing Startups
                                        </Typography>
                                        <Grid container spacing={2}>
                                            {startupInsights.topStartups.map((startup, index) => (
                                                <Grid item xs={12} key={index}>
                                                    <Box sx={{ 
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        p: 2,
                                                        background: 'rgba(255,255,255,0.05)',
                                                        borderRadius: '8px'
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{ color: '#fff' }}>
                                                                {startup.name}
                                                            </Typography>
                                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                                                {startup.focus}
                                                            </Typography>
                                                        </Box>
                                                        <Chip 
                                                            label={startup.growth}
                                                            sx={{ 
                                                                bgcolor: '#C2FA4F',
                                                                color: '#000',
                                                                fontWeight: 'bold'
                                                            }}
                                                        />
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>

                                    {/* Market Trends */}
                                    <Grid item xs={12}>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography variant="subtitle1" sx={{ color: '#fff', mb: 1 }}>
                                                Market Trends
                                            </Typography>
                                            <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                                {startupInsights.marketTrends}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </DialogContent>
            </StyledDialog>
        );
    };

    const renderTabContent = (tabIndex) => {
        switch (tabIndex) {
            case 0: // Research Areas
                return (
                    <Grid container spacing={4}>
                        {researchAreas.map((area, index) => (
                            <Grid item xs={12} md={6} lg={3} key={index}>
                                <FeatureCard 
                                    onClick={() => handleCardClick(area)}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <Box sx={{ color: '#C2FA4F', mb: 2 }}>
                                        {area.icon}
                                    </Box>
                                    <Typography variant="h5" sx={{ color: '#fff', mb: 2 }}>
                                        {area.title}
                                    </Typography>
                                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
                                        {area.description}
                                    </Typography>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography sx={{ color: '#fff', mb: 1 }}>
                                            Research Progress
                                        </Typography>
                                        <LinearProgress 
                                            variant="determinate" 
                                            value={area.progress}
                                            sx={{
                                                height: 8,
                                                borderRadius: 4,
                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#C2FA4F'
                                                }
                                            }}
                                        />
                                    </Box>
                                </FeatureCard>
                            </Grid>
                        ))}
                    </Grid>
                );

            case 1: // Resources
                return (
                    <Grid container spacing={4}>
                        {resourcesList.map((resource, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <FeatureCard>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <Box sx={{ color: '#C2FA4F', mr: 2 }}>
                                            {resource.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ color: '#fff' }}>
                                                {resource.title}
                                            </Typography>
                                            <Chip 
                                                label={resource.access}
                                                size="small"
                                                sx={{ 
                                                    bgcolor: resource.access === 'Premium' ? '#C2FA4F' : 'rgba(255,255,255,0.1)',
                                                    color: resource.access === 'Premium' ? '#000' : '#fff'
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                                        {resource.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.5)' }}>
                                        <Typography variant="body2">Downloads: {resource.downloads}</Typography>
                                        <Typography variant="body2">Updated: {resource.lastUpdated}</Typography>
                                    </Box>
                                </FeatureCard>
                            </Grid>
                        ))}
                    </Grid>
                );

            case 2: // Collaboration
                return (
                    <Grid container spacing={4}>
                        {collaborationList.map((collab, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <FeatureCard>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                                        <Typography variant="h5" sx={{ color: '#fff' }}>
                                            {collab.name}
                                        </Typography>
                                        <Chip 
                                            label={collab.status}
                                            sx={{ bgcolor: '#C2FA4F', color: '#000' }}
                                        />
                                    </Box>
                                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
                                        {collab.institution} • {collab.field}
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <Typography sx={{ color: '#C2FA4F' }}>{collab.members}</Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>Members</Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography sx={{ color: '#C2FA4F' }}>{collab.activeProjects}</Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>Projects</Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography sx={{ color: '#C2FA4F' }}>{collab.publications}</Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>Publications</Typography>
                                        </Grid>
                                    </Grid>
                                </FeatureCard>
                            </Grid>
                        ))}
                    </Grid>
                );

            case 3: // Publications
                return (
                    <Grid container spacing={4}>
                        {publicationsList.map((pub, index) => (
                            <Grid item xs={12} key={index}>
                                <FeatureCard>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={8}>
                                            <Typography variant="h5" sx={{ color: '#fff', mb: 2 }}>
                                                {pub.title}
                                            </Typography>
                                            <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                                                {pub.authors.join(', ')}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                                {pub.journal} • {pub.year}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                                <Box sx={{ textAlign: 'center' }}>
                                                    <Typography sx={{ color: '#C2FA4F' }}>{pub.citations}</Typography>
                                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>Citations</Typography>
                                                </Box>
                                                <Box sx={{ textAlign: 'center' }}>
                                                    <Typography sx={{ color: '#C2FA4F' }}>{pub.impact}</Typography>
                                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>Impact Factor</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FeatureCard>
                            </Grid>
                        ))}
                    </Grid>
                );

            case 4: // Tools
                return (
                    <Grid container spacing={4}>
                        {toolsList.map((tool, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <FeatureCard>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <Box sx={{ color: '#C2FA4F', mr: 2 }}>
                                            {tool.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ color: '#fff' }}>
                                                {tool.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                                {tool.category}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
                                        {tool.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                            Active Users: {tool.users}
                                        </Typography>
                                        <Chip 
                                            label={`Rating: ${tool.rating}/5`}
                                            sx={{ bgcolor: '#C2FA4F', color: '#000' }}
                                        />
                                    </Box>
                                </FeatureCard>
                            </Grid>
                        ))}
                    </Grid>
                );

            default:
                return null;
        }
    };

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
                {/* Centered Title Section */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h1" sx={{
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        fontWeight: 700,
                        color: '#fff',
                        mb: 3
                    }}>
                        Research & Innovation
                        <span style={{ color: '#C2FA4F' }}> Hub</span>
                    </Typography>

                    {/* Inspirational Quote */}
                    <Typography sx={{
                        color: '#C2FA4F',
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        mb: 4,
                        maxWidth: '800px',
                        mx: 'auto'
                    }}>
                        "Innovation is the calling card of the future"
                    </Typography>

                    {/* Additional Quote */}
                    <Typography sx={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '1.1rem',
                        mb: 6,
                        maxWidth: '700px',
                        mx: 'auto'
                    }}>
                        "Research is to see what everybody else has seen, and to think what nobody else has thought"
                    </Typography>
                </Box>

                {/* Overview Section */}
                <Box sx={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '24px',
                    p: 6,
                    mb: 8,
                    border: '1px solid rgba(148, 112, 248, 0.1)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <Typography variant="h4" sx={{
                        color: '#C2FA4F',
                        mb: 3,
                        textAlign: 'center',
                        fontWeight: 600
                    }}>
                        Overview
                    </Typography>
                    
                    <Typography sx={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        textAlign: 'center',
                        maxWidth: '900px',
                        mx: 'auto'
                    }}>
                        Transform your research ideas into impactful solutions. Connect with experts, 
                        access resources, and drive innovation in Gujarat's thriving research ecosystem.
                    </Typography>
                </Box>

                {/* Navigation Tabs */}
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4 }}>
                    <Tabs 
                        value={activeTab}
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            '& .MuiTab-root': {
                                color: 'rgba(255,255,255,0.7)',
                                '&.Mui-selected': {
                                    color: '#C2FA4F'
                                }
                            }
                        }}
                    >
                        <Tab label="Research Areas" icon={<ScienceIcon />} />
                        <Tab label="Resources" icon={<MenuBookIcon />} />
                        <Tab label="Collaboration" icon={<GroupIcon />} />
                        <Tab label="Publications" icon={<AssessmentIcon />} />
                        <Tab label="Tools" icon={<BuildIcon />} />
                    </Tabs>
                </Box>

                {/* Tab Panels */}
                <Box sx={{ mt: 4 }}>
                    {renderTabContent(activeTab)}
                </Box>
            </Container>
            {renderResearchAreaPopup()}
        </Box>
    );
}

export default Research_inno;
