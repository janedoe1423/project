import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Startup() {
    // Sample startup data to populate the cards
    const startups = [
        {
            id: 1,
            imageUrl: 'https://via.placeholder.com/300x200',
            name: 'Tech Solutions',
            founder: 'John Doe',
            domain: 'Software Development',
        },
        {
            id: 2,
            imageUrl: 'https://via.placeholder.com/300x200',
            name: 'Green Ventures',
            founder: 'Jane Smith',
            domain: 'Environmental Tech',
        },
        {
            id: 3,
            imageUrl: 'https://via.placeholder.com/300x200',
            name: 'EduHub',
            founder: 'Alice Brown',
            domain: 'Education',
        },
        {
            id: 4,
            imageUrl: 'https://via.placeholder.com/300x200',
            name: 'HealthNow',
            founder: 'Chris White',
            domain: 'Healthcare',
        },
        // Add more startup objects as needed
    ];

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Startup Listings</h2>
            <div className="row">
                {startups.map((startup) => (
                    <div key={startup.id} className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img src={startup.imageUrl} className="card-img-top" alt={startup.name} />
                            <div className="card-body">
                                <h5 className="card-title">{startup.name}</h5>
                                <p className="card-text"><strong>Founder:</strong> {startup.founder}</p>
                                <p className="card-text"><strong>Domain:</strong> {startup.domain}</p>
                                <button className="btn btn-primary mt-2" onClick={() => viewStartup(startup.id)}>
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Dummy function to handle "View" button click, assuming navigation will be set up later
function viewStartup(id) {
    console.log("Navigate to startup profile with ID:", id);
    // Navigation logic can be added here, e.g., using React Router's history.push(`/startup/${id}`)
}

export default Startup;
