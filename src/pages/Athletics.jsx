
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Award } from 'lucide-react';

const Athletics = () => {
  const sports = [
    { id: 1, name: 'Basketball', season: 'Fall/Winter', teams: 'Men\'s & Women\'s', image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26' },
    { id: 2, name: 'Soccer', season: 'Fall', teams: 'Men\'s & Women\'s', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211' },
    { id: 3, name: 'Swimming', season: 'Winter', teams: 'Men\'s & Women\'s', image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635' },
    { id: 4, name: 'Track & Field', season: 'Spring', teams: 'Men\'s & Women\'s', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b' },
    { id: 5, name: 'Volleyball', season: 'Fall', teams: 'Women\'s', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc' },
    { id: 6, name: 'Baseball', season: 'Spring', teams: 'Men\'s', image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390' },
    { id: 7, name: 'Softball', season: 'Spring', teams: 'Women\'s', image: 'https://images.unsplash.com/photo-1525811902-f2342640856e' },
    { id: 8, name: 'Tennis', season: 'Spring', teams: 'Men\'s & Women\'s', image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8' },
  ];

  return (
    <>
      <Helmet>
        <title>Athletics - ResponsabCollege</title>
        <meta name="description" content="Explore ResponsabCollege Athletics. Join our competitive sports teams and experience the thrill of collegiate athletics." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="College athletes" src="https://images.unsplash.com/photo-1558968834-123940f5a0ba" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">ResponsabCollege Athletics</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Excellence in competition, character, and academics
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Trophy, value: '15', label: 'Varsity Sports' },
                { icon: Users, value: '400+', label: 'Student Athletes' },
                { icon: Award, value: '12', label: 'Conference Titles' },
                { icon: Calendar, value: '3', label: 'Seasons' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sports</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Compete at the highest level in NCAA Division II athletics
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sports.map((sport, index) => (
                <motion.div
                  key={sport.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/athletics/${sport.id}`}>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={sport.image} 
                          alt={`${sport.name} team`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{sport.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">Season: {sport.season}</p>
                        <p className="text-sm text-blue-600 font-medium">{sport.teams}</p>
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Student-Athlete Experience</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At ResponsabCollege, we believe in developing well-rounded student-athletes who excel both on the field and in the classroom.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Trophy className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Competitive Excellence</p>
                      <p className="text-gray-600">Compete against top programs in our conference</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Academic Support</p>
                      <p className="text-gray-600">Dedicated tutoring and academic advising for athletes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Team Culture</p>
                      <p className="text-gray-600">Build lifelong friendships and leadership skills</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img className="rounded-lg shadow-2xl" alt="Student athletes" src="https://images.unsplash.com/photo-1689876593463-6678f2e8d4f2" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Athletics;
