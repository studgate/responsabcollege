
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NextStepCallout = ({
  title = "Ready to Take the Next Step?",
  description = "Your journey towards excellence starts here. Apply now or contact our admissions team for more information.",
  primaryActionText = "Apply Now",
  primaryActionLink = "/admissions",
  secondaryActionText = "Request Information",
  secondaryActionLink = "#"
}) => {
  return (
    <section className="py-20 text-white bg-gradient-to-br from-blue-600 to-blue-800 next-step-callout" data-section="next-step-callout">
      <div className="px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl font-bold">{title}</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
            {description}
          </p>
          <div className="flex flex-col gap-4 justify-center items-center sm:flex-row">
            <Button asChild size="lg" className="px-8 py-6 w-full text-lg text-blue-600 bg-white hover:bg-blue-50 sm:w-auto">
              <Link to={primaryActionLink}>
                {primaryActionText} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 w-full text-lg border-white sm:w-auto">
              <Link to={secondaryActionLink} className="text-blue-600">
                {secondaryActionText} <Mail className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextStepCallout;
