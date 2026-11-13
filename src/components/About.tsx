import React from 'react';
import { Award, Wrench, Code, Languages, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="profile" className="section">
      <h2>Professional Profile</h2>
      <div className="glass-card">
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          {personalInfo.summary1}
        </p>
        <p style={{ marginTop: '1.25rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
          {personalInfo.summary2}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          marginTop: '2.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--glass-border)'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '1.25rem',
            borderRadius: '14px',
            border: '1px solid var(--glass-border)'
          }}>
            <div style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Award size={20} />
              <strong style={{ color: '#fff' }}>National Runner-Up</strong>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5' }}>
              Junior Achievers 2nd place in Kenya (Mombasa competition) for team pitching and business innovation.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '1.25rem',
            borderRadius: '14px',
            border: '1px solid var(--glass-border)'
          }}>
            <div style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Wrench size={20} />
              <strong style={{ color: '#fff' }}>IT Support & Cabling</strong>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5' }}>
              Hands-on PC assembly, hardware diagnostics, OS formatting, and RJ45 structured cabling (T568A/B).
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '1.25rem',
            borderRadius: '14px',
            border: '1px solid var(--glass-border)'
          }}>
            <div style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Code size={20} />
              <strong style={{ color: '#fff' }}>Full-Spectrum Coding</strong>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5' }}>
              Java (A-), SQL (A-), Web (A), C systems (B+), and production deployments on Vercel & GitHub Pages.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '1.25rem',
            borderRadius: '14px',
            border: '1px solid var(--glass-border)'
          }}>
            <div style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Languages size={20} />
              <strong style={{ color: '#fff' }}>Bilingual & Documented</strong>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5' }}>
              Native Swahili and fluent English; experienced in SDLC documentation, reporting, and user support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
