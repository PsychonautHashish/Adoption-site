import { useParams } from 'react-router-dom';
import { FiArrowLeft, FiHeart, FiMapPin, FiCalendar } from 'react-icons/fi';
import Gallery from '../components/Gallery';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

export default function ChildProfile() {
  const { id } = useParams();
  
  // Sample data - replace with real API call
  const child = {
    id: 1,
    name: 'Emma',
    age: 5,
    location: 'New York',
    bio: 'Loves drawing and animals',
    story: 'Emma came to us in 2020. She is a cheerful child who enjoys creative activities...',
    images: [
      'https://via.placeholder.com/800x500',
      'https://via.placeholder.com/800x500'
    ]
  };

  return (
    <div className="page-container">
      <Link to="/children" className="back-button">
        <FiArrowLeft /> Back to Children
      </Link>
      
      <div className="profile-header glass-card">
        <div className="profile-main">
          <img 
            src="https://via.placeholder.com/300" 
            alt={child.name} 
            className="profile-image"
          />
          <div className="profile-info">
            <h1>{child.name}, {child.age}</h1>
            <div className="profile-meta">
              <p><FiMapPin /> {child.location}</p>
              <p><FiCalendar /> Available for adoption</p>
            </div>
            <button className="cta-button">
              <FiHeart /> Start Adoption Process
            </button>
          </div>
        </div>
        
        <div className="profile-details">
          <h2>About {child.name}</h2>
          <p>{child.story}</p>
        </div>
      </div>

      <Gallery images={child.images} />
    </div>
  );
}