import React, { useState } from "react";
import {
  Box, TextField, Button, Card, Typography, Grid
} from "@mui/material";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

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

  const handleCalculate = () => {
    try {
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
    }
  };

  const getChartData = (allocations) => ({
    labels: Object.keys(allocations),
    datasets: [{
      data: Object.values(allocations),
      backgroundColor: [
        "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"
      ],
    }]
  });

  return (
    <Box className="startup_resource_dashboard">
      <Typography variant="h4" gutterBottom>
        Smart Budget Allocation System
      </Typography>

      <Grid container spacing={3}>
        {/* Input Section */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Enter Details
            </Typography>
            
            <TextField
              fullWidth
              label="Total Budget (₹)"
              value={totalBudget}
              onChange={(e) => setTotalBudget(e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Expected Growth Rate (%)"
              value={growthRate}
              onChange={(e) => setGrowthRate(e.target.value)}
              sx={{ mb: 2 }}
            />

            <Button 
              variant="contained"
              fullWidth
              onClick={handleCalculate}
              disabled={!totalBudget || !growthRate}
            >
              Calculate Allocation
            </Button>
          </Card>
        </Grid>

        {/* Chart Section */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3, height: '100%' }}>
            {predictedAllocations ? (
              <>
                <Typography variant="h6" gutterBottom>
                  Recommended Budget Allocation
                </Typography>
                <Box sx={{ height: 400 }}>
                  <Pie
                    data={getChartData(predictedAllocations)}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { position: 'right' },
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
              </>
            ) : (
              <Typography variant="h6" align="center">
                Enter budget and growth rate to see recommendations
              </Typography>
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
