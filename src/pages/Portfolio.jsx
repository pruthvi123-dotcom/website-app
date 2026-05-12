import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Brand Identity for Tech Startup',
      description: 'Complete brand identity including logo, website, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80',
      category: 'Branding'
    },
    {
      title: 'Digital Campaign for E-commerce',
      description: 'Successful digital marketing campaign that increased sales by 150%.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      category: 'Digital Marketing'
    },
    {
      title: 'Outdoor Advertising Campaign',
      description: 'Eye-catching outdoor advertisements that boosted brand awareness.',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Advertising'
    },
    {
      title: 'Content Marketing Strategy',
      description: 'Comprehensive content strategy that engaged audience and drove traffic.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Content'
    },
    {
      title: 'Social Media Management',
      description: 'Social media strategy that grew followers by 300% in 6 months.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      category: 'Social Media'
    },
    {
      title: 'Website Redesign',
      description: 'Modern website redesign that improved user experience and conversions.',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Web Design'
    }
  ];

  return (
    <div className="portfolio section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </motion.h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="portfolio-item"
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="category">{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;