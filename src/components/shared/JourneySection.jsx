import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Monitor, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const JourneySection = () => {
  const features = [
    {
      icon: Building2,
      title: 'University Life',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      iconBg: 'bg-blue-500',
    },
    {
      icon: Monitor,
      title: 'Online Education',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      iconBg: 'bg-yellow-500',
    },
    {
      icon: Users,
      title: 'Campus Tours',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      iconBg: 'bg-green-500',
    },
  ];

  return (
    <section className="py-20 bg-white" data-section="journey-ahead">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Text and Features */}
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              TO THE JOURNEY AHEAD
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'serif' }}>
              Gain Valuable Knowledge & Experience
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className={`w-12 h-12 ${feature.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - 2x2 Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 h-[600px]">
            {/* Top Left - Text Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-600 p-8 rounded-lg flex flex-col justify-center text-white"
            >
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'serif' }}>
                You Apply
              </h3>
              <p className="text-white/90 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.
              </p>
            </motion.div>

            {/* Top Right - Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
                alt="Graduates throwing caps" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            {/* Bottom Left - Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655" 
                alt="Students collaborating" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            {/* Bottom Right - Text Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-yellow-400 p-8 rounded-lg flex flex-col justify-center text-gray-900"
            >
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'serif' }}>
                We Connect
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

