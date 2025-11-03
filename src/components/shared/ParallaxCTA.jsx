import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ParallaxCTA = () => {
  return (
    <section
      className="relative py-24 md:py-32 text-white"
      data-section="parallax-cta"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600')",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-neutral-900/60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.3em] text-sm text-white/80 mb-4"
        >
          Interested in joining us ?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl"
        >
          Join Us For Information About New Student Admissions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl"
        >
          Learn about deadlines, aid, campus visits, and next steps. Our admissions team is here to help you find your path.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <Button asChild size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold">
            <Link to="/admissions">
              Contact Us <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxCTA;
