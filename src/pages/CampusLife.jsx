
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Home, Users, Heart, Utensils, Award, Bus, ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import NextStepCallout from '@/components/shared/NextStepCallout';
import FaqSection from '@/components/shared/FaqSection';
import { Button } from '@/components/ui/button';

const CampusLife = () => {
  const areas = [
    { icon: Home, title: 'Housing & Dining', description: 'Comfortable living and diverse dining options.', href: '#' },
    { icon: Users, title: 'Clubs & Organizations', description: '300+ clubs to explore your interests.', href: '/clubs' },
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive support for a healthy mind and body.', href: '#' },
    { icon: Award, title: 'Athletics & Recreation', description: 'Join a team or stay active with our facilities.', href: '/athletics' },
    { icon: Utensils, title: 'Arts & Culture', description: 'Engage with music, theater, and visual arts.', href: '#' },
    { icon: Bus, title: 'Campus Safety', description: 'A safe and secure environment for all.', href: '#' },
  ];
  
  const galleryImages = [
    'Students studying together in a library', 'A college football game under the lights', 'A graduation ceremony with students in caps and gowns', 'Students participating in a campus club fair', 'A diverse group of students walking on campus', 'A student presenting research at a symposium',
  ];

  const faqs = [
      { question: "What housing options are available?", answer: "We offer a variety of housing options, from traditional dorms for first-year students to apartment-style living for upperclassmen. All our residence halls are equipped with modern amenities to ensure a comfortable living experience." },
      { question: "How can I join a club?", answer: "At the beginning of each semester, we host a student involvement fair where you can meet representatives from all our clubs. You can also browse the full list of clubs on our website and contact their leadership directly." },
      { question: "Are there dining plans for students with dietary restrictions?", answer: "Yes! Our dining services team is committed to providing delicious and healthy options for everyone. We can accommodate a wide range of dietary needs, including vegetarian, vegan, gluten-free, and various allergies." }
  ];

  return (
    <>
      <Helmet>
        <title>Campus Life - ResponsabCollege</title>
        <meta name="description" content="Discover campus life at ResponsabCollege. Explore housing, dining, student organizations, and a vibrant community." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden" data-section="campus-life-header">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Campus life" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Campus Life
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto"
            >
              Find your community and make lifelong memories
            </motion.p>
          </div>
        </section>

        <section className="py-20 areas-grid" data-section="areas-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">A Vibrant Community</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                With a diverse student body and hundreds of activities, there's always something to do at ResponsabCollege.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div key={area.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                    <Link to={area.href}>
                      <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow h-full">
                        <Icon className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary">{area.title}</h3>
                        <p className="text-gray-600 mb-4">{area.description}</p>
                        <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">Learn More <ArrowRight className="w-4 h-4 ml-1" /></div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gray-50" data-section="photo-gallery">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Camera className="w-12 h-12 text-primary mx-auto mb-4"/>
                    <h2 className="text-4xl font-bold text-gray-900">Glimpses of Campus Life</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((alt, index) => (
                        <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1}} viewport={{ once: true }} className="overflow-hidden rounded-lg shadow-lg">
                            <img className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-300" alt={alt} src="https://images.unsplash.com/photo-1615003380049-a716b685b98e" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 two-column-content" data-section="two-column-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{opacity: 0, x: -30}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8}} viewport={{once: true}}>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Involved</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Student life at ResponsabCollege is more than just academics. It's about finding your passion, making new friends, and becoming part of a community that supports your growth.
                </p>
                <Link to="/events" className="inline-block">
                  <Button size="lg">
                    View Campus Events
                  </Button>
                </Link>
              </motion.div>
              <motion.div initial={{opacity: 0, x: 30}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8}} viewport={{once: true}}>
                <img className="rounded-lg shadow-2xl" alt="Students on campus" src="https://images.unsplash.com/photo-1630682502921-f6a73c9a56d3" />
              </motion.div>
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} sectionTitle="Campus Life FAQs" />

        <NextStepCallout 
          title="Ready to Experience Campus Life?"
          description="Schedule a tour to see our vibrant campus for yourself or explore the hundreds of ways to get involved."
          primaryActionText="Schedule a Visit"
          primaryActionLink="/events"
          secondaryActionText="Explore Clubs"
          secondaryActionLink="/clubs"
        />
      </div>
    </>
  );
};

export default CampusLife;
