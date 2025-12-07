import "./About.css";
import myPhoto from "../assets/photo/myPhoto.jpg"; 
// NOTE: These are Unicode icon placeholders. 
// For a production app, replace them with actual components from a library like Lucide or Font Awesome.
const Icon = ({ name }) => {
    const icons = {
        birthday: '🎁', 
        age: '🎂',
        website: '🌐',
        degree: '🎓',
        phone: '📞',
        email: '✉️',
        city: '📍',
        freelance: '✅',
    };
    return <span className="icon">{icons[name] || '>'}</span>;
};

const About = () => {
 // Inside the About component:
  const personalInfo = [
    { label: "Birthday", value: "1 May 1995", icon: "birthday" }, // Assuming a placeholder birthday
    { label: "Age", value: "30", icon: "age" }, // Assuming a placeholder age
    // FIX: Remove citations tags from inside the array definition
    { label: "Phone", value: "9327557977", icon: "phone" }, 
    { label: "Email", value: "parmarsuresh542001@gmail.com", icon: "email" }, 
    { label: "Website", value: "github.com/parmarsuresh", icon: "website" }, 
    { label: "Degree", value: "MCA (Master of Computer Applications)", icon: "degree" }, 
    { label: "City", value: "Surat, Gujarat, India", icon: "city" }, 
    { label: "Freelance", value: "Available", icon: "freelance" },
  ];

  const renderInfoItem = (item) => (
    <div key={item.label} className="about-info-item">
      <Icon name={item.icon} />
      <strong>{item.label}:</strong> <span>{item.value}</span>
    </div>
  );


  const col1 = personalInfo.slice(0, Math.ceil(personalInfo.length / 2));
  const col2 = personalInfo.slice(Math.ceil(personalInfo.length / 2));

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
            As a Certified Salesforce Developer and AI Specialist, I focus on delivering high-performance, scalable solutions on the Salesforce platform.
        </p>

        <div className="about-content">
          <div className="about-image-container">
            <img 
              src={myPhoto} 
              alt="Profile" 
              className="about-profile-photo" 
            />
          </div>

          <div className="about-details">
            {/* UPDATED ROLE TITLE */}
            <h3 className="about-role-title">Certified Salesforce Developer & AI Specialist.</h3>
            
            {/* UPDATED ROLE DESCRIPTION/SUBTITLE */}
            <p className="about-role-description">
              Salesforce Developer with 2+ years of experience in designing and implementing scalable solutions on the Salesforce platform. Proficient in Apex, Lightning Web Components (LWC), REST APIs, and automation workflows.
            </p>

            {/* Personal Info Grid */}
            <div className="about-info-grid">
              <div className="info-column">{col1.map(renderInfoItem)}</div>
              <div className="info-column">{col2.map(renderInfoItem)}</div>
            </div>

            <p className="about-paragraph-footer">
              Adept at collaborating with cross-functional teams, enhancing user experience, and optimizing business processes through innovative Salesforce solutions. Key projects include Duo Tax - Outlook Integration, Recruitment Management System, and Restaurant Management System.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;