
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, DollarSign, Home, Users, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JourneySection from '@/components/shared/JourneySection';

const FirstYear = () => {
  const steps = [
    { title: 'Explore Programs', description: 'Browse our 200+ academic programs', icon: BookOpen },
    { title: 'Submit Application', description: 'Complete your online application', icon: Users },
    { title: 'Financial Aid', description: 'Apply for scholarships and aid', icon: DollarSign },
    { title: 'Accept Offer', description: 'Confirm your enrollment', icon: Award },
  ];

  const programs = [
    {
      id: 1,
      name: 'Computer Science',
      department: 'Engineering',
      description: 'Build the future with cutting-edge technology',
      href: '/programs/1'
    },
    {
      id: 2,
      name: 'Business Administration',
      department: 'Business',
      description: 'Lead with confidence and innovation',
      href: '/programs/2'
    },
    {
      id: 3,
      name: 'Psychology',
      department: 'Social Sciences',
      description: 'Understand the human mind and behavior',
      href: '/programs/3'
    },
    {
      id: 4,
      name: 'Biology',
      department: 'Sciences',
      description: 'Explore the wonders of life sciences',
      href: '/programs/4'
    },
  ];

  const resources = [
    { title: 'Campus Tours', description: 'Schedule a visit to explore our campus', icon: Home },
    { title: 'Application Deadlines', description: 'Important dates for first-year students', icon: Calendar },
    { title: 'Financial Aid Guide', description: 'Learn about scholarships and grants', icon: DollarSign },
  ];

  return (
    <>
      <Helmet>
        <title>First-Year Students - ResponsabCollege</title>
        <meta name="description" content="Start your college journey at ResponsabCollege. Explore programs, apply for admission, and discover opportunities designed for first-year students." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="First-year students on campus" src="https://images.unsplash.com/photo-1588229836934-9fe7c7b9cbfb" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              First-Year Students
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Begin your journey with endless possibilities and a supportive community
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Application <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Path to Success</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to join ResponsabCollege
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-sm font-bold text-blue-600 mb-2">Step {index + 1}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-blue-300" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Programs</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover programs that align with your interests and career goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={program.href}>
                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full">
                      <div className="text-sm font-semibold text-blue-600 mb-2">{program.department}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {program.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/programs">
                <Button variant="outline" size="lg">View All Programs</Button>
              </Link>
            </div>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Life as a First-Year Student</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Your first year at ResponsabCollege is filled with exciting opportunities to learn, grow, and connect with peers from around the world.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Orientation Programs</p>
                      <p className="text-gray-600">Get acclimated with campus resources and meet fellow students</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Academic Advising</p>
                      <p className="text-gray-600">Personalized guidance to help you choose the right courses</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Student Organizations</p>
                      <p className="text-gray-600">Join 300+ clubs and organizations to pursue your passions</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img className="rounded-lg shadow-2xl" alt="First-year students in classroom" src="https://images.unsplash.com/photo-1573894998033-c0cef4ed722b" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources for You</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to make informed decisions about your future
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <Button variant="outline" size="sm">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Take the first step toward an extraordinary education at ResponsabCollege
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                  Start Application <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  Contact Admissions
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <JourneySection />
      </div>
    </>
  );
};

export default FirstYear;
