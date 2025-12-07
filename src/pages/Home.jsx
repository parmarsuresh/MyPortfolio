import "./Home.css";
import heroBg from "../assets/home-bg.jpg";  
import resumePDF from "../assets/resume.pdf";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

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
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      className="home-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="overlay"></div>

      <div className="home-content">
        <h1>
          Hello, I'm <span>Suresh Parmar</span>
        </h1>

        {/* TYPING ANIMATION */}
        <h2>
          <span ref={typedRef}></span>
        </h2>

        <p>
          I build scalable Lightning Web Components, automate workflows,
          and integrate Salesforce with powerful APIs to deliver impactful solutions.
        </p>

        <a href={resumePDF} className="hire-btn" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
