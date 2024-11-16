import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Investors() {
    // Sample data for investors
    const investors = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150', // Placeholder image URL
            name: 'Investor One',
            domain: 'Technology',
            owner: 'John Doe',
            description: 'Focused on early-stage tech startups with innovative solutions.',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            name: 'Investor Two',
            domain: 'Healthcare',
            owner: 'Jane Smith',
            description: 'Specializes in healthcare sector investments, particularly biotech.',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            name: 'Investor Three',
            domain: 'Renewable Energy',
            owner: 'Alice Johnson',
            description: 'Invests in startups promoting clean energy and sustainability.',
        },
        // Add more investor objects as needed
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Investors</h2>
            <div className="row">
                {investors.map((investor) => (
                    <div className="col-md-4 mb-4" key={investor.id}>
                        <div className="card h-100">
                            <img src={investor.image} className="card-img-top" alt={investor.name} />
                            <div className="card-body">
                                <h5 className="card-title">{investor.name}</h5>
                                <p className="card-text"><strong>Domain:</strong> {investor.domain}</p>
                                <p className="card-text"><strong>Owner:</strong> {investor.owner}</p>
                                <p className="card-text">{investor.description}</p>
                                <button className="btn btn-primary">View Profile</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Investors;
