import React, { useEffect, useRef } from "react";
import "./Home.css";
import heroBg from "../assets/photo/home-bg.jpg";  
import resumePDF from "../assets/resume.pdf";
import Typed from "typed.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Salesforce Developer",
        "LWC Specialist",
        "API Integrator",
        "Apex Expert",
        "Full Stack Developer"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="home-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="home-overlay"></div>

      <div className="home-content-card">
        <div className="home-text-wrapper">
          <p className="welcome-tag">Welcome to my Portfolio</p>
          <h1>
            Hello, I'm <span>Suresh Parmar</span>
          </h1>

          <h2 className="typed-text-header">
            I am a <span ref={typedRef} className="typed-span"></span>
          </h2>

          <p className="home-description">
            Specializing in high-performance Salesforce solutions, automating complex workflows, 
            and building seamless integrations that drive business growth.
          </p>

          <div className="cta-wrapper">
            <a href={resumePDF} className="resume-btn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFileArrowDown} className="btn-icon" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Visual Scroll Down Indicator */}
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Home;