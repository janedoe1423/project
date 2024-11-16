import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Innovators() {
    const innovators = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            name: 'Alex Brown',
            domain: 'Artificial Intelligence',
            profile: 'https://via.placeholder.com/150', // Placeholder for profile image
            description: 'An AI researcher working on natural language processing and machine learning applications.',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            name: 'Sophie Green',
            domain: 'Biotechnology',
            profile: 'https://via.placeholder.com/150',
            description: 'Biotech innovator focusing on genetic engineering for agricultural applications.',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            name: 'Mark Johnson',
            domain: 'Renewable Energy',
            profile: 'https://via.placeholder.com/150',
            description: 'Specializes in sustainable energy solutions, including solar and wind technology.',
        },
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Innovators</h2>
            <div className="row">
                {innovators.map((innovator) => (
                    <div className="col-md-4 mb-4" key={innovator.id}>
                        <div className="card h-100">
                            <img src={innovator.image} className="card-img-top" alt={innovator.name} />
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <img src={innovator.profile} alt="Profile" className="rounded-circle me-2" width="50" height="50" />
                                    <h5 className="card-title mb-0">{innovator.name}</h5>
                                </div>
                                <p className="card-text"><strong>Domain:</strong> {innovator.domain}</p>
                                <p className="card-text">{innovator.description}</p>
                                <button className="btn btn-primary">View Profile</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Innovators;
