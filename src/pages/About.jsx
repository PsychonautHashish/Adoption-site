import { FiUsers, FiStar, FiTarget } from 'react-icons/fi';
import '../styles/styles.css';

export default function About() {
  return (
    <div className="page-container">
      <h1 className="page-title">Our Mission & Story</h1>
      
      <div className="glass-card about-intro">
        <h2>Creating Loving Families Since 2010</h2>
        <p>We are dedicated to connecting children in need with caring families through a compassionate and ethical adoption process.</p>
      </div>

      <div className="values-grid">
        <div className="glass-card value-card">
          <FiStar className="value-icon" />
          <h3>Our Vision</h3>
          <p>A world where every child grows up in a loving, supportive family environment.</p>
        </div>
        
        <div className="glass-card value-card">
          <FiTarget className="value-icon" />
          <h3>Our Mission</h3>
          <p>To facilitate ethical adoptions while providing comprehensive support to both children and families.</p>
        </div>
        
        <div className="glass-card value-card">
          <FiUsers className="value-icon" />
          <h3>Our Team</h3>
          <p>Experienced professionals committed to child welfare and family support services.</p>
        </div>
      </div>

      <div className="glass-card team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {[1, 2, 3].map((member) => (
            <div key={member} className="team-member">
              <img 
                src={`https://via.placeholder.com/150`} 
                alt="Team member" 
                className="team-photo"
              />
              <h4>Team Member {member}</h4>
              <p>Adoption Specialist</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}