import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/styles.css';

export default function Home() {
  return (
    <div className="page-container">
      <section className="hero glass-card">
        <div className="hero-content">
          <h1>Find Your Forever Family</h1>
          <p>Connecting loving homes with children in need</p>
          <Link to="/children" className="cta-button">
            Meet the Children <FiArrowRight />
          </Link>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="glass-card stat-item">
            <h3>500+</h3>
            <p>Successful Adoptions</p>
          </div>
          <div className="glass-card stat-item">
            <h3>100+</h3>
            <p>Happy Families</p>
          </div>
          <div className="glass-card stat-item">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </section>
    </div>
  );
}