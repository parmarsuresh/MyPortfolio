const Portfolio = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>

      <div className="project-grid">

        <div className="project-card">
          <h3>DuoTax Outlook Integration</h3>
          <p>Email sync, LWC interface, AI-powered drafting, REST API integration.</p>
        </div>

        <div className="project-card">
          <h3>Recruitment Management System</h3>
          <p>Automated workflows, resume screening, interview tracking.</p>
        </div>

        <div className="project-card">
          <h3>Restaurant Management</h3>
          <p>Reservations, staff scheduling, dashboards & inventory.</p>
        </div>

        <div className="project-card">
          <h3>Ticket Booking Platform</h3>
          <p>Seat selection, real-time availability & payment integration.</p>
        </div>

      </div>
    </section>
  );
};
export default Portfolio;