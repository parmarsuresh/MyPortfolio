import React from "react";
import "./About.css";
import myPhoto from "../assets/photo/myPhoto.jpg"; 
// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCakeCandles, 
  faBirthdayCake, 
  faGlobe, 
  faGraduationCap, 
  faPhone, 
  faEnvelope, 
  faLocationDot, 
  faCheckCircle,
  faChevronRight 
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const personalInfo = [
    { label: "Birthday", value: "1 May 1995", icon: faBirthdayCake },
    { label: "Age", value: "25", icon: faCakeCandles },
    { label: "Phone", value: "9327557977", icon: faPhone }, 
    { label: "Email", value: "parmarsuresh542001@gmail.com", icon: faEnvelope }, 
    { label: "Website", value: "github.com/parmarsuresh", icon: faGlobe }, 
    { label: "Degree", value: "MCA", icon: faGraduationCap }, 
    { label: "City", value: "Surat, Gujarat", icon: faLocationDot }, 
    { label: "Freelance", value: "Available", icon: faCheckCircle },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Certified Salesforce Developer and AI Specialist focused on delivering high-performance, scalable cloud solutions.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <img 
              src={myPhoto} 
              alt="Suresh Parmar" 
              className="about-profile-photo" 
            />
          </div>

          <div className="about-details">
            <h3 className="about-role-title">Certified Salesforce Developer & AI Specialist.</h3>
            <p className="about-role-description">
              Salesforce Developer with 2+ years of experience in designing and implementing scalable solutions. Proficient in Apex, LWC, REST APIs, and AI integrations.
            </p>

            <div className="about-info-grid">
              {personalInfo.map((item) => (
                <div key={item.label} className="about-info-item">
                  <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
                    <FontAwesomeIcon icon={item.icon} className="main-icon" />
                  </div>
                  <div className="info-text">
                    <strong>{item.label}:</strong> <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="about-paragraph-footer">
              Adept at collaborating with cross-functional teams, enhancing user experience, and optimizing business processes through innovative Salesforce solutions. Key projects include Outlook Integration and AI-driven automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;