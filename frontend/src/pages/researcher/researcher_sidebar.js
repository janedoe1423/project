import React from "react";
import { Nav } from "react-bootstrap";
import {
    FaHome, FaUser, FaBook, FaCopyright,
    FaHandshake, FaMoneyBill, FaLightbulb
} from "react-icons/fa";
import "./researcher_sidebar.css";

const ResearcherSidebar = ({ currentHash }) => {
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-container">
                <div className="sidebar-header">
                    <h4>Researcher Portal</h4>
                </div>

                <Nav className="sidebar-nav">
                    <Nav.Link
                        href="#dashboard"
                        className={`sidebar-link ${currentHash === '#dashboard' ? 'active' : ''}`}
                    >
                        <div className="icon-container">
                            <FaHome />
                        </div>
                        <span>Dashboard</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#profile"
                        className={`sidebar-link ${currentHash === '#profile' ? 'active' : ''}`}
                    >
                        <div className="icon-container">
                            <FaUser />
                        </div>
                        <span>Profile</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#research-papers"
                        className={`sidebar-link ${currentHash === '#research-papers' ? 'active' : ''}`}
                    >
                        <div className="icon-container">
                            <FaBook />
                        </div>
                        <span>Works</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#ipr"
                        className={`sidebar-link ${currentHash === '#ipr' ? 'active' : ''}`}
                    >
                        <div className="icon-container">
                            <FaCopyright />
                        </div>
                        <span>IPR</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#collaboration-requests"
                        className={`sidebar-link ${currentHash === '#collaboration-requests' ? 'active' : ''}`}
                    >
                        <div className="icon-container">
                            <FaHandshake />
                        </div>
                        <span>Collaboration</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#grants-funding"
                        className={`sidebar-link ${currentHash === '#grants-funding' ? 'active' : ''}`}
                    >
                        <div className="icon-container">
                            <FaMoneyBill />
                        </div>
                        <span>Grants & Funding</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#insights"
                        className={`sidebar-link ${currentHash === '#insights' ? 'active' : ''}`}
                    >
                        <div className="icon-container">
                            <FaLightbulb />
                        </div>
                        <span>Insights</span>
                    </Nav.Link>
                </Nav>

                <div className="sidebar-footer">
                    <small>© 2024 Research Portal</small>
                </div>
            </div>
        </div>
    );
};

export default ResearcherSidebar;