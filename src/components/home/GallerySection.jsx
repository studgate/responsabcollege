import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  'https://images.unsplash.com/photo-1496302662116-85c5c5410f46',
  'https://images.unsplash.com/photo-1551836022-4c4c79ecde51',
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b',
  'https://images.unsplash.com/photo-1679316481049-4f6549df499f'
];

const GallerySection = () => {
  const [i, setI] = React.useState(0);
  const next = () => setI((v) => (v + 1) % images.length);
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);

  return (
    <section className="py-20 bg-white" data-section="gallery">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Campus Gallery</h3>
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video mb-6">
          <img src={images[i]} alt="Campus gallery" className="w-full h-full object-cover" />
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"><ChevronLeft className="w-5 h-5"/></button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"><ChevronRight className="w-5 h-5"/></button>
        </div>
        <Link to="/campus-life" className="text-primary font-semibold inline-flex items-center">Explore Campus Life <ChevronRight className="w-4 h-4 ml-1"/></Link>
      </div>
    </section>
  );
};

export default GallerySection;
