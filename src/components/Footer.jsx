import React from "react";
import trailheadLogo from "../assets/trailhead.png";
import "./Footer.css";
// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="suresh-footer">
            <div className="container">
                <div className="footer-content">
                    
                    {/* COPYRIGHT */}
                    <p className="footer-copy">
                        &copy; {new Date().getFullYear()} <strong>Suresh Parmar</strong>. All Rights Reserved.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="social-links">
                        <a href="https://github.com/parmarsuresh" target="_blank" rel="noreferrer" title="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <a href="https://www.linkedin.com/in/suresh-p-b1803a219/" target="_blank" rel="noreferrer" title="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>

                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" title="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>

                        {/* TRAILHEAD */}
                        <a href="https://www.salesforce.com/trailblazer/sparmar103" target="_blank" rel="noreferrer" className="trailhead-link" title="Trailhead">
                            <img src={trailheadLogo} className="trailhead-icon" alt="Trailhead" />
                        </a>
                    </div>

                    {/* DESIGNED BY */}
                    <p className="designer-text">
                        Designed by <span>Suresh Parmar</span> 
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;