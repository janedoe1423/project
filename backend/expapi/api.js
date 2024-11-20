const express = require('express');
const router = express.Router();
const StartupMetrics = require('./db/schema');

// Validation middleware
const validateMetricsData = (req, res, next) => {
  const { revenue, growthRate, burnRate, fundsGained, successRate, loss } = req.body;
  
  // Check if at least one metric is present
  const hasAtLeastOneMetric = [revenue, growthRate, burnRate, fundsGained, successRate, loss]
    .some(metric => Array.isArray(metric) && metric.length > 0);

  if (!hasAtLeastOneMetric) {
    return res.status(400).json({ error: 'At least one metric must be provided' });
  }

  // Validate that if a metric is present, it has 5 months of data
  const metrics = { revenue, growthRate, burnRate, fundsGained, successRate, loss };
  for (const [key, value] of Object.entries(metrics)) {
    if (value && (!Array.isArray(value) || value.length !== 5)) {
      return res.status(400).json({ 
        error: `Invalid data format for ${key}. Must be an array with 5 months of data` 
      });
    }
  }

  next();
};

// POST endpoint to save metrics
router.post('/startup/metrics', validateMetricsData, async (req, res) => {
  try {
    const months = getLastFiveMonths();
    const formattedData = {};

    // Only format and include metrics that are present
    const metrics = ['revenue', 'growthRate', 'burnRate', 'fundsGained', 'successRate', 'loss'];
    
    metrics.forEach(metric => {
      if (req.body[metric]) {
        formattedData[metric] = formatMetricData(req.body[metric], months);
      } else {
        // Initialize empty metric with null values
        formattedData[metric] = months.map(month => ({
          month: month.name,
          year: month.year,
          value: null
        }));
      }
    });

    // Get the current count
    const currentMetrics = await StartupMetrics.findOne().sort({ createdAt: -1 });
    const currentCount = currentMetrics ? currentMetrics.count : 0;

    // Add count to formattedData
    formattedData.count = currentCount + 1;

    const metricsData = new StartupMetrics(formattedData);
    await metricsData.save();

    res.status(201).json({ 
      message: 'Metrics saved successfully',
      data: metricsData 
    });

  } catch (error) {
    console.error('Error saving metrics:', error);
    res.status(500).json({ 
      error: 'Failed to save metrics',
      details: error.message 
    });
  }
});

// GET endpoint to retrieve metrics
router.get('/startup/metrics', async (req, res) => {
  try {
    const metrics = await StartupMetrics.find()
      .sort({ createdAt: -1 })
      .limit(1);

    if (!metrics.length) {
      return res.status(404).json({ 
        message: 'No metrics found',
        isNewUser: true,
        data: null
      });
    }

    // Format the response data
    const metricData = metrics[0];
    const formattedResponse = {
      isNewUser: false,
      data: {
        revenue: metricData.revenue || [],
        growthRate: metricData.growthRate || [],
        burnRate: metricData.burnRate || [],
        fundsGained: metricData.fundsGained || [],
        successRate: metricData.successRate || [],
        loss: metricData.loss || []
      },
      count: metricData.count || 0,
      lastUpdated: metricData.createdAt
    };

    // Filter out metrics with no data
    Object.keys(formattedResponse.data).forEach(key => {
      if (!formattedResponse.data[key] || formattedResponse.data[key].length === 0) {
        delete formattedResponse.data[key];
      }
    });

    // Add metadata for frontend
    formattedResponse.availableMetrics = Object.keys(formattedResponse.data);
    formattedResponse.totalMonths = 5;
    formattedResponse.monthRange = getLastFiveMonths();

    res.json(formattedResponse);

  } catch (error) {
    console.error('Error retrieving metrics:', error);
    res.status(500).json({ 
      error: 'Failed to retrieve metrics',
      details: error.message,
      isNewUser: true,
      data: null
    });
  }
});

// Helper function to get last 5 months
function getLastFiveMonths() {
  const months = [];
  for (let i = 0; i < 5; i++) {
    const d = new Date();
    d.setMonth(d.getMonth() - i);
    months.unshift({
      name: d.toLocaleString('default', { month: 'long' }),
      year: d.getFullYear()
    });
  }
  return months;
}

// Helper function to format metric data
function formatMetricData(values, months) {
  return values.map((value, index) => ({
    month: months[index].name,
    year: months[index].year,
    value: Number(value)
  }));
}

module.exports = router;