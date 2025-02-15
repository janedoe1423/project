import React, { useState } from "react";
import {
  Box, TextField, Button, Card, Typography, Grid,
  InputAdornment, Fade, CircularProgress
} from "@mui/material";
import { Pie, Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title
} from "chart.js";
import './startup_resource_allocate.css'

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title
);

// Enhanced color palette for charts
const chartColors = {
  primary: [
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
  ],
  borders: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
  ],
  backgroundOpacity: 0.1
};

// Reference data without startup names
const referenceData = [
  { budget: 1200000, growth: 15.20, allocations: { Marketing: 95893.08, "R&D": 613486.50, Operations: 269178.66, Sales: 186544.59, Logistics: 35392.12 } },
  { budget: 1200000, growth: 12.50, allocations: { Marketing: 198000.00, "R&D": 210000.00, Operations: 480000.00, Sales: 246000.00, Logistics: 66000.00 } },
  { budget: 750000, growth: 9.80, allocations: { Marketing: 132450.00, "R&D": 157350.00, Operations: 315000.00, Sales: 105750.00, Logistics: 39450.00 } },
  // ... add other reference data
];

const StartupResourceAllocation = () => {
  const [totalBudget, setTotalBudget] = useState("");
  const [growthRate, setGrowthRate] = useState("");
  const [predictedAllocations, setPredictedAllocations] = useState(null);
  const [allocationHistory, setAllocationHistory] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);

  // Utility function to clean and parse numbers
  const parseAmount = (amount) => {
    if (typeof amount === 'string') {
      return parseFloat(amount.replace(/[₹,\s]/g, '')) || 0;
    }
    return amount || 0;
  };

  // Enhanced prediction function
  const predictAllocations = (budget, growth) => {
    try {
      const validBudget = parseAmount(budget);
      const validGrowth = parseFloat(growth);

      // Find similar growth rates (within ±3%)
      let similarCases = referenceData.filter(data => 
        Math.abs(data.growth - validGrowth) <= 3
      );

      // If no matches found, use all data
      if (similarCases.length === 0) {
        similarCases = referenceData;
      }

      // Calculate weighted average allocations
      const totalWeight = similarCases.reduce((sum, data) => 
        sum + (1 / (Math.abs(data.growth - validGrowth) + 1)), 0
      );

      const weightedAllocations = {
        Marketing: 0, "R&D": 0, Operations: 0, Sales: 0, Logistics: 0
      };

      similarCases.forEach(data => {
        const weight = 1 / (Math.abs(data.growth - validGrowth) + 1);
        Object.keys(weightedAllocations).forEach(key => {
          const percentage = data.allocations[key] / data.budget;
          weightedAllocations[key] += (percentage * weight);
        });
      });

      // Normalize and apply to new budget
      Object.keys(weightedAllocations).forEach(key => {
        weightedAllocations[key] = (weightedAllocations[key] / totalWeight) * validBudget;
      });

      return weightedAllocations;
    } catch (error) {
      console.error("Prediction error:", error);
      // Return default allocation
      return {
        Marketing: budget * 0.15,
        "R&D": budget * 0.30,
        Operations: budget * 0.25,
        Sales: budget * 0.20,
        Logistics: budget * 0.10
      };
    }
  };

  const handleCalculate = async () => {
    try {
      setIsCalculating(true);
      const budget = parseAmount(totalBudget);
      const growth = parseFloat(growthRate);

      if (budget <= 0) {
        alert("Please enter a valid budget amount");
        return;
      }

      if (isNaN(growth) || growth < 0 || growth > 100) {
        alert("Please enter a valid growth rate between 0 and 100");
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const allocations = predictAllocations(budget, growth);
      setPredictedAllocations(allocations);

      setAllocationHistory([
        {
          id: Date.now(),
          date: new Date().toLocaleDateString(),
          budget,
          growth,
          allocations
        },
        ...allocationHistory
      ]);
    } catch (error) {
      console.error("Calculation error:", error);
      alert("An error occurred. Using default allocation model.");
    } finally {
      setIsCalculating(false);
    }
  };

  const getChartData = (allocations) => ({
    labels: Object.keys(allocations),
    datasets: [{
      data: Object.values(allocations),
      backgroundColor: chartColors.primary,
      borderColor: chartColors.borders,
      borderWidth: 2,
      hoverOffset: 4,
    }]
  });

  const getBarChartData = (allocations) => ({
    labels: Object.keys(allocations),
    datasets: [{
      label: 'Resource Allocation',
      data: Object.values(allocations),
      backgroundColor: chartColors.primary.map(color => color.replace('0.8', '0.7')),
      borderColor: chartColors.borders,
      borderWidth: 2,
      borderRadius: 8,
      hoverBackgroundColor: chartColors.primary,
    }]
  });

  return (
    <Box className="startup_resource_dashboard">
      <Typography variant="h4" className="startup_resource_dashboard-title">
        Smart Budget Allocation System
      </Typography>

      <Grid container spacing={3}>
        {/* Enhanced Input Section */}
        <Grid item xs={12} md={4}>
          <Card className="startup_resource_input-card">
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Budget Details
            </Typography>
            
            <TextField
              fullWidth
              label="Total Budget"
              value={totalBudget}
              onChange={(e) => setTotalBudget(e.target.value)}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                }
              }}
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
            />

            <TextField
              fullWidth
              label="Expected Growth Rate"
              value={growthRate}
              onChange={(e) => setGrowthRate(e.target.value)}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />

            <Button 
              variant="contained"
              fullWidth
              onClick={handleCalculate}
              disabled={!totalBudget || !growthRate || isCalculating}
              sx={{
                height: '48px',
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '1rem',
              }}
            >
              {isCalculating ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Calculate Allocation'
              )}
            </Button>
          </Card>
        </Grid>

        {/* Enhanced Chart Section */}
        <Grid item xs={12} md={8}>
          <Card className="startup_resource_graph-card">
            {predictedAllocations ? (
              <Fade in={true} timeout={1000}>
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Resource Allocation Overview
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ height: 300, mb: 2 }}>
                        <Pie
                          data={getChartData(predictedAllocations)}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: {
                                position: 'bottom',
                                labels: {
                                  padding: 20,
                                  usePointStyle: true,
                                }
                              },
                              tooltip: {
                                callbacks: {
                                  label: (context) => {
                                    const value = context.raw;
                                    const percentage = ((value / parseAmount(totalBudget)) * 100).toFixed(1);
                                    return `₹${value.toLocaleString('en-IN')} (${percentage}%)`;
                                  }
                                }
                              }
                            }
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ height: 300, mb: 2 }}>
                        <Bar
                          data={getBarChartData(predictedAllocations)}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: {
                                display: false
                              },
                              tooltip: {
                                callbacks: {
                                  label: (context) => {
                                    return `₹${context.raw.toLocaleString('en-IN')}`;
                                  }
                                }
                              }
                            },
                            scales: {
                              y: {
                                beginAtZero: true,
                                grid: {
                                  display: false
                                }
                              },
                              x: {
                                grid: {
                                  display: false
                                }
                              }
                            }
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            ) : (
              <Box className="startup_resource_empty-graph">
                <Typography variant="h6" color="textSecondary">
                  Enter budget details to see allocation recommendations
                </Typography>
              </Box>
            )}
          </Card>
        </Grid>

        {/* Allocation Details */}
        {predictedAllocations && (
          <Grid item xs={12}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Detailed Allocation Breakdown
              </Typography>
              <Grid container spacing={2}>
                {Object.entries(predictedAllocations).map(([dept, amount]) => (
                  <Grid item xs={12} sm={6} md={4} key={dept}>
                    <Card variant="outlined" sx={{ p: 2 }}>
                      <Typography variant="subtitle1">{dept}</Typography>
                      <Typography variant="h6">
                        ₹{amount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {((amount / parseAmount(totalBudget)) * 100).toFixed(1)}%
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default StartupResourceAllocation;
