import React from "react";
import { Nav } from "react-bootstrap";
import "./startup_sidebar.css";

const StartupSidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <h4>Startup Dashboard</h4>
            </div>
            <Nav className="sidebar-nav">
                <Nav.Link className="sidebar-link" href="#dashboard">
                    <div className="icon-container">
                        {/* Add icon here if desired */}
                    </div>
                    <span>Dashboard</span>
                </Nav.Link>
                <Nav.Link className="sidebar-link" href="#profile">
                    <div className="icon-container"></div>
                    <span>Profile</span>
                </Nav.Link>
                <Nav.Link className="sidebar-link" href="#resource-allocation">
                    <div className="icon-container"></div>
                    <span>Resource Allocation</span>
                </Nav.Link>
                <Nav.Link className="sidebar-link" href="#ipr-rights">
                    <div className="icon-container"></div>
                    <span>IPR Rights</span>
                </Nav.Link>
                <Nav.Link className="sidebar-link" href="#collaboration-tools">
                    <div className="icon-container"></div>
                    <span>Collaboration Tools</span>
                </Nav.Link>
                <Nav.Link className="sidebar-link" href="#notify">
                    <div className="icon-container"></div>
                    <span>Notifications</span>
                </Nav.Link>
                <Nav.Link className="sidebar-link" href="#funding">
                    <div className="icon-container"></div>
                    <span>Funding</span>
                </Nav.Link>
                <Nav.Link className="sidebar-link" href="#schemes">
                    <div className="icon-container"></div>
                    <span>Schemes</span>
                </Nav.Link>
                <Nav.Link className="sidebar-link" href="#reports">
                    <div className="icon-container"></div>
                    <span>Reports</span>
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default StartupSidebar;