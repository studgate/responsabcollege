import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Monitor, Globe, GraduationCap, Users, BookOpen, Lightbulb, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const KnowledgeExperience = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'University Life',
      description: 'Experience vibrant campus life with 300+ clubs, organizations, and activities.',
      color: 'from-purple-500 to-purple-700',
      image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad',
    },
    {
      icon: Monitor,
      title: 'Online Education',
      description: 'Flexible online programs designed for working professionals and remote learners.',
      color: 'from-amber-500 to-amber-700',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    },
    {
      icon: Globe,
      title: 'Campus Tours',
      description: 'Explore our beautiful campus virtually or in person. Schedule your visit today.',
      color: 'from-emerald-500 to-emerald-700',
      image: 'https://images.unsplash.com/photo-1496302662116-85c5c5410f46',
    },
  ];

  const imageGrid = [
    { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c', alt: 'Students in laboratory' },
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655', alt: 'Students collaborating' },
    { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902', alt: 'Students working on laptop' },
    { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846', alt: 'Student studying in library' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const nextImage = () => setCurrentImageIndex((i) => (i + 1) % imageGrid.length);
  const prevImage = () => setCurrentImageIndex((i) => (i - 1 + imageGrid.length) % imageGrid.length);

  return (
    <section className="py-20 bg-white" data-section="knowledge-experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            TO THE JOURNEY AHEAD
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gain Valuable <span className="text-gradient-primary">Knowledge & Experience</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to="/campus-life">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift hover-glow border border-gray-100 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Picture Gallery with Slider */}
        <div className="mt-12">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Campus Life Gallery</h3>
            <p className="text-gray-600 text-lg max-w-2xl">Explore the vibrant student life and beautiful campus through our photo gallery.</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video">
            <img
              src={imageGrid[currentImageIndex].src}
              alt={imageGrid[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-gray-900" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-gray-900" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {imageGrid.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white w-8' : 'bg-white/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link to="/campus-life" className="text-primary font-semibold inline-flex items-center hover:underline">
              Explore Campus Life <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeExperience;

