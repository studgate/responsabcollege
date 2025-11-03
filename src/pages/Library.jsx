
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Search, Clock, Users, Database, Wifi, Phone, Mail, User } from 'lucide-react';

const Library = () => {
  const services = [
    { icon: BookOpen, title: 'Collections', description: '2 million+ books and journals' },
    { icon: Database, title: 'Digital Resources', description: '500+ online databases' },
    { icon: Users, title: 'Research Help', description: 'Expert librarian assistance' },
    { icon: Clock, title: 'Extended Hours', description: 'Open 24/7 during finals' },
    { icon: Search, title: 'Interlibrary Loan', description: 'Access materials worldwide' },
    { icon: Wifi, title: 'Study Spaces', description: '1,000+ seats with WiFi' },
  ];

  const operatingHours = [
    { day: 'Monday - Thursday', hours: '7:00 AM - 11:00 PM' },
    { day: 'Friday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 10:00 PM' },
    { day: 'Final Exams', hours: '24 Hours (Extended hours)' },
  ];

  return (
    <>
      <Helmet>
        <title>Library - ResponsabCollege</title>
        <meta name="description" content="Explore the ResponsabCollege Library. Access millions of resources, study spaces, and expert research assistance." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="University library" src="https://images.unsplash.com/photo-1587648452174-752a31dbbc84" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              University Library
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto"
            >
              Your gateway to knowledge and academic success
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img className="rounded-lg shadow-2xl" alt="Modern library" src="https://images.unsplash.com/photo-1587648452174-752a31dbbc84" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">World-Class Resources</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The ResponsabCollege Library provides access to extensive collections, cutting-edge technology, and expert support to fuel your academic journey.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">2 Million+ Resources</p>
                      <p className="text-gray-600">Books, journals, and digital materials</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">24/7 Access</p>
                      <p className="text-gray-600">Extended hours during exam periods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  Operating Hours
                </h3>
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-700">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href="tel:555-123-4500" className="text-blue-600 hover:underline font-medium">(555) 123-4500</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href="mailto:library@responsabcollege.edu" className="text-blue-600 hover:underline font-medium">library@responsabcollege.edu</a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Library Manager
                  </h4>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Dr. Patricia Thompson</p>
                    <p className="text-gray-600 text-sm">Director of Library Services</p>
                    <a href="mailto:p.thompson@responsabcollege.edu" className="text-blue-600 hover:underline text-sm">p.thompson@responsabcollege.edu</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Library Services</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Library;
