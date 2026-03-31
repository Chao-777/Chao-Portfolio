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

        {/* Education + Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="term-panel p-6">
            <SectionLabel>EDUCATION</SectionLabel>
            <div
              className="text-sm font-bold mb-1"
              style={{ color: 'var(--c-primary)', fontFamily: 'JetBrains Mono' }}
            >
              GRIFFITH_UNIVERSITY
            </div>
            <div
              className="text-xs mb-1"
              style={{ color: 'var(--c-mid)', fontFamily: 'JetBrains Mono' }}
            >
              Master of IT — Software Development &nbsp;|&nbsp; 2023–2025
            </div>
            <div
              className="text-xs mb-1"
              style={{ color: 'var(--c-label)', fontFamily: 'JetBrains Mono' }}
            >
              GPA: 6.4 / 7.0
            </div>
            <div
              className="text-xs mb-4"
              style={{ color: 'var(--c-label)', fontFamily: 'JetBrains Mono' }}
            >
              ★ Griffith Award for Academic Excellence (2024)
            </div>
            <hr className="term-divider mb-4" />
            <div
              className="text-xs mb-2"
              style={{ color: 'var(--c-label)', fontFamily: 'JetBrains Mono' }}
            >
              RELEVANT_COURSES:
            </div>
            <ul className="space-y-1.5">
              {COURSES.map((c) => (
                <li
                  key={c}
                  className="text-xs"
                  style={{ color: 'var(--c-body)', fontFamily: 'JetBrains Mono' }}
                >
                  &gt; {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="term-panel p-6">
            <SectionLabel>EXPERIENCE</SectionLabel>
            <div
              className="text-sm font-bold mb-1"
              style={{ color: 'var(--c-primary)', fontFamily: 'JetBrains Mono' }}
            >
              APYAPP
            </div>
            <div
              className="text-xs mb-1"
              style={{ color: 'var(--c-mid)', fontFamily: 'JetBrains Mono' }}
            >
              SOFTWARE_DEVELOPER_INTERN
            </div>
            <div
              className="text-xs mb-4"
              style={{ color: 'var(--c-label)', fontFamily: 'JetBrains Mono' }}
            >
              MAR_2025 — JUL_2025
            </div>
            <hr className="term-divider mb-4" />
            <ul className="space-y-2.5">
              {EXPERIENCE.map((item, i) => (
                <li
                  key={i}
                  className="text-xs"
                  style={{
                    color: 'var(--c-body)',
                    fontFamily: 'JetBrains Mono',
                    lineHeight: '1.65',
                  }}
                >
                  &gt; {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
