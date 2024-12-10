import React, { useState } from 'react'
import { Pie, Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import './admin_user_management.css'

// Full dataset for user metrics
const fullData = {
  labels: ['Startups', 'Investors', 'Researchers', 'Mentors'],
  datasets: [
    {
      label: 'User Categories',
      data: [1200, 300, 500, 200],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    },
  ],
};

const fullLineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Startups',
      data: [100, 150, 200, 300, 400],
      borderColor: '#FF6384',
      fill: false,
    },
    {
      label: 'Investors',
      data: [50, 80, 100, 120, 150],
      borderColor: '#36A2EB',
      fill: false,
    },
    {
      label: 'Researchers',
      data: [70, 90, 110, 130, 160],
      borderColor: '#FFCE56',
      fill: false,
    },
    {
      label: 'Mentors',
      data: [40, 60, 90, 110, 130],
      borderColor: '#4BC0C0',
      fill: false,
    },
  ],
};

// SummaryCard component
function SummaryCard({ role, total, active, growth }) {
  return (
    <div className="summary-card">
      <h3>{role}</h3>
      <p>Total Users: {total}</p>
      <p>Active Users: {active}</p>
      <p>Growth: {growth}%</p>
    </div>
  );
}

const UserManagementSystem = () => {
  // States for Pie and Line Chart data
  const [pieData, setPieData] = useState(fullData);
  const [lineData, setLineData] = useState(fullLineData);

  // Filter handler
  const handleFilterChange = (filter) => {
    if (filter === 'All') {
      setPieData(fullData);
      setLineData(fullLineData);
    } else {
      const filteredPieData = {
        ...fullData,
        labels: [filter],
        datasets: [
          {
            ...fullData.datasets[0],
            data: [
              fullData.datasets[0].data[fullData.labels.indexOf(filter)],
            ],
            backgroundColor: [
              fullData.datasets[0].backgroundColor[
                fullData.labels.indexOf(filter)
              ],
            ],
          },
        ],
      };

      const filteredLineData = {
        ...fullLineData,
        datasets: [
          fullLineData.datasets.find((dataset) => dataset.label === filter),
        ],
      };

      setPieData(filteredPieData);
      setLineData(filteredLineData);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Admin User Dashboard</h1>
      <div className="filter-buttons">
        {['All', 'Startups', 'Investors', 'Researchers', 'Mentors'].map((filter) => (
          <button key={filter} onClick={() => handleFilterChange(filter)}>
            {filter}
          </button>
        ))}
      </div>
      <div className="summary-section">
        {pieData.labels.map((role) => (
          <SummaryCard 
            key={role} 
            role={role} 
            total={pieData.datasets[0].data[pieData.labels.indexOf(role)]} 
            active={Math.round(pieData.datasets[0].data[pieData.labels.indexOf(role)] * 0.7)} // Example active calculation
            growth={Math.round(Math.random() * 100)} // Example growth calculation
          />
        ))}
      </div>
      <div className="chart-section">
        <div className="chart-container">
          <h2>User Categorization by Role</h2>
          <Pie data={pieData} />
        </div>
        <div className="chart-container">
          <h2>User Growth Over Time</h2>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
}

export default UserManagementSystem
