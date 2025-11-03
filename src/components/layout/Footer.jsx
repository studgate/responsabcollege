
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/shared/Logo';

const Footer = () => {
  const footerLinks = {
    'Admissions': [
      { name: 'First-Year Students', href: '/first-year' },
      { name: 'Transfer Students', href: '/transfer' },
      { name: 'Graduate Students', href: '/graduate' },
      { name: 'Continuing Education', href: '/continuing-education' },
    ],
    'Academics': [
      { name: 'Programs', href: '/programs' },
      { name: 'Departments', href: '/departments' },
      { name: 'Faculty', href: '/faculty' },
      { name: 'Library', href: '/library' },
    ],
    'Campus Life': [
      { name: 'Athletics', href: '/athletics' },
      { name: 'Clubs & Organizations', href: '/clubs' },
      { name: 'Campus Store', href: '/store' },
      { name: 'Events', href: '/events' },
    ],
    'Resources': [
      { name: 'Financial Aid', href: '/financial-aid' },
      { name: 'Directory', href: '/directory' },
      { name: 'News', href: '/news' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  return (
    <footer className="overflow-hidden relative text-gray-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" data-section="footer">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-primary" />
      </div>
      <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-4">
              <Logo variant="dark" />
            </Link>
            <p className="mb-4 text-sm text-gray-400">
              Empowering minds, shaping futures since 1965.
            </p>
            <div className="flex overflow-hidden flex-wrap gap-2 max-w-fit">
              <a href="#" className="flex isolate relative z-0 justify-center items-center w-9 h-9 rounded-full shadow-lg backdrop-blur-sm transition-all bg-gray-800/50 hover:bg-gradient-to-br hover:from-primary hover:to-purple-700 hover:scale-105 hover:shadow-primary/50" aria-label="Visit our Facebook page">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="flex isolate relative z-0 justify-center items-center w-9 h-9 rounded-full shadow-lg backdrop-blur-sm transition-all bg-gray-800/50 hover:bg-gradient-to-br hover:from-primary hover:to-purple-700 hover:scale-105 hover:shadow-primary/50" aria-label="Visit our Twitter page">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="flex isolate relative z-0 justify-center items-center w-9 h-9 rounded-full shadow-lg backdrop-blur-sm transition-all bg-gray-800/50 hover:bg-gradient-to-br hover:from-primary hover:to-purple-700 hover:scale-105 hover:shadow-primary/50" aria-label="Visit our Instagram page">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="flex isolate relative z-0 justify-center items-center w-9 h-9 rounded-full shadow-lg backdrop-blur-sm transition-all bg-gray-800/50 hover:bg-gradient-to-br hover:from-primary hover:to-purple-700 hover:scale-105 hover:shadow-primary/50" aria-label="Visit our LinkedIn page">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="flex isolate relative z-0 justify-center items-center w-9 h-9 rounded-full shadow-lg backdrop-blur-sm transition-all bg-gray-800/50 hover:bg-gradient-to-br hover:from-primary hover:to-purple-700 hover:scale-105 hover:shadow-primary/50" aria-label="Visit our YouTube channel">
                <span className="sr-only">YouTube</span>
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <span className="block mb-4 text-sm font-semibold tracking-wider text-white uppercase">{category}</span>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 underline transition-colors hover:text-purple-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
            <div className="flex items-start space-x-3">
              <MapPin className="mt-1 w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm font-medium text-white">Address</p>
                <p className="text-sm text-gray-400">123 College Avenue, Education City, EC 12345</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="mt-1 w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm font-medium text-white">Phone</p>
                <p className="text-sm text-gray-400">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="mt-1 w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm font-medium text-white">Email</p>
                <a href="mailto:info@responsabcollege.edu" className="text-sm text-gray-400 underline transition-colors hover:text-purple-400">info@responsabcollege.edu</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center pt-8 border-t border-gray-800 md:flex-row">
            <p className="text-sm text-gray-500">
              © 2025 ResponsabCollege. All rights reserved.
            </p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              <a href="#" className="text-sm text-gray-400 underline transition-colors hover:text-purple-400">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 underline transition-colors hover:text-purple-400">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 underline transition-colors hover:text-purple-400">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
