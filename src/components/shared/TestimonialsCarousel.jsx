import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsCarousel = ({ testimonials = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const defaultTestimonials = [
    {
      id: 1,
      name: 'Sarah Martinez',
      role: 'Computer Science, Class of 2024',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      quote: 'ResponsabCollege transformed my life. The supportive community and innovative programs prepared me for a career at a top tech company.',
      rating: 5,
    },
    {
      id: 2,
      name: 'James Chen',
      role: 'Business Administration, Class of 2023',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      quote: 'The faculty here are incredible. They don\'t just teach—they mentor. I landed my dream internship through connections I made at ResponsabCollege.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: 'Engineering, Class of 2025',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      quote: 'The hands-on learning approach here is unmatched. I\'ve worked on real-world projects that directly led to job offers.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Graduate Student, MBA',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      quote: 'Coming back for my MBA was the best decision. The network I\'ve built and the knowledge I\'ve gained are invaluable.',
      rating: 5,
    },
  ];

  const items = testimonials.length > 0 ? testimonials : defaultTestimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const goToSlide = (index, newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50" data-section="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-gradient-primary">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from the students who are shaping their futures at ResponsabCollege
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 md:h-80 overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-purple-100 shadow-lg">
                    <img
                      src={items[currentIndex].image}
                      alt={items[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <Quote className="w-12 h-12 text-primary/30 mx-auto mb-4" />

                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(items[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-gray-700 text-center mb-6 font-medium leading-relaxed">
                  "{items[currentIndex].quote}"
                </p>

                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">{items[currentIndex].name}</p>
                  <p className="text-sm text-gray-500">{items[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => goToSlide((currentIndex - 1 + items.length) % items.length, -1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-purple-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => goToSlide((currentIndex + 1) % items.length, 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-purple-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index, index > currentIndex ? 1 : -1)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

