import React from 'react';
import ServiceItem from './ServiceItem';

const servicesData = [
  {
    number: '1',
    title: 'AI software development',
    services: ['AI-Powered Automation Tool', 'Chatbot Development', 'Language synthesis', 'Model Tuning'],
    tagline: 'INCREASE EFFICIENCY'
  },
  {
    number: '2',
    title: 'AI Consultancy',
    services: ['Feasibility Analysis', 'Solution Blueprinting', 'Data Audit', 'Post-Implementation Review'],
    tagline: 'PASION FOR AI'
  },
  {
    number: '3',
    title: 'Staff Training',
    services: ['AI Fundamentals Training', 'AI Tools and Software', 'AI in Customer Service', 'Use-Case Specific Training'],
    tagline: 'TRAIN FOR THE FUTURE'
  },
  {
    number: '4',
    title: 'Natural Language Processing',
    services: ['Trend Analysis', 'Data Visualization', 'Sentiment Analysis', 'Entity Recognition'],
    tagline: 'UNDER THE HOOD'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full">
      <h2 className="mt-16 text-2xl leading-8 text-white tracking-[2px] max-md:mt-10 max-sm:px-4 max-sm:mx-4">/ SERVICES</h2>
      {servicesData.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </section>
  );
};

export default ServicesSection;