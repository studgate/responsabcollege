import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Users, BookOpen, DollarSign, Award, Mail, Clock, MapPin, Building } from 'lucide-react';

const Features = () => {
  const apiFeatures = [
    {
      category: 'Events',
      icon: Calendar,
      color: 'from-blue-500 to-blue-700',
      description: 'Integrate real-time events, schedules, and campus activities',
      apis: [
        { name: 'Eventbrite API', description: 'Manage and sync campus events', link: 'https://www.eventbrite.com/platform/api/' },
        { name: 'Google Calendar API', description: 'Display events from Google Calendar', link: 'https://developers.google.com/calendar' },
        { name: 'Facebook Events API', description: 'Sync with Facebook events', link: 'https://developers.facebook.com/docs/graph-api/reference/event' },
      ],
      features: [
        'Automated event updates',
        'Event registration integration',
        'Calendar synchronization',
        'RSVP management',
      ],
    },
    {
      category: 'Faculty & Staff',
      icon: Users,
      color: 'from-purple-500 to-purple-700',
      description: 'Display faculty profiles, contact information, and expertise',
      apis: [
        { name: 'LinkedIn API', description: 'Import faculty profiles', link: 'https://www.linkedin.com/developers/' },
        { name: 'ORCID API', description: 'Academic research profiles', link: 'https://orcid.org/developers' },
        { name: 'Google Scholar API', description: 'Research publications and citations', link: 'https://scholar.google.com/intl/en/scholar/inclusion.html' },
      ],
      features: [
        'Faculty directory with search',
        'Publication listings',
        'Contact information sync',
        'Research expertise areas',
      ],
    },
    {
      category: 'Academic Programs',
      icon: BookOpen,
      color: 'from-green-500 to-green-700',
      description: 'Manage course catalogs, programs, and academic information',
      apis: [
        { name: 'Canvas LMS API', description: 'Course information and schedules', link: 'https://canvas.instructure.com/doc/api/' },
        { name: 'Banner Student API', description: 'Academic records and programs', link: 'https://www.ellucian.com/solutions/banner-student' },
        { name: 'Moodle Web Services', description: 'Course and program data', link: 'https://docs.moodle.org/dev/Web_services' },
      ],
      features: [
        'Course catalog integration',
        'Program requirements',
        'Class schedules',
        'Prerequisites tracking',
      ],
    },
    {
      category: 'Financial Aid',
      icon: DollarSign,
      color: 'from-yellow-500 to-yellow-700',
      description: 'Scholarship information, financial aid calculators, and payment options',
      apis: [
        { name: 'FAFSA API', description: 'Financial aid application data', link: 'https://fsawebenroll.ed.gov/' },
        { name: 'Stripe API', description: 'Payment processing for tuition', link: 'https://stripe.com/docs/api' },
        { name: 'PayPal API', description: 'Payment integration', link: 'https://developer.paypal.com/docs/api/overview/' },
      ],
      features: [
        'Aid calculator',
        'Scholarship search',
        'Payment processing',
        'Application status tracking',
      ],
    },
    {
      category: 'Campus Services',
      icon: Building,
      color: 'from-red-500 to-red-700',
      description: 'Library, dining, housing, and other campus services',
      apis: [
        { name: 'Library APIs', description: 'Book availability, reservations', link: 'https://www.oclc.org/developer/develop/web-services.en.html' },
        { name: 'Dining Services API', description: 'Menu and dining hours', link: 'https://developers.grubhub.com/' },
        { name: 'Room Booking APIs', description: 'Facility reservations', link: 'https://www.libcal.com/api/' },
      ],
      features: [
        'Library catalog search',
        'Dining menus and hours',
        'Room booking system',
        'Facility availability',
      ],
    },
    {
      category: 'Student Information',
      icon: Award,
      color: 'from-indigo-500 to-indigo-700',
      description: 'Student portal integration, grades, and records',
      apis: [
        { name: 'Student Information System APIs', description: 'Banner, PeopleSoft, Colleague', link: 'https://www.ellucian.com/solutions/banner-student' },
        { name: 'Learning Management System APIs', description: 'Canvas, Blackboard, Moodle', link: 'https://canvas.instructure.com/doc/api/' },
      ],
      features: [
        'Grade portal integration',
        'Transcript access',
        'Registration capabilities',
        'Academic progress tracking',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Features & API Integration - ResponsabCollege</title>
        <meta name="description" content="Explore available features and API integrations for ResponsabCollege website." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-br from-primary to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Features & API Integration</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Discover the features and third-party API integrations available for ResponsabCollege website
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {apiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-16 last:mb-0"
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-12">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{feature.category}</h2>
                        <p className="text-gray-600 text-lg">{feature.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Available APIs</h3>
                        <div className="space-y-4">
                          {feature.apis.map((api, apiIndex) => (
                            <div key={apiIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <h4 className="font-bold text-gray-900 mb-1">{api.name}</h4>
                              <p className="text-sm text-gray-600 mb-2">{api.description}</p>
                              <a
                                href={api.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-sm font-medium inline-flex items-center"
                              >
                                View API Docs <Clock className="w-3 h-3 ml-1" />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                        <div className="space-y-3">
                          {feature.features.map((feat, featIndex) => (
                            <div key={featIndex} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Integrate?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our development team to discuss API integration options and custom feature development for ResponsabCollege.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:dev@responsabcollege.edu"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" /> Contact Development Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;

