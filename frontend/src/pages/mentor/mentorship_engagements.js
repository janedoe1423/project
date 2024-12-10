// frontend/src/pages/mentor/mentorship_engagements.js
import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';
import { FaDownload } from 'react-icons/fa';
import './mentorship_engagements.css';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend,
    Filler
);

const MentorshipEngagements = () => {
    // Sample data states
    const [sentimentData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Positive',
            data: [65, 70, 68, 75, 72, 78],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
        }, {
            label: 'Neutral',
            data: [25, 20, 22, 18, 20, 15],
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
        }, {
            label: 'Negative',
            data: [10, 10, 10, 7, 8, 7],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
        }]
    });

    const [engagementData] = useState({
        labels: ['Sessions', 'Messages', 'File Shares', 'Feedback'],
        datasets: [{
            label: 'Engagement Metrics',
            data: [120, 450, 80, 95],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(153, 102, 255, 0.5)',
            ],
            borderWidth: 1
        }]
    });

    const [feedbackThemes] = useState({
        labels: ['Technical Guidance', 'Communication', 'Availability', 'Knowledge Sharing', 'Goal Setting'],
        datasets: [{
            label: 'Theme Sentiment Score',
            data: [4.5, 4.2, 3.8, 4.7, 4.3],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
        }]
    });

    const [effectivenessData] = useState({
        labels: ['Response Rate', 'Retention', 'Goal Achievement', 'Feedback Score', 'Engagement Index'],
        datasets: [{
            label: 'Effectiveness Metrics',
            data: [90, 85, 88, 92, 87],
            backgroundColor: 'rgba(153, 102, 255, 0.4)',
            borderColor: 'rgba(153, 102, 255, 1)',
            pointBackgroundColor: 'rgba(153, 102, 255, 1)',
            pointBorderColor: '#fff',
        }]
    });

    const renderChart = (data, type, title) => {
        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: title
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        switch(type) {
            case 'line':
                return <Line data={data} options={options} />;
            case 'bar':
                return <Bar data={data} options={options} />;
            case 'pie':
                return <Pie data={data} options={options} />;
            case 'radar':
                return <Radar data={data} options={options} />;
            default:
                return <Bar data={data} options={options} />;
        }
    };

    return (
        <div className="mentorship-engagements-container">
            <h1>Mentorship Engagement Analytics</h1>

            <div className="metrics-grid">
                {/* Sentiment Metrics */}
                <section className="metric-section">
                    <h2>Sentiment Metrics</h2>
                    <div className="chart-container">
                        {renderChart(sentimentData, 'line', 'Sentiment Trends Over Time')}
                    </div>
                    <div className="metric-summary">
                        <h3>Key Insights</h3>
                        <ul>
                            <li>78% positive sentiment in recent month</li>
                            <li>15% improvement in positive feedback</li>
                            <li>Decreased negative feedback trend</li>
                        </ul>
                    </div>
                </section>

                {/* Engagement Metrics */}
                <section className="metric-section">
                    <h2>Engagement Metrics</h2>
                    <div className="chart-container">
                        {renderChart(engagementData, 'bar', 'Engagement Distribution')}
                    </div>
                    <div className="metric-summary">
                        <h3>Key Insights</h3>
                        <ul>
                            <li>120 sessions conducted</li>
                            <li>450 messages exchanged</li>
                            <li>95% feedback submission rate</li>
                        </ul>
                    </div>
                </section>

                {/* Feedback Metrics */}
                <section className="metric-section">
                    <h2>Feedback Theme Analysis</h2>
                    <div className="chart-container">
                        {renderChart(feedbackThemes, 'bar', 'Feedback Themes Sentiment')}
                    </div>
                    <div className="metric-summary">
                        <h3>Top Themes</h3>
                        <ul>
                            <li>Knowledge Sharing: 4.7/5</li>
                            <li>Technical Guidance: 4.5/5</li>
                            <li>Goal Setting: 4.3/5</li>
                        </ul>
                    </div>
                </section>

                {/* Effectiveness Metrics */}
                <section className="metric-section">
                    <h2>Mentor Effectiveness</h2>
                    <div className="chart-container">
                        {renderChart(effectivenessData, 'radar', 'Effectiveness Metrics')}
                    </div>
                    <div className="metric-summary">
                        <h3>Performance Highlights</h3>
                        <ul>
                            <li>92% positive feedback score</li>
                            <li>90% response rate</li>
                            <li>88% goal achievement rate</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MentorshipEngagements;