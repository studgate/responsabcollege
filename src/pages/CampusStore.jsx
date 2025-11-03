
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingCart, Book, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NextStepCallout from '@/components/shared/NextStepCallout';
import { Link } from 'react-router-dom';

const CampusStore = () => {
  const products = [
    { id: 1, name: 'ResponsabCollege Hoodie', price: '$59.99', image: 'Comfortable blue college hoodie with logo', category: 'Apparel' },
    { id: 2, name: 'Textbook: Intro to Physics', price: '$120.00', image: 'Physics textbook on a desk', category: 'Textbooks' },
    { id: 3, name: 'RC Branded Notebook', price: '$9.99', image: 'Spiral notebook with college branding', category: 'Supplies' },
    { id: 4, name: 'Alumni Sweatshirt', price: '$64.99', image: 'Grey sweatshirt with alumni text', category: 'Apparel' },
    { id: 5, name: 'Laptop Sleeve', price: '$24.99', image: 'Protective laptop sleeve with college logo', category: 'Supplies' },
    { id: 6, name: 'Water Bottle', price: '$19.99', image: 'Stainless steel water bottle with logo', category: 'Supplies' },
  ];

  return (
    <>
      <Helmet>
        <title>Campus Store - ResponsabCollege</title>
        <meta name="description" content="Shop for textbooks, apparel, and supplies at the ResponsabCollege Campus Store. Show your school spirit!" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="object-cover w-full h-full" alt="Campus store" src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-5xl font-bold text-white md:text-6xl"
            >
              Campus Store
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mb-8 max-w-3xl text-xl text-orange-100 md:text-2xl"
            >
              Your one-stop shop for textbooks, apparel, and school supplies
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid gap-12 items-center mb-16 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl" style={{ fontFamily: 'serif' }}>
                  A Leading and Diverse University with 15,000+ Students Across the New England Region.
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4 text-lg leading-relaxed text-gray-700"
                style={{ fontFamily: 'serif' }}
              >
                <p>
                  Founded with a vision of excellence, ResponsabCollege began as a small institution with a bold dream to empower minds and shape the future. Over the years, it has grown into one of the most diverse and dynamic universities, welcoming over 15,000 students across the New England Region.
                </p>
                <p>
                  With a commitment to innovation, research, and community impact, ResponsabCollege continues to inspire the next generation of leaders, thinkers, and changemakers. From state-of-the-art facilities to a globally connected alumni network, the university stands as a beacon of knowledge, opportunity, and success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 product-grid" data-section="product-grid">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900">Featured Products</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden bg-white rounded-xl border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-64">
                    <img className="object-cover w-full h-full" alt={product.name} src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">{product.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-blue-600">{product.price}</p>
                      <Button variant="outline" size="sm">Add to Cart</Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <NextStepCallout 
          title="Ready to Show Your School Spirit?"
          description="Visit our online store to browse the full collection of ResponsabCollege gear."
          primaryActionText="Shop Online"
          primaryActionLink="#"
          secondaryActionText="Visit Store"
          secondaryActionLink="#"
        />
      </div>
    </>
  );
};

export default CampusStore;
