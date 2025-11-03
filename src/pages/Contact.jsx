import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import HomeFaqFancy from '@/components/home/HomeFaqFancy';
import { trackFormSubmission, trackEvent } from '@/lib/analytics';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: '',
    program: '',
    message: '',
    preferredContact: 'email',
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackFormSubmission('contact_form');
    trackEvent('contact_form_submit', 'engagement', formData.inquiryType || 'general');
    
    toast({
      title: "Thank you for contacting us!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      inquiryType: '',
      program: '',
      message: '',
      preferredContact: 'email',
      newsletter: false,
    });
  };

  const faqs = [
    {
      question: "How can I schedule a campus tour?",
      answer: "You can schedule a campus tour by filling out our contact form, calling our admissions office at (555) 123-4567, or visiting our Admissions page to book a tour online."
    },
    {
      question: "What are your office hours?",
      answer: "Our main office is open Monday through Friday from 8:00 AM to 5:00 PM EST. Admissions counselors are available by appointment on weekends as well."
    },
    {
      question: "How long does it take to receive a response?",
      answer: "We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please call our main office directly."
    },
    {
      question: "Can I visit specific departments or programs?",
      answer: "Yes! When scheduling your visit, you can request to meet with specific departments or program coordinators. We'll do our best to arrange these meetings."
    },
    {
      question: "Do you have virtual consultation options?",
      answer: "Absolutely! We offer virtual consultations via video call. Simply select 'Virtual Consultation' as your preferred contact method in the form above."
    },
    {
      question: "How can I reach the financial aid office?",
      answer: "You can contact the financial aid office directly at finaid@responsabcollege.edu or by calling (555) 123-4567, extension 2. They're available Monday-Friday from 9 AM to 4 PM."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - ResponsabCollege</title>
        <meta name="description" content="Get in touch with ResponsabCollege. Contact our admissions office, schedule a campus tour, or reach out to specific departments." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="object-cover w-full h-full" alt="Contact ResponsabCollege" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-5xl font-bold text-white md:text-6xl"
            >
              Reach out to us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mb-8 max-w-3xl text-xl text-orange-100 md:text-2xl"
            >
              Ready to start your journey? Get in touch with us and discover how ResponsabCollege can help you achieve your goals.
            </motion.p>
          </div>
        </section>

        {/* Top Section - Let's Join and Prove It */}
        <section className="py-20 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid gap-12 items-center lg:grid-cols-2">
              {/* Left Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">LET'S JOIN AND PROVE IT</p>
                <h2 className="text-4xl font-bold text-gray-900 md:text-5xl" style={{ fontFamily: 'serif' }}>
                  Your Journey Starts Here
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  At ResponsabCollege, we believe that every student has the potential to achieve greatness. Our dedicated team is here to guide you through every step of your educational journey, from initial inquiry to graduation and beyond. Whether you're exploring programs, seeking financial aid information, or have questions about campus life, we're ready to help you succeed.
                </p>
                <p className="text-lg leading-relaxed text-gray-600">
                  Reach out to us today and discover how ResponsabCollege can help you shape your future. Our admissions counselors, financial aid specialists, and student services team are available to answer your questions and provide the support you need to make informed decisions about your education.
                </p>

                {/* Contact Information - Side by Side */}
                <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2">
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 bg-blue-600 rounded-full">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Contact Us</p>
                      <a href="tel:6178906010" className="text-gray-600 underline hover:text-blue-600">617-890-6010</a>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 bg-blue-600 rounded-full">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Email Us</p>
                      <a href="mailto:hello@responsab.com" className="text-gray-600 underline hover:text-blue-600">hello@responsab.com</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Image Collage */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative space-y-4">
                  <div className="overflow-hidden relative rounded-lg shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad" 
                      alt="ResponsabCollege students" 
                      className="object-cover w-full h-64"
                    />
                  </div>
                  <div className="overflow-hidden relative rounded-lg shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846" 
                      alt="ResponsabCollege campus building" 
                      className="object-cover w-full h-64"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Get In Touch</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="p-8 space-y-6 bg-white rounded-xl shadow-lg"
            >
              {/* Name Fields */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">
                    Last Name *
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Subject and Inquiry Type */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="What is your inquiry about?"
                  />
                </div>
                <div>
                  <label htmlFor="inquiryType" className="block mb-2 text-sm font-medium text-gray-700">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="flex px-3 py-2 w-full h-10 text-sm rounded-md border border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select an option</option>
                    <option value="admissions">Admissions</option>
                    <option value="financial-aid">Financial Aid</option>
                    <option value="academics">Academics & Programs</option>
                    <option value="campus-life">Campus Life</option>
                    <option value="alumni">Alumni Relations</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <label htmlFor="program" className="block mb-2 text-sm font-medium text-gray-700">
                  Program of Interest (Optional)
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="flex px-3 py-2 w-full h-10 text-sm rounded-md border border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a program</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="business">Business Administration</option>
                  <option value="engineering">Engineering</option>
                  <option value="medicine">Medicine</option>
                  <option value="law">Law</option>
                  <option value="arts">Arts & Humanities</option>
                  <option value="sciences">Natural Sciences</option>
                  <option value="social-sciences">Social Sciences</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Preferred Contact Method *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Phone
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="either"
                      checked={formData.preferredContact === 'either'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Either
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  I would like to receive updates and newsletters from ResponsabCollege
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="px-8 py-6 w-full text-lg sm:w-auto touch-manipulation"
                  aria-label="Submit contact form"
                >
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.form>
          </div>
        </section>

        {/* FAQs Section */}
        <HomeFaqFancy faqs={faqs} />
      </div>
    </>
  );
};

export default Contact;

