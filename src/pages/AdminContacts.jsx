import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminContacts.css';

const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContacts = async () => {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                navigate('/admin/login');
                return;
            }

            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contacts`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                const data = await response.json();

                if (data.success) {
                    setContacts(data.data);
                } else {
                    setError(data.message || 'Failed to fetch contacts');
                    if (response.status === 401) {
                        localStorage.removeItem('adminToken');
                        navigate('/admin/login');
                    }
                }
            } catch (err) {
                setError('Failed to connect to server');
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/');
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to remove this contact?')) return;

        const token = localStorage.getItem('adminToken');
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contacts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();
            if (data.success) {
                setContacts(contacts.filter(contact => contact._id !== id));
            } else {
                alert(data.message || 'Failed to delete');
            }
        } catch (err) {
            alert('Failed to delete contact');
        }
    };

    if (loading) return <div className="loading">Loading contacts...</div>;

    return (
        <div className="admin-dashboard-page">
            <header className="admin-header">
                <div className="admin-container">
                    <div className="admin-header-content">
                        <div className="logo-section">
                            <span className="admin-badge">ADMIN</span>
                            <h1>Dashboard</h1>
                        </div>
                        <button onClick={handleLogout} className="admin-logout-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <div className="admin-dashboard-content">
                <div className="admin-container">
                    {error && <div className="error-alert">{error}</div>}

                    <div className="contacts-stats">
                        <div className="stat-card">
                            <span className="stat-label">Total Inquiries</span>
                            <span className="stat-value">{contacts.length}</span>
                        </div>
                    </div>

                    <div className="contacts-table-wrapper">
                        <table className="contacts-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Service</th>
                                    <th>Message</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.length > 0 ? (
                                    contacts.map((contact) => (
                                        <tr key={contact._id}>
                                            <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phone}</td>
                                            <td>{contact.service}</td>
                                            <td className="message-cell">{contact.message}</td>
                                            <td>
                                                <button
                                                    onClick={() => handleDelete(contact._id)}
                                                    className="delete-btn"
                                                    title="Delete Contact"
                                                >
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
                                                    </svg>
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="no-data">No contacts found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminContacts;
