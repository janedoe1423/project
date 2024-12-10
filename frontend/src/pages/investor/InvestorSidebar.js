import React, { useState } from "react";
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
    const [activeLink, setActiveLink] = useState(currentHash);

    const handleClick = (hash) => {
        setActiveLink(hash);
    };

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-container">
                <div className="sidebar-header">
                    <h4>Investor Dashboard</h4>
                </div>

                <Nav className="sidebar-nav">
                    <Nav.Link
                        href="#dashboard"
                        className={`sidebar-link ${activeLink === '#dashboard' ? 'active' : ''}`}
                        onClick={() => handleClick('#dashboard')}
                    >
                        <div className="icon-container">
                            <FaHome />
                        </div>
                        <span>Dashboard</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#profile"
                        className={`sidebar-link ${activeLink === '#profile' ? 'active' : ''}`}
                        onClick={() => handleClick('#profile')}
                    >
                        <div className="icon-container">
                            <FaUser />
                        </div>
                        <span>Profile</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#portfolio"
                        className={`sidebar-link ${activeLink === '#portfolio' ? 'active' : ''}`}
                        onClick={() => handleClick('#portfolio')}
                    >
                        <div className="icon-container">
                            <FaChartPie />
                        </div>
                        <span>Portfolio</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#investments"
                        className={`sidebar-link ${activeLink === '#investments' ? 'active' : ''}`}
                        onClick={() => handleClick('#investments')}
                    >
                        <div className="icon-container">
                            <FaHandshake />
                        </div>
                        <span>Investments</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#network"
                        className={`sidebar-link ${activeLink === '#network' ? 'active' : ''}`}
                        onClick={() => handleClick('#network')}
                    >
                        <div className="icon-container">
                            <FaNetworkWired />
                        </div>
                        <span>Network</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#reports"
                        className={`sidebar-link ${activeLink === '#reports' ? 'active' : ''}`}
                        onClick={() => handleClick('#reports')}
                    >
                        <div className="icon-container">
                            <FaChartBar />
                        </div>
                        <span>Reports</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#schemes"
                        className={`sidebar-link ${activeLink === '#schemes' ? 'active' : ''}`}
                        onClick={() => handleClick('#schemes')}
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
