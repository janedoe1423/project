import React from "react";
import { Nav } from "react-bootstrap";
import {
    FaHome, FaUser, FaBook, FaCopyright,
    FaHandshake, FaMoneyBill, FaLightbulb
} from "react-icons/fa";
import "./researcher_sidebar.css";

const ResearcherSidebar = ({ currentHash }) => {
    return (
        <div className="res_bar-sidebar-wrapper">
            <div className="res_bar-sidebar-container">
                <div className="res_bar-sidebar-header">
                    <h4>Researcher Portal</h4>
                </div>

                <Nav className="res_bar-sidebar-nav">
                    <Nav.Link
                        href="#dashboard"
                        className={`res_bar-sidebar-link ${currentHash === '#dashboard' ? 'active' : ''}`}
                    >
                        <div className="res_bar-icon-container">
                            <FaHome />
                        </div>
                        <span>Dashboard</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#profile"
                        className={`res_bar-sidebar-link ${currentHash === '#profile' ? 'active' : ''}`}
                    >
                        <div className="res_bar-icon-container">
                            <FaUser />
                        </div>
                        <span>Profile</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#research-papers"
                        className={`res_bar-sidebar-link ${currentHash === '#research-papers' ? 'active' : ''}`}
                    >
                        <div className="res_bar-icon-container">
                            <FaBook />
                        </div>
                        <span>Works</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#ipr"
                        className={`res_bar-sidebar-link ${currentHash === '#ipr' ? 'active' : ''}`}
                    >
                        <div className="res_bar-icon-container">
                            <FaCopyright />
                        </div>
                        <span>IPR</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#collaboration-requests"
                        className={`res_bar-sidebar-link ${currentHash === '#collaboration-requests' ? 'active' : ''}`}
                    >
                        <div className="res_bar-icon-container">
                            <FaHandshake />
                        </div>
                        <span>Collaboration</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#grants-funding"
                        className={`res_bar-sidebar-link ${currentHash === '#grants-funding' ? 'active' : ''}`}
                    >
                        <div className="res_bar-icon-container">
                            <FaMoneyBill />
                        </div>
                        <span>Grants & Funding</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#insights"
                        className={`res_bar-sidebar-link ${currentHash === '#insights' ? 'active' : ''}`}
                    >
                        <div className="res_bar-icon-container">
                            <FaLightbulb />
                        </div>
                        <span>Insights</span>
                    </Nav.Link>
                </Nav>

                <div className="res_bar-sidebar-footer">
                    <small>© 2024 Research Portal</small>
                </div>
            </div>
        </div>
    );
};

export default ResearcherSidebar;