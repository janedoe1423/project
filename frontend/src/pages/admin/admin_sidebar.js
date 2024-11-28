import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import {
    FaHome, FaUser, FaLayerGroup, FaCopyright,
    FaUsers, FaBell, FaMoneyBill, FaLightbulb,
    FaChartBar, FaCog, FaUserShield
} from "react-icons/fa";
import "./admin_sidebar.css"; // We'll create this next

const AdminSidebar = () => {
    const [activeLink, setActiveLink] = useState('#dashboard');

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-container">
                <div className="sidebar-header">
                    <h4>Admin Dashboard</h4>
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
                        href="#startup-management"
                        className={`sidebar-link ${activeLink === '#startup-management' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#startup-management')}
                    >
                        <div className="icon-container">
                            <FaUsers />
                        </div>
                        <span>Startup Management</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#ipr-management"
                        className={`sidebar-link ${activeLink === '#ipr-management' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#ipr-management')}
                    >
                        <div className="icon-container">
                            <FaCopyright />
                        </div>
                        <span>IPR Management</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#funding-management"
                        className={`sidebar-link ${activeLink === '#funding-management' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#funding-management')}
                    >
                        <div className="icon-container">
                            <FaMoneyBill />
                        </div>
                        <span>Funding Management</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#scheme-management"
                        className={`sidebar-link ${activeLink === '#scheme-management' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#scheme-management')}
                    >
                        <div className="icon-container">
                            <FaLightbulb />
                        </div>
                        <span>Scheme Management</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#notifications"
                        className={`sidebar-link ${activeLink === '#notifications' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#notifications')}
                    >
                        <div className="icon-container">
                            <FaBell />
                        </div>
                        <span>Notifications</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#user-management"
                        className={`sidebar-link ${activeLink === '#user-management' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#user-management')}
                    >
                        <div className="icon-container">
                            <FaUserShield />
                        </div>
                        <span>User Management</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#settings"
                        className={`sidebar-link ${activeLink === '#settings' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#settings')}
                    >
                        <div className="icon-container">
                            <FaCog />
                        </div>
                        <span>Settings</span>
                    </Nav.Link>
                </Nav>

                <div className="sidebar-footer">
                    <small>© 2024 Admin Portal</small>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;