import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Typography,
    Chip,
    Tabs,
    Tab,
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    CircularProgress
} from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from 'chart.js';
import { Line, Bar } from "react-chartjs-2";
import { startups } from "./Funding.js";
import Rating from '@mui/material/Rating';
// Import icons for each category
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RecommendIcon from '@mui/icons-material/Recommend';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowForward from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import marketOpportunityImg from "../assets/images/Marketoppotunity.jpg"
import shipVlogImg from "../assets/images/shipvlog.jpg"
import marketChallengeImg from "../assets/images/MarketChallenge.jpg"

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

// Add this component for the info item
const InfoItem = ({ label, value, hasTooltip = true }) => (
    <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                {label}
            </Typography>
            {hasTooltip && (
                <Box 
                    component="span" 
                    sx={{ 
                        ml: 1, 
                        width: 16, 
                        height: 16, 
                        borderRadius: '50%', 
                        backgroundColor: '#e0e0e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px'
                    }}
                >
                    i
                </Box>
            )}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            {value}
        </Typography>
    </Box>
);

const getRandomRating = () => Math.floor(Math.random() * 5) + 1;

const CategoryCard = ({ icon: Icon, title, rating }) => (
    <Paper 
        elevation={3}
        sx={{
            p: 3,
            height: '100%',
            borderRadius: 2,
            background: 'linear-gradient(145deg, #ffffff 0%, #f9f9ff 100%)',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
            }
        }}
    >
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 2 
        }}>
            <Icon sx={{ 
                fontSize: 40, 
                color: 'purple',
                mb: 1
            }} />
            <Typography 
                variant="h6" 
                sx={{ 
                    fontWeight: 600,
                    color: '#2c3e50',
                    textAlign: 'center'
                }}
            >
                {title}
            </Typography>
            <Rating 
                value={rating} 
                readOnly 
                precision={0.5}
                sx={{
                    '& .MuiRating-iconFilled': {
                        color: 'purple',
                    }
                }}
            />
            <Typography 
                variant="body2" 
                sx={{ 
                    color: '#666',
                    mt: 1 
                }}
            >
                {rating} out of 5
            </Typography>
        </Box>
    </Paper>
);

const BusinessRating = () => {
    const categories = [
        { title: 'Management', icon: BusinessIcon },
        { title: 'Accounting Practice', icon: AccountBalanceIcon },
        { title: 'Profitability', icon: TrendingUpIcon },
        { title: 'Solvency', icon: AccountBalanceWalletIcon },
        { title: 'Growth', icon: ShowChartIcon },
        { title: 'Valuation', icon: MonetizationOnIcon },
    ];

    const overallRating = getRandomRating();
    const recommendationRating = getRandomRating();

    return (
        <Box sx={{ 
            mt: 6, 
            mb: 6,
            px: 2,
            py: 4,
            borderRadius: 3,
            background: 'linear-gradient(to right bottom, #ffffff, #fafafa)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}>
            <Typography 
                variant="h4" 
                sx={{ 
                    color: 'purple',
                    mb: 4,
                    fontWeight: 700,
                    textAlign: 'center',
                    position: 'relative',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 60,
                        height: 4,
                        backgroundColor: 'purple',
                        borderRadius: 2
                    }
                }}
            >
                Business Rating
            </Typography>

            <Grid container spacing={3} sx={{ mb: 6 }}>
                {categories.map((category, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CategoryCard 
                            icon={category.icon}
                            title={category.title}
                            rating={getRandomRating()}
                        />
                    </Grid>
                ))}
            </Grid>

            <Box 
                sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 4,
                    pt: 4,
                    borderTop: '1px solid #eee'
                }}
            >
                <Paper 
                    elevation={3}
                    sx={{ 
                        p: 3, 
                        flex: 1,
                        maxWidth: 300,
                        textAlign: 'center',
                        borderRadius: 2,
                        background: 'linear-gradient(145deg, #ffffff 0%, #f9f9ff 100%)'
                    }}
                >
                    <StarIcon sx={{ fontSize: 40, color: 'purple', mb: 1 }} />
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Overall Rating
                    </Typography>
                    <Rating 
                        value={overallRating} 
                        readOnly 
                        size="large"
                        sx={{ '& .MuiRating-iconFilled': { color: 'purple' } }}
                    />
                </Paper>

                <Paper 
                    elevation={3}
                    sx={{ 
                        p: 3, 
                        flex: 1,
                        maxWidth: 300,
                        textAlign: 'center',
                        borderRadius: 2,
                        background: 'linear-gradient(145deg, #ffffff 0%, #f9f9ff 100%)'
                    }}
                >
                    <RecommendIcon sx={{ fontSize: 40, color: 'purple', mb: 1 }} />
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Recommendation
                    </Typography>
                    <Rating 
                        value={recommendationRating} 
                        readOnly 
                        size="large"
                        sx={{ '& .MuiRating-iconFilled': { color: 'purple' } }}
                    />
                </Paper>
            </Box>
        </Box>
    );
};

