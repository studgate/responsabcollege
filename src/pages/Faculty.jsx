
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Mail, Phone, User, Award, BookOpen, GraduationCap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import FilterDropdown from '@/components/shared/FilterDropdown';
import FacultyFlipCard from '@/components/shared/FacultyFlipCard';
import ProgressBarsSection from '@/components/shared/ProgressBars';
import NextStepCallout from '@/components/shared/NextStepCallout';

const facultyData = [
  { id: 1, name: 'Dr. Evelyn Reed', title: 'Professor', department: 'Engineering', expertise: ['Artificial Intelligence', 'Machine Learning'], image: '...', email: 'e.reed@responsabcollege.edu', phone: '555-123-4567', bio: 'Dr. Reed is a leading expert in artificial intelligence and machine learning with over 15 years of research experience. She has published over 50 peer-reviewed papers and received numerous awards for her contributions to the field.' },
  { id: 2, name: 'Dr. Samuel Chen', title: 'Associate Professor', department: 'Business', expertise: ['Marketing Strategy', 'Consumer Behavior'], image: '...', email: 's.chen@responsabcollege.edu', phone: '555-123-4568', bio: 'Dr. Chen specializes in marketing strategy and consumer behavior, bringing real-world industry experience to the classroom. His research focuses on digital marketing trends and consumer decision-making processes.' },
  { id: 3, name: 'Dr. Maria Garcia', title: 'Professor', department: 'Social Sciences', expertise: ['Cognitive Psychology', 'Neuroscience'], image: '...', email: 'm.garcia@responsabcollege.edu', phone: '555-123-4569', bio: 'Dr. Garcia is a renowned cognitive psychologist whose work bridges psychology and neuroscience. She has led groundbreaking research on memory and learning processes.' },
  { id: 4, name: 'Dr. Ben Carter', title: 'Professor', department: 'Sciences', expertise: ['Genetics', 'Molecular Biology'], image: '...', email: 'b.carter@responsabcollege.edu', phone: '555-123-4570', bio: 'Dr. Carter is an accomplished geneticist with expertise in molecular biology. His research has contributed to understanding genetic diseases and developing new therapeutic approaches.' },
  { id: 5, name: 'Dr. Angela Wu', title: 'Assistant Professor', department: 'Engineering', expertise: ['Robotics', 'Control Systems'], image: '...', email: 'a.wu@responsabcollege.edu', phone: '555-123-4571', bio: 'Dr. Wu is an emerging leader in robotics and control systems. Her innovative research in autonomous systems has earned recognition from leading engineering organizations.' },
  { id: 6, name: 'Dr. David Kim', title: 'Professor', department: 'Business', expertise: ['International Trade', 'Econometrics'], image: '...', email: 'd.kim@responsabcollege.edu', phone: '555-123-4572', bio: 'Dr. Kim is an expert in international trade and econometrics with extensive consulting experience. He helps students understand global economic dynamics and trade policies.' },
];

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ department: 'All' });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const departments = ['All', 'Engineering', 'Business', 'Social Sciences', 'Sciences'];

  const filteredFaculty = facultyData.filter(faculty =>
    (faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     faculty.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     faculty.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()))
    ) &&
    (filters.department === 'All' || faculty.department === filters.department)
  );

  return (
    <>
      <Helmet>
        <title>Faculty - ResponsabCollege</title>
        <meta name="description" content="Meet the distinguished faculty at ResponsabCollege. Our professors are leaders in their fields, dedicated to teaching and mentorship." />
      </Helmet>
      <div className="bg-white min-h-screen">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden" data-section="faculty-header">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Our faculty" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Our Faculty
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto"
            >
              Learn from world-renowned experts and dedicated mentors
            </motion.p>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-gray-200" data-section="faculty-filters">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input type="text" placeholder="Search by name, expertise..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 text-base h-12" aria-label="Search faculty" />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <FilterDropdown triggerLabel="Department" items={departments} value={filters.department} onValueChange={handleFilterChange} filterKey="department" />
                </div>
            </div>
        </section>

        <section className="py-16 faculty-grid" data-section="faculty-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Active Filters Display */}
            {(filters.department !== 'All' || searchTerm) && (
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Active filters:</span>
                {searchTerm && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Search: "{searchTerm}"
                    <button onClick={() => setSearchTerm('')} className="hover:text-blue-900" aria-label="Remove search filter">×</button>
                  </span>
                )}
                {filters.department !== 'All' && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Department: {filters.department}
                    <button onClick={() => handleFilterChange('department', 'All')} className="hover:text-purple-900" aria-label="Remove department filter">×</button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setFilters({ department: 'All' });
                    setSearchTerm('');
                  }}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 underline"
                >
                  Clear all
                </button>
              </div>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFaculty.map((person) => (
                <FacultyFlipCard key={person.id} faculty={person} />
              ))}
            </div>
            {filteredFaculty.length === 0 && (
              <div className="text-center py-16">
                <p className="text-2xl font-semibold text-gray-700">No faculty found.</p>
                <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-gray-50" data-section="faculty-excellence">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Faculty Stands Out</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our faculty are not just teachers—they are mentors, researchers, and industry leaders
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Award, title: 'Award Winners', desc: 'Nobel Prize winners, Fulbright Scholars, and industry award recipients' },
                { icon: BookOpen, title: 'Published Authors', desc: 'Research published in top-tier journals and leading publications' },
                { icon: GraduationCap, title: 'Expert Mentors', desc: 'Dedicated to student success and personal development' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <ProgressBarsSection
              title="Faculty Excellence Metrics"
              subtitle="BY THE NUMBERS"
              skills={[
                { label: 'PhD Holders', percentage: 98 },
                { label: 'Research Activity', percentage: 92 },
                { label: 'Student Rating', percentage: 96 },
                { label: 'Industry Experience', percentage: 88 },
              ]}
            />
          </div>
        </section>

        <NextStepCallout
          title="Interested in Teaching at ResponsabCollege?"
          description="Join our team of distinguished educators and researchers."
          primaryActionText="View Open Positions"
          primaryActionLink="/about"
          secondaryActionText="Learn More"
          secondaryActionLink="/about"
        />
      </div>
    </>
  );
};

export default Faculty;
