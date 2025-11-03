import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Building2, GraduationCap, Trophy, Rocket } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: '1965',
      title: 'Foundation',
      description: 'ResponsabCollege was founded with a vision to provide accessible, high-quality education.',
      icon: Building2,
      color: 'from-purple-500 to-purple-700',
    },
    {
      year: '1980',
      title: 'First 1,000 Students',
      description: 'Reached our first major milestone with 1,000 enrolled students across all programs.',
      icon: Users,
      color: 'from-blue-500 to-blue-700',
    },
    {
      year: '1995',
      title: 'Research Excellence',
      description: 'Opened our first state-of-the-art research center and became a recognized research institution.',
      icon: Award,
      color: 'from-emerald-500 to-emerald-700',
    },
    {
      year: '2010',
      title: '50,000 Alumni',
      description: 'Celebrated our 50,000th graduate, building a powerful network of accomplished professionals.',
      icon: GraduationCap,
      color: 'from-amber-500 to-amber-700',
    },
    {
      year: '2020',
      title: 'Top 50 Ranking',
      description: 'Achieved top 50 ranking in national universities, recognizing our academic excellence.',
      icon: Trophy,
      color: 'from-rose-500 to-rose-700',
    },
    {
      year: '2025',
      title: 'Innovation Hub',
      description: 'Launched our Innovation Hub, fostering entrepreneurship and cutting-edge technology.',
      icon: Rocket,
      color: 'from-indigo-500 to-indigo-700',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50" data-section="timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient-primary">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Six decades of excellence, innovation, and transforming lives
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 via-blue-200 to-indigo-200 transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift border border-gray-100 relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${milestone.color} mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-sm font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center bg-white rounded-full shadow-xl border-4 border-white z-20">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Year Badge - Mobile */}
                  <div className="md:hidden -mt-6 mb-4 z-20">
                    <div className="bg-primary text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Spacer for layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

