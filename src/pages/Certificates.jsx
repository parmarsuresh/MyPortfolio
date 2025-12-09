import React, { useState, useEffect } from 'react';
import './Certificates.css';

// --- Image Imports (Paths remain the same) ---
import PD1 from "../assets/certificate/Platform_Developer_1.jpg";
import AIAssociateCert from "../assets/certificate/AI_Associate.jpg";
import AISpecialist from "../assets/certificate/AI_Specialist.jpg";
import Copado1 from "../assets/certificate/CopadoCertifiedCONSULTANT.jpg";
import Copado2 from "../assets/certificate/Copado Certified COPADO ESSENTIALS+.jpg";
import Copado3 from "../assets/certificate/Copado Certified COPADO ROBOTIC TESTING.jpg";
import Copado4 from "../assets/certificate/Copado Certified EXTENSION BUILDER.jpg";
import Copado5 from "../assets/certificate/Copado Certified FUNDAMENTALS I MP.jpg";
import Copado6 from "../assets/certificate/Copado Certified FUNDAMENTALS I SFP.jpg";
import Copado7 from "../assets/certificate/Copado Certified FUNDAMENTALS II MP.jpg";
import Copado8 from "../assets/certificate/Copado Certified FUNDAMENTALS II SFP.jpg";
import JsBasic from "../assets/certificate/javascript_basic certificate.jpg";
import JsIntermediate from "../assets/certificate/javascript_intermediate certificate.jpg";


const certificatesData = [
    // ... (Your existing certificatesData array here)
    { 
        id: 1, 
        title: "Platform Developer I", 
        issuer: "Salesforce (Jan 05 2025)", 
        imagePath: PD1
    },
    { 
        id: 2, 
        title: "AI Specialist", 
        issuer: "Salesforce (Jan 09 2025)", 
        imagePath: AISpecialist
    },
    { 
        id: 3, 
        title: "AI Associate", 
        issuer: "Salesforce (Nov 09 2024)", 
        imagePath: AIAssociateCert
    },
    { 
        id: 4, 
        title: "Copado Certified CONSULTANT", 
        issuer: "Copado (Nov 12 2025)", 
        imagePath: Copado1
    },
    { 
        id: 5, 
        title: "Copado Certified ESSENTIALS+", 
        issuer: "Copado (Nav 06 2025)", 
        imagePath: Copado2
    },
    { 
        id: 6, 
        title: "Copado Certified COPADO ROBOTIC TESTING", 
        issuer: "Copado (Nav 06 2025)", 
        imagePath: Copado3
    },
    { 
        id: 7, 
        title: "Copado Certified EXTENSION BUILDER", 
        issuer: "Copado (Nav 06 2025)", 
        imagePath: Copado4
    },
    { 
        id: 8, 
        title: "Copado Certified FUNDAMENTALS I MP", 
        issuer: "Copado (Nav 06 2025)", 
        imagePath: Copado5
    },
    { 
        id: 9, 
        title: "Copado Certified FUNDAMENTALS I SFP", 
        issuer: "Copado (Nav 06 2025)", 
        imagePath: Copado6
    },
    { 
        id: 10, 
        title: "Copado Certified FUNDAMENTALS II MP", 
        issuer: "Copado (Nav 06 2025)", 
        imagePath: Copado7
    },
    { 
        id: 11, 
        title: "Copado Certified FUNDAMENTALS II SFP", 
        issuer: "Copado (Nav 06 2025)", 
        imagePath: Copado8
    },
    { 
        id: 12, 
        title: "Javascript Basic Certificate", 
        issuer: "HackerRank (Sep 29 2024)", 
        imagePath: JsBasic
    },
    { 
        id: 13, 
        title: "Javascript Intermediate Certificate", 
        issuer: "HackerRank (Sep 30 2024)",  
        imagePath: JsIntermediate
    },
];


const Certificates = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imagePath) => {
        setSelectedImage(imagePath);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    // --- EFFECT: Toggle body scroll lock when modal state changes ---
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);


    return (
        <div className="certificates-page-container">
            <header className="page-header">
                <h1>🏆 My Achievements & Certifications</h1>
                <p>A collection of my professional and technical qualifications, demonstrating commitment to continuous learning.</p>
            </header>

            <main className="certificates-grid">
                {certificatesData.map((cert) => (
                    <div key={cert.id} className="certificate-card">
                        <div className="certificate-image-wrapper" onClick={() => openModal(cert.imagePath)}>
                            <img 
                                src={cert.imagePath} 
                                alt={cert.title} 
                                loading="lazy"
                                // Conditionally apply a higher brightness filter to the known dark image
                                className={cert.title === "AI Specialist" ? "cert-image dark-fix" : "cert-image"}
                            />
                        </div>
                        <div className="certificate-info">
                            <h3>{cert.title}</h3>
                            <p className="issuer">Issued by: {cert.issuer}</p>
                        </div>
                    </div>
                ))}

                {certificatesData.length === 0 && (
                    <p className="no-certs">No certificates found. Check back soon!</p>
                )}
            </main>

            {/* --- Modal/Lightbox Component --- */}
            {selectedImage && (
                <div className="modal-backdrop" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>
                            &times;
                        </button>
                        <img 
                            src={selectedImage} 
                            alt="Full-size Certificate" 
                            className="modal-image" 
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificates;