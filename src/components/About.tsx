import React from 'react';
import { Award, Cloud, Code, Compass } from 'lucide-react';
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
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              Junior Achievers national runner-up (2nd place, Kenya).
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '1.25rem',
            borderRadius: '14px',
            border: '1px solid var(--glass-border)'
          }}>
            <div style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Cloud size={20} />
              <strong style={{ color: '#fff' }}>Cloud & Linux</strong>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              Self-taught cloud enthusiast actively working with Linux & AWS architectures.
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
              <strong style={{ color: '#fff' }}>Real-World Focus</strong>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              Building practical web solutions and e-commerce portals for actual clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
