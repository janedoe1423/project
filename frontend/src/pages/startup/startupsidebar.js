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
        <div className="startup_sidebar_wrapper">
            <div className="startup_sidebar_container">
                <div className="startup_sidebar_header">
                    <h4>Startup Dashboard</h4>
                </div>

                <Nav className="startup_sidebar_nav">
                    <Nav.Link
                        href="#dashboard"
                        className={`startup_sidebar_link ${activeLink === '#dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#dashboard')}
                    >
                        <div className="startup_sidebar_icon-container">
                            <FaHome />
                        </div>
                        <span>Dashboard</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#profile"
                        className={`startup_sidebar_link ${activeLink === '#profile' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#profile')}
                    >
                        <div className="startup_sidebar_icon-container">
                            <FaUser />
                        </div>
                        <span>Profile</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#resource-allocation"
                        className={`startup_sidebar_link ${activeLink === '#resource-allocation' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#resource-allocation')}
                    >
                        <div className="startup_sidebar_icon-container">
                            <FaLayerGroup />
                        </div>
                        <span>Resource Allocation</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#ipr-rights"
                        className={`startup_sidebar_link ${activeLink === '#ipr-rights' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#ipr-rights')}
                    >
                        <div className="startup_sidebar_icon-container">
                            <FaCopyright />
                        </div>
                        <span>IPR Rights</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#collaboration-tools"
                        className={`startup_sidebar_link ${activeLink === '#collaboration-tools' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#collaboration-tools')}
                    >
                        <div className="startup_sidebar_icon-container">
                            <FaHandshake />
                        </div>
                        <span>Collaboration Tools</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#notify"
                        className={`startup_sidebar_link ${activeLink === '#notify' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#notify')}
                    >
                        <div className="startup_sidebar_icon-container">
                            <FaBell />
                        </div>
                        <span>Notifications</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#funding"
                        className={`startup_sidebar_link ${activeLink === '#funding' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#funding')}
                    >
                        <div className="startup_sidebar_icon-container">
                            <FaMoneyBill />
                        </div>
                        <span>Funding</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#schemes"
                        className={`startup_sidebar_link ${activeLink === '#schemes' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#schemes')}
                    >
                        <div className="startup_sidebar_icon-container">
                            <FaLightbulb />
                        </div>
                        <span>Schemes</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#reports"
                        className={`startup_sidebar_link ${activeLink === '#reports' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#reports')}
                    >
                        <div className="startup_sidebar_icon-container">
                            <FaChartBar />
                        </div>
                        <span>Reports</span>
                    </Nav.Link>
                </Nav>

                <div className="startup_sidebar_footer">
                    <small>© 2024 Startup Portal</small>
                </div>
            </div>
        </div>
    );
};

export default StartupSidebar;