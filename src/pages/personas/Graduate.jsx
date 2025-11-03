
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JourneySection from '@/components/shared/JourneySection';

const Graduate = () => {
  const programs = [
    { name: 'Master of Business Administration (MBA)', duration: '2 years', type: 'Full-time/Part-time' },
    { name: 'Master of Science in Computer Science', duration: '2 years', type: 'Full-time' },
    { name: 'PhD in Engineering', duration: '4-5 years', type: 'Full-time' },
    { name: 'Master of Public Health', duration: '2 years', type: 'Full-time/Online' },
  ];

  return (
    <>
      <Helmet>
        <title>Graduate Students - ResponsabCollege</title>
        <meta name="description" content="Advance your career with graduate programs at ResponsabCollege. Explore master's and doctoral degrees with cutting-edge research opportunities." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Graduate students" src="https://images.unsplash.com/photo-1618053238059-cc7761222f2a" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Graduate Programs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto"
            >
              Advance your expertise with cutting-edge research and world-class faculty
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                Explore Graduate Programs <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Graduate Programs</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose from our diverse range of master's and doctoral programs
              </p>
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
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-600" />
                      {program.duration}
                    </span>
                    <span className="text-purple-600 font-medium">{program.type}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Microscope className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Research Excellence</h3>
                <p className="text-purple-100">Access state-of-the-art facilities and collaborate with leading researchers</p>
              </div>
              <div>
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Expert Faculty</h3>
                <p className="text-purple-100">Learn from distinguished professors and industry leaders</p>
              </div>
              <div>
                <BookOpen className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Flexible Options</h3>
                <p className="text-purple-100">Full-time, part-time, and online programs available</p>
              </div>
            </div>
          </div>
        </section>

        <JourneySection />
      </div>
    </>
  );
};

export default Graduate;
