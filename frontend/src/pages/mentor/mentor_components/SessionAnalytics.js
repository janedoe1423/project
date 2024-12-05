import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import './SessionAnalytics.css';

const SessionAnalytics = () => {
    const analyticsData = [
        { day: "Monday", sessions: 5 },
        { day: "Tuesday", sessions: 8 },
        { day: "Wednesday", sessions: 6 },
        { day: "Thursday", sessions: 7 },
        { day: "Friday", sessions: 4 }
    ];

    return (
        <div className="mentor-session-analytics">
            <div className="analytics-header">
                <h3>
                    <FaChartLine />
                    Session Analytics
                </h3>
            </div>

            <div className="analytics-chart">
                {analyticsData.map((data, index) => (
                    <div key={index} className="analytics-bar">
                        <div className="bar" style={{ height: `${data.sessions * 10}px` }}></div>
                        <span className="day-label">{data.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SessionAnalytics;