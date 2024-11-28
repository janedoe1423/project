import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line, Bar } from "react-chartjs-2";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Box,
    Button,
    Modal,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Stack,
    Alert,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EditIcon from '@mui/icons-material/Edit';
import UpdateIcon from '@mui/icons-material/Update';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const StartupMetrics = () => {
    const calculateMRR = (fee, customers) => {
        return fee * customers;
    };

    const [selectedMetric, setSelectedMetric] = useState(null);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
    const [mrrData, setMrrData] = useState({
        subscriptionFee: 99,
        activeCustomers: 1263,
        historicalData: [
            { month: 'Jan', mrr: 100000, customers: 1010, fee: 99 },
            { month: 'Feb', mrr: 105000, customers: 1061, fee: 99 },
            { month: 'Mar', mrr: 110000, customers: 1111, fee: 99 },
            { month: 'Apr', mrr: 115000, customers: 1162, fee: 99 },
            { month: 'May', mrr: 120000, customers: 1212, fee: 99 },
            { month: 'Jun', mrr: 125000, customers: 1263, fee: 99 }
        ]
    });
    const [editFormData, setEditFormData] = useState({
        subscriptionFee: '',
        activeCustomers: '',
        historicalData: [
            { month: 'Jan', mrr: 100000, customers: 1010, fee: 99 },
            { month: 'Feb', mrr: 105000, customers: 1061, fee: 99 },
            { month: 'Mar', mrr: 110000, customers: 1111, fee: 99 },
            { month: 'Apr', mrr: 115000, customers: 1162, fee: 99 },
            { month: 'May', mrr: 120000, customers: 1212, fee: 99 },
            { month: 'Jun', mrr: 125000, customers: 1263, fee: 99 }
        ]
    });
    const [updateFormData, setUpdateFormData] = useState({
        newSubscriptionFee: '',
        newCustomers: ''
    });
    const [error, setError] = useState('');

    const handleEditOpen = () => {
        setEditFormData({
            historicalData: mrrData.historicalData.map(item => ({...item}))
        });
        setOpenEditDialog(true);
    };

    const handleUpdateOpen = () => {
        setUpdateFormData({
            newSubscriptionFee: mrrData.subscriptionFee,
            newCustomers: 0
        });
        setOpenUpdateDialog(true);
    };

    const handleEditSubmit = () => {
        const updatedData = editFormData.historicalData.map(item => {
            const fee = Number(item.fee);
            const customers = Number(item.customers);
            
            if (!fee || !customers) {
                setError(`Invalid data for ${item.month}`);
                return null;
            }
            
            return {
                ...item,
                mrr: calculateMRR(fee, customers),
                fee,
                customers
            };
        });

        if (updatedData.includes(null)) return;

        setMrrData(prev => ({
            ...prev,
            subscriptionFee: updatedData[updatedData.length - 1].fee,
            activeCustomers: updatedData[updatedData.length - 1].customers,
            historicalData: updatedData
        }));
        setOpenEditDialog(false);
        setError('');
    };

    const handleUpdateSubmit = () => {
        const fee = Number(updateFormData.newSubscriptionFee);
        const newCustomers = Number(updateFormData.newCustomers);
        const lastMonth = mrrData.historicalData[mrrData.historicalData.length - 1];
        const nextMonth = getNextMonth(lastMonth.month);
        
        if (!fee || isNaN(newCustomers)) {
            setError('Please enter valid numbers');
            return;
        }

        const totalCustomers = lastMonth.customers + newCustomers;
        const newMRR = fee * totalCustomers;

        const newData = {
            month: nextMonth,
            fee: fee,
            customers: totalCustomers,
            mrr: newMRR
        };

        setMrrData(prev => ({
            ...prev,
            subscriptionFee: fee,
            activeCustomers: totalCustomers,
            historicalData: [...prev.historicalData, newData]
        }));
        
        setOpenUpdateDialog(false);
        setError('');
        setUpdateFormData({
            newSubscriptionFee: '',
            newCustomers: ''
        });
    };

    const metrics = [
        {
            id: 'mrr',
            title: 'Monthly Recurring Revenue',
            value: `$${calculateMRR(mrrData.subscriptionFee, mrrData.activeCustomers).toLocaleString()}`,
            change: '+15%',
            description: `${mrrData.activeCustomers.toLocaleString()} customers at $${mrrData.subscriptionFee}/month`,
            chartData: {
                labels: mrrData.historicalData.map(d => d.month),
                datasets: [{
                    label: 'MRR',
                    data: mrrData.historicalData.map(d => d.mrr),
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                }]
            },
            chartType: 'line',
            hasEdit: true,
            hasUpdate: true
        },
        {
            id: 'ltv',
            title: 'Customer Lifetime Value',
            value: '$2,500',
            change: '+8%',
            description: 'Average revenue per customer',
            chartData: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'LTV',
                    data: [2200, 2300, 2400, 2500],
                    backgroundColor: 'rgba(153, 102, 255, 0.5)',
                }]
            },
            chartType: 'bar'
        },
        {
            id: 'cac',
            title: 'Customer Acquisition Cost',
            value: '$450',
            change: '-5%',
            description: 'Cost to acquire new customers',
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'CAC',
                    data: [500, 480, 470, 460, 455, 450],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                }]
            },
            chartType: 'line'
        },
        {
            id: 'grossMargin',
            title: 'Gross Margin',
            value: '75%',
            change: '+3%',
            description: 'Revenue minus cost of goods sold',
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Gross Margin',
                    data: [70, 71, 72, 73, 74, 75],
                    borderColor: 'rgb(54, 162, 235)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                }]
            },
            chartType: 'line'
        },
        {
            id: 'dau',
            title: 'Daily Active Users',
            value: '5,000',
            change: '+12%',
            description: 'Users active in the last day',
            chartData: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'DAU',
                    data: [4500, 4600, 4700, 4800, 4900, 4950, 5000],
                    borderColor: 'rgb(255, 159, 64)',
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                }]
            },
            chartType: 'line'
        },
        {
            id: 'momGrowth',
            title: 'Month over Month Growth',
            value: '15%',
            change: '+2%',
            description: 'Growth rate compared to last month',
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'MoM Growth',
                    data: [10, 11, 12, 13, 14, 15],
                    backgroundColor: 'rgba(153, 102, 255, 0.5)',
                }]
            },
            chartType: 'bar'
        },
        {
            id: 'netChurn',
            title: 'Net Churn Rate',
            value: '-2%',
            change: '+0.5%',
            description: 'Rate of customer loss/gain',
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Net Churn',
                    data: [-3, -2.8, -2.5, -2.3, -2.1, -2],
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                }]
            },
            chartType: 'line'
        },
        {
            id: 'retention',
            title: 'Customer Retention',
            value: '95%',
            change: '+1%',
            description: 'Percentage of customers retained',
            chartData: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Retention',
                    data: [100, 97, 95, 95],
                    borderColor: 'rgb(54, 162, 235)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                }]
            },
            chartType: 'line'
        },
        {
            id: 'nps',
            title: 'Net Promoter Score',
            value: '65',
            change: '+5',
            description: 'Customer satisfaction score',
            chartData: {
                labels: ['Detractors', 'Passives', 'Promoters'],
                datasets: [{
                    label: 'NPS Distribution',
                    data: [10, 25, 65],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                    ],
                }]
            },
            chartType: 'bar'
        },
        {
            id: 'burnRate',
            title: 'Monthly Burn Rate',
            value: '$50,000',
            change: '-8%',
            description: 'Rate of cash spending',
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Burn Rate',
                    data: [60000, 57000, 55000, 53000, 51000, 50000],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                }]
            },
            chartType: 'line'
        }
    ];

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Metric Trend'
            }
        }
    };

    const renderMetricCard = (metric) => (
        <Grid item xs={12} sm={6} md={6} lg={4} key={metric.id}>
            <Card 
                sx={{ 
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    }
                }}
            >
                <CardContent 
                    sx={{ 
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        '&:last-child': { pb: 3 }
                    }}
                >
                    {/* Title Section */}
                    <Box 
                        sx={{
                            pb: 2,
                            borderBottom: '2px solid rgba(26, 35, 126, 0.1)'
                        }}
                    >
                        <Typography 
                            variant="h6" 
                            component="div" 
                            sx={{ 
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                color: '#2c3e50',
                                letterSpacing: '0.5px'
                            }}
                        >
                            {metric.title}
                        </Typography>
                    </Box>

                    {/* Value Section */}
                    <Box sx={{ flex: 1, py: 2 }}>
                        <Typography 
                            variant="h4" 
                            sx={{ 
                                fontSize: '2.2rem',
                                fontWeight: 700,
                                color: '#1a237e',
                                letterSpacing: '0.5px',
                                mb: 2
                            }}
                        >
                            {metric.value}
                        </Typography>

                        {/* Change Indicator */}
                        <Box 
                            sx={{ 
                                display: 'inline-flex',
                                alignItems: 'center',
                                px: 1.5,
                                py: 0.75,
                                borderRadius: '20px',
                                backgroundColor: metric.change.startsWith('+') 
                                    ? 'rgba(76, 175, 80, 0.1)' 
                                    : 'rgba(244, 67, 54, 0.1)',
                                mb: 2
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 600,
                                    color: metric.change.startsWith('+') 
                                        ? '#2e7d32'
                                        : '#d32f2f'
                                }}
                            >
                                {metric.change} vs last period
                            </Typography>
                        </Box>

                        {/* Description */}
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                color: 'text.secondary',
                                fontSize: '0.875rem',
                                lineHeight: 1.5
                            }}
                        >
                            {metric.description}
                        </Typography>
                    </Box>

                    {/* Add buttons container before the Show Graph button */}
                    <Box sx={{ mt: 'auto', pt: 2, display: 'flex', gap: 2 }}>
                        {metric.hasEdit && (
                            <Button
                                startIcon={<EditIcon />}
                                onClick={handleEditOpen}
                                variant="outlined"
                                size="medium"
                                sx={{ flex: 1 }}
                            >
                                Edit
                            </Button>
                        )}
                        {metric.hasUpdate && (
                            <Button
                                startIcon={<UpdateIcon />}
                                onClick={handleUpdateOpen}
                                variant="outlined"
                                size="medium"
                                sx={{ flex: 1 }}
                            >
                                Update
                            </Button>
                        )}
                    </Box>
                    
                    {/* Show Graph button */}
                    <Button
                        fullWidth
                        startIcon={<ShowChartIcon />}
                        onClick={() => setSelectedMetric(metric)}
                        variant="contained"
                        size="large"
                        sx={{ mt: 2 }}
                    >
                        Show Graph
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );

    const [previewData, setPreviewData] = useState(null);

    const EditDialog = () => (
        <Dialog 
            open={openEditDialog} 
            onClose={() => setOpenEditDialog(false)}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle>
                <Typography variant="h6">
                    Edit Monthly Recurring Revenue Data
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
                    Formula: MRR = Subscription Fee × Number of Customers
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Stack spacing={3} sx={{ mt: 2 }}>
                    {error && <Alert severity="error">{error}</Alert>}
                    
                    {/* Data Table */}
                    <Box sx={{ overflowX: 'auto' }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Month</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Subscription Fee ($)</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Customers</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>MRR ($)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {editFormData.historicalData.map((data, index) => (
                                    <TableRow key={data.month}>
                                        <TableCell>{data.month}</TableCell>
                                        <TableCell>
                                            <TextField
                                                type="number"
                                                size="small"
                                                value={data.fee}
                                                inputProps={{ 
                                                    step: "0.01",
                                                    style: { textAlign: 'right' }
                                                }}
                                                sx={{ width: '120px' }}
                                                onChange={(e) => {
                                                    const newData = [...editFormData.historicalData];
                                                    newData[index] = {
                                                        ...data,
                                                        fee: e.target.value
                                                    };
                                                    setEditFormData({
                                                        ...editFormData,
                                                        historicalData: newData
                                                    });
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                type="number"
                                                size="small"
                                                value={data.customers}
                                                inputProps={{ 
                                                    style: { textAlign: 'right' }
                                                }}
                                                sx={{ width: '120px' }}
                                                onChange={(e) => {
                                                    const newData = [...editFormData.historicalData];
                                                    newData[index] = {
                                                        ...data,
                                                        customers: e.target.value
                                                    };
                                                    setEditFormData({
                                                        ...editFormData,
                                                        historicalData: newData
                                                    });
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell sx={{ 
                                            fontWeight: 'medium',
                                            color: 'primary.main'
                                        }}>
                                            {(data.fee * data.customers).toLocaleString()}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>

                    {/* Static Chart Preview */}
                    <Box sx={{ height: 300, mt: 3, p: 2, bgcolor: '#f8f9fa', borderRadius: 1 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Current Data Visualization
                        </Typography>
                        <Line
                            data={{
                                labels: editFormData.historicalData.map(d => d.month),
                                datasets: [{
                                    label: 'Monthly Recurring Revenue',
                                    data: editFormData.historicalData.map(d => d.fee * d.customers),
                                    borderColor: 'rgb(75, 192, 192)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    tension: 0.4
                                }]
                            }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    },
                                },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        ticks: {
                                            callback: value => `$${value.toLocaleString()}`
                                        }
                                    }
                                }
                            }}
                        />
                    </Box>
                </Stack>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
                <Button 
                    onClick={() => setOpenEditDialog(false)}
                    variant="outlined"
                >
                    Cancel
                </Button>
                <Button 
                    onClick={handleEditSubmit}
                    variant="contained"
                    color="primary"
                >
                    Save Changes
                </Button>
            </DialogActions>
        </Dialog>
    );

    // Add this function to get next month
    const getNextMonth = (currentMonth) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const currentIndex = months.indexOf(currentMonth);
        return months[(currentIndex + 1) % 12];
    };

    // Update Dialog Component
    const UpdateDialog = () => {
        const lastMonth = mrrData.historicalData[mrrData.historicalData.length - 1];
        const nextMonth = getNextMonth(lastMonth.month);

        return (
            <Dialog 
                open={openUpdateDialog} 
                onClose={() => setOpenUpdateDialog(false)}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle>
                    <Typography variant="h6">
                        Update MRR for {nextMonth}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
                        Current MRR: ${lastMonth.mrr.toLocaleString()}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={3} sx={{ mt: 2 }}>
                        {error && <Alert severity="error">{error}</Alert>}
                        
                        <Box sx={{ bgcolor: '#f8f9fa', p: 2, borderRadius: 1 }}>
                            <Typography variant="subtitle2" gutterBottom>
                                Current Status ({lastMonth.month}):
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                        Subscription Fee: ${lastMonth.fee}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                        Active Customers: {lastMonth.customers}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box sx={{ bgcolor: '#fff', p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
                            <Typography variant="subtitle2" gutterBottom color="primary">
                                Update for {nextMonth}:
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="New Subscription Fee ($)"
                                        type="number"
                                        value={updateFormData.newSubscriptionFee}
                                        onChange={(e) => setUpdateFormData({
                                            ...updateFormData,
                                            newSubscriptionFee: e.target.value
                                        })}
                                        InputProps={{
                                            startAdornment: <span>$</span>
                                        }}
                                        helperText={`Current: $${lastMonth.fee}`}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Customer Change"
                                        type="number"
                                        value={updateFormData.newCustomers}
                                        onChange={(e) => setUpdateFormData({
                                            ...updateFormData,
                                            newCustomers: e.target.value
                                        })}
                                        helperText={`Current: ${lastMonth.customers} customers`}
                                    />
                                </Grid>
                            </Grid>

                            {/* Preview Calculation */}
                            {updateFormData.newSubscriptionFee && updateFormData.newCustomers && (
                                <Box sx={{ mt: 3, p: 2, bgcolor: '#f8f9fa', borderRadius: 1 }}>
                                    <Typography variant="subtitle2" gutterBottom>
                                        Preview for {nextMonth}:
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <Typography variant="body2">
                                                New Fee: ${updateFormData.newSubscriptionFee}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Typography variant="body2">
                                                New Customer Total: {Number(lastMonth.customers) + Number(updateFormData.newCustomers)}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Typography variant="body2" color="primary" fontWeight="bold">
                                                Estimated MRR: ${(updateFormData.newSubscriptionFee * (Number(lastMonth.customers) + Number(updateFormData.newCustomers))).toLocaleString()}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}
                        </Box>

                        {/* Chart Preview */}
                        <Box sx={{ height: 300, mt: 2 }}>
                            <Typography variant="subtitle2" gutterBottom>
                                MRR Trend Preview
                            </Typography>
                            <Line
                                data={{
                                    labels: [...mrrData.historicalData.map(d => d.month), nextMonth],
                                    datasets: [{
                                        label: 'MRR',
                                        data: [
                                            ...mrrData.historicalData.map(d => d.mrr),
                                            updateFormData.newSubscriptionFee && updateFormData.newCustomers
                                                ? updateFormData.newSubscriptionFee * (Number(lastMonth.customers) + Number(updateFormData.newCustomers))
                                                : null
                                        ],
                                        borderColor: 'rgb(75, 192, 192)',
                                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                        tension: 0.4
                                    }]
                                }}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        }
                                    },
                                    scales: {
                                        y: {
                                            beginAtZero: false,
                                            ticks: {
                                                callback: value => `$${value.toLocaleString()}`
                                            }
                                        }
                                    }
                                }}
                            />
                        </Box>
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ p: 3 }}>
                    <Button 
                        onClick={() => setOpenUpdateDialog(false)}
                        variant="outlined"
                    >
                        Cancel
                    </Button>
                    <Button 
                        onClick={handleUpdateSubmit}
                        variant="contained"
                        color="primary"
                        disabled={!updateFormData.newSubscriptionFee || !updateFormData.newCustomers}
                    >
                        Update {nextMonth} Data
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    return (
        <div className="dashboard-container">
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Typography 
                    variant="h4" 
                    sx={{ 
                        mb: 4,
                        fontWeight: 700,
                        color: '#1a237e',
                        textAlign: 'center'
                    }}
                >
                    Startup Metrics Dashboard
                </Typography>

                <Grid container spacing={4}>
                    {metrics.map(renderMetricCard)}
                </Grid>

                {/* Graph Modal */}
                <Modal
                    open={Boolean(selectedMetric)}
                    onClose={() => setSelectedMetric(null)}
                    aria-labelledby="metric-modal-title"
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        maxWidth: 800,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2
                    }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                            <Typography variant="h6" id="metric-modal-title">
                                {selectedMetric?.title}
                            </Typography>
                            <IconButton onClick={() => setSelectedMetric(null)} size="small">
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        
                        {selectedMetric && (
                            <Box sx={{ height: 400 }}>
                                {selectedMetric.chartType === 'line' ? (
                                    <Line data={selectedMetric.chartData} options={chartOptions} />
                                ) : (
                                    <Bar data={selectedMetric.chartData} options={chartOptions} />
                                )}
                            </Box>
                        )}
                    </Box>
                </Modal>

                <EditDialog />

                {/* Add Update Dialog */}
                <UpdateDialog />
            </Container>
        </div>
    );
};

export default StartupMetrics;