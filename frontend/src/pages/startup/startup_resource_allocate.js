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

const StartupResourceAllocation = () => {
  const [totalFunds, setTotalFunds] = useState("");
  const [availableDepartments, setAvailableDepartments] = useState([
    { name: "Research & Development", defaultPercentage: 30 },
    { name: "Marketing", defaultPercentage: 25 },
    { name: "Operations", defaultPercentage: 20 },
    { name: "Human Resources", defaultPercentage: 15 },
    { name: "IT Infrastructure", defaultPercentage: 10 },
    { name: "Sales", defaultPercentage: 20 },
    { name: "Customer Support", defaultPercentage: 15 },
    { name: "Finance", defaultPercentage: 10 },
  ]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [allocationHistory, setAllocationHistory] = useState([]);
  const [selectedHistory, setSelectedHistory] = useState(null);

  // Calculate allocations automatically based on selected departments
  const calculateAllocations = (funds) => {
    if (selectedDepartments.length === 0) return [];
    const equalPercentage = 100 / selectedDepartments.length;
    return selectedDepartments.map((dept) => ({
      name: dept,
      percentage: equalPercentage,
      allocated: (funds * equalPercentage) / 100,
    }));
  };

  // Update chart data for pie chart
  const getChartData = (allocations) => ({
    labels: allocations.map((dept) => dept.name),
    datasets: [
      {
        data: allocations.map((dept) => dept.allocated),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#4BC0C0",
          "#FF66CC",
        ],
      },
    ],
  });

  // Handle department selection
  const handleDepartmentChange = (event) => {
    setSelectedDepartments(event.target.value);
    if (totalFunds) {
      handleAllocation();
    }
  };

  const handleAllocation = () => {
    if (!totalFunds) return;
    
    const allocations = calculateAllocations(parseFloat(totalFunds));
    const newAllocation = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      totalFunds,
      allocations,
    };
    
    setAllocationHistory([newAllocation, ...allocationHistory]);
    setSelectedHistory(newAllocation);
  };

  return (
    <Box className="resource-dashboard">
      <Typography variant="h4" gutterBottom className="dashboard-title">
        Startup Resource Allocation Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Input Section */}
        <Grid item xs={12} md={4}>
          <Card className="input-card">
            <Typography variant="h6" gutterBottom className="card-title">
              Allocate Resources
            </Typography>
            <TextField
              fullWidth
              label="Total Funds ($)"
              type="number"
              value={totalFunds}
              onChange={(e) => setTotalFunds(e.target.value)}
              className="funds-input"
            />
            
            {/* Add Department Selection */}
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Select Departments</InputLabel>
              <Select
                multiple
                value={selectedDepartments}
                onChange={handleDepartmentChange}
                renderValue={(selected) => selected.join(', ')}
              >
                {availableDepartments.map((dept) => (
                  <MenuItem key={dept.name} value={dept.name}>
                    {dept.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Card>
        </Grid>

        {/* Graph Section - Update to Pie chart */}
        <Grid item xs={12} md={8}>
          <Card className="graph-card">
            {selectedHistory ? (
              <>
                <Typography variant="h6" gutterBottom className="card-title">
                  Allocation Distribution - {selectedHistory.date}
                </Typography>
                <div className="chart-container">
                  <Pie
                    data={getChartData(selectedHistory.allocations)}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'right',
                        },
                        title: {
                          display: true,
                          text: `Total Funds: $${selectedHistory.totalFunds}`,
                        },
                      },
                    }}
                    height={300}
                  />
                </div>
              </>
            ) : (
              <div className="empty-graph">
                <Typography variant="h6">
                  Select departments and enter funds to view the allocation
                </Typography>
              </div>
            )}
          </Card>
        </Grid>

        {/* History Section */}
        <Grid item xs={12}>
          <Card className="history-card">
            <Typography variant="h6" gutterBottom className="card-title">
              Allocation History
            </Typography>
            <Grid container spacing={2}>
              {allocationHistory.map((history) => (
                <Grid item xs={12} sm={6} md={4} key={history.id}>
                  <Card 
                    className={`history-item ${selectedHistory?.id === history.id ? 'selected' : ''}`}
                    onClick={() => setSelectedHistory(history)}
                  >
                    <Typography variant="subtitle1" className="history-date">
                      Date: {history.date}
                    </Typography>
                    <Typography variant="body2" className="history-amount">
                      Total Funds: ${history.totalFunds}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StartupResourceAllocation;
