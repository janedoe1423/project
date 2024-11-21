import React, { useState } from "react";
import { Table, Tabs, Tab, Badge, Form, Button, InputGroup } from "react-bootstrap";

const StartupIPRRights = () => {
  // Add search states
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("patents");
  
  // Sample data - replace with actual API data
  const [iprData] = useState({
    patents: [
      { 
        id: 1, 
        title: "AI-Powered Image Recognition System", 
        applicationNo: "PAT2023/001", 
        status: "Granted", 
        filingDate: "2023-01-15" 
      },
      { 
        id: 2, 
        title: "Blockchain-Based Security Protocol", 
        applicationNo: "PAT2023/002", 
        status: "Pending", 
        filingDate: "2023-02-20" 
      },
      { 
        id: 3, 
        title: "Smart IoT Device Management System", 
        applicationNo: "PAT2023/003", 
        status: "Under Review", 
        filingDate: "2023-03-10" 
      },
      { 
        id: 4, 
        title: "Renewable Energy Storage Solution", 
        applicationNo: "PAT2023/004", 
        status: "Granted", 
        filingDate: "2023-04-05" 
      },
      { 
        id: 5, 
        title: "Quantum Computing Algorithm", 
        applicationNo: "PAT2023/005", 
        status: "Pending", 
        filingDate: "2023-05-12" 
      },
      { 
        id: 6, 
        title: "Advanced Machine Learning Framework", 
        applicationNo: "PAT2023/006", 
        status: "Granted", 
        filingDate: "2023-06-18" 
      },
      { 
        id: 7, 
        title: "Autonomous Vehicle Navigation System", 
        applicationNo: "PAT2023/007", 
        status: "Under Review", 
        filingDate: "2023-07-22" 
      },
      { 
        id: 8, 
        title: "Biomedical Data Processing Method", 
        applicationNo: "PAT2023/008", 
        status: "Pending", 
        filingDate: "2023-08-30" 
      },
      { 
        id: 9, 
        title: "Cloud Computing Resource Optimizer", 
        applicationNo: "PAT2023/009", 
        status: "Granted", 
        filingDate: "2023-09-14" 
      },
      { 
        id: 10, 
        title: "5G Network Enhancement Protocol", 
        applicationNo: "PAT2023/010", 
        status: "Under Review", 
        filingDate: "2023-10-05" 
      }
    ],
    trademarks: [
      { 
        id: 1, 
        title: "TechFlow", 
        applicationNo: "TM2023/001", 
        status: "Granted", 
        filingDate: "2023-01-10" 
      },
      { 
        id: 2, 
        title: "InnovatePro", 
        applicationNo: "TM2023/002", 
        status: "Under Review", 
        filingDate: "2023-02-15" 
      },
      { 
        id: 3, 
        title: "SmartSync", 
        applicationNo: "TM2023/003", 
        status: "Pending", 
        filingDate: "2023-03-20" 
      },
      { 
        id: 4, 
        title: "DataGuard", 
        applicationNo: "TM2023/004", 
        status: "Granted", 
        filingDate: "2023-04-25" 
      },
      { 
        id: 5, 
        title: "CloudMaster", 
        applicationNo: "TM2023/005", 
        status: "Under Review", 
        filingDate: "2023-05-30" 
      },
      { 
        id: 6, 
        title: "AIConnect", 
        applicationNo: "TM2023/006", 
        status: "Granted", 
        filingDate: "2023-06-05" 
      },
      { 
        id: 7, 
        title: "SecureChain", 
        applicationNo: "TM2023/007", 
        status: "Pending", 
        filingDate: "2023-07-10" 
      },
      { 
        id: 8, 
        title: "EcoTech", 
        applicationNo: "TM2023/008", 
        status: "Granted", 
        filingDate: "2023-08-15" 
      },
      { 
        id: 9, 
        title: "QuantumLeap", 
        applicationNo: "TM2023/009", 
        status: "Under Review", 
        filingDate: "2023-09-20" 
      },
      { 
        id: 10, 
        title: "BioInnovate", 
        applicationNo: "TM2023/010", 
        status: "Pending", 
        filingDate: "2023-10-25" 
      }
    ],
    copyrights: [
      { id: 1, title: "Copyright 1", registrationNo: "CR789", status: "Registered", filingDate: "2023-03-25" },
    ],
  });

  // Add search filter function
  const getFilteredData = (data) => {
    return data.filter((item) => {
      const searchTerm = searchQuery.toLowerCase();
      const applicationNo = (item.applicationNo || item.registrationNo || "").toLowerCase();
      const title = item.title.toLowerCase();
      return applicationNo.includes(searchTerm) || title.includes(searchTerm);
    });
  };

  // Add view handler
  const handleView = (item) => {
    console.log("Viewing details for:", item);
    // Implement your view logic here
  };

  // Add search bar component
  const SearchBar = () => (
    <div className="mb-4">
      <InputGroup>
        <Form.Control
          placeholder={`Search ${activeTab} by title or number...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <Button 
            variant="outline-secondary" 
            onClick={() => setSearchQuery("")}
          >
            Clear
          </Button>
        )}
      </InputGroup>
    </div>
  );

  const renderStatusBadge = (status) => {
    const badgeVariant = status === "Granted" || status === "Registered" 
      ? "success" 
      : status === "Pending" || status === "Under Review" 
        ? "warning" 
        : "secondary";
    return <Badge bg={badgeVariant}>{status}</Badge>;
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">IPR Management Dashboard</h2>
      
      <Tabs 
        defaultActiveKey="patents" 
        className="mb-4"
        onSelect={(k) => setActiveTab(k)}
      >
        <Tab eventKey="patents" title="Patents">
          <SearchBar />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Application No.</th>
                <th>Filing Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredData(iprData.patents).map((patent) => (
                <tr key={patent.id}>
                  <td>{patent.title}</td>
                  <td>{patent.applicationNo}</td>
                  <td>{patent.filingDate}</td>
                  <td>{renderStatusBadge(patent.status)}</td>
                  <td>
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => handleView(patent)}
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="trademarks" title="Trademarks">
          <SearchBar />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Application No.</th>
                <th>Filing Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredData(iprData.trademarks).map((trademark) => (
                <tr key={trademark.id}>
                  <td>{trademark.title}</td>
                  <td>{trademark.applicationNo}</td>
                  <td>{trademark.filingDate}</td>
                  <td>{renderStatusBadge(trademark.status)}</td>
                  <td>
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => handleView(trademark)}
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="copyrights" title="Copyrights">
          <SearchBar />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Registration No.</th>
                <th>Filing Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredData(iprData.copyrights).map((copyright) => (
                <tr key={copyright.id}>
                  <td>{copyright.title}</td>
                  <td>{copyright.registrationNo}</td>
                  <td>{copyright.filingDate}</td>
                  <td>{renderStatusBadge(copyright.status)}</td>
                  <td>
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => handleView(copyright)}
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </div>
  );
};

export default StartupIPRRights;
