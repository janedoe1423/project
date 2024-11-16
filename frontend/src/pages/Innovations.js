import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Innovations() {
    const innovations = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            title: 'AI-Powered Health Diagnostics',
            domain: 'Healthcare',
            description: 'An AI solution that helps diagnose diseases based on medical imaging and other health data.',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            title: 'Renewable Energy Storage',
            domain: 'Energy',
            description: 'An innovative solution to store renewable energy more efficiently using next-gen batteries.',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            title: 'Smart Farming System',
            domain: 'Agriculture',
            description: 'Automated farming using IoT sensors and AI to monitor crop health and optimize water usage.',
        },
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Innovations</h2>
            <div className="row">
                {innovations.map((innovation) => (
                    <div className="col-md-12 mb-4" key={innovation.id}>
                        <div className="card h-100">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={innovation.image} className="img-fluid rounded-start" alt={innovation.title} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{innovation.title}</h5>
                                        <p className="card-text"><strong>Domain:</strong> {innovation.domain}</p>
                                        <p className="card-text">{innovation.description}</p>
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Innovations;
