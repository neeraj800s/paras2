import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './ServiceAreas.css';
import React from 'react';

const ServiceAreas = () => {
    const handleCall = () => {
        window.location.href = 'tel:8740840483';
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/918740840483', '_blank');
    };

    const areas = [
        {
            name: 'Mansarovar',
            description: 'Comprehensive home healthcare services available throughout Mansarovar and surrounding localities. Our team provides 24×7 nursing care, patient attendants, elderly care, physiotherapy, and all medical services right at your doorstep. We serve all sectors of Mansarovar including Sector 1 to Sector 10, Pratap Nagar, and nearby areas.',
            highlights: [
                '24×7 Emergency Response',
                'Experienced Local Staff',
                'All Medical Services Available',
                'Quick Response Time'
            ],
            image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop'
        },
        {
            name: 'Vaishali Nagar',
            description: 'Trusted home healthcare provider in Vaishali Nagar offering professional nursing, patient care, post-surgery recovery, and elderly care services. Our certified healthcare professionals are familiar with the locality and provide prompt, reliable service to residents of Vaishali Nagar, Chitrakoot, and adjacent areas.',
            highlights: [
                'Certified Healthcare Professionals',
                'Specialized Elderly Care',
                'Post-Surgery Home Care',
                'Mother & Baby Care'
            ],
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
        },
        {
            name: 'Malviya Nagar',
            description: 'Premium home healthcare services in Malviya Nagar including ICU care at home, bedridden patient care, physiotherapy, and comprehensive nursing services. We serve the entire Malviya Nagar area including Jagatpura, Jawahar Nagar, and surrounding neighborhoods with dedicated healthcare professionals.',
            highlights: [
                'ICU Care at Home',
                'Bedridden Patient Specialists',
                'Professional Physiotherapy',
                'Chronic Disease Management'
            ],
            image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop'
        },
        {
            name: 'Gujar Ki Thadi',
            description: 'Quality home healthcare services in Gujar Ki Thadi area providing nursing care, patient attendants, elderly care, and all medical services at home. Our experienced team serves Gujar Ki Thadi, Murlipura, Vidhyadhar Nagar, and nearby localities with compassionate, professional healthcare support.',
            highlights: [
                'Compassionate Nursing Care',
                'Trained Patient Attendants',
                'Dementia & Alzheimer Care',
                'Affordable Pricing'
            ],
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop'
        }
    ];

    return (
        <div className="service-areas-page">
            <SEO
                title="Service Areas in Jaipur | Local Home Healthcare Coverage"
                description="We provide professional home healthcare services across Jaipur, including Mansarovar, Vaishali Nagar, Malviya Nagar, and Gujar Ki Thadi. Quick response times and local care staff."
                keywords="home care mansarovar jaipur, home nursing vaishali nagar, patient care malviya nagar, healthcare services jaipur areas, home nurse jaipur south"
            />
            {/* Hero Section */}
            <section className="areas-hero">
                <div className="container">
                    <div className="areas-hero-content">
                        <h1 className="animate-fadeInUp">Areas We Serve in Jaipur</h1>
                        <p className="hero-subtitle animate-fadeInUp">Bringing quality healthcare to your neighborhood</p>
                        <p className="hero-description">
                            We proudly serve multiple areas across Jaipur with professional home healthcare services. Our local presence ensures quick response times, familiar faces, and personalized care that understands your community's unique needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Areas List */}
            <section className="areas-list-section section">
                <div className="container">
                    {areas.map((area, index) => (
                        <div key={index} className={`area-detail-card ${index % 2 === 1 ? 'reverse' : ''}`}>
                            <div className="area-detail-image">
                                <img src={area.image} alt={area.name} />
                                <div className="area-badge">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                            <div className="area-detail-content">
                                <h2>{area.name}</h2>
                                <p className="area-description">{area.description}</p>
                                <div className="area-highlights">
                                    <h3>Key Services:</h3>
                                    <ul>
                                        {area.highlights.map((highlight, idx) => (
                                            <li key={idx}>
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                                                </svg>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="area-cta">
                                    <button className="btn btn-primary" onClick={handleCall}>Call Now</button>
                                    <button className="btn btn-whatsapp" onClick={handleWhatsApp}>WhatsApp</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Coverage Section */}
            <section className="coverage-section section">
                <div className="container">
                    <div className="coverage-content">
                        <h2>Expanding Our Reach</h2>
                        <p>
                            While we currently serve Mansarovar, Vaishali Nagar, Malviya Nagar, and Gujar Ki Thadi, we are continuously expanding our services to cover more areas across Jaipur. If your locality is not listed above, please contact us—we may still be able to serve you or will soon be expanding to your area.
                        </p>
                        <p>
                            Our commitment is to make quality home healthcare accessible to every family in Jaipur. We carefully select and train local healthcare professionals who understand the community and can provide culturally sensitive, personalized care.
                        </p>
                        <div className="coverage-cta">
                            <Link to="/contact" className="btn btn-secondary">Check Service Availability</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="areas-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Need Healthcare Services in Your Area?</h2>
                        <p>Contact us today to confirm service availability and schedule a consultation</p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary" onClick={handleCall}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92V19.92C22 20.4728 21.5523 20.92 21 20.92H18C8.05887 20.92 0 12.8611 0 2.92V2C0 1.44772 0.447715 1 1 1H4C4.55228 1 5 1.44772 5 2V5.5C5 6.05228 4.55228 6.5 4 6.5H3C3 13.4036 8.59644 19 15.5 19V18C15.5 17.4477 15.9477 17 16.5 17H20C20.5523 17 21 17.4477 21 18V19.92C21 20.4728 21.4477 20.92 22 20.92Z" fill="currentColor" />
                                </svg>
                                Call: 8740840483
                            </button>
                            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceAreas;
