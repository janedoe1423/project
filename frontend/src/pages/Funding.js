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
import img7 from "../assets/images/Holly_Bolly.jpg"
import img8 from "../assets/images/startup.jpg"
import img9 from "../assets/images/fashal_dehat_copy.jpg"
import img10 from "../assets/images/Fusionpact_2.jpg"
import papacream from "../assets/images/Papacream.jpg"
import clapingo from "../assets/images/Clapingo_2.jpg"
import invest from "../assets/images/nvestmates-01.jpg"
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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

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

            {/* Stages of Startups Section */}
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
                        Stages of Startups and Source of Funding
                    </Typography>
                    
                    <Typography 
                        sx={{ 
                            mt: 2, 
                            color: '#555', 
                            fontSize: '1.1rem',
                            lineHeight: 1.8 
                        }}
                    >
                        There are multiple sources of funding available for startups. However, the source of funding should typically 
                        match the stage of operations of the startup. Please note that raising funds from external sources is a time-consuming 
                        process and can easily take over 6 months to convert.
                    </Typography>
                </Box>

                {/* Stages Accordion */}
                {[
                    {
                        title: 'Ideation',
                        icon: <LightbulbOutlinedIcon />,
                        content: (
                            <Box sx={{ position: 'relative' }}>
                                {/* Decorative line */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '2px',
                                        background: 'linear-gradient(180deg, #D6168B 0%, #8B1EA7 100%)',
                                        ml: -2,
                                    }}
                                />
                                
                                <Typography 
                                    paragraph
                                    sx={{
                                        fontSize: '1.1rem',
                                        color: '#555',
                                        lineHeight: 1.8,
                                        mb: 4,
                                        borderLeft: '3px solid #D6168B',
                                        pl: 3,
                                        py: 1,
                                        backgroundColor: 'rgba(214, 22, 139, 0.03)',
                                        borderRadius: '0 8px 8px 0',
                                    }}
                                >
                                    This is the stage where the entrepreneur has an idea and is working on bringing it to life. At this stage, the amount of funds needed is usually small. Additionally, at the initial stage in the startup lifecycle, there are very limited and mostly informal channels available for raising funds.
                                </Typography>

                                <Typography 
                                    variant="h5" 
                                    sx={{ 
                                        mb: 4,
                                        color: '#8B1EA7',
                                        fontWeight: 600,
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            display: 'block',
                                            width: '40px',
                                            height: '3px',
                                            background: '#D6168B',
                                            mt: 1,
                                        }
                                    }}
                                >
                                    Pre-Seed Stage
                                </Typography>

                                {[
                                    {
                                        title: 'Bootstrapping/Self-financing',
                                        content: 'Bootstrapping a startup means growing the business with little or no venture capital or outside investment. It means relying on your savings and revenue to operate and expand. This is the first recourse for most entrepreneurs, as there is no pressure to pay back the funds or dilute control of your startup.'
                                    },
                                    {
                                        title: 'Friends and Family',
                                        content: 'This is also a commonly utilised channel of funding by entrepreneurs still in the early stages. The major benefit of this source of investment is that there is an inherent level of trust between the entrepreneurs and the investors.'
                                    },
                                    {
                                        title: 'Business Plan/Pitching Events',
                                        content: 'This is the prize money/grants/financial benefits that are provided by institutes or organisations that conduct business plan competitions and challenges. Even though the quantum of money is not generally large, it is usually enough at the idea stage. What makes the difference at these events is having a good business plan.'
                                    }
                                ].map((section, index) => (
                                    <Box 
                                        key={index}
                                        sx={{ 
                                            mb: 4,
                                            p: 3,
                                            borderRadius: '12px',
                                            backgroundColor: 'rgba(139, 30, 167, 0.02)',
                                            border: '1px solid rgba(139, 30, 167, 0.1)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(139, 30, 167, 0.04)',
                                                transform: 'translateX(8px)',
                                                boxShadow: '0 4px 12px rgba(139, 30, 167, 0.08)',
                                            }
                                        }}
                                    >
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                mb: 2,
                                                color: '#D6168B',
                                                fontWeight: 600,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                                '&::before': {
                                                    content: '""',
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#D6168B',
                                                }
                                            }}
                                        >
                                            {section.title}
                                        </Typography>
                                        <Typography 
                                            sx={{ 
                                                color: '#555',
                                                fontSize: '1.05rem',
                                                lineHeight: 1.8,
                                            }}
                                        >
                                            {section.content}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        ),
                        color: '#00C853'
                    },
                    {
                        title: 'Validation',
                        icon: <VerifiedOutlinedIcon />,
                        content: (
                            <Box sx={{ position: 'relative' }}>
                                {/* Decorative line */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '2px',
                                        background: 'linear-gradient(180deg, #D6168B 0%, #8B1EA7 100%)',
                                        ml: -2,
                                    }}
                                />
                                
                                <Typography 
                                    paragraph
                                    sx={{
                                        fontSize: '1.1rem',
                                        color: '#555',
                                        lineHeight: 1.8,
                                        mb: 4,
                                        borderLeft: '3px solid #D6168B',
                                        pl: 3,
                                        py: 1,
                                        backgroundColor: 'rgba(214, 22, 139, 0.03)',
                                        borderRadius: '0 8px 8px 0',
                                    }}
                                >
                                    At this stage, a startup has a prototype ready and needs to validate the potential demand of the startup's product or service. This is called conducting a 'Proof of Concept (POC)', after which comes the big market launch.
                                </Typography>

                                <Typography 
                                    variant="h5" 
                                    sx={{ 
                                        mb: 4,
                                        color: '#8B1EA7',
                                        fontWeight: 600,
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            display: 'block',
                                            width: '40px',
                                            height: '3px',
                                            background: '#D6168B',
                                            mt: 1,
                                        }
                                    }}
                                >
                                    Seed Stage
                                </Typography>

                                <Typography 
                                    sx={{ 
                                        mb: 4,
                                        color: '#555',
                                        fontSize: '1.05rem',
                                        lineHeight: 1.8,
                                        fontStyle: 'italic',
                                        borderLeft: '2px solid #D6168B',
                                        pl: 2,
                                    }}
                                >
                                    A startup will need to conduct field trials, test the product on a few potential customers, onboard mentors, and build a formal team for which it can explore the following funding sources:
                                </Typography>

                                {[
                                    {
                                        title: 'Incubators',
                                        content: 'Incubators are organisations set up with the specific goal of assisting entrepreneurs with building and launching their startups. Not only do incubators offer a lot of value-added services (office space, utilities, admin and legal assistance, etc.), they often also make grants/debt/equity investments. You can refer to the list of incubators and here.'
                                    },
                                    {
                                        title: 'Government Loan Schemes',
                                        content: 'The government has initiated a few loan schemes to provide collateral-free debt to aspiring entrepreneurs and help them gain access to low-cost capital, such as the Startup India Seed Fund Scheme and SIDBI Fund of Funds. A list of government schemes can be found here.'
                                    },
                                    {
                                        title: 'Angel Investors',
                                        content: 'Angel investors are individuals who invest their money into high-potential startups in return for equity. Reach out to angel networks such as Indian Angel Network, Mumbai Angels, Lead Angels, Chennai Angels, etc., or relevant industrialists for this. You can connect with investors through the Network Page.'
                                    },
                                    {
                                        title: 'Crowdfunding',
                                        content: 'Crowdfunding refers to raising money from a large number of people who each contribute a relatively small amount. This is typically done via online crowdfunding platforms.'
                                    }
                                ].map((section, index) => (
                                    <Box 
                                        key={index}
                                        sx={{ 
                                            mb: 4,
                                            p: 3,
                                            borderRadius: '12px',
                                            backgroundColor: 'rgba(139, 30, 167, 0.02)',
                                            border: '1px solid rgba(139, 30, 167, 0.1)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(139, 30, 167, 0.04)',
                                                transform: 'translateX(8px)',
                                                boxShadow: '0 4px 12px rgba(139, 30, 167, 0.08)',
                                            }
                                        }}
                                    >
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                mb: 2,
                                                color: '#D6168B',
                                                fontWeight: 600,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                                '&::before': {
                                                    content: '""',
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#D6168B',
                                                }
                                            }}
                                        >
                                            {section.title}
                                        </Typography>
                                        <Typography 
                                            sx={{ 
                                                color: '#555',
                                                fontSize: '1.05rem',
                                                lineHeight: 1.8,
                                            }}
                                        >
                                            {section.content}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        ),
                        color: '#2196F3'
                    },
                    {
                        title: 'Early Traction',
                        icon: <TrendingUpIcon />,
                        content: (
                            <Box sx={{ position: 'relative' }}>
                                {/* Decorative line */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '2px',
                                        background: 'linear-gradient(180deg, #D6168B 0%, #8B1EA7 100%)',
                                        ml: -2,
                                    }}
                                />
                                
                                <Typography 
                                    paragraph
                                    sx={{
                                        fontSize: '1.1rem',
                                        color: '#555',
                                        lineHeight: 1.8,
                                        mb: 4,
                                        borderLeft: '3px solid #D6168B',
                                        pl: 3,
                                        py: 1,
                                        backgroundColor: 'rgba(214, 22, 139, 0.03)',
                                        borderRadius: '0 8px 8px 0',
                                    }}
                                >
                                    At the Early Traction stage startup's products or services have been launched in the market. Key performance indicators such as customer base, revenue, app downloads, etc. become important at this stage.
                                </Typography>

                                <Typography 
                                    variant="h5" 
                                    sx={{ 
                                        mb: 4,
                                        color: '#8B1EA7',
                                        fontWeight: 600,
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            display: 'block',
                                            width: '40px',
                                            height: '3px',
                                            background: '#D6168B',
                                            mt: 1,
                                        }
                                    }}
                                >
                                    Series A Stage
                                </Typography>

                                <Typography 
                                    sx={{ 
                                        mb: 4,
                                        color: '#555',
                                        fontSize: '1.05rem',
                                        lineHeight: 1.8,
                                        fontStyle: 'italic',
                                        borderLeft: '2px solid #D6168B',
                                        pl: 2,
                                    }}
                                >
                                    Funds are raised at this stage to further grow the user base, product offerings, expand to new geographies, etc. Common funding sources utilized by startups in this stage are:
                                </Typography>

                                {[
                                    {
                                        title: 'Venture Capital Funds',
                                        content: 'Venture capital (VC) funds are professionally managed investment funds that invest exclusively in high-growth startups. Each VC fund has its investment thesis – preferred sectors, stage of the startup, and funding amount – which should align with your startup. VCs take startup equity in return for their investments and actively engage in the mentorship of their investee startups.',
                                        icon: <ShowChartIcon sx={{ color: '#D6168B' }} />
                                    },
                                    {
                                        title: 'Banks/Non-Banking Financial Companies (NBFCs)',
                                        content: 'Formal debt can be raised from banks and NBFCs at this stage as the startup can show market traction and revenue to validate its ability to finance interest payment obligations. This is especially applicable for working capital. Some entrepreneurs might prefer debt over equity as debt funding does not dilute equity stake.',
                                        icon: <AccountBalanceWalletIcon sx={{ color: '#D6168B' }} />
                                    },
                                    {
                                        title: 'Venture Debt Funds',
                                        content: 'Venture Debt funds are private investment funds that invest money in startups primarily in the form of debt. Debt funds typically invest along with an angel or VC round.',
                                        icon: <BusinessIcon sx={{ color: '#D6168B' }} />
                                    }
                                ].map((section, index) => (
                                    <Box 
                                        key={index}
                                        sx={{ 
                                            mb: 4,
                                            p: 3,
                                            borderRadius: '12px',
                                            backgroundColor: 'rgba(139, 30, 167, 0.02)',
                                            border: '1px solid rgba(139, 30, 167, 0.1)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(139, 30, 167, 0.04)',
                                                transform: 'translateX(8px)',
                                                boxShadow: '0 4px 12px rgba(139, 30, 167, 0.08)',
                                            }
                                        }}
                                    >
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                mb: 2,
                                                color: '#D6168B',
                                                fontWeight: 600,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 2,
                                            }}
                                        >
                                            {section.icon}
                                            {section.title}
                                        </Typography>
                                        <Typography 
                                            sx={{ 
                                                color: '#555',
                                                fontSize: '1.05rem',
                                                lineHeight: 1.8,
                                                pl: 4, // Align with title text after icon
                                            }}
                                        >
                                            {section.content}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        ),
                        color: '#FF4081'
                    },
                    {
                        title: 'Scaling',
                        icon: <ShowChartIcon />,
                        content: (
                            <Box sx={{ position: 'relative' }}>
                                {/* Decorative line */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '2px',
                                        background: 'linear-gradient(180deg, #D6168B 0%, #8B1EA7 100%)',
                                        ml: -2,
                                    }}
                                />
                                
                                <Typography 
                                    paragraph
                                    sx={{
                                        fontSize: '1.1rem',
                                        color: '#555',
                                        lineHeight: 1.8,
                                        mb: 4,
                                        borderLeft: '3px solid #D6168B',
                                        pl: 3,
                                        py: 1,
                                        backgroundColor: 'rgba(214, 22, 139, 0.03)',
                                        borderRadius: '0 8px 8px 0',
                                    }}
                                >
                                    At this stage, the startup is experiencing a fast rate of market growth and increasing revenues.
                                </Typography>

                                <Typography 
                                    variant="h5" 
                                    sx={{ 
                                        mb: 4,
                                        color: '#8B1EA7',
                                        fontWeight: 600,
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        '&::after': {
                                            content: '""',
                                            display: 'block',
                                            width: '40px',
                                            height: '3px',
                                            background: '#D6168B',
                                            mt: 1,
                                        }
                                    }}
                                >
                                    Series B, C, D and E
                                    <Chip 
                                        label="Growth Stage" 
                                        size="small"
                                        sx={{
                                            backgroundColor: 'rgba(214, 22, 139, 0.1)',
                                            color: '#D6168B',
                                            fontWeight: 600,
                                            ml: 2
                                        }}
                                    />
                                </Typography>

                                <Typography 
                                    sx={{ 
                                        mb: 4,
                                        color: '#555',
                                        fontSize: '1.05rem',
                                        lineHeight: 1.8,
                                        fontStyle: 'italic',
                                        borderLeft: '2px solid #D6168B',
                                        pl: 2,
                                        background: 'linear-gradient(to right, rgba(139, 30, 167, 0.03), transparent)',
                                        py: 1,
                                        borderRadius: '4px',
                                    }}
                                >
                                    Common funding sources utilised by startups in this stage are:
                                </Typography>

                                {[
                                    {
                                        title: 'Venture Capital Funds',
                                        content: 'VC funds with larger ticket sizes in their investment thesis provide funding for late-stage startups. It is recommended to approach these funds only after the startup has generated significant market traction. A pool of VCs may come together and fund a startup as well.',
                                        icon: <ShowChartIcon />,
                                        highlight: 'Larger Ticket Sizes'
                                    },
                                    {
                                        title: 'Private Equity/Investment Firms',
                                        content: 'Private equity/Investment firms generally do not fund startups however, lately some private equity and investment firms have been providing funds for fast-growing late-stage startups who have maintained a consistent growth record.',
                                        icon: <BusinessIcon />,
                                        highlight: 'Fast-Growing Companies'
                                    }
                                ].map((section, index) => (
                                    <Box 
                                        key={index}
                                        sx={{ 
                                            mb: 4,
                                            background: 'linear-gradient(145deg, #ffffff 0%, rgba(139, 30, 167, 0.03) 100%)',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateX(8px)',
                                                boxShadow: '0 4px 20px rgba(139, 30, 167, 0.12)',
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                p: 3,
                                                borderBottom: '1px solid rgba(139, 30, 167, 0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 2,
                                                background: 'linear-gradient(90deg, rgba(214, 22, 139, 0.05), transparent)',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 45,
                                                    height: 45,
                                                    borderRadius: '12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    background: 'linear-gradient(135deg, #D6168B 0%, #8B1EA7 100%)',
                                                    color: 'white',
                                                    boxShadow: '0 4px 12px rgba(214, 22, 139, 0.2)',
                                                }}
                                            >
                                                {section.icon}
                                            </Box>
                                            <Box>
                                                <Typography 
                                                    variant="h6" 
                                                    sx={{ 
                                                        color: '#8B1EA7',
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {section.title}
                                                </Typography>
                                                <Chip 
                                                    label={section.highlight}
                                                    size="small"
                                                    sx={{
                                                        mt: 0.5,
                                                        backgroundColor: 'rgba(214, 22, 139, 0.1)',
                                                        color: '#D6168B',
                                                        fontWeight: 500,
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box sx={{ p: 3 }}>
                                            <Typography 
                                                sx={{ 
                                                    color: '#555',
                                                    fontSize: '1.05rem',
                                                    lineHeight: 1.8,
                                                }}
                                            >
                                                {section.content}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        ),
                        color: '#9C27B0'
                    },
                    {
                        title: 'Exit Options',
                        icon: <ExitToAppIcon />,
                        content: (
                            <Box sx={{ position: 'relative' }}>
                                {/* Decorative line */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '2px',
                                        background: 'linear-gradient(180deg, #D6168B 0%, #8B1EA7 100%)',
                                        ml: -2,
                                    }}
                                />
                                
                                <Box
                                    sx={{
                                        mb: 4,
                                        p: 3,
                                        borderRadius: '16px',
                                        background: 'linear-gradient(145deg, rgba(139, 30, 167, 0.08), rgba(214, 22, 139, 0.08))',
                                        border: '1px solid rgba(214, 22, 139, 0.1)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#8B1EA7',
                                            fontWeight: 600,
                                            mb: 2,
                                        }}
                                    >
                                        Final Stage: Exit Strategies
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#555',
                                            fontSize: '1.05rem',
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        At this stage, investors and founders look for opportunities to realize returns on their investments through various exit strategies.
                                    </Typography>
                                </Box>

                                <Grid container spacing={3}>
                                    {[
                                        {
                                            title: 'Mergers & Acquisitions',
                                            content: 'The investor may decide to sell the portfolio company to another company in the market. In essence, it entails one company combining with another, either by acquiring it (or part of it) or by being acquired (in whole or in part).',
                                            icon: <BusinessIcon />,
                                            color: '#FF4081'
                                        },
                                        {
                                            title: 'Initial Public Offering (IPO)',
                                            content: 'IPO refers to the event where a startup lists on the stock market for the first time. Since the public listing process is elaborate and replete with statutory formalities, it is generally undertaken by startups with an impressive track record of profits and who are growing at a steady pace.',
                                            icon: <ShowChartIcon />,
                                            color: '#00C853'
                                        },
                                        {
                                            title: 'Selling Shares',
                                            content: 'Investors may sell their equity or shares to other venture capital or private equity firms.',
                                            icon: <AccountBalanceWalletIcon />,
                                            color: '#2196F3'
                                        },
                                        {
                                            title: 'Buybacks',
                                            content: 'Founders of the startup may also buy back their shares from the fund/investors if they have liquid assets to make the purchase and wish to regain control of their company.',
                                            icon: <ExitToAppIcon />,
                                            color: '#9C27B0'
                                        }
                                    ].map((option, index) => (
                                        <Grid item xs={12} md={6} key={index}>
                                            <Box
                                                sx={{
                                                    height: '100%',
                                                    borderRadius: '20px',
                                                    overflow: 'hidden',
                                                    background: '#fff',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-8px)',
                                                        boxShadow: '0 8px 24px rgba(139, 30, 167, 0.15)',
                                                        '& .icon-container': {
                                                            transform: 'scale(1.1)',
                                                        }
                                                    }
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        p: 3,
                                                        background: `linear-gradient(135deg, ${option.color}15, ${option.color}05)`,
                                                        borderBottom: `2px solid ${option.color}`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                    }}
                                                >
                                                    <Box
                                                        className="icon-container"
                                                        sx={{
                                                            width: 50,
                                                            height: 50,
                                                            borderRadius: '15px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            background: `linear-gradient(135deg, ${option.color}, ${option.color}dd)`,
                                                            color: 'white',
                                                            transition: 'transform 0.3s ease',
                                                            boxShadow: `0 4px 12px ${option.color}40`,
                                                        }}
                                                    >
                                                        {option.icon}
                                                    </Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            fontWeight: 600,
                                                            color: option.color,
                                                        }}
                                                    >
                                                        {option.title}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ p: 3 }}>
                                                    <Typography
                                                        sx={{
                                                            color: '#555',
                                                            fontSize: '1.05rem',
                                                            lineHeight: 1.8,
                                                        }}
                                                    >
                                                        {option.content}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        ),
                        color: '#FF9800'
                    }
                ].map((stage, index) => (
                    <Accordion 
                        key={index}
                        sx={{
                            mb: 2,
                            border: 'none',
                            '&:before': { display: 'none' },
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                            borderRadius: '8px !important',
                            overflow: 'hidden',
                            '&:hover': {
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            },
                            transition: 'all 0.3s ease',
                            '& .MuiCollapse-root': {
                                transition: 'all 0.5s ease-out !important',
                            },
                            '& .MuiCollapse-entered': {
                                transform: 'translateX(0)',
                            },
                            '& .MuiCollapse-hidden': {
                                transform: 'translateX(100%)',
                            }
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: stage.color }} />}
                            sx={{
                                '& .MuiAccordionSummary-content': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: `${stage.color}15`,
                                    color: stage.color,
                                }}
                            >
                                {stage.icon}
                            </Box>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    fontWeight: 500,
                                    color: '#2A2A2A',
                                }}
                            >
                                {stage.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                transform: 'translateX(100%)',
                                animation: 'slideIn 0.5s ease-out forwards',
                                '@keyframes slideIn': {
                                    '0%': {
                                        transform: 'translateX(100%)',
                                        opacity: 0,
                                    },
                                    '100%': {
                                        transform: 'translateX(0)',
                                        opacity: 1,
                                    },
                                },
                            }}
                        >
                            {stage.content}
                        </AccordionDetails>
                    </Accordion>
                ))}
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

            {/* Early Revenue Section */}
            <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
                <Typography 
                    variant="h4" 
                    gutterBottom 
                    sx={{ 
                        mb: 4, 
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#8B1EA7'
                    }}
                >
                    Early Revenue
                </Typography>
                <Grid container spacing={3}>
                    {[
                        {
                            name: 'Holly Bolly',
                            image: img7, // Make sure to add your image
                            description: 'One Stop Shop for diverse product portfolio of womens western wear',
                            longDescription: 'A leading provider of diverse ready-to-wear women clothing in Gujarat, featuring Western, traditional styles, and womens undergarments.',
                            tags: ['Equity', 'Demat', 'PRIVATE LIMITED'],
                            badge: 'Featured'
                        },
                        {
                            name: 'Indian Crown',
                            image: img8, // Make sure to add your image
                            description: 'Innovative Handbags and Backpacks Redefining Quality and Versatility',
                            longDescription: 'The Indian Crown emphasizes utilizing top-notch materials like PU and Canvas in their products while ensuring an affordable price range.',
                            tags: ['Equity', 'Demat', 'PRIVATE LIMITED'],
                            badge: 'New'
                        }
                    ].map((company, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card 
                                onClick={() => handleCardClick(company)}
                                sx={{ 
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 8px 24px rgba(139, 30, 167, 0.15)',
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={company.image}
                                    alt={company.name}
                                    sx={{ 
                                        objectFit: 'cover',
                                        borderBottom: '2px solid rgba(139, 30, 167, 0.1)'
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    {company.badge && (
                                        <Chip
                                            label={company.badge}
                                            color="secondary"
                                            sx={{ 
                                                mb: 2,
                                                borderRadius: '16px',
                                                fontWeight: 500,
                                                backgroundColor: 'rgba(214, 22, 139, 0.1)',
                                                color: '#D6168B'
                                            }}
                                        />
                                    )}
                                    <Typography 
                                        variant="h5" 
                                        component="div"
                                        sx={{ 
                                            mb: 1,
                                            fontWeight: 'bold',
                                            color: '#8B1EA7'
                                        }}
                                    >
                                        {company.name}
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            mb: 2, 
                                            color: '#555',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {company.description}
                                    </Typography>
                                    <Typography 
                                        variant="body2" 
                                        sx={{ 
                                            mb: 2,
                                            color: '#666',
                                            fontSize: '0.9rem',
                                            lineHeight: 1.8
                                        }}
                                    >
                                        {company.longDescription}
                                    </Typography>
                                    <Box sx={{ 
                                        display: 'flex', 
                                        gap: 1, 
                                        flexWrap: 'wrap', 
                                        mt: 'auto' 
                                    }}>
                                        {company.tags.map((tag, i) => (
                                            <Chip 
                                                key={i} 
                                                label={tag} 
                                                variant="outlined"
                                                sx={{
                                                    borderRadius: '8px',
                                                    borderColor: 'rgba(139, 30, 167, 0.2)',
                                                    color: '#8B1EA7',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(139, 30, 167, 0.05)'
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

            {/* Ideas Section */}
            <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
                <Typography 
                    variant="h4" 
                    gutterBottom 
                    sx={{ 
                        mb: 4, 
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#8B1EA7'
                    }}
                >
                    Ideas
                </Typography>
                <Grid container spacing={3}>
                    {[
                        {
                            name: 'Fashal Dehat',
                            image: img9, // Make sure to add your image
                            description: 'A comprehensive agri-tech startup providing end to end solutions!',
                            tags: ['Physical', 'PRIVATE LIMITED'],
                            badge: 'New'
                        },
                        {
                            name: 'Agri Innovate',
                            image: img10, // Make sure to add your image
                            description: 'Innovative solutions for modern agriculture challenges.',
                            tags: ['Digital', 'PRIVATE LIMITED'],
                            badge: 'Featured'
                        }
                    ].map((idea, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card 
                                sx={{ 
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 8px 24px rgba(139, 30, 167, 0.15)',
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={idea.image}
                                    alt={idea.name}
                                    sx={{ 
                                        objectFit: 'cover',
                                        borderBottom: '2px solid rgba(139, 30, 167, 0.1)'
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    {idea.badge && (
                                        <Chip
                                            label={idea.badge}
                                            color="secondary"
                                            sx={{ 
                                                mb: 2,
                                                borderRadius: '16px',
                                                fontWeight: 500,
                                                backgroundColor: 'rgba(214, 22, 139, 0.1)',
                                                color: '#D6168B'
                                            }}
                                        />
                                    )}
                                    <Typography 
                                        variant="h5" 
                                        component="div"
                                        sx={{ 
                                            mb: 1,
                                            fontWeight: 'bold',
                                            color: '#8B1EA7'
                                        }}
                                    >
                                        {idea.name}
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            mb: 2, 
                                            color: '#555',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {idea.description}
                                    </Typography>
                                    <Box sx={{ 
                                        display: 'flex', 
                                        gap: 1, 
                                        flexWrap: 'wrap', 
                                        mt: 'auto' 
                                    }}>
                                        {idea.tags.map((tag, i) => (
                                            <Chip 
                                                key={i} 
                                                label={tag} 
                                                variant="outlined"
                                                sx={{
                                                    borderRadius: '8px',
                                                    borderColor: 'rgba(139, 30, 167, 0.2)',
                                                    color: '#8B1EA7',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(139, 30, 167, 0.05)'
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

            {/* Funded Companies Section */}
            <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
                <Typography 
                    variant="h4" 
                    gutterBottom 
                    sx={{ 
                        mb: 4, 
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#8B1EA7'
                    }}
                >
                    Funded Companies
                </Typography>
                <Grid container spacing={3}>
                    {[
                        {
                            name: 'Papa Cream',
                            image: papacream,
                            description: 'Papa Cream is a brand of premium ice cream that specializes in making gourmet ice cream at an affordable price.',
                            tags: ['Equity', 'Physical', 'PRIVATE LIMITED'],
                            logo: papacream,
                        },
                        {
                            name: 'Clapingo Education',
                            image: clapingo,
                            description: 'One-to-One Spoken English Classes',
                            longDescription: 'Clapingo has assisted 16,000 students to date, with 4,400 currently active. The platform successfully conducts 8,000 trial classes on a monthly basis.',
                            tags: ['Demat', 'PRIVATE LIMITED'],
                            logo: clapingo,
                        },
                        {
                            name: 'Investmates',
                            image: invest,
                            description: 'One-stop shop for comprehensive Portfolio Analysis',
                            longDescription: 'With 10k+ signups, 70% user retention, and Rs. 3 billion AUA, targeting 5-6X investor returns in 30-36 months.',
                            tags: ['Equity', 'Demat', 'PRIVATE LIMITED'],
                            logo: invest,
                        }
                    ].map((company, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card 
                                sx={{ 
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 8px 24px rgba(139, 30, 167, 0.15)',
                                    }
                                }}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={company.image}
                                        alt={company.name}
                                        sx={{ 
                                            objectFit: 'cover',
                                            borderBottom: '2px solid rgba(139, 30, 167, 0.1)'
                                        }}
                                    />
                                    {/* Company Logo */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: -30,
                                            left: 20,
                                            width: 60,
                                            height: 60,
                                            borderRadius: '50%',
                                            backgroundColor: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <img 
                                            src={company.logo} 
                                            alt={`${company.name} logo`}
                                            style={{ 
                                                width: '80%', 
                                                height: '80%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <CardContent sx={{ flexGrow: 1, p: 3, pt: 4 }}>
                                    <Typography 
                                        variant="h5" 
                                        component="div"
                                        sx={{ 
                                            mb: 1,
                                            fontWeight: 'bold',
                                            color: '#8B1EA7'
                                        }}
                                    >
                                        {company.name}
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            mb: 2, 
                                            color: '#555',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {company.description}
                                    </Typography>
                                    {company.longDescription && (
                                        <Typography 
                                            variant="body2" 
                                            sx={{ 
                                                mb: 2,
                                                color: '#666',
                                                fontSize: '0.9rem',
                                                lineHeight: 1.8
                                            }}
                                        >
                                            {company.longDescription}
                                        </Typography>
                                    )}
                                    <Box sx={{ 
                                        display: 'flex', 
                                        gap: 1, 
                                        flexWrap: 'wrap', 
                                        mt: 'auto' 
                                    }}>
                                        {company.tags.map((tag, i) => (
                                            <Chip 
                                                key={i} 
                                                label={tag} 
                                                variant="outlined"
                                                sx={{
                                                    borderRadius: '8px',
                                                    borderColor: 'rgba(139, 30, 167, 0.2)',
                                                    color: '#8B1EA7',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(139, 30, 167, 0.05)'
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