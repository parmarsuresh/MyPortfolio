import React, { useState, useEffect } from 'react';
import './Skills.css'; 

// --- Data based on Suresh Parmar's Resume ---
const coreSkillsData = [
  { name: "Apex / Triggers / Batch Apex", percentage: 95, detail: "Backend logic, asynchronous operations, and efficient data handling." },
  { name: "LWC / Aura Components", percentage: 90, detail: "Building modern, reusable, and responsive user interfaces on Lightning." },
  { name: "REST / SOAP API Integrations", percentage: 85, detail: "Experience with bi-directional data sync and connecting third-party systems." },
  { name: "Flows & Automation (Process Builder)", percentage: 95, detail: "Expertise in declarative automation and business process optimization." },
  { name: "SOQL / SOSL / Database", percentage: 90, detail: "Efficient data querying and manipulation on the Force.com platform." },
  { name: "UI Design (SLDS / Bootstrap)", percentage: 80, detail: "Creating intuitive interfaces using Lightning Design System and CSS frameworks." },
];

const expertiseData = [
  { title: "Languages & Frontend", list: ["JavaScript", "PHP", "Node.js", "React.js", "jQuery"] },
  { title: "Integrations & Platform", list: ["Platform Events", "GraphQL", "External Services", "RazorPay Integration"] },
  
  // UPDATED: Focused purely on IDEs and standard dev tools
  { title: "Dev Tools & IDEs", list: ["VS Code", "Workbench", "Force.com IDE", "SFDX CLI"] },
  
  // UPDATED: Focused purely on Salesforce-related data migration tools
  { title: "Data Migration", list: ["Salesforce Data Loader", "Data Import Wizard", "Dataloader.io"] }, 
];

// --- Animated Progress Bar Component ---
const ProgressBar = ({ name, percentage, detail }) => {
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    // This hook animates the bar from 0 to the target percentage on mount
    const timer = setTimeout(() => {
      setCurrentWidth(percentage);
    }, 100); 

    return () => clearTimeout(timer); // Cleanup
  }, [percentage]);

  return (
    <div key={name} className="skill-progress-item">
      <div className="skill-name-percent">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{percentage}%</span>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${currentWidth}%` }}
        ></div>
      </div>
      <p className="skill-detail">{detail}</p>
    </div>
  );
};

// --- Main Skills Component ---
const Skills = () => {

  const renderExpertiseCard = (item) => (
    <div key={item.title} className="expertise-card">
      <h4 className="card-title">{item.title}</h4>
      <ul className="expertise-list">
        {item.list.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        {/* --- Section Header --- */}
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A comprehensive overview of my core technical proficiencies, development platforms, and tools.
        </p>

        {/* --- Core Skills (Progress Bars) --- */}
        <div className="core-skills-header">
            <h3>Core Development Proficiency</h3>
        </div>
        <div className="skills-progress-grid">
          {coreSkillsData.map((skill) => (
              <ProgressBar key={skill.name} {...skill} />
          ))}
        </div>
        
        {/* --- Key Expertise (Cards) --- */}
        <div className="expertise-header">
            <h3>Tools & Supplementary Expertise</h3>
        </div>
        <div className="expertise-grid">
            {expertiseData.map(renderExpertiseCard)}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;