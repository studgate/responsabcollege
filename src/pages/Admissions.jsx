
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, DollarSign, Users, TrendingUp, CheckCircle, FileText, GraduationCap } from 'lucide-react';
import ProgressBarsSection from '@/components/shared/ProgressBars';
import TestimonialsCarousel from '@/components/shared/TestimonialsCarousel';
import NextStepCallout from '@/components/shared/NextStepCallout';
import JourneySection from '@/components/shared/JourneySection';

const Admissions = () => {
  const personas = [
    { title: 'First-Year Students', description: 'Start your academic journey with us.', href: '/first-year', color: 'from-blue-500 to-blue-700' },
    { title: 'Transfer Students', description: 'Continue your path to a degree.', href: '/transfer', color: 'from-green-500 to-green-700' },
    { title: 'Graduate Students', description: 'Advance your career and expertise.', href: '/graduate', color: 'from-purple-500 to-purple-700' },
    { title: 'Continuing Education', description: 'Lifelong learning opportunities.', href: '/continuing-education', color: 'from-orange-500 to-orange-700' },
  ];

  return (
    <>
      <Helmet>
        <title>Admissions - ResponsabCollege</title>
        <meta name="description" content="Apply to ResponsabCollege. Find information on admission requirements, deadlines, and financial aid for all student types." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Admissions" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Admissions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto"
            >
              Your future starts here. Join a community of innovators and leaders.
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Application Path</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {personas.map((persona, index) => (
                <motion.div
                  key={persona.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={persona.href}>
                    <div className={`group h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 p-6`}>
                      <h3 className={`text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors`}>
                        {persona.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{persona.description}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Admission Information</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <Calendar className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Deadlines</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Early Action: November 1</li>
                  <li>Regular Decision: January 15</li>
                  <li>Transfer: April 1</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tuition & Aid</h3>
                <p className="text-gray-600">95% of students receive aid. Explore scholarships and grants.</p>
                <Link to="/financial-aid" className="text-blue-600 font-medium mt-4 inline-block">Learn More</Link>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Campus</h3>
                <p className="text-gray-600">Experience ResponsabCollege firsthand. Schedule a tour today.</p>
                 <Link to="/events" className="text-blue-600 font-medium mt-4 inline-block">Schedule a Visit</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white" data-section="admission-process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple steps to begin your journey at ResponsabCollege
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: FileText, step: '1', title: 'Submit Application', desc: 'Complete your online application with required documents' },
                { icon: CheckCircle, step: '2', title: 'Review Process', desc: 'Our admissions team reviews your application thoroughly' },
                { icon: GraduationCap, step: '3', title: 'Acceptance', desc: 'Receive your admission decision and financial aid package' },
                { icon: Users, step: '4', title: 'Enroll', desc: 'Confirm your enrollment and begin your college journey' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="relative inline-block mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-700 rounded-full flex items-center justify-center shadow-xl">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50" data-section="admission-stats">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProgressBarsSection
              title="Admission Success Rates"
              subtitle="OUR COMMITMENT"
              skills={[
                { label: 'Acceptance Rate', percentage: 45 },
                { label: 'Financial Aid Coverage', percentage: 95 },
                { label: 'Student Retention', percentage: 92 },
                { label: 'Graduation Rate', percentage: 88 },
              ]}
            />
          </div>
        </section>

        <TestimonialsCarousel />

        <JourneySection />

        <NextStepCallout
          title="Ready to Join ResponsabCollege?"
          description="Start your application today and take the first step towards your future."
          primaryActionText="Apply Now"
          primaryActionLink="/admissions"
          secondaryActionText="Request Information"
          secondaryActionLink="/admissions"
        />
      </div>
    </>
  );
};

export default Admissions;
