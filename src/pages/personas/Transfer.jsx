
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, FileText, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JourneySection from '@/components/shared/JourneySection';

const Transfer = () => {
  const benefits = [
    'Seamless credit transfer process',
    'Dedicated transfer advisors',
    'Scholarship opportunities for transfer students',
    'Accelerated degree completion options',
  ];

  const requirements = [
    { title: 'Minimum GPA', value: '2.5 or higher', icon: Award },
    { title: 'Credits Required', value: '24+ transferable credits', icon: FileText },
    { title: 'Application Fee', value: 'Waived for transfers', icon: CheckCircle },
  ];

  return (
    <>
      <Helmet>
        <title>Transfer Students - ResponsabCollege</title>
        <meta name="description" content="Transfer to ResponsabCollege and continue your academic journey. We make the transition smooth with dedicated support and credit transfer assistance." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Transfer students" src="https://images.unsplash.com/photo-1594923544727-8794d5914331" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Transfer Students
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto"
            >
              Continue your education and reach new heights at ResponsabCollege
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6">
                Apply as Transfer <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Transfer to ResponsabCollege?</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button size="lg">
                    Schedule Transfer Consultation <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img className="rounded-lg shadow-2xl" alt="Transfer student success" src="https://images.unsplash.com/photo-1587648452174-752a31dbbc84" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Transfer Requirements</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple and straightforward requirements to join our community
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {requirements.map((req, index) => {
                const Icon = req.icon;
                return (
                  <motion.div
                    key={req.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-8 text-center"
                  >
                    <Icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{req.title}</h3>
                    <p className="text-2xl font-bold text-green-600">{req.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <JourneySection />
      </div>
    </>
  );
};

export default Transfer;
