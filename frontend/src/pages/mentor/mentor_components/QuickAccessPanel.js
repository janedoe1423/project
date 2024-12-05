import React from 'react';
import { FaBook, FaHandshake, FaHistory } from 'react-icons/fa';
import './QuickAccessPanel.css';

const QuickAccessPanel = () => {
    const links = [
        { icon: <FaBook />, label: "Resources", url: "#" },
        { icon: <FaHandshake />, label: "Collaboration", url: "#" },
        { icon: <FaHistory />, label: "Mentorship History", url: "#" }
    ];

    return (
        <div className="mentor-quick-access">
            <div className="quick-access-header">
                <h3>Quick Access</h3>
            </div>

            <div className="quick-access-links">
                {links.map((link, index) => (
                    <a key={index} href={link.url} className="quick-access-link">
                        {link.icon}
                        <span>{link.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default QuickAccessPanel;