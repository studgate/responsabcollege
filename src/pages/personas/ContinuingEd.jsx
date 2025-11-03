
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Clock, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JourneySection from '@/components/shared/JourneySection';

const ContinuingEd = () => {
  const programs = [
    { name: 'Professional Certificate in Data Analytics', duration: '6 months', format: 'Online' },
    { name: 'Executive Leadership Program', duration: '3 months', format: 'Hybrid' },
    { name: 'Digital Marketing Certification', duration: '4 months', format: 'Online' },
    { name: 'Project Management Professional', duration: '5 months', format: 'Evening Classes' },
  ];

  return (
    <>
      <Helmet>
        <title>Continuing Education - ResponsabCollege</title>
        <meta name="description" content="Advance your career with continuing education programs at ResponsabCollege. Flexible learning options for working professionals." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Continuing education students" src="https://images.unsplash.com/photo-1679316481049-4f6549df499f" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Continuing Education
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto"
            >
              Lifelong learning for professional development and career advancement
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6">
                Browse Programs <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Clock, title: 'Flexible Schedule', desc: 'Evening and weekend classes' },
                { icon: Briefcase, title: 'Career-Focused', desc: 'Industry-relevant skills' },
                { icon: Award, title: 'Certifications', desc: 'Recognized credentials' },
                { icon: TrendingUp, title: 'Career Growth', desc: 'Advance your position' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <Icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Programs</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <motion.div
                  key={program.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.name}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{program.duration}</span>
                    <span className="text-orange-600 font-medium">{program.format}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <JourneySection />
      </div>
    </>
  );
};

export default ContinuingEd;
