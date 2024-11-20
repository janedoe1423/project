import React from "react";
import { Nav } from "react-bootstrap";

const IPRSidebar = () => {
    return (
        <div className="d-flex flex-column bg-light p-3 vh-100" style={{ width: "250px" }}>
            <h4 className="text-center">IPR Dashboard</h4>
            <Nav className="flex-column">
                <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#reports">Reports</Nav.Link>
            </Nav>
        </div>
    );
};

export default IPRSidebar;
