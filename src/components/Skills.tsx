import React, { useState } from 'react';
import { 
  Code, 
  Wrench, 
  Network, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Cpu, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { skillCategories, technicalSkills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={20} className="text-blue-400" />;
      case 'Wrench':
        return <Wrench size={20} className="text-blue-400" />;
      case 'Network':
        return <Network size={20} className="text-blue-400" />;
      case 'Briefcase':
        return <Briefcase size={20} className="text-blue-400" />;
      case 'Award':
        return <Award size={20} className="text-blue-400" />;
      default:
        return <Cpu size={20} className="text-blue-400" />;
    }
  };

  const displayedCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="section">
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.25)',
          padding: '4px 14px',
          borderRadius: '9999px',
          fontSize: '0.85rem',
          color: '#93c5fd',
          marginBottom: '1rem'
        }}>
          <ShieldCheck size={15} />
          <span>Verified Hands-On & KCA Academic Competencies</span>
        </div>
        <h2>Technical Competencies & Expertise</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.7' }}>
          A 100% genuine inventory of verified coursework grades, practical laboratory experience, 
          hardware diagnostics, structured networking, and production web systems.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '2.5rem'
      }}>
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          style={{
            padding: '0.55rem 1.15rem',
            borderRadius: '10px',
            fontSize: '0.88rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            border: activeCategory === 'all' ? '1px solid var(--accent-blue)' : '1px solid var(--glass-border)',
            background: activeCategory === 'all' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(15, 23, 42, 0.5)',
            color: activeCategory === 'all' ? '#fff' : 'var(--text-secondary)',
          }}
        >
          All Domains ({skillCategories.length})
        </button>

        {skillCategories.map(cat => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: '10px',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              border: activeCategory === cat.id ? '1px solid var(--accent-blue)' : '1px solid var(--glass-border)',
              background: activeCategory === cat.id ? 'rgba(59, 130, 246, 0.2)' : 'rgba(15, 23, 42, 0.5)',
              color: activeCategory === cat.id ? '#fff' : 'var(--text-secondary)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {getCategoryIcon(cat.iconName)}
            <span>{cat.title.split('&')[0].trim()}</span>
          </button>
        ))}
      </div>

      {/* Grid of Skill Categories */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.75rem'
      }}>
        {displayedCategories.map((cat) => (
          <div 
            key={cat.id} 
            className="glass-card" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              padding: '1.75rem',
              transition: 'transform 0.25s ease, border-color 0.25s ease'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1.25rem' }}>
              <div style={{
                background: 'rgba(59, 130, 246, 0.15)',
                padding: '10px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue)'
              }}>
                {getCategoryIcon(cat.iconName)}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#fff', fontSize: '1.18rem', margin: '0 0 4px', fontWeight: 700 }}>
                  {cat.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                  {cat.description}
                </p>
              </div>
            </div>

            {/* List of Skills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
              {cat.skills.map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '10px',
                    padding: '0.75rem 0.9rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: skill.detail ? '3px' : '0' }}>
                    <span style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.92rem' }}>
                      {skill.name}
                    </span>
                    {skill.grade && (
                      <span style={{
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        color: '#60a5fa',
                        background: 'rgba(59, 130, 246, 0.18)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        letterSpacing: '0.3px',
                        whiteSpace: 'nowrap'
                      }}>
                        Grade {skill.grade}
                      </span>
                    )}
                  </div>
                  {skill.detail && (
                    <p style={{ margin: 0, fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.45' }}>
                      {skill.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Summary Pill Callout */}
      <div className="glass-card" style={{
        marginTop: '2.5rem',
        padding: '1.25rem 1.75rem',
        background: 'linear-gradient(90deg, rgba(30, 58, 138, 0.25) 0%, rgba(15, 23, 42, 0.6) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={20} color="#60a5fa" />
          <span style={{ color: '#e2e8f0', fontSize: '0.92rem', fontWeight: 500 }}>
            Ready for roles in: <strong>IT Support</strong> • <strong>Junior Software Developer (Java/Web)</strong> • <strong>Network Administration</strong> • <strong>Database Upkeep</strong>
          </span>
        </div>
        <a 
          href="#kca-application" 
          className="btn btn-outline" 
          style={{ padding: '0.45rem 1rem', fontSize: '0.84rem' }}
        >
          View Formatted CV & Referees
        </a>
      </div>
    </section>
  );
};
