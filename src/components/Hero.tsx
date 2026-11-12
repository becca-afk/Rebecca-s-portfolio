import React from 'react';
import { ArrowRight, FileText, Building2, ShieldCheck, Printer, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-badge">
        <ShieldCheck size={16} />
        <span>KCA University Student (Reg No: {personalInfo.studentId}) • Industrial Attachment: {personalInfo.attachmentPeriod}</span>
      </div>
      <h1>{personalInfo.fullName}</h1>
      <p style={{ maxWidth: '750px' }}>
        Diploma in Information Technology student at KCA University specializing in Hardware/Network Troubleshooting, Web Development, and Cloud Security. Seeking a 3-month industrial attachment in ICT Services.
      </p>
      <div className="cta-container">
        <a href="#kca-application" className="btn btn-primary">
          <Printer size={17} />
          Print / Copy Attachment CV & Letter
        </a>
        <a href="#documents" className="btn btn-outline">
          <FileText size={16} />
          Official Documents
        </a>
        <a href="#projects" className="btn btn-outline">
          View Projects
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};
