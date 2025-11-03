import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const OpportunitiesStats = () => {
  const stats = [
    { value: '15343', label: 'Students Enrolled' },
    { value: '65', label: 'Academic Programs' },
    { value: '891', label: 'Faculty Members' },
    { value: '75', label: 'Countries Represented' },
  ];

  const features = [
    'Graduate Programs',
    'Undergraduate Programs',
    'Doctoral Degrees',
    'International Hubs',
    'Alumni & Giving',
    'Global Students',
  ];

  return (
    <section className="py-20 bg-white" data-section="opportunities-stats">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-12 items-stretch lg:grid-cols-3">
          {/* Left - Image */}
          <div className="relative lg:col-span-1 flex">
            <img
              src="https://www.harvard.edu/wp-content/uploads/2025/10/090321_SEC_073.jpg?w=1500&h=1000&crop=1"
              alt="Campus building"
              className="object-cover w-full h-full rounded-lg shadow-xl"
            />
          </div>

          {/* Right - Title, Description, Features, Stats */}
          <div className="lg:col-span-2">
            <p className="mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
              WHY CHOOSE US
            </p>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl" style={{ fontFamily: 'serif' }}>
              Why ResponsabCollege
            </h2>
            <p className="mb-8 leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            {/* Stats - All 4 in 2x2 grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-2 text-5xl font-bold text-gray-900">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="font-medium text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesStats;

