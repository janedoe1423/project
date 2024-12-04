import React from 'react';
import { Bar } from 'react-chartjs-2';
import { FaChartBar } from 'react-icons/fa';
import './EngagementMetrics.css';

const EngagementMetrics = () => {
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Session Count',
                data: [12, 19, 15, 25, 22, 30],
                backgroundColor: 'rgba(142, 68, 173, 0.6)',
                borderColor: 'rgba(142, 68, 173, 1)',
                borderWidth: 1
            },
            {
                label: 'Active Mentees',
                data: [8, 12, 10, 15, 18, 20],
                backgroundColor: 'rgba(155, 89, 182, 0.6)',
                borderColor: 'rgba(155, 89, 182, 1)',
                borderWidth: 1
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'rgba(255, 255, 255, 0.8)'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.8)'
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.8)'
                }
            }
        }
    };

    const metrics = [
        { label: 'Total Sessions', value: '123', change: '+15%' },
        { label: 'Avg. Session Duration', value: '45m', change: '+5%' },
        { label: 'Engagement Rate', value: '92%', change: '+8%' }
    ];

    return (
        <div className="mentor-engagement-metrics">
            <div className="metrics-header">
                <h3>
                    <FaChartBar />
                    Engagement Metrics
                </h3>
            </div>
            
            <div className="metrics-summary">
                {metrics.map((metric, index) => (
                    <div key={index} className="metric-card">
                        <div className="metric-value">{metric.value}</div>
                        <div className="metric-label">{metric.label}</div>
                        <div className={`metric-change ${
                            metric.change.startsWith('+') ? 'positive' : 'negative'
                        }`}>
                            {metric.change}
                        </div>
                    </div>
                ))}
            </div>

            <div className="metrics-chart">
                <Bar data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default EngagementMetrics;