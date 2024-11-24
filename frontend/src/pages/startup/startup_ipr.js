import React, { useState } from "react";
import { Table, Form, Button, InputGroup, Card, Row, Col, Modal } from "react-bootstrap";
import { FaSearch, FaPlus, FaEye, FaFilter } from "react-icons/fa";
import "./startup_ipr.css";

const StartupIPRRights = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [iprType, setIprType] = useState("patent");

  // Combined IPR data
  const [iprData] = useState([
    { 
      id: 1, 
      title: "AI-Powered Image Recognition System", 
      applicationNo: "PAT2023/001", 
      status: "Granted", 
      filingDate: "2023-01-15",
      type: "patent",
      description: "Advanced AI system for real-time image recognition and processing"
    },
    { 
      id: 2, 
      title: "AI-Powered Image Recognition System", 
      applicationNo: "PAT2023/001", 
      status: "Pending", 
      filingDate: "2023-01-15",
      type: "patent",
      description: "Advanced AI system for real-time image recognition and processing"
    }
  ]);

  const filteredData = iprData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.applicationNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const renderStatusBadge = (status) => {
    const statusClasses = {
      "Granted": "status-badge granted",
      "Pending": "status-badge pending",
      "Under Review": "status-badge review"
    };
    return <span className={statusClasses[status] || "status-badge"}>{status}</span>;
  };

  const IPRApplicationModal = () => (
    <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Apply for New IPR</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>IPR Type</Form.Label>
            <Form.Select value={iprType} onChange={(e) => setIprType(e.target.value)}>
              <option value="patent">Patent</option>
              <option value="trademark">Trademark</option>
              <option value="copyright">Copyright</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter IPR title" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter detailed description" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Supporting Documents</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        <Button variant="primary">Submit Application</Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <div className="ipr-container">
      <Card className="ipr-header-card">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>IPR Management</h2>
              <p className="text-muted">Manage your intellectual property rights</p>
            </Col>
            <Col md={6} className="text-end">
              <Button 
                variant="primary" 
                className="apply-ipr-btn"
                onClick={() => setShowModal(true)}
              >
                <FaPlus /> Apply for New IPR
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Body>
          <Row className="mb-4">
            <Col md={8}>
              <InputGroup className="search-bar">
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search by title or application number..."
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
            </Col>
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text>
                  <FaFilter />
                </InputGroup.Text>
                <Form.Select 
                  value={filterStatus} 
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="Granted">Granted</option>
                  <option value="Pending">Pending</option>
                  <option value="Under Review">Under Review</option>
                </Form.Select>
              </InputGroup>
            </Col>
          </Row>

          <div className="ipr-table-container">
            <Table hover className="ipr-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Application No.</th>
                  <th>Type</th>
                  <th>Filing Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="ipr-table-row">
                    <td>{item.title}</td>
                    <td>{item.applicationNo}</td>
                    <td className="text-capitalize">{item.type}</td>
                    <td>{item.filingDate}</td>
                    <td>{renderStatusBadge(item.status)}</td>
                    <td>
                      <Button 
                        variant="outline-primary" 
                        size="sm"
                        className="view-details-btn"
                      >
                        <FaEye /> View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>

      <IPRApplicationModal />
    </div>
  );
};

export default StartupIPRRights;