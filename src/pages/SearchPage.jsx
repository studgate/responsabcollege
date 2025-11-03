
import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Search, FileText, Newspaper, User, BookOpen, Calendar, XCircle, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Mock data
const allContent = [
    { id: 'p1', type: 'program', title: 'Computer Science', link: '/programs/1', description: 'Build innovative software and systems with our Computer Science program.' },
    { id: 'p2', type: 'program', title: 'Business Administration', link: '/programs/2', description: 'Lead organizations to success. Join our college.' },
    { id: 'n1', type: 'news', title: 'ResponsabCollege Ranks Top 50', link: '/news/1', description: 'Our college has been recognized among the top 50 national universities.' },
    { id: 'n2', type: 'news', title: 'New College Research Center', link: '/news/2', description: 'A new center for college students to research.' },
    { id: 'f1', type: 'faculty', title: 'Dr. Evelyn Reed', link: '/faculty', description: 'Professor of Computer Science, expert in AI. A valuable college member.' },
    { id: 'e1', type: 'event', title: 'Fall Open House', link: '/events/1', description: 'Discover what makes ResponsabCollege special. An event for all.' },
    { id: 'page1', type: 'page', title: 'About Our College', link: '/about', description: 'Learn about our mission, vision, and history.' },
    { id: 'page2', type: 'page', title: 'Admissions', link: '/admissions', description: 'Your future starts here. Apply to our college now.' },
];

const facetsConfig = [
    { key: 'program', label: 'Programs', icon: BookOpen },
    { key: 'news', label: 'News', icon: Newspaper },
    { key: 'faculty', label: 'Faculty', icon: User },
    { key: 'event', label: 'Events', icon: Calendar },
    { key: 'page', label: 'Pages', icon: FileText },
];

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    
    const [query, setQuery] = useState(searchParams.get('q') || 'college');
    const [inputValue, setInputValue] = useState(searchParams.get('q') || 'college');
    const [activeFilters, setActiveFilters] = useState(searchParams.get('filter')?.split(',') || []);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 5;

    useEffect(() => {
        const newParams = new URLSearchParams();
        if (query) newParams.set('q', query);
        if (activeFilters.length > 0) newParams.set('filter', activeFilters.join(','));
        setSearchParams(newParams);
    }, [query, activeFilters, setSearchParams]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setQuery(inputValue);
        setCurrentPage(1);
    };

    const { filteredResults, facetCounts } = useMemo(() => {
        const baseResults = query
            ? allContent.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())
            )
            : [];
        
        const counts = facetsConfig.reduce((acc, facet) => {
            acc[facet.key] = baseResults.filter(item => item.type === facet.key).length;
            return acc;
        }, {});
        
        const results = activeFilters.length > 0
            ? baseResults.filter(item => activeFilters.includes(item.type))
            : baseResults;

        return { filteredResults: results, facetCounts: counts };
    }, [query, activeFilters]);
    
    const totalPages = Math.ceil(filteredResults.length / resultsPerPage);
    const paginatedResults = filteredResults.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

    const toggleFilter = (filterKey) => {
        setActiveFilters(prev =>
            prev.includes(filterKey)
                ? prev.filter(f => f !== filterKey)
                : [...prev, filterKey]
        );
        setCurrentPage(1);
    };

    const getResultIcon = (type) => {
        const Icon = facetsConfig.find(f => f.key === type)?.icon;
        return Icon ? <Icon className="w-8 h-8 text-primary" /> : <FileText className="w-8 h-8 text-primary" />;
    };

    return (
        <>
            <Helmet><title>Search Results for "{query}" - ResponsabCollege</title></Helmet>
            <div className="bg-white min-h-screen">
                <section className="relative py-24 bg-gray-800 text-white" data-section="search-hero">
                     <img className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Abstract background" src="https://images.unsplash.com/photo-1686140386811-099f53c0dd54" />
                     <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Search Results</h1>
                        <form onSubmit={handleSearchSubmit}>
                            <div className="relative mt-6 max-w-2xl mx-auto">
                                <Input value={inputValue} onChange={e => setInputValue(e.target.value)} type="search" placeholder="Search the website..." className="pl-12 h-16 text-lg text-gray-800"/>
                                <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Search /></button>
                            </div>
                        </form>
                     </div>
                </section>

                <section className="py-16" data-section="search-results">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-8">
                           <div className="flex flex-wrap items-center gap-2">
                                <span className="font-semibold">Filter by:</span>
                                {facetsConfig.map(facet => facetCounts[facet.key] > 0 && (
                                    <Button key={facet.key} variant={activeFilters.includes(facet.key) ? 'default' : 'outline'} onClick={() => toggleFilter(facet.key)}>
                                        {facet.label} ({facetCounts[facet.key]})
                                    </Button>
                                ))}
                           </div>
                           {activeFilters.length > 0 && (
                               <div className="mt-4 flex flex-wrap items-center gap-2">
                                   <span className="text-sm font-medium">Active filters:</span>
                                   {activeFilters.map(filterKey => {
                                       const label = facetsConfig.find(f => f.key === filterKey)?.label;
                                       return (
                                           <div key={filterKey} className="flex items-center gap-1 bg-purple-100 text-primary text-sm font-semibold pl-3 pr-1 py-1 rounded-full">
                                               {label}
                                               <button onClick={() => toggleFilter(filterKey)} className="rounded-full hover:bg-primary/20 p-0.5"><X className="w-3 h-3"/></button>
                                           </div>
                                       )
                                   })}
                               </div>
                           )}
                        </div>

                        <p className="text-sm text-gray-500 mb-6">Found {filteredResults.length} results for "{query}".</p>
                        
                        <div className="space-y-6">
                            {paginatedResults.map(item => (
                                <div key={item.id} className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
                                    <Link to={item.link} className="group">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-purple-50 flex items-center justify-center">{getResultIcon(item.type)}</div>
                                            <div className="flex-grow">
                                                <span className="text-xs uppercase font-semibold text-gray-500">{item.type}</span>
                                                <h3 className="text-xl font-bold text-primary group-hover:underline mb-1">{item.title}</h3>
                                                <p className="text-gray-600 line-clamp-2">{item.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {filteredResults.length === 0 && (
                            <div className="text-center py-16 border-2 border-dashed rounded-lg">
                                <Search className="mx-auto w-12 h-12 text-gray-400 mb-4"/>
                                <p className="text-2xl font-semibold text-gray-700">No results found.</p>
                                <p className="text-gray-500 mt-2">Try a different search term or remove filters.</p>
                            </div>
                        )}
                        
                        {totalPages > 1 && (
                             <div className="flex justify-center items-center gap-4 mt-12">
                                <Button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>Previous</Button>
                                <span className="font-medium">Page {currentPage} of {totalPages}</span>
                                <Button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>Next</Button>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
};

export default SearchPage;