const StartupBanner = () => (
    <Box sx={{ 
        mt: 6, 
        mb: 6,
        px: 2,
        py: 4,
        borderRadius: 3,
        background: 'linear-gradient(to right bottom, #ffffff, #fafafa)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
    }}>
        <Grid container spacing={4} alignItems="center">
            {/* Left Content */}
            <Grid item xs={12} md={6}>
                <Box sx={{ p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                        <Typography 
                            variant="caption" 
                            sx={{ 
                                bgcolor: '#f0f0f0', 
                                px: 2, 
                                py: 1, 
                                borderRadius: 5,
                                color: '#666',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            Green Mobility Solutions
                            <Box 
                                component="span" 
                                sx={{ 
                                    width: 24, 
                                    height: 24, 
                                    borderRadius: '50%',
                                    bgcolor: '#4CAF50',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <img 
                                    src="@shipvlog.jpg" 
                                    alt="Green Energy" 
                                    style={{ 
                                        width: '14px',
                                        height: '14px',
                                        filter: 'brightness(0) invert(1)'
                                    }} 
                                />
                            </Box>
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Typography 
                            variant="h3" 
                            sx={{ 
                                color: '#ff5722',
                                fontWeight: 'bold',
                                fontSize: '2.5rem'
                            }}
                        >
                            Shiplog
                        </Typography>
                        <Typography 
                            variant="caption" 
                            sx={{ 
                                display: 'block',
                                color: '#00ab55',
                                mt: 1,
                                fontSize: '0.8rem'
                            }}
                        >
                            A BRAND OF
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#ff5722' }}>
                            24X7 STORE PVT. LTD.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography 
                            variant="h4" 
                            sx={{ 
                                fontWeight: 'bold',
                                mb: 2,
                                lineHeight: 1.3
                            }}
                        >
                            <span style={{ color: '#00ab55' }}>DARK STORES, REDUCING POLLUTION,</span>{' '}
                            <span style={{ color: '#ff5722' }}>IMPROVING LOGISTICS</span>
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                            With a vision of{' '}
                            <span style={{ color: '#ff5722' }}>empowering businesses</span> and{' '}
                            <span style={{ color: '#00ab55' }}>
                                transforming dark stores, middle and last-mile logistics through 
                                sustainable electric mobility solutions
                            </span>{' '}
                            for a greener future.
                        </Typography>

                        <Button 
                            variant="contained" 
                            endIcon={<ArrowForward />}
                            sx={{
                                bgcolor: '#ff5722',
                                borderRadius: 30,
                                px: 4,
                                py: 1.5,
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                '&:hover': {
                                    bgcolor: '#f4511e'
                                }
                            }}
                        >
                            EXPLORE MORE
                        </Button>
                    </Box>

                    <Box>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                color: '#00ab55',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            <img 
                                src="@shipvlog.jpg" 
                                alt="Electric" 
                                style={{ 
                                    width: '24px',
                                    height: '24px'
                                }} 
                            />
                            A LIFE ELECTRIC
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            {/* Right Image */}
            <Grid item xs={12} md={6}>
                <Box sx={{ 
                    position: 'relative',
                    '& .delivery-icons': {
                        position: 'absolute',
                        width: 60,
                        height: 60,
                        bgcolor: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }
                }}>
                    <img 
                        src="@shipvlog.jpg" 
                        alt="Delivery Illustration" 
                        style={{ 
                            width: '100%',
                            maxWidth: '500px',
                            display: 'block',
                            margin: '0 auto'
                        }}
                    />
                    {/* Floating Icons */}
                    <Box 
                        className="delivery-icons"
                        sx={{ 
                            top: '10%',
                            right: '20%'
                        }}
                    >
                        <ShoppingCartIcon sx={{ color: '#ff5722' }} />
                    </Box>
                    <Box 
                        className="delivery-icons"
                        sx={{ 
                            top: '40%',
                            left: '10%'
                        }}
                    >
                        <LocalGroceryStoreIcon sx={{ color: '#00ab55' }} />
                    </Box>
                    <Box 
                        className="delivery-icons"
                        sx={{ 
                            bottom: '20%',
                            right: '30%'
                        }}
                    >
                        <LocalShippingIcon sx={{ color: '#ff5722' }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
);

// Add ImageTitle component
const ImageTitle = () => {
    const images = [
        require("../assets/images/shipvlog.jpg"),
        require("../assets/images/MarketChallenge.jpg"),
        require("../assets/images/Marketoppotunity.jpg")
    ];

    return (
        <Box sx={{ mt: 4, mb: 2 }}>
            <Typography 
                variant="h4" 
                sx={{ 
                    color: 'purple',
                    fontWeight: 'bold',
                    mb: 2 
                }}
            >
                Shiplog (EVEEIO Electric)
            </Typography>
            
            <Box sx={{ mb: 2 }}>
                <Typography variant="body1">None</Typography>
            </Box>

            <Box 
                sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 3
                }}
            >
                <Typography 
                    variant="subtitle1" 
                    sx={{ 
                        color: 'purple',
                        fontWeight: 'bold'
                    }}
                >
                    static tag
                </Typography>
                {[...Array(19)].map((_, index) => (
                    <Typography
                        key={index}
                        variant="body2"
                        sx={{
                            color: '#999',
                            cursor: 'pointer',
                            '&:hover': {
                                color: 'purple'
                            }
                        }}
                    >
                        {index + 1}
                    </Typography>
                ))}
            </Box>

            {/* Display all three images */}
            {images.map((image, index) => (
                <Box 
                    key={index}
                    component="img"
                    src={image}
                    alt={`Shiplog Banner ${index + 1}`}
                    sx={{
                        width: '100%',
                        borderRadius: 2,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        mb: 3
                    }}
                />
            ))}
        </Box>
    );
};

const FinancialTable = () => {
    const [selectedMetric, setSelectedMetric] = useState(null);
    
    const financialData = [
        { metric: 'Total Revenue', fy2023: 0.22, fy2024: 0.88, fy2025: 19.77, fy2026: 85.79 },
        { metric: 'Gross Profit', fy2023: -0.02, fy2024: 0.26, fy2025: 2.38, fy2026: 14.35 },
        { metric: 'EBITDA', fy2023: -0.04, fy2024: 0.1, fy2025: -0.79, fy2026: 2.44 },
        { metric: 'PBIT', fy2023: -0.07, fy2024: 0.05, fy2025: -0.79, fy2026: 2.44 },
        { metric: 'PBT', fy2023: -0.04, fy2024: 0.05, fy2025: -0.79, fy2026: 2.44 },
        { metric: 'Net Income', fy2023: -0.04, fy2024: 0.04, fy2025: -0.79, fy2026: 2.44 },
        { metric: 'Diluted EPS', fy2023: '-', fy2024: '-', fy2025: '-', fy2026: '-' },
        { metric: 'Basic EPS', fy2023: '-', fy2024: '-', fy2025: '-', fy2026: '-' },
        { metric: 'DPS', fy2023: '-', fy2024: '-', fy2025: '-', fy2026: '-' }
    ];

    const getChartData = (metric) => {
        const selectedRow = financialData.find(row => row.metric === metric);
        return {
            labels: ['FY 2023', 'FY 2024', 'FY 2025', 'FY 2026'],
            datasets: [{
                label: metric,
                data: [selectedRow.fy2023, selectedRow.fy2024, selectedRow.fy2025, selectedRow.fy2026],
                fill: true,
                borderColor: 'purple',
                backgroundColor: 'rgba(156, 39, 176, 0.1)',
                tension: 0.4
            }]
        };
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            y: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                border: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                }
            }
        }
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        
        // Add title
        doc.setFontSize(20);
        doc.setTextColor(102, 0, 153); // Purple color
        doc.text('EVEEIO Electric Financial Report', 20, 20);
        
        // Add timestamp
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, 30);

        // Prepare table data
        const tableColumn = ['Financial', 'FY 2023', 'FY 2024', 'FY 2025', 'FY 2026'];
        const tableRows = financialData.map(item => [
            item.metric,
            typeof item.fy2023 === 'number' ? item.fy2023.toFixed(2) : item.fy2023,
            typeof item.fy2024 === 'number' ? item.fy2024.toFixed(2) : item.fy2024,
            typeof item.fy2025 === 'number' ? item.fy2025.toFixed(2) : item.fy2025,
            typeof item.fy2026 === 'number' ? item.fy2026.toFixed(2) : item.fy2026,
        ]);

        // Add table
        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 40,
            styles: {
                fontSize: 9,
                cellPadding: 3,
            },
            headStyles: {
                fillColor: [102, 0, 153], // Purple color
                textColor: 255,
                fontStyle: 'bold',
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245],
            },
            columnStyles: {
                0: { fontStyle: 'bold' },
            },
        });

        // Add notes
        const currentY = doc.lastAutoTable.finalY + 10;
        doc.setFontSize(8);
        doc.setTextColor(100);
        doc.text('Notes:', 20, currentY);
        doc.text('* EPS and DPS in ₹. Other numbers except Payout Ratio in ₹ Cr', 20, currentY + 5);
        doc.text('* denotes latest available data\'s', 20, currentY + 10);

        // If selected metric exists, add the graph
        if (selectedMetric) {
            const canvas = document.querySelector('canvas');
            if (canvas) {
                const imgData = canvas.toDataURL('image/png');
                doc.addPage();
                doc.text(`${selectedMetric} Trend Analysis`, 20, 20);
                doc.addImage(imgData, 'PNG', 20, 30, 170, 100);
            }
        }

        // Save the PDF
        doc.save('EVEEIO_Electric_Financial_Report.pdf');
    };

    return (
        <Box sx={{ 
            mt: 4, 
            mb: 4,
            width: '100%',
            maxWidth: '100%'
        }}>
            <Grid 
                container 
                spacing={3} 
                sx={{ 
                    width: '100%',
                    margin: '0 auto',
                    maxWidth: '1400px' // Increased max width
                }}
            >
                {/* Financial Table */}
                <Grid item xs={12} lg={7}> {/* Adjusted column width */}
                    <Paper 
                        elevation={3} 
                        sx={{ 
                            borderRadius: 2, 
                            overflow: 'hidden',
                            height: '100%',
                            minHeight: '600px' // Fixed height
                        }}
                    >
                        <Box sx={{ 
                            bgcolor: 'purple', 
                            p: 2,
                            position: 'sticky',
                            top: 0,
                            zIndex: 1
                        }}>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    color: 'white', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: 1 
                                }}
                            >
                                <ShowChartIcon /> Financial
                            </Typography>
                        </Box>
                        <TableContainer sx={{ maxHeight: 'calc(100vh - 200px)' }}> {/* Scrollable container */}
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                                        <TableCell 
                                            sx={{ 
                                                fontWeight: 'bold', 
                                                color: 'purple',
                                                width: '25%' // Fixed width for first column
                                            }}
                                        >
                                            Financial
                                        </TableCell>
                                        {['FY 2023', 'FY 2024', 'FY 2025', 'FY 2026'].map((year) => (
                                            <TableCell 
                                                key={year} 
                                                align="right" 
                                                sx={{ 
                                                    fontWeight: 'bold', 
                                                    color: 'purple',
                                                    width: '18.75%' // Equal width for year columns
                                                }}
                                            >
                                                {year}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {financialData.map((row) => (
                                        <TableRow 
                                            key={row.metric}
                                            onClick={() => setSelectedMetric(row.metric)}
                                            sx={{ 
                                                cursor: 'pointer',
                                                bgcolor: selectedMetric === row.metric ? 'rgba(156, 39, 176, 0.08)' : 'inherit',
                                                '&:hover': { bgcolor: 'rgba(156, 39, 176, 0.04)' }
                                            }}
                                        >
                                            <TableCell sx={{ fontWeight: 500 }}>{row.metric}</TableCell>
                                            {['fy2023', 'fy2024', 'fy2025', 'fy2026'].map((year) => (
                                                <TableCell 
                                                    key={year} 
                                                    align="right"
                                                    sx={{
                                                        color: row[year] < 0 ? 'error.main' : 'success.main',
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    {typeof row[year] === 'number' ? row[year].toFixed(2) : row[year]}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* Add this section after the TableContainer */}
                        <Box sx={{ 
                            p: 2, 
                            borderTop: '1px solid rgba(224, 224, 224, 1)',
                            bgcolor: '#fafafa'
                        }}>
                            <Box sx={{ mb: 2 }}>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: '#666',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 0.5,
                                        mb: 1
                                    }}
                                >
                                    <span style={{ color: '#333' }}>*</span> 
                                    EPS and DPS in ₹. Other numbers except Payout Ratio in ₹ Cr
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: '#666',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 0.5
                                    }}
                                >
                                    <span style={{ color: '#333' }}>*</span> 
                                    denotes latest available data's
                                </Typography>
                            </Box>

                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    color: 'purple',
                                    mb: 2,
                                    fontWeight: 'bold'
                                }}
                            >
                                EVEEIO Electric Reports
                            </Typography>

                            <Box sx={{ 
                                display: 'flex',
                                gap: 2
                            }}>
                                <Button
                                    variant="contained"
                                    startIcon={<PictureAsPdfIcon />}
                                    sx={{
                                        bgcolor: 'purple',
                                        '&:hover': {
                                            bgcolor: 'purple',
                                            opacity: 0.9
                                        },
                                        textTransform: 'none',
                                        borderRadius: 2,
                                        px: 3
                                    }}
                                >
                                    2023
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<DownloadIcon />}
                                    onClick={handleDownloadPDF}
                                    sx={{
                                        color: 'purple',
                                        borderColor: 'purple',
                                        '&:hover': {
                                            borderColor: 'purple',
                                            bgcolor: 'rgba(156, 39, 176, 0.04)'
                                        },
                                        textTransform: 'none',
                                        borderRadius: 2,
                                        px: 3
                                    }}
                                >
                                    Download Report
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                {/* Chart Section */}
                <Grid item xs={12} lg={5}> {/* Adjusted column width */}
                    {selectedMetric ? (
                        <Paper 
                            elevation={3} 
                            sx={{ 
                                p: 3, 
                                borderRadius: 2, 
                                height: '600px', // Fixed height
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'sticky',
                                top: 24 // Adds some space from top
                            }}
                        >
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    mb: 2, 
                                    color: 'purple',
                                    fontWeight: 'bold'
                                }}
                            >
                                {selectedMetric} Trend
                            </Typography>
                            <Box sx={{ 
                                flex: 1,
                                minHeight: 0, // Important for proper flex behavior
                                position: 'relative'
                            }}>
                                <Line 
                                    data={getChartData(selectedMetric)} 
                                    options={{
                                        ...chartOptions,
                                        maintainAspectRatio: false,
                                        responsive: true
                                    }} 
                                />
                            </Box>
                        </Paper>
                    ) : (
                        <Paper 
                            elevation={3} 
                            sx={{ 
                                p: 3, 
                                borderRadius: 2, 
                                height: '600px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: 'rgba(156, 39, 176, 0.04)'
                            }}
                        >
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    color: 'purple',
                                    textAlign: 'center'
                                }}
                            >
                                Select a metric from the table<br/>to view its trend
                            </Typography>
                        </Paper>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

// Add this component before FinancialTable
const AboutSection = () => (
    <Box sx={{ 
        mt: 4, 
        mb: 6,
        p: 4,
        borderRadius: 2,
        bgcolor: 'background.paper',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
        <Typography 
            variant="h4" 
            sx={{ 
                color: 'purple',
                mb: 3,
                fontWeight: 'bold'
            }}
        >
            About EVEEIO Electric
        </Typography>

        <Box component="ul" sx={{ 
            pl: 3,
            '& li': { 
                mb: 2,
                color: '#333',
                fontSize: '1.1rem',
                lineHeight: 1.6
            }
        }}>
            <li>
                EVEEIO Electric (under the brand name of "Zenrate Technologies Private Limited") operates as a third-party logistics service provider (3PL) utilizing electric vehicle (EV) fleet and harnessing state-of-the-art technology to revolutionize traditional logistics into a smooth, efficient, and sustainable process, facilitated by its fleet management software.
            </li>
            <li>
                EVEEIO Electric (The company) fleet management software provides comprehensive insights into fleet operations, vehicle performance, and driver behavior. With features such as vehicle diagnostics, maintenance scheduling, and driver analytics, we optimize fleet utilization, minimize downtime, and enhance driver safety and productivity.
            </li>
            <li>
                The company offers mid-mile and last-mile connectivity to its customers to renowned customers such as Zomato, Blinkit, Zepto, Flipkart, Delivery, Uber, etc.
            </li>
            <li>
                The company boasts a team of 125 dedicated driver and rider partners who are integral to the company's operations. With a fleet consisting of over 80 vehicles, EVEEIO Electric has collectively covered an impressive distance of 1,875,000 kilometers.
            </li>
            <li>
                The company has completed 262,500 deliveries, emphasizing cleanliness and sustainability throughout its operations. Serving a diverse clientele, EVEEIO Electric has successfully catered to over 10 clients, showcasing its reliability and commitment to excellence in service provision.
            </li>
            <li>
                The company is in the growth stage and is in the process of increasing its fleet operating size from 80 to 1000, enabling it to achieve a revenue of ₹21 Cr.
            </li>
            <li>
                The company was incorporated on April 15, 2022, at ROC in Delhi.
            </li>
            <li>
                <Typography component="span" sx={{ fontWeight: 'bold' }}>
                    EVVEIO Electric has transferred its entire business operations to Shiplog.
                </Typography>
            </li>
        </Box>
    </Box>
);

const GrowthCharts = () => {
    // Sample data for Revenue Growth
    const revenueData = {
        labels: ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [{
            label: 'Revenue (in Cr)',
            data: [0, 20, 80, 270, 550, 1200, 1200],
            fill: true,
            backgroundColor: 'rgba(156, 39, 176, 0.1)',
            borderColor: '#D6168B',
            tension: 0.4,
            pointRadius: 6,
            pointBackgroundColor: '#D6168B',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: '#D6168B',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2,
        }]
    };

    // Sample data for Net Profit Growth
    const profitData = {
        labels: ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [{
            label: 'Net Profit (in Cr)',
            data: [0, 1, 3, 8, 25, 65, 65],
            fill: true,
            backgroundColor: 'rgba(214, 22, 139, 0.1)',
            borderColor: '#8B1EA7',
            tension: 0.4,
            pointRadius: 6,
            pointBackgroundColor: '#8B1EA7',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: '#8B1EA7',
            pointHoverBorderWidth: 2,
        }]
    };

    // Enhanced chart options for better interactivity
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                titleColor: '#8B1EA7',
                titleFont: {
                    size: 16,
                    weight: 'bold'
                },
                bodyColor: '#666',
                bodyFont: {
                    size: 14
                },
                borderColor: 'rgba(139, 30, 167, 0.1)',
                borderWidth: 1,
                padding: 12,
                boxPadding: 6,
                usePointStyle: true,
                callbacks: {
                    label: function(context) {
                        return `₹${context.parsed.y} Cr`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    color: '#666',
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    color: '#666',
                    font: {
                        size: 12
                    },
                    callback: function(value) {
                        return `₹${value} Cr`;
                    }
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'nearest'
        },
        hover: {
            mode: 'nearest',
            intersect: false,
            animationDuration: 150
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
        }
    };

    // Updated Growth Metric component with better styling
    const GrowthMetric = ({ percentage, years }) => (
        <Box
            sx={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                p: 2,
                borderRadius: 2,
                bgcolor: 'rgba(156, 39, 176, 0.03)',
                border: '1px solid rgba(156, 39, 176, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(156, 39, 176, 0.1)',
                    bgcolor: 'rgba(156, 39, 176, 0.05)'
                }
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    color: '#D6168B',
                    fontWeight: 'bold',
                    fontSize: { xs: '1.5rem', sm: '2rem' }
                }}
            >
                {percentage}%
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: '#666',
                    fontWeight: 500,
                    whiteSpace: 'nowrap'
                }}
            >
                {years} Year Growth
            </Typography>
        </Box>
    );

    return (
        <Box sx={{ mt: 6, mb: 6 }}>
            <Grid container spacing={4}>
                {/* Revenue Growth Chart */}
                <Grid item xs={12} lg={6}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            borderRadius: 3,
                            height: '100%',
                            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 3,
                                color: '#8B1EA7',
                                fontWeight: 'bold'
                            }}
                        >
                            EVEEIO Electric Revenue Growth
                        </Typography>
                        <Box sx={{ flex: 1, minHeight: '300px', mb: 4 }}>
                            <Line data={revenueData} options={chartOptions} />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                mt: 'auto'
                            }}
                        >
                            <GrowthMetric percentage="41.72" years="1" />
                            <GrowthMetric percentage="94.82" years="4" />
                            <GrowthMetric percentage="243.49" years="7" />
                        </Box>
                    </Paper>
                </Grid>

                {/* Net Profit Growth Chart */}
                <Grid item xs={12} lg={6}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            borderRadius: 3,
                            height: '100%',
                            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 3,
                                color: '#8B1EA7',
                                fontWeight: 'bold'
                            }}
                        >
                            EVEEIO Electric Net Profit Growth (PAT)
                        </Typography>
                        <Box sx={{ flex: 1, minHeight: '300px', mb: 4 }}>
                            <Line data={profitData} options={chartOptions} />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                mt: 'auto'
                            }}
                        >
                            <GrowthMetric percentage="50.95" years="1" />
                            <GrowthMetric percentage="127.01" years="4" />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

