
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Briefcase, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Alumni = () => {
  const { toast } = useToast();

  const handleJoin = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Alumni - ResponsabCollege</title>
        <meta name="description" content="Join the ResponsabCollege Alumni Network. Stay connected, give back, and continue your journey with fellow graduates." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Alumni Network</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join 75,000+ graduates making a difference around the world
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Users, value: '75,000+', label: 'Alumni Worldwide' },
                { icon: Briefcase, value: '150+', label: 'Countries' },
                { icon: Heart, value: '$50M+', label: 'Annual Giving' },
                { icon: Calendar, value: '100+', label: 'Events Yearly' },
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

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Connected</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The ResponsabCollege Alumni Association keeps you connected to your alma mater and fellow graduates through networking events, career resources, and lifelong learning opportunities.
                </p>
                <Button onClick={handleJoin} size="lg">Join the Alumni Network</Button>
              </div>
              <div>
                <img className="rounded-lg shadow-2xl" alt="Alumni gathering" src="https://images.unsplash.com/photo-1470781125250-124de17ebdea" />
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Alumni Benefits</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Networking</h4>
                  <p className="text-gray-600">Connect with alumni in your field and location</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Career Services</h4>
                  <p className="text-gray-600">Lifetime access to career counseling and job boards</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Events</h4>
                  <p className="text-gray-600">Exclusive alumni events and reunions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Alumni;
