import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Services.css';
import React from 'react';

const Services = () => {
    const handleCall = () => {
        window.location.href = 'tel:8740840483';
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/918740840483', '_blank');
    };

    const services = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM12 17C10.34 17 9 15.66 9 14C9 12.34 10.34 11 12 11C13.66 11 15 12.34 15 14C15 15.66 13.66 17 12 17Z" fill="currentColor" />
                </svg>
            ),
            title: 'Home Nursing Care',
            shortDesc: 'Professional registered nurses providing comprehensive medical care at your home',
            fullDesc: 'Our registered nurses bring hospital-quality care to your doorstep. Services include wound dressing and management, IV therapy administration, medication management and monitoring, vital signs tracking (blood pressure, temperature, pulse, oxygen levels), catheter care and management, injection administration, post-operative care, chronic disease management (diabetes, hypertension, COPD), and regular health assessments. All our nurses are certified, experienced, and trained in the latest medical protocols.',
            image: '/nursingcare.jpeg'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor" />
                </svg>
            ),
            title: 'Patient Care Attendant',
            shortDesc: 'Trained caregivers for daily assistance and personal care',
            fullDesc: 'Our certified patient care attendants provide compassionate support for all daily living activities. Services include assistance with bathing, grooming, and personal hygiene, help with dressing and undressing, mobility support and transfer assistance, feeding assistance and meal preparation, medication reminders, companionship and emotional support, light housekeeping related to patient care, and monitoring and reporting changes in patient condition. Available for 12-hour or 24-hour shifts based on your needs.',
            image: '/patientcare.jpg'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
                </svg>
            ),
            title: 'Elderly Care Services',
            shortDesc: 'Specialized geriatric care for senior citizens',
            fullDesc: 'Our elderly care program is designed specifically for the unique needs of senior citizens. Services include comprehensive geriatric assessment, dementia and Alzheimer\'s care, fall prevention and safety monitoring, chronic disease management, medication management and reminders, nutritional support and meal planning, physical exercise and mobility assistance, cognitive stimulation activities, companionship and social engagement, and regular health monitoring. We treat every senior with the respect and dignity they deserve.',
            image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM18 18H6V16.47C6 13.97 10.97 12.89 12 12.89C13.03 12.89 18 13.97 18 16.47V18Z" fill="currentColor" />
                </svg>
            ),
            title: 'ICU Care at Home',
            shortDesc: 'Critical care services with advanced medical equipment',
            fullDesc: 'Bring ICU-level care to your home with our critical care services. We provide ventilator support and management, continuous vital signs monitoring, oxygen therapy, cardiac monitoring, IV medication administration, wound care for critical patients, suction and airway management, feeding tube management, catheter care, and 24×7 ICU-trained nursing staff. We coordinate with your doctors and can arrange medical equipment rental as needed.',
            image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" fill="currentColor" />
                </svg>
            ),
            title: 'Post-Surgery Care',
            shortDesc: 'Comprehensive post-operative recovery support',
            fullDesc: 'Ensure smooth recovery after surgery with our specialized post-operative care. Services include surgical wound care and dressing changes, pain management support, infection prevention and monitoring, mobility assistance and physiotherapy, medication management, drain and tube care, nutritional support for healing, monitoring for complications, assistance with daily activities during recovery, and regular communication with your surgeon. We help you recover faster and more comfortably at home.',
            image: 'post.webp'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.49 5.48C13.77 5.2 14.11 5.06 14.45 5.06C14.79 5.06 15.13 5.2 15.41 5.48L18.41 8.48C18.69 8.76 18.83 9.1 18.83 9.44C18.83 9.78 18.69 10.12 18.41 10.4L10.41 18.4C10.13 18.68 9.79 18.82 9.45 18.82H6.45C5.77 18.82 5.23 18.28 5.23 17.6V14.6C5.23 14.26 5.37 13.92 5.65 13.64L13.49 5.48Z" fill="currentColor" />
                </svg>
            ),
            title: 'Physiotherapy at Home',
            shortDesc: 'Licensed physiotherapists for rehabilitation and pain relief',
            fullDesc: 'Our licensed physiotherapists bring professional rehabilitation services to your home. Services include personalized assessment and treatment planning, post-surgery rehabilitation, post-stroke recovery programs, orthopedic rehabilitation, sports injury recovery, pain management through therapeutic exercises, mobility and strength training, balance and coordination exercises, manual therapy and massage, electrotherapy and heat/cold therapy, and home exercise program design. Sessions are tailored to your specific condition and recovery goals.',
            image: '/physio.jpeg'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor" />
                </svg>
            ),
            title: 'Mother & Baby Care',
            shortDesc: 'Expert postnatal care for mothers and newborns',
            fullDesc: 'Comprehensive care for new mothers and babies during the crucial postnatal period. Services include newborn care and health monitoring, baby bathing and massage, umbilical cord care, breastfeeding support and guidance, maternal recovery assistance, postpartum health monitoring, nutritional guidance for mothers, baby sleep training support, vaccination schedule management, and addressing common newborn concerns. Our experienced caregivers provide both medical support and emotional reassurance during this special time.',
            image: 'baby.jpeg'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10.12H14.22L16.96 7.38C14.23 4.65 9.77 4.65 7.04 7.38C4.31 10.11 4.31 14.57 7.04 17.3C9.77 20.03 14.23 20.03 16.96 17.3C18.32 15.94 19 14.12 19 12.3H21C21 14.74 20.04 17.18 18.12 19.1C14.28 22.94 8.12 22.94 4.28 19.1C0.44 15.26 0.44 9.1 4.28 5.26C8.12 1.42 14.28 1.42 18.12 5.26L21 2.38V10.12Z" fill="currentColor" />
                </svg>
            ),
            title: 'Bedridden Patient Care',
            shortDesc: 'Specialized care for immobile and bedridden patients',
            fullDesc: 'Dedicated care for patients who are bedridden or have limited mobility. Services include pressure sore prevention and treatment, regular position changes to prevent complications, complete bed bath and personal hygiene, catheter and colostomy care, feeding assistance and nutritional support, passive range of motion exercises, respiratory care and chest physiotherapy, medication administration, skin care and moisturizing, and monitoring for signs of infection or complications. We ensure maximum comfort and prevent bedridden-related health issues.',
            image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor" />
                </svg>
            ),
            title: 'GDA & Nursing Staff',
            shortDesc: 'Qualified healthcare staff for hospitals and clinics',
            fullDesc: 'Professional General Duty Assistants and nursing staff for healthcare facilities and home care. Our staff provides patient monitoring and vital signs recording, medication administration under supervision, wound dressing and basic nursing procedures, patient hygiene and comfort care, assistance with diagnostic procedures, maintaining patient records, infection control practices, emergency response support, coordination with medical team, and professional bedside manner. All staff are trained, certified, and experienced in clinical settings.',
            image: 'gda.jpeg'
        }
    ];

    return (
        <div className="services-page">
            <SEO
                title="Professional Home Healthcare Services in Jaipur | Nursing & ICU Care"
                description="Explore our range of home healthcare services in Jaipur. From basic home nursing and patient care attendants to advanced ICU care at home and specialized post-surgery recovery."
                keywords="home nursing jaipur, patient care attendant jaipur, elder care services jaipur, ICU care at home jaipur, post-surgery care jaipur, physiotherapy services jaipur, baby care jaipur"
            />
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <div className="services-hero-content">
                        <h1 className="animate-fadeInUp">Our Healthcare Services</h1>
                        <p className="hero-subtitle animate-fadeInUp">Comprehensive, professional care tailored to your unique needs</p>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="services-list-section section">
                <div className="container">
                    {services.map((service, index) => (
                        <div key={index} className={`service-detail-card ${index % 2 === 1 ? 'reverse' : ''}`}>
                            <div className="service-detail-image">
                                <img src={service.image} alt={service.title} />
                                <div className="service-detail-icon">{service.icon}</div>
                            </div>
                            <div className="service-detail-content">
                                <h2>{service.title}</h2>
                                <p className="service-short-desc">{service.shortDesc}</p>
                                <p className="service-full-desc">{service.fullDesc}</p>
                                <div className="service-cta">
                                    <button className="btn btn-primary" onClick={handleCall}>Book Now</button>
                                    <button className="btn btn-whatsapp" onClick={handleWhatsApp}>WhatsApp</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Get Started?</h2>
                        <p>Contact us today to discuss your healthcare needs and create a personalized care plan</p>
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

export default Services;
