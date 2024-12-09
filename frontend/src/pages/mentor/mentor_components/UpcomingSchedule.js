import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaVideo, FaUsers } from 'react-icons/fa';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
    const scheduleItems = [
        {
            id: 1,
            title: "Product Strategy Review",
            mentee: "TechStart Inc.",
            date: "2024-03-15",
            time: "10:00 AM",
            duration: "45 min",
            type: "video",
            status: "upcoming"
        },
        {
            id: 2,
            title: "Technical Architecture Discussion",
            mentee: "InnovateLab",
            date: "2024-03-16",
            time: "2:00 PM",
            duration: "60 min",
            type: "video",
            status: "confirmed"
        },
        {
            id: 3,
            title: "Funding Strategy Session",
            mentee: "DataVision AI",
            date: "2024-03-17",
            time: "11:30 AM",
            duration: "30 min",
            type: "group",
            status: "pending"
        }
    ];

    return (
        <div className="mentor-schedule">
            <div className="schedule-header">
                <h3>
                    <FaCalendarAlt />
                    Upcoming Schedule
                </h3>
                <button className="schedule-view-all">View Calendar</button>
            </div>

            <div className="schedule-list">
                {scheduleItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`schedule-item ${item.status}`}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="schedule-item-time">
                            <FaClock />
                            <span>{item.time}</span>
                            <small>{item.duration}</small>
                        </div>
                        
                        <div className="schedule-item-content">
                            <h4>{item.title}</h4>
                            <p className="schedule-item-mentee">
                                {item.type === 'video' ? <FaVideo /> : <FaUsers />}
                                {item.mentee}
                            </p>
                            <div className="schedule-item-date">
                                {new Date(item.date).toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </div>
                        </div>

                        <div className="schedule-item-actions">
                            <button className="btn-join">Join</button>
                            <button className="btn-reschedule">Reschedule</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingSchedule;