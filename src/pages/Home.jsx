
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Award, Calendar, TrendingUp, Globe, ShoppingCart, UserCheck, MessageSquare, ChevronRight, Briefcase, HardHat, BarChart, Lightbulb, Play, Pause, ChevronLeft, ChevronRight as ChevronRightIcon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import IconNextSteps from '@/components/shared/IconNextSteps';
import FaqSection from '@/components/shared/FaqSection';
import HomeFaqFancy from '@/components/home/HomeFaqFancy';
import AcademicsPrograms from '@/components/home/AcademicsPrograms';
import ChancellorSection from '@/components/home/ChancellorSection';
import VisitCampus from '@/components/home/VisitCampus';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
// Testimonials removed on Home; retained on other pages
import ParallaxCTA from '@/components/shared/ParallaxCTA';
import PartnerLogos from '@/components/shared/PartnerLogos';
import Timeline from '@/components/shared/Timeline';
import OpportunitiesStats from '@/components/shared/OpportunitiesStats';
import FeatureGridSection from '@/components/home/FeatureGridSection';
import ForEaglesGallery from '@/components/shared/ForEaglesGallery';

const PersonaTabTrigger = ({ value, title, active, imageUrl, accentRing = 'ring-primary', accentArrow = 'border-t-primary' }) => (
  <TabsTrigger
    value={value}
    className={`relative overflow-visible rounded-xl sm:rounded-2xl p-0 h-40 sm:h-48 md:h-56 w-[280px] sm:w-auto flex-shrink-0 lg:flex-shrink group border-2 transition-all touch-manipulation ${active ? `ring-4 ${accentRing} shadow-2xl scale-105 border-primary` : 'hover:shadow-xl hover:scale-[1.02] border-gray-200'}`}
  >
    <img src={imageUrl} alt={`${title || 'Persona'} card background image`} className="object-cover absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-110" />
    <div className={`absolute inset-0 rounded-xl sm:rounded-2xl transition-all ${active ? 'bg-gradient-to-tr to-transparent from-black/40 via-black/30' : 'bg-gradient-to-tr to-transparent from-black/60 via-black/20 group-hover:from-black/50'}`} />
    <div className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 left-3 sm:left-4">
      <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 mb-1.5 sm:mb-2 text-xs sm:text-sm font-semibold text-white rounded-full border backdrop-blur-md bg-white/30 border-white/40">I am a</div>
      <div className={`text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-1.5 sm:gap-2 ${active ? 'text-yellow-300' : 'group-hover:text-yellow-200'} transition-colors`}>
        {title}
        <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 transition-transform ${active ? 'rotate-180' : ''}`} />
      </div>
      {active && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="px-2 sm:px-3 py-0.5 sm:py-1 mt-2 sm:mt-3 text-[10px] sm:text-xs font-medium text-white rounded-lg border backdrop-blur-sm bg-white/20 border-white/30"
        >
          Active Selection
        </motion.div>
      )}
    </div>
    {active && (
      <motion.div 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }}
        className={`pointer-events-none z-20 absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-r-[14px] border-t-[14px] border-transparent ${accentArrow || 'border-t-primary'}`}
        aria-hidden="true" 
      />
    )}
  </TabsTrigger>
);

const Home = () => {
    const personas = [
        { 
            value: 'first-year', 
            title: 'First-Year Student', 
            image: 'A group of diverse first year students walking on campus',
            imageUrl: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b',
            description: 'Begin your journey with us and discover endless possibilities.',
            accentRing: 'ring-primary',
            accentArrow: 'border-t-primary',
            accentBorder: 'border-t-primary',
            links: [
                { name: 'Undergraduate Admissions', href: '/admissions' },
                { name: 'How to Apply', href: '/admissions' },
                { name: 'First-Year Housing', href: '/campus-life' }
            ],
            buttonText: 'Learn More for First-Years',
            buttonLink: '/first-year',
            topics: [
                { icon: BookOpen, name: 'Arts & Humanities' }, { icon: Briefcase, name: 'Business' }, { icon: HardHat, name: 'Engineering' }
            ]
        },
        { 
            value: 'transfer', 
            title: 'Transfer Student', 
            image: 'A transfer student reviewing documents with an advisor',
            imageUrl: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9',
            description: 'Continue your academic path and make a seamless transition to ResponsabCollege.',
            accentRing: 'ring-emerald-500',
            accentArrow: 'border-t-emerald-500',
            accentBorder: 'border-t-emerald-500',
            links: [
                { name: 'Transfer Applicant Info', href: '/transfer' }, { name: 'Transfer Course Equivalencies', href: '#' }, { name: 'Financial Aid for Transfers', href: '/financial-aid' }
            ],
            buttonText: 'Explore Transfer Options',
            buttonLink: '/transfer',
            topics: [
                { icon: BarChart, name: 'Data Science' }, { icon: Users, name: 'Social Sciences' }, { icon: BookOpen, name: 'Health & Medicine' }
            ]
        },
        { 
            value: 'graduate', 
            title: 'Graduate Student', 
            image: 'A graduate student working in a modern science lab',
            imageUrl: 'https://images.unsplash.com/photo-1577896849786-738ed6c78bd3',
            description: 'Advance your career and expertise with our world-class graduate programs.',
            accentRing: 'ring-rose-500',
            accentArrow: 'border-t-rose-500',
            accentBorder: 'border-t-rose-500',
            links: [
                { name: 'Graduate Admissions', href: '/graduate' }, { name: 'Explore Graduate Programs', href: '/programs' }, { name: 'Research Opportunities', href: '#' }
            ],
            buttonText: 'View Graduate Programs',
            buttonLink: '/graduate',
            topics: [
                { icon: Briefcase, name: 'MBA Program' }, { icon: Lightbulb, name: 'Research' }, { icon: HardHat, name: 'Advanced Engineering' }
            ]
        },
        { 
            value: 'continuing-ed', 
            title: 'Continuing Ed', 
            image: 'A professional attending a development workshop',
            imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
            description: 'Upskill and stay competitive with flexible courses designed for working professionals.',
            accentRing: 'ring-amber-500',
            accentArrow: 'border-t-amber-500',
            accentBorder: 'border-t-amber-500',
            links: [
                { name: 'Certificate Programs', href: '/continuing-education' }, { name: 'Online Courses', href: '#' }, { name: 'Career Development', href: '#' }
            ],
            buttonText: 'Discover Our Courses',
            buttonLink: '/continuing-education',
            topics: [
                { icon: Briefcase, name: 'Project Management' }, { icon: BarChart, name: 'Digital Marketing' }, { icon: Users, name: 'Leadership' }
            ]
        },
      ];

  const stats = [
    { label: 'Students Enrolled', value: '15,000+' },
    { label: 'Academic Programs', value: '200+' },
    { label: 'Faculty Members', value: '800+' },
    { label: 'Countries Represented', value: '75+' },
  ];

  const news = [
    { id: 1, title: 'ResponsabCollege Ranks Top 50 in National Universities', date: 'October 28, 2025', category: 'Rankings' },
    { id: 2, title: 'New Research Center Opens for Sustainable Technology', date: 'October 25, 2025', category: 'Research' },
    { id: 3, title: 'Fall Career Fair Connects Students with Top Employers', date: 'October 20, 2025', category: 'Events' },
    { id: 4, title: 'Global Learning: Study Abroad Programs Expand', date: 'October 15, 2025', category: 'Academics' },
  ];

  const faqs = [
    { question: "What are the admission requirements?", answer: "Admission requirements vary by program and student type. Generally, we look for a strong academic record, extracurricular involvement, and a compelling personal essay. Please visit the specific admissions page for your student type for detailed information." },
    { question: "Can I visit the campus?", answer: "Absolutely! We offer guided campus tours, open house events, and virtual tours. Visiting is a great way to experience our community. You can schedule a visit through our Admissions page." },
    { question: "What financial aid options are available?", answer: "We offer a wide range of financial aid, including scholarships, grants, work-study programs, and loans. Over 95% of our students receive some form of financial aid. We encourage you to fill out the FAFSA to see what you qualify for." },
  ];
  
  const [activeTab, setActiveTab] = React.useState('first-year');
  // Hero slider state
  const heroSlides = [
    { type: 'video', src: 'https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4', alt: 'Students on campus video' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1496302662116-85c5c5410f46', alt: 'Campus building in morning light' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51', alt: 'Students collaborating in library' },
  ];
  const [heroIndex, setHeroIndex] = React.useState(0);
  const [heroPlaying, setHeroPlaying] = React.useState(true);
  const campusRegions = [
    { title: 'Main Quad', slideIndex: 1 },
    { title: 'Innovation Hub', slideIndex: 2 },
    { title: 'Student Life', slideIndex: 0 },
  ];
  React.useEffect(() => {
    if (!heroPlaying) return;
    const id = setInterval(() => setHeroIndex((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, [heroPlaying]);

  return (
    <>
      <Helmet>
        <title>ResponsabCollege - Excellence in Education</title>
        <meta name="description" content="ResponsabCollege offers world-class education for first-year, transfer, graduate, and continuing education students. Discover your future with us." />
      </Helmet>

      <div className="bg-white">
        {/* Hero Showcase (video + images slider) */}
        <section className="relative h-[600px] sm:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden" data-section="hero">
            <div className="absolute inset-0 z-0">
            {heroSlides[heroIndex].type === 'video' ? (
              <video 
                key={heroSlides[heroIndex].src} 
                className="object-cover w-full h-full transition-transform duration-700 scale-105" 
                src={heroSlides[heroIndex].src} 
                autoPlay 
                muted 
                loop 
                playsInline 
                crossOrigin="anonymous"
                aria-label={heroSlides[heroIndex].alt || "Hero video showcasing ResponsabCollege campus"} 
              />
            ) : (
              <img key={heroSlides[heroIndex].src} className="object-cover w-full h-full transition-transform duration-700 scale-105" alt={heroSlides[heroIndex].alt || "ResponsabCollege campus hero slide"} src={heroSlides[heroIndex].src} />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-purple-800/80 to-purple-900/70 animate-gradient"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>
          
          <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full h-full flex flex-col">
            {/* Left Content - Title, Subtitle, Buttons, Persona Links - COMPLETELY SEPARATE */}
            <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                Shape <span className="inline-block relative">
                  <span className="relative z-[1]">Your</span>
                  <span className="absolute inset-x-0 bottom-1 h-2 sm:h-3 bg-yellow-300/70 -z-[1] rounded"></span>
                </span>
                <span> </span>
                <span className="inline-block px-2 -mx-1 rounded bg-white/15">Future</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mx-auto mb-6 sm:mb-8 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-purple-100 lg:mx-0">Real-world learning. Research that matters. A community that lifts you.</motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
                <Button asChild size="lg" className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg flex-1 sm:flex-none"><Link to="/admissions">Apply Now <ArrowRight className="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg text-white border-white bg-white/10 hover:bg-white hover:text-primary flex-1 sm:flex-none"><Link to="/events">Schedule a Visit</Link></Button>
              </motion.div>
              {/* Persona Quick Links */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4"
              >
                {personas.map((p) => (
                  <Link key={p.value} to={p.buttonLink} className="glass-dark px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg text-white hover:bg-white/20 transition-colors text-xs sm:text-sm font-medium border border-white/20 touch-manipulation">
                    I am a {p.title}
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Hero Options - ABSOLUTELY POSITIONED, ALIGNED WITH BUTTONS */}
            <div className="hidden lg:flex absolute right-8 top-0 h-full items-center">
              <div className="w-64 overflow-hidden shadow-lg backdrop-blur-sm bg-yellow-400/55 border border-white/30">
                <div className="flex flex-col">
                  <Link
                    to="/programs"
                    className="min-h-[145px] p-6 hover:bg-yellow-400/65 transition-all group"
                  >
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-yellow-900 transition-colors drop-shadow-lg">Academics Help</h3>
                    <p className="text-white/95 text-sm drop-shadow-md leading-relaxed">One of the world's most the dynamics capitals.</p>
                  </Link>
                  <Link
                    to="/campus-life"
                    className="min-h-[145px] p-6 hover:bg-yellow-400/65 transition-all group"
                  >
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-yellow-900 transition-colors drop-shadow-lg">Student Life</h3>
                    <p className="text-white/95 text-sm drop-shadow-md leading-relaxed">One of the world's most the dynamics capitals.</p>
                  </Link>
                  <Link
                    to="/admissions"
                    className="min-h-[145px] p-6 hover:bg-yellow-400/65 transition-all group"
                  >
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-yellow-900 transition-colors drop-shadow-lg">Student Admission</h3>
                    <p className="text-white/95 text-sm drop-shadow-md leading-relaxed">One of the world's most the dynamics capitals.</p>
                  </Link>
                  <Link
                    to="/campus-life"
                    className="min-h-[145px] p-6 hover:bg-yellow-400/65 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white text-xl font-bold group-hover:text-yellow-900 transition-colors drop-shadow-lg">Campus Life</h3>
                      <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-white/40 transition-colors backdrop-blur-sm shadow-md">
                        <Play className="w-5 h-5 text-white ml-0.5 drop-shadow-lg" />
                      </div>
                    </div>
                    <p className="text-white/95 text-sm drop-shadow-md leading-relaxed">One of the world's most the dynamics capitals.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Floating info badges - Hidden on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden md:block absolute left-4 bottom-4 z-10 md:left-10 md:bottom-6"
          >
            <div className="p-4 w-60 text-left text-white rounded-2xl border shadow-2xl glass-dark md:p-5 border-white/20 hover-lift">
              <div className="mb-1 text-xs font-semibold tracking-wide text-yellow-300">Career Outcomes</div>
              <div className="text-2xl font-bold">95% employed or in grad school</div>
              <div className="flex gap-2 items-center mt-3 text-sm text-purple-100"><TrendingUp className="w-4 h-4 text-yellow-300" /> Internships with 400+ partners</div>
            </div>
          </motion.div>

          {/* Hero Navigation Controls - Hidden on mobile */}
          <div className="hidden sm:block absolute left-4 top-1/2 z-10 -translate-y-1/2">
            <button 
              onClick={() => setHeroIndex((heroIndex - 1 + heroSlides.length) % heroSlides.length)} 
              className="p-2 text-white rounded-full bg-white/20 hover:bg-white/30 transition-colors touch-manipulation"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden sm:block absolute right-4 top-1/2 z-10 -translate-y-1/2">
            <button 
              onClick={() => setHeroIndex((heroIndex + 1) % heroSlides.length)} 
              className="p-2 text-white rounded-full bg-white/20 hover:bg-white/30 transition-colors touch-manipulation"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden sm:block absolute right-4 bottom-4 z-10">
            <button 
              onClick={() => setHeroPlaying(p => !p)} 
              className="p-2 text-white rounded-full bg-white/20 hover:bg-white/30 transition-colors touch-manipulation"
              aria-label={heroPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {heroPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>

          {/* Slider Controls */}
          <div className="flex absolute inset-x-0 bottom-6 z-10 gap-3 justify-center items-center">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setHeroIndex(i)} className={`h-2 rounded-full transition-all ${i === heroIndex ? 'w-8 bg-white' : 'w-2 bg-white/60 hover:bg-white'}`} aria-label={`Go to slide ${i+1}`} />
            ))}
          </div>
        </section>

        {/* Stats Section - Replaced with Why Choose Us */}
        <OpportunitiesStats />

        {/* Academics & Programs */}
        <AcademicsPrograms />

        {/* Personas Tabs Section (image triggers) */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white" data-section="personas-tabs">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
                    <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Find Your Path</h2>
                    <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-gray-600">We have a place for everyone. Select your path to see how ResponsabCollege fits you.</p>
                </div>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    {/* Mobile: Horizontal scrolling TabsList */}
                    <div className="lg:hidden mb-8 -mx-4 px-4">
                      <div className="overflow-x-auto scrollbar-hide">
                        <TabsList className="inline-flex gap-4 p-0 h-auto bg-transparent min-w-max">
                          {personas.map(p => (
                            <PersonaTabTrigger key={p.value}
                              value={p.value}
                              title={p.title}
                              active={activeTab === p.value}
                              imageUrl={p.imageUrl}
                              accentRing={p.accentRing}
                              accentArrow={p.accentArrow}
                            />
                          ))}
                        </TabsList>
                      </div>
                    </div>
                    {/* Desktop: Grid layout */}
                    <TabsList className="hidden lg:grid overflow-visible relative z-10 grid-cols-4 gap-6 p-0 mb-12 h-auto bg-transparent">
                        {personas.map(p => (
                          <PersonaTabTrigger key={p.value}
                            value={p.value}
                            title={p.title}
                            active={activeTab === p.value}
                            imageUrl={p.imageUrl}
                            accentRing={p.accentRing}
                            accentArrow={p.accentArrow}
                          />
                        ))}
                    </TabsList>
                    {personas.map(p => (
                         <TabsContent key={p.value} value={p.value} className="mt-0">
                            <motion.div 
                              initial={{ opacity: 0, y: 20 }} 
                              animate={{ opacity: 1, y: 0 }} 
                              transition={{ duration: 0.5 }}
                              className={`relative bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 ${p.accentBorder} shadow-xl`}
                            >
                              {/* Visual grouping background */}
                              <div className="absolute inset-0 rounded-3xl border-2 border-gray-100 bg-white/50" />
                              
                              {/* Content wrapper */}
                              <div className="relative z-10">
                                {/* Header Section */}
                                <div className="pb-4 sm:pb-6 mb-6 sm:mb-8 border-b-2 border-gray-200">
                                  <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 rounded-full bg-primary/10">
                                    <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-primary">{p.title} Path</span>
                                  </div>
                                  <h3 className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl md:text-5xl font-bold text-gray-900">{p.title}</h3>
                                  <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-gray-600">{p.description}</p>
                                </div>

                                {/* Main Content Grid */}
                                <div className="grid gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12 lg:grid-cols-2 lg:gap-12">
                                  <div>
                                    <h4 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-gray-900">Quick Links</h4>
                                    <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                                        {p.links.map(link => (
                                            <Link key={link.name} to={link.href} className="flex items-center p-3 sm:p-4 bg-white rounded-xl border border-gray-200 transition-all group hover:border-primary hover:shadow-lg touch-manipulation">
                                                <ChevronRight className="flex-shrink-0 mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 transition-colors text-primary/60 group-hover:text-primary"/>
                                                <span className="text-base sm:text-lg font-medium text-gray-700 group-hover:text-primary">{link.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                    <Button asChild size="lg" className="w-full sm:w-auto">
                                      <Link to={p.buttonLink}>
                                        {p.buttonText} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                      </Link>
                                    </Button>
                                  </div>
                                  <div className="overflow-hidden w-full h-48 sm:h-64 rounded-xl sm:rounded-2xl border-4 border-white shadow-2xl lg:h-96">
                                    <img className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" alt={`${p.title || 'Program'} showcase at ResponsabCollege`} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                                  </div>
                                </div>
                                
                                {/* Programs Section - Better Grouped */}
                                <div className="pt-6 sm:pt-8 border-t-2 border-gray-200">
                                  <div className="mb-6 sm:mb-8 text-center">
                                    <h4 className="mb-2 text-xl sm:text-2xl lg:text-3xl md:text-4xl font-bold text-gray-900">Popular Programs for {p.title}</h4>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">Explore programs that align with your educational goals</p>
                                  </div>
                                  <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8 sm:grid-cols-2 lg:grid-cols-3">
                                      {p.topics.map(topic => {
                                          const Icon = topic.icon;
                                          return (
                                              <Link key={topic.name} to="/programs" className="block p-4 sm:p-6 text-left bg-white rounded-xl border-2 border-gray-200 transition-all group hover:border-primary hover:shadow-xl hover-lift touch-manipulation">
                                                  <div className="flex gap-3 sm:gap-4 items-center">
                                                      <div className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br to-purple-100 rounded-xl transition-all from-primary/10 group-hover:from-primary group-hover:to-purple-600">
                                                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 transition-colors group-hover:text-white"/>
                                                      </div>
                                                      <span className="text-base sm:text-lg font-bold text-gray-800 transition-colors group-hover:text-primary">{topic.name}</span>
                                                  </div>
                                              </Link>
                                          )
                                      })}
                                  </div>
                                  <div className="text-center">
                                      <Button asChild variant="outline" size="lg">
                                        <Link to="/programs">See All Programs <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                      </Button>
                                  </div>
                                </div>
                                
                                {/* Graduate Benefits Section - Only for Graduate tab */}
                                {p.value === 'graduate' && (
                                  <div className="pt-12 border-t-2 border-gray-200">
                                    <div className="mb-8">
                                      <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
                                        Graduate Benefits
                                      </h4>
                                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        Duis condimentum nunc metus, maximus porta velit temporin. Intincidunt leo viverra, sodales ex eu, posuere purus. Duis in augue vestibulum, aliquet nulla vitae, tempus tellus. Phasellus sit amet scelerisque quam, vitae vulputate massa. Sed tempus consequat nisi eu tristique scelerisque quam aliquet nulla.
                                      </p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-6">
                                      {[
                                        { title: 'Self Development', icon: '⭐', bgColor: 'bg-yellow-400', textColor: 'text-gray-900' },
                                        { title: 'Spirituality', icon: '🌿', bgColor: 'bg-green-600', textColor: 'text-white' },
                                        { title: 'Alumni', icon: '📚', bgColor: 'bg-blue-600', textColor: 'text-white' },
                                      ].map((benefit, index) => (
                                        <motion.div
                                          key={benefit.title}
                                          initial={{ opacity: 0, y: 20 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.5, delay: index * 0.1 }}
                                          className={`${benefit.bgColor} rounded-xl p-8 text-center ${benefit.textColor}`}
                                        >
                                          <div className="text-5xl mb-4">{benefit.icon}</div>
                                          <h5 className={`text-2xl font-bold mb-3 ${benefit.textColor}`} style={{ fontFamily: 'serif' }}>
                                            {benefit.title}
                                          </h5>
                                          <p className={`text-sm ${benefit.textColor === 'text-white' ? 'text-white/90' : 'text-gray-700'}`}>
                                            Lorem ipsum dolor sit amet consec tetur adipiscing.
                                          </p>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                         </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>

        {/* Feature Grid Section - Replaces Why Choose */}
        <FeatureGridSection />

        {/* For ResponsabCollege, By ResponsabCollege Gallery */}
        <ForEaglesGallery />

        {/* Stories & Events Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative z-20" data-section="stories-events">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl">
                ResponsabCollege <span className="text-gradient-primary">Stories & Events</span>
              </h2>
              <p className="text-lg text-center text-gray-600">See what's happening across our vibrant community.</p>
            </motion.div>
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Stories</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {news.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col h-full"
                    >
                      <Link to={`/news/${item.id}`} className="overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-lg group hover-lift hover-glow flex flex-col h-full">
                        <div className="overflow-hidden relative h-48">
                          <img className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" alt={`${item.title || 'ResponsabCollege'} news article image`} src="https://images.unsplash.com/photo-1484615165495-e2f96ea746b2" />
                          <div className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white rounded-full bg-primary">{item.category}</div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center mb-3 text-xs text-gray-500"><Calendar className="mr-2 w-4 h-4" />{item.date}</div>
                          <div className="text-lg font-bold leading-tight text-gray-900 transition-colors group-hover:text-primary flex-grow">{item.title}</div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link to="/news" className="inline-flex items-center font-semibold text-primary hover:underline">View More Stories <ChevronRightIcon className="ml-1 w-4 h-4"/></Link>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Upcoming Events</h3>
                <div className="space-y-4 flex-grow">
                  {[
                    { date: '4 NOV', title: 'Fall Open House', color: 'from-purple-500 to-purple-700' },
                    { date: '5 NOV', title: 'Day of Service', color: 'from-emerald-500 to-emerald-700' },
                    { date: '18 NOV', title: 'Research & Innovation Symposium', color: 'from-blue-500 to-blue-700' },
                    { date: '13 JAN', title: 'Grad Programs Virtual Info Session', color: 'from-amber-500 to-amber-700' },
                    { date: '14 JAN', title: 'Financial Aid Workshop', color: 'from-rose-500 to-rose-700' },
                  ].map((ev, index) => (
                    <motion.div
                      key={ev.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex-1"
                    >
                      <Link to="/events" className="flex justify-between items-center h-full p-4 bg-white rounded-xl border border-gray-100 shadow-md transition-all hover-lift hover:shadow-xl">
                        <div className="flex gap-4 items-center">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${ev.color} flex flex-col items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}>
                            <div className="text-xl leading-none">{ev.date.split(' ')[0]}</div>
                            <div className="text-xs tracking-widest">{ev.date.split(' ')[1]}</div>
                          </div>
                          <div className="font-semibold text-gray-800">{ev.title}</div>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-primary flex-shrink-0" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link to="/events" className="inline-flex items-center font-semibold text-primary hover:underline">View More Events <ChevronRightIcon className="ml-1 w-4 h-4"/></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Campus Features Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50" data-section="campus-features">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12 text-center"
                >
                  <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                    Campus <span className="text-gradient-primary">Resources</span>
                  </h2>
                  <p className="mx-auto max-w-2xl text-xl text-gray-600">
                    Everything you need to succeed, all in one place
                  </p>
                </motion.div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {icon: ShoppingCart, title: 'Campus Store', desc: 'Get your textbooks, apparel, and supplies.', color: 'from-blue-500 to-blue-700'},
                        {icon: Users, title: 'Student Life', desc: 'Over 300 clubs and organizations to join.', color: 'from-emerald-500 to-emerald-700'},
                        {icon: UserCheck, title: 'Faculty', desc: 'Learn from world-renowned experts.', color: 'from-purple-500 to-purple-700'},
                        {icon: MessageSquare, title: 'Testimonials', desc: 'See what our students have to say.', color: 'from-rose-500 to-rose-700'},
                    ].map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div 
                              key={feature.title} 
                              initial={{ opacity: 0, y: 20 }} 
                              whileInView={{ opacity: 1, y: 0 }} 
                              transition={{ duration: 0.5, delay: index * 0.15 }} 
                              viewport={{ once: true }} 
                              className="p-6 text-left bg-white rounded-2xl border-2 border-gray-100 shadow-sm transition-all group hover:border-gray-300 hover:shadow-md"
                            >
                                <div className="flex gap-4 items-center mb-4">
                                  <div className="flex justify-center items-center w-12 h-12 bg-gray-100 rounded-xl border border-gray-200">
                                    <Icon className="w-6 h-6 text-gray-700" />
                                  </div>
                                  <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary">{feature.title}</h3>
                                </div>
                                <p className="mb-4 leading-relaxed text-gray-600">{feature.desc}</p>
                                <button className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-primary">
                                  Explore <span className="ml-1">→</span>
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>


        {/* Chancellor */}
        <ChancellorSection />


        {/* Visit Campus */}
        <VisitCampus />

        {/* Partner Logos Section */}
        <PartnerLogos />

        {/* Timeline is now on About page */}

        {/* Parallax CTA (replaces testimonials on homepage) */}
        <ParallaxCTA />

        {/* Fancy FAQ per screenshot */}
        <HomeFaqFancy faqs={faqs} />

        <IconNextSteps />
      </div>
    </>
  );
};

export default Home;
