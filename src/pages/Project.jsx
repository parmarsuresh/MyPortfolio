import React, { useState } from 'react';
import './Portfolio.css'; 

// --- Data structured from Suresh Parmar's Resume (Image URLs removed) ---
const projectsData = [
    {
        id: 1,
        title: "Duo Tax - Outlook Integration",
        category: "Salesforce / AI",
        description: "A major integration project enabling full email functionality (send, reply, draft) within Salesforce, synchronized in real-time with Outlook.",
        tech: ["LWC", "Apex", "REST API", "AI/ChatGPT", "Triggers"],
    },
    {
        id: 2,
        title: "Recruitment Management System",
        category: "Salesforce",
        description: "A web-based application built on the Salesforce platform to streamline and automate the entire hiring process from screening to onboarding.",
        tech: ["Salesforce Platform", "Apex", "Flows", "LWC"],
    },
    {
        id: 3,
        title: "Online Ticket Booking System",
        category: "Salesforce",
        description: "A custom platform developed using LWC and Apex for event organizers, focusing on a seamless and secure user booking experience.",
        tech: ["LWC", "Apex", "Payment API (RazorPay)"],
    },
    {
        id: 4,
        title: "Restaurant Management System",
        category: "Salesforce",
        description: "A comprehensive Salesforce-powered application designed to manage and optimize daily restaurant operations efficiently.",
        tech: ["Salesforce Platform", "LWC", "Aura", "Reports"],
    },
    {
        id: 5,
        title: "Online Painting Selling & Buying System",
        category: "Full-Stack",
        description: "A robust full-stack web application serving as an online marketplace for artists to showcase and sell their works.",
        tech: ["Node.js", "React.js", "MongoDB", "Express"],
    },
];

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const filteredProjects = projectsData.filter(project => 
        activeFilter === 'All' ? true : project.category.includes(activeFilter)
    );

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container"> 
                {/* --- Section Header --- */}
                <h2 className="section-title">Portfolio</h2>
                <p className="section-subtitle">
                    Showcasing key projects and achievements across Salesforce Development, AI Integration, and Full-Stack development.
                </p>

                {/* --- Filter Tabs --- */}
                <div className="portfolio-filter">
                    {['All', 'Salesforce', 'AI', 'Full-Stack'].map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={activeFilter === category ? 'filter-active' : ''}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* --- Project Grid --- */}
                <div className="portfolio-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="portfolio-item-wrap">
                            <div className="portfolio-item">
                                
                                {/* .portfolio-info now acts as the card content wrapper */}
                                <div className="portfolio-info">
                                    <h4 className="project-title">{project.title}</h4>
                                    <p className="project-category">{project.category}</p>
                                    
                                    {/* Detailed Description Block - VISIBLE BY DEFAULT */}
                                    <div className="project-details">
                                        <p>{project.description}</p>
                                        <div className="tech-stack-list">
                                            {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                                        </div>
                                    </div>
                                    
                                    {/* Action Links (Appear on Hover) */}
                                    <div className="portfolio-links">
                                        <a href="#" title="View Project">🔗</a>
                                        <a href="#" title="More Details">🔍</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;