const OperatingAndEbitdaCharts = () => {
    // Operating Profit Data
    const operatingProfitData = {
        labels: ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [{
            label: 'Operating Profit (in Cr)',
            data: [0, 0, 1, 2, 8, 25, 65, 65],
            backgroundColor: 'rgba(214, 22, 139, 0.8)',
            borderColor: 'rgba(214, 22, 139, 1)',
            borderWidth: 1,
            borderRadius: 8,
            hoverBackgroundColor: 'rgba(139, 30, 167, 0.9)',
            barThickness: 40,
        }]
    };

    // EBITDA Data
    const ebitdaData = {
        labels: ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [{
            label: 'EBITDA (in Cr)',
            data: [0, 0, 1, 2, 8, 25, 65, 65],
            backgroundColor: 'rgba(139, 30, 167, 0.8)',
            borderColor: 'rgba(139, 30, 167, 1)',
            borderWidth: 1,
            borderRadius: 8,
            hoverBackgroundColor: 'rgba(214, 22, 139, 0.9)',
            barThickness: 40,
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                titleColor: '#8B1EA7',
                titleFont: {
                    size: 14,
                    weight: 'bold'
                },
                bodyColor: '#666',
                bodyFont: {
                    size: 12
                },
                borderColor: 'rgba(139, 30, 167, 0.1)',
                borderWidth: 1,
                padding: 10,
                callbacks: {
                    label: function(context) {
                        return `₹${context.parsed.y} Cr`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#666',
                    font: {
                        size: 11,
                        weight: '500'
                    }
                }
            },
            y: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                    drawBorder: false
                },
                ticks: {
                    color: '#666',
                    font: {
                        size: 11,
                        weight: '500'
                    },
                    callback: function(value) {
                        return `₹${value} Cr`;
                    }
                },
                beginAtZero: true
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
        }
    };

    const GrowthMetricCard = ({ percentage, years }) => (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: { xs: 1.5, sm: 2 },
                borderRadius: 2,
                bgcolor: 'rgba(156, 39, 176, 0.03)',
                border: '1px solid rgba(156, 39, 176, 0.1)',
                transition: 'all 0.3s ease',
                minWidth: { xs: '120px', sm: '150px' },
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(156, 39, 176, 0.1)',
                    bgcolor: 'rgba(156, 39, 176, 0.05)'
                }
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    color: '#D6168B',
                    fontWeight: 'bold',
                    fontSize: { xs: '1.5rem', sm: '1.8rem' }
                }}
            >
                {percentage}%
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: '#666',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' }
                }}
            >
                {years} Year
            </Typography>
        </Box>
    );

    return (
        <Box sx={{ 
            mt: 6, 
            mb: 6,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            width: '100%'
        }}>
            {/* Operating Profit Card */}
            <Paper
                elevation={2}
                sx={{
                    flex: 1,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    bgcolor: '#fff',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    width: { xs: '100%', md: '48%' }
                }}
            >
                <Box sx={{ p: 3 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#8B1EA7',
                            fontWeight: 600,
                            textAlign: 'center',
                            mb: 3
                        }}
                    >
                        Operating Profit Growth
                    </Typography>
                    
                    {/* Chart Container */}
                    <Box sx={{ 
                        height: '280px',
                        mb: 3,
                        '& canvas': {
                            maxWidth: '100%'
                        }
                    }}>
                        <Bar data={operatingProfitData} options={chartOptions} />
                    </Box>

                    {/* Growth Metrics */}
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        justifyContent: 'center'
                    }}>
                        {[
                            { percentage: '50.95', period: '1 Year' },
                            { percentage: '127.01', period: '4 Year' }
                        ].map((metric, index) => (
                            <Box
                                key={index}
                                sx={{
                                    bgcolor: 'rgba(214, 22, 139, 0.05)',
                                    borderRadius: '16px',
                                    p: 2,
                                    minWidth: '140px',
                                    textAlign: 'center'
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: '#D6168B',
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1.8rem', sm: '2rem' },
                                        mb: 0.5
                                    }}
                                >
                                    {metric.percentage}%
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#666',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    {metric.period}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Paper>

            {/* EBITDA Card */}
            <Paper
                elevation={2}
                sx={{
                    flex: 1,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    bgcolor: '#fff',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    width: { xs: '100%', md: '48%' }
                }}
            >
                <Box sx={{ p: 3 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#8B1EA7',
                            fontWeight: 600,
                            textAlign: 'center',
                            mb: 3
                        }}
                    >
                        EBITDA Growth
                    </Typography>
                    
                    {/* Chart Container */}
                    <Box sx={{ 
                        height: '280px',
                        mb: 3,
                        '& canvas': {
                            maxWidth: '100%'
                        }
                    }}>
                        <Bar data={ebitdaData} options={chartOptions} />
                    </Box>

                    {/* Growth Metrics */}
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        justifyContent: 'center'
                    }}>
                        {[
                            { percentage: '50.95', period: '1 Year' },
                            { percentage: '127.01', period: '4 Year' }
                        ].map((metric, index) => (
                            <Box
                                key={index}
                                sx={{
                                    bgcolor: 'rgba(139, 30, 167, 0.05)',
                                    borderRadius: '16px',
                                    p: 2,
                                    minWidth: '140px',
                                    textAlign: 'center'
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: '#8B1EA7',
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1.8rem', sm: '2rem' },
                                        mb: 0.5
                                    }}
                                >
                                    {metric.percentage}%
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#666',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    {metric.period}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

const StartupFundDetails = () => {
    const { name } = useParams();
    const [tabValue, setTabValue] = React.useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [startup, setStartup] = useState(null);

    useEffect(() => {
        try {
            const decodedName = decodeURIComponent(name);
            const foundStartup = startups.find(s => s.name === decodedName);
            
            if (!foundStartup) {
                setError('Startup not found');
            } else {
                setStartup(foundStartup);
            }
        } catch (err) {
            setError('Error loading startup details');
        } finally {
            setLoading(false);
        }
    }, [name]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error || !startup) {
        return (
            <Box sx={{ 
                p: 3, 
                textAlign: 'center', 
                height: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center' 
            }}>
                <Typography variant="h5" color="error" gutterBottom>
                    {error || 'Startup not found'}
                </Typography>
                <Button 
                    variant="contained" 
                    onClick={() => window.history.back()}
                    sx={{ mt: 2, alignSelf: 'center' }}
                >
                    Go Back
                </Button>
            </Box>
        );
    }

    // Sample data points to match the graph pattern
    const data = {
        labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
        datasets: [
            {
                label: "Price (₹)",
                data: [3500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500,
                       2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500,
                       2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500],
                fill: true,
                tension: 0.4,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, 'rgba(255, 99, 132, 0.5)');
                    gradient.addColorStop(1, 'rgba(255, 99, 132, 0.1)');
                    return gradient;
                },
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            y: {
                min: 0,
                max: 4000,
                ticks: {
                    stepSize: 1000,
                    callback: (value) => `${value/1000}k`
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                    drawBorder: false,
                },
                border: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
    };

    return (
        <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
            <Typography 
                variant="h4" 
                sx={{ mb: 2, fontWeight: 'bold', color: 'purple' }}
            >
                {startup.name} Unlisted Shares
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                {startup.tags.map((tag, index) => (
                    <Chip key={index} label={tag} />
                ))}
            </Box>

            <Tabs 
                value={tabValue} 
                onChange={(e, newValue) => setTabValue(newValue)}
                sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}
            >
                <Tab label="Pitch" />
                <Tab label="Snapshot" />
                <Tab label="Key Ratio" />
                <Tab label="Financial" />
               
            </Tabs>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Price Chart
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        High: ₹3,500 | Low: ₹2,500 | Return: -28.57%
                    </Typography>
                    <Box sx={{ height: '400px', width: '100%' }}>
                        <Line data={data} options={options} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                        <Chip
                            label="New This Month: Early Birds"
                            color="secondary"
                            sx={{ mb: 2 }}
                        />
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            {startup.name}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            ₹2,50,000 raised from 1 investors
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Invest
                        </Typography>
                        <Button variant="contained" color="secondary" fullWidth>
                            Invest Now
                        </Button>
                    </Box>
                </Grid>
                
                {/* Add Essentials Section below the chart */}
                <Grid item xs={12}>
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            color: 'purple', 
                            mb: 3, 
                            fontWeight: 'bold' 
                        }}
                    >
                        {startup.name} Essentials
                    </Typography>
                    
                    <Box sx={{ 
                        p: 3, 
                        borderRadius: 2, 
                        bgcolor: '#fff', 
                        boxShadow: '0 0 10px rgba(0,0,0,0.1)' 
                    }}>
                        <Typography variant="body1" sx={{ mb: 4 }}>
                            As of November 27, 2024, {startup.name} Unlisted share price is ₹2500.00 per share and the face value is ₹10.00/share. 
                            The lot size of {startup.name} is - shares. The 52-week high for {startup.name} stock price is ₹3500, 
                            while the 52-week low is ₹2500
                        </Typography>

                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={3}>
                                <InfoItem label="Face Value" value="₹ 10" />
                                <InfoItem label="P/E" value="2500" />
                                <InfoItem label="Sector" value="Industrials" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <InfoItem label="Total Share" value="10,000" />
                                <InfoItem label="Market Capitalisation" value="₹ 2.5 Cr" />
                                <InfoItem label="Sub-sector" value="Logistics" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <InfoItem label="Total Income" value="₹ 0.88 Cr" />
                                <InfoItem label="Enterprise Value" value="₹ 25 Cr" />
                                <InfoItem label="Category" value="Start up Funding" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <InfoItem label="Profit After Tax" value="₹ 0.04 Cr" />
                                <InfoItem label="Intrinsic Value" value="₹ 2,500" />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                {/* Add Investment Thesis Section */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" sx={{ color: 'purple', mb: 3, fontWeight: 'bold' }}>
                        Investment Thesis
                    </Typography>
                    <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            • {startup.name} is an asset-light business model that enables them to leverage the volume of riders and rides per day and {startup.name}'s founder has strong experience in leadership.
                        </Typography>
                        <Typography variant="body1">
                            • {startup.name} is expected to reach ₹1,236 Cr in revenue by FY30 from ₹20 Cr in FY25. Currently, based on the market demand, supply chain management, and management experience, the company is valued at ₹25 Cr. The company is anticipated to achieve a valuation of ₹289 Cr by FY27 which is 10x times the initial investment, implying that an investment of ₹1,00,000 in FY24 is projected to reach ₹10,00,000 by FY27 (considering the constant effect of dilution).
                        </Typography>
                    </Box>
                </Box>

                {/* Add Financial Projections Section */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" sx={{ color: 'purple', mb: 3, fontWeight: 'bold' }}>
                        Financial Projections
                    </Typography>
                    <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            • In FY24, the company has generated a revenue of 0.88 Cr and achieving a PAT of 0.04 Cr, resulting in a PAT Margin of 4%. Presently, the company operates with 2W EVs.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            • In FY25, the company is in the expansion stage and is in the process of increasing its fleet operating size from 180 to 1000 in 2W EVs. Additionally, it will add 100 new 3W and 25 4W EVs. This expansion aims to enhance scalability and improve profit margins, anticipating a revenue of ₹20 Cr.
                        </Typography>
                        <Typography variant="body1">
                            • In FY26, the company anticipates achieving revenue within a range of ₹80 Cr to ₹90 Cr, accompanied by an anticipated net profit ranging from ₹5 Cr to ₹15 Cr.
                        </Typography>
                    </Box>
                </Box>

                {/* Add Key Traction & Metrics Section */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" sx={{ color: 'purple', mb: 3, fontWeight: 'bold' }}>
                        Key Traction & Metrics
                    </Typography>
                    <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                        <Typography variant="body1" component="ul" sx={{ listStyle: 'none', p: 0 }}>
                            <li>• {startup.name} Electric is a profitable bootstrap startup.</li>
                            <li>• 125 driver/rider partners onboard.</li>
                            <li>• The Fleet comprises 80 own vehicles and 100 rental vehicles.</li>
                            <li>• 1,875,000 kilometres covered in total.</li>
                            <li>• 262,500 deliveries were made, emphasizing cleanliness and sustainability.</li>
                            <li>• Over 10 clients are served by the service and 40+ are in the pipeline.</li>
                        </Typography>
                    </Box>
                </Box>

                {/* Add Unique Differentiators Section */}
                <Box sx={{ mt: 4, mb: 4 }}>
                    <Typography variant="h5" sx={{ color: 'purple', mb: 3, fontWeight: 'bold' }}>
                        Unique Differentiators
                    </Typography>
                    <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            <strong>Fleet Management:</strong> {startup.name} fleet management software provides comprehensive insights into fleet operations, vehicle performance, and driver behaviour. With features such as vehicle diagnostics, maintenance scheduling, and driver analytics, it optimizes fleet utilization, minimizes downtime, and enhances driver safety and productivity. It offers tailored software solutions in the market catering to fleet management, vehicle recovery, and vehicle maintenance needs.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            <strong>Multi-Mile Delivery Solution:</strong> {startup.name} offers mid-mile and last-mile connectivity to its customers.
                        </Typography>
                        <Typography variant="body1">
                            <strong>Large Customer Base:</strong> {startup.name} offers service to renowned customers such as Zomato, Blinkit, Zepto, Flipkart, Delhivery, Uber, etc. The company has 40+ customers in the pipeline to offer service.
                        </Typography>
                    </Box>
                </Box>

                <BusinessRating />
                <ImageTitle />
                <AboutSection />
                <GrowthCharts />
                <OperatingAndEbitdaCharts />
                <FinancialTable />
            </Grid>
        </Box>
    );
};

export default StartupFundDetails;
