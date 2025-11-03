import React from 'react';
import { GraduationCap } from 'lucide-react';

const Logo = ({ className = '', showText = true, variant = 'light' }) => {
  const textColor = variant === 'dark' ? 'text-white' : 'text-gray-900';
  const collegeColor = variant === 'dark' ? 'text-yellow-400' : 'text-primary';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
          <GraduationCap className="w-7 h-7 text-white" strokeWidth={2.5} />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`text-xl font-bold ${textColor} leading-tight`}>Responsab</span>
          <span className={`text-lg font-semibold ${collegeColor} leading-tight`}>College</span>
        </div>
      )}
    </div>
  );
};

export default Logo;

