
import React, { useState } from 'react';
import { Mail, Phone, User, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const FacultyFlipCard = ({ faculty }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullBio = faculty.bio || `Dr. ${faculty.name.split(' ')[1]} is a distinguished professor in the ${faculty.department} department with extensive expertise in ${faculty.expertise.join(', ')}. With over ${Math.floor(Math.random() * 20) + 10} years of experience, ${faculty.name} has published numerous research papers, mentored hundreds of students, and contributed significantly to the field. ${faculty.name} holds a Ph.D. from a leading university and continues to push the boundaries of knowledge through innovative research and teaching methods.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flip-card w-full h-80 rounded-xl"
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front of card */}
        <div className="flip-card-front absolute w-full h-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <img
            src={`https://images.unsplash.com/photo-1686643184179-e4b65e15022e?q=80&w=250&h=250&fit=crop`}
            alt={faculty.name}
            className="w-full h-4/6 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg text-gray-900">{faculty.name}</h3>
            <p className="text-sm text-primary">{faculty.title}</p>
            <p className="text-xs text-gray-600 mt-1">{faculty.department}</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="flip-card-back absolute w-full h-full bg-gradient-to-br from-primary to-purple-800 text-white rounded-xl shadow-lg flex flex-col p-4 overflow-hidden">
          <div className="flex-shrink-0">
            <h3 className="font-bold text-xl mb-2">{faculty.name}</h3>
            <p className="text-sm text-purple-200 mb-4">{faculty.department}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {faculty.expertise.map(exp => (
                <span key={exp} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">{exp}</span>
              ))}
            </div>
          </div>
          
          <div className={`flex-1 overflow-y-auto custom-scrollbar mb-4 ${isExpanded ? '' : 'max-h-24'}`}>
            <p className="text-sm text-white/90 leading-relaxed">
              {fullBio}
            </p>
          </div>

          {!isExpanded && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
              }}
              className="flex items-center justify-center gap-1 text-xs text-purple-200 hover:text-white transition-colors mb-2"
            >
              View More <ChevronDown className="w-4 h-4" />
            </button>
          )}

          {isExpanded && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className="flex items-center justify-center gap-1 text-xs text-purple-200 hover:text-white transition-colors mb-2"
            >
              View Less <ChevronUp className="w-4 h-4" />
            </button>
          )}

          <div className="flex items-center justify-center space-x-4 mt-auto pt-2 border-t border-white/20">
            <a href={`mailto:${faculty.email || 'faculty@responsabcollege.edu'}`} className="hover:text-purple-300 transition-colors" aria-label={`Email ${faculty.name}`}>
              <Mail className="w-5 h-5"/>
            </a>
            <a href={`tel:${faculty.phone || '555-123-4567'}`} className="hover:text-purple-300 transition-colors" aria-label={`Call ${faculty.name}`}>
              <Phone className="w-5 h-5"/>
            </a>
            <a href={`/faculty/${faculty.id}`} className="hover:text-purple-300 transition-colors" aria-label={`View profile of ${faculty.name}`}>
              <User className="w-5 h-5"/>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FacultyFlipCard;
