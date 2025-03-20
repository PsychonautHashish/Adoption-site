import { Link } from 'react-router-dom';
import { FiHome, FiHeart, FiInfo, FiMail, FiUsers } from 'react-icons/fi';
import '../styles/styles.css';

export default function Navigation() {
  return (
    <nav className="glass-nav">
      <div className="nav-content">
        <Link to="/" className="logo">Hopeful Hearts Adoption</Link>
        <div className="nav-links">
          <Link to="/"><FiHome /> Home</Link>
          <Link to="/children"><FiHeart /> Children</Link>
          <Link to="/about"><FiInfo /> About</Link>
          <Link to="/contact"><FiMail /> Contact</Link>
          <Link to="/faq"><FiUsers /> FAQ</Link>
        </div>
      </div>
    </nav>
  );
}