import React, { useState, useMemo, memo } from 'react';
import { 
    Container, 
    Grid, 
    Card, 
    CardContent, 
    Typography,
    Box,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Stack
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Line, Bar } from 'react-chartjs-2';
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
import AddIcon from '@mui/icons-material/Add';

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

// Define chartOptions outside components
const defaultChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#000',
            bodyColor: '#666',
            borderColor: '#ddd',
            borderWidth: 1
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
                callback: function(value) {
                    if (this.chart.canvas.id.includes('revenue') || 
                        this.chart.canvas.id.includes('burn_rate')) {
                        return '$' + value.toLocaleString();
                    }
                    return value;
                }
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    },
    interaction: {
        intersect: false,
        mode: 'index'
    }
};

// Memoize the Chart component
const ChartComponent = memo(({ type, data, options = defaultChartOptions }) => {
    return type === 'line' ? (
        <Line data={data} options={options} />
    ) : (
        <Bar data={data} options={options} />
    );
});

// Memoize the Edit Dialog
const EditDialog = memo(({ 
    open, 
    editingChart, 
    editData, 
    tempInputValues, 
    onClose, 
    onSave, 
    onDataChange, 
    onPreview 
}) => (
    <Dialog 
        open={open} 
        onClose={onClose}
        maxWidth="md"
        fullWidth
    >
        <DialogTitle sx={{ 
            pb: 1,
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
        }}>
            Edit {editingChart?.title}
        </DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
            {editingChart && (
                <Stack spacing={3}>
                    <Box>
                        <Typography variant="subtitle1" sx={{ mb: 2 }}>
                            Description
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={2}
                            value={editData.description}
                            onChange={(e) => onDataChange('description', e.target.value)}
                        />
                    </Box>

                    <Box>
                        <Typography variant="subtitle1" sx={{ mb: 2 }}>
                            Formula
                        </Typography>
                        <TextField
                            fullWidth
                            value={editData.formula}
                            onChange={(e) => onDataChange('formula', e.target.value)}
                        />
                    </Box>

                    <Box>
                        <Typography variant="subtitle1" sx={{ mb: 2 }}>
                            Monthly Data
                        </Typography>
                        <Grid container spacing={2}>
                            {editingChart.data.labels.map((month, index) => (
                                <Grid item xs={12} sm={6} md={4} key={month}>
                                    <TextField
                                        fullWidth
                                        label={month}
                                        type="number"
                                        value={tempInputValues[`${editingChart.id}-${index}`] || ''}
                                        onChange={(e) => onDataChange('data', index, e.target.value)}
                                        InputProps={{
                                            startAdornment: editingChart.id.includes('revenue') || 
                                                          editingChart.id.includes('burn_rate') ? 
                                                          '$' : undefined
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Button 
                            variant="outlined" 
                            onClick={onPreview}
                            sx={{ mt: 2 }}
                        >
                            Preview Changes
                        </Button>
                    </Box>

                    <Box>
                        <Typography variant="subtitle1" sx={{ mb: 2 }}>
                            Chart Preview
                        </Typography>
                        <Box sx={{ height: 300 }}>
                            <ChartComponent 
                                type={editData.type}
                                data={editData.data}
                                options={defaultChartOptions}
                            />
                        </Box>
                    </Box>
                </Stack>
            )}
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
            <Button 
                onClick={onClose}
                variant="outlined"
                color="inherit"
            >
                Cancel
            </Button>
            <Button 
                onClick={onSave}
                variant="contained"
                color="primary"
            >
                Save Changes
            </Button>
        </DialogActions>
    </Dialog>
));

// Memoize individual chart card
const ChartCard = memo(({ chart, onEditClick }) => (
    <Card 
        className="startup_metrics_dashboard-chart-card"
        sx={{ 
            height: '450px',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}
    >
        <CardContent>
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2
            }}>
                <Typography variant="h6">
                    {chart.title}
                </Typography>
                <IconButton 
                    size="small"
                    onClick={() => onEditClick(chart)}
                >
                    <EditIcon />
                </IconButton>
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {chart.description}
            </Typography>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                <strong>Formula:</strong> {chart.formula}
            </Typography>
            
            <Box sx={{ height: 300 }}>
                <ChartComponent 
                    type={chart.type}
                    data={chart.data}
                    options={defaultChartOptions}
                />
            </Box>
        </CardContent>
    </Card>
));

const StartupMetricsDashboard = () => {
    const [editingChart, setEditingChart] = useState(null);
    const [editData, setEditData] = useState(null);
    const [tempInputValues, setTempInputValues] = useState({});
    const [charts, setCharts] = useState([
        {
            id: 'revenue',
            title: 'Revenue Growth',
            description: 'Total income generated from all business activities',
            formula: 'Current Month Revenue - Previous Month Revenue',
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue',
                    data: [30000, 35000, 40000, 45000, 50000, 55000],
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.4
                }]
            }
        },
        {
            id: 'users',
            title: 'User Growth',
            description: 'Rate at which new users are acquired',
            formula: '(New Users / Total Users) × 100',
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Users',
                    data: [1000, 1500, 2000, 2500, 3000, 3500],
                    backgroundColor: 'rgba(153, 102, 255, 0.5)',
                }]
            }
        },
        {
            id: 'customer_acquisition',
            title: 'Customer Acquisition Cost',
            description: 'Average cost to acquire a new customer',
            formula: 'Total Marketing Spend / Number of New Customers',
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'CAC',
                    data: [150, 145, 140, 135, 130, 125],
                    borderColor: 'rgb(255, 159, 64)',
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    tension: 0.4
                }]
            }
        },
        {
            id: 'ltv',
            title: 'Customer Lifetime Value',
            description: 'Predicted net profit from entire customer relationship',
            formula: 'Average Purchase Value × Purchase Frequency × Average Customer Lifespan',
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'LTV',
                    data: [500, 550, 600, 650, 700, 750],
                    borderColor: 'rgb(54, 162, 235)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    tension: 0.4
                }]
            }
        },
        {
            id: 'conversion',
            title: 'Conversion Rate',
            description: 'Percentage of visitors who take desired action',
            formula: '(Number of Conversions / Total Visitors) × 100',
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Conversion %',
                    data: [2.5, 2.7, 3.0, 3.2, 3.5, 3.8],
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.4
                }]
            }
        },
        {
            id: 'burn_rate',
            title: 'Monthly Burn Rate',
            description: 'Rate at which company spends its cash reserves',
            formula: 'Starting Balance - Ending Balance',
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Burn Rate',
                    data: [50000, 48000, 47000, 45000, 43000, 42000],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }]
            }
        },
        {
            id: 'active_users',
            title: 'Daily Active Users',
            description: 'Number of unique users who engage with the product daily',
            formula: 'Count of Unique Users per Day',
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'DAU',
                    data: [800, 1000, 1200, 1400, 1600, 1800],
                    borderColor: 'rgb(153, 102, 255)',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    tension: 0.4
                }]
            }
        },
        {
            id: 'retention',
            title: 'User Retention Rate',
            description: 'Percentage of users who return to your product over time',
            formula: '(Users at End - New Users) / Users at Start × 100',
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Retention %',
                    data: [75, 78, 80, 82, 85, 87],
                    borderColor: 'rgb(255, 205, 86)',
                    backgroundColor: 'rgba(255, 205, 86, 0.2)',
                    tension: 0.4
                }]
            }
        },
        {
            id: 'mrr_growth',
            title: 'MRR Growth Rate',
            description: 'Monthly Recurring Revenue growth percentage',
            formula: '((Current MRR - Previous MRR) / Previous MRR) × 100',
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'MRR Growth %',
                    data: [15, 18, 22, 25, 28, 32],
                    borderColor: 'rgb(20, 184, 166)',
                    backgroundColor: 'rgba(20, 184, 166, 0.2)',
                    tension: 0.4
                }]
            }
        },
        {
            id: 'customer_satisfaction',
            title: 'Customer Satisfaction',
            description: 'Average satisfaction score from customer feedback',
            formula: 'Sum of All Ratings / Number of Ratings',
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'CSAT Score',
                    data: [8.5, 8.7, 8.8, 9.0, 9.2, 9.3],
                    backgroundColor: 'rgba(244, 114, 182, 0.5)',
                }]
            }
        }
    ]);

    const handleEditClick = (chart) => {
        setEditingChart(chart);
        setEditData({...chart});
        const initialValues = {};
        chart.data.datasets[0].data.forEach((value, index) => {
            initialValues[`${chart.id}-${index}`] = value;
        });
        setTempInputValues(initialValues);
    };

    const handleDataChange = (field, index, value) => {
        if (field === 'data') {
            setTempInputValues(prev => ({
                ...prev,
                [`${editingChart.id}-${index}`]: value
            }));
        } else {
            setEditData(prev => ({
                ...prev,
                [field]: value
            }));
        }
    };

    const handlePreview = () => {
        const newData = [...editData.data.datasets[0].data];
        editData.data.labels.forEach((_, index) => {
            newData[index] = Number(tempInputValues[`${editData.id}-${index}`] || 0);
        });

        setEditData(prev => ({
            ...prev,
            data: {
                ...prev.data,
                datasets: [{
                    ...prev.data.datasets[0],
                    data: newData
                }]
            }
        }));
    };

    const handleSave = () => {
        const newData = [...editData.data.datasets[0].data];
        editData.data.labels.forEach((_, index) => {
            newData[index] = Number(tempInputValues[`${editData.id}-${index}`] || 0);
        });

        const updatedChart = {
            ...editData,
            data: {
                ...editData.data,
                datasets: [{
                    ...editData.data.datasets[0],
                    data: newData
                }]
            }
        };

        const updatedCharts = charts.map(chart => 
            chart.id === editData.id ? updatedChart : chart
        );
        setCharts(updatedCharts);
        handleClose();
    };

    const handleClose = () => {
        setEditingChart(null);
        setEditData(null);
        setTempInputValues({});
    };

    return (
        <Container maxWidth="xl" sx={{ py: 4 }} className="startup_metrics_dashboard-container">
            <Grid container spacing={4}>
                {charts.map((chart) => (
                    <Grid item xs={12} md={6} key={chart.id}>
                        <ChartCard 
                            chart={chart}
                            onEditClick={handleEditClick}
                        />
                    </Grid>
                ))}
            </Grid>
            <EditDialog 
                open={Boolean(editingChart)}
                editingChart={editingChart}
                editData={editData}
                tempInputValues={tempInputValues}
                onClose={handleClose}
                onSave={handleSave}
                onDataChange={handleDataChange}
                onPreview={handlePreview}
                className="startup_metrics_chart-modal"
            />
        </Container>
    );
};

export default StartupMetricsDashboard;