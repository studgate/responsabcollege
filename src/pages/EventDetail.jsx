
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const EventDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const event = {
    title: 'Fall Open House',
    date: 'November 15, 2025',
    time: '10:00 AM - 3:00 PM',
    location: 'Main Campus',
    category: 'Admissions',
    image: 'Campus open house with prospective students and families',
    description: 'Join us for our Fall Open House and discover what makes ResponsabCollege special. Tour our beautiful campus, meet faculty and current students, attend information sessions, and learn about our academic programs, student life, and admission process.',
    agenda: [
      '10:00 AM - Registration & Welcome',
      '10:30 AM - Campus Tours',
      '12:00 PM - Lunch & Student Panel',
      '1:00 PM - Academic Department Sessions',
      '2:00 PM - Financial Aid Workshop',
      '3:00 PM - Closing Remarks'
    ]
  };

  const handleRegister = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>{event.title} - ResponsabCollege Events</title>
        <meta name="description" content={event.description} />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/events" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>
            <div className="mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {event.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{event.title}</h1>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <img className="w-full h-96 object-cover rounded-lg shadow-lg" alt={event.title} src="https://images.unsplash.com/photo-1509930854872-0f61005b282e" />
                </div>
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg">{event.description}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Agenda</h2>
                  <ul className="space-y-3">
                    {event.agenda.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="bg-blue-900 text-white rounded-2xl p-6 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Event Details</h3>
                  <div className="space-y-4 text-white/90">
                    <div className="flex items-start"><Calendar className="w-5 h-5 mr-3" /><div>{event.date}</div></div>
                    <div className="flex items-start"><Clock className="w-5 h-5 mr-3" /><div>{event.time}</div></div>
                    <div className="flex items-start"><MapPin className="w-5 h-5 mr-3" /><div>{event.location}</div></div>
                  </div>
                  <Button onClick={handleRegister} size="lg" className="w-full mt-6 bg-yellow-400 text-gray-900 hover:bg-yellow-300">Register</Button>
                </div>
              </aside>
            </div>

            <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Venue</h3>
              <p className="text-blue-700 font-semibold mb-2">Boston Campus</p>
              <div className="w-full h-80 bg-gray-200 rounded-lg" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventDetail;
