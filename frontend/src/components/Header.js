import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    FaHome, 
    FaRocket, 
    FaUsers, 
    FaLightbulb, 
    FaBrain, 
    FaClipboardList, 
    FaCopyright, 
    FaMoneyBillWave 
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { path: '/', name: 'Home', icon: <FaHome /> },
        { path: '/startups', name: 'Startups', icon: <FaRocket /> },
        { path: '/investors', name: 'Investors', icon: <FaUsers /> },
        { path: '/innovations', name: 'Innovations', icon: <FaLightbulb /> },
        { path: '/innovators', name: 'Innovators', icon: <FaBrain /> },
        { 
            path: '/schemes', 
            name: 'Schemes', 
            icon: <FaClipboardList />,
            dropdown: [
                { path: '/schemes/startup-gujarat', name: 'Startup Gujarat Support' },
                { path: '/schemes/women-entrepreneurship', name: 'Women Entrepreneurship' },
                { path: '/schemes/incubator-framework', name: 'Incubator Framework' }
            ]
        },
        { path: '/ipr-rights', name: 'IPR', icon: <FaCopyright /> },
        { path: '/funding', name: 'Funding', icon: <FaMoneyBillWave /> }
    ];

    return (
        <>
            <header className={`fixed-top py-2 ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <h1 className="m-0 logo-text">StartupHub</h1>
                    </div>

                    <nav className="navbar navbar-expand-lg">
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                {menuItems.map((item, index) => (
                                    <li className={`nav-item ${item.dropdown ? 'dropdown-hover' : ''}`} key={index}>
                                        <Link 
                                            to={item.path} 
                                            className={`nav-link d-flex align-items-center ${
                                                location.pathname === item.path ? 'active' : ''
                                            }`}
                                        >
                                            <span className="me-1">{item.icon}</span>
                                            {item.name}
                                        </Link>
                                        {item.dropdown && (
                                            <div className="dropdown-content">
                                                {item.dropdown.map((dropItem, dropIndex) => (
                                                    <Link 
                                                        key={dropIndex}
                                                        to={dropItem.path}
                                                        className={location.pathname === dropItem.path ? 'active' : ''}
                                                    >
                                                        {dropItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    <div className="auth-buttons d-flex gap-2">
                        <Link to="/login" className="btn btn-outline-primary">Log In</Link>
                        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                    </div>
                </div>
            </header>
            <div style={{ height: '60px' }} />
        </>
    );
}

export default Header;