import React from "react";
import "./gb_sidebar.css";

const GovernmentSidebar = () => {
    return (
        <div className="gb_sidebar-wrapper">
            <div className="gb_sidebar-container">
                <div className="gb_sidebar-header">
                    <h4>Government Portal</h4>
                </div>
                <nav className="gb_sidebar-nav">
                    <a className="gb_sidebar-link" href="#dashboard">Dashboard</a>
                    <a className="gb_sidebar-link" href="#policy">Policy Implementation</a>
                    <a className="gb_sidebar-link" href="#funding">Funding & Grants</a>
                    <a className="gb_sidebar-link" href="#data">Data Transparency</a>
                    <a className="gb_sidebar-link" href="#resources">Resource Support</a>
                    <a className="gb_sidebar-link" href="#collaboration">Collaboration</a>
                    <a className="gb_sidebar-link" href="#analytics">Analytics & Feedback</a>
                    <a className="gb_sidebar-link" href="#ipr">IPR Facilitation</a>
                    <a className="gb_sidebar-link" href="#events">Event Management</a>
                    <a className="gb_sidebar-link" href="#market">Market Trends</a>
                </nav>
                <div className="gb_sidebar-footer">
                    <small>© 2023 Government Portal</small>
                </div>
            </div>
        </div>
    );
};

export default GovernmentSidebar;