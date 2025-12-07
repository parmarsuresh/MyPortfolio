import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    // 🚨 IMPORTANT: Use the correct, verified Formspree hash ID.
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/meoylozn"; 

    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '', // State key is 'email'
        subject: '',
        message: ''
    });

    // State for UI feedback
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null); // 'success', 'error', or null

    const handleChange = (e) => {
        // Clear any previous status message on input change
        setStatusMessage(null);
        // Correctly uses e.target.name (which is 'name', 'email', 'subject', or 'message')
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage(null); // Clear previous status

        // 🔑 CRITICAL FIX: Destructure and rename the email key for Formspree
        const { email, ...restOfData } = formData;
        const payload = {
            ...restOfData,
            // Formspree requires the sender's email to be named '_replyto'
            // or sometimes just 'email' for a proper reply function. 
            // We use '_replyto' for explicit compatibility.
            _replyto: email 
        };

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Send the structured payload
                body: JSON.stringify(payload), 
            });

            if (response.ok) {
                // SUCCESS: Show popup, clear form inputs
                setStatusMessage('success');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Value vanish
            } else {
                // ERROR: Show error message
                setStatusMessage('error');
            }
        } catch (error) {
            console.error("Form Submission Error:", error);
            setStatusMessage('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Helper function to render the status message popup
    const renderStatus = () => {
        if (!statusMessage) return null;

        let messageText = "";
        let isSuccess = statusMessage === 'success';

        if (isSuccess) {
            messageText = "✅ Message Sent Successfully! We'll get back to you soon.";
        } else {
            messageText = "❌ Error: Could not send message. Please check your Formspree ID or try again later.";
        }

        return (
            <div className={`status-popup ${isSuccess ? 'success' : 'error'}`}>
                {messageText}
            </div>
        );
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Contact</h2>
                    <p className="section-subtitle">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div>

                <div className="contact-content">
                    {/* --- Left Column: Info and Map (unchanged) --- */}
                    <div className="contact-info-col">
                        {/* ... Info Cards ... */}
                        <div className="map-container">
                            <iframe
                                src="https://maps.google.com/maps?q=21.17,72.83&z=12&ie=UTF8&output=embed"
                                frameBorder="0"
                                style={{ border: 0, width: '100%', height: '270px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map Location (Surat, Gujarat)"
                            ></iframe>
                        </div>
                    </div>

                    {/* --- Right Column: Contact Form --- */}
                    <div className="contact-form-col">
                        {/* Render status message at the top of the form */}
                        {renderStatus()}

                        <form
                            onSubmit={handleSubmit} // Use JavaScript submission
                            className="email-form"
                        >
                            <div className="row">
                                <div className="form-group half-width">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group half-width">
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        name="email" // 🔑 CORRECTED: Matches state key
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="10"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
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