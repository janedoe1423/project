import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Container, Typography, CircularProgress, FormControlLabel, Checkbox, TextField, Select, MenuItem, Button, InputAdornment } from '@mui/material';
import gujaratBg from '../assets/images/Gujaratpicture.jpg';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import topStartupsImage from '../assets/images/startupsgujarat.jpg';
import { styled as muiStyled } from '@mui/material/styles';  // Rename the import to avoid conflict
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, ComposedChart } from 'recharts';

// Replace all instances of `styled` in your component definitions with `muiStyled`
const StartupCard = muiStyled('div')(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '16px',
  padding: '24px',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(148, 112, 248, 0.1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  backdropFilter: 'blur(10px)',

  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: '#9470F8',
    boxShadow: '0 8px 30px rgba(148, 112, 248, 0.15)',
    
    '& .startup-stage': {
      background: '#9470F8',
      color: 'white',
    },
    
    '& .startup-name': {
      color: '#C2FA4F',
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
    transition: 'opacity 0.3s ease',
  },

  '&:hover::before': {
    opacity: 1,
  }
}));

const StartupStage = muiStyled('span')(({ theme }) => ({
  background: 'rgba(148, 112, 248, 0.1)',
  color: '#9470F8',
  padding: '6px 12px',
  borderRadius: '20px',
  fontSize: '0.85rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
}));

const StartupName = muiStyled('h3')(({ theme }) => ({
  color: '#FFFFFF',
  fontSize: '1.2rem',
  margin: '16px 0',
  fontWeight: 600,
  transition: 'color 0.3s ease',
}));

const StartupLocation = muiStyled('div')(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  margin: '8px 0',

  '& svg': {
    color: '#C2FA4F',
  }
}));

const StartupIndustry = muiStyled('div')(({ theme }) => ({
  background: 'rgba(194, 250, 79, 0.1)',
  color: '#C2FA4F',
  padding: '6px 12px',
  borderRadius: '20px',
  fontSize: '0.85rem',
  display: 'inline-block',
  marginTop: '12px',
}));

const StartupGrid = muiStyled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '24px',
  padding: '24px',
}));

const SearchContainer = muiStyled('div')(({ theme }) => ({
  margin: '24px auto',
  maxWidth: '600px',
  position: 'relative',
}));

const SearchField = muiStyled(TextField)(({ theme }) => ({
  width: '150%',
  
  '& .MuiOutlinedInput-root': {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    
    '& fieldset': {
      borderColor: 'rgba(148, 112, 248, 0.2)',
    },
    
    '&:hover fieldset': {
      borderColor: 'rgba(148, 112, 248, 0.4)',
    },
    
    '&.Mui-focused fieldset': {
      borderColor: '#9470F8',
    }
  },
  
  '& .MuiOutlinedInput-input': {
    color: '#FFFFFF',
    padding: '16px',
    
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.5)',
      opacity: 1,
    }
  },
  
  '& .MuiInputAdornment-root .MuiSvgIcon-root': {
    color: 'rgba(255, 255, 255, 0.5)',
  }
}));

const NoResultsMessage = muiStyled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.7)',
  margin: '48px 0',
  fontSize: '1.2rem',
}));

const StatsSection = muiStyled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  background: 'linear-gradient(90deg, rgba(26, 26, 29, 0.9), rgba(78, 78, 80, 0.9))',
  borderRadius: '20px',
  padding: '40px 20px',
  margin: '40px 0',
  color: '#FFFFFF',
  fontFamily: 'Raleway, sans-serif',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  
  '@media (max-width: 1024px)': {
    flexWrap: 'wrap',
    gap: '20px',
  },
  
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding: '20px',
  }
}));

const StatCard = muiStyled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: '30px',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  minWidth: '200px',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(194, 250, 79, 0.3)',
  },
  
  '@media (max-width: 1024px)': {
    flex: '1 1 calc(50% - 20px)',
    minWidth: '150px',
  },
  
  '@media (max-width: 768px)': {
    width: '100%',
    margin: '10px 0',
  }
}));

