import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './About.css';
import React from 'react';

const About = () => {
    const values = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor" />
                </svg>
            ),
            title: 'Compassion',
            description: 'We treat every patient with empathy, kindness, and genuine care, understanding that healing extends beyond medical treatment to emotional support and human connection.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                </svg>
            ),
            title: 'Excellence',
            description: 'We maintain the highest standards of professional healthcare, continuously training our staff and updating our practices to provide world-class medical care at home.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="currentColor" />
                </svg>
            ),
            title: 'Integrity',
            description: 'We operate with complete transparency, honesty, and ethical practices in all our interactions, building trust through consistent and reliable service delivery.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor" />
                </svg>
            ),
            title: 'Dignity',
            description: 'We respect the inherent worth and autonomy of every individual, ensuring that all patients receive care that honors their preferences, privacy, and personal values.'
        }
    ];

    const team = [
        {
            role: 'Registered Nurses',
            description: 'Highly qualified RNs with specialized training in home healthcare, wound care, medication management, and patient monitoring.'
        },
        {
            role: 'Care Attendants',
            description: 'Certified caregivers trained in patient assistance, mobility support, personal hygiene, and compassionate companionship.'
        },
        {
            role: 'Physiotherapists',
            description: 'Licensed physiotherapy professionals specializing in rehabilitation, pain management, and mobility restoration.'
        },
        {
            role: 'Medical Coordinators',
            description: 'Dedicated coordinators ensuring seamless communication between patients, families, and healthcare providers.'
        }
    ];

    return (
        <div className="about-page">
            <SEO
                title="About Us | Trusted Home Healthcare Provider in Jaipur"
                description="Learn more about Paras Home Health Take Care, the leading provide of home nursing, patient care, and specialized healthcare services in Jaipur. Our mission, vision, and values."
                keywords="about paras home health, home care company jaipur, professional nursing jaipur, trusted patient care jaipur, healthcare services rajasthan"
            />
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <h1 className="animate-fadeInUp">About Paras Home Health Take Care</h1>
                        <p className="hero-subtitle animate-fadeInUp">Your Trusted Partner in Home Healthcare Excellence</p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-image">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop"
                                alt="Professional healthcare team providing compassionate care"
                            />
                        </div>
                        <div className="story-text">
                            <h2>Who We Are</h2>
                            <p>
                                Paras Home Health Take Care is a leading provider of professional home healthcare services in Jaipur, Rajasthan. Founded with a vision to revolutionize healthcare delivery, we bring hospital-quality medical care directly to the comfort and safety of your home. Our journey began with a simple yet powerful belief: that every individual deserves access to compassionate, professional healthcare without the stress and inconvenience of hospital visits.
                            </p>
                            <p>
                                Over the years, we have grown into a trusted name in home healthcare, serving hundreds of families across Jaipur with dedication and excellence. Our team comprises certified nurses, trained caregivers, licensed physiotherapists, and healthcare professionals who are not just skilled in their craft but are genuinely passionate about making a positive difference in people's lives.
                            </p>
                            <p>
                                What sets us apart is our unwavering commitment to personalized care. We understand that every patient is unique, with distinct medical needs, personal preferences, and family circumstances. That's why we create customized care plans tailored to each individual, ensuring that the care provided is not just medically sound but also emotionally supportive and culturally sensitive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision-section section">
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mission-card card">
                            <div className="mv-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.3" />
                                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h2>Our Mission</h2>
                            <p>
                                To provide accessible, affordable, and high-quality home healthcare services that empower patients to recover and thrive in the comfort of their own homes. We are committed to delivering compassionate care that respects the dignity, autonomy, and individual needs of every patient while supporting their families through every step of the healthcare journey.
                            </p>
                            <p>
                                We strive to bridge the gap between hospital care and home comfort, ensuring that professional medical attention is available 24×7 to those who need it most. Our mission extends beyond treatment—we aim to restore hope, independence, and quality of life to every individual we serve.
                            </p>
                        </div>
                        <div className="vision-card card">
                            <div className="mv-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h2>Our Vision</h2>
                            <p>
                                To become the most trusted and preferred home healthcare provider in Rajasthan and beyond, setting new standards of excellence in patient care, professional training, and service delivery. We envision a future where quality healthcare is not a privilege but a right accessible to all, regardless of their location or circumstances.
                            </p>
                            <p>
                                We aspire to create a healthcare ecosystem where patients feel safe, supported, and empowered; where families find relief and reassurance; and where healthcare professionals find purpose and fulfillment in their work. Through innovation, compassion, and unwavering commitment, we aim to transform lives and communities, one patient at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Core Values</h2>
                        <p>The principles that guide everything we do</p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card card-gradient animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="commitment-section section">
                <div className="container">
                    <div className="commitment-content">
                        <div className="commitment-text">
                            <h2>Our Commitment to Quality Care</h2>
                            <p>
                                At Paras Home Health Take Care, quality is not just a goal—it's a promise we make to every patient and family we serve. We are committed to maintaining the highest standards of healthcare delivery through:
                            </p>
                            <ul className="commitment-list">
                                <li>
                                    <div className="list-icon">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Rigorous Staff Selection:</strong> Every member of our team undergoes thorough background verification, credential validation, and skills assessment before joining our organization.
                                    </div>
                                </li>
                                <li>
                                    <div className="list-icon">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Continuous Training:</strong> Regular workshops, skill development programs, and medical updates ensure our staff stays current with the latest healthcare practices and technologies.
                                    </div>
                                </li>
                                <li>
                                    <div className="list-icon">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Patient-Centered Approach:</strong> We design individualized care plans that respect patient preferences, cultural values, and family dynamics while meeting medical requirements.
                                    </div>
                                </li>
                                <li>
                                    <div className="list-icon">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Quality Monitoring:</strong> Regular supervision, performance reviews, and patient feedback mechanisms ensure consistent service excellence and continuous improvement.
                                    </div>
                                </li>
                                <li>
                                    <div className="list-icon">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Safety Protocols:</strong> Strict adherence to infection control, medication safety, and emergency response procedures protects both patients and caregivers.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="commitment-image">
                            <img
                                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop"
                                alt="Healthcare professional providing quality patient care"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Professional Team</h2>
                        <p>Experienced healthcare professionals dedicated to your well-being</p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div key={index} className="team-card card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="team-icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <h3>{member.role}</h3>
                                <p>{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Experience the Difference of Compassionate Care</h2>
                        <p>Join hundreds of families who trust us for their home healthcare needs</p>
                        <div className="cta-buttons">
                            <Link to="/services" className="btn btn-primary">Explore Our Services</Link>
                            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
