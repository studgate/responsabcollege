
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import BackToTop from '@/components/shared/BackToTop';
import SkipToContent from '@/components/shared/SkipToContent';
import { trackPageView } from '@/lib/analytics';
import { initAutoTracking } from '@/lib/autoTracking';
import Home from '@/pages/Home';
import FirstYear from '@/pages/personas/FirstYear';
import Transfer from '@/pages/personas/Transfer';
import Graduate from '@/pages/personas/Graduate';
import ContinuingEd from '@/pages/personas/ContinuingEd';
import Departments from '@/pages/Departments';
import DepartmentDetail from '@/pages/DepartmentDetail';
import Programs from '@/pages/Programs';
import ProgramDetail from '@/pages/ProgramDetail';
import News from '@/pages/News';
import NewsDetail from '@/pages/NewsDetail';
import Events from '@/pages/Events';
import EventDetail from '@/pages/EventDetail';
import FinancialAid from '@/pages/FinancialAid';
import Athletics from '@/pages/Athletics';
import SportDetail from '@/pages/SportDetail';
import Alumni from '@/pages/Alumni';
import Library from '@/pages/Library';
import Directory from '@/pages/Directory';
import About from '@/pages/About';
import Admissions from '@/pages/Admissions';
import CampusLife from '@/pages/CampusLife';
import Faculty from '@/pages/Faculty';
import CampusStore from '@/pages/CampusStore';
import Clubs from '@/pages/Clubs';
import SearchPage from '@/pages/SearchPage';
import Features from '@/pages/Features';
import Contact from '@/pages/Contact';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
    
    // Re-initialize auto tracking on route change to catch new elements
    setTimeout(() => {
      initAutoTracking();
    }, 100);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <Header />
      <Breadcrumbs />
      <main id="main-content" className="flex-grow" role="main">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/first-year" element={<FirstYear />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/graduate" element={<Graduate />} />
            <Route path="/continuing-education" element={<ContinuingEd />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:id" element={<DepartmentDetail />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:id" element={<ProgramDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/financial-aid" element={<FinancialAid />} />
            <Route path="/athletics" element={<Athletics />} />
            <Route path="/athletics/:id" element={<SportDetail />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/library" element={<Library />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/store" element={<CampusStore />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
