import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykzvjnn"; 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: null, message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: "" });

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData), // Formspree handles 'email' automatically now
            });

            if (response.ok) {
                setStatus({ 
                    type: 'success', 
                    message: "✅ Message Sent! I'll get back to you soon." 
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ 
                    type: 'error', 
                    message: "❌ Something went wrong. Please try again." 
                });
            }
        } catch (error) {
            setStatus({ 
                type: 'error', 
                message: "❌ Connection error. Check your internet." 
            });
        } finally {
            setIsSubmitting(false);
            // Automatically hide status after 5 seconds
            setTimeout(() => setStatus({ type: null, message: "" }), 5000);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Contact Me</h2>
                    <p className="section-subtitle">Have a project in mind? Let's build something great together.</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info-col">
                        <div className="contact-info-card">
                            <div className="info-item">
                                <div className="icon-box"><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div><h4>Location:</h4><p>Surat, Gujarat, India</p></div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><FontAwesomeIcon icon={faPhone} /></div>
                                <div><h4>Call:</h4><p>+91 9327557977</p></div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><FontAwesomeIcon icon={faEnvelope} /></div>
                                <div><h4>Email:</h4><p>parmarsuresh542001@gmail.com</p></div>
                            </div>
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.6372739284!2d72.682208!3d21.1702401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000"
                                    style={{ border: 0, width: '100%', height: '100%' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Surat Location Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-col">
                        {status.type && (
                            <div className={`status-popup ${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="email-form">
                            <div className="row">
                                <div className="form-group half-width">
                                    <label>Your Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group half-width">
                                    <label>Your Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="send-message-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;