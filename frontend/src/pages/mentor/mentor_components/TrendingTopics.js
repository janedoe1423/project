import React from 'react';
import { FaRocket } from 'react-icons/fa';
import './TrendingTopics.css';

const TrendingTopics = () => {
    const topics = [
        "AI in Healthcare",
        "Blockchain for Supply Chain",
        "Remote Work Technologies",
        "Sustainable Energy Solutions"
    ];

    return (
        <div className="mentor-trending-topics">
            <div className="topics-header">
                <h3>
                    <FaRocket />
                    Trending Topics
                </h3>
            </div>

            <ul className="topics-list">
                {topics.map((topic, index) => (
                    <li key={index} className="topic-item">
                        {topic}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrendingTopics;