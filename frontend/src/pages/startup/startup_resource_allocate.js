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

// Industry benchmark calculations
const getIndustryBenchmark = (department, stage, industry) => {
  const benchmarks = {
    technology: {
      seed: {
        development: 45,
        marketing: 20,
        operations: 15,
        hr: 10,
        infrastructure: 10
      },
      // Add other stages...
    },
    // Add other industries...
  };

  return benchmarks[industry]?.[stage]?.[department] || 20; // Default 20% if not found
};

// Stage weight calculations
const calculateStageWeight = (department, stage, companySize, revenue) => {
  const stageMultipliers = {
    seed: {
      development: 1.5,
      marketing: 0.8,
      operations: 0.7,
      hr: 0.6,
      infrastructure: 1.2
    },
    // Add other stages...
  };

  const sizeMultipliers = {
    small: 1.2,
    medium: 1.0,
    large: 0.8
  };

  const revenueMultiplier = Math.log10(revenue + 1) / 10;
  
  return (stageMultipliers[stage]?.[department] || 1) * 
         (sizeMultipliers[companySize] || 1) * 
         revenueMultiplier;
};

// Risk adjustment calculations
const adjustForRisk = (department, riskTolerance, marketConditions) => {
  const riskMultipliers = {
    growing: 1.2,
    stable: 1.0,
    declining: 0.8
  };

  const departmentRiskFactors = {
    development: 1.5,
    marketing: 1.3,
    operations: 0.8,
    hr: 0.7,
    infrastructure: 0.9
  };

  const riskFactor = riskTolerance / 100;
  return (departmentRiskFactors[department] || 1) * 
         (riskMultipliers[marketConditions] || 1) * 
         riskFactor;
};

// Factor importance calculations
const getFactorImportance = (factor) => {
  const importanceWeights = {
    historical: 0.35,  // Historical performance has highest weight
    benchmark: 0.25,   // Industry benchmarks
    stage: 0.25,       // Stage requirements
    risk: 0.15         // Risk adjustments
  };

  return importanceWeights[factor] || 0.25;
};

// Minimum requirements handling
const applyMinimumRequirements = (allocation, minimumRequirements) => {
  const result = { ...allocation };
  
  // Apply department-specific minimum requirements
  Object.keys(ALL_DEPARTMENTS).forEach(dept => {
    const minRequired = minimumRequirements[dept] || ALL_DEPARTMENTS[dept].minAllocation;
    if (result[dept] < minRequired) {
      result[dept] = minRequired;
    }
  });

  return result;
};

// Remaining funds calculations
const calculateRemainingFunds = (totalFunds, baseAllocation) => {
  const allocatedFunds = Object.values(baseAllocation)
    .reduce((sum, value) => sum + value, 0);
  return totalFunds - allocatedFunds;
};

// Optimize remaining funds
const optimizeRemainingFunds = (remainingFunds, weights, constraints) => {
  const optimized = { ...weights };
  
  // Apply maximum constraints from department definitions
  Object.keys(ALL_DEPARTMENTS).forEach(dept => {
    const maxAllocation = constraints[dept] || ALL_DEPARTMENTS[dept].maxAllocation;
    if (optimized[dept] > maxAllocation) {
      const excess = optimized[dept] - maxAllocation;
      optimized[dept] = maxAllocation;
      
      // Redistribute excess proportionally to other departments
      const remainingDepts = Object.keys(optimized).filter(k => 
        k !== dept && optimized[k] < ALL_DEPARTMENTS[k].maxAllocation
      );
      
      if (remainingDepts.length > 0) {
        const remainingTotal = remainingDepts.reduce((sum, k) => sum + optimized[k], 0);
        remainingDepts.forEach(k => {
          const newValue = optimized[k] + (optimized[k] / remainingTotal) * excess;
          optimized[k] = Math.min(newValue, ALL_DEPARTMENTS[k].maxAllocation);
        });
      }
    }
  });

  return optimized;
};

// Normalize final allocation
const normalizeFinalAllocation = (allocation, totalFunds) => {
  let total = Object.values(allocation).reduce((sum, value) => sum + value, 0);
  const normalized = {};

  // First pass: calculate percentages
  Object.keys(ALL_DEPARTMENTS).forEach(dept => {
    const value = allocation[dept] || ALL_DEPARTMENTS[dept].baseAllocation;
    normalized[dept] = {
      percentage: (value / total) * 100,
      amount: (value / total) * totalFunds,
      expectedROI: calculateExpectedROI(dept, value, totalFunds),
      department: ALL_DEPARTMENTS[dept].name
    };
  });

  return normalized;
};

// Performance metric calculations
const calculateSuccessRate = (history) => {
  // Calculate success rate based on historical performance
  const targetAchievement = 0.8; // 80% of goals achieved
  return history.allocations.reduce((sum, alloc) => 
    sum + (alloc.achieved ? 1 : 0), 0) / history.allocations.length;
};

const calculateROI = (history) => {
  // Calculate ROI based on historical data
  const totalInvestment = history.totalFunds;
  const totalReturn = history.allocations.reduce((sum, alloc) => 
    sum + (alloc.return || 0), 0);
  return ((totalReturn - totalInvestment) / totalInvestment) * 100;
};

const calculateExpectedROI = (department, allocation, totalFunds) => {
  // Calculate expected ROI based on department and allocation size
  const baseROI = {
    development: 25,
    marketing: 20,
    operations: 15,
    hr: 10,
    infrastructure: 12
  };

  const allocationPercentage = (allocation / totalFunds) * 100;
  return baseROI[department] * (1 + (allocationPercentage / 100));
};

// API calls for metrics updates
const updateHistoricalMetrics = async () => {
  try {
    // Simulate API call to get historical performance data
    return new Promise(resolve => setTimeout(resolve, 500));
  } catch (error) {
    console.error('Error updating historical metrics:', error);
  }
};

const updateIndustryBenchmarks = async () => {
  try {
    // Simulate API call to get industry benchmarks
    return new Promise(resolve => setTimeout(resolve, 500));
  } catch (error) {
    console.error('Error updating industry benchmarks:', error);
  }
};

