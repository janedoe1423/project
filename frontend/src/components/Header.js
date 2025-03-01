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
    FaMoneyBillWave,
    FaBars,
    FaTimes 
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const menuItems = [
        { path: '/', name: 'Home', icon: <FaHome /> },
        { 
            path: '/network', 
            name: 'Network', 
            icon: <FaUsers />,
            dropdown: [
                { path: '/startups', name: 'Startups' },
                { path: '/investors', name: 'Investors' },
                { path: '/innovations', name: 'Innovations' }
            ]
        },
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
        { path: '/funding', name: 'Funding', icon: <FaMoneyBillWave /> },
        { path: '/market-analysis', name: 'Market Analysis', icon: <FaBrain /> }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className={`fixed-top ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container d-flex justify-content-between align-items-center">
                    <Link to="/" className="text-decoration-none">
                        <h1 className="logo-text">StartupHub</h1>
                    </Link>

                    <nav className="navbar navbar-expand-lg">
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            onClick={toggleMenu}
                            aria-label="Toggle navigation"
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>

                        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                            <ul className="navbar-nav mx-auto">
                                {menuItems.map((item, index) => (
                                    <li 
                                        className={`nav-item ${item.dropdown ? 'dropdown-hover' : ''}`} 
                                        key={index}
                                    >
                                        <Link 
                                            to={item.path} 
                                            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.icon}
                                            {item.name}
                                        </Link>
                                        {item.dropdown && (
                                            <div className="dropdown-content">
                                                {item.dropdown.map((dropItem, dropIndex) => (
                                                    <Link 
                                                        key={dropIndex}
                                                        to={dropItem.path}
                                                        className={location.pathname === dropItem.path ? 'active' : ''}
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {dropItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            <div className="auth-buttons">
                                <Link to="/login" className="btn btn-outline-primary">Log In</Link>
                                <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div style={{ height: '70px' }} />
        </>
    );
}

export default Header;