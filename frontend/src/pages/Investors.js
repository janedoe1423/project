import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, CircularProgress, TextField, Select, MenuItem, InputAdornment, Collapse, Grid, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import 'bootstrap/dist/css/bootstrap.min.css';
import gujaratBg from '../assets/images/Gujaratpicture.jpg';
import investorImage from '../assets/images/investor.jpeg';
import SearchIcon from '@mui/icons-material/Search';
import PaidIcon from '@mui/icons-material/Paid';
import CheckIcon from '@mui/icons-material/Check';

// Sample investor data
const sampleInvestors = [
    {
        id: 1,
        name: "Gujarat Venture Fund Limited",
        type: "Venture Capital",
        location: "Ahmedabad, Gujarat",
        investmentRange: "₹50L - ₹5Cr",
        sectors: ["Technology", "Healthcare", "Manufacturing"],
        portfolio: 24
    },
    {
        id: 2,
        name: "Ahmedabad Angels Network",
        type: "Angel Network",
        location: "Ahmedabad, Gujarat",
        investmentRange: "₹25L - ₹2Cr",
        sectors: ["E-commerce", "FinTech", "EdTech"],
        portfolio: 35
    },
    {
        id: 3,
        name: "GVFL Startup Fund",
        type: "Seed Fund",
        location: "Gandhinagar, Gujarat",
        investmentRange: "₹10L - ₹1Cr",
        sectors: ["Deep Tech", "Clean Energy", "AgriTech"],
        portfolio: 18
    },
    {
        id: 4,
        name: "Surat Innovation Capital",
        type: "Early Stage",
        location: "Surat, Gujarat",
        investmentRange: "₹20L - ₹3Cr",
        sectors: ["Diamond Tech", "Textile Innovation", "Smart City"],
        portfolio: 15
    },
    {
        id: 5,
        name: "Rajkot Investment Network",
        type: "Angel Investors",
        location: "Rajkot, Gujarat",
        investmentRange: "₹15L - ₹1.5Cr",
        sectors: ["Manufacturing", "Auto Tech", "IoT"],
        portfolio: 12
    },
    {
        id: 6,
        name: "Gujarat Growth Partners",
        type: "Growth Capital",
        location: "Vadodara, Gujarat",
        investmentRange: "₹1Cr - ₹10Cr",
        sectors: ["Pharma", "Biotech", "Industrial Tech"],
        portfolio: 28
    }
];

// Styled components for Investor Cards
const InvestorCard = styled(Box)(({ theme }) => ({
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
        borderColor: '#9470F8',
        boxShadow: '0 8px 30px rgba(148, 112, 248, 0.15)',
        
        '& .investor-type': {
            background: '#9470F8',
            color: 'white'
        },
        
        '& .investor-name': {
            color: '#C2FA4F'
        }
    },

    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #9470F8, #C2FA4F)',
        opacity: 0,
        transition: 'opacity 0.3s ease'
    },

    '&:hover::before': {
        opacity: 1
    }
}));

const InvestorType = styled.span`
  background: rgba(148, 112, 248, 0.1);
  color: #9470F8;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
`;

const InvestorName = styled.h3`
  color: #FFFFFF;
  font-size: 1.2rem;
  margin: 16px 0;
  font-weight: 600;
  transition: color 0.3s ease;
`;

const InvestorLocation = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;

  svg {
    color: #C2FA4F;
  }
`;

const InvestorFocus = styled.div`
  background: rgba(194, 250, 79, 0.1);
  color: #C2FA4F;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  display: inline-block;
  margin-top: 12px;
`;

const InvestorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 32px 0;
`;

const LoadMoreButton = styled.button`
  background: rgba(148, 112, 248, 0.1);
  border: 1px solid rgba(148, 112, 248, 0.3);
  color: #9470F8;
  padding: 12px 32px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  margin: 32px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(148, 112, 248, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(148, 112, 248, 0.2);
  }
`;

const NoResultsMessage = styled(Typography)`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin: 48px 0;
  font-size: 1.2rem;
`;

