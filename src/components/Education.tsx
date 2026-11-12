import React from 'react';
import { GraduationCap, BookOpen, Clock, CheckCircle2 } from 'lucide-react';
import { educationList, completedCoursework, currentStudies } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="glass-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
          <GraduationCap color="var(--accent-blue)" size={24} />
          <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>Academic Qualifications</h3>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Institution</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {educationList.map((edu, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 500 }}>{edu.qualification}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{edu.institution}</td>
                  <td>
                    <span style={{
                      display: 'inline-block',
                      padding: '3px 10px',
                      borderRadius: '6px',
                      background: 'rgba(59, 130, 246, 0.12)',
                      color: '#93c5fd',
                      fontSize: '0.85rem'
                    }}>
                      {edu.period}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '2.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--glass-border)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <CheckCircle2 color="var(--accent-blue)" size={20} />
              <h3 style={{ color: 'var(--accent-blue)', fontSize: '1.1rem' }}>Coursework Completed</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {completedCoursework.map((course, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <span style={{ color: 'var(--text-primary)' }}>{course.title}</span>
                  {course.grade && (
                    <span style={{
                      fontWeight: 700,
                      color: '#60a5fa',
                      background: 'rgba(59, 130, 246, 0.15)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }}>
                      {course.grade}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <Clock color="var(--accent-blue)" size={20} />
              <h3 style={{ color: 'var(--accent-blue)', fontSize: '1.1rem' }}>Current Studies</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {currentStudies.map((course, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <span style={{ color: 'var(--text-primary)' }}>{course.title}</span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    background: 'rgba(255, 255, 255, 0.06)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    In Progress
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
