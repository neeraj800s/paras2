import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleWhatsApp = () => {
        window.open('https://wa.me/918740840493', '_blank');
    };

    const handleCall = () => {
        window.location.href = 'tel:8740840483';
    };

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <div className="footer-brand">
                                <div className="brand-icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.3" />
                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h3>PARAS HOME HEALTH</h3>
                                    <p className="tagline">TAKE CARE</p>
                                </div>
                            </div>
                            <p className="footer-desc">
                                Providing compassionate, professional home healthcare services in Jaipur. Your trusted partner for quality nursing, patient care, and elderly support at home.
                            </p>
                            <div className="footer-contact">
                                <div className="contact-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92V19.92C22 20.4728 21.5523 20.92 21 20.92H18C8.05887 20.92 0 12.8611 0 2.92V2C0 1.44772 0.447715 1 1 1H4C4.55228 1 5 1.44772 5 2V5.5C5 6.05228 4.55228 6.5 4 6.5H3C3 13.4036 8.59644 19 15.5 19V18C15.5 17.4477 15.9477 17 16.5 17H20C20.5523 17 21 17.4477 21 18V19.92C21 20.4728 21.4477 20.92 22 20.92Z" fill="currentColor" />
                                    </svg>
                                    <span>8740840483</span>
                                </div>
                                <div className="contact-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
                                    </svg>
                                    <span>Jaipur, Rajasthan</span>
                                </div>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">Our Services</Link></li>
                                <li><Link to="/service-areas">Service Areas</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Our Services</h4>
                            <ul className="footer-links">
                                <li><Link to="/services">Home Nursing Care</Link></li>
                                <li><Link to="/services">Patient Care Attendant</Link></li>
                                <li><Link to="/services">Elderly Care Services</Link></li>
                                <li><Link to="/services">ICU Care at Home</Link></li>
                                <li><Link to="/services">Physiotherapy at Home</Link></li>
                                <li><Link to="/services">Mother & Baby Care</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Service Areas</h4>
                            <ul className="footer-links">
                                <li><Link to="/service-areas">Mansarovar</Link></li>
                                <li><Link to="/service-areas">Vaishali Nagar</Link></li>
                                <li><Link to="/service-areas">Malviya Nagar</Link></li>
                                <li><Link to="/service-areas">Gujar Ki Thadi</Link></li>
                            </ul>
                            <div className="footer-cta">
                                <h4>24×7 Available</h4>
                                <button className="btn btn-whatsapp" onClick={handleWhatsApp}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>&copy; {currentYear} Paras Home Health Take Care. All rights reserved.</p>
                        <p className="footer-credit">Providing Quality Healthcare Services in Jaipur</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