const FilterCategory = ({ title, isOpen, onToggle }) => (
    <Box sx={{ 
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        py: 2
    }}>
        <Box 
            onClick={onToggle}
            sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                cursor: 'pointer',
                color: '#FFFFFF',
                '&:hover': {
                    color: '#C2FA4F'
                }
            }}
        >
            <Typography sx={{ 
                fontSize: '1rem',
                fontWeight: 500,
            }}>
                {title}
            </Typography>
            <Typography sx={{ 
                color: '#C2FA4F',
                fontSize: '1.5rem',
                lineHeight: 1,
                transform: isOpen ? 'rotate(45deg)' : 'none',
                transition: 'transform 0.3s ease'
            }}>
                +
            </Typography>
        </Box>
        
        <Collapse in={isOpen}>
            <Box sx={{ mt: 2 }}>
                {/* Filter options will go here */}
            </Box>
        </Collapse>
    </Box>
);

const NavigationTabs = styled.div`
  display: flex;
  gap: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 32px;
  overflow-x: auto;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(148, 112, 248, 0.5);
    border-radius: 4px;
  }
`;

const Tab = styled.div`
  color: ${props => props.active ? '#C2FA4F' : 'rgba(255, 255, 255, 0.6)'};
  padding: 8px 0;
  cursor: pointer;
  position: relative;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: -9px;
    left: 0;
    right: 0;
    height: 2px;
    background: #C2FA4F;
    opacity: ${props => props.active ? 1 : 0};
    transition: opacity 0.3s ease;
  }
`;

// Filter options based on investor data
const filterOptions = {
    INDUSTRY: ['Venture Capital', 'Angel Network', 'Seed Fund', 'Early Stage', 'Growth Capital'],
    SECTOR: ['Technology', 'Healthcare', 'Manufacturing', 'E-commerce', 'FinTech', 'EdTech', 
             'Deep Tech', 'Clean Energy', 'AgriTech', 'Diamond Tech', 'Textile Innovation', 
             'Smart City', 'Auto Tech', 'IoT', 'Pharma', 'Biotech', 'Industrial Tech'],
    STAGE: ['Seed', 'Early Stage', 'Growth', 'Series A', 'Series B', 'Pre-Seed'],
    STATE: ['Gujarat'],
    CITY: ['Ahmedabad', 'Gandhinagar', 'Surat', 'Rajkot', 'Vadodara']
};

