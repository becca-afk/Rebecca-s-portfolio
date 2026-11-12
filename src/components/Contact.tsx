import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Globe, Building2, Printer, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Clean SVG icons for GitHub & LinkedIn
const GithubIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="section">
      <h2>Get In Touch for Attachment</h2>
      <div className="glass-card" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
        <p style={{ marginBottom: '1.75rem', fontSize: '1.08rem', color: '#e2e8f0', lineHeight: '1.7' }}>
          Currently seeking an industrial attachment placement for <strong>{personalInfo.attachmentPeriod}</strong> (Reg No: <strong>{personalInfo.studentId}</strong>). Open to KCA University ICT Services and reputable technology teams across Nairobi and Kenya.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.9rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <a
            href={`mailto:${personalInfo.email}?subject=KCA%20Attachment%20Application%20-%20Rebecca%20Nabusambya`}
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.75rem' }}
          >
            <Mail size={18} />
            Email Application
          </a>
          <a
            href="#kca-application"
            className="btn btn-outline"
            style={{ padding: '0.75rem 1.75rem' }}
          >
            <Printer size={18} />
            Print Attachment CV
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '0.75rem 1.75rem' }}
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '0.75rem 1.75rem' }}
          >
            <GithubIcon size={18} />
            GitHub
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          paddingTop: '1.75rem',
          borderTop: '1px solid var(--glass-border)',
          textAlign: 'left'
        }}>
          {/* Phone */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block' }}>Direct Phone / WhatsApp</span>
              <strong style={{ color: '#fff', fontSize: '0.95rem' }}>{personalInfo.formattedPhone}</strong>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.formattedPhone, 'phone')}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)',
                borderRadius: '6px',
                padding: '5px 8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem'
              }}
              title="Copy phone"
            >
              {copiedType === 'phone' ? <Check size={12} color="#4ade80" /> : <Copy size={12} />}
              {copiedType === 'phone' ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* Student Email */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block' }}>KCA Student Email</span>
              <strong style={{ color: '#fff', fontSize: '0.92rem' }}>{personalInfo.email}</strong>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.email, 'studentEmail')}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)',
                borderRadius: '6px',
                padding: '5px 8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem'
              }}
              title="Copy student email"
            >
              {copiedType === 'studentEmail' ? <Check size={12} color="#4ade80" /> : <Copy size={12} />}
              {copiedType === 'studentEmail' ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* Personal Email */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block' }}>Personal Email</span>
              <strong style={{ color: '#fff', fontSize: '0.92rem' }}>{personalInfo.personalEmail}</strong>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.personalEmail, 'personalEmail')}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)',
                borderRadius: '6px',
                padding: '5px 8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem'
              }}
              title="Copy personal email"
            >
              {copiedType === 'personalEmail' ? <Check size={12} color="#4ade80" /> : <Copy size={12} />}
              {copiedType === 'personalEmail' ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* Location & Institution */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <MapPin size={20} color="var(--accent-blue)" style={{ flexShrink: 0 }} />
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block' }}>Location & Institution</span>
              <span style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600 }}>
                {personalInfo.location} • KCA University
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
