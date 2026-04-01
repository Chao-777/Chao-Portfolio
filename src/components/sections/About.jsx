const SKILLS = {
  LANGUAGES:  ['HTML5', 'PYTHON', 'JAVASCRIPT', 'TYPESCRIPT', 'C#', 'PHP', 'CSS'],
  FRAMEWORKS: ['REACT', 'REACT_NATIVE', 'LARAVEL', 'NODE.JS', '.NET'],
  TOOLS:      ['GIT', 'GITHUB', 'MONGODB', 'POSTGRESQL', 'MYSQL', 'AWS', 'TAILWIND', 'BOOTSTRAP', 'DOCKER', 'K8S', 'ITIL'],
};

const CERTS = [
  'AWS_CERTIFIED_SOLUTIONS_ARCHITECT — ASSOCIATE',
  'AWS_CERTIFIED_CLOUD_PRACTITIONER',
];

const COURSES = [
  'Software Engineering',
  'Database Design',
  'Cloud Computing',
  'Secure Development Operations',
  'Mobile App Development',
  'Data Structures & Algorithms',
  'Web Application Development',
  'Software Testing & QA',
  'Agile Software Development',
  'ITIL Foundations',
];

const EXPERIENCE = [
  'Developed features for a parking management web app using Node.js + HTML/CSS/Bootstrap',
  'Implemented role-based access control and secure authentication for different user types',
  'Built booking and payment workflows supporting multiple properties',
  'Contributed to admin tools for managing users, properties, and transactions',
  'Collaborated using Git version control and Agile methodology',
];

const SectionLabel = ({ children }) => (
  <div
    className="text-xs mb-4"
    style={{
      color: 'var(--c-label)',
      fontFamily: 'JetBrains Mono',
      letterSpacing: '0.2em',
    }}
  >
    {children}
  </div>
);

export const About = () => {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">

        <div
          className="text-xs mb-2"
          style={{
            color: 'var(--c-label)',
            fontFamily: 'JetBrains Mono',
            letterSpacing: '0.2em',
          }}
        >
          &gt; SYSTEM_STATUS
        </div>
        <h2
          className="text-2xl font-bold mb-8 glow"
          style={{
            color: 'var(--c-primary)',
            fontFamily: 'JetBrains Mono',
            letterSpacing: '0.1em',
          }}
        >
          ABOUT_SYS
        </h2>

        {/* Intro */}
        <div className="term-panel p-6 mb-5">
          <p
            className="text-sm"
            style={{
              color: 'var(--c-body)',
              fontFamily: 'JetBrains Mono',
              lineHeight: '1.85',
            }}
          >
            &gt; Passionate software developer with a strong foundation in programming languages
            and frameworks. Focused on solving complex problems and continuously learning new
            technologies to build robust, scalable systems.
          </p>
        </div>

        {/* Skills */}
        <div className="term-panel p-6 mb-5">
          <SectionLabel>MODULE_STATUS</SectionLabel>
          <div className="space-y-4">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} className="flex flex-wrap items-start gap-x-6 gap-y-2">
                <span
                  className="text-xs shrink-0 mt-0.5"
                  style={{
                    color: 'var(--c-label)',
                    fontFamily: 'JetBrains Mono',
                    width: '110px',
                  }}
                >
                  {cat}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="term-tag">[{item}]</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="term-panel p-6 mb-5">
          <SectionLabel>CERTIFICATIONS</SectionLabel>
          <div className="space-y-2">
            {CERTS.map((cert) => (
              <div key={cert} className="cert-badge">
                <span className="glow">★</span>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="term-panel p-6 mb-5">
          <SectionLabel>EDUCATION</SectionLabel>
          <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
            <div>
              <div
                className="text-base font-bold"
                style={{ color: 'var(--c-primary)', fontFamily: 'JetBrains Mono' }}
              >
                GRIFFITH_UNIVERSITY
              </div>
              <div
                className="text-xs mt-1"
                style={{ color: 'var(--c-mid)', fontFamily: 'JetBrains Mono' }}
              >
                Master of IT — Software Development
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="term-tag" style={{ fontSize: '0.75rem', padding: '3px 10px' }}>
                2023 — 2025
              </span>
              <span
                className="text-xs"
                style={{ color: 'var(--c-label)', fontFamily: 'JetBrains Mono' }}
              >
                GPA: 6.4 / 7.0 &nbsp;|&nbsp; ★ Academic Excellence Award
              </span>
            </div>
          </div>
          <hr className="term-divider mb-3" />
          <div
            className="text-xs mb-2"
            style={{ color: 'var(--c-label)', fontFamily: 'JetBrains Mono' }}
          >
            RELEVANT_COURSES:
          </div>
          <div className="flex flex-wrap gap-2">
            {COURSES.map((c) => (
              <span key={c} className="term-tag">{c}</span>
            ))}
          </div>
        </div>

        {/* Experience — full width, prominent */}
        <div
          className="term-panel p-6 mb-5"
          style={{ borderLeft: '3px solid var(--c-primary)' }}
        >
          <SectionLabel>WORK_EXPERIENCE</SectionLabel>

          {/* Header row */}
          <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
            <div>
              <div
                className="text-xl font-bold glow mb-1"
                style={{ color: 'var(--c-primary)', fontFamily: 'JetBrains Mono' }}
              >
                APYAPP
              </div>
              <div
                className="text-sm"
                style={{ color: 'var(--c-mid)', fontFamily: 'JetBrains Mono' }}
              >
                Software Developer — Internship &nbsp;|&nbsp; Sydney (Remote)
              </div>
            </div>
            <span
              className="term-tag"
              style={{
                fontSize: '0.8rem',
                padding: '5px 14px',
                borderColor: 'var(--c-primary)',
                color: 'var(--c-primary)',
              }}
            >
              MAR 2025 — JUL 2025
            </span>
          </div>

          <hr className="term-divider mb-5" />

          {/* Bullet points — larger text */}
          <ul className="space-y-4">
            {EXPERIENCE.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm"
                style={{
                  color: 'var(--c-body)',
                  fontFamily: 'JetBrains Mono',
                  lineHeight: '1.75',
                }}
              >
                <span style={{ color: 'var(--c-primary)', flexShrink: 0 }}>&gt;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
