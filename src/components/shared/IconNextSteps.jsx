import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, MessageSquare, Heart } from 'lucide-react';

const items = [
  { icon: GraduationCap, label: 'Apply', href: '/admissions' },
  { icon: MapPin, label: 'Visit', href: '/events' },
  { icon: MessageSquare, label: 'More Info', href: '/admissions' },
  { icon: Heart, label: 'Give', href: '#' },
];

export default function IconNextSteps({
  background = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
  title = 'Take the Next Step',
}) {
  return (
    <section className="relative py-16" data-section="icon-next-steps">
      <div className="absolute inset-0">
        <img src={background} alt="Campus background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-6">
          <h2 className="text-white text-3xl md:text-4xl font-bold">{title}</h2>
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {items.map(({ icon: Icon, label, href }) => (
              <Link key={label} to={href} className="group">
                <div className="bg-white/90 hover:bg-white transition-colors rounded-xl p-6 text-center border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-gray-900 font-semibold tracking-wide">{label}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

