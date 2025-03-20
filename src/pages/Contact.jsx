import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import '../styles/styles.css';

export default function Contact() {
  return (
    <div className="page-container">
      <h1 className="page-title">Get in Touch</h1>
      
      <div className="contact-container">
        <div className="glass-card contact-info">
          <h2>Contact Information</h2>
          <div className="contact-item">
            <FiMapPin className="contact-icon" />
            <p>123 Hope Street<br />Nairobi, Kenya 00100</p>
          </div>
          <div className="contact-item">
            <FiMail className="contact-icon" />
            <p>mbuthiaeddy@gmail/com</p>
          </div>
          <div className="contact-item">
            <FiPhone className="contact-icon" />
            <p>+254 793631331</p>
          </div>
        </div>

        <form className="glass-card contact-form">
          <h2>Send Us a Message</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" required />
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}