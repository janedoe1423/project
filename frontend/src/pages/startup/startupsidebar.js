import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import {
    FaHome, FaUser, FaLayerGroup, FaCopyright,
    FaHandshake, FaBell, FaMoneyBill, FaLightbulb,
    FaChartBar
} from "react-icons/fa";
import "./startup_sidebar.css";

const StartupSidebar = () => {
    const [activeLink, setActiveLink] = useState('#dashboard');

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-container">
                <div className="sidebar-header">
                    <h4>Startup Dashboard</h4>
                </div>

                <Nav className="sidebar-nav">
                    <Nav.Link
                        href="#dashboard"
                        className={`sidebar-link ${activeLink === '#dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#dashboard')}
                    >
                        <div className="icon-container">
                            <FaHome />
                        </div>
                        <span>Dashboard</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#profile"
                        className={`sidebar-link ${activeLink === '#profile' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#profile')}
                    >
                        <div className="icon-container">
                            <FaUser />
                        </div>
                        <span>Profile</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#resource-allocation"
                        className={`sidebar-link ${activeLink === '#resource-allocation' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#resource-allocation')}
                    >
                        <div className="icon-container">
                            <FaLayerGroup />
                        </div>
                        <span>Resource Allocation</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#ipr-rights"
                        className={`sidebar-link ${activeLink === '#ipr-rights' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#ipr-rights')}
                    >
                        <div className="icon-container">
                            <FaCopyright />
                        </div>
                        <span>IPR Rights</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#collaboration-tools"
                        className={`sidebar-link ${activeLink === '#collaboration-tools' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#collaboration-tools')}
                    >
                        <div className="icon-container">
                            <FaHandshake />
                        </div>
                        <span>Collaboration Tools</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#notify"
                        className={`sidebar-link ${activeLink === '#notify' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#notify')}
                    >
                        <div className="icon-container">
                            <FaBell />
                        </div>
                        <span>Notifications</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#funding"
                        className={`sidebar-link ${activeLink === '#funding' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#funding')}
                    >
                        <div className="icon-container">
                            <FaMoneyBill />
                        </div>
                        <span>Funding</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#schemes"
                        className={`sidebar-link ${activeLink === '#schemes' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#schemes')}
                    >
                        <div className="icon-container">
                            <FaLightbulb />
                        </div>
                        <span>Schemes</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#reports"
                        className={`sidebar-link ${activeLink === '#reports' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#reports')}
                    >
                        <div className="icon-container">
                            <FaChartBar />
                        </div>
                        <span>Reports</span>
                    </Nav.Link>
                </Nav>

                <div className="sidebar-footer">
                    <small>© 2024 Startup Portal</small>
                </div>
            </div>
        </div>
    );
};

export default StartupSidebar;