import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForEaglesGallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Gallery pages - each page has 5 images (1 large + 4 small)
  const galleryPages = [
    {
      large: {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
        alt: 'Boston College campus building with red ivy',
      },
      small: [
        { src: 'https://images.unsplash.com/photo-1496302662116-85c5c5410f46', alt: 'Walsh Hall building' },
        { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655', alt: 'Students gathering on campus lawn' },
        { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', alt: 'Students with red headbands at campus event' },
        { src: 'https://images.unsplash.com/photo-1496302662116-85c5c5410f46', alt: 'Autumn campus pathway with gothic building' },
      ],
    },
    {
      large: {
        src: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51',
        alt: 'Students studying in library',
      },
      small: [
        { src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b', alt: 'Campus quad' },
        { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c', alt: 'Science laboratory' },
        { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902', alt: 'Students collaborating' },
        { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846', alt: 'Library study area' },
      ],
    },
    {
      large: {
        src: 'https://images.unsplash.com/photo-1496302662116-85c5c5410f46',
        alt: 'Campus building facade',
      },
      small: [
        { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', alt: 'Graduation ceremony' },
        { src: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51', alt: 'Academic building' },
        { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655', alt: 'Student activities' },
        { src: 'https://images.unsplash.com/photo-1496302662116-85c5c5410f46', alt: 'Campus gardens' },
      ],
    },
    {
      large: {
        src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b',
        alt: 'Students walking on campus',
      },
      small: [
        { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c', alt: 'Research facility' },
        { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902', alt: 'Classroom discussion' },
        { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846', alt: 'Study space' },
        { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', alt: 'Campus event' },
      ],
    },
  ];

  const totalPages = galleryPages.length;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const currentGallery = galleryPages[currentPage];

  return (
    <section className="py-20 bg-white relative z-10 overflow-hidden" data-section="for-eagles-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
            For ResponsabCollege, By ResponsabCollege
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ResponsabCollege's social media has been ranked among the top university accounts in higher education. See what sets us apart on ResponsabCollege Social.
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-lg">
          {/* Gallery Grid */}
          <div className="grid grid-cols-3 gap-4 h-[600px] relative">
            {/* Large Left Image */}
            <div className="col-span-1 overflow-hidden rounded-lg relative z-0">
              <motion.img
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={currentGallery.large.src}
                alt={currentGallery.large.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* 2x2 Grid of Small Images */}
            <div className="col-span-2 grid grid-cols-2 gap-4 relative z-0">
              {currentGallery.small.map((img, index) => (
                <div key={`${currentPage}-${index}`} className="overflow-hidden rounded-lg">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Bottom Left and Right */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-30">
            <button
              onClick={prevPage}
              className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2 items-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    index === currentPage
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/90 text-gray-700 hover:bg-white'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEaglesGallery;

