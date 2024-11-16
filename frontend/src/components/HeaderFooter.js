// src/components/HeaderFooter.js
import React from 'react';

const HeaderFooter = () => {
    return (
        <>
            {/* Header (Menu Bar) */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* Left: Portal Name */}
                    <a className="navbar-brand" href="#">PortalName</a>

                    {/* Middle: Menu Items */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Startups</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Investors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Innovation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">IP Rights</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Funding</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Policies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Innovators</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Login/SignUp Button */}
                    <div className="d-flex">
                        <button className="btn btn-outline-primary me-2">Login</button>
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </nav>

            {/* Footer */}
            <footer className="bg-dark text-light py-5">
                <div className="container">
                    <div className="row">
                        {/* Company Section */}
                        <div className="col-md-3">
                            <h5>Company</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light">About Us</a></li>
                                <li><a href="#" className="text-light">Pricing</a></li>
                                <li><a href="#" className="text-light">Testimonial</a></li>
                            </ul>
                        </div>

                        {/* Resource Section */}
                        <div className="col-md-3">
                            <h5>Resource</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light">Pricing</a></li>
                                <li><a href="#" className="text-light">Terms and Conditions</a></li>
                                <li><a href="#" className="text-light">Blogs</a></li>
                            </ul>
                        </div>

                        {/* Products Section */}
                        <div className="col-md-3">
                            <h5>Products</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light">Project Management</a></li>
                                <li><a href="#" className="text-light">Products</a></li>
                            </ul>
                        </div>

                        {/* Title: Newsletter Subscription */}
                        <div className="col-md-3">
                            <h5>Subscribe to our Newsletter</h5>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    aria-label="Email"
                                />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center">
                        <p>&copy; 2024 PortalName. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HeaderFooter;
