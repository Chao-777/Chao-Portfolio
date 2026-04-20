import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PROJECTS = [
  {
    name: 'Haninkcalli.com',
    type: 'Full Stack Web Application',
    desc: 'A browser-based Chinese calligraphy tattoo design tool featuring 12 authentic script styles, interactive 3D body placement preview, character meaning verification, and PNG/SVG export. Architected with Next.js App Router, AWS Cognito authentication, AppSync/GraphQL data layer, and deployed via AWS Amplify CI/CD.',
    stack: ['NEXT.js', 'React', 'TypeScript', 'Tailwind CSS', 'AWS', 'Three.js'],
    status: 'Deployed',
    link: 'https://github.com/Chao-777/HanInk',
    website: 'https://haninkcalli.com/',
    thumbnail: '/HanInk.png',
  },
  {
    name: 'ReviewIt',
    type: 'Full Stack Web Application',
    desc: 'A platform where users can review, rate, and discuss anything across flexible categories — products, books, media, ideas, and experiences. Features JWT authentication, role-based access, and a CI/CD deployment pipeline.',
    stack: ['C#', '.NET', 'TypeScript', 'React', 'PostgreSQL', 'Tailwind CSS', ],
    status: 'In Development',
    link: 'https://github.com/Chao-777/ReviewIt',
  },
  {
    name: 'Serverless Receipt Processing System',
    type: 'AWS Lambda Application',
    desc: 'An end-to-end serverless pipeline on AWS that automatically extracts, stores, and notifies on receipt data — zero servers, zero manual processing.',
    stack: ['Python', 'Lambda', 'DynamoDB', 'S3', 'SES'],
    status: 'Available on GitHub',
    link: 'https://github.com/Chao-777/Hogwarts-education-system',
  },
  {
    name: 'Education Management System',
    type: 'Full Stack Application',
    desc: 'Education management platform with user registration, authentication, course management, and peer review assessments. Responsive UI built with Bootstrap and Blade templates.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Blade'],
    status: 'Available on GitHub',
    link: 'https://github.com/Chao-777/Hogwarts-education-system',
  },
  {
    name: 'Drug-Speak',
    type: 'Mobile Application',
    desc: 'Educational mobile app for pharmacy students to learn correct drug pronunciation. Features audio playback, speed control, voice recording, pronunciation evaluation, and student rankings.',
    stack: ['JavaScript', 'React Native', 'Audio Processing', 'Authentication', 'Backend API'],
    status: 'Available on GitHub',
    link: 'https://github.com/Chao-777/Drug-Speak',
  },
];

export const Projects = () => {
  return (
    <section id="projects" style={{ padding: '4rem 3rem' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {PROJECTS.map((proj, i) => (
            <div key={i} className="project-card">

              {/* Thumbnail or status column */}
              <div
                style={{
                  flexShrink: 0,
                  width: '150px',
                  paddingTop: '0.2rem',
                }}
              >
            {proj.thumbnail ? (
                <> {/* <--- Start Fragment */}
                  <img
                    src={`${import.meta.env.BASE_URL}${proj.thumbnail.replace(/^\//, '')}`}
                    alt={`${proj.name} thumbnail`}
                    style={{
                      width: '160px',
                      height: '86px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      border: '2px solid var(--c-border)',
                      display: 'block',
                      marginBottom: '4px' // Added a little margin for spacing
                    }}
                  />
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
                </>
                ) : (
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
                )}
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
                  {proj.website && (
                    <a
                      href={proj.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--c-faint)', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--c-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--c-faint)')}
                      aria-label={`${proj.name} website`}
                    >
                      <FaExternalLinkAlt size={14} />
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

    </section>
  );
};
