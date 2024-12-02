import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import {
    FaHome, FaUser, FaChalkboardTeacher, FaHandshake, FaBook, FaChartBar
} from "react-icons/fa";
// import "./mentor_sidebar.css"; // Ensure you have this CSS file

const MentorSidebar = () => {
    const [activeLink, setActiveLink] = useState('#dashboard');

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-container">
                <div className="sidebar-header">
                    <h4>Mentor Dashboard</h4>
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
                        href="#mentorship-engagements"
                        className={`sidebar-link ${activeLink === '#mentorship-engagements' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#mentorship-engagements')}
                    >
                        <div className="icon-container">
                            <FaChalkboardTeacher />
                        </div>
                        <span>Mentorship Engagements</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#collaboration"
                        className={`sidebar-link ${activeLink === '#collaboration' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#collaboration')}
                    >
                        <div className="icon-container">
                            <FaHandshake />
                        </div>
                        <span>Collaboration</span>
                    </Nav.Link>

                    <Nav.Link
                        href="#educational-resources"
                        className={`sidebar-link ${activeLink === '#educational-resources' ? 'active' : ''}`}
                        onClick={() => setActiveLink('#educational-resources')}
                    >
                        <div className="icon-container">
                            <FaBook />
                        </div>
                        <span>Educational Resources</span>
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
                    <small>© 2024 Mentor Portal</small>
                </div>
            </div>
        </div>
    );
};

export default MentorSidebar;