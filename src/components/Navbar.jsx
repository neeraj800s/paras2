import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/service-areas', label: 'Service Areas' },
        { path: '/contact', label: 'Contact Us' },
    ];

    const handleCall = () => {
        window.location.href = 'tel:8740840483';
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-brand" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="brand-icon">
                            <img src='/logo3.png'/>
                        </div>
                        <div className="brand-text">
                            <span className="brand-name">PARAS HOME HEALTH</span>
                            <span className="brand-tagline">TAKE CARE</span>
                        </div>
                    </Link>

                    <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="navbar-actions">
                        <button className="btn btn-primary" onClick={handleCall}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92V19.92C22 20.4728 21.5523 20.92 21 20.92H18C8.05887 20.92 0 12.8611 0 2.92V2C0 1.44772 0.447715 1 1 1H4C4.55228 1 5 1.44772 5 2V5.5C5 6.05228 4.55228 6.5 4 6.5H3C3 13.4036 8.59644 19 15.5 19V18C15.5 17.4477 15.9477 17 16.5 17H20C20.5523 17 21 17.4477 21 18V19.92C21 20.4728 21.4477 20.92 22 20.92Z" fill="currentColor" />
                            </svg>
                            Call Now
                        </button>
                    </div>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
