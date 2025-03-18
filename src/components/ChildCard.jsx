import { Link } from 'react-router-dom';
import '../styles/styles.css';

export default function ChildCard({ child }) {
  return (
    <div className="child-card glass-card">
      <img 
        src="https://via.placeholder.com/300" 
        alt={child.name} 
        className="child-image"
      />
      <div className="child-info">
        <h3>{child.name}, {child.age}</h3>
        <p>{child.location}</p>
        <p className="child-bio">{child.bio}</p>
        <Link to={`/child/${child.id}`} className="cta-button">View Profile</Link>
      </div>
    </div>
  );
}