import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* IMPORT PAGES */
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// OPTIONAL – Not Found Page
const NotFound = () => <h1 style={{ padding: "60px" }}>404 - Page Not Found</h1>;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app-container">
      {/* Always Scroll To Top When Changing Pages */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch All Unknown URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
