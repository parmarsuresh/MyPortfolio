import React, { useState } from 'react';
import './Portfolio.css';

const projectsData = [
    {
        id: 1,
        title: "Mburs – Taxi Service Management",
        category: "Experience Cloud",
        description: "Experience Cloud portal with role-based dashboards (Admin, Driver, Manager). Features a dynamic LWC dashboard and FullCalendar.js integration for trip visualization.",
        tech: ["LWC", "Apex", "Experience Cloud", "FullCalendar.js", "Flows"],
    },
    {
        id: 2,
        title: "Outlook Integration Project",
        category: "AI / Integration",
        description: "Full email functionality within Salesforce (Send/Reply/Draft). Includes ChatGPT-powered AI drafting and real-time REST API sync with Outlook.",
        tech: ["LWC", "Apex", "REST API", "ChatGPT AI", "Triggers"],
    },
    {
        id: 3,
        title: "Salesforce–HubSpot Integration",
        category: "Integration",
        description: "Bi-directional real-time sync for Contact records between Salesforce and HubSpot using REST APIs with robust error handling and retry logic.",
        tech: ["REST API", "Apex", "HubSpot API", "Integration"],
    },
    {
        id: 4,
        title: "SOP – System Optimization Process",
        category: "Salesforce",
        description: "Internal Trailhead-style learning platform. Features hierarchical learning paths (Journeys/Steps) with progress tracking and visual indicators.",
        tech: ["LWC", "Apex", "Custom Metadata", "UX Design"],
    },
    {
        id: 5,
        title: "Recruitment Management System",
        category: "Salesforce",
        description: "End-to-end automation of the hiring process. Includes automated resume screening, interview tracking, and a recruiter-friendly LWC interface.",
        tech: ["Salesforce Platform", "Apex", "Flows", "LWC"],
    },
];

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'Experience Cloud', 'AI / Integration', 'Integration', 'Salesforce'];

    const filteredProjects = projectsData.filter(project =>
        activeFilter === 'All' ? true : project.category.includes(activeFilter)
    );

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Showcasing specialized solutions in Salesforce Development, System Integration, and AI-driven automation.
                    </p>
                </div>

                <div className="portfolio-filter">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={activeFilter === category ? 'filter-active' : ''}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="portfolio-item-wrap">
                            <div className="portfolio-info">
                                <span className="project-category-badge">{project.category}</span>
                                <h4 className="project-title">{project.title}</h4>
                                <p className="project-description">{project.description}</p>
                                
                                <div className="tech-stack-list">
                                    {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                                </div>

                                <div className="portfolio-links">
                                    <a href="#" className="link-icon" title="View Case Study">Case Study →</a>
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