const StatIcon = muiStyled('div')(({ theme }) => ({
  fontSize: '3.5rem',
  marginBottom: '15px',
  transition: 'transform 0.3s ease',
  
  '&:hover': {
    transform: 'scale(1.1)',
  }
}));

const StatValue = muiStyled('div')(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: '10px',
  background: 'linear-gradient(135deg, #C2FA4F, #9470F8)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  
  '&:hover': {
    background: 'linear-gradient(135deg, #9470F8, #C2FA4F)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  }
}));

const StatLabel = muiStyled('div')(({ theme }) => ({
  fontSize: '1.1rem',
  color: 'rgba(255, 255, 255, 0.8)',
  fontWeight: 500,
  letterSpacing: '0.5px',
  
  '&:hover': {
    color: '#FFFFFF',
  }
}));

// Updated colors with more attractive palette
const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];

// Custom styles for the Statistics Section
const StatisticsSection = muiStyled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(90deg, rgba(26, 26, 29, 0.9), rgba(78, 78, 80, 0.9))',
  borderRadius: '20px',
  padding: '40px',
  margin: '40px 0',
  color: '#FFFFFF',
  fontFamily: 'Raleway, sans-serif',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  
  '& .graphs-container': {
    display: 'flex',
    gap: '30px',
    width: '100%',
    flexWrap: 'wrap',
  },
  
  '& .graph-item': {
    flex: '1 1 45%',
    minWidth: '400px',
  },
  
  '@media (max-width: 968px)': {
    '& .graph-item': {
      flex: '1 1 100%',
    }
  }
}));

const StatItem = muiStyled('div')(({ theme }) => ({
  width: '100%',
  margin: '20px 0',
  padding: '20px',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '15px',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
  }
}));

const StatTitle = muiStyled('div')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: '20px',
  color: '#C2FA4F',
  textShadow: '0 2px 10px rgba(194, 250, 79, 0.3)',
}));

// Custom renderer for the pie chart labels
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="#FFFFFF"
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      style={{ 
        fontSize: '12px',
        fontWeight: 500,
        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
      }}
    >
      {`${name} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

// Updated sample data with more sectors
const sectorData = [
  { name: 'Technology', value: 35 },
  { name: 'Healthcare', value: 25 },
  { name: 'FinTech', value: 20 },
  { name: 'E-commerce', value: 15 },
  { name: 'Others', value: 5 }
];

// Add this growth data
const growthData = [
  { month: 'Jan', monthlyGrowth: 35, annualGrowth: 20, sectorGrowth: 25 },
  { month: 'Feb', monthlyGrowth: 52, annualGrowth: 32, sectorGrowth: 40 },
  { month: 'Mar', monthlyGrowth: 32, annualGrowth: 45, sectorGrowth: 30 },
  { month: 'Apr', monthlyGrowth: 31, annualGrowth: 78, sectorGrowth: 55 },
  { month: 'May', monthlyGrowth: 28, annualGrowth: 69, sectorGrowth: 48 },
  { month: 'Jun', monthlyGrowth: 26, annualGrowth: 65, sectorGrowth: 52 },
  { month: 'Jul', monthlyGrowth: 37, annualGrowth: 85, sectorGrowth: 58 },
  { month: 'Aug', monthlyGrowth: 35, annualGrowth: 65, sectorGrowth: 45 },
  { month: 'Sep', monthlyGrowth: 31, annualGrowth: 45, sectorGrowth: 48 },
  { month: 'Oct', monthlyGrowth: 39, annualGrowth: 80, sectorGrowth: 62 },
  { month: 'Nov', monthlyGrowth: 20, annualGrowth: 25, sectorGrowth: 28 },
  { month: 'Dec', monthlyGrowth: 72, annualGrowth: 75, sectorGrowth: 70 }
];

function Startup({ themeMode = 'light' }) {
    const navigate = useNavigate();
    const [startups, setStartups] = useState([
        {
            id: 1,
            name: 'DWICHAKRA SERVICES PRIVATE LIMITED',
            logo: '../assets/images/dwichakra.png',
            stage: 'Validation',
            location: 'Bengaluru Urban, Karnataka',
            industry: 'Internet of Things'
        },
        {
            id: 2,
            name: 'PROQX B2B PROCUREMENT PRIVATE LIMITED',
            logo: '/path-to-logo.png',
            stage: 'Validation',
            location: 'Ahmedabad, Gujarat',
            industry: 'Enterprise Software'
        },
        {
            id: 3,
            name: 'E-KAALI TECH PRIVATE LIMITED',
            logo: '/path-to-logo.png',
            stage: 'Validation',
            location: 'Ghaziabad, Uttar Pradesh',
            industry: 'Agriculture'
        },
        {
            id: 4,
            name: 'PROTHIX LIFESCIENCES PRIVATE LIMITED',
            logo: '/path-to-logo.png',
            stage: 'Validation',
            location: 'Raipur, Chhattisgarh',
            industry: 'Healthcare & Lifesciences'
        },
        {
            id: 5,
            name: 'NOURISCA FOODS PRIVATE LIMITED',
            logo: '/path-to-logo.png',
            stage: 'Early Traction',
            location: 'Lucknow, Uttar Pradesh',
            industry: 'Food & Beverages'
        },
        {
            id: 6,
            name: 'KMFD PRIVATE LIMITED',
            logo: '/path-to-logo.png',
            stage: 'Early Traction',
            location: 'Bhopal, Madhya Pradesh',
            industry: 'Fashion'
        },
        {
            id: 7,
            name: 'TAXBOTGPT AI PRIVATE LIMITED',
            logo: '/path-to-logo.png',
            stage: 'Scaling',
            location: 'Central Delhi, Delhi',
            industry: 'AI'
        },
        {
            id: 8,
            name: 'SLASH MARK IT SOLUTIONS (OPC) PRIVATE LIMITED',
            logo: '/path-to-logo.png',
            stage: 'Ideation',
            location: 'Karimnagar, Telangana',
            industry: 'IT Services'
        },
        {
            id: 9,
            name: 'KONARK GREEN ENVIRO PRIVATE LIMITED',
            logo: '/path-to-logo.png',
            stage: 'Scaling',
            location: 'Thane, Maharashtra',
            industry: 'Waste Management'
        }
    ]);
    const [loading, setLoading] = useState(true);
    const [openSection, setOpenSection] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('Startups');
    const [selectedFilters, setSelectedFilters] = useState({
        industry: [],
        sector: [],
        stage: [],
        state: [],
        city: []
    });
    const [filteredStartups, setFilteredStartups] = useState([]);

    const filterOptions = {
        industry: [
            'Internet of Things',
            'Enterprise Software',
            'Agriculture',
            'Healthcare & Lifesciences',
            'Food & Beverages',
            'Fashion',
            'AI',
            'IT Services',
            'Waste Management'
        ],
        sector: ['Public', 'Private', 'Government', 'Non-Profit'],
        stage: ['Ideation', 'Validation', 'Early Traction', 'Scaling'],
        state: [ 'Gujarat'],
        city: ['Bengaluru Urban', 'Ahmedabad', 'Ghaziabad', 'Mumbai', 'Delhi', 'Karimnagar']
    };

    useEffect(() => {
        // Fetch startups data from your API
        fetchStartups();
    }, []);

    useEffect(() => {
        filterStartups();
    }, [searchQuery, startups]);

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

    const handleSectionClick = (section) => {
        setOpenSection(openSection === section ? '' : section);
    };

    const handleFilterChange = (type, value) => {
        setSelectedFilters(prev => ({
            ...prev,
            [type]: prev[type].includes(value)
                ? prev[type].filter(item => item !== value)
                : [...prev[type], value]
        }));
    };

    const getFilteredStartups = () => {
        return startups.filter(startup => {
            const matchesIndustry = selectedFilters.industry.length === 0 || 
                                    selectedFilters.industry.includes(startup.industry);
            
            const matchesSector = selectedFilters.sector.length === 0 || 
                                selectedFilters.sector.includes(startup.sector);
            
            const matchesStage = selectedFilters.stage.length === 0 || 
                                selectedFilters.stage.includes(startup.stage);
            
            const [city, state] = startup.location.split(', ');
            const matchesState = selectedFilters.state.length === 0 || 
                                selectedFilters.state.includes(state);
            
            const matchesCity = selectedFilters.city.length === 0 || 
                                selectedFilters.city.includes(city);

            return matchesIndustry && matchesSector && matchesStage && matchesState && matchesCity;
        });
    };

    const handleStartupClick = (startupId) => {
        navigate(`/startup-profile/${startupId}`);
    };

    const filterStartups = () => {
        const query = searchQuery.toLowerCase().trim();
        
        if (!query) {
            setFilteredStartups(startups);
            return;
        }

        const filtered = startups.filter(startup => {
            return (
                startup.name.toLowerCase().includes(query) ||
                startup.location.toLowerCase().includes(query) ||
                startup.industry.toLowerCase().includes(query) ||
                startup.stage.toLowerCase().includes(query)
            );
        });

        setFilteredStartups(filtered);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const FilterSection = ({ title, type }) => (
        <Box sx={{ 
            position: 'relative',
            mb: 3,
            pb: 2,
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
            <Box
                onClick={() => handleSectionClick(type)}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    height: '24px',
                }}
            >
                <Typography
                    sx={{
                        color: '#FFFFFF',
                        fontSize: '1rem',
                        fontWeight: 500,
                        letterSpacing: '0.5px'
                    }}
                >
                    {title}
                </Typography>
                <Box 
                    sx={{ 
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '24px',
                        height: '24px'
                    }}
                >
                    <AddIcon 
                        sx={{ 
                            color: '#FF6B6B',
                            fontSize: '18px',
                            transform: openSection === type ? 'rotate(45deg)' : 'none',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                </Box>
            </Box>
            {openSection === type && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
                    {filterOptions[type].map((item) => (
                        <FormControlLabel
                            key={item}
                            control={
                                <Checkbox 
                                    checked={selectedFilters[type]?.includes(item)}
                                    onChange={() => handleFilterChange(type, item)}
                                    sx={{ 
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        '&.Mui-checked': {
                                            color: '#9470F8'
                                        }
                                    }}
                                />
                            }
                            label={item}
                            sx={{ 
                                color: 'rgba(255, 255, 255, 0.8)',
                                '& .MuiTypography-root': { 
                                    fontSize: '0.9rem'
                                }
                            }}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );

    const FilterSidebar = () => (
        <Box sx={{ 
           
            
            '& .MuiTypography-root': {
                fontFamily: 'Raleway, sans-serif'
            }
        }}>
            <FilterSection title="INDUSTRY" type="industry" />
            <FilterSection title="SECTOR" type="sector" />
            <FilterSection title="STAGE" type="stage" />
            <FilterSection title="STATE" type="state" />
            <FilterSection title="CITY" type="city" />
        </Box>
    );

    function StatCardComponent({ icon, value, label }) {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <StatCard 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <StatIcon>{icon}</StatIcon>
                <StatValue isHovered={isHovered}>{value}</StatValue>
                <StatLabel isHovered={isHovered}>{label}</StatLabel>
            </StatCard>
        );
    }

    return (
        <Box
            sx={{
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
            }}
        >
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

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: { xs: '40px 20px', md: '60px 80px' },
                    background: 'linear-gradient(90deg, rgba(11,9,16,0.95) 0%, rgba(11,9,16,0.8) 100%)',
                    position: 'relative',
                    zIndex: 3,
                }}
            >
                <Box sx={{ flex: 1, maxWidth: '600px' }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            fontWeight: 700,
                            color: '#FFFFFF',
                            mb: 2,
                            '& .highlight': {
                                color: '#C2FA4F',
                            }
                        }}
                    >
                        The true <span className="highlight">start-up</span><br />
                        of a business is what<br />
                        happens <span className="highlight">before</span> you start-up.
                    </Typography>
                    
                    <Typography
                        sx={{
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            mb: 4,
                            maxWidth: '90%'
                        }}
                    >
                        Discover Gujarat's vibrant startup ecosystem where ideas transform into 
                        impactful ventures. Whether you're an aspiring entrepreneur or an 
                        established founder, explore resources, connect with mentors, and 
                        access the support you need to turn your vision into reality.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#C2FA4F',
                                color: '#0B0910',
                                fontSize: '1rem',
                                padding: '12px 32px',
                                '&:hover': {
                                    bgcolor: '#9BCD3D'
                                }
                            }}
                        >
                            Start Up
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: 'rgba(255,255,255,0.3)',
                                color: '#FFFFFF',
                                fontSize: '1rem',
                                padding: '12px 32px',
                                '&:hover': {
                                    borderColor: '#FFFFFF',
                                    bgcolor: 'rgba(255,255,255,0.1)'
                                }
                            }}
                        >
                            PROJECTS
                        </Button>
                    </Box>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        display: { xs: 'none', md: 'block' },
                        position: 'relative',
                        height: '500px',
                    }}
                >
                    <Box
                        component="img"
                        src={topStartupsImage}
                        alt="Startup Investment"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '20px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        }}
                    />
                </Box>
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, pt: 6, pb: 8 }}>
                {/* Centered Stats Section */}
                <StatsSection>
                    <StatCardComponent 
                        icon="💡"
                        value="350+"
                        label="Grassroot Startups"
                    />
                    <StatCardComponent 
                        icon="🚀"
                        value="12,656+"
                        label="Active Startups"
                    />
                    <StatCardComponent 
                        icon="🏆"
                        value="210+"
                        label="Incubators"
                    />
                    <StatCardComponent 
                        icon="📊"
                        value="318+"
                        label="Expert Mentors"
                    />
                </StatsSection>

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
                    Gujarat Startup Sphere
                </Typography>
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
                    Where Innovation Meets Traditional Excellence
                </Typography>

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
                        The <strong>Startup Gujarat</strong> main page serves as a centralized hub for fostering innovation 
                        and entrepreneurship in Gujarat. It provides <strong>resources</strong>, <strong>funding opportunities</strong>, 
                        and <strong>support</strong> for startups, enabling them to thrive in a dynamic ecosystem. With a focus 
                        on <strong>networking</strong>, <strong>mentorship</strong>, and <strong>government schemes</strong>, 
                        it aims to empower aspiring entrepreneurs and established businesses alike.
                    </Typography>
                </Box>

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
                            icon: '🚀', 
                            title: 'Innovation Hub',
                            description: 'Access cutting-edge resources and state-of-the-art facilities to transform your ideas into reality.',
                            gradient: 'linear-gradient(135deg, #9470F8 0%, #6544C4 100%)'
                        },
                        { 
                            icon: '💡', 
                            title: 'Mentorship',
                            description: 'Connect with industry experts and seasoned entrepreneurs for guidance and strategic insights.',
                            gradient: 'linear-gradient(135deg, #C2FA4F 0%, #9BCD3D 100%)'
                        },
                        { 
                            icon: '🤝', 
                            title: 'Networking',
                            description: 'Build valuable connections with investors, partners, and fellow entrepreneurs in the ecosystem.',
                            gradient: 'linear-gradient(135deg, #9470F8 0%, #AE63F0 100%)'
                        },
                        { 
                            icon: '💰', 
                            title: 'Funding Support',
                            description: 'Explore various funding opportunities, government schemes, and investor connections.',
                            gradient: 'linear-gradient(135deg, #C2FA4F 0%, #9BCD3D 100%)'
                        }
                    ].map((item, index) => (
                        <Box
                            key={item.title}
                            sx={{
                                background: 'rgba(148, 112, 248, 0.08)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '20px',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid rgba(148, 112, 248, 0.2)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 10px 30px rgba(148, 112, 248, 0.2)',
                                    '& .icon-container': {
                                        transform: 'scale(1.1)',
                                    }
                                },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    background: item.gradient
                                }
                            }}
                        >
                            <Box
                                className="icon-container"
                                sx={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: item.gradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem',
                                    marginBottom: 1,
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 5px 15px rgba(148, 112, 248, 0.3)'
                                }}
                            >
                                {item.icon}
                            </Box>
                            <Typography
                                sx={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Raleway, sans-serif',
                                    fontSize: '1.25rem',
                                    fontWeight: 500,
                                    textAlign: 'center',
                                    textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                                    mb: 2
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontFamily: 'Raleway, sans-serif',
                                    fontSize: '0.9rem',
                                    textAlign: 'center',
                                    lineHeight: 1.6,
                                    maxWidth: '90%'
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <StatisticsSection>
                    <div className="graphs-container">
                        {/* Pie Chart */}
                        <StatItem className="graph-item">
                            <StatTitle>Startup Sector Distribution</StatTitle>
                            <ResponsiveContainer width="100%" height={400}>
                                <PieChart>
                                    <Pie
                                        data={sectorData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={80}
                                        outerRadius={140}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        labelLine={true}
                                        label={renderCustomizedLabel}
                                        animationBegin={0}
                                        animationDuration={1500}
                                        animationEasing="ease-out"
                                    >
                                        {sectorData.map((entry, index) => (
                                            <Cell 
                                                key={`cell-${index}`} 
                                                fill={COLORS[index % COLORS.length]}
                                                style={{
                                                    filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.3))',
                                                    cursor: 'pointer',
                                                }}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        contentStyle={{
                                            background: 'rgba(0, 0, 0, 0.8)',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                        }}
                                        itemStyle={{ color: '#FFFFFF' }}
                                    />
                                    <Legend 
                                        verticalAlign="bottom" 
                                        height={36}
                                        wrapperStyle={{
                                            padding: '20px 0',
                                            borderRadius: '8px',
                                            color: '#FFFFFF',
                                        }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </StatItem>

                        {/* Growth Trends Chart */}
                        <StatItem className="graph-item">
                            <StatTitle>Growth Trends Analysis</StatTitle>
                            <ResponsiveContainer width="100%" height={400}>
                                <ComposedChart data={growthData}>
                                    <CartesianGrid 
                                        strokeDasharray="3 3" 
                                        stroke="rgba(255,255,255,0.1)"
                                    />
                                    <XAxis 
                                        dataKey="month" 
                                        stroke="#FFFFFF"
                                        tick={{ fill: '#FFFFFF' }}
                                    />
                                    <YAxis 
                                        stroke="#FFFFFF"
                                        tick={{ fill: '#FFFFFF' }}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            background: 'rgba(0, 0, 0, 0.8)',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                        }}
                                        itemStyle={{ color: '#FFFFFF' }}
                                    />
                                    <Legend 
                                        wrapperStyle={{
                                            padding: '20px 0',
                                            color: '#FFFFFF',
                                        }}
                                    />
                                    <Bar 
                                        dataKey="monthlyGrowth" 
                                        name="Monthly Growth"
                                        fill="#FF6B6B"
                                        radius={[4, 4, 0, 0]}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="annualGrowth"
                                        name="Annual Growth"
                                        stroke="#4ECDC4"
                                        strokeWidth={2}
                                        dot={{ fill: '#4ECDC4', r: 4 }}
                                        activeDot={{ r: 6, stroke: '#4ECDC4', strokeWidth: 2 }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="sectorGrowth"
                                        name="Sector Growth"
                                        fill="#45B7D1"
                                        fillOpacity={0.3}
                                        stroke="#45B7D1"
                                        strokeWidth={2}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </StatItem>
                    </div>
                </StatisticsSection>
           

                <Box sx={{ display: 'flex', gap: 4, mb: 8 }}>
                    {/* Left Sidebar - Filters */}
                    <Box
                        sx={{
                            width: '280px',
                            flexShrink: 0,
                            background: 'rgba(148, 112, 248, 0.05)',
                            borderRadius: '15px',
                            p: 3,
                            border: '1px solid rgba(148, 112, 248, 0.1)'
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#FFFFFF',
                                fontSize: '1.2rem',
                                fontWeight: 500,
                                mb: 3
                            }}
                        >
                            Filters
                        </Typography>

                        <FilterSidebar />
                    </Box>

                    {/* Right Content Area */}
                    <Box sx={{ flex: 1 }}>
                        {/* Search and Sort Header */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 3
                            }}
                        >
                            <SearchContainer>
                                <SearchField
                                    placeholder="Search by startup name, location, industry, or stage..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </SearchContainer>

                            {/* Sort Dropdown */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Typography sx={{ color: '#FFF' }}>Sort By</Typography>
                                <Select
                                    value="default"
                                    sx={{
                                        width: 150,
                                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                                        color: '#FFF',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent'
                                        }
                                    }}
                                >
                                    <MenuItem value="default">Select</MenuItem>
                                </Select>
                            </Box>
                        </Box>

                        {/* Navigation Tabs */}
                        <Box sx={{ borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                            <Box sx={{ display: 'flex', gap: 4 }}>
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
                                        key={typeof tab === 'string' ? tab : tab.label}
                                        onClick={() => setActiveTab(typeof tab === 'string' ? tab : tab.label)}
                                        sx={{
                                            py: 1,
                                            cursor: 'pointer',
                                            position: 'relative',
                                            color: activeTab === (typeof tab === 'string' ? tab : tab.label) 
                                                ? '#C2FA4F' 
                                                : 'rgba(255, 255, 255, 0.6)',
                                            borderBottom: activeTab === (typeof tab === 'string' ? tab : tab.label)
                                                ? '2px solid #C2FA4F'
                                                : 'none'
                                        }}
                                    >
                                        <Typography>
                                            {typeof tab === 'string' ? tab : (
                                                <>
                                                    {tab.label}
                                                    <Typography 
                                                        component="span" 
                                                        sx={{ 
                                                            color: '#FF6B6B',
                                                            ml: 1
                                                        }}
                                                    >
                                                        ({tab.count})
                                                    </Typography>
                                                </>
                                            )}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        {/* Startup Cards Grid */}
                        <Box sx={{ flex: 1, p: 3 }}>
                            <StartupGrid>
                                {filteredStartups.length > 0 ? (
                                    filteredStartups.map((startup) => (
                                        <StartupCard 
                                            key={startup.id}
                                            onClick={() => handleStartupClick(startup.id)}
                                        >
                                            <StartupStage className="startup-stage">
                                                {startup.stage}
                                            </StartupStage>
                                            
                                            <StartupName className="startup-name">
                                                {startup.name}
                                            </StartupName>
                                            
                                            <StartupLocation>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor"/>
                                                </svg>
                                                {startup.location}
                                            </StartupLocation>
                                            
                                            <StartupIndustry>
                                                {startup.industry}
                                            </StartupIndustry>
                                        </StartupCard>
                                    ))
                                ) : (
                                    <NoResultsMessage>
                                        No startups found matching your search criteria
                                    </NoResultsMessage>
                                )}
                            </StartupGrid>

                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#3498db',
                                        color: '#fff',
                                        '&:hover': {
                                            bgcolor: '#2980b9'
                                        }
                                    }}
                                >
                                    LOAD MORE
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* New Statistics Section with Pie Chart */}
                 </Container>
        </Box>
    );
}

function viewStartup(id) {
    console.log("Navigate to startup profile with ID:", id);
}

export default Startup;
