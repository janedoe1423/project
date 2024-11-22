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
            <header className={`fixed-top bg-light border-bottom shadow-sm py-2 ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container d-flex justify-content-between align-items-center">
                    {/* Left - Logo */}
                    <div className="d-flex align-items-center">
                        <h1 className="m-0" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>StartupHub</h1>
                    </div>

                    {/* Middle - Menu Bar */}
                    <nav className="navbar navbar-expand">
                        <ul className="navbar-nav mx-auto">
                            {menuItems.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <Link 
                                        to={item.path} 
                                        className={`nav-link d-flex align-items-center ${
                                            location.pathname === item.path ? 'active' : ''
                                        }`}
                                    >
                                        <span className="me-1">{item.icon}</span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
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
                        <li className="nav-item dropdown-hover">
                            <Link to="/schemes" className="nav-link">
                                Schemes
                            </Link>
                            <div className="dropdown-content">
                                <Link to="/schemes/startup-india">Startup India Support</Link>
                                <Link to="/schemes/women-entrepreneurship">Women Entrepreneurship</Link>
                                <Link to="/schemes/incubator-framework">Incubator Framework</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/ipr-rights" className="nav-link">IPR Rights</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/funding" className="nav-link">Funding</Link>
                        </li>
                    </ul>
                </nav>

                    {/* Right - Auth Buttons */}
                    <div className="auth-buttons d-flex gap-2">
                        <Link 
                            to="/login" 
                            className="btn btn-outline-primary"
                            style={{ borderRadius: '20px' }}
                        >
                            Log In
                        </Link>
                        <Link 
                            to="/signup" 
                            className="btn btn-primary"
                            style={{ borderRadius: '20px' }}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </header>
            
            {/* Spacer div to prevent content from hiding under fixed header */}
            <div style={{ height: '70px' }}></div>
        </>
    );
}

export default Header;