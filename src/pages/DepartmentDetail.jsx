
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Award, BookOpen, GraduationCap, Briefcase, TrendingUp, Mail, Phone, MapPin } from 'lucide-react';
import NextStepCallout from '@/components/shared/NextStepCallout';

const DepartmentDetail = () => {
  const { id } = useParams();

  const deptData = {
    1: {
      name: 'Engineering',
      description: 'The Engineering Department at ResponsabCollege is at the forefront of innovation, preparing students to solve complex challenges through cutting-edge technology and research. Our programs combine rigorous theoretical foundations with hands-on practical experience, ensuring graduates are ready to excel in their careers.',
      faculty: 85,
      students: 1200,
      programs: ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering', 'Data Science', 'Software Engineering'],
      achievements: [
        'ABET Accredited Programs',
        'Top 10 Engineering School in the Region',
        '95% Job Placement Rate',
        '$50M in Research Funding',
      ],
      highlights: [
        'State-of-the-art laboratories and research facilities',
        'Industry partnerships with leading tech companies',
        'Internship and co-op opportunities',
        'Senior capstone projects addressing real-world problems',
      ],
      contact: {
        email: 'engineering@responsabcollege.edu',
        phone: '(555) 123-4567',
        location: 'Engineering Building, Room 200',
      },
    },
    2: {
      name: 'Business',
      description: 'The Business Department prepares future leaders through comprehensive programs that blend theory with practical application. Our curriculum emphasizes critical thinking, ethical decision-making, and global business perspectives.',
      faculty: 72,
      students: 980,
      programs: ['Business Administration', 'Finance', 'Marketing', 'Management', 'Accounting', 'Entrepreneurship'],
      achievements: [
        'AACSB Accredited',
        'Ranked in Top 25 Business Schools',
        '90% Employment Rate within 6 Months',
        'Strong Alumni Network',
      ],
      highlights: [
        'Case study methodology with real business scenarios',
        'Executive mentorship program',
        'Business plan competitions',
        'International study opportunities',
      ],
      contact: {
        email: 'business@responsabcollege.edu',
        phone: '(555) 123-4568',
        location: 'Business Hall, Room 150',
      },
    },
  };

  const dept = deptData[id] || deptData[1];

  return (
    <>
      <Helmet>
        <title>{dept.name} Department - ResponsabCollege</title>
        <meta name="description" content={dept.description} />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt={`${dept.name} department`} src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link to="/departments" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Departments
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              {dept.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-orange-100"
            >
              Preparing leaders and innovators for tomorrow's challenges
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{dept.faculty}</div>
                <div className="text-gray-600">Faculty Members</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{dept.students.toLocaleString()}</div>
                <div className="text-gray-600">Students Enrolled</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{dept.programs.length}</div>
                <div className="text-gray-600">Programs Offered</div>
              </div>
            </div>

            <div className="prose max-w-none mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Department</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{dept.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
                <div className="space-y-4">
                  {dept.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h3>
                <div className="space-y-4">
                  {dept.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                      <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-900 font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Programs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {dept.programs.map((program, index) => (
                <Link key={index} to="/programs">
                  <div className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors">
                    <span className="text-gray-900 font-medium">{program}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href={`mailto:${dept.contact.email}`} className="text-blue-600 hover:underline">{dept.contact.email}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href={`tel:${dept.contact.phone}`} className="text-blue-600 hover:underline">{dept.contact.phone}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-gray-900">{dept.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NextStepCallout
          title="Ready to Join Our Department?"
          description="Take the next step in your academic journey with ResponsabCollege."
          primaryActionText="Apply Now"
          primaryActionLink="/admissions"
          secondaryActionText="Request Information"
          secondaryActionLink="/admissions"
        />
      </div>
    </>
  );
};

export default DepartmentDetail;
