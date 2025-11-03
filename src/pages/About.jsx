
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, Landmark, BookCopy, Eye, CheckCircle, Building, Wrench, Users as UsersIcon } from 'lucide-react';
import FaqSection from '@/components/shared/FaqSection';
import NextStepCallout from '@/components/shared/NextStepCallout';
import PartnerLogos from '@/components/shared/PartnerLogos';
import TestimonialsCarousel from '@/components/shared/TestimonialsCarousel';
import Timeline from '@/components/shared/Timeline';
import { Button } from '@/components/ui/button';

const About = () => {
  const leadership = [
    { name: 'Dr. Michael Anderson', title: 'President', image: 'Portrait of a distinguished male college president' },
    { name: 'Dr. Eleanor Vance', title: 'Provost & VP for Academic Affairs', image: 'Portrait of a senior female academic leader' },
    { name: 'Mr. David Chen', title: 'VP for Finance & Administration', image: 'Portrait of a male executive in a suit' },
    { name: 'Ms. Olivia Rodriguez', title: 'VP for Student Affairs', image: 'Portrait of a smiling female student affairs leader' },
  ];
  
  const history = [
      { year: '1965', event: 'ResponsabCollege is founded with a charter to provide accessible, high-quality education.' },
      { year: '1982', event: 'The School of Engineering is established, marking a major expansion.' },
      { year: '2005', event: 'Launches its first online degree programs, expanding access globally.' },
      { year: '2023', event: 'Opens the new Center for Sustainable Technology and Innovation.' },
  ];

  const faqs = [
      { question: "What is the student-to-faculty ratio?", answer: "The student-to-faculty ratio at ResponsabCollege is 14:1, which allows for personalized attention and meaningful mentorship opportunities." },
      { question: "Is ResponsabCollege accredited?", answer: "Yes, ResponsabCollege is fully accredited by the regional accreditation agency, ensuring our programs meet the highest standards of academic quality." },
  ];

  return (
    <>
      <Helmet>
        <title>About - ResponsabCollege</title>
        <meta name="description" content="Learn about ResponsabCollege's history, mission, and commitment to excellence in education since 1965." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden" data-section="about-header">
          <div className="absolute inset-0 z-0">
            <img className="object-cover w-full h-full" alt="About ResponsabCollege" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-5xl font-bold text-white md:text-6xl"
            >
              About ResponsabCollege
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mb-8 max-w-3xl text-xl text-orange-100 md:text-2xl"
            >
              Empowering minds and shaping futures since 1965
            </motion.p>
          </div>
        </section>
        
        <section className="py-20" data-section="mission-vision">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                 <div className="grid gap-16 items-center md:grid-cols-2">
                     <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                         <img className="rounded-lg shadow-2xl" alt="College campus main hall" src="https://images.unsplash.com/photo-1661473816389-e77f95ac7a07" />
                     </motion.div>
                     <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                         <div className="mb-8">
                             <Eye className="w-12 h-12 text-primary" />
                             <h2 className="mt-4 mb-2 text-3xl font-bold text-gray-900">Our Vision</h2>
                             <p className="text-lg text-gray-600">To be a globally recognized leader in transformative education, research, and community engagement.</p>
                         </div>
                         <div>
                             <Landmark className="w-12 h-12 text-primary" />
                             <h2 className="mt-4 mb-2 text-3xl font-bold text-gray-900">Our Mission</h2>
                             <p className="text-lg text-gray-600">ResponsabCollege is dedicated to providing education that prepares students to become leaders, innovators, and responsible global citizens. We foster critical thinking, creativity, and a commitment to lifelong learning.</p>
                         </div>
                     </motion.div>
                 </div>
            </div>
        </section>

        {/* ResponsabCollege Academics Section */}
        <section className="py-20 bg-white" data-section="academics">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <p className="mb-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">OUR ACADEMICS</p>
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl" style={{ fontFamily: 'serif' }}>
                ResponsabCollege Academics
              </h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: '</>', title: 'Computer Science' },
                { icon: '🎨', title: 'Art & Design' },
                { icon: '🧪', title: 'Sciences' },
                { icon: '⚙️', title: 'Engineering' },
                { icon: '⚖️', title: 'Law Department' },
                { icon: '📊', title: 'Management Business' },
              ].map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-8 bg-white rounded-xl border-2 border-gray-200 transition-all cursor-pointer group hover:bg-blue-600 hover:border-blue-600"
                  onMouseEnter={() => {}}
                >
                  <div className="mb-4 text-4xl text-blue-600 transition-colors group-hover:text-yellow-400">
                    {program.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-white">
                    {program.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 transition-colors group-hover:text-white/90">
                    Lorem ipsum dolor sit amet consec tetur adipiscing elit pretium sollicitudin.
                  </p>
                  <div className="inline-flex items-center font-semibold text-blue-600 transition-colors group-hover:text-yellow-400">
                    READ MORE →
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50" data-section="key-facts">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Key Facts</h2>
                </div>
                <div className="grid gap-8 md:grid-cols-4">
                  {[
                    { icon: Award, value: 'Top 50', label: 'National University' },
                    { icon: Users, value: '14:1', label: 'Student-Faculty Ratio' },
                    { icon: Globe, value: '75+', label: 'Countries Represented' },
                    { icon: TrendingUp, value: '95%', label: 'Job Placement Rate' },
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="p-6 text-center bg-white rounded-lg shadow-md">
                        <Icon className="mx-auto mb-4 w-12 h-12 text-primary" />
                        <div className="mb-2 text-3xl font-bold text-gray-900">{stat.value}</div>
                        <div className="font-medium text-gray-600">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
            </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20" data-section="leadership">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Our Leadership</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                We're passionate about education - the <em>entire</em> educational experience. Whether you are a student, faculty member, or administrator, we built a solution for you.
              </p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: 'Dr. Michael Anderson',
                  title: 'President',
                  description: 'Leading ResponsabCollege with a vision for excellence in education, research, and community engagement.',
                  image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&h=400&fit=crop',
                  bgColor: 'bg-blue-500',
                  bgPattern: 'top-right',
                },
                {
                  name: 'Dr. Eleanor Vance',
                  title: 'Board of Trustees',
                  description: 'Dedicated to advancing academic programs and ensuring student success through strategic planning and oversight.',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop',
                  bgColor: 'bg-teal-500',
                  bgPattern: 'top-right',
                },
                {
                  name: 'Mr. David Chen',
                  title: 'Board of Trustees',
                  description: 'Focused on financial sustainability and resource management to support the university\'s long-term goals.',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop',
                  bgColor: 'bg-slate-700',
                  bgPattern: 'bottom-left',
                },
                {
                  name: 'Ms. Olivia Rodriguez',
                  title: 'Board of Trustees',
                  description: 'Championing student affairs, diversity initiatives, and creating an inclusive campus environment for all.',
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop',
                  bgColor: 'bg-purple-800',
                  bgPattern: 'top-left',
                },
              ].map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden relative rounded-xl shadow-lg"
                >
                  <div className={`${leader.bgColor} relative h-64`}>
                    {/* Pixelated pattern background */}
                    <div className={`absolute ${leader.bgPattern === 'top-right' ? 'top-4 right-4' : leader.bgPattern === 'bottom-left' ? 'bottom-4 left-4' : 'top-4 left-4'} opacity-30`}>
                      <div className="grid grid-cols-2 gap-1">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-white rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                    <img 
                      className="object-cover w-full h-full" 
                      alt={`${leader.name}, ${leader.title}`}
                      src={leader.image}
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="mb-1 text-xl font-bold text-gray-900">{leader.name}</h3>
                    <p className="mb-3 text-sm text-blue-600">{leader.title}</p>
                    <p className="text-sm leading-relaxed text-gray-600">{leader.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey timeline */}
        <Timeline />

        {/* Donate Section */}
        <section className="py-20 bg-gray-50" data-section="donate">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid gap-12 items-stretch mb-16 md:grid-cols-2">
              {/* Image on the left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-full"
              >
                <img 
                  className="object-cover w-full h-full rounded-xl shadow-xl" 
                  alt="Support ResponsabCollege" 
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce" 
                />
              </motion.div>

              {/* Content on the right */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col space-y-6 h-full"
              >
                <h2 className="text-4xl font-bold text-gray-900">Donate to Us</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex justify-center items-center w-10 h-10 bg-blue-600 rounded-full">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-gray-900">Support Student Success</h3>
                      <p className="text-gray-600">
                        Your contributions help us provide scholarships, enhance academic programs, and create opportunities for students to achieve their educational goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex justify-center items-center w-10 h-10 bg-blue-600 rounded-full">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-gray-900">Advance Educational Excellence</h3>
                      <p className="text-gray-600">
                        Your donations enable us to invest in cutting-edge facilities, research initiatives, and innovative teaching methods that prepare students for future success.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button className="py-6 w-full text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700">
                    Donate With Google Pay
                  </Button>
                  <Button className="py-6 w-full text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700">
                    Donate With PayPal
                  </Button>
                  <Button variant="outline" className="py-6 w-full text-lg font-semibold text-blue-600 border-blue-600 hover:bg-blue-50">
                    Pay With Card
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Bottom Feature Blocks */}
            <div className="grid gap-8 mt-16 md:grid-cols-3">
              {[
                {
                  icon: Building,
                  title: 'Innovative Solutions',
                  description: 'Support groundbreaking research and educational initiatives that shape the future of learning.',
                },
                {
                  icon: Wrench,
                  title: 'Advocate for Inclusivity',
                  description: 'Help us create an inclusive environment where every student has the opportunity to thrive.',
                },
                {
                  icon: UsersIcon,
                  title: 'Effective Collaboration',
                  description: 'Enable partnerships and programs that bring together students, faculty, and the community.',
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <PartnerLogos />

        <TestimonialsCarousel />

        <FaqSection faqs={faqs} sectionTitle="About ResponsabCollege" />

        <NextStepCallout />
      </div>
    </>
  );
};
  
export default About;
