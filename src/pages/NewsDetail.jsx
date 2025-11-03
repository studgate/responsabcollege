
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();

  const article = {
    title: 'ResponsabCollege Ranks Top 50 in National Universities',
    date: 'October 28, 2025',
    author: 'Communications Office',
    category: 'Rankings',
    image: 'University campus with modern buildings and students',
    content: `ResponsabCollege has been recognized among the top 50 national universities in the latest U.S. News & World Report rankings, marking a significant achievement for the institution.

The ranking reflects ResponsabCollege's commitment to academic excellence, innovative research, and student success. The university scored particularly high in categories including graduation rates, faculty resources, and student selectivity.

"This recognition is a testament to the hard work and dedication of our faculty, staff, and students," said President Dr. Michael Anderson. "We remain committed to providing world-class education and preparing our students for successful careers."

The university has seen significant improvements in several key areas over the past year, including increased research funding, enhanced student support services, and expanded partnerships with industry leaders.

ResponsabCollege continues to invest in state-of-the-art facilities, cutting-edge research initiatives, and programs that support student success from admission through graduation and beyond.`
  };

  return (
    <>
      <Helmet>
        <title>{article.title} - ResponsabCollege News</title>
        <meta name="description" content={article.content.substring(0, 155)} />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/news" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
            <div className="mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{article.title}</h1>
            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {article.author}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <img className="w-full h-96 object-cover rounded-lg shadow-lg" alt={article.title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
            </div>
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsDetail;
