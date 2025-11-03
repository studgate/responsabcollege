
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Briefcase, Clock, Layers, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import FilterDropdown from '@/components/shared/FilterDropdown';
import ProgressBarsSection from '@/components/shared/ProgressBars';
import NextStepCallout from '@/components/shared/NextStepCallout';

const programsData = [
    { id: 1, name: 'Computer Science', department: 'Engineering', level: 'Bachelor', description: 'Build innovative software and systems', format: 'On-Campus', careers: ['Software Engineer', 'Data Scientist'], interests: 'Technology' },
    { id: 2, name: 'Business Administration', department: 'Business', level: 'Bachelor', description: 'Lead organizations to success', format: 'On-Campus', careers: ['Manager', 'Analyst'], interests: 'Business' },
    { id: 3, name: 'Psychology', department: 'Social Sciences', level: 'Bachelor', description: 'Understand human behavior', format: 'On-Campus', careers: ['Therapist', 'Researcher'], interests: 'Healthcare' },
    { id: 4, name: 'Biology', department: 'Sciences', level: 'Bachelor', description: 'Explore life sciences', format: 'On-Campus', careers: ['Scientist', 'Doctor'], interests: 'Science' },
    { id: 5, name: 'Mechanical Engineering', department: 'Engineering', level: 'Bachelor', description: 'Design and build mechanical systems', format: 'On-Campus', careers: ['Engineer'], interests: 'Technology' },
    { id: 6, name: 'Nursing', department: 'Health Sciences', level: 'Bachelor', description: 'Provide compassionate healthcare', format: 'On-Campus', careers: ['Nurse'], interests: 'Healthcare' },
    { id: 7, name: 'English Literature', department: 'Arts & Humanities', level: 'Bachelor', description: 'Analyze literary works', format: 'On-Campus', careers: ['Writer', 'Editor'], interests: 'Arts' },
    { id: 8, name: 'Economics', department: 'Business', level: 'Bachelor', description: 'Understand economic systems', format: 'Hybrid', careers: ['Analyst'], interests: 'Business' },
    { id: 9, name: 'Data Science', department: 'Engineering', level: 'Master', description: 'Extract insights from data', format: 'Online', careers: ['Data Scientist'], interests: 'Technology' },
    { id: 10, name: 'MBA', department: 'Business', level: 'Master', description: 'Executive business leadership', format: 'Hybrid', careers: ['Manager', 'CEO'], interests: 'Business' },
    { id: 11, name: 'Public Health', department: 'Health Sciences', level: 'Master', description: 'Improve community health', format: 'Online', careers: ['Public Health Officer'], interests: 'Social Impact' },
    { id: 12, name: 'Environmental Science', department: 'Sciences', level: 'Bachelor', description: 'Protect our planet', format: 'On-Campus', careers: ['Scientist'], interests: 'Science' },
];

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    interest: 'All',
    format: 'All',
    level: 'All',
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const interests = ['All', 'Technology', 'Healthcare', 'Business', 'Arts', 'Science', 'Social Impact'];
  const formats = ['All', 'On-Campus', 'Online', 'Hybrid'];
  const levels = ['All', 'Undergraduate', 'Graduate', 'Certificate', 'Doctorate'];

  const filteredPrograms = programsData.filter(p =>
    (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.department.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filters.interest === 'All' || p.interests === filters.interest) &&
    (filters.format === 'All' || p.format === filters.format) &&
    (filters.level === 'All' || 
      (filters.level === 'Undergraduate' && p.level === 'Bachelor') ||
      (filters.level === 'Graduate' && (p.level === 'Master' || p.level === 'Doctorate')) ||
      (filters.level === p.level))
  );

  return (
    <>
      <Helmet>
        <title>Academic Programs - ResponsabCollege</title>
        <meta name="description" content="Explore 200+ academic programs at ResponsabCollege. Find the perfect program to match your interests and career goals." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-br from-primary to-purple-800 text-white py-20" data-section="programs-header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
              <h1 className="text-5xl font-bold mb-6">Academic Programs</h1>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">Discover your passion among our 200+ undergraduate and graduate programs</p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-gray-200" data-section="program-filters">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input type="text" placeholder="Search programs by name or department..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 text-base h-12" aria-label="Search programs" />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <FilterDropdown triggerLabel="Type" items={levels} value={filters.level} onValueChange={handleFilterChange} filterKey="level" />
                    <FilterDropdown triggerLabel="Interest" items={interests} value={filters.interest} onValueChange={handleFilterChange} filterKey="interest" />
                    <FilterDropdown triggerLabel="Format" items={formats} value={filters.format} onValueChange={handleFilterChange} filterKey="format" />
                </div>
            </div>
        </section>

        <section className="py-16 programs-grid" data-section="programs-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Active Filters Display */}
            {(filters.interest !== 'All' || filters.format !== 'All' || filters.level !== 'All' || searchTerm) && (
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Active filters:</span>
                {searchTerm && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Search: "{searchTerm}"
                    <button onClick={() => setSearchTerm('')} className="hover:text-blue-900" aria-label="Remove search filter">×</button>
                  </span>
                )}
                {filters.level !== 'All' && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Type: {filters.level}
                    <button onClick={() => handleFilterChange('level', 'All')} className="hover:text-purple-900" aria-label="Remove type filter">×</button>
                  </span>
                )}
                {filters.interest !== 'All' && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Interest: {filters.interest}
                    <button onClick={() => handleFilterChange('interest', 'All')} className="hover:text-green-900" aria-label="Remove interest filter">×</button>
                  </span>
                )}
                {filters.format !== 'All' && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    Format: {filters.format}
                    <button onClick={() => handleFilterChange('format', 'All')} className="hover:text-amber-900" aria-label="Remove format filter">×</button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setFilters({ interest: 'All', format: 'All', level: 'All' });
                    setSearchTerm('');
                  }}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 underline"
                >
                  Clear all
                </button>
              </div>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div key={program.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }}>
                  <Link to={`/programs/${program.id}`}>
                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-primary">{program.department}</span>
                        <span className="text-xs bg-purple-100 text-primary px-2 py-1 rounded-full font-medium">{program.level}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors flex-grow">{program.name}</h3>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <div className="text-sm text-gray-500 mt-auto space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400"/> <span>{program.format}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-gray-400"/> <span>Interest: {program.interests}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            {filteredPrograms.length === 0 && (
              <div className="text-center py-16">
                <p className="text-2xl font-semibold text-gray-700">No programs found.</p>
                <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-gray-50" data-section="program-stats">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProgressBarsSection
              title="Program Excellence"
              subtitle="OUR PROGRAMS"
              skills={[
                { label: 'Program Accreditation', percentage: 100 },
                { label: 'Industry Partnerships', percentage: 95 },
                { label: 'Graduate Employment', percentage: 94 },
                { label: 'Student Satisfaction', percentage: 96 },
              ]}
            />
          </div>
        </section>

        <NextStepCallout
          title="Ready to Find Your Program?"
          description="Explore our diverse range of programs and find the perfect fit for your career goals."
          primaryActionText="Browse All Programs"
          primaryActionLink="/programs"
          secondaryActionText="Contact Admissions"
          secondaryActionLink="/admissions"
        />
      </div>
    </>
  );
};

export default Programs;
