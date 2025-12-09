import React from "react";
import trailheadLogo from "../assets/trailhead.png"
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="suresh-footer">
            <div className="footer-container text-center">

                {/* COPYRIGHT */}
                <p className="footer-copy">
                    © Copyright <strong>Suresh Parmar</strong> All Rights Reserved
                </p>

                {/* SOCIAL ICONS */}
                <div className="social-links">

                    <a href="https://github.com/parmarsuresh" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/suresh-p-b1803a219/" target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>

                    <a href="https://www.instagram.com/" target="_blank">
                        <i className="bi bi-instagram"></i>
                    </a>

                    {/* TRAILHEAD */}
                    <a href="https://www.salesforce.com/trailblazer/sparmar103" target="_blank">
                     <img src={trailheadLogo} className="trailhead-icon" alt="Trailhead" />
                    </a>



                </div>

                {/* DESIGNED BY */}
                <p className="designer-text">
                    Designed by <span>Suresh Parmar</span> • Powered by React
                </p>

            </div>
        </footer>
    );
};

export default Footer;
