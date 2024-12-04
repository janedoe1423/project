import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar, FaCrown } from 'react-icons/fa';
import './AchievementsPanel.css';

const AchievementsPanel = () => {
    const achievements = [
        {
            id: 1,
            title: "Top Mentor of the Month",
            description: "Highest-rated mentor for March 2024",
            icon: <FaCrown />,
            date: "March 2024",
            type: "featured"
        },
        {
            id: 2,
            title: "100 Sessions Milestone",
            description: "Successfully completed 100 mentoring sessions",
            icon: <FaTrophy />,
            date: "February 2024",
            type: "milestone"
        },
        {
            id: 3,
            title: "Excellence in Tech Mentoring",
            description: "Recognized for outstanding contributions in tech mentorship",
            icon: <FaMedal />,
            date: "January 2024",
            type: "award"
        },
        {
            id: 4,
            title: "5-Star Mentor",
            description: "Maintained 5-star rating for 3 consecutive months",
            icon: <FaStar />,
            date: "December 2023",
            type: "recognition"
        }
    ];

    return (
        <div className="mentor-achievements">
            <div className="achievements-header">
                <h3>
                    <FaTrophy />
                    Achievements
                </h3>
            </div>

            <div className="achievements-list">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={achievement.id}
                        className={`achievement-item ${achievement.type}`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="achievement-icon">
                            {achievement.icon}
                        </div>
                        <div className="achievement-content">
                            <h4>{achievement.title}</h4>
                            <p>{achievement.description}</p>
                            <span className="achievement-date">{achievement.date}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsPanel;