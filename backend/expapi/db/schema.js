const mongoose = require("mongoose");

const startupMetricsSchema = new mongoose.Schema({
  revenue: [{
    month: String,
    year: Number,
    value: Number
  }],
  growthRate: [{
    month: String,
    year: Number,
    value: Number
  }],
  burnRate: [{
    month: String,
    year: Number,
    value: Number
  }],
  fundsGained: [{
    month: String,
    year: Number,
    value: Number
  }],
  successRate: [{
    month: String,
    year: Number,
    value: Number
  }],
  loss: [{
    month: String,
    year: Number,
    value: Number
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const StartupMetrics = mongoose.model('StartupMetrics', startupMetricsSchema);

module.exports = StartupMetrics; 