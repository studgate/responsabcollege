
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { DollarSign, Award, FileText, Calculator, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const FinancialAid = () => {
  const { toast } = useToast();

  const aidTypes = [
    { title: 'Scholarships', icon: Award, description: 'Merit-based awards that don\'t need to be repaid', amount: 'Up to $25,000/year' },
    { title: 'Grants', icon: DollarSign, description: 'Need-based financial assistance', amount: 'Varies by need' },
    { title: 'Work-Study', icon: Users, description: 'Part-time employment opportunities on campus', amount: 'Up to $3,000/year' },
    { title: 'Loans', icon: TrendingUp, description: 'Federal and private loan options', amount: 'Varies' },
  ];

  const handleApply = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Financial Aid - ResponsabCollege</title>
        <meta name="description" content="Explore financial aid options at ResponsabCollege. Learn about scholarships, grants, work-study programs, and loans to make your education affordable." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Financial aid" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Financial Aid
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto"
            >
              Making quality education accessible and affordable for all students
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Financial Aid</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We offer various forms of financial assistance to help you achieve your educational goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {aidTypes.map((aid, index) => {
                const Icon = aid.icon;
                return (
                  <motion.div
                    key={aid.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{aid.title}</h3>
                    <p className="text-gray-600 mb-3">{aid.description}</p>
                    <p className="text-blue-600 font-semibold">{aid.amount}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">95% of Students Receive Financial Aid</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    The average financial aid package at ResponsabCollege is $32,000 per year, making our world-class education accessible to students from all backgrounds.
                  </p>
                  <Button onClick={handleApply} size="lg">Apply for Financial Aid</Button>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 shadow">
                    <div className="text-3xl font-bold text-blue-600 mb-2">$32,000</div>
                    <div className="text-gray-600">Average Aid Package</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow">
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-gray-600">Students Receiving Aid</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4 flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-gray-900">Complete the FAFSA</p>
                      <p className="text-gray-600">File your Free Application for Federal Student Aid</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4 flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-gray-900">Submit Additional Documents</p>
                      <p className="text-gray-600">Provide any requested verification documents</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4 flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-gray-900">Review Your Award</p>
                      <p className="text-gray-600">Receive and review your financial aid package</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4 flex-shrink-0">4</span>
                    <div>
                      <p className="font-semibold text-gray-900">Accept Your Aid</p>
                      <p className="text-gray-600">Accept the aid you wish to receive</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Deadlines</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Priority FAFSA Deadline</span>
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-gray-600">February 1, 2026</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Scholarship Application</span>
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-gray-600">March 1, 2026</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Aid Acceptance</span>
                      <Calculator className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-gray-600">May 1, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinancialAid;
