import React from 'react';
import { Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-gray-300 text-sm py-2 hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
            <a href="mailto:info@responsabcollege.edu" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@responsabcollege.edu</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors" aria-label="Visit our Facebook page">
              <span className="sr-only">Facebook</span>
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Visit our Twitter page">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Visit our LinkedIn page">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Visit our Instagram page">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Visit our YouTube channel">
              <span className="sr-only">YouTube</span>
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

