import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AcademicsPrograms = () => {
  const undergrad = [
    'Business & Management',
    'Computer Science',
    'Medicine and Health',
    'Civil Engineering',
    'Science & Environment',
    'Sociology & Anthropology',
    'Law Department',
    'Agricultural Technology',
    'Social and Political Science',
    'Pharmacy & Pharmacology',
    'International Relations',
    'Mathematics & Statistics',
  ];

  const postgrad = [
    'MPH in Master of Public Health',
    'MEng in Renewable Energy',
    'MSc in Artificial Intelligence',
    'MSc in Data Science',
    'PhD in Computer Science',
    'PhD in Biomedical Research',
    'PhD in Education & Leadership',
    'MBA in Business Administration',
  ];

  const Item = ({ label }) => (
    <Link to="/programs" className="flex justify-between items-center px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-5 border-b border-gray-200 transition-colors group hover:bg-gray-50 touch-manipulation">
      <span className="text-sm sm:text-base text-gray-800 group-hover:text-primary">{label}</span>
      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary flex-shrink-0" />
    </Link>
  );

  // Split items into 4 columns
  const splitIntoColumns = (items, cols = 4) => {
    const result = Array(cols).fill(null).map(() => []);
    items.forEach((item, index) => {
      result[index % cols].push(item);
    });
    return result;
  };

  const undergradCols = splitIntoColumns(undergrad);
  const postgradCols = splitIntoColumns(postgrad);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" data-section="academics-programs">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">Academics & Programs.</h2>
        </div>
        
        {/* Undergraduate Programs */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-3 sm:mb-4">
            <h3 className="flex gap-2 items-center text-lg sm:text-xl font-bold text-gray-900">
              <span className="text-xl sm:text-2xl">🎓</span> Undergraduate Programs
            </h3>
            <Link to="/programs" className="inline-flex items-center text-sm sm:text-base font-semibold text-primary hover:underline">
              See All Programs <ChevronRight className="ml-1 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
            {undergradCols.map((column, colIndex) => (
              <div key={colIndex} className="space-y-0">
                {column.map((item, itemIndex) => (
                  <Item 
                    key={`${colIndex}-${itemIndex}`} 
                    label={item} 
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Postgraduate Programs */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-3 sm:mb-4">
            <h3 className="flex gap-2 items-center text-lg sm:text-xl font-bold text-gray-900">
              <span className="text-xl sm:text-2xl">📚</span> Postgraduate & Professional Programs
            </h3>
            <Link to="/programs" className="inline-flex items-center text-sm sm:text-base font-semibold text-primary hover:underline">
              See All Programs <ChevronRight className="ml-1 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
            {postgradCols.map((column, colIndex) => (
              <div key={colIndex} className="space-y-0">
                {column.map((item, itemIndex) => (
                  <Item key={`${colIndex}-${itemIndex}`} label={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsPrograms;
