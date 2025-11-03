import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HomeFaqFancy = ({ faqs }) => {
  return (
    <section className="py-20 bg-white" data-section="home-faq-fancy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Answers That Keep You Moving Forward.
          </h2>
          <p className="text-gray-600 text-lg mb-8">Find answers to the most common questions about ResponsabCollege admissions, programs, and student life.</p>
          <div className="mt-8 border-t">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b">
                  <AccordionTrigger className="text-left text-lg font-semibold py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-gray-700">My question is not here.</span>
            <a href="/admissions" className="inline-flex items-center bg-primary text-white px-5 py-3 rounded-md font-semibold hover:opacity-90">Contact Us →</a>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad" alt="Students sitting on campus lawn" className="w-full rounded-2xl shadow-xl object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HomeFaqFancy;
