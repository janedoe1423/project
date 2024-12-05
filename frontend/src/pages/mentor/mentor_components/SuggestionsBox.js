import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import './SuggestionsBox.css';

const SuggestionsBox = () => {
    const suggestions = [
        "Consider exploring new AI tools for enhanced productivity.",
        "Join the upcoming webinar on startup growth strategies.",
        "Review the latest trends in blockchain technology."
    ];

    return (
        <div className="mentor-suggestions-box">
            <div className="suggestions-header">
                <h3>
                    <FaLightbulb />
                    Suggestions Box
                </h3>
            </div>

            <ul className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                    <li key={index} className="suggestion-item">
                        {suggestion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SuggestionsBox;