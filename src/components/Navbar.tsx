import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal, Building2 } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#profile' },
    { label: 'Education', href: '#education' },
    { label: 'Work', href: '#projects' },
    { label: 'Documents', href: '#documents' },
    { label: 'KCA Attachment', href: '#kca-application', highlight: true },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header style={{
      boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.8)' : 'none',
      backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'rgba(5, 5, 5, 0.85)'
    }}>
      <div className="nav-container">
        <a href="#hero" className="brand-logo">
          <Terminal size={20} color="#3b82f6" />
          <span>Rebecca</span>
          <span className="brand-dot"></span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul>
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={isActive ? 'active' : ''}
                    style={link.highlight ? {
                      color: '#93c5fd',
                      border: '1px solid rgba(59, 130, 246, 0.4)',
                      background: 'rgba(59, 130, 246, 0.12)'
                    } : {}}
                  >
                    {link.highlight && <Building2 size={13} style={{ display: 'inline', marginRight: '5px', verticalAlign: '-1px' }} />}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#f8fafc',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mobile-toggle"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          padding: '1rem 0 0.5rem',
          borderTop: '1px solid var(--glass-border)',
          marginTop: '0.75rem'
        }} className="mobile-menu">
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            padding: 0,
            margin: 0
          }}>
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.65rem 1rem',
                      color: isActive ? '#fff' : 'var(--text-secondary)',
                      backgroundColor: isActive ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 890px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
