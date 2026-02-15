import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceAreas from './pages/ServiceAreas';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminContacts from './pages/AdminContacts';
import './index.css';

function App() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const hasRedirected = sessionStorage.getItem('hasRedirected');

        if (!hasRedirected && window.location.pathname !== '/') {
            sessionStorage.setItem('hasRedirected', 'true');
            navigate('/');
        } else if (window.location.pathname === '/') {
            sessionStorage.setItem('hasRedirected', 'true');
        }
    }, [navigate]);

    // Check if current page is an admin page
    const isAdminPage = pathname === '/admin/login' || pathname === '/contacts';

    return (
        <div className="App">
            {/* Show standard Navbar only on NON-ADMIN pages */}
            {!isAdminPage && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service-areas" element={<ServiceAreas />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/contacts" element={<AdminContacts />} />
            </Routes>

            {/* Show standard Footer only on NON-ADMIN pages */}
            {!isAdminPage && <Footer />}
        </div>
    );
}

export default App;
