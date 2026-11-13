import React from 'react';
import { ArrowRight, FileText, Briefcase, Printer, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-badge">
        <Briefcase size={16} />
        <span>KCA University • Available for Hire (Full-Time & Part-Time) • Nairobi, Kenya</span>
      </div>
      <h1>{personalInfo.fullName}</h1>
      <p style={{ maxWidth: '760px' }}>
        IT Support Specialist & Software Developer with verified coursework grades in Java, C, SQL, and Network Design. 
        Hands-on experience in PC hardware assembly, structured cabling, and live web deployments. 
        Seeking permanent and flexible tech roles during and after diploma completion.
      </p>
      <div className="cta-container">
        <a href="#career-suite" className="btn btn-primary">
          <Printer size={17} />
          View Professional CV & Letter
        </a>
        <a href="#projects" className="btn btn-outline">
          View Projects
          <ArrowRight size={16} />
        </a>
        <a href="#contact" className="btn btn-outline">
          <Mail size={16} />
          Contact for Hire
        </a>
      </div>
    </section>
  );
};
