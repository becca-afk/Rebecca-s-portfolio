import React from 'react';
import { Cpu, Users } from 'lucide-react';
import { technicalSkills, softSkills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <h2>Expertise & Skills</h2>
      <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
            <Cpu size={22} color="var(--accent-blue)" />
            <h3 style={{ color: 'var(--accent-blue)', margin: 0, fontSize: '1.2rem' }}>Technical Skills</h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {technicalSkills.map((skill, idx) => (
              <span key={idx} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
            Hands-on experience with modern front-end styling, object-oriented Java principles, relational database design in SQL, and Linux system administration.
          </p>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
            <Users size={22} color="var(--accent-blue)" />
            <h3 style={{ color: 'var(--accent-blue)', margin: 0, fontSize: '1.2rem' }}>Soft Skills</h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {softSkills.map((skill, idx) => (
              <span key={idx} className="soft-skill-chip">
                {skill}
              </span>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
            Demonstrated team leadership as national runner-up in Junior Achievers Kenya; effective communicator, quick learner, and dedicated problem solver.
          </p>
        </div>
      </div>
    </section>
  );
};
