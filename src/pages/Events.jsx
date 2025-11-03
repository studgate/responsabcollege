
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, DollarSign, ChevronRight, Mic, Users as UsersIcon } from 'lucide-react';
import NextStepCallout from '@/components/shared/NextStepCallout';

const Events = () => {
  const [view, setView] = React.useState('cards'); // 'cards' | 'list'
  
  const thisMonthEvents = [
    { id: 1, title: 'Wellbeing Self-Isolation Daily Drop In', date: '11 September 2021', location: 'ResponsabCollege Grand Hall', ticket: '$10.00', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655' },
    { id: 2, title: 'The Marine And Aquatic Civil Servants', date: '11 September 2021', location: 'ResponsabCollege Grand Hall', ticket: '$10.00', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4' },
    { id: 3, title: 'Building A Human Rights Bridge Prover', date: '23 December 2021', location: 'ResponsabCollege Grand Hall', ticket: '$12.00', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786' },
    { id: 4, title: 'Estimating Mode Effects From A Sequential', date: '23 December 2021', location: 'ResponsabCollege Grand Hall', ticket: '$12.00', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846' },
  ];

  const upcomingEvents = [
    { id: 5, title: 'Residence Life Open Door', date: '11 September 2021', location: 'ResponsabCollege Grand Hall', ticket: '$10.00', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655', featured: false },
    { id: 6, title: 'Learning Support Drop In', date: '23 December 2021', location: 'ResponsabCollege Grand Hall', ticket: '$12.00', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902', featured: false },
    { id: 7, title: 'Estimating Mode Effects', date: '9 June 2021', location: 'ResponsabCollege Grand Hall', ticket: '$20.00', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus.', featured: true },
  ];
  
  const allEvents = [
    { id: 1, title: 'Fall Open House', date: 'November 15, 2025', time: '10:00 AM - 3:00 PM', location: 'Main Campus', category: 'Admissions', image: 'Campus open house with prospective students and families' },
    { id: 2, title: 'Career Fair 2025', date: 'November 20, 2025', time: '9:00 AM - 4:00 PM', location: 'Student Center', category: 'Career', image: 'Career fair with employer booths and students' },
    { id: 3, title: 'Research Symposium', date: 'December 5, 2025', time: '1:00 PM - 5:00 PM', location: 'Science Building', category: 'Academic', image: 'Students presenting research posters' },
    { id: 4, title: 'Winter Concert', date: 'December 10, 2025', time: '7:00 PM', location: 'Performing Arts Center', category: 'Arts', image: 'Orchestra performing on stage' },
    { id: 5, title: 'Alumni Homecoming Weekend', date: 'December 15-17, 2025', time: 'All Day', location: 'Various Locations', category: 'Alumni', image: 'Alumni gathering at campus event' },
    { id: 6, title: 'Spring Semester Orientation', date: 'January 10, 2026', time: '8:00 AM - 5:00 PM', location: 'Student Center', category: 'Student Life', image: 'New students at orientation event' },
  ];

  return (
    <>
      <Helmet>
        <title>Events - ResponsabCollege</title>
        <meta name="description" content="Discover upcoming events at ResponsabCollege. From academic symposiums to cultural celebrations, there's always something happening on campus." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Campus Events</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join us for exciting events throughout the year
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end mb-6 gap-2">
              <button aria-label="Card view" onClick={() => setView('cards')} className={`p-2 rounded-lg border ${view==='cards' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg>
              </button>
              <button aria-label="List view" onClick={() => setView('list')} className={`p-2 rounded-lg border ${view==='list' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="5" width="16" height="2"/><rect x="4" y="11" width="16" height="2"/><rect x="4" y="17" width="16" height="2"/></svg>
              </button>
            </div>

            {view === 'cards' ? (
              <>
                {/* This Month's Event Section */}
                <div className="mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'serif' }}>
                    This Month's Event
                  </h2>
                  <div className="grid md:grid-cols-4 gap-6">
                    {thisMonthEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Link to={`/events/${event.id}`}>
                          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                            <div className="h-48 overflow-hidden">
                              <img className="w-full h-full object-cover" alt={`${event.title} event image`} src={event.image} />
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                              <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'serif' }}>
                                {event.title}
                              </h3>
                              <div className="text-gray-600 text-sm space-y-2 mb-4 flex-grow">
                                <div>{event.date}</div>
                                <div>{event.location}</div>
                                <div className="font-semibold">{event.ticket}</div>
                              </div>
                              <div className="text-primary font-semibold inline-flex items-center text-sm hover:underline mt-auto">
                                READ MORE <ChevronRight className="w-4 h-4 ml-1" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events Section */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'serif' }}>
                    Upcoming Events
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {upcomingEvents.map((event, index) => {
                      if (event.featured) {
                        return (
                          <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="md:col-span-1"
                          >
                            <Link to={`/events/${event.id}`}>
                              <div className="relative h-[500px] rounded-lg overflow-hidden group cursor-pointer">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={`${event.title} event image`} src={event.image} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                  <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
                                  <p className="text-white/90 mb-6 leading-relaxed">{event.description}</p>
                                  <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3">
                                      <MapPin className="w-5 h-5 text-white" />
                                      <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <Calendar className="w-5 h-5 text-white" />
                                      <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <DollarSign className="w-5 h-5 text-white" />
                                      <span>{event.ticket}</span>
                                    </div>
                                  </div>
                                  <div className="text-white font-semibold inline-flex items-center hover:underline">
                                    READ MORE <ChevronRight className="w-4 h-4 ml-1" />
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        );
                      }
                      return (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Link to={`/events/${event.id}`}>
                            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                              <div className="h-48 overflow-hidden">
                                <img className="w-full h-full object-cover" alt={`${event.title} event image`} src={event.image} />
                              </div>
                              <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'serif' }}>
                                  {event.title}
                                </h3>
                                <div className="text-gray-600 text-sm space-y-2 mb-4 flex-grow">
                                  <div>{event.date}</div>
                                  <div>{event.location}</div>
                                  <div className="font-semibold">{event.ticket}</div>
                                </div>
                                <div className="text-primary font-semibold inline-flex items-center text-sm hover:underline mt-auto">
                                  READ MORE <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                {[...thisMonthEvents, ...upcomingEvents.filter(e => !e.featured)].map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to={`/events/${event.id}`}>
                      <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                        <div className="md:flex">
                          <div className="md:w-1/3 h-64 md:h-auto">
                            <img className="w-full h-full object-cover" alt={`${event.title} event image`} src={event.image} />
                          </div>
                          <div className="md:w-2/3 p-8">
                            <div className="mb-3">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                Event
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                              {event.title}
                            </h3>
                            <div className="space-y-2 text-gray-600">
                              <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                                {event.date}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                                {event.location}
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="w-5 h-5 mr-3 text-blue-600" />
                                {event.ticket}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-gray-50" data-section="event-types">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">UNIVERSITY EVENTS</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Bring The Best Speakers At Every Events
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Mic, title: 'Academic Lectures', desc: 'Renowned speakers share insights on cutting-edge research and innovations' },
                { icon: UsersIcon, title: 'Student Activities', desc: 'Join clubs, organizations, and social events throughout the year' },
                { icon: Calendar, title: 'Cultural Celebrations', desc: 'Experience diverse cultural events and community celebrations' },
              ].map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600">{type.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <NextStepCallout
          title="Want to Host an Event at ResponsabCollege?"
          description="Our campus provides the perfect venue for conferences, workshops, and celebrations."
          primaryActionText="Contact Us"
          primaryActionLink="/about"
          secondaryActionText="View Venues"
          secondaryActionLink="/campus-life"
        />
      </div>
    </>
  );
};

export default Events;
