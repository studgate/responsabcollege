
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Search, Newspaper } from 'lucide-react';
import { Input } from '@/components/ui/input';
import FilterDropdown from '@/components/shared/FilterDropdown';
import NextStepCallout from '@/components/shared/NextStepCallout';

const newsData = [
    { id: 1, title: 'ResponsabCollege Ranks Top 50 in National Universities', date: 'October 28, 2025', category: 'Rankings', image: 'University campus with modern buildings and students', excerpt: 'ResponsabCollege has been recognized among the top 50 national universities in the latest rankings.' },
    { id: 2, title: 'New Research Center Opens for Sustainable Technology', date: 'October 25, 2025', category: 'Research', image: 'Modern research laboratory with scientists working', excerpt: 'The new $50 million research center will focus on sustainable technology and renewable energy.' },
    { id: 3, title: 'Fall Career Fair Connects Students with Top Employers', date: 'October 20, 2025', category: 'Events', image: 'Career fair with students and recruiters networking', excerpt: 'Over 200 companies participated in this year\'s career fair, offering internships and full-time positions.' },
    { id: 4, title: 'Professor Wins Prestigious National Teaching Award', date: 'October 15, 2025', category: 'Faculty', image: 'Professor receiving award on stage', excerpt: 'Dr. Sarah Johnson recognized for innovative teaching methods in computer science.' },
    { id: 5, title: 'New Scholarship Program Announced for STEM Students', date: 'October 10, 2025', category: 'Financial Aid', image: 'Students celebrating with scholarship certificates', excerpt: '$5 million scholarship fund established to support underrepresented students in STEM fields.' },
    { id: 6, title: 'Campus Sustainability Initiative Reduces Carbon Footprint by 30%', date: 'October 5, 2025', category: 'Campus Life', image: 'Solar panels on campus buildings', excerpt: 'ResponsabCollege achieves major milestone in environmental sustainability goals.' },
];

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: 'All' });
  
  const categories = ['All', 'Rankings', 'Research', 'Events', 'Faculty', 'Financial Aid', 'Campus Life'];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredNews = newsData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.category === 'All' || item.category === filters.category)
  );

  return (
    <>
      <Helmet>
        <title>News - ResponsabCollege</title>
        <meta name="description" content="Stay updated with the latest news, achievements, and events at ResponsabCollege." />
      </Helmet>
      <div className="bg-white min-h-screen">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden" data-section="news-header">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Latest news" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Latest News
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto"
            >
              Stay informed about what's happening at ResponsabCollege
            </motion.p>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-gray-200" data-section="news-filters">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input type="text" placeholder="Search news..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 text-base h-12" aria-label="Search news" />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <FilterDropdown triggerLabel="Category" items={categories} value={filters.category} onValueChange={handleFilterChange} filterKey="category" />
                </div>
            </div>
        </section>

        <section className="py-16 news-grid" data-section="news-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Active Filters Display */}
            {(filters.category !== 'All' || searchTerm) && (
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Active filters:</span>
                {searchTerm && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Search: "{searchTerm}"
                    <button onClick={() => setSearchTerm('')} className="hover:text-blue-900" aria-label="Remove search filter">×</button>
                  </span>
                )}
                {filters.category !== 'All' && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Category: {filters.category}
                    <button onClick={() => handleFilterChange('category', 'All')} className="hover:text-purple-900" aria-label="Remove category filter">×</button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setFilters({ category: 'All' });
                    setSearchTerm('');
                  }}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 underline"
                >
                  Clear all
                </button>
              </div>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                  <Link to={`/news/${item.id}`}>
                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" alt={`${item.title} news article image`} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                        <div className="absolute top-4 left-4"><span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">{item.category}</span></div>
                      </div>
                      <div className="p-6 flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 mb-3"><Calendar className="w-4 h-4 mr-2" />{item.date}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors flex-grow">{item.title}</h3>
                        <p className="text-gray-600 mb-4 flex-grow">{item.excerpt}</p>
                        <div className="flex items-center text-primary font-medium mt-auto">Read More <ArrowRight className="w-4 h-4 ml-1" /></div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            {filteredNews.length === 0 && (
              <div className="text-center py-16"><p className="text-2xl font-semibold text-gray-700">No news found.</p><p className="text-gray-500 mt-2">Try adjusting your search or filters.</p></div>
            )}
          </div>
        </section>

        <section className="py-20 bg-gray-50" data-section="news-intro">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Newspaper className="w-16 h-16 text-primary mx-auto mb-6" />
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">INTRODUCE</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">News & Article</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay informed about the latest achievements, research breakthroughs, and campus happenings at ResponsabCollege.
              </p>
            </motion.div>
          </div>
        </section>

        <NextStepCallout
          title="Stay Connected"
          description="Subscribe to our newsletter to receive the latest news and updates directly in your inbox."
          primaryActionText="Subscribe"
          primaryActionLink="/"
          secondaryActionText="Contact Media Relations"
          secondaryActionLink="/about"
        />
      </div>
    </>
  );
};
export default News;
