import React from "react";
import { Nav } from "react-bootstrap";

const ResearcherSidebar = () => {
    return (
        <div className="d-flex flex-column bg-light p-3 vh-100" style={{ width: "250px" }}>
            <h4 className="text-center">Researcher Portal</h4>
            <Nav className="flex-column">
                <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#research-papers">Works</Nav.Link>
                <Nav.Link href="#ipr">IPR</Nav.Link>
                <Nav.Link href="#collaboration-requests">Collaboration Requests</Nav.Link>
                <Nav.Link href="#grants-funding">Grants & Funding</Nav.Link>
                <Nav.Link href="#insights">Insights</Nav.Link>
            </Nav>
        </div>
    );
};

export default ResearcherSidebar;
