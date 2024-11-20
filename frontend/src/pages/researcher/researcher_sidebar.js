import React from "react";
import { Nav } from "react-bootstrap";

const ResearcherSidebar = () => {
    return (
        <div className="d-flex flex-column bg-light p-3 vh-100" style={{ width: "250px" }}>
            <h4 className="text-center">Researcher Dashboard</h4>
            <Nav className="flex-column">
                <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#works">Profile</Nav.Link>
            </Nav>
        </div>
    );
};

export default ResearcherSidebar;
