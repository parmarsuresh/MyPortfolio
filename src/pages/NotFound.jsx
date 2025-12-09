import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "./NotFound.css";

const NotFound = () => {
    // Hook to handle programmatic navigation
    const navigate = useNavigate();

    // Function to handle button click and redirect to the home page
    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className="not-found-container">
            <div className="content-box">
                {/* Optional: Add a playful emoji or icon */}
                <span className="icon" role="img" aria-label="Lost">
                    🧭
                </span>
                
                <h1 className="error-code">404</h1>
                
                <h2 className="title">Page Not Found</h2>
                
                <p className="description">
                    It looks like you've wandered into uncharted territory.
                    The link you followed may be broken, or the page may have been removed.
                </p>

                {/* Main Action Button */}
                <button 
                    className="home-button" 
                    onClick={handleGoHome}
                >
                    Go Back to Homepage
                </button>
                
                {/* Secondary Helpful Links */}
                <div className="support-links">
                    <a href="/search" className="link">Try Searching</a>
                    <span className="separator">|</span>
                    <a href="/contact" className="link">Contact Support</a>
                </div>
            </div>
        </div>
    );
};

// **Note:** I've corrected the export name to match the component name.
export default NotFound;