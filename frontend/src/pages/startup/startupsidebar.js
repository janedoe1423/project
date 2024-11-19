import React from "react";
import { Nav } from "react-bootstrap";

const StartupSidebar = () => {
  return (
    <div className="d-flex flex-column bg-light p-3 vh-100" style={{ width: "250px" }}>
      <h4 className="text-center">Startup Dashboard</h4>
      <Nav className="flex-column">
        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#resource-allocation">Resource Allocation</Nav.Link>
        <Nav.Link href="#ipr-rights">IPR Rights</Nav.Link>
        <Nav.Link href="#schemes">Schemes</Nav.Link>
        <Nav.Link href="#reports">Reports</Nav.Link>
      </Nav>
    </div>
  );
};

export default StartupSidebar;
