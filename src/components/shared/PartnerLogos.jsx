import React from 'react';
import { motion } from 'framer-motion';

const PartnerLogos = () => {
  // Placeholder company names/logos - in a real app, these would be actual logo images
  const partners = [
    { name: 'TechCorp', logo: 'https://via.placeholder.com/120x60/667eea/ffffff?text=TechCorp' },
    { name: 'Global Industries', logo: 'https://via.placeholder.com/120x60/764ba2/ffffff?text=Global' },
    { name: 'Innovate Labs', logo: 'https://via.placeholder.com/120x60/667eea/ffffff?text=Innovate' },
    { name: 'Future Systems', logo: 'https://via.placeholder.com/120x60/764ba2/ffffff?text=Future' },
    { name: 'Digital Solutions', logo: 'https://via.placeholder.com/120x60/667eea/ffffff?text=Digital' },
    { name: 'Enterprise Group', logo: 'https://via.placeholder.com/120x60/764ba2/ffffff?text=Enterprise' },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100" data-section="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Trusted Partners
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Where Our <span className="text-gradient-primary">Graduates Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover-lift"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;

