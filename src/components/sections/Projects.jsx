import { RevealOnScroll } from '../RevealOnScroll';

const PROJECTS = [
  {
    id: '001',
    name: 'REVIEWIT',
    type: 'FULL-STACK WEB APPLICATION',
    desc: 'A full-stack web application that allows users to review, rate, comment on, and discuss anything across flexible categories — including products, books, media, ideas, and experiences.',
    stack: ['C#', '.NET', 'TYPESCRIPT', 'REACT', 'JWT', 'POSTGRESQL', 'TAILWIND', 'AWS', 'CI/CD'],
    status: 'DEPLOYED',
    link: 'https://github.com/Chao-777/ReviewIt',
    linkLabel: 'GITHUB_REPO →',
  },
  {
    id: '002',
    name: 'EASYPARK',
    type: 'PARKING MANAGEMENT SYSTEM',
    desc: 'A parking access control system with slot management and guest token allocation for residential and commercial use.',
    stack: ['JAVASCRIPT', 'TYPESCRIPT', 'EJS', 'MYSQL', 'NODE.JS', 'BOOTSTRAP', 'CI/CD'],
    status: 'IN_DEVELOPMENT',
    link: null,
    linkLabel: null,
  },
  {
    id: '003',
    name: 'EDUCATION_MGMT_SYS',
    type: 'WEB APPLICATION',
    desc: 'Education management system with user registration, authentication, course management, and peer review assessments. Responsive UI built with Bootstrap.',
    stack: ['PHP', 'LARAVEL', 'MYSQL', 'BOOTSTRAP', 'BLADE'],
    status: 'DEPLOYED',
    link: 'https://github.com/Chao-777/Hogwarts-education-system',
    linkLabel: 'GITHUB_REPO →',
  },
  {
    id: '004',
    name: 'DRUG-SPEAK_APP',
    type: 'MOBILE APPLICATION',
    desc: 'Educational mobile app for pharmacy students to learn correct drug pronunciation. Features audio playback, speed control, voice recording, pronunciation evaluation, and student rankings.',
    stack: ['JAVASCRIPT', 'REACT_NATIVE', 'AUDIO_PROCESSING', 'AUTHENTICATION', 'BACKEND_API'],
    status: 'DEPLOYED',
    link: 'https://github.com/Chao-777/Drug-Speak',
    linkLabel: 'GITHUB_REPO →',
  },
];

export const Projects = () => {
  return (
    <section id="projects" style={{ padding: '4rem 3rem 4rem' }}>
      <RevealOnScroll>

        {/* Section header */}
        <div
          style={{
            color: 'var(--c-primary)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            marginBottom: '0.5rem',
          }}
        >
          &gt; PROJECT_LOG
        </div>
        <h2
          className="section-heading"
          style={{ marginBottom: '2.5rem' }}
        >
          FEATURED_PROJECTS
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="project-card"
              style={{
                background: 'var(--c-panel)',
                border: '1px solid var(--c-border)',
                borderRadius: '4px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span
                    style={{
                      color: 'var(--c-faint)',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.68rem',
                    }}
                  >
                    [{proj.id}]
                  </span>
                  <span
                    style={{
                      color: 'var(--c-heading)',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 700,
                    }}
                  >
                    {proj.name}
                  </span>
                </div>
                <span
                  className="term-tag"
                  style={{
                    borderRadius: '4px',
                    padding: '3px 10px',
                    color: proj.status === 'DEPLOYED' ? 'var(--c-primary)' : 'var(--c-faint)',
                    background: proj.status === 'DEPLOYED' ? 'var(--c-highlight)' : 'transparent',
                    border: `1px solid ${proj.status === 'DEPLOYED' ? 'var(--c-border)' : 'var(--c-faint)'}`,
                    flexShrink: 0,
                    marginLeft: '0.5rem',
                  }}
                >
                  {proj.status}
                </span>
              </div>

              {/* Type */}
              <div
                style={{
                  color: 'var(--c-faint)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                }}
              >
                TYPE: {proj.type}
              </div>

              <hr className="term-divider" style={{ marginBottom: '1rem' }} />

              {/* Description */}
              <p
                style={{
                  color: 'var(--c-body)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.825rem',
                  lineHeight: 1.75,
                  marginBottom: '1.25rem',
                  flex: 1,
                }}
              >
                {proj.desc}
              </p>

              {/* Stack tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {proj.stack.map((t) => (
                  <span key={t} className="term-tag">{t}</span>
                ))}
              </div>

              {/* Link */}
              {proj.link ? (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {proj.linkLabel}
                </a>
              ) : (
                <span
                  style={{
                    color: 'var(--c-faint)',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                  }}
                >
                  → IN_DEVELOPMENT...
                </span>
              )}
            </div>
          ))}
        </div>

      </RevealOnScroll>
    </section>
  );
};
