const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>

      <div className="skill-grid">

        <div className="skill-card">
          <h3>Salesforce Development</h3>
          <p>Apex, LWC, Triggers, Visualforce, Aura</p>
        </div>

        <div className="skill-card">
          <h3>Integrations</h3>
          <p>REST, SOAP, Platform Events, GraphQL</p>
        </div>

        <div className="skill-card">
          <h3>Automation</h3>
          <p>Flows, Process Builder, Batch Apex</p>
        </div>

        <div className="skill-card">
          <h3>Frontend & Backend</h3>
          <p>JavaScript, Node.js, PHP, Bootstrap</p>
        </div>

      </div>
    </section>
  );
};
export default Skills;