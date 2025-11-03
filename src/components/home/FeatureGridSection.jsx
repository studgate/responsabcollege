import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureGridSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c',
      title: 'Science Laboratory',
      description: 'State-of-the-art research facilities',
      options: [
        { label: 'View Labs', link: '/departments' },
        { label: 'Research Programs', link: '/programs' },
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
      title: 'Study & Collaboration',
      description: 'Modern spaces for learning together',
      options: [
        { label: 'Campus Facilities', link: '/campus-life' },
        { label: 'Library', link: '/library' },
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
      title: 'Professional Development',
      description: 'Career-focused learning environments',
      options: [
        { label: 'Career Services', link: '/admissions' },
        { label: 'Internships', link: '/programs' },
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
      title: 'Library & Research',
      description: 'Extensive resources for academic excellence',
      options: [
        { label: 'Library Resources', link: '/library' },
        { label: 'Research Support', link: '/departments' },
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative z-0" data-section="feature-grid">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
          Experience ResponsabCollege
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Discover the diverse opportunities and world-class facilities that make ResponsabCollege a premier destination for education.
        </p>
      </motion.div>

      {/* Desktop: All 4 cards in a single row - Mobile: Horizontal scroll */}
      <div className="hidden lg:flex gap-4 h-64 px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => {
          const isHovered = hoveredIndex === index;
          const baseWidth = 100 / 4; // 25% each
          // When hovering: hovered card expands to 40%, others shrink to 20% each
          const expandedWidth = hoveredIndex !== null
            ? (isHovered ? 40 : 20)
            : baseWidth;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl cursor-pointer"
              style={{ 
                width: `${expandedWidth}%`,
                transition: 'width 0.3s ease'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-full">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Always show title and description */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {feature.description}
                  </p>
                  {/* Show options on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2"
                      >
                        {feature.options.map((option, optIndex) => (
                          <Link
                            key={optIndex}
                            to={option.link}
                            className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg transition-all flex items-center justify-between group"
                          >
                            <span className="font-medium text-sm">{option.label}</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: Horizontal scrolling cards */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
        <div className="flex gap-4 min-w-max pb-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl w-[280px] h-64 flex-shrink-0 touch-manipulation"
            >
              <div className="relative w-full h-full">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-3">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.options.map((option, optIndex) => (
                      <Link
                        key={optIndex}
                        to={option.link}
                        className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-3 py-2.5 rounded-lg transition-all flex items-center justify-between group touch-manipulation"
                      >
                        <span className="font-medium text-sm">{option.label}</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;

