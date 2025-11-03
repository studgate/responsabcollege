
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TopBar from './TopBar';
import AnnouncementBar from './AnnouncementBar';
import Logo from '@/components/shared/Logo';
import { trackEvent, trackSearch, trackCTAClick } from '@/lib/analytics';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";

const allContent = [
    { id: 'p1', type: 'program', title: 'Computer Science', link: '/programs/1' },
    { id: 'p2', type: 'program', title: 'Business Administration', link: '/programs/2' },
    { id: 'n1', type: 'news', title: 'ResponsabCollege Ranks Top 50', link: '/news/1' },
    { id: 'f1', type: 'faculty', title: 'Dr. Evelyn Reed', link: '/faculty'},
    { id: 'page1', type: 'page', title: 'About Us', link: '/about' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Admissions', href: '/admissions', dropdown: [
        { name: 'First-Year Students', href: '/first-year' },
        { name: 'Transfer Students', href: '/transfer' },
        { name: 'Graduate Students', href: '/graduate' },
        { name: 'Continuing Education', href: '/continuing-education' },
      ]
    },
    { name: 'Academics', href: '/programs', dropdown: [
        { name: 'All Programs', href: '/programs' },
        { name: 'Departments', href: '/departments' },
        { name: 'Faculty', href: '/faculty' },
      ]
    },
    { name: 'Campus Life', href: '/campus-life', dropdown: [
        { name: 'Athletics', href: '/athletics' },
        { name: 'Clubs & Organizations', href: '/clubs' },
        { name: 'Campus Store', href: '/store' },
        { name: 'Events', href: '/events' },
      ]
    },
    { name: 'About', href: '/about', dropdown: [
        { name: 'Our Mission', href: '/about' },
        { name: 'News', href: '/news' },
        { name: 'Alumni', href: '/alumni' },
        { name: 'Library', href: '/library' },
        { name: 'Directory', href: '/directory' },
        { name: 'Contact Us', href: '/contact' },
      ]
    },
  ];

  return (
    <>
      <AnnouncementBar
        items={[
          {
            text: 'ResponsabCollege unveils its Innovation & Research Hub to foster cutting-edge discoveries and entrepreneurship.',
            action: () => navigate('/about'),
            actionText: 'Learn More',
          },
          'Spring admissions are open — apply by December 15 for priority review.',
        ]}
        color="bg-amber-400"
        textColor="text-gray-900"
      />
      <TopBar />
      <header className="relative z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="group" aria-label="ResponsabCollege Home">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Logo />
              </motion.div>
            </Link>

            <div className="hidden lg:flex lg:items-center lg:space-x-1" role="navigation" aria-label="Main navigation">
              {navigation.map((item) => (
                <div key={item.name} className="relative" onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                  <Button asChild variant="ghost" className={`px-4 py-2 text-sm font-medium transition-all flex items-center gap-1 rounded-lg touch-manipulation ${ location.pathname.startsWith(item.href) && item.href !== '#' ? 'text-primary bg-gradient-to-r from-purple-50 to-purple-100 font-semibold' : 'text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100' }`}>
                    <Link to={item.href} aria-haspopup={item.dropdown ? 'true' : undefined} aria-expanded={item.dropdown && activeDropdown === item.name ? 'true' : 'false'}> {item.name} {item.dropdown && <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} aria-hidden="true" />} </Link>
                  </Button>
                  <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }} 
                      className="absolute left-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                      role="menu"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          to={subItem.href} 
                          onClick={() => {
                            setActiveDropdown(null);
                            trackEvent('navigation_click', 'engagement', subItem.name);
                          }} 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-primary transition-colors touch-manipulation"
                          role="menuitem"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchOpen(true);
                  trackEvent('search_open', 'engagement', 'header_search_button');
                }} 
                className="hover:bg-purple-50 hover:border-primary hover:text-primary transition-all touch-manipulation"
                aria-label="Open search"
              >
                <Search className="w-5 h-5 mr-2" /> Search
              </Button>
              <Button 
                asChild 
                className="bg-gradient-to-r from-primary to-purple-700 hover:from-purple-700 hover:to-primary shadow-lg hover:shadow-xl transition-all touch-manipulation"
                onClick={() => trackCTAClick('Apply Now', 'header')}
              >
                <Link to="/admissions" aria-label="Apply to ResponsabCollege">Apply Now</Link>
              </Button>
            </div>

            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }} 
              className="lg:hidden border-t border-gray-200 bg-white"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="px-4 py-3 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link 
                      to={item.href} 
                      className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-primary font-medium touch-manipulation" 
                      onClick={() => { 
                        if (!item.dropdown) {
                          setMobileMenuOpen(false);
                          trackEvent('navigation_click', 'engagement', item.name);
                        }
                      }}
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-0.5 space-y-0.5">
                        {item.dropdown.map((subItem) => ( 
                          <Link 
                            key={subItem.name} 
                            to={subItem.href} 
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary touch-manipulation" 
                            onClick={() => {
                              setMobileMenuOpen(false);
                              trackEvent('navigation_click', 'engagement', subItem.name);
                            }}
                            role="menuitem"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button 
                  className="w-full mt-3 touch-manipulation" 
                  asChild
                  onClick={() => trackCTAClick('Apply Now', 'mobile_menu')}
                >
                  <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="p-0 gap-0">
          <Command shouldFilter={false} className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
            <CommandInput 
              placeholder="Search programs, news, faculty..."
              aria-label="Search ResponsabCollege"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                  const query = e.target.value.trim();
                  trackSearch(query);
                  navigate(`/search?q=${encodeURIComponent(query)}`);
                  setSearchOpen(false);
                }
              }}
            />
            <CommandList>
              <CommandEmpty>No results found. Try a different search term.</CommandEmpty>
              <CommandGroup heading="Quick Links">
                {allContent.map(item => (
                   <CommandItem 
                     key={item.id} 
                     onSelect={() => {
                       trackEvent('search_result_click', 'engagement', item.title);
                       navigate(item.link);
                       setSearchOpen(false);
                     }}
                     className="touch-manipulation"
                   >
                     <span>{item.title}</span>
                   </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
