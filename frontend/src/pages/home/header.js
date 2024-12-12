import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleDown, FaSearch, FaUser } from 'react-icons/fa';
import './header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        {
            title: 'Home',
            submenu: [
                'Software Landing',
                'SEO Agency',
                'Digital Agency',
                'Business'
            ]
        },
        {
            title: 'Pages',
            submenu: [
                'About Us',
                'Team',
                'Team Details',
                'Pricing',
                'FAQ',
                'Contact Us',
                'Error Page'
            ]
        },
        {
            title: 'Projects',
            submenu: [
                'Project style one',
                'Project Details'
            ]
        },
        {
            title: 'Services',
            submenu: [
                'Services Version One',
                'Services Version Two',
                'Services Details'
            ]
        },
        {
            title: 'Blog',
            submenu: [
                'Blog Standard',
                'Blog With Sidebar',
                'Blog Grid Two Colum',
                'Blog Grid Three Colum',
                'Blog Single',
                'Blog Single With Sidebar'
            ]
        },
        { title: 'Contact' }
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <Link to="/" className="logo">
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Metize
                    </motion.h1>
                </Link>

                {/* Desktop Menu */}
                <nav className="desktop-menu">
                    {menuItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="menu-item"
                            onMouseEnter={() => setActiveDropdown(item.title)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link to={`/${item.title.toLowerCase()}`} className="menu-link">
                                {item.title}
                                {item.submenu && <FaAngleDown className="dropdown-icon" />}
                            </Link>
                            
                            {item.submenu && activeDropdown === item.title && (
                                <motion.div 
                                    className="dropdown"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item.submenu.map((subItem, subIndex) => (
                                        <Link 
                                            key={subIndex}
                                            to={`/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="dropdown-item"
                                        >
                                            {subItem}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right Section */}
                <div className="header-right">
                    <button className="icon-button">
                        <FaSearch />
                    </button>
                    <Link to="/login" className="login-button">
                        <FaUser className="user-icon" />
                        Login
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="mobile-menu-button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        className="mobile-menu"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween' }}
                    >
                        {menuItems.map((item, index) => (
                            <div key={index} className="mobile-menu-item">
                                <Link to={`/${item.title.toLowerCase()}`}>
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;