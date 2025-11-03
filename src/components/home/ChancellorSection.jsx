import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const ChancellorSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const moreAboutLinks = [
    { label: 'Mission', path: '/about' },
    { label: 'About', path: '/about' },
    { label: 'Alumni', path: '/alumni' },
    { label: 'Athletics', path: '/athletics' },
    { label: 'Donation & Support', path: '/admissions' },
  ];

  return (
    <section className="py-20 bg-white" data-section="chancellor">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-12 items-stretch lg:grid-cols-3">
          {/* Left - Image */}
          <div className="lg:col-span-1 flex">
            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer group w-full h-[300px]">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" 
                    alt="School President portrait" 
                    className="object-cover w-full h-full rounded-lg shadow-xl" 
                  />
                  <div className="flex absolute inset-0 justify-center items-center rounded-lg transition-colors bg-black/20 hover:bg-black/30">
                    <div className="flex justify-center items-center w-16 h-16 rounded-full transition-transform bg-white/90 group-hover:scale-110">
                      <Play className="ml-1 w-8 h-8 text-primary" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-black border-0 [&>button]:text-white [&>button]:hover:bg-white/20">
                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="School President Message"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Middle - Description */}
          <div className="lg:col-span-1">
            <p className="mb-2 text-xs font-semibold tracking-wider uppercase text-primary">OUR SCHOOL PRESIDENT</p>
            <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">School President</h3>
            <div className="space-y-3 leading-relaxed text-gray-700">
              <p>Welcome to ResponsabCollege. Our community thrives on curiosity, compassion, and bold ideas. We are committed to empowering every student to shape a better world through excellent teaching, transformative research, and meaningful engagement.</p>
              <p>As president, I invite you to join us in this journey of discovery and growth. Together, we can build a future that is innovative, inclusive, and impactful.</p>
            </div>
          </div>

          {/* Right - More About Us Links */}
          <div className="lg:col-span-1 flex flex-col">
            <p className="mb-4 text-xs font-semibold tracking-wider uppercase text-primary">MORE ABOUT US</p>
            <div className="space-y-2 flex-1 flex flex-col">
              {moreAboutLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="w-full px-4 py-3 text-center font-semibold text-white rounded-lg transition-all bg-primary hover:bg-yellow-500 flex-1 flex items-center justify-center"
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChancellorSection;
