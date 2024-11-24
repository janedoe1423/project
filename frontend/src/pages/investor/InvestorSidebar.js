import React from "react";
import { Nav } from "react-bootstrap";
import {
    FaHome,
    FaUser,
    FaChartPie,
    FaHandshake,
    FaNetworkWired,
    FaChartBar,
    FaLightbulb
} from "react-icons/fa";
import "./investor_sidebar.css";

const InvestorSidebar = ({ currentHash }) => {
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-container">
                <div className="sidebar-header">
                    <h4>Investor Dashboard</h4>
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
                        href="#portfolio"
                        className={`sidebar-link ${currentHash === '#portfolio' ? 'active' : ''}`}
                    >
                        <div className="icon-container">
                            <FaChartPie />
                        </div>
                        <span>Portfolio</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#investments"
                        className={`sidebar-link ${currentHash === '#investments' ? 'active' : ''}`}
                    >
                        <div className="icon-container">
                            <FaHandshake />
                        </div>
                        <span>Investments</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#network"
                        className={`sidebar-link ${currentHash === '#network' ? 'active' : ''}`}
                    >
                        <div className="icon-container">
                            <FaNetworkWired />
                        </div>
                        <span>Network</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#reports"
                        className={`sidebar-link ${currentHash === '#reports' ? 'active' : ''}`}
                    >
                        <div className="icon-container">
                            <FaChartBar />
                        </div>
                        <span>Reports</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#schemes"
                        className={`sidebar-link ${currentHash === '#schemes' ? 'active' : ''}`}
                    >
                        <div className="icon-container">
                            <FaLightbulb />
                        </div>
                        <span>Schemes</span>
                    </Nav.Link>
                </Nav>

                <div className="sidebar-footer">
                    <small>© 2024 Investor Portal</small>
                </div>
            </div>
        </div>
    );
};

export default InvestorSidebar;
