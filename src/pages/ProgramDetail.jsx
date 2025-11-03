
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, DollarSign, Users, Award, BookOpen, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import FacultyFlipCard from '@/components/shared/FacultyFlipCard';
import ExploreOtherPrograms from '@/components/shared/ExploreOtherPrograms';

const ProgramDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const programData = {
    1: {
      name: 'Computer Science', department: 'Engineering', level: 'Bachelor of Science', duration: '4 years', credits: '120 credits', tuition: '$45,000/year',
      description: 'Our Computer Science program prepares students for careers in software development, artificial intelligence, cybersecurity, and more. With hands-on projects and industry partnerships, you\'ll gain practical experience alongside theoretical knowledge.',
      careers: ['Software Engineer', 'Data Scientist', 'AI Specialist', 'Cybersecurity Analyst'],
      courses: ['Data Structures', 'Algorithms', 'Machine Learning', 'Web Development', 'Database Systems', 'Operating Systems'],
      faculty: [
        { id: 1, name: 'Dr. Evelyn Reed', title: 'Professor', department: 'Engineering', expertise: ['AI', 'ML'], image: '...' },
        { id: 5, name: 'Dr. Angela Wu', title: 'Assistant Professor', department: 'Engineering', expertise: ['Robotics'], image: '...' },
      ],
    },
    2: {
      name: 'Business Administration', department: 'Business', level: 'Bachelor of Business Administration', duration: '4 years', credits: '120 credits', tuition: '$42,000/year',
      description: 'The Business Administration program develops future leaders with comprehensive knowledge in management, finance, marketing, and entrepreneurship.',
      careers: ['Business Manager', 'Financial Analyst', 'Marketing Director', 'Entrepreneur'],
      courses: ['Accounting', 'Marketing', 'Finance', 'Business Strategy', 'Leadership', 'Economics'],
      faculty: [
        { id: 2, name: 'Dr. Samuel Chen', title: 'Associate Professor', department: 'Business', expertise: ['Marketing'], image: '...' },
        { id: 6, name: 'Dr. David Kim', title: 'Professor', department: 'Business', expertise: ['Economics'], image: '...' },
      ],
    },
  };

  const program = programData[id] || programData[1];

  const handleApply = () => {
    toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀", duration: 3000 });
  };

  return (
    <>
      <Helmet>
        <title>{program.name} - ResponsabCollege</title>
        <meta name="description" content={program.description} />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-br from-primary to-purple-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/programs" className="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Programs
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="text-sm font-semibold text-purple-200 mb-2">{program.department}</div>
              <h1 className="text-5xl font-bold mb-4">{program.name}</h1>
              <p className="text-xl text-purple-100">{program.level}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {icon: Clock, label: 'Duration', value: program.duration},
                {icon: BookOpen, label: 'Credits', value: program.credits},
                {icon: DollarSign, label: 'Tuition', value: program.tuition},
                {icon: Users, label: 'Class Size', value: '20-25'},
              ].map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-white rounded-lg shadow p-6 text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                    <div className="font-bold text-gray-900">{item.value}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{program.description}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Courses</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {program.courses.map((course) => (
                    <div key={course} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                      <Award className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-900">{course}</span>
                    </div>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.careers.map((career) => (
                    <div key={career} className="flex items-center space-x-3 bg-purple-50 p-4 rounded-lg">
                      <Briefcase className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-900 font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:sticky top-24 self-start">
                <div className="bg-gradient-to-br from-primary to-purple-800 rounded-xl shadow-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Ready to Apply?</h3>
                  <Button onClick={handleApply} className="w-full bg-white text-primary hover:bg-purple-50 mb-4">Apply Now</Button>
                  <Button onClick={handleApply} variant="outline" className="w-full border-white text-white hover:bg-white/10">Request Information</Button>
                  <div className="mt-6 pt-6 border-t border-purple-400">
                    <p className="text-sm text-purple-100 mb-2">Questions?</p>
                    <p className="font-semibold">admissions@responsabcollege.edu</p>
                    <p className="font-semibold">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50" data-section="program-faculty">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4"/>
                    <h2 className="text-4xl font-bold text-gray-900">Meet Your Professors</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-2">Learn from dedicated experts in the {program.name} program.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {program.faculty.map(faculty => (
                        <FacultyFlipCard key={faculty.id} faculty={faculty} />
                    ))}
                </div>
            </div>
        </section>

        {/* Explore Other Programs */}
        <ExploreOtherPrograms />
      </div>
    </>
  );
};

export default ProgramDetail;
