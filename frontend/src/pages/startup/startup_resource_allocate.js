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

  // Modify handleDepartmentChange to remove automatic calculation
  const handleDepartmentChange = (event) => {
    setSelectedDepartments(event.target.value);
  };

  const handleAllocation = () => {
    if (!totalFunds || selectedDepartments.length === 0) return;
    
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
    <Box className="startup_resource_dashboard">
      <Typography variant="h4" gutterBottom className="startup_resource_dashboard-title">
        Startup Resource Allocation Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Input Section */}
        <Grid item xs={12} md={4}>
          <Card className="startup_resource_input-card">
            <Typography variant="h6" gutterBottom>
              Allocate Resources
            </Typography>
            <TextField
              fullWidth
              label="Total Funds ($)"
              type="number"
              value={totalFunds}
              onChange={(e) => setTotalFunds(e.target.value)}
              className="funds-input"
              sx={{ 
                '& .MuiInputBase-root': { 
                  height: '56px'
                },
                '& .MuiInputBase-input': {
                  fontSize: '1.1rem'
                }
              }}
            />
            
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel 
                id="department-select-label"
                sx={{ 
                  backgroundColor: 'white',
                  px: 1,
                  '&.Mui-focused': {
                    backgroundColor: 'white',
                  }
                }}
              >
                Select Departments
              </InputLabel>
              <Select
                labelId="department-select-label"
                multiple
                value={selectedDepartments}
                onChange={handleDepartmentChange}
                className="startup_resource_department-select"
                sx={{ 
                  '& .MuiSelect-select': { 
                    display: 'flex !important',
                    flexWrap: 'wrap !important',
                    gap: '8px !important',
                    minHeight: '56px !important',
                    height: 'auto !important',
                    padding: '8px !important'
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    height: 'auto !important'
                  }
                }}
                renderValue={(selected) => (
                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '8px',
                    width: '100%'
                  }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        className="department-chip"
                        size="medium"
                        sx={{ 
                          m: '2px !important',
                          height: '32px !important'
                        }}
                      />
                    ))}
                  </Box>
                )}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                      width: 350
                    }
                  }
                }}
              >
                {availableDepartments.map((dept) => (
                  <MenuItem 
                    key={dept.name} 
                    value={dept.name}
                    className={`startup_resource_department-menu-item ${
                      selectedDepartments.includes(dept.name) ? 'selected' : ''
                    }`}
                  >
                    <Checkbox checked={selectedDepartments.includes(dept.name)} />
                    {dept.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Add Calculate Button */}
            <Button 
              variant="contained" 
              fullWidth 
              sx={{ 
                mt: 3,
                height: '56px',
                fontSize: '1.1rem'
              }}
              onClick={handleAllocation}
              disabled={!totalFunds || selectedDepartments.length === 0}
            >
              Calculate Allocation
            </Button>
          </Card>
        </Grid>

        {/* Graph Section - Update to Pie chart */}
        <Grid item xs={12} md={8}>
          <Card className="startup_resource_graph-card">
            {selectedHistory ? (
              <>
                <Typography variant="h6" gutterBottom className="startup_resource_card-title">
                  Allocation Distribution - {selectedHistory.date}
                </Typography>
                <div className="startup_resource_chart-container">
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
    </Box>
  );
};

export default StartupResourceAllocation;
