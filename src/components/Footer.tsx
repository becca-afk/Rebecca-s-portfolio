import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <p style={{ fontSize: '1rem', color: '#f8fafc' }}>
          Built with ❤️ by {personalInfo.name}
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          margin: '1.25rem 0',
          fontSize: '0.85rem'
        }}>
          <a href="#hero" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</a>
          <a href="#profile" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</a>
          <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Work</a>
          <a href="#documents" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Documents</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          © 2026 Professional Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
