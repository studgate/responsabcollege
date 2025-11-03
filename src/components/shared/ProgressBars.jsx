import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ label, percentage, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-900">{label}</span>
        <span className="font-bold text-primary">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-purple-700 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const ProgressBarsSection = ({ title, subtitle, skills, className = "" }) => {
  return (
    <section className={`py-16 ${className}`} data-section="progress-bars">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {subtitle && (
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
        </motion.div>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          {skills.map((skill, index) => (
            <ProgressBar
              key={skill.label}
              label={skill.label}
              percentage={skill.percentage}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressBarsSection;

