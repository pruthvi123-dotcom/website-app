import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="footer"
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DEEKSHITH INFRA SOLUTIONS INDIA PRIVATE LIMITED</h3>
            <p>Your trusted advertising agency for innovative solutions.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Email: info@deekshith.com</p>
            <p>Phone: +91 7022662105</p>
            <p>Address: Bangalore, Karnataka, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 DEEKSHITH INFRA SOLUTIONS INDIA PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;