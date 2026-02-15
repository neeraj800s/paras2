import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
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
            description: 'Professional registered nurses providing comprehensive medical care at home including wound care, medication management, IV therapy, and vital signs monitoring with compassion and expertise.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor" />
                </svg>
            ),
            title: 'Patient Care Attendant',
            description: 'Trained and certified care attendants available 24×7 to assist patients with daily activities, personal hygiene, mobility support, feeding assistance, and ensuring comfort and dignity at all times.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
                </svg>
            ),
            title: 'Elderly Care Services',
            description: 'Specialized geriatric care focusing on the unique needs of senior citizens including companionship, medication reminders, fall prevention, dementia care, and maintaining their independence with dignity.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM18 18H6V16.47C6 13.97 10.97 12.89 12 12.89C13.03 12.89 18 13.97 18 16.47V18Z" fill="currentColor" />
                </svg>
            ),
            title: 'ICU Care at Home',
            description: 'Critical care services at home with advanced medical equipment, continuous monitoring, ventilator support, and experienced ICU-trained nurses for patients requiring intensive medical attention.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" fill="currentColor" />
                </svg>
            ),
            title: 'Post-Surgery Care',
            description: 'Comprehensive post-operative care including surgical wound management, pain management, infection prevention, mobility assistance, and ensuring smooth recovery in the comfort of your home.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.49 5.48C13.77 5.2 14.11 5.06 14.45 5.06C14.79 5.06 15.13 5.2 15.41 5.48L18.41 8.48C18.69 8.76 18.83 9.1 18.83 9.44C18.83 9.78 18.69 10.12 18.41 10.4L10.41 18.4C10.13 18.68 9.79 18.82 9.45 18.82H6.45C5.77 18.82 5.23 18.28 5.23 17.6V14.6C5.23 14.26 5.37 13.92 5.65 13.64L13.49 5.48Z" fill="currentColor" />
                </svg>
            ),
            title: 'Physiotherapy at Home',
            description: 'Licensed physiotherapists providing personalized rehabilitation programs, therapeutic exercises, pain relief treatments, mobility restoration, and post-injury recovery sessions at your doorstep.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor" />
                </svg>
            ),
            title: 'Mother & Baby Care',
            description: 'Expert postnatal care for new mothers and newborns including breastfeeding support, baby bathing and massage, umbilical cord care, maternal recovery assistance, and newborn health monitoring.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10.12H14.22L16.96 7.38C14.23 4.65 9.77 4.65 7.04 7.38C4.31 10.11 4.31 14.57 7.04 17.3C9.77 20.03 14.23 20.03 16.96 17.3C18.32 15.94 19 14.12 19 12.3H21C21 14.74 20.04 17.18 18.12 19.1C14.28 22.94 8.12 22.94 4.28 19.1C0.44 15.26 0.44 9.1 4.28 5.26C8.12 1.42 14.28 1.42 18.12 5.26L21 2.38V10.12Z" fill="currentColor" />
                </svg>
            ),
            title: 'Bedridden Patient Care',
            description: 'Specialized care for immobile patients including pressure sore prevention, regular position changes, catheter care, feeding assistance, hygiene maintenance, and ensuring maximum comfort and health.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor" />
                </svg>
            ),
            title: 'GDA & Nursing Staff',
            description: 'Qualified General Duty Assistants and nursing staff for hospitals, clinics, and home care providing professional medical assistance, patient monitoring, and comprehensive healthcare support services.'
        }
    ];

    const whyChooseUs = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                </svg>
            ),
            title: 'Verified & Trained Staff',
            description: 'All our healthcare professionals are thoroughly verified, certified, and undergo regular training to ensure the highest quality of care and patient safety.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor" />
                </svg>
            ),
            title: '24×7 Availability',
            description: 'Round-the-clock availability with immediate response to emergencies. Our team is always ready to provide care whenever you need it, day or night.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.41 18.09V20H10.74V18.07C9.03 17.71 7.58 16.61 7.58 14.84H10.01C10.01 15.66 10.52 16.36 12.08 16.36C13.63 16.36 14.09 15.59 14.09 14.98C14.09 14.2 13.63 13.6 11.7 13.12C9.46 12.54 7.58 11.61 7.58 9.39C7.58 7.56 9.03 6.42 10.74 6.07V4H13.41V6.05C15.27 6.42 16.42 7.74 16.42 9.41H13.99C13.99 8.5 13.48 7.89 12.08 7.89C10.82 7.89 10.01 8.39 10.01 9.31C10.01 10.1 10.57 10.58 12.42 11.08C14.27 11.58 16.52 12.42 16.52 14.91C16.52 16.69 15.27 17.76 13.41 18.09Z" fill="currentColor" />
                </svg>
            ),
            title: 'Affordable Pricing',
            description: 'Transparent and competitive pricing with no hidden costs. We believe quality healthcare should be accessible and affordable for everyone.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor" />
                </svg>
            ),
            title: 'Compassionate Care',
            description: 'We treat every patient with empathy, respect, and dignity. Our caregivers are not just skilled professionals but compassionate individuals who truly care.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.3" />
                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Trusted Local Provider',
            description: 'Proudly serving Jaipur with years of experience. We understand local needs and have built a reputation for reliability and excellence in home healthcare.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor" />
                </svg>
            ),
            title: 'Personalized Care Plans',
            description: 'Every patient is unique. We create customized care plans tailored to individual medical needs, preferences, and family requirements for optimal outcomes.'
        }
    ];

    const serviceAreas = [
        'Mansarovar',
        'Vaishali Nagar',
        'Malviya Nagar',
        'Gujar Ki Thadi'
    ];

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            location: 'Vaishali Nagar',
            text: 'The nurses from Paras Home Health were a godsend during my father\'s recovery. Professional, kind, and always on time. They made a difficult time much easier for our family.',
            rating: 5
        },
        {
            name: 'Priya Singh',
            location: 'Malviya Nagar',
            text: 'Excellent service! The patient care attendant looked after my mother like her own family. Highly recommended for anyone looking for reliable home care.',
            rating: 5
        },
        {
            name: 'Amit Sharma',
            location: 'Mansarovar',
            text: 'Very prompt response for ICU setup at home. The equipment was top-notch and the staff was very knowledgeable. We are very grateful for their support.',
            rating: 4
        },
        {
            name: 'Meena Gupta',
            location: 'Raja Park',
            text: 'I availed their physiotherapy services for my back pain. Dr. Verma was very experienced and I saw significant improvement in just 2 weeks.',
            rating: 5
        }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="home-page">
            <SEO
                title="Best Home Healthcare Services in Jaipur | 24×7 Nursing & Patient Care"
                description="Paras Home Health Take Care provides professional 24×7 home nursing, patient care, and elderly care services in Jaipur. Specialized ICU care at home, physiotherapy, and postnatal care."
                keywords="home healthcare jaipur, home nursing services jaipur, best patient care jaipur, elderly care jaipur, ICU care at home jaipur, physiotherapy at home jaipur, mother and baby care jaipur"
            />
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text animate-fadeInUp">
                            <h1>Trusted Home Health Care Services in Jaipur</h1>
                            <h2 className="hero-subtitle">24×7 Professional Nursing, Patient & Elder Care at Home</h2>
                            <p className="hero-description">
                                At Paras Home Health Take Care, we understand that healing happens best in the comfort of your own home, surrounded by loved ones. When illness strikes or aging brings new challenges, the familiar warmth of home provides not just physical comfort, but emotional strength and peace of mind. Our mission is to bring professional, compassionate healthcare directly to your doorstep, ensuring that you or your loved ones receive the highest quality medical care without the stress of hospital visits.
                            </p>
                            <div className="hero-cta">
                                <button className="btn btn-primary" onClick={handleCall}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92V19.92C22 20.4728 21.5523 20.92 21 20.92H18C8.05887 20.92 0 12.8611 0 2.92V2C0 1.44772 0.447715 1 1 1H4C4.55228 1 5 1.44772 5 2V5.5C5 6.05228 4.55228 6.5 4 6.5H3C3 13.4036 8.59644 19 15.5 19V18C15.5 17.4477 15.9477 17 16.5 17H20C20.5523 17 21 17.4477 21 18V19.92C21 20.4728 21.4477 20.92 22 20.92Z" fill="currentColor" />
                                    </svg>
                                    Call Now: 8740840493
                                </button>
                                <button className="btn btn-whatsapp" onClick={handleWhatsApp}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp Us
                                </button>
                            </div>
                        </div>
                        <div className="hero-image animate-fadeIn">
                            <img
                                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop"
                                alt="Professional nurse providing compassionate care to elderly patient at home"
                            />
                            <div className="hero-badge">
                                <div className="badge-icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div className="badge-text">
                                    <strong>24×7 Available</strong>
                                    <span>Trusted Care</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Comprehensive Healthcare Services</h2>
                        <p>Professional, compassionate care tailored to your unique needs</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p className='nss'>{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta">
                        <Link to="/services" className="btn btn-primary">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-section section">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Choose Paras Home Health Take Care?</h2>
                        <p>Your health and comfort are our top priorities</p>
                    </div>
                    <div className="why-choose-grid">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="why-choose-card card-gradient animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="why-choose-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p className='nss2'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas Section */}
            <section className="service-areas-section section">
                <div className="container">
                    <div className="section-title">
                        <h2>Areas We Serve in Jaipur</h2>
                        <p>Bringing quality healthcare to your neighborhood</p>
                    </div>
                    <div className="service-areas-grid">
                        {serviceAreas.map((area, index) => (
                            <div key={index} className="area-card card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="area-icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <h3>{area}</h3>
                                <p>Professional home healthcare services available in {area} and surrounding areas</p>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta">
                        <Link to="/service-areas" className="btn btn-secondary">View All Service Areas</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section section">
                <div className="container">
                    <div className="section-title">
                        <h2>What Our Clients Say</h2>
                        <p>Real stories from families we've had the privilege to serve</p>
                    </div>

                    <div className="testimonials-slider">
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <div className="quote-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                    </svg>
                                </div>
                                <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
                                <div className="testimonial-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i < testimonials[currentTestimonial].rating ? "#FFD700" : "#E0E0E0"}>
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                    ))}
                                </div>
                                <div className="testimonial-author">
                                    <h4>{testimonials[currentTestimonial].name}</h4>
                                    <p>{testimonials[currentTestimonial].location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                                    onClick={() => setCurrentTestimonial(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Need Immediate Healthcare Assistance?</h2>
                        <p>Our team is available 24×7 to provide the care you need, when you need it</p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary" onClick={handleCall}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92V19.92C22 20.4728 21.5523 20.92 21 20.92H18C8.05887 20.92 0 12.8611 0 2.92V2C0 1.44772 0.447715 1 1 1H4C4.55228 1 5 1.44772 5 2V5.5C5 6.05228 4.55228 6.5 4 6.5H3C3 13.4036 8.59644 19 15.5 19V18C15.5 17.4477 15.9477 17 16.5 17H20C20.5523 17 21 17.4477 21 18V19.92C21 20.4728 21.4477 20.92 22 20.92Z" fill="currentColor" />
                                </svg>
                                Call: 8740840483
                            </button>
                            <button className="btn btn-whatsapp" onClick={handleWhatsApp}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp Now
                            </button>
                            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
