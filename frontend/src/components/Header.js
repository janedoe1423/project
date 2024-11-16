import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header className="bg-light border-bottom shadow-sm py-2">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Left - Logo */}
                <div className="d-flex align-items-center">
                    <h1 className="m-0" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>StartupHub</h1>
                </div>

                {/* Middle - Menu Bar */}
                <nav className="navbar navbar-expand">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/startups" className="nav-link">Startups</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/investors" className="nav-link">Investors</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/innovations" className="nav-link">Innovations</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/innovators" className="nav-link">Innovators</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/schemes" className="nav-link">Schemes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ipr-rights" className="nav-link">IPR Rights</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/funding" className="nav-link">Funding</Link>
                        </li>
                    </ul>
                </nav>

                {/* Right - Auth Links */}
                <div className="d-flex align-items-center">
                    <Link to="/login" className="btn btn-outline-primary mx-1">Log In</Link>
                    <Link to="/signup" className="btn btn-primary mx-1">Sign Up</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
