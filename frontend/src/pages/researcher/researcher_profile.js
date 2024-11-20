import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ResearcherProfile = () => {
    const researcherData = {
        name: "Dr. Alice Johnson",
        email: "alice.johnson@example.com",
        expertise: ["Artificial Intelligence", "Blockchain", "Quantum Computing"],
        achievements: [
            "Published 50+ research papers in reputed journals",
            "Filed 10 patents in the field of AI and Blockchain",
            "Keynote speaker at 15 international conferences",
        ],
        currentProjects: [
            "AI-Powered Healthcare Diagnostics",
            "Quantum Cryptography in IoT Devices",
        ],
    };

    return (
        <div>
            <h2>Researcher Profile</h2>
            <Card className="mb-4">
                <Card.Header>
                    <h4>{researcherData.name}</h4>
                    <p>{researcherData.email}</p>
                </Card.Header>
                <Card.Body>
                    <h5>Expertise</h5>
                    <ListGroup variant="flush">
                        {researcherData.expertise.map((field, index) => (
                            <ListGroup.Item key={index}>{field}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
            <Card className="mb-4">
                <Card.Body>
                    <h5>Achievements</h5>
                    <ListGroup variant="flush">
                        {researcherData.achievements.map((achievement, index) => (
                            <ListGroup.Item key={index}>{achievement}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <h5>Current Projects</h5>
                    <ListGroup variant="flush">
                        {researcherData.currentProjects.map((project, index) => (
                            <ListGroup.Item key={index}>{project}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ResearcherProfile;
