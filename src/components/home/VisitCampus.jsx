import React from "react";
import { Link } from "react-router-dom";

const VisitCampus = () => {
  return (
    <section className="py-20 bg-gray-50" data-section="visit-campus">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 mb-8">
          <div className="aspect-video">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ" 
              title="Campus Tour" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Our Campus Tour.</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">Experience the vibrant energy of ResponsabCollege firsthand. Explore our state-of-the-art facilities, meet our passionate community, and discover what makes our campus the perfect place to learn, grow, and thrive.</p>
        <Link to="/events" className="inline-flex items-center bg-primary text-white px-5 py-3 rounded-md font-semibold hover:opacity-90">Visit Our Campus →</Link>
      </div>
    </section>
  );
};

export default VisitCampus;
