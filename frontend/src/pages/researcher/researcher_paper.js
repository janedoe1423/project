import React from "react";
import { Table } from "react-bootstrap";

const ResearcherPapers = () => {
    const papers = [
        { id: 1, title: "AI in Healthcare", journal: "Nature AI", year: 2023 },
        { id: 2, title: "Blockchain Security", journal: "IEEE Blockchain", year: 2022 },
    ];

    return (
        <div>
            <h2>Research Papers</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Journal</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {papers.map((paper, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{paper.title}</td>
                            <td>{paper.journal}</td>
                            <td>{paper.year}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ResearcherPapers;
