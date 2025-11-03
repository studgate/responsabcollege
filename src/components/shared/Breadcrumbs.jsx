import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (path) => {
    const names = {
      'admissions': 'Admissions',
      'programs': 'Programs',
      'news': 'News',
      'events': 'Events',
      'faculty': 'Faculty',
      'departments': 'Departments',
      'about': 'About',
      'contact': 'Contact Us',
      'library': 'Library',
      'directory': 'Directory',
      'alumni': 'Alumni',
      'athletics': 'Athletics',
      'financial-aid': 'Financial Aid',
      'campus-life': 'Campus Life',
      'store': 'Campus Store',
      'clubs': 'Clubs',
      'first-year': 'First-Year Students',
      'transfer': 'Transfer Students',
      'graduate': 'Graduate Students',
      'continuing-education': 'Continuing Education',
    };
    return names[path] || path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm" role="list">
          <li>
            <Link
              to="/"
              className="text-gray-500 hover:text-primary transition-colors flex items-center touch-manipulation"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = getBreadcrumbName(value);

            return (
              <li key={to} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2 flex-shrink-0" />
                {isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {name}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="text-gray-500 hover:text-primary transition-colors touch-manipulation"
                    onClick={() => trackEvent('breadcrumb_click', 'navigation', name)}
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;

