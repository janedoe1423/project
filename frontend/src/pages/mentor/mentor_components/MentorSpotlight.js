import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';
import './MentorSpotlight.css';

const MentorSpotlight = () => {
    const spotlightItems = [
        {
            id: 1,
            title: "Guided TechStart Inc. to Series A Funding",
            description: "Provided strategic advice and mentorship that helped secure $5M in funding.",
            date: "March 2024"
        },
        {
            id: 2,
            title: "Mentored InnovateLab's Product Launch",
            description: "Assisted in the successful launch of their new AI-driven product.",
            date: "February 2024"
        },
        {
            id: 3,
            title: "Recognized for Excellence in Mentoring",
            description: "Awarded for outstanding contributions to the startup ecosystem.",
            date: "January 2024"
        }
    ];

    return (
        <div className="mentor-spotlight">
            <div className="spotlight-header">
                <h3>
                    <FaLightbulb />
                    Mentor Spotlight
                </h3>
            </div>

            <div className="spotlight-list">
                {spotlightItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="spotlight-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <span className="spotlight-date">{item.date}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MentorSpotlight;