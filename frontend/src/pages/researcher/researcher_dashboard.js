import React, { useState, useEffect } from 'react';
import { 
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts';
import { 
    FaTasks, FaBook, FaComments, FaFlask, FaBell, 
    FaClock, FaChartLine, FaChalkboardTeacher 
} from 'react-icons/fa';
import './researcher_dashboard.css';

const ResearcherDashboard = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    // Chart Data
    const impactData = [
        { name: 'Jan', citations: 65, downloads: 45 },
        { name: 'Feb', citations: 75, downloads: 55 },
        { name: 'Mar', citations: 85, downloads: 65 },
        { name: 'Apr', citations: 95, downloads: 75 },
    ];

    const collaborationData = [
        { name: 'Synergize', value: 400 },
        { name: 'Cocreate', value: 300 },
        { name: 'Thinktank', value: 300 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    // Tasks Data
    const tasks = [
        {
            id: 1,
            title: "Complete Research Paper Draft",
            deadline: "2024-03-20",
            priority: "high",
        },
        {
            id: 2,
            title: "Review Conference Submissions",
            deadline: "2024-03-15",
            priority: "medium",
        },
    ];

    // Publications Data
    const publications = [
        {
            id: 1,
            title: "Machine Learning in Research",
            journal: "Science Journal",
            citations: 45,
            date: "2024-01",
        },
        {
            id: 2,
            title: "AI Applications in Academia",
            journal: "Tech Review",
            citations: 32,
            date: "2023-12",
        }
    ];

    // Reviews Data
    const reviews = [
        {
            id: 1,
            paperTitle: "Neural Networks Study",
            dueDate: "2024-03-30",
            status: "pending"
        },
        {
            id: 2,
            paperTitle: "Data Analysis Methods",
            dueDate: "2024-04-15",
            status: "in_progress"
        }
    ];

    // Resources Data
    const resources = [
        {
            id: 1,
            name: "Lab Equipment A",
            usage: 75,
        },
        {
            id: 2,
            name: "Research Budget",
            usage: 60,
        },
        {
            id: 3,
            name: "Computing Resources",
            usage: 85,
        }
    ];

    // Notifications Data
    const notifications = [
        {
            id: 1,
            message: "Research paper deadline approaching",
            type: "deadline",
            timestamp: new Date()
        },
        {
            id: 2,
            message: "New collaboration request",
            type: "alert",
            timestamp: new Date()
        }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showNotifications && !event.target.closest('.notification-icon') && !event.target.closest('.notification-dropdown')) {
                setShowNotifications(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showNotifications]);

    return (
        <div className="dashboard-container">
            <div className="top-bar">
                <div className="dashboard-header">
                    <div className="header-content">
                        <div className="dashboard-title">
                            <FaChalkboardTeacher />
                            Research Dashboard
                        </div>
                    </div>
                </div>
                
                <div className="notification-wrapper">
                    <div className="notification-icon" onClick={(e) => {
                        e.stopPropagation();
                        setShowNotifications(!showNotifications);
                    }}>
                        <FaBell size={24} />
                        {notifications.length > 0 && (
                            <span className="notification-badge">
                                {notifications.length}
                            </span>
                        )}
                    </div>
                    
                    {showNotifications && (
                        <div className="notification-dropdown">
                            <div className="notification-header">
                                <h3>Notifications</h3>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowNotifications(false);
                                    }} 
                                    className="close-button"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="notification-list">
                                {notifications.map(notification => (
                                    <div key={notification.id} className="notification-item">
                                        <FaBell className="notification-item-icon" />
                                        <div className="notification-content">
                                            <p>{notification.message}</p>
                                            <small>{notification.timestamp.toLocaleString()}</small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Research Impact Chart */}
                <div className="box impact-chart-box">
                    <div className="box-header">
                        <h2 className="box-title">
                            <FaChartLine />
                            Research Impact
                        </h2>
                    </div>
                    <div className="box-content">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={impactData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="citations" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="downloads" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Collaboration Network */}
                <div className="box collaboration-chart-box">
                    <div className="box-header">
                        <h2 className="box-title">
                            <FaChartLine />
                            Collaboration Network
                        </h2>
                    </div>
                    <div className="box-content">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={collaborationData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {collaborationData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Tasks */}
                <div className="box tasks-box">
                    <div className="box-header">
                        <h2 className="box-title">
                            <FaTasks />
                            Tasks
                        </h2>
                    </div>
                    <div className="box-content">
                        {tasks.map(task => (
                            <div key={task.id} className={`task-item priority-${task.priority}`}>
                                <h4>{task.title}</h4>
                                <p className="task-deadline">
                                    <FaClock /> {task.deadline}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Publications */}
                <div className="box publications-box">
                    <div className="box-header">
                        <h2 className="box-title">
                            <FaBook />
                            Publications
                        </h2>
                    </div>
                    <div className="box-content">
                        {publications.map(pub => (
                            <div key={pub.id} className="publication-item">
                                <h4>{pub.title}</h4>
                                <p>{pub.journal} - {pub.date}</p>
                                <div className="citation-badge">
                                    {pub.citations} citations
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reviews */}
                <div className="box reviews-box">
                    <div className="box-header">
                        <h2 className="box-title">
                            <FaComments />
                            Reviews
                        </h2>
                    </div>
                    <div className="box-content">
                        {reviews.map(review => (
                            <div key={review.id} className="review-item">
                                <h4>{review.paperTitle}</h4>
                                <p>Due: {review.dueDate}</p>
                                <span className={`badge badge-${review.status}`}>
                                    {review.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Resources */}
                <div className="box resources-box">
                    <div className="box-header">
                        <h2 className="box-title">
                            <FaFlask />
                            Resources
                        </h2>
                    </div>
                    <div className="box-content">
                        {resources.map(resource => (
                            <div key={resource.id} className="resource-item">
                                <h4>{resource.name}</h4>
                                <div className="usage-bar">
                                    <div 
                                        className="usage-fill" 
                                        style={{ width: `${resource.usage}%` }}
                                    />
                                </div>
                                <p className="usage-percentage">{resource.usage}%</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearcherDashboard;