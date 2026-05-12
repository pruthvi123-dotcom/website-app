import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-text"
          >
            <h3>DEEKSHITH INFRA SOLUTIONS INDIA PRIVATE LIMITED</h3>
            <p>Founded in 2023, DEEKSHITH INFRA SOLUTIONS INDIA PRIVATE LIMITED is a leading advertising agency based in Bangalore, Karnataka, India. We specialize in creating innovative advertising solutions that help businesses grow and succeed in today's competitive market.</p>
            <p>Our team of creative professionals brings years of experience in digital marketing, brand development, and strategic advertising. We believe in delivering exceptional results through cutting-edge strategies and personalized approaches.</p>
            <p>At DEEKSHITH INFRA SOLUTIONS, we are committed to excellence, innovation, and building long-lasting relationships with our clients. Our mission is to elevate your brand and drive meaningful results.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="about-image"
          >
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Our Team" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;