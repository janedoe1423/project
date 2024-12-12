import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { format } from "date-fns";
import "./researcher_insights.css";

const ResearcherInsights = () => {
  // State Management
  const [selectedTimeframe, setSelectedTimeframe] = useState("yearly");
  const [selectedMetric, setSelectedMetric] = useState("citations");
  const [isLoading, setIsLoading] = useState(false);

  // Color Palette
  const colors = {
    primary: "#2C5282",
    secondary: "#2B6CB0",
    accent: "#C05621",
    success: "#2F855A",
    warning: "#DD6B20",
    danger: "#C53030",
    neutral: "#4A5568",
    chartColors: [
      "#2C5282", "#2B6CB0", "#3182CE", "#4299E1",
      "#63B3ED", "#90CDF4", "#BEE3F8", "#EBF8FF"
    ]
  };

  // Sample Research Data
  const researchData = {
    citations: [
      { period: "2020", value: 45, growth: "+15%", impact: 3.2, field: "AI" },
      { period: "2021", value: 62, growth: "+37%", impact: 3.8, field: "ML" },
      { period: "2022", value: 78, growth: "+25%", impact: 4.1, field: "Data Science" },
      { period: "2023", value: 95, growth: "+21%", impact: 4.5, field: "Robotics" }
    ],
    publications: [
      { period: "2020", value: 8, journal: 5, conference: 3, impact: 2.8 },
      { period: "2021", value: 12, journal: 7, conference: 5, impact: 3.2 },
      { period: "2022", value: 15, journal: 9, conference: 6, impact: 3.5 },
      { period: "2023", value: 18, journal: 11, conference: 7, impact: 3.8 }
    ],
    funding: [
      { period: "2020", value: 150000, grants: 2, success: "65%", source: "Federal" },
      { period: "2021", value: 200000, grants: 3, success: "70%", source: "Industry" },
      { period: "2022", value: 275000, grants: 4, success: "75%", source: "Academic" },
      { period: "2023", value: 320000, grants: 5, success: "80%", source: "Mixed" }
    ],
    collaborations: [
      { period: "2020", international: 3, domestic: 5, industry: 2 },
      { period: "2021", international: 4, domestic: 6, industry: 3 },
      { period: "2022", international: 6, domestic: 7, industry: 4 },
      { period: "2023", international: 8, domestic: 8, industry: 5 }
    ],
    impact: {
      byField: [
        { field: "Computer Science", score: 85 },
        { field: "Data Science", score: 72 },
        { field: "AI", score: 90 },
        { field: "Machine Learning", score: 78 },
        { field: "Robotics", score: 65 }
      ],
      byRegion: [
        { name: "Vadodara", value: 45 },
        { name: "Ahmedabad", value: 30 },
        { name: "Gandhinagar", value: 15 },
        { name: "Surat", value: 10 }
      ]
    }
  };

  // Metrics Calculation
  const calculateMetrics = () => {
    const currentYear = researchData[selectedMetric][researchData[selectedMetric].length - 1];
    const previousYear = researchData[selectedMetric][researchData[selectedMetric].length - 2];
    const growth = ((currentYear.value - previousYear.value) / previousYear.value) * 100;
    
    const total = researchData[selectedMetric].reduce((acc, curr) => acc + curr.value, 0);
    const average = total / researchData[selectedMetric].length;
    
    return {
      total: currentYear.value,
      growth: growth.toFixed(1),
      trend: growth >= 0 ? "positive" : "negative",
      average: average.toFixed(1),
      yearlyGrowth: growth.toFixed(1) + "%",
      performance: ((currentYear.value / average) * 100).toFixed(1)
    };
  };

  // Download Handlers
  const downloadCSV = () => {
    try {
      setIsLoading(true);
      const data = researchData[selectedMetric];
      const headers = Object.keys(data[0]);
      const csv = [
        headers,
        ...data.map(item => headers.map(header => item[header]))
      ]
        .map(row => row.join(","))
        .join("\n");

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      saveAs(blob, `research_analytics_${selectedMetric}_${new Date().getTime()}.csv`);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadExcel = () => {
    try {
      setIsLoading(true);
      const data = researchData[selectedMetric].map(item => ({
        ...item,
        timestamp: format(new Date(), "yyyy-MM-dd HH:mm:ss")
      }));

      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Research Analytics");
      XLSX.writeFile(wb, `research_analytics_${selectedMetric}_${new Date().getTime()}.xlsx`);
    } catch (error) {
      console.error("Excel download failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="res_ins-insights-container">
      {/* Dashboard Header */}
      <div className="res_ins-dashboard-header">
        <div className="res_ins-researcher-title">
            <h1>Researcher Insights</h1>
        </div>
        <div className="res_ins-quick-stats">
          <div className="res_ins-stat-item">
            <div className="res_ins-stat-label">H-Index</div>
            <div className="res_ins-stat-value">25</div>
            <div className="res_ins-stat-trend positive">+2 this year</div>
          </div>
          <div className="res_ins-stat-item">
            <div className="res_ins-stat-label">Total Publications</div>
            <div className="res_ins-stat-value">142</div>
            <div className="res_ins-stat-trend positive">+18 this year</div>
          </div>
          <div className="res_ins-stat-item">
            <div className="res_ins-stat-label">Active Grants</div>
            <div className="res_ins-stat-value">4</div>
            <div className="res_ins-stat-trend neutral">No change</div>
          </div>
          <div className="res_ins-stat-item">
            <div className="res_ins-stat-label">Research Impact</div>
            <div className="res_ins-stat-value">8.9</div>
            <div className="res_ins-stat-trend positive">+0.7 pts</div>
          </div>
          <div className="res_ins-stat-item">
            <div className="res_ins-stat-label">Collaborators</div>
            <div className="res_ins-stat-value">37</div>
            <div className="res_ins-stat-trend positive">+5 new</div>
          </div>
        </div>
      </div>

      {/* Main Controls */}
      <div className="res_ins-insights-controls">
        <div className="res_ins-control-group">
          <label className="res_ins-control-label">Metric</label>
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="res_ins-metric-select"
          >
            <option value="citations">Citations</option>
            <option value="publications">Publications</option>
            <option value="funding">Funding</option>
            <option value="collaborations">Collaborations</option>
          </select>
        </div>
        <div className="res_ins-download-buttons">
          <button 
            onClick={downloadCSV} 
            className="res_ins-download-btn res_ins-csv"
            disabled={isLoading}
          >
            <i className="fas fa-file-csv"></i>
            {isLoading ? 'Downloading...' : 'Export CSV'}
          </button>
          <button 
            onClick={downloadExcel} 
            className="res_ins-download-btn res_ins-excel"
            disabled={isLoading}
          >
            <i className="fas fa-file-excel"></i>
            {isLoading ? 'Downloading...' : 'Export Excel'}
          </button>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="res_ins-metrics-overview">
        <div className="res_ins-metric-card res_ins-primary">
          <div className="res_ins-metric-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h4 className='res_ins-title-color'>Total {selectedMetric}</h4>
          <div className="res_ins-metric-value">{calculateMetrics().total}</div>
          <div className={`res_ins-metric-trend ${calculateMetrics().trend}`}>
            {calculateMetrics().growth}% from previous year
          </div>
        </div>
        <div className="res_ins-metric-card res_ins-secondary">
          <div className="res_ins-metric-icon">
            <i className="fas fa-calculator"></i>
          </div>
          <h4 className='res_ins-title-color'>Average</h4>
          <div className="res_ins-metric-value">{calculateMetrics().average}</div>
          <div className="res_ins-metric-subtitle">Per year</div>
        </div>
        <div className="res_ins-metric-card res_ins-accent">
          <div className="res_ins-metric-icon">
            <i className="fas fa-trophy"></i>
          </div>
          <h4 className='res_ins-title-color'>Performance Index</h4>
          <div className="res_ins-metric-value">{calculateMetrics().performance}%</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="res_ins-charts-container">
        <div className="res_ins-chart-wrapper">
          <h3>Trend Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={researchData[selectedMetric]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={colors.primary} 
                strokeWidth={2}
                dot={{ fill: colors.primary }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="res_ins-chart-wrapper">
          <h3>Distribution Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={researchData[selectedMetric]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill={colors.secondary} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="res_ins-chart-wrapper">
          <h3>Impact by Field</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={researchData.impact.byField}>
              <PolarGrid />
              <PolarAngleAxis dataKey="field" />
              <PolarRadiusAxis />
              <Radar
                name="Impact Score"
                dataKey="score"
                stroke={colors.accent}
                fill={colors.accent}
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="res_ins-chart-wrapper">
          <h3>Regional Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={researchData.impact.byRegion}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill={colors.primary}
              >
                {researchData.impact.byRegion.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={colors.chartColors[index % colors.chartColors.length]} 
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ResearcherInsights;