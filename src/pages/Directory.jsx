
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Search, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const contacts = [
    { name: 'Admissions Office', email: 'admissions@responsabcollege.edu', phone: '(555) 123-4567', location: 'Main Building, Room 101' },
    { name: 'Financial Aid Office', email: 'finaid@responsabcollege.edu', phone: '(555) 123-4568', location: 'Student Services, Room 205' },
    { name: 'Registrar', email: 'registrar@responsabcollege.edu', phone: '(555) 123-4569', location: 'Administration Building, Room 150' },
    { name: 'Career Services', email: 'careers@responsabcollege.edu', phone: '(555) 123-4570', location: 'Student Center, Room 300' },
    { name: 'Library', email: 'library@responsabcollege.edu', phone: '(555) 123-4571', location: 'University Library' },
    { name: 'IT Help Desk', email: 'helpdesk@responsabcollege.edu', phone: '(555) 123-4572', location: 'Technology Center, Room 100' },
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Directory - ResponsabCollege</title>
        <meta name="description" content="Find contact information for ResponsabCollege departments, offices, and services." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Campus Directory</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Find contact information for departments and services
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search directory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg bg-white"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{contact.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-5 h-5 mr-3 text-blue-600" />
                      <a href={`mailto:${contact.email}`} className="hover:text-blue-600 transition-colors">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-5 h-5 mr-3 text-blue-600" />
                      <a href={`tel:${contact.phone}`} className="hover:text-blue-600 transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                      {contact.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Directory;
