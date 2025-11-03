
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Briefcase, FlaskRound as Flask, Heart, Palette, Globe, Users, Award, BookOpen, GraduationCap, TrendingUp } from 'lucide-react';
import NextStepCallout from '@/components/shared/NextStepCallout';

const Departments = () => {
  const departments = [
    { id: 1, name: 'Engineering', icon: Cpu, programs: 15, students: 1200, faculty: 85, color: 'from-blue-500 to-blue-700' },
    { id: 2, name: 'Business', icon: Briefcase, programs: 12, students: 980, faculty: 72, color: 'from-green-500 to-green-700' },
    { id: 3, name: 'Sciences', icon: Flask, programs: 18, students: 1100, faculty: 95, color: 'from-purple-500 to-purple-700' },
    { id: 4, name: 'Health Sciences', icon: Heart, programs: 10, students: 850, faculty: 68, color: 'from-red-500 to-red-700' },
    { id: 5, name: 'Arts & Humanities', icon: Palette, programs: 14, students: 720, faculty: 55, color: 'from-pink-500 to-pink-700' },
    { id: 6, name: 'Social Sciences', icon: Globe, programs: 11, students: 650, faculty: 48, color: 'from-orange-500 to-orange-700' },
  ];

  const stats = [
    { icon: Users, value: '5,500+', label: 'Total Students' },
    { icon: Award, value: '80+', label: 'Programs Offered' },
    { icon: GraduationCap, value: '423', label: 'Faculty Members' },
    { icon: TrendingUp, value: '95%', label: 'Graduation Rate' },
  ];

  return (
    <>
      <Helmet>
        <title>Departments - ResponsabCollege</title>
        <meta name="description" content="Explore academic departments at ResponsabCollege. Discover programs across Engineering, Business, Sciences, Health, Arts, and Social Sciences." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Academic departments" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Academic Departments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto"
            >
              Explore our diverse range of departments and discover your academic home
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => {
                const Icon = dept.icon;
                return (
                  <motion.div
                    key={dept.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to={`/departments/${dept.id}`}>
                      <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                        <div className={`h-2 bg-gradient-to-r ${dept.color}`}></div>
                        <div className="p-8">
                          <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${dept.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {dept.name}
                          </h3>
                          <div className="space-y-2 mb-4 text-gray-600">
                            <p>{dept.programs} Programs Available</p>
                            <p>{dept.students.toLocaleString()} Students</p>
                            <p>{dept.faculty} Faculty Members</p>
                          </div>
                          <div className="flex items-center text-blue-600 font-medium">
                            Explore Department <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Overview</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our departments are committed to excellence in teaching, research, and student success
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-8 text-center"
                  >
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Departments?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: 'Comprehensive Curriculum',
                  description: 'Our programs are designed to meet industry standards and prepare students for real-world challenges.',
                },
                {
                  icon: Users,
                  title: 'Expert Faculty',
                  description: 'Learn from distinguished professors who are leaders in their fields and passionate about teaching.',
                },
                {
                  icon: Award,
                  title: 'Research Opportunities',
                  description: 'Engage in cutting-edge research projects and contribute to meaningful discoveries.',
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-8"
                  >
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <NextStepCallout
          title="Ready to Explore a Department?"
          description="Learn more about our programs, faculty, and opportunities in each department."
          primaryActionText="Browse Programs"
          primaryActionLink="/programs"
          secondaryActionText="Contact Admissions"
          secondaryActionLink="/admissions"
        />
      </div>
    </>
  );
};

export default Departments;
