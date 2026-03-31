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
    <section id="projects" className="min-h-screen py-20">
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">

          <div
            className="text-xs mb-2"
            style={{
              color: 'var(--c-label)',
              fontFamily: 'JetBrains Mono',
              letterSpacing: '0.2em',
            }}
          >
            &gt; PROJECT_LOG
          </div>
          <h2
            className="text-2xl font-bold mb-8 glow"
            style={{
              color: 'var(--c-primary)',
              fontFamily: 'JetBrains Mono',
              letterSpacing: '0.1em',
            }}
          >
            FEATURED_PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="term-panel p-6 project-card">

                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span
                      className="text-xs mr-2"
                      style={{ color: 'var(--c-faint)', fontFamily: 'JetBrains Mono' }}
                    >
                      [{proj.id}]
                    </span>
                    <span
                      className="text-base font-bold glow"
                      style={{ color: 'var(--c-primary)', fontFamily: 'JetBrains Mono' }}
                    >
                      {proj.name}
                    </span>
                  </div>
                  <span
                    className="term-tag"
                    style={{
                      borderColor:
                        proj.status === 'DEPLOYED' ? 'var(--c-mid)' : 'var(--c-border)',
                      color:
                        proj.status === 'DEPLOYED' ? 'var(--c-primary)' : 'var(--c-faint)',
                    }}
                  >
                    {proj.status}
                  </span>
                </div>

                <div
                  className="text-xs mb-3"
                  style={{
                    color: 'var(--c-faint)',
                    fontFamily: 'JetBrains Mono',
                    letterSpacing: '0.08em',
                  }}
                >
                  TYPE: {proj.type}
                </div>

                <hr className="term-divider mb-3" />

                <p
                  className="text-xs mb-4 leading-relaxed"
                  style={{ color: 'var(--c-body)', fontFamily: 'JetBrains Mono' }}
                >
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.stack.map((t) => (
                    <span key={t} className="term-tag">{t}</span>
                  ))}
                </div>

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
                    className="text-xs"
                    style={{ color: 'var(--c-faint)', fontFamily: 'JetBrains Mono' }}
                  >
                    → IN_DEVELOPMENT...
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
