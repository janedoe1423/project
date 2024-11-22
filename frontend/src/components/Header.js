import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaRocket, FaUsers, FaLightbulb, FaBrain, 
         FaClipboardList, FaCopyright, FaMoneyBillWave } from 'react-icons/fa';
import './Header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { path: '/', name: 'Home', icon: <FaHome /> },
        { path: '/startups', name: 'Startups', icon: <FaRocket /> },
        { path: '/investors', name: 'Investors', icon: <FaUsers /> },
        { path: '/innovations', name: 'Innovations', icon: <FaLightbulb /> },
        { path: '/innovators', name: 'Innovators', icon: <FaBrain /> },
        { path: '/schemes', name: 'Schemes', icon: <FaClipboardList /> },
        { path: '/ipr-rights', name: 'IPR', icon: <FaCopyright /> },
        { path: '/funding', name: 'Funding', icon: <FaMoneyBillWave /> }
    ];

    return (
        <>
            <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
                <div className="header-container">
                    {/* Logo */}
                    <Link to="/" className="logo">
                        <span className="logo-text">StartupHub</span>
                    </Link>

                    {/* Navigation Menu */}
                    <nav className="nav-menu">
                        <ul className="nav-list">
                            {menuItems.map((item) => (
                                <li key={item.path} className="nav-item">
                                    <Link 
                                        to={item.path} 
                                        className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                    >
                                        <span className="nav-icon">{item.icon}</span>
                                        <span className="nav-text">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="auth-buttons">
                        <Link to="/login" className="btn btn-login">
                            Log In
                        </Link>
                        <Link to="/signup" className="btn btn-signup">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </header>
            {/* Spacer div to prevent content from hiding under fixed header */}
            <div className="header-spacer"></div>
        </>
    );
}

export default Header;