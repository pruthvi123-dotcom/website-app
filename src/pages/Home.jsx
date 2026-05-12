import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Welcome to DEEKSHITH INFRA SOLUTIONS INDIA PRIVATE LIMITED</h1>
          <p>Your premier advertising agency delivering innovative solutions for your brand.</p>
          <Link to="/contact" className="btn">Get Started</Link>
        </motion.div>
      </section>

      <section className="features section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us?
          </motion.h2>
          <div className="features-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="feature-card"
            >
              <h3>Innovation</h3>
              <p>Cutting-edge advertising strategies that set you apart.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="feature-card"
            >
              <h3>Expertise</h3>
              <p>Years of experience in the advertising industry.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="feature-card"
            >
              <h3>Results</h3>
              <p>Proven track record of delivering exceptional results.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;