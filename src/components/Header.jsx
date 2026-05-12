import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>DEEKSHITH INFRA</h1>
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;