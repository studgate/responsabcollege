import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExploreOtherPrograms = () => {
  const programs = [
    {
      title: 'Graduate Certificates',
      description: 'Develop new skills and build expertise to advance your career.',
      link: '/programs?type=graduate-certificates',
    },
    {
      title: 'Graduate Degrees',
      description: 'Gain critical insights and practical skills for success in your career or scholarly pursuits.',
      link: '/programs?type=graduate',
    },
    {
      title: 'Undergraduate Certificates',
      description: 'Explore a topic for enrichment or achieve a professional goal.',
      link: '/programs?type=undergraduate-certificates',
    },
    {
      title: 'Undergraduate Degree',
      description: 'Complete your degree part-time without disrupting your career.',
      link: '/programs?type=undergraduate',
    },
    {
      title: 'Postbac Premedical Program',
      description: 'Prepare for medical, dental, vet, or PA school.',
      link: '/programs?type=postbac',
    },
    {
      title: 'Browse Courses',
      description: 'Learn something new in a fall or spring class.',
      link: '/programs?type=courses',
    },
  ];

  return (
    <section className="py-20 bg-white" data-section="explore-other-programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left - Title */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
              Explore Other Programs
            </h2>
          </div>

          {/* Right - Programs Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={program.link}
                    className="block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="flex items-center text-amber-500 group-hover:text-amber-600">
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOtherPrograms;

