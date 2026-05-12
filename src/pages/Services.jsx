import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including SEO, SEM, social media marketing, and content creation.',
      icon: '📱'
    },
    {
      title: 'Brand Development',
      description: 'Complete brand identity creation, logo design, and brand strategy development.',
      icon: '🎨'
    },
    {
      title: 'Advertising Campaigns',
      description: 'Creative advertising campaigns across various media including print, digital, and outdoor.',
      icon: '📢'
    },
    {
      title: 'Market Research',
      description: 'In-depth market analysis and consumer research to inform your marketing strategies.',
      icon: '📊'
    },
    {
      title: 'Content Creation',
      description: 'High-quality content creation for websites, blogs, social media, and marketing materials.',
      icon: '✍️'
    },
    {
      title: 'Media Planning',
      description: 'Strategic media planning and buying to maximize your advertising ROI.',
      icon: '📺'
    }
  ];

  return (
    <div className="services section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;