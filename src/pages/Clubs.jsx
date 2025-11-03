
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Palette, FlaskConical, Globe, Calculator, Gamepad2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Clubs = () => {
  const clubs = [
    { name: 'Debate Club', category: 'Academic', icon: Users, description: 'Hone your public speaking and argumentation skills.' },
    { name: 'Art Society', category: 'Creative', icon: Palette, description: 'Express your creativity through various art forms.' },
    { name: 'Chemistry Club', category: 'STEM', icon: FlaskConical, description: 'Explore the fascinating world of chemistry.' },
    { name: 'International Students Association', category: 'Cultural', icon: Globe, description: 'Connect with students from around the world.' },
    { name: 'Investment Club', category: 'Professional', icon: Calculator, description: 'Learn about financial markets and investing.' },
    { name: 'Esports Club', category: 'Recreational', icon: Gamepad2, description: 'Compete in popular video game tournaments.' },
  ];

  return (
    <>
      <Helmet>
        <title>Clubs & Organizations - ResponsabCollege</title>
        <meta name="description" content="Discover over 300 student-run clubs and organizations at ResponsabCollege. Find your community and get involved on campus." />
      </Helmet>
      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20" data-section="clubs-header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Users className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-6">Clubs & Organizations</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              With over 300 student-run organizations, there's a place for everyone.
            </p>
          </div>
        </section>

        <section className="py-20 clubs-grid" data-section="clubs-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Community</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubs.map((club, index) => {
                const Icon = club.icon;
                return (
                  <motion.div
                    key={club.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 flex flex-col"
                  >
                    <div className="flex-grow">
                      <Icon className="w-12 h-12 text-blue-600 mb-4" />
                      <span className="text-sm font-semibold text-blue-600 block mb-2">{club.category}</span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{club.name}</h3>
                      <p className="text-gray-600 mb-4">{club.description}</p>
                    </div>
                    <Button variant="ghost" className="mt-4 self-start p-0 h-auto text-blue-600 hover:text-blue-800">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button size="lg">Start Your Own Club</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Clubs;
