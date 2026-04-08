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

const cardStyle = {
  background: 'var(--c-panel)',
  border: '1px solid var(--c-border)',
  borderRadius: '4px',
  padding: '1.5rem',
  marginBottom: '1.25rem',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const sectionLabelStyle = {
  color: 'var(--c-primary)',
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '0.68rem',
  letterSpacing: '0.2em',
  marginBottom: '1rem',
};

export const About = () => {
  return (
    <section id="about" style={{ padding: '4rem 3rem 4rem' }}>

      {/* Section header */}
      <div style={{ ...sectionLabelStyle, marginBottom: '0.5rem' }}>
        &gt; SYSTEM_STATUS
      </div>
      <h2
        className="section-heading"
        style={{ marginBottom: '2.5rem' }}
      >
        ABOUT_SYS
      </h2>

      {/* Intro */}
      <div style={{ ...cardStyle }}>
        <p
          style={{
            color: 'var(--c-body)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
            lineHeight: 1.85,
            margin: 0,
          }}
        >
          &gt; Passionate software developer with a strong foundation in programming languages
          and frameworks. Focused on solving complex problems and continuously learning new
          technologies to build robust, scalable systems.
        </p>
      </div>

      {/* Skills */}
      <div style={{ ...cardStyle }}>
        <div style={sectionLabelStyle}>MODULE_STATUS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '0 1.5rem' }}>
              <span
                style={{
                  color: 'var(--c-faint)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.68rem',
                  letterSpacing: '0.08em',
                  flexShrink: 0,
                  width: '100px',
                  paddingTop: '4px',
                }}
              >
                {cat}:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', flex: 1 }}>
                {items.map((item) => (
                  <span key={item} className="term-tag">[{item}]</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div style={{ ...cardStyle }}>
        <div style={sectionLabelStyle}>CERTIFICATIONS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {CERTS.map((cert) => (
            <div key={cert} className="cert-badge">
              <span style={{ color: 'var(--c-primary)', flexShrink: 0 }}>★</span>
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div style={{ ...cardStyle }}>
        <div style={sectionLabelStyle}>EDUCATION</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <div
              style={{
                color: 'var(--c-heading)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '0.3rem',
              }}
            >
              GRIFFITH_UNIVERSITY
            </div>
            <div
              style={{
                color: 'var(--c-body)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
              }}
            >
              Master of IT — Software Development
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
            <span className="term-tag" style={{ fontSize: '0.72rem', padding: '4px 12px' }}>
              2023 — 2025
            </span>
            <span
              style={{
                color: 'var(--c-faint)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
              }}
            >
              GPA: 6.4 / 7.0 &nbsp;|&nbsp; ★ Academic Excellence Award
            </span>
          </div>
        </div>
        <hr className="term-divider" style={{ marginBottom: '1.25rem' }} />
        <div
          style={{
            color: 'var(--c-faint)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            marginBottom: '0.75rem',
          }}
        >
          RELEVANT_COURSES:
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {COURSES.map((c) => (
            <span key={c} className="term-tag">{c}</span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div
        style={{
          ...cardStyle,
          borderLeft: '2px solid var(--c-primary)',
          marginBottom: 0,
        }}
      >
        <div style={sectionLabelStyle}>WORK_EXPERIENCE</div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <div
              style={{
                color: 'var(--c-heading)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: '0.3rem',
              }}
            >
              APYAPP
            </div>
            <div
              style={{
                color: 'var(--c-body)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
              }}
            >
              Software Developer — Internship &nbsp;|&nbsp; Sydney (Remote)
            </div>
          </div>
          <span
            className="term-tag"
            style={{
              fontSize: '0.75rem',
              padding: '5px 14px',
              borderRadius: '4px',
              border: '1px solid var(--c-primary)',
            }}
          >
            MAR 2025 — JUL 2025
          </span>
        </div>

        <hr className="term-divider" style={{ marginBottom: '1.25rem' }} />

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {EXPERIENCE.map((item, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                gap: '0.75rem',
                color: 'var(--c-body)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                lineHeight: 1.75,
              }}
            >
              <span style={{ color: 'var(--c-primary)', flexShrink: 0, marginTop: '0.1rem' }}>▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
};
