import { motion } from 'framer-motion';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Could not send your message.');
      }

      alert(result.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('There was a problem sending your message. Please try again later.');
    }
  };

  return (
    <div className="contact section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-form"
          >
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
            <div className="contact-buttons">
              <a href="https://wa.me/917022662105" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                <span>💬</span> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="contact-info"
          >
            <h3>Contact Information</h3>
            <div className="info-item">
              <h4>Address</h4>
              <p>Bangalore, Karnataka, India</p>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <p>+91 7022662105</p>
            </div>
            <div className="info-item">
              <h4>Email</h4>
              <p>info@deekshith.com</p>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps?q=No.%20176%2C%202nd%20Main%20Road%2C%204th%20Cross%20Road%2C%2013th%20Block%2C%20Nagarabhavi%202nd%20Stage%2C%20Bengaluru%20560072&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;