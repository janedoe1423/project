import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  Chip,
  Slider,
  InputAdornment,
} from "@mui/material";
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./startup_resource_allocate.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

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
  const [selectedResourceHistory, setSelectedResourceHistory] = useState(null);
  const [resources, setResources] = useState({
    development: [],
    marketing: [],
    operations: [],
    hr: [],
    infrastructure: [],
  });
  const [availableResources, setAvailableResources] = useState([
    // Define your available resources here
    { name: "Resource A", type: "development" },
    { name: "Resource B", type: "marketing" },
    // ... other resources ...
  ]);
  const [resourceAllocationHistory, setResourceAllocationHistory] = useState([]);
  const [selectedHistory, setSelectedHistory] = useState(null);

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

  const calculateAllocation = (totalFunds) => {
    // Your allocation logic here
    // Return the calculated allocation
  };

  const handleResourceAllocation = () => {
    const allocation = calculateAllocation(metrics.totalFunds);
    const newAllocation = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      totalFunds: metrics.totalFunds,
      resources: resources,
      allocationDetails: allocation,
    };
    setResourceAllocationHistory([newAllocation, ...resourceAllocationHistory]);
    setSelectedHistory(newAllocation);
  };

  // Define state variables
  const [metrics, setMetrics] = useState({
    departments: {
      development: { growthRate: 0, cac: 0, priority: 50 },
      marketing: { growthRate: 0, cac: 0, priority: 50 },
      operations: { growthRate: 0, cac: 0, priority: 50 },
      hr: { growthRate: 0, cac: 0, priority: 50 },
      infrastructure: { growthRate: 0, cac: 0, priority: 50 },
    },
    totalFunds: 0,
  });

  // Render metrics input form with a modern design
  const renderMetricsForm = () => (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Department Metrics
      </Typography>
      
      {Object.entries(metrics.departments).map(([dept, deptMetrics]) => (
        <Card 
          key={dept} 
          sx={{ 
            mb: 3, 
            p: 2,
            background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            borderRadius: '16px',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-2px)'
            }
          }}
        >
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              color: 'primary.main',
              borderBottom: '2px solid',
              borderColor: 'primary.light',
              pb: 1,
              mb: 2
            }}
          >
            {dept.charAt(0).toUpperCase() + dept.slice(1)}
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Growth Rate (%)"
                type="number"
                value={deptMetrics.growthRate}
                onChange={(e) => setMetrics({
                  ...metrics,
                  departments: {
                    ...metrics.departments,
                    [dept]: {
                      ...deptMetrics,
                      growthRate: parseFloat(e.target.value) || 0
                    }
                  }
                })}
                InputProps={{
                  endAdornment: <InputAdornment position="end">%</InputAdornment>
                }}
              />
            </Grid>
            {/* Add other input fields for CAC and Priority */}
          </Grid>
        </Card>
      ))}

      <TextField
        fullWidth
        label="Total Budget ($)"
        type="number"
        value={metrics.totalFunds}
        onChange={(e) => setMetrics({
          ...metrics,
          totalFunds: parseFloat(e.target.value) || 0
        })}
        sx={{ mt: 3 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />

      <Button
        variant="contained"
        fullWidth
        onClick={handleResourceAllocation}
        sx={{ 
          mt: 3, 
          height: '56px',
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          '&:hover': {
            background: 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
          }
        }}
      >
        Calculate Allocation
      </Button>
    </Box>
  );

  return (
    <Box className="startup_resource_dashboard">
      <Typography variant="h4" gutterBottom>
        Smart Budget Allocation System
      </Typography>

      {/* Budget Allocation Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Budget Allocation
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
              <div className="startup_resource_empty-graph">
                <Typography variant="h6">
                  Select departments and enter funds to view the allocation
                </Typography>
              </div>
            )}
          </Card>
        </Grid>

        {/* History Section */}
        <Grid item xs={12}>
          <Card className="startup_resource_history-card">
            <Typography variant="h5" className="startup_resource_history-section-title">
              Allocation History
            </Typography>
            <Box className="startup_resource_history-grid">
              {allocationHistory.map((history) => (
                <Card 
                  key={history.id}
                  className={`startup_resource_history-item ${
                    selectedHistory?.id === history.id ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedHistory(history)}
                >
                  <Typography variant="h6" className="startup_resource_history-date">
                    {history.date}
                  </Typography>
                  <Typography variant="body1" className="startup_resource_history-amount">
                    Total Funds: ${Number(history.totalFunds).toLocaleString()}
                  </Typography>
                  <Box className="startup_resource_history-allocations">
                    {history.allocations.map((alloc) => (
                      <Chip
                        key={alloc.name}
                        label={`${alloc.name}: ${alloc.percentage.toFixed(1)}%`}
                        size="small"
                        className="startup_resource_history-allocation-chip"
                      />
                    ))}
                  </Box>
                </Card>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Resource Allocation Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 6, mb: 2 }}>
        Resource Allocation
      </Typography>
      <Grid container spacing={3}>
        {/* Resource Input Section */}
        <Grid item xs={12} md={4}>
          <Card className="startup_resource_input-card">
            <Typography variant="h6" gutterBottom>
              Allocate Resources
            </Typography>
            
            {Object.keys(resources).map((resourceType) => (
              <FormControl fullWidth sx={{ mt: 2 }} key={resourceType}>
                <InputLabel id={`${resourceType}-select-label`}>
                  Select {resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}
                </InputLabel>
                <Select
                  labelId={`${resourceType}-select-label`}
                  multiple
                  value={resources[resourceType]}
                  onChange={(e) => setResources({
                    ...resources,
                    [resourceType]: e.target.value
                  })}
                  className="startup_resource_department-select"
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {availableResources
                    .filter(resource => resource.type === resourceType)
                    .map((resource) => (
                      <MenuItem key={resource.name} value={resource.name}>
                        <Checkbox checked={resources[resourceType].includes(resource.name)} />
                        {resource.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            ))}

            <Button 
              variant="contained" 
              fullWidth 
              sx={{ mt: 3 }}
              onClick={handleResourceAllocation}
            >
              Allocate Resources
            </Button>
          </Card>
        </Grid>

        {/* Resource Graph Section */}
        <Grid item xs={12} md={8}>
          <Card className="startup_resource_graph-card">
            {selectedResourceHistory ? (
              <>
                <Typography variant="h6" gutterBottom>
                  Resource Distribution - {selectedResourceHistory.date}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {Object.entries(selectedResourceHistory.resources).map(([type, items]) => (
                    <Card key={type} sx={{ p: 2, flex: 1, minWidth: 200 }}>
                      <Typography variant="subtitle1" gutterBottom>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </Typography>
                      {items.map((item, index) => (
                        <Chip 
                          key={index}
                          label={item}
                          sx={{ m: 0.5 }}
                        />
                      ))}
                    </Card>
                  ))}
                </Box>
              </>
            ) : (
              <Typography variant="h6" sx={{ p: 3, textAlign: 'center' }}>
                Select resources to view the allocation
              </Typography>
            )}
          </Card>
        </Grid>

        {/* Resource History Section */}
        <Grid item xs={12}>
          <Card className="startup_resource_history-card">
            <Typography variant="h6" gutterBottom>
              Resource Allocation History
            </Typography>
            <Box className="startup_resource_history-grid">
              {resourceAllocationHistory.map((history) => (
                <Card 
                  key={history.id}
                  className={`startup_resource_history-item ${
                    selectedResourceHistory?.id === history.id ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedResourceHistory(history)}
                >
                  <Typography variant="subtitle1">
                    {history.date}
                  </Typography>
                  {Object.entries(history.resources).map(([type, items]) => (
                    <Box key={type} sx={{ mt: 1 }}>
                      <Typography variant="caption">
                        {type.charAt(0).toUpperCase() + type.slice(1)}:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {items.map((item, index) => (
                          <Chip 
                            key={index}
                            label={item}
                            size="small"
                          />
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Card>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StartupResourceAllocation;
