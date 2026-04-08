import { RevealOnScroll } from '../RevealOnScroll';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    name: 'ReviewIt',
    type: 'Full-Stack Web Application',
    desc: 'A platform where users can review, rate, and discuss anything across flexible categories — products, books, media, ideas, and experiences. Features JWT authentication, role-based access, and a CI/CD deployment pipeline.',
    stack: ['C#', '.NET', 'TypeScript', 'React', 'PostgreSQL', 'Tailwind CSS', 'AWS', ],
    status: 'Deployed',
    link: 'https://github.com/Chao-777/ReviewIt',
  },
  {
    name: 'EasyPark',
    type: 'Parking Management System',
    desc: 'A parking access control system with slot management and guest token allocation for residential and commercial use. Supports multiple properties and user roles.',
    stack: ['JavaScript', 'TypeScript', 'Node.js', 'EJS', 'MySQL', 'Bootstrap'],
    status: 'In Development',
    link: null,
  },
  {
    name: 'Education Management System',
    type: 'Web Application',
    desc: 'Education management platform with user registration, authentication, course management, and peer review assessments. Responsive UI built with Bootstrap and Blade templates.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Blade'],
    status: 'Deployed',
    link: 'https://github.com/Chao-777/Hogwarts-education-system',
  },
  {
    name: 'Drug-Speak',
    type: 'Mobile Application',
    desc: 'Educational mobile app for pharmacy students to learn correct drug pronunciation. Features audio playback, speed control, voice recording, pronunciation evaluation, and student rankings.',
    stack: ['JavaScript', 'React Native', 'Audio Processing', 'Authentication', 'Backend API'],
    status: 'Deployed',
    link: 'https://github.com/Chao-777/Drug-Speak',
  },
];

export const Projects = () => {
  return (
    <section id="projects" style={{ padding: '4rem 3rem' }}>
      <RevealOnScroll>

        <div className="section-label">Projects</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {PROJECTS.map((proj, i) => (
            <div key={i} className="project-card">

              {/* Status / icon column */}
              <div
                style={{
                  flexShrink: 0,
                  width: '130px',
                  paddingTop: '0.2rem',
                }}
              >
                <span
                  style={{
                    color: proj.status === 'Deployed' ? 'var(--c-primary)' : 'var(--c-faint)',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {proj.status}
                </span>
              </div>

              {/* Content column */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.15rem' }}>
                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-title"
                    >
                      {proj.name}
                      <span style={{ marginLeft: '0.3rem', fontSize: '0.75rem' }}>↗</span>
                    </a>
                  ) : (
                    <span className="project-title" style={{ cursor: 'default' }}>{proj.name}</span>
                  )}
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--c-faint)', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--c-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--c-faint)')}
                      aria-label={`${proj.name} GitHub`}
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                </div>

                <div
                  style={{
                    color: 'var(--c-faint)',
                    fontSize: '0.78rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  {proj.type}
                </div>

                <p
                  style={{
                    color: 'var(--c-body)',
                    fontSize: '0.875rem',
                    lineHeight: 1.75,
                    margin: '0 0 1rem',
                  }}
                >
                  {proj.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {proj.stack.map((t) => (
                    <span key={t} className="term-tag">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </RevealOnScroll>
    </section>
  );
};
