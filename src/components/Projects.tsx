import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { projectsList } from '../data/portfolioData';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectsList.map((project) => (
          <div key={project.id} className="project-card">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '0.75rem' }}>
              <h3 style={{ margin: 0 }}>{project.title}</h3>
              {project.badge && (
                <span className="project-badge">{project.badge}</span>
              )}
            </div>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{
                    padding: '0.55rem 1.1rem',
                    fontSize: '0.85rem',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{
                    padding: '0.55rem 1.1rem',
                    fontSize: '0.85rem',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  <GithubIcon size={15} />
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