function Investors() {
    const navigate = useNavigate();
    const initialCount = 6;
    const startupsPerLoad = 6;

    // States
    const [activeTab, setActiveTab] = useState('Investors');
    const [investors, setInvestors] = useState([
        {
            id: 1,
            name: 'Gujarat Angel Investors',
            type: 'Angel Investor',
            location: 'Ahmedabad, Gujarat',
            focus: 'Technology'
        },
        {
            id: 2,
            name: 'Venture Catalysts',
            type: 'Venture Capital',
            location: 'Mumbai, Maharashtra',
            focus: 'Startups'
        },
        // Add more investor data as needed
    ]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('default');
    const [filteredInvestors, setFilteredInvestors] = useState([]);
    const [displayedCount, setDisplayedCount] = useState(initialCount);
    const [selectedFilters, setSelectedFilters] = useState({
        INDUSTRY: [],
        SECTOR: [],
        STAGE: [],
        STATE: [],
        CITY: []
    });
    const [openFilters, setOpenFilters] = useState({
        INDUSTRY: false,
        SECTOR: false,
        STAGE: false,
        STATE: false,
        CITY: false
    });

    // Sorting options
    const sortOptions = [
        { value: 'default', label: 'Default' },
        { value: 'portfolioHighToLow', label: 'Portfolio Size: High to Low' },
        { value: 'portfolioLowToHigh', label: 'Portfolio Size: Low to High' },
        { value: 'nameAZ', label: 'Name: A to Z' },
        { value: 'nameZA', label: 'Name: Z to A' },
        { value: 'investmentHighToLow', label: 'Investment Range: High to Low' },
        { value: 'investmentLowToHigh', label: 'Investment Range: Low to High' }
    ];

    useEffect(() => {
        filterInvestors();
    }, [searchQuery, investors, selectedFilters]);

    const filterInvestors = () => {
        let filtered = [...investors];
        const query = searchQuery.toLowerCase().trim();

        if (query) {
            filtered = filtered.filter(investor => {
                return (
                    investor.name.toLowerCase().includes(query) ||
                    investor.location.toLowerCase().includes(query) ||
                    investor.type.toLowerCase().includes(query) ||
                    investor.focus.toLowerCase().includes(query)
                );
            });
        }

        Object.keys(selectedFilters).forEach(filterType => {
            if (selectedFilters[filterType].length > 0) {
                filtered = filtered.filter(investor => {
                    switch(filterType) {
                        case 'type':
                            return selectedFilters.type.includes(investor.type);
                        case 'focus':
                            return selectedFilters.focus.includes(investor.focus);
                        case 'state':
                            return selectedFilters.state.includes(investor.location.split(', ')[1]);
                        case 'city':
                            return selectedFilters.city.includes(investor.location.split(', ')[0]);
                        default:
                            return true;
                    }
                });
            }
        });

        setFilteredInvestors(filtered);
        setDisplayedCount(initialCount);
    };

    const handleFilterChange = (filterType, value) => {
        setSelectedFilters(prev => ({
            ...prev,
            [filterType]: prev[filterType].includes(value)
                ? prev[filterType].filter(item => item !== value)
                : [...prev[filterType], value]
        }));
    };

    const handleLoadMore = () => {
        setDisplayedCount(prev => prev + startupsPerLoad);
    };

    const handleShowLess = () => {
        setDisplayedCount(initialCount);
        document.querySelector('.investor-grid')?.scrollIntoView({ behavior: 'smooth' });
    };

    const displayedInvestors = filteredInvestors.slice(0, displayedCount);
    const hasMore = displayedCount < filteredInvestors.length;

    // Toggle filter sections
    const toggleFilter = (filterType) => {
        setOpenFilters(prev => ({
            ...prev,
            [filterType]: !prev[filterType]
        }));
    };

    // Filter investors based on selected filters
    const getFilteredInvestors = () => {
        return sampleInvestors.filter(investor => {
            // Check if investor matches all selected filters
            const matchesIndustry = selectedFilters.INDUSTRY.length === 0 || 
                selectedFilters.INDUSTRY.includes(investor.type);
            
            const matchesSector = selectedFilters.SECTOR.length === 0 || 
                investor.sectors.some(sector => selectedFilters.SECTOR.includes(sector));
            
            const matchesCity = selectedFilters.CITY.length === 0 || 
                selectedFilters.CITY.includes(investor.location.split(',')[0].trim());
            
            const matchesState = selectedFilters.STATE.length === 0 || 
                selectedFilters.STATE.includes(investor.location.split(',')[1].trim());

            return matchesIndustry && matchesSector && matchesCity && matchesState;
        });
    };

    // Search function
    const searchInvestors = (investors) => {
        if (!searchQuery) return investors;

        const query = searchQuery.toLowerCase();
        return investors.filter(investor => 
            investor.name.toLowerCase().includes(query) ||
            investor.location.toLowerCase().includes(query) ||
            investor.type.toLowerCase().includes(query) ||
            investor.sectors.some(sector => sector.toLowerCase().includes(query))
        );
    };

    // Sort function
    const sortInvestors = (investors) => {
        switch (sortOption) {
            case 'portfolioHighToLow':
                return [...investors].sort((a, b) => b.portfolio - a.portfolio);
            case 'portfolioLowToHigh':
                return [...investors].sort((a, b) => a.portfolio - b.portfolio);
            case 'nameAZ':
                return [...investors].sort((a, b) => a.name.localeCompare(b.name));
            case 'nameZA':
                return [...investors].sort((a, b) => b.name.localeCompare(a.name));
            case 'investmentHighToLow':
                return [...investors].sort((a, b) => {
                    const aValue = parseInt(a.investmentRange.split('-')[1].replace(/[^\d]/g, ''));
                    const bValue = parseInt(b.investmentRange.split('-')[1].replace(/[^\d]/g, ''));
                    return bValue - aValue;
                });
            case 'investmentLowToHigh':
                return [...investors].sort((a, b) => {
                    const aValue = parseInt(a.investmentRange.split('-')[0].replace(/[^\d]/g, ''));
                    const bValue = parseInt(b.investmentRange.split('-')[0].replace(/[^\d]/g, ''));
                    return aValue - bValue;
                });
            default:
                return investors;
        }
    };

    // Filter section component
    const FilterSection = ({ title, options, type }) => (
        <Box sx={{ mb: 3 }}>
            <Box
                onClick={() => toggleFilter(type)}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    mb: 2
                }}
            >
                <Typography sx={{ color: '#FFFFFF', fontWeight: 500 }}>
                    {title}
                </Typography>
                <Typography sx={{ 
                    color: '#C2FA4F',
                    transform: openFilters[type] ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.3s ease'
                }}>
                    +
                </Typography>
            </Box>

            <Collapse in={openFilters[type]}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {options.map((option) => (
                        <Box
                            key={option}
                            onClick={() => handleFilterChange(type, option)}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                cursor: 'pointer',
                                color: selectedFilters[type].includes(option) 
                                    ? '#C2FA4F' 
                                    : 'rgba(255, 255, 255, 0.7)',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    background: 'rgba(194, 250, 79, 0.1)'
                                },
                                ...(selectedFilters[type].includes(option) && {
                                    background: 'rgba(194, 250, 79, 0.1)'
                                })
                            }}
                        >
                            <Box sx={{
                                width: 20,
                                height: 20,
                                border: '2px solid',
                                borderColor: selectedFilters[type].includes(option) 
                                    ? '#C2FA4F' 
                                    : 'rgba(255, 255, 255, 0.3)',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {selectedFilters[type].includes(option) && (
                                    <CheckIcon sx={{ fontSize: 16, color: '#C2FA4F' }} />
                                )}
                            </Box>
                            <Typography variant="body2">
                                {option}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Collapse>
        </Box>
    );

    // Function to render content based on active tab
    const renderContent = () => {
        switch(activeTab) {
            case 'Investors':
                let filteredInvestors = getFilteredInvestors();
                filteredInvestors = searchInvestors(filteredInvestors);
                filteredInvestors = sortInvestors(filteredInvestors);
                
                return (
                    <Grid container spacing={3}>
                        {filteredInvestors.map((investor) => (
                            <Grid item xs={12} sm={6} md={4} key={investor.id}>
                                <InvestorCard 
                                    onClick={() => {
                                        console.log('Navigating to:', `/investor/${investor.id}`);
                                        navigate(`/investor/${investor.id}`, { state: { investor } });
                                    }}
                                >
                                    {/* Investor Type Badge */}
                                    <Typography
                                        className="investor-type"
                                        sx={{
                                            display: 'inline-block',
                                            background: 'rgba(148, 112, 248, 0.1)',
                                            color: '#9470F8',
                                            padding: '6px 12px',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: 500,
                                            mb: 2,
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {investor.type}
                                    </Typography>

                                    {/* Investor Name */}
                                    <Typography
                                        className="investor-name"
                                        variant="h6"
                                        sx={{
                                            color: '#FFFFFF',
                                            fontWeight: 600,
                                            mb: 2,
                                            transition: 'color 0.3s ease',
                                            fontSize: '1.25rem',
                                            lineHeight: 1.3
                                        }}
                                    >
                                        {investor.name}
                                    </Typography>

                                    {/* Location */}
                                    <Box sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: 1,
                                        mb: 2,
                                        color: 'rgba(255, 255, 255, 0.7)'
                                    }}>
                                        <LocationOnIcon sx={{ color: '#C2FA4F', fontSize: '1.2rem' }} />
                                        <Typography variant="body2">{investor.location}</Typography>
                                    </Box>

                                    {/* Investment Range */}
                                    <Box sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: 1,
                                        mb: 2,
                                        color: '#C2FA4F'
                                    }}>
                                        <PaidIcon sx={{ fontSize: '1.2rem' }} />
                                        <Typography variant="body2">{investor.investmentRange}</Typography>
                                    </Box>

                                    {/* Focus Sectors */}
                                    <Box sx={{ mb: 2 }}>
                                        <Typography 
                                            variant="body2" 
                                            sx={{ 
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                mb: 1
                                            }}
                                        >
                                            Focus Sectors:
                                        </Typography>
                                        <Box sx={{ 
                                            display: 'flex', 
                                            gap: 1, 
                                            flexWrap: 'wrap'
                                        }}>
                                            {investor.sectors.map((sector, index) => (
                                                <Chip
                                                    key={index}
                                                    label={sector}
                                                    size="small"
                                                    sx={{
                                                        background: 'rgba(194, 250, 79, 0.1)',
                                                        color: '#C2FA4F',
                                                        borderRadius: '12px',
                                                        fontSize: '0.75rem',
                                                        height: '24px',
                                                        '&:hover': {
                                                            background: 'rgba(194, 250, 79, 0.2)'
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                    {/* Portfolio Count */}
                                    <Box sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        mt: 'auto',
                                        pt: 2,
                                        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                                    }}>
                                        <Typography 
                                            variant="body2" 
                                            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                                        >
                                            Portfolio Companies
                                        </Typography>
                                        <Typography sx={{ 
                                            color: '#9470F8',
                                            fontWeight: 600,
                                            fontSize: '1.1rem'
                                        }}>
                                            {investor.portfolio}
                                        </Typography>
                                    </Box>
                                </InvestorCard>
                            </Grid>
                        ))}
                    </Grid>
                );
            case 'Startups':
                return <Typography sx={{ color: '#fff' }}>Startups Content</Typography>;
            case 'Mentors':
                return <Typography sx={{ color: '#fff' }}>Mentors Content</Typography>;
            case 'Accelerators':
                return <Typography sx={{ color: '#fff' }}>Accelerators Content</Typography>;
            case 'Corporates':
                return <Typography sx={{ color: '#fff' }}>Corporates Content</Typography>;
            case 'Incubators':
                return <Typography sx={{ color: '#fff' }}>Incubators Content</Typography>;
            case 'Government Bodies':
                return <Typography sx={{ color: '#fff' }}>Government Bodies Content</Typography>;
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
                            Building <span style={{ color: '#C2FA4F' }}>Wealth</span>,
                        </Typography>
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
                            Creating Futures
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
                            Together.
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
                            Connecting visionary investors with Gujarat's most promising startups. 
                            Our platform facilitates strategic partnerships, enables smart capital deployment, 
                            and drives innovation across sectors. Join us in shaping the future of 
                            Gujarat's entrepreneurial ecosystem.
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
                                Invest
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
                                Projects
                            </Button>
                        </Box>
                    </Box>

                    {/* Image Section */}
                    <Box 
                        sx={{ 
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
                        }}
                    >
                        <Box
                            component="img"
                            src={investorImage}
                            alt="Investment Concept"
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

                {/* Main Title */}
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
                    Gujarat Investor Network
                </Typography>

                {/* Subtitle */}
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center',
                        color: '#C2FA4F',
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 400,
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                        mb: 6,
                        opacity: 0.9,
                        textShadow: '0 0 15px rgba(194, 250, 79, 0.3)'
                    }}
                >
                    Connecting Capital with Innovation
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
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#C2FA4F',
                            fontFamily: 'Raleway, sans-serif',
                            fontWeight: 500,
                            fontSize: { xs: '1.75rem', md: '2rem' },
                            mb: 3,
                            textShadow: '0 0 15px rgba(194, 250, 79, 0.2)',
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -10,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '60px',
                                height: '2px',
                                background: 'linear-gradient(90deg, #9470F8 0%, #C2FA4F 100%)'
                            }
                        }}
                    >
                        Overview
                    </Typography>
                    <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontFamily: 'Raleway, sans-serif',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            lineHeight: 1.8,
                            opacity: 0.9,
                            '& strong': {
                                color: '#9470F8',
                                fontWeight: 500
                            }
                        }}
                    >
                        The <strong>Gujarat Investor Network</strong> connects promising startups with 
                        <strong> angel investors</strong>, <strong>venture capitalists</strong>, and 
                        <strong> investment firms</strong>. Our platform facilitates meaningful connections, 
                        enabling <strong>strategic partnerships</strong> and <strong>growth opportunities</strong> 
                        in Gujarat's thriving startup ecosystem.
                    </Typography>
                </Box>

                {/* Feature Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
                        gap: 3,
                        mb: 8
                    }}
                >
                    {[
                        { 
                            icon: '💼', 
                            title: 'Angel Investors',
                            description: 'Connect with experienced angel investors ready to back innovative startups.',
                            gradient: 'linear-gradient(135deg, #9470F8 0%, #6544C4 100%)'
                        },
                        { 
                            icon: '🏢', 
                            title: 'VC Firms',
                            description: 'Access leading venture capital firms seeking high-potential investments.',
                            gradient: 'linear-gradient(135deg, #C2FA4F 0%, #9BCD3D 100%)'
                        },
                        { 
                            icon: '🤝', 
                            title: 'Strategic Partners',
                            description: 'Find strategic investors who bring both capital and industry expertise.',
                            gradient: 'linear-gradient(135deg, #9470F8 0%, #AE63F0 100%)'
                        },
                        { 
                            icon: '📈', 
                            title: 'Growth Capital',
                            description: 'Secure funding for different stages of your startup journey.',
                            gradient: 'linear-gradient(135deg, #C2FA4F 0%, #9BCD3D 100%)'
                        }
                    ].map((item, index) => (
                        <Box
                            key={index}
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
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: '2.5rem',
                                    mb: 2,
                                    background: item.gradient,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                {item.icon}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#FFFFFF',
                                    mb: 1,
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
                    ))}
                </Box>

                {/* Main Layout Container */}
                <Box sx={{ display: 'flex', gap: 4 }}>
                    {/* Filters Sidebar */}
                    <Box sx={{
                        width: 280,
                        flexShrink: 0,
                        background: 'rgba(11, 9, 16, 0.8)',
                        borderRadius: '12px',
                        p: 3,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        height: 'fit-content'
                    }}>
                        <Typography sx={{ 
                            color: '#FFFFFF', 
                            fontSize: '1.25rem',
                            fontWeight: 500,
                            mb: 2
                        }}>
                            Filters
                        </Typography>
                        
                        {Object.entries(filterOptions).map(([type, options]) => (
                            <FilterSection
                                key={type}
                                title={type}
                                options={options}
                                type={type}
                            />
                        ))}
                    </Box>

                    {/* Right Content Area */}
                    <Box sx={{ flex: 1 }}>
                        {/* Search and Sort Bar */}
                        <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            mb: 4,
                            gap: 2
                        }}>
                            <TextField
                                placeholder="Search by startup name, location, industry, or stage..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    flex: 1,
                                    '& .MuiOutlinedInput-root': {
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        color: '#FFFFFF',
                                        '& fieldset': {
                                            borderColor: 'rgba(148, 112, 248, 0.2)'
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(148, 112, 248, 0.4)'
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#9470F8'
                                        }
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'rgba(255, 255, 255, 0.5)'
                                    }
                                }}
                            />

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Typography sx={{ color: '#FFFFFF' }}>Sort By</Typography>
                                <Select
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                    sx={{
                                        width: 200,
                                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                                        color: '#FFFFFF',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(148, 112, 248, 0.2)'
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(148, 112, 248, 0.4)'
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#9470F8'
                                        },
                                        '& .MuiSelect-icon': {
                                            color: '#FFFFFF'
                                        }
                                    }}
                                >
                                    {sortOptions.map(option => (
                                        <MenuItem 
                                            key={option.value} 
                                            value={option.value}
                                            sx={{
                                                '&:hover': {
                                                    bgcolor: 'rgba(148, 112, 248, 0.1)'
                                                }
                                            }}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Box>
                        </Box>

                        {/* Navigation Tabs */}
                        <Box sx={{ 
                            borderBottom: 1, 
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            mb: 4
                        }}>
                            <Box sx={{ 
                                display: 'flex', 
                                gap: 4,
                                overflowX: 'auto',
                                '&::-webkit-scrollbar': {
                                    height: '4px'
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: 'rgba(255, 255, 255, 0.1)'
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: 'rgba(148, 112, 248, 0.5)',
                                    borderRadius: '4px'
                                }
                            }}>
                                {[
                                    'Startups', 
                                    'Mentors',
                                    'Investors',
                                    'Accelerators',
                                    'Corporates',
                                    'Incubators',
                                    'Government Bodies'
                                ].map((tab) => (
                                    <Box
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        sx={{
                                            py: 2,
                                            px: 1,
                                            cursor: 'pointer',
                                            color: activeTab === tab ? '#C2FA4F' : 'rgba(255, 255, 255, 0.6)',
                                            borderBottom: activeTab === tab ? '2px solid #C2FA4F' : 'none',
                                            transition: 'all 0.3s ease',
                                            whiteSpace: 'nowrap',
                                            '&:hover': {
                                                color: '#C2FA4F'
                                            }
                                        }}
                                    >
                                        {tab}
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        {/* Content Area */}
                        <Box sx={{ flex: 1 }}>
                            {renderContent()}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Investors;
