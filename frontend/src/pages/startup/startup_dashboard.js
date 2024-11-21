import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./startup_dashboard.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StartupDashboard = () => {
  const navigate = useNavigate();
  const [isNewUser, setIsNewUser] = useState(true);
  const [metrics, setMetrics] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMetricsData();
  }, []);

  const fetchMetricsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/startup/metrics");

      if (response.status === 404) {
        setIsNewUser(true);
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch metrics");
      }

      const result = await response.json();

      if (result && result.data) {
        setMetrics(result.data);
        setIsNewUser(false);
      } else {
        setIsNewUser(true);
      }
    } catch (error) {
      console.error("Error fetching metrics:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStart = () => {
    navigate("/startup_data_input");
  };

  // Function to prepare chart data
  const prepareChartData = (metricData, metricName) => {
    if (!Array.isArray(metricData)) {
      console.error(`Invalid data for ${metricName}:`, metricData);
      return null;
    }

    return {
      labels: metricData.map((item) => `${item.month} ${item.year}`),
      datasets: [
        {
          label: metricName.charAt(0).toUpperCase() + metricName.slice(1),
          data: metricData.map((item) => item.value),
          fill: false,
          borderColor: getMetricColor(metricName),
          tension: 0.1,
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    };
  };

  // Function to get different colors for different metrics
  const getMetricColor = (metric) => {
    const colors = {
      revenue: "rgb(75, 192, 192)",
      growthRate: "rgb(255, 99, 132)",
      burnRate: "rgb(255, 159, 64)",
      fundsGained: "rgb(54, 162, 235)",
      successRate: "rgb(153, 102, 255)",
      loss: "rgb(255, 99, 132)",
    };
    return colors[metric] || "rgb(75, 192, 192)";
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error-message">
          <h3>Error loading data</h3>
          <p>{error}</p>
          <button onClick={fetchMetricsData}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {isNewUser ? (
        <div className="welcome-section">
          <h2>Welcome to Startup Analytics</h2>
          <p className="description">
            Track your startup's performance with powerful analytics and
            insights. To get started, please provide your startup's key metrics
            including:
          </p>
          <button className="start-button" onClick={handleStart}>
            Start Adding Your Data
          </button>
        </div>
      ) : (
        <div className="metrics-dashboard">
          <h2 className="dashboard-title">Startup Analytics Dashboard</h2>
          <div className="analytics-grid">
            {/* Revenue Analysis */}
            <div className="analytics-card">
              <div className="card-content">
                <div className="card-icon revenue-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Revenue Analysis</h3>
                <div className="graph-container">
                  <Line
                    data={prepareChartData(metrics.revenue, "revenue")}
                    options={chartOptions}
                  />
                </div>
              </div>
            </div>

            {/* Growth Rate Metrics */}
            <div className="analytics-card">
              <div className="card-content">
                <div className="card-icon growth-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Growth Rate Metrics</h3>
                <div className="graph-container">
                  <Line
                    data={prepareChartData(metrics.growthRate, "growthRate")}
                    options={chartOptions}
                  />
                </div>
              </div>
            </div>

            {/* Burn Rate Analysis */}
            <div className="analytics-card">
              <div className="card-content">
                <div className="card-icon burn-icon">
                  <i className="fas fa-fire"></i>
                </div>
                <h3>Burn Rate Analysis</h3>
                <div className="graph-container">
                  <Line
                    data={prepareChartData(metrics.burnRate, "burnRate")}
                    options={chartOptions}
                  />
                </div>
              </div>
            </div>

            {/* Funds Analysis */}
            <div className="analytics-card">
              <div className="card-content">
                <div className="card-icon funds-icon">
                  <i className="fas fa-coins"></i>
                </div>
                <h3>Funds Analysis</h3>
                <div className="graph-container">
                  <Line
                    data={prepareChartData(metrics.fundsGained, "fundsGained")}
                    options={chartOptions}
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="update-metrics-btn" onClick={handleStart}>
            Update Metrics
          </button>
        </div>
      )}
    </div>
  );
};

export default StartupDashboard;
