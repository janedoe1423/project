import React from 'react';
import '../src/components/css/Jobsector.css';

function JobSector() {
    return (
        <div className="job-sector-container">
            <header className="job-sector-header">
                <h1>Job Opportunities in Innovation and Entrepreneurship</h1>
                <p>Connect with startups and skilled professionals.</p>
            </header>
            <section className="filters">
                <h2>Filters</h2>
                <div className="filter-options">
                    <select className="filter-select">
                        <option value="">Select Role</option>
                        {/* Add options dynamically */}
                    </select>
                    <select className="filter-select">
                        <option value="">Select Sector</option>
                        {/* Add options dynamically */}
                    </select>
                    <input type="text" className="filter-input" placeholder="Location" />
                    <button className="filter-button">Search</button>
                </div>
            </section>
            <section className="job-listings">
                <h2>Available Job Opportunities</h2>
                <div className="job-list">
                    {/* Map through job postings */}
                    <div className="job-item">
                        <h3>Software Engineer at Startup XYZ</h3>
                        <p>Location: Remote</p>
                        <p>Skills: JavaScript, React, Node.js</p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                    {/* Add more job postings dynamically */}
                </div>
            </section>
            <section className="government-initiatives">
                <h2>Government Schemes</h2>
                <p>Explore initiatives supporting employment in the startup sector.</p>
                <ul className="initiative-list">
                    <li>Startup Gujarat Support</li>
                    <li>Women Entrepreneurship Program</li>
                    <li>Incubator Framework Initiative</li>
                    {/* Add more initiatives dynamically */}
                </ul>
            </section>
        </div>
    );
}

export default JobSector;