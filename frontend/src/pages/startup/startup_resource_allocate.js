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
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./startup_resource_allocate.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StartupResourceAllocation = () => {
  const [totalFunds, setTotalFunds] = useState("");
  const [departments, setDepartments] = useState([
    { name: "Research & Development", percentage: 30 },
    { name: "Marketing", percentage: 25 },
    { name: "Operations", percentage: 20 },
    { name: "Human Resources", percentage: 15 },
    { name: "IT Infrastructure", percentage: 10 },
  ]);
  const [allocationHistory, setAllocationHistory] = useState([]);
  const [selectedHistory, setSelectedHistory] = useState(null);

  // Calculate allocations based on percentages
  const calculateAllocations = (funds) => {
    return departments.map((dept) => ({
      ...dept,
      allocated: (funds * dept.percentage) / 100,
    }));
  };

  // Chart configuration
  const getChartData = (allocations) => ({
    labels: allocations.map((dept) => dept.name),
    datasets: [
      {
        label: "Resource Allocation (in $)",
        data: allocations.map((dept) => dept.allocated),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  });

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
            <Button
              variant="contained"
              fullWidth
              onClick={handleAllocation}
              disabled={!totalFunds}
              className="calculate-btn"
            >
              Calculate Allocation
            </Button>

            {/* Department List */}
            <div className="departments-list">
              <Typography variant="h6" className="dept-title">
                Department Allocations
              </Typography>
              {departments.map((dept) => (
                <div key={dept.name} className="dept-item">
                  <span>{dept.name}</span>
                  <span className="dept-percentage">{dept.percentage}%</span>
                </div>
              ))}
            </div>
          </Card>
        </Grid>

        {/* Graph Section */}
        <Grid item xs={12} md={8}>
          <Card className="graph-card">
            {selectedHistory ? (
              <>
                <Typography variant="h6" gutterBottom className="card-title">
                  Allocation Distribution - {selectedHistory.date}
                </Typography>
                <div className="chart-container">
                  <Bar
                    data={getChartData(selectedHistory.allocations)}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top',
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
                  Enter funds and calculate allocation to view the graph
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