// Define all possible departments
const ALL_DEPARTMENTS = {
  development: {
    name: 'Development',
    baseAllocation: 30,
    minAllocation: 20,
    maxAllocation: 50,
    riskFactor: 1.5
  },
  marketing: {
    name: 'Marketing',
    baseAllocation: 20,
    minAllocation: 15,
    maxAllocation: 40,
    riskFactor: 1.3
  },
  operations: {
    name: 'Operations',
    baseAllocation: 15,
    minAllocation: 10,
    maxAllocation: 30,
    riskFactor: 0.8
  },
  hr: {
    name: 'HR',
    baseAllocation: 10,
    minAllocation: 5,
    maxAllocation: 20,
    riskFactor: 0.7
  },
  infrastructure: {
    name: 'Infrastructure',
    baseAllocation: 15,
    minAllocation: 10,
    maxAllocation: 30,
    riskFactor: 0.9
  },
  research: {
    name: 'Research',
    baseAllocation: 10,
    minAllocation: 5,
    maxAllocation: 25,
    riskFactor: 1.4
  }
};

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

  // Add new state for resource allocation
  const [resources, setResources] = useState({
    employees: [],
    equipment: [],
    software: [],
  });

  const [resourceAllocationHistory, setResourceAllocationHistory] = useState([]);
  const [selectedResourceHistory, setSelectedResourceHistory] = useState(null);

  // Add resource types
  const [availableResources] = useState([
    { name: "Software Engineers", type: "employees", defaultCount: 5 },
    { name: "Product Managers", type: "employees", defaultCount: 2 },
    { name: "Designers", type: "employees", defaultCount: 3 },
    { name: "Laptops", type: "equipment", defaultCount: 10 },
    { name: "Servers", type: "equipment", defaultCount: 5 },
    { name: "Development Tools", type: "software", defaultCount: 8 },
    { name: "Project Management Tools", type: "software", defaultCount: 3 },
  ]);

  // Add new state for budget allocation parameters
  const [budgetParameters, setBudgetParameters] = useState({
    riskTolerance: 50,
    growthStage: 'seed',
    industry: 'technology',
    companySize: 'small',
    revenue: 0,
    marketConditions: 'stable',
    priorityWeights: {
      development: 0,
      marketing: 0,
      operations: 0,
      hr: 0,
      infrastructure: 0
    },
    constraints: {},
    minimumRequirements: {}
  });

  // Add state for historical performance metrics
  const [historicalMetrics, setHistoricalMetrics] = useState({
    departmentPerformance: {},
    successRates: {},
    roi: {}
  });

  // Add state for industry benchmarks
  const [industryBenchmarks, setIndustryBenchmarks] = useState({
    averageAllocations: {},
    successMetrics: {},
    riskFactors: {}
  });

  // Add normalizeWeights function
  const normalizeWeights = (weights) => {
    const total = Object.values(weights).reduce((sum, value) => sum + value, 0);
    const normalized = {};
    
    Object.keys(weights).forEach(key => {
      normalized[key] = (weights[key] / total) * 100;
    });
    
    return normalized;
  };

  // Move optimizeAllocation inside component
  const optimizeAllocation = (weights, totalFunds) => {
    const { constraints = {}, minimumRequirements = {} } = budgetParameters;
    
    // Ensure all departments have initial allocation
    let baseAllocation = {};
    Object.keys(ALL_DEPARTMENTS).forEach(dept => {
      baseAllocation[dept] = weights[dept] || ALL_DEPARTMENTS[dept].baseAllocation;
    });

    // Apply minimum requirements
    baseAllocation = applyMinimumRequirements(baseAllocation, minimumRequirements);
    
    // Calculate remaining funds
    const remainingFunds = calculateRemainingFunds(totalFunds, baseAllocation);
    
    // Optimize remaining funds distribution
    const optimizedAllocation = optimizeRemainingFunds(
      remainingFunds, 
      baseAllocation, 
      constraints
    );

    return normalizeFinalAllocation(optimizedAllocation, totalFunds);
  };

  // Move calculateOptimalAllocation inside component
  const calculateOptimalAllocation = (totalFunds) => {
    // Get weights from different factors
    const historicalWeights = analyzeHistoricalPerformance();
    const benchmarkWeights = analyzeBenchmarks();
    const stageWeights = analyzeStageRequirements();
    const riskAdjustedWeights = calculateRiskAdjustedWeights();

    // Combine weights ensuring all departments are included
    const combinedWeights = {};
    Object.keys(ALL_DEPARTMENTS).forEach(dept => {
      combinedWeights[dept] = (
        (historicalWeights[dept] || ALL_DEPARTMENTS[dept].baseAllocation) * 0.35 +
        (benchmarkWeights[dept] || ALL_DEPARTMENTS[dept].baseAllocation) * 0.25 +
        (stageWeights[dept] || ALL_DEPARTMENTS[dept].baseAllocation) * 0.25 +
        (riskAdjustedWeights[dept] || ALL_DEPARTMENTS[dept].baseAllocation) * 0.15
      );
    });

    return optimizeAllocation(combinedWeights, totalFunds);
  };

  // Move handleAllocation inside component
  const handleAllocation = async () => {
    if (!totalFunds) return;

    await updateHistoricalMetrics();
    await updateIndustryBenchmarks();

    const allocation = calculateOptimalAllocation(parseFloat(totalFunds));

    const newAllocation = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      totalFunds,
      allocations: Object.entries(allocation).map(([name, data]) => ({
        name: data.department,
        percentage: data.percentage,
        allocated: data.amount,
        expectedROI: data.expectedROI
      }))
    };

    setAllocationHistory([newAllocation, ...allocationHistory]);
    setSelectedHistory(newAllocation);
  };

  // Add other helper functions inside component
  const analyzeHistoricalPerformance = () => {
    const weights = {};
    
    allocationHistory.forEach(history => {
      const performance = calculatePerformanceMetrics(history);
      
      history.allocations.forEach(alloc => {
        if (!weights[alloc.name]) {
          weights[alloc.name] = {
            successRate: 0,
            roi: 0,
            count: 0
          };
        }
        
        weights[alloc.name].successRate += performance.successRate;
        weights[alloc.name].roi += performance.roi;
        weights[alloc.name].count++;
      });
    });

    // Normalize weights
    Object.keys(weights).forEach(dept => {
      weights[dept] = {
        allocation: (weights[dept].roi / weights[dept].count) * 
                   (weights[dept].successRate / weights[dept].count)
      };
    });

    return weights;
  };

  const analyzeBenchmarks = () => {
    const { growthStage, industry } = budgetParameters;
    return {
      development: getIndustryBenchmark('development', growthStage, industry),
      marketing: getIndustryBenchmark('marketing', growthStage, industry),
      operations: getIndustryBenchmark('operations', growthStage, industry),
      hr: getIndustryBenchmark('hr', growthStage, industry),
      infrastructure: getIndustryBenchmark('infrastructure', growthStage, industry)
    };
  };

  const analyzeStageRequirements = () => {
    const { growthStage, companySize, revenue } = budgetParameters;
    
    return {
      development: calculateStageWeight('development', growthStage, companySize, revenue),
      marketing: calculateStageWeight('marketing', growthStage, companySize, revenue),
      operations: calculateStageWeight('operations', growthStage, companySize, revenue),
      hr: calculateStageWeight('hr', growthStage, companySize, revenue),
      infrastructure: calculateStageWeight('infrastructure', growthStage, companySize, revenue)
    };
  };

  const calculateRiskAdjustedWeights = () => {
    const { riskTolerance, marketConditions } = budgetParameters;
    
    return {
      development: adjustForRisk('development', riskTolerance, marketConditions),
      marketing: adjustForRisk('marketing', riskTolerance, marketConditions),
      operations: adjustForRisk('operations', riskTolerance, marketConditions),
      hr: adjustForRisk('hr', riskTolerance, marketConditions),
      infrastructure: adjustForRisk('infrastructure', riskTolerance, marketConditions)
    };
  };

  const calculatePerformanceMetrics = (history) => {
    return {
      successRate: calculateSuccessRate(history),
      roi: calculateROI(history)
    };
  };

  const handleResourceAllocation = () => {
    const newAllocation = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      resources: { ...resources }
    };
    
    setResourceAllocationHistory([newAllocation, ...resourceAllocationHistory]);
    setSelectedResourceHistory(newAllocation);
  };

  // Modify handleDepartmentChange to remove automatic calculation
  const handleDepartmentChange = (event) => {
    setSelectedDepartments(event.target.value);
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

  // Add UI elements for budget parameters
  const renderBudgetParameters = () => (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Budget Parameters
      </Typography>
      
      {/* Risk Tolerance Slider */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          Risk Tolerance
        </Typography>
        <Slider
          value={budgetParameters.riskTolerance}
          onChange={(e, value) => setBudgetParameters({
            ...budgetParameters,
            riskTolerance: value
          })}
          valueLabelDisplay="auto"
          marks={[
            { value: 0, label: 'Conservative' },
            { value: 50, label: 'Moderate' },
            { value: 100, label: 'Aggressive' }
          ]}
        />
      </FormControl>

      {/* Growth Stage Select */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Growth Stage</InputLabel>
        <Select
          value={budgetParameters.growthStage}
          onChange={(e) => setBudgetParameters({
            ...budgetParameters,
            growthStage: e.target.value
          })}
        >
          <MenuItem value="seed">Seed Stage</MenuItem>
          <MenuItem value="early">Early Stage</MenuItem>
          <MenuItem value="growth">Growth Stage</MenuItem>
          <MenuItem value="mature">Mature Stage</MenuItem>
        </Select>
      </FormControl>

      {/* Priority Weights */}
      <Typography variant="subtitle2" gutterBottom>
        Department Priorities (0-100)
      </Typography>
      {Object.keys(budgetParameters.priorityWeights).map(dept => (
        <TextField
          key={dept}
          label={dept.charAt(0).toUpperCase() + dept.slice(1)}
          type="number"
          value={budgetParameters.priorityWeights[dept]}
          onChange={(e) => setBudgetParameters({
            ...budgetParameters,
            priorityWeights: {
              ...budgetParameters.priorityWeights,
              [dept]: parseFloat(e.target.value) || 0
            }
          })}
          fullWidth
          margin="dense"
          InputProps={{
            inputProps: { min: 0, max: 100 }
          }}
        />
      ))}
    </Box>
  );

  return (
    <Box className="startup_resource_dashboard">
      <Typography variant="h4" gutterBottom className="startup_resource_dashboard-title">
        Startup Resource Management Dashboard
      </Typography>

      {/* Budget Allocation Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Budget Allocation
      </Typography>
      <Grid container spacing={3}>
        {/* Input Section */}
        <Grid item xs={12} md={4}>
          <Card className="startup_resource_input-card">
            {renderBudgetParameters()}
